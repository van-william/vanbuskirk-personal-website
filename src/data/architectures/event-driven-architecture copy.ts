export const architecture = {
  metadata: {
    title: "Event-Driven Architecture TEST",
    description: "A distributed system using event-driven communication patterns",
    slug: "event-driven-architecture",
    tags: ["events", "messaging", "architecture", "aws"],
    date: "2024-03-20",
    lastUpdated: "2024-03-20",
    complexity: "intermediate",
    relatedArchitectures: ["cloud-api-architecture"]
  },
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
  markdown: `## AWS Event-Driven System

This architecture demonstrates an event-driven system using AWS services:

- **Lambda**: Serverless functions for producers and consumers
- **EventBridge**: Serverless event bus for message routing
- **DynamoDB**: NoSQL database for event data storage

### Benefits
- Serverless event processing
- Managed message routing
- Scalable NoSQL storage
- Pay-per-use pricing model`
}; 