
import { BlogPost } from "@/utils/markdown";

export const post: BlogPost = {
  id: "2",
  title: "The Bible Meets Natural Language Processing",
  slug: "bible-meets-natural-language-processing",
  date: "2023-01-15",
  excerpt: "Analyzing biblical passages with BERT",
  coverImage: "https://images.unsplash.com/photo-1610385983502-60bf9b402a4e",
  tags: ["analytics", "python"],
  content: `
# The Bible Meets Natural Language Processing

### Natural Language Processing (NLP) is getting easier with Transformers
With more traditional models, NLP would require preprocessing such as stemming, lemmatizing, and removal of stopwords. After this preprocessing, ngrams or tfidf (Term Frequency — Inverse Document Frequency) could be used to analyze trends in the text.

With Hugging Face Transformers, you can bypass a lot of this granular preprocessing. Large language models (LLMs) such as BERT can intuit insights in the text (Not all; data cleanliness is still important though)

### Project Opportunity
Overall, I wanted to do the following with transformers:

1. Data Engineering: Read in the Bible as a text file and parse each verse
2. Transformers Inference: Perform sentiment analysis on each verse
3. Data Analytics: Aggregate the verse sentiment on a chapter level or rolling average
4. Data Visualization: Visualize the sentiment trends across different books

Here’s the GitHub if you want to follow along:
[Bible Meets Natural Language Processing](https://github.com/van-william/bible-nlp-analysis)

### Environment: AWS Sagemaker Studio Lab
Before diving into the code, I wanted to give some brief context on my development environment: I am using Sagemaker Studio Lab — Jupyter Lab as the development environment. This is a free development lab completely separate from an AWS account. This comes with free storage and compute and pre-packaged conda environments to get started quickly.
[AWS Sagemaker Lab](http://studiolab.sagemaker.aws/)

### Data Engineering: Read in the Bible as a text file and parse each verse
For reading the bible as text, I chose the Berean Translation as it has free licensing with generous permissions.

[Berean Bible](https://berean.bible)


\`\`\`python
bible_url = 'https://bereanbible.com/bsb.txt'
with open('./data/bereanbible.txt', 'r') as f:
    text = f.read()
response = requests.get(bible_url)
raw_bible = response.text
bible_list = raw_bible.splitlines()
bible_array = np.array([item.split('\t') for item in bible_list])

def printable_string(text):
    filtered_string = ''.join(s for s in text if s in string.printable)
    return filtered_string
  
bible_array[:, 1] = np.array([printable_string(verse) for verse in bible_array[:, 1]])

df = pd.DataFrame(bible_array[3:, :], columns=['reference','text'])
\`\`\`


### Text Extraction
After the bible array is created, this is transformed into a pandas dataframe where each verse is a separate row. Finally, I perform some simple preprocessing to later easily aggregate insights by book or chapter.

\`\`\`python
def book_split(text):
    book = text.split(' ')
    return ' '.join(book[0:len(book)-1])


def chapter_split(text):
    reference_list = text.split(' ')
    chapter_verse = reference_list[-1].split(':')
    return int(chapter_verse[0])

df['chapter'] = df['reference'].apply(chapter_split)
df['book'] = df['reference'].apply(book_split)
df['testament'] = df['book'].apply(lambda x: 'OT' if x in BOOKS_OLD_TESTAMENT else 'NT')
\`\`\`

### Text Preprocessing
Transformers Inference: Perform Sentiment Analysis on the Text
Now for the fun part! We have our data in a clean pandas dataframe, and we’re ready to start using transformers and sentiment models with LLMs.

If you don’t select a model and just call pipeline(“sentiment_analysis”), the hugging face transformer defaults to the BERT model (More information here). An example output of the BERT model is shown below:

\`\`\`python
{'label': 'POSITIVE', 'score': 0.9597199559211731}
\`\`\`

The model returns a dictionary object with the label (Positive or Negative) and the score (Confidence of the label).

I use the function sentiment_score_weight to translate the label and score into a continuous variable. It’s simply the score multiplied by -1 if the label is negative and the score as is if the label is positive. This will later allow me to calculate the rolling average and other aggregates with the sentiment output.

\`\`\`python
import pandas as pd
import numpy as np
from transformers import pipeline

def sentiment_score_weight(sentiment):
    label = sentiment['label']
    score = float(sentiment['score'])
    label_value = 1 if label == 'POSITIVE' else -1
    weighted_score = label_value*score
    return weighted_score

sentiment_pipeline = pipeline("sentiment-analysis")
text = list(df['text'])
sentiment_output = sentiment_pipeline(text)
df['sentiment'] = sentiment_output
df['weighted_score'] = df['sentiment'].apply(lambda x: sentiment_score_weight(sentiment=x))
df.head()
\`\`\`

### Data Analytics: Aggregate the verse sentiment on a chapter level or rolling average
Once the sentiment analysis has been performed, we need to perform some type of aggregation — otherwise, the data is too noisy for any insights. See below on a visualization of the raw data for the Gospels (Matthew, Mark, Luke, and John)

Raw Sentiment Visualized for Four Books (Matthew, Mark, Luke, and John)
![sentiment analysis](../blog_images/bible_meets_nlp/sentiment_raw_output.webp)
Initially, we can try a chapter-based aggregation for simplicity:

\`\`\`python
df_chapters = df[['book', 'chapter', 'weighted_score']].groupby(['book','chapter']).mean()
df_chapters = df_chapters.reset_index()
\`\`\`

These two lines of code create a new dataframe by aggregating the average sentiment score by chapter. I then use reset_index() to maintain the book and chapter number as columns instead of an index.

Beyond simple chapter-based aggregations, we can also look into moving averages:

\`\`\`python
df_rolling = df.groupby('book').rolling(25)['weighted_score'].mean().reset_index()
df_rolling = df_rolling.dropna()
df_rolling['counter'] = df_rolling.groupby(['book']).cumcount()
\`\`\`

In the example above, I'm using a rolling window of 25 verses to calculate the moving average.

Data Visualization: Visualize the sentiment trends across different books
Now that we have the data cleaned up and aggregated, we can think through different visualizations. One of my motives for this analysis was to attempt to graphically visualize the narrative flow of the bible. From this, I made some visuals comparing the sentiment fluctuations of the four gospels: Matthew, Mark, Luke, and John.


Narrative Flow Visual for the Four Gospels
![sentiment analysis](../blog_images/bible_meets_nlp/narrative_flow_bible.webp)
The code for this visualization is shown below:

\`\`\`python
import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd

fig, ax = plt.subplots(figsize=(15, 5))
sns.lineplot(ax=ax, data=df_chapters, hue='book', linewidth=3, x='chapter', y='weighted_score')
plt.xlabel("Chapter #")
plt.ylabel("Avg. Sentiment")
plt.title("Gospels Analysis - Avg. Sentiment by Chapter\n(Higher Values are Positive Sentiment; Lower Values are Negative Sentiment)")
plt.show(fig)
\`\`\`

To create the visual for the moving average aggregation, I use similar code with the moving average aggregated dataframe. Note that the x-axis does not make as much sense as it’s the index of the moving average, so I removed it from view.
![sentiment analysis](../blog_images/bible_meets_nlp/moving_average.webp)

### Conclusion and Next Steps
There are many other opportunities for natural language processing, but this initial start shows how hugging face transformer pipelines can streamline a lot of the code. Some next steps would be to contain the code within a pipeline such as Kedro, further analyzing the text sentiment, and experimenting with additional LLMs such as GPT-3 for text summarization.
`,
};
