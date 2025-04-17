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
  mermaid: `graph LR
    subgraph Ingestion
      IoT["fa:fa-microchip IoT Core"]
      Stream["fa:fa-stream Kinesis"]
      Lambda["fa:fa-bolt Lambda"]
      Firehose["fa:fa-fire Firehose"]
    end

    subgraph Storage
      S3["fa:fa-archive S3"]
      Redshift["fa:fa-database Redshift"]
    end

    subgraph Analytics
      Athena["fa:fa-search Athena"]
      QuickSight["fa:fa-chart-bar QuickSight"]
    end

    subgraph Monitoring
      CloudWatch["fa:fa-chart-line CloudWatch"]
    end

    IoT -->|Ingest| Stream
    Stream -->|Process| Lambda
    Lambda -->|Transform| Firehose
    Firehose -->|Archive| S3
    Firehose -->|Load| Redshift
    S3 -->|Query| Athena
    Redshift -->|Visualize| QuickSight
    
    CloudWatch -.->|Monitor| Lambda
    CloudWatch -.->|Monitor| Stream
    CloudWatch -.->|Monitor| Firehose

    classDef aws fill:#232F3E,stroke:#FF9900,color:#FF9900,stroke-width:2px;
    class IoT,Stream,Lambda,Firehose,S3,Redshift,Athena,QuickSight,CloudWatch aws;`,
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