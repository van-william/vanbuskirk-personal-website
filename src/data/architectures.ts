import { ArchitectureDiagram } from "@/types/architecture";

export const architectureDiagrams: ArchitectureDiagram[] = [
  {
    id: "cloud-api-architecture",
    title: "Cloud API Architecture",
    description: "A scalable cloud-based API architecture with load balancing and caching",
    slug: "cloud-api-architecture",
    tags: ["cloud", "api", "architecture", "aws"],
    mermaid: `graph TD
    subgraph API Layer
      LB["fa:fa-balance-scale ELB"]
      Gateway["fa:fa-network-wired API Gateway"]
      Cache["fa:fa-memory ElastiCache"]
    end

    subgraph Services
      SvcA["fa:fa-bolt Lambda A"]
      SvcB["fa:fa-bolt Lambda B"]
      SvcC["fa:fa-bolt Lambda C"]
    end

    subgraph Data Layer
      DB["fa:fa-database RDS"]
    end

    Client(("fa:fa-user Client")) --> LB
    LB --> Gateway
    Gateway --> SvcA
    Gateway --> SvcB
    Gateway --> SvcC
    SvcA --> DB
    SvcB --> DB
    SvcC --> DB
    Cache --> Gateway

    classDef aws fill:#232F3E,stroke:#FF9900,color:#FF9900,stroke-width:2px;
    classDef client fill:#3F4F4F,stroke:#d3d3d3,color:white;
    class LB,Gateway,SvcA,SvcB,SvcC,DB,Cache aws;
    class Client client;`,
    annotations: `## AWS Architecture Overview

This diagram illustrates a modern cloud API architecture using AWS services:

- **Elastic Load Balancer**: Distributes incoming HTTPS traffic
- **API Gateway**: Handles routing, authentication, and rate limiting
- **Lambda Functions**: Serverless microservices for business logic
- **RDS**: Managed relational database for persistent storage
- **ElastiCache**: In-memory caching for performance optimization

### Key Features
- Serverless compute with AWS Lambda
- Managed database with RDS
- In-memory caching with ElastiCache
- API management with API Gateway
- Load balancing with ELB`
  },
  {
    id: "event-driven-architecture",
    title: "Event-Driven Architecture",
    description: "A distributed system using event-driven communication patterns",
    slug: "event-driven-architecture",
    tags: ["events", "messaging", "architecture", "aws"],
    mermaid: `architecture-beta
group api(logos:aws-lambda)[API Layer]
service producer(logos:aws-lambda)[Producer] in api
service bus(logos:aws-eventbridge)[EventBridge] in api
service consumer(logos:aws-lambda)[Consumer] in api

group data(logos:aws-dynamodb)[Storage]
service db(logos:aws-dynamodb)[DynamoDB] in data

producer:R -- L:bus
bus:R -- L:consumer
consumer:R -- L:db`,
    annotations: `## AWS Event-Driven System

This architecture demonstrates an event-driven system using AWS services:

- **Lambda**: Serverless functions for producers and consumers
- **EventBridge**: Serverless event bus for message routing
- **DynamoDB**: NoSQL database for event data storage

### Benefits
- Serverless event processing
- Managed message routing
- Scalable NoSQL storage
- Pay-per-use pricing model`
  },
  {
    id: "data-pipeline-architecture",
    title: "Data Processing Pipeline",
    description: "A scalable data ingestion and processing pipeline for IoT sensor data using AWS services",
    slug: "data-pipeline-architecture",
    tags: ["data", "iot", "pipeline", "aws", "analytics"],
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
    annotations: `## Data Pipeline Architecture

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
  },
  {
    id: "iceberg-architecture",
    title: "Iceberg Pipeline",
    description: "A scalable data ingestion and processing pipeline for IoT sensor data using AWS services",
    slug: "iceberg-architecture",
    tags: ["data", "iot", "pipeline", "aws", "analytics"],
    mermaid: `architecture-beta
    graph Data Sources
    A1[Streaming Data - Kafka/Kinesis]
    A2[Batch Data - S3, RDS, etc.]
  end

  subgraph Streaming Pipeline
    B1[Kinesis Data Streams]
    B2[AWS Lambda / Kinesis Data Firehose]
    B3[Apache Flink on Kinesis / EMR]
    B4[Write to Iceberg Table - via Apache Flink Connector]
  end

  subgraph Batch Pipeline
    C1[AWS Glue / EMR]
    C2[ETL Jobs: Transform/Partition]
    C3[Write to Iceberg Table - via Spark or AWS Glue]
  end

  subgraph Iceberg Storage
    D1[S3 - Iceberg Table Storage]
    D2[AWS Glue Catalog / Hive Metastore - Metadata]
  end

  A1 --> B1 --> B2 --> B3 --> B4
  A2 --> C1 --> C2 --> C3

  B4 --> D1
  C3 --> D1

  D1 --> D2

    classDef aws fill:#232F3E,stroke:#FF9900,color:#FF9900,stroke-width:2px;
    class IoT,Stream,Lambda,Firehose,S3,Redshift,Athena,QuickSight,CloudWatch aws;`,
    annotations: `## Data Pipeline Architecture

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
  }
]; 