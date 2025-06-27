export const architecture = {
  metadata: {
    title: "Simple UNS (Unified Namespace)",
    description: "UNS with MING (MQTT, InfluxDB, Node-RED, Grafana) Components",
    tags: ["cloud", "api", "architecture", "aws"],
    date: "2024-03-20",
    lastUpdated: "2024-03-20",
    complexity: "easy",
    relatedArchitectures: ""
  },
  diagram: {
    type: "image",
    url: "/architecture/ming_stack_uns.png",
    alt: "MING Stack Example"
  },
  markdown: `# Simple UNS (Unified Namespace) Stack

*This architecture is a simple example of how to use the UNS (Unified Namespace) with MING (MQTT, InfluxDB, Node-RED, Grafana) components*

## Why This Architecture?

**The architecture serves multiple purposes:**

### Edge Processing

Some data requires immediate processing at the edge, which can be accomplished using Node-Red. This can enable everything from analytics at the edge to simple aggregations to limit the need to stream all data received directly to the cloud. Streaming everything directly to the cloud is not only expensive but can also add confusion to data source of truth as batch processing may be required to clean up the raw data streamed directly to the cloud.

### Production Integration

The sensor data then streams to a production app platform (Tulip) where operators can:
- Add context to machine data
- Use machine insights alongside manual tasks

This addresses the age-old issue with pure play machine monitoring without any context. The Plant Manager may view an asset uptime dashboard and then immediately ask, "Well, these machines that are down... are they supposed to be down? Who's supposed to be running these machines? etc." Contextualizing machine (In this case, fan) data with operator and system data is crucial to not only add much needed context but also to enable others to interact with the data.

### Long-term Storage and Analytics

Data is also stored in InfluxDB for time series analysis. With this architecture, the cleaned up data is stored in InfluxDB as a cloud historian. Tools such as PowerBI, Grafana, Tableau, and others can be used for Business Intelligence. Beyond this, the data can also be easily accessed via InfluxDB's REST API for simple python-based exploratory data analytics.

### Scalable Integrations

This is a big one; using a common protocol enables ease of adding more systems and devices instead of requiring lots of middleware and protocol translation. In this architecture, all the data is accessible via MQTT. To further bolster scalability, Kafka could be used as a protocol translation mechanism to enable queueing, streaming analytics, and other use cases.`
}; 