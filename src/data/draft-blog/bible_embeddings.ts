import { BlogPost } from "@/utils/markdown";

export const post: BlogPost = {
  id: "bible-embeddings-neo4j-2025",
  title: "Bible Embeddings: From Vector Search to Cross-Testament Insights",
  slug: "bible-embeddings-vector-search-cross-testament-insights",
  date: "2025-08-21",
  excerpt: "Generating embeddings for the Bible, loading them into Neon with pgvector, and exploring patterns with clustering, heatmaps, and graph relationships.",
  coverImage: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
  tags: ["analytics", "python", "embeddings", "postgres", "neo4j"],
  content: `
# Bible Embeddings: From Vector Search to Cross-Testament Insights

This post documents an end-to-end pipeline for **chunking the Bible**, generating **vector embeddings** with Google’s \`text-embedding-004\`, loading everything into **Neon Postgres (pgvector)**, and running **analysis + visualizations** (t-SNE/UMAP, heatmaps, chapter dynamics, author/genre groupings, and a graph of "fulfills" edges). It includes **how to run** it, **what it produces**, and **what we learned**.

> Generated analysis date: **2025-07-10** (from the results output)

---

## What We Built (Quick Tour)

- **Chunking strategy**:
  - \`chapter_chunks\`: one embedding per chapter (book, chapter, verse count, references, testament)
  - \`book_chunks\`: one embedding per book (split where needed)
- **Embeddings**: Google \`text-embedding-004\` (768-dim vectors)
- **Storage**: Neon Postgres + \`pgvector\` for similarity search
- **Analysis**: clustering (t-SNE/UMAP), heatmaps for categories/testaments, chapter progression
- **Optional Graph**: Neo4j to model \`FULFILLS\` relationships between OT and NT

---

## How to Reproduce

### 1) Environment & Dependencies

Using **uv** for Python env management.

\`\`\`bash
# Install uv
curl -LsSf https://astral.sh/uv/install.sh | sh

# Sync dependencies (from pyproject.toml)
uv sync
\`\`\`

Create a **.env** with:

\`\`\`
VITE_GEMINI_API_KEY=your_gemini_api_key
DATABASE_URL=your_neon_database_url
\`\`\`

### 2) Sanity Check

\`\`\`bash
uv run python test_bible_setup.py
\`\`\`

### 3) Build Embeddings & Load to Neon

\`\`\`bash
uv run python bible_embeddings.py
\`\`\`

Creates tables:

- **chapter_chunks**: \`id, content, embedding (vector), book, chapter, verse_count, verse_references, testament, created_at\`
- **book_chunks**: \`id, content, embedding, book, part, testament, created_at\`

### 4) Enhanced Analysis (Figures + Reports)

\`\`\`bash
uv run python clean_bible_analysis.py
\`\`\`

Outputs to \`results/\`:
- \`images/\` (PNGs)
- \`reports/\` (Markdown)
- \`data/\` (CSV/JSON)
- \`interactive_bible_analysis.html\` (optional interactive)

### 5) Interactive (Optional)

\`\`\`bash
uv run marimo edit marimo_notebooks/bible_interactive_analysis.py
\`\`\`

---

## Example Queries (pgvector on Neon)

**Find similar chapters** to a query vector (assume parameter binding for the vector):

\`\`\`sql
SELECT book, chapter, verse_count
FROM chapter_chunks
ORDER BY embedding <-> $1
LIMIT 5;
\`\`\`

**Find similar books**:

\`\`\`sql
SELECT book, testament
FROM book_chunks
ORDER BY embedding <-> $1
LIMIT 10;
\`\`\`

Where **\`$1\`** is a 768-D float vector from the same model (\`text-embedding-004\`).

---

## Dataset Overview

- **Books**: 66 (OT: 39, NT: 27)
- **Chapters**: 1,189
- **Verses**: 31,086

_Source: analysis report generated from Neon database (single source of truth)._

---

## Visualizations (Placeholders)

> Replace these with your generated files (e.g., \`results/images/...\`). Paths below are placeholders that match your site's blog image convention.

### 1) Book Embeddings (t-SNE)
![t-SNE Clusters](../blog_images/bible_embeddings/tsne_clusters.webp)

**Takeaway**: Natural clusters emerge at the book level. Related genres and authors tend to map close together.

### 2) Category Similarity Heatmap
![Category Similarities](../blog_images/bible_embeddings/category_similarity.webp)

**Takeaway**: Strong intra-category cohesion (e.g., Gospels, Torah, Major Prophets), with notable cross-links (e.g., Prophets ↔ Revelation/Gospels).

### 3) Cross-Testament Heatmap
![Cross-Testament Heatmap](../blog_images/bible_embeddings/cross_testament_heatmap.webp)

**Takeaway**: A surprising amount of **continuity** across testaments; certain OT books are highly proximous to NT apocalyptic and gospel texts.

### 4) Chapter-Level Dynamics
![Chapter Analysis](../blog_images/bible_embeddings/chapter_progression.webp)

**Takeaway**: Within many books, chapter embeddings trace coherent arcs—narrative or argumentation flows appear as smooth trajectories.

### 5) Author Groupings
![Author Analysis](../blog_images/bible_embeddings/author_groups.webp)

**Takeaway**: Traditional attributions (e.g., Pauline epistles) cluster tightly, supporting stylistic/thematic consistency signals in the embeddings.

### 6) Literary Genres
![Genre Analysis](../blog_images/bible_embeddings/genre_groups.webp)

**Takeaway**: Genre signals (Law, Wisdom, Prophets, Gospels, Epistles, Apocalyptic) are pronounced, with Poetry/Wisdom showing unique spread.

---

## Results Highlights

### Top Cross-Testament Similarities

These OT↔NT pairs showed the **highest cosine similarity**:

1. **Daniel** ↔ **Revelation** — \`0.863\`
2. **Ezekiel** ↔ **Revelation** — \`0.859\`
3. **Isaiah** ↔ **Revelation** — \`0.850\`
4. **Ezekiel** ↔ **Matthew** — \`0.848\`
5. **Ezekiel** ↔ **Luke** — \`0.844\`
6. **Isaiah** ↔ **Matthew** — \`0.840\`
7. **Genesis** ↔ **Matthew** — \`0.835\`
8. **1 Kings** ↔ **Luke** — \`0.834\`
9. **Jeremiah** ↔ **Matthew** — \`0.833\`
10. **Isaiah** ↔ **Luke** — \`0.832\`

**Interpretation**: Apocalyptic and prophetic books align semantically with Revelation and the Gospels (kingdom, judgment, messianic themes), while Genesis links with gospel proclamation motifs (creation, fall, promise, genealogy).

### Example: Genesis Proximity (Top OT neighbors)

- **Judges** — \`0.891\`
- **Joshua** — \`0.881\`
- **Exodus** — \`0.880\`
- **Numbers** — \`0.879\`
- **Deuteronomy** — \`0.873\`

**Interpretation**: Torah + early historical books share strong thematic/stylistic affinity—creation/covenant/foundation narratives remain proximate to conquest/judges cycles.

---

## Data Exports (for Reuse)

- \`results/data/book_analysis.csv\` — Book metadata + categories
- \`results/data/chapter_analysis.csv\` — Chapter-level embeddings/stats
- \`results/data/book_similarities.csv\` — Book×Book cosine matrix
- \`results/data/book_categories.json\` — Category definitions

---

## Technical Notes

- **Model**: Google \`text-embedding-004\` (768D)
- **Similarity**: Cosine distance (\`<->\` in pgvector)
- **Clustering**: t-SNE/UMAP on book/chapter embeddings
- **Schema**:
  - \`chapter_chunks\` (one row per chapter, with references & testament)
  - \`book_chunks\` (one row per book or split part)
- **Infra**:
  - Neon Postgres + \`pgvector\`
  - Optional Neo4j graph for \`FULFILLS\` edges

---

## (Optional) Graph: Fulfillment Edges

If you want to visualize **OT→NT fulfillment** relationships in Neo4j:

\`\`\`bash
# Build CSVs
uv run python graph/ingest/build_fulfills.py

# Copy to Neo4j import (example: docker container named bible_neo4j)
cp results/graph/csv/fulfills_edges.csv graph/import/csv/
docker cp graph/import/csv/fulfills_edges.csv bible_neo4j:/var/lib/neo4j/import/csv/

# Load via Cypher
docker exec bible_neo4j cypher-shell -u neo4j -p password -f /var/lib/neo4j/import/load_csv.cypher | cat
\`\`\`

Quick check:

\`\`\`bash
docker exec bible_neo4j cypher-shell -u neo4j -p password "MATCH ()-[r:FULFILLS]->() RETURN count(r);" | cat
\`\`\`

---

## Closing Thoughts

Embedding the entire Bible surfaces **coherent literary and theological structures**:
- Genre and authorship signals appear in compact clusters.
- Cross-testament proximity is real and non-trivial (especially Prophets ↔ Revelation/Gospels).
- Chapter-level trajectories hint at narrative and rhetorical arcs.

Next steps I’m exploring:
- Retrieval-augmented search with \`chapter_chunks\`
- Wider graph schemas (people/places/themes) with embedded similarity
- Side-by-side pericope alignment (semantic "parallel passages")

> Repo links and final images will be added here once I publish the artifacts.

`,
};
