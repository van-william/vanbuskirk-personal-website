import { BlogPost } from "@/utils/markdown";

export const post: BlogPost = {
  id: "7",
  title: "IoT Lessons Learned: Building a Screen-Free Habit Tracker",
  slug: "iot-lessons-learned",
  date: "2025-02-26",
  excerpt: "Building a habit tracker with Arduino Opta, Tulip Edge MC, and more",
  coverImage: "/project_images/arduino_opta.png",
  tags: ["c++", "MQTT", "Python"],
  content: `
# IoT Lessons Learned: Building a Screen-Free Habit Tracker

Let's talk about IoT — the messy, practical reality of connecting machines to the internet. Recently, I built a "habit tracker" that's purely analog — no screens — just physical switches and blinking lights (Screens did come into play for analyzing the data). Here's what I learned:

## The Problem: Analog Meets Digital

The goal was simple: create a device to track daily habits (like drinking water or taking breaks) without burying users in screen time. The catch? The tracker needed to:

- Run on a Programmable Logic Controller (PLC) without direct internet access. (Ideally connect to a separate edge device)
- Aggregate data at the edge (i.e., locally).
- Store time-series data.
- Enable interaction via a frontline operations platform (Tulip).

Every time I try to track habits on my phone, I end up scrolling. I decided to have fun with the idea and constraints although, it likely won't see production use. In reality, some of these constraints were taken from Industrial IoT use cases and less applicable for consumer IoT; it was more of a proving ground / test to really understand Industrial IoT with a fun experiment.

![architecture](../blog_images/iot_lessons_learned/architecture.png)
*High-level Architecture of the Solution*

## The Architecture: Start Simple, Scale Later

Here's how the system evolved:

1. **v0**: The PLC sends raw data to a cloud MQTT broker (HiveMQ). Basic, but functional. (Need to add in edge device processing)
2. **v1**: Added an edge device to process data before sending it to InfluxDB (a time-series database) and HiveMQ.
3. **v2**: Introduced Node-RED for dashboarding and Tulip for visualizing machine states (e.g., "active" vs. "wasting time").

The key? Start small.

See link below for the github repo:

[Arduino Opta - Habit Tracker](https://github.com/van-william/Arduino-Opta---Habit-Tracker)

## What I Built (and Why It Worked)

### 1. Opta: The Arduino PLC
- Coded in Arduino/C++ (the PLC's macOS IDE was limited).
- **Debugging**: Opta doesn't have a serial debugger, so I had to get creative with onboard lights to track issues with code execution
- **Lesson**: When tools fail, improvise.

Overall, the Arduino Opta PLC is a great starter PLC; You can use the standard Arduino IDE to code in C++ or use the PLC IDE to write ladder logic programs and more. I also purchased the wifi one, so I had some flexibility with connectivity (wired or wireless)

### 2. Tulip Edge MC + Node-RED
- The edge device ran a local MQTT broker to collect PLC data.
- Node-RED handled data aggregation, wrote to InfluxDB, and fed Tulip.
- Why Node-RED? It's low-code, flexible, and plays nice with IoT protocols.

Running Node-RED on Tulip's Edge MC gave some flexibility to ingest raw data from the PLC and then process the data and write it to a variety of sources such as Tulip apps, InfluxDB, AWS IoT SiteWise, and more. The visual programming of Node-RED makes it pretty easy to get started with data flows that would otherwise be a bit hairy if NodeJS were the only option.

### 3. Tulip & InfluxDB
- Tulip became the "frontend," showing habit states (e.g., "on track" vs. "distracted").
- InfluxDB stored timestamped statuses — no need for complex schemas. Just time and state.

Of course, I stated earlier that I was straying from screens, but I still wanted to analyze some potential trends and patterns in my habits, so I built a quick Tulip app that showed where I spend my time. It was basically a personal "shop floor app" with some OEE-like metrics.

The InfluxDB data was used on a Streamlit app (Python) to built out some quick dashboards and charts.

![finished product](../blog_images/iot_lessons_learned/finished_product.png)
*Finished product with a few dashboards*

## Key Learnings

The project was great for learning more about some key decisions around when to send data to the cloud, what part of the stack is exposed to public internet, and a balance of when to use distributed streaming tools (e.g., Kafka) vs. basic REST APIs in batches.

It really comes down to the use case and desired functionality with all these questions; the more you can refine and tailor the use case, you may be able to simplify the architecture and reduce the amount of data (and cost) sent to the cloud.

With regards to streaming tools like Kafka, Redpanda, and others, it's important to understand what desired latency and real-time accuracy looks like. I was using minute-level summaries, so I had little need of streaming tables and other real-time analytics, but if I did, I would have to explore other methods to query data in a streaming fashion (Flink, RisingWave, etc.)

### Some additional notes:

#### 1. Edge vs. Cloud: What Belongs Where?
- **Edge**: Real-time aggregation, dashboards, lightweight analytics.
- **Cloud**: Long-term storage, scaling, cross-site analysis (hence the SiteWise experiment).
- **Ask**: Does this need to live in the cloud? If not, keep it local.

#### 2. Security Matters (But Don't Overcomplicate)
- PLCs stayed offline. Data left the local network only via the edge device.
- MQTT over LAN > exposing PLCs directly to the internet.

#### 3. APIs Are Underrated
- Event-driven architectures (Kafka, MQTT) get the hype, but sometimes a simple REST API via AWS Lambda + API Gateway is enough.
- For SiteWise integration, a serverless function bridged the edge and cloud without reinventing the wheel.

#### 4. The Future of PLCs
- Will ladder logic survive? Maybe. But tools like Node-RED are creeping into industrial workflows.
- Dynamic configurations (e.g., updating states via MQTT topics) reduced PLC firmware updates.

## The Bigger Picture

This project wasn't just about habits. It's a blueprint for:

- Digitizing analog equipment (e.g., legacy factory machines).
- Balancing simplicity and scalability (start with InfluxDB, add SiteWise later).
- Prioritizing use cases over architecture (ask "why" before "how").

## Final Thoughts

IoT projects often drown in complexity. Here's my mantra:

1. Let use cases drive design. No need for Kafka if a cron job works.
2. Really think about Edge vs. cloud. Consider what to pre-process at the edge.
3. Embrace duct-tape solutions (e.g., LED debugging).

What's the most "duct-tape" IoT hack you've built? Let me know.
`,
};
