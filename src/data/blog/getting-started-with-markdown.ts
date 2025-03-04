
import { BlogPost } from "@/utils/markdown";

export const post: BlogPost = {
  id: "1",
  title: "Getting Started with Markdown",
  slug: "getting-started-with-markdown",
  date: "2023-06-15",
  excerpt: "Learn the basics of Markdown syntax for creating elegant and readable content.",
  coverImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  tags: ["markdown", "writing", "tutorial"],
  content: `
# Getting Started with Markdown

Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. Created by John Gruber in 2004, Markdown is now one of the world's most popular markup languages.

## Why Use Markdown?

- **Simplicity**: The syntax is straightforward and easy to learn
- **Platform Independent**: Files can be opened with virtually any application
- **Future Proof**: Even if your application stops working, you can read the raw file
- **Versatility**: Used for websites, documents, notes, books, presentations, and more

## Basic Syntax

### Headers

You can create headers using the hash symbol (#). The number of hash symbols indicates the level of the header:

\`\`\`
# Header 1
## Header 2
### Header 3
\`\`\`

### Emphasis

To create italic text, surround the text with single asterisks or underscores:

\`\`\`
*This text will be italic*
_This will also be italic_
\`\`\`

For bold text, use double asterisks or underscores:

\`\`\`
**This text will be bold**
__This will also be bold__
\`\`\`

### Lists

You can create unordered lists using asterisks, pluses, or hyphens:

\`\`\`
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
\`\`\`

For ordered lists, use numbers:

\`\`\`
1. First item
2. Second item
3. Third item
\`\`\`

### Links

Creating links is easy with this format:

\`\`\`
[Link text](URL)
\`\`\`

For example: [Google](https://www.google.com)

### Images

Images are similar to links but with an exclamation mark at the beginning:

\`\`\`
![Alt text](image URL)
\`\`\`

## Conclusion

Markdown is a powerful yet simple tool for creating formatted content. With just a few simple syntax rules, you can create well-structured documents that are easy to read and write.

Start using Markdown today for your documentation, notes, or website content, and you'll quickly appreciate its elegance and simplicity.
`,
};
