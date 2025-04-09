
import { BlogPost } from "@/utils/markdown";

export const post: BlogPost = {
  id: "4",
  title: "Databricks with REST APIs",
  slug: "databricks-rest-api-etl",
  date: "2025-03-25",
  excerpt: "Properly using metadata for data transformations enables repetable workflows with the right context",
  coverImage: "https://plus.unsplash.com/premium_photo-1684341008404-af4df3d54615",
  tags: ["python", "spark"],
  content: `

  # Overview

  # Basics of Databricks and REST APIs


  \`\`\`python
s3_path = "s3://hannover-messe-tulip/iot-sitewise/raw/*/*/*/*/*.avro"  # May fail
df = spark.read.format("avro").load(s3_path)
\`\`\`



  # Scalable ETL with REST APIs

  # Tulip Interfaces Example

  # Conclusion

`,
};
