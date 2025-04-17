export const architecture = {
  metadata: {
    title: "Iceberg Pipeline",
    description: "A scalable data ingestion and processing pipeline for IoT sensor data using AWS services",
    tags: ["data", "iot", "pipeline", "aws", "analytics"],
    date: "2024-03-20",
    lastUpdated: "2024-03-20",
    complexity: "advanced",
    relatedArchitectures: ["data-pipeline-architecture"]
  },
  diagram: {
    type: "image",
    url: "/architecture/chinese-garden.jpg",
    alt: "Iceberg data pipeline architecture showing data sources, processing layers, and storage components"
  },
  markdown: `## Iceberg Data Pipeline Architecture

This architecture demonstrates a modern data lake architecture using Apache Iceberg:

- **Data Sources**: Support for both streaming and batch data ingestion
- **Streaming Pipeline**: Real-time data processing with Kinesis and Flink
- **Batch Pipeline**: ETL processing with AWS Glue and EMR
- **Iceberg Storage**: Open table format for data lake storage

### Key Features
- Unified batch and streaming processing
- Schema evolution support
- Time travel capabilities
- ACID transactions
- Partition evolution

### Use Cases
- Data lake modernization
- Real-time analytics
- Machine learning pipelines
- Data warehousing
- Data governance`
}; 