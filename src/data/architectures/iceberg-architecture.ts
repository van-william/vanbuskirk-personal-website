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
  mermaid: `architecture-beta
group sources[Data Sources]
service stream[Streaming] in sources
service batch[Batch] in sources

group processing[Processing]
service kinesis[Kinesis] in processing
service lambda[Lambda] in processing
service flink[Flink] in processing

group storage[Storage]
service s3[S3] in storage
service catalog[Catalog] in storage

stream:R -- L:kinesis
batch:R -- L:lambda
kinesis:R -- L:flink
lambda:R -- L:flink
flink:R -- L:s3
s3:R -- L:catalog`,
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