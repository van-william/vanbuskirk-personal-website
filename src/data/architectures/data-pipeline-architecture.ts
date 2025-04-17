export const architecture = {
  metadata: {
    title: "Data Processing Pipeline",
    description: "A scalable data ingestion and processing pipeline for IoT sensor data using AWS services",
    slug: "data-pipeline-architecture",
    tags: ["data", "iot", "pipeline", "aws", "analytics"],
    date: "2024-03-20",
    lastUpdated: "2024-03-20",
    complexity: "advanced",
    relatedArchitectures: ["iceberg-architecture"]
  },
  diagram: {
    type: "image",
    url: "/architecture/chinese-garden.jpg",
    alt: "Data pipeline architecture showing IoT Core, Kinesis, Lambda, and analytics components"
  },
  markdown: `## Data Pipeline Architecture

This architecture demonstrates a complete data processing pipeline for IoT sensor data:

- **IoT Core**: Manages device connectivity and data ingestion
- **Kinesis**: Real-time data streaming and buffering
- **Lambda**: Serverless data transformation and enrichment
- **Firehose**: Managed data delivery to storage
- **S3**: Object storage for data lake
- **Redshift**: Data warehouse for structured analytics
- **Athena**: SQL queries on S3 data
- **QuickSight**: Business intelligence and visualization
- **CloudWatch**: Monitoring and alerting

### Key Features
- Real-time data ingestion
- Serverless data processing
- Automated data delivery
- Multiple analytics options
- End-to-end monitoring

### Use Cases
- Industrial IoT monitoring
- Sensor data analytics
- Time-series analysis
- Business intelligence`
}; 