export const architecture = {
  metadata: {
    title: "Cloud API Architecture",
    description: "A scalable cloud-based API architecture with load balancing and caching",
    tags: ["cloud", "api", "architecture", "aws"],
    date: "2024-03-20",
    lastUpdated: "2024-03-20",
    complexity: "intermediate",
    relatedArchitectures: ["event-driven-architecture"]
  },
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
  markdown: `## AWS Architecture Overview

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
}; 