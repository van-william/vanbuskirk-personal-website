export const architecture = {
  metadata: {
    title: "Event-Driven Architecture",
    description: "A distributed system using event-driven communication patterns",
    tags: ["events", "messaging", "architecture", "aws"],
    date: "2024-03-20",
    lastUpdated: "2024-03-20",
    complexity: "intermediate",
    relatedArchitectures: ["cloud-api-architecture"]
  },
  diagram: {
    type: "image",
    url: "/architecture/chinese-garden.jpg",
    alt: "Event-driven architecture diagram showing Lambda producers, EventBridge, consumers, and DynamoDB"
  },
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