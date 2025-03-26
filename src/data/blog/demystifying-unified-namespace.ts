
import { BlogPost } from "@/utils/markdown";

export const post: BlogPost = {
  id: "4",
  title: "Demystifying Unified Namespace (UNS)",
  slug: "demystifying-unified-namespace",
  date: "2024-10-27",
  excerpt: "Building a household machine monitoring demo",
  coverImage: "https://images.unsplash.com/photo-1625571705670-38fc39c923ba",
  tags: ["analytics", "python", "IoT"],
  content: `
# Demystifying Unified Namespace (UNS)

## Structure and Purpose

Building a Unified Namespace for simple home automation may seem like overkill, but it provides a practical way to learn about IoT architectures and tools, surpassing abstract examples. This article walks through the basics of a Unified Namespace.

Below is the home experiment that can scale to machine monitoring and other industrial IoT use cases:

1. Measure the current draw from a fan using current clamp sensors to know if it's on/off
2. Stream this to a real-time dashboard
3. Store this data in a time series database for longer-term analytics

[GitHub Repo](https://github.com/van-william/Machine-Monitoring)

The app on Hugging Face Spaces serves as one example visualization:
[Hugging Face Spaces App](https://huggingface.co/spaces/van-william/machine_monitoring)

## Hardware Summary

Below is a high-level annotation of the hardware used for this simple demonstration. A Tulip edge device (EdgeMC) and the Tulip Machine Kit are used to measure the fan's current draw and correlate to fan speed.

overview-image

## What is a Unified Namespace?

According to HiveMQ, a Unified Namespace (UNS) is a solution that enables you to:

* Collect data from various industrial IoT (IIoT) systems
* Add context to the collected data
* Transform it into a universally comprehensible format

Unlike rigid architectures (such as ISA95), UNS allows almost any system to communicate with another via MQTT (or another protocol used by all systems and devices). This flexibility replaces proprietary, rigid integrations with opportunities for smoother system integration.

In my UNS example, I'll demonstrate how to stream information from a Tulip edge device (Edge MC) to both Tulip Interfaces and a time series database. See below for the architecture:

### Unified Namespace (UNS) Architecture for Proof of Concept

architecture

## Why This Architecture?

The architecture serves multiple purposes:

1. **Edge Processing**: Some data requires immediate processing at the edge, which can be accomplished using Node-Red. This can enable everything from analytics at the edge to simple aggregations to limit the need to stream all data received directly to the cloud.

2. **Production Integration**: The sensor data then streams to a production app platform (Tulip) where operators can add context to machine data and use machine insights alongside manual tasks.

3. **Long-term Storage and Analytics**: Data is also stored in InfluxDB for time series analysis. With this architecture, the cleaned up data is stored in InfluxDB as a cloud historian.

4. **Scalable Integrations**: Using a common protocol enables ease of adding more systems and devices instead of requiring lots of middleware and protocol translation.

## Implementation Components

### Edge Processing

- The edge MC processes machine data (in this case, desk fan amperage readings)
- Node-Red handles the processing and can write data to:
  - InfluxDB
  - Tulip
  - Other sources via REST API
- MQTT can serve as a common protocol, though the specific architecture depends on use case requirements

### Cloud Integration

When streaming data from edge devices to the cloud, consider:
- The purpose ("why") of cloud storage
- Specific requirements for:
  - Frequency
  - Latency
  - Storage location and method
- Benefits of storing IoT data alongside other manufacturing data for deeper insights

## Implementation Details

### InfluxDB Implementation

Data storage choice depends on use case. InfluxDB works well for time series data, while solutions like MongoDB better suit document-based data that doesn't fit a standard schema.

InfluxDB offers three main integration methods:
1. Node-Red Module: Simplifies the REST API process
2. Python Client: Enables SQL queries with pandas DataFrame output
3. Telegraf: Handles complex cases, receiving data from sources like MQTT

Below is an example of querying data on the InfluxDB Data Explorer:

overview-image

### Tulip Interfaces

The implementation uses Tulip Machine Node-Red Modules to write fan data as Machine Attributes. While this example uses a simple fan, the architecture applies equally to industrial equipment like:
- CNC Mills
- Punch Presses
- Bioreactors

Apps on the Tulip library such as Machine Monitoring Terminal provide a simple starting point for interactive machine monitoring use cases:

tulip

### Custom Web Applications

A Gradio-based monitoring app demonstrates data visualization capabilities:

gradio

- Built with less than 100 lines of Python code
- Queries real-time MQTT updates
- Periodically refreshes historical InfluxDB data

Solutions such as Gradio provide simplicity to building interfaces although scalability may be a concern as apps grow in size and complexity.

[Hugging Face Spaces App](https://huggingface.co/spaces/van-william/machine_monitoring)

## Scaling and Implementation Considerations

### Fit-for-Purpose Design

It's important to match the tech stack to use case requirements. If the tech stack doesn't tie back to use cases and specific user needs, there's likely a lot of fluff in the architecture and toolkit. Here are a few examples:

- Do you need simple visualization at the edge? Node-Red Dashboard on edge device will likely suffice.
- Do you also want to capture historical records and store on the cloud? This is a great use case for adding a time series database.
- Do you want to enable operators to interface with the dashboards instead of having one-way communication? This is a great use case for Tulip and other low-code app tools.
- Do you have a variety of devices and systems you're wanting to integrate with? This could bolster the need to use a mix of MQTT and Kafka to streamline message handling across a variety of systems and devices.

### Scaling Considerations

As a solution scales, you may hit other constraints around scaling the MQTT and/or Kafka broker, managing edge devices at scale, and managing Node-Red flows at scale. Here are a few considerations:

- Tools such as FlowFuse help to manage Node-Red code deployment and integration across a fleet of devices
- Scaling brokers may require MQTT providers such as HiveMQ, EMQX, VerneMQ, or others. Scaling Kafka brokers may require solutions such as RedPanda or Confluent
- Tools such as Litmus or HighByte can also help ingest, model, and stream data to the cloud without requiring several tools to work in tandem

Let me know what you build with a UNS!
`,
};
