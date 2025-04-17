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
  diagram: {
    type: "image",
    url: "/architecture/cloud-api-arch.png",
    alt: "Cloud API architecture diagram showing load balancer, API gateway, Lambda functions, and database components"
  },
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