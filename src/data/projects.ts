import { Project } from "@/types/project";

export interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
    articleLink?: string;
    githubLink?: string;
    link?: string;
  }
  
  export const projects: Project[] = [
    {
      id: "1",
      title: "Arduino Opta - Habit Tracker",
      description: "A simple habit tracker built with an Arduino Opta and analog switches",
      imageUrl: "../project_images/arduino_opta.png", // alt: https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d
      tags: ["IoT", "Tulip", "c++", "Python"],
      articleLink: "https://www.linkedin.com/pulse/iot-lessons-learned-building-screen-free-habit-william-vanbuskirk-rnetc/",
      githubLink: "https://github.com/van-william/Arduino-Opta---Habit-Tracker",
    },
    {
      id: "2",
      title: "Machine Monitoring Demonstration",
      description: "Exploration of machine monitoring using a Tulip Edge MC, Tulip apps, InfluxDB, and more.",
      imageUrl: "../project_images/machine_monitoring.png",
      tags: ["IoT", "Tulip", "Node-RED", "InfluxDB", "MQTT"],
      articleLink: "https://www.linkedin.com/pulse/demystifying-unified-namespace-iot-building-simple-proof-vanbuskirk-m7zxc/",
      githubLink: "https://github.com/van-william/Machine-Monitoring",
    },
    {
      id: "3",
      title: "Local LLM Chatbot via Streamlit",
      description: "Simple LLM chatbot via Streamlit",
      imageUrl: "../project_images/local_llm.png",
      tags: ["Python", "LLM"],
      articleLink: "https://example.com/blog-enginehttps://www.linkedin.com/posts/wvanbuskirk_lesser-known-place-for-interacting-with-llms-activity-7291095099038449664-JVGV",
      githubLink: "https://github.com/van-william/local-llm",
    },
    {
      id: "4",
      title: "Personal Website",
      description: "Typescript Personal Website",
      imageUrl: "../project_images/personal_website.png", //"https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
      tags: ["Typescript", "Javascript"],
      githubLink: "https://github.com/van-william/vanbuskirk-personal-website",
    },
    {
      id: "5",
      title: "Operator Feedback App",
      description: "Translated, Parsed Operator Feedback with Tulip + NVIDIA",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tags: ["Tulip", "LLM"],
      articleLink: "https://www.linkedin.com/posts/wvanbuskirk_crazy-idea-for-factory-improvement-get-feedback-activity-7308911154171457537-YFVZ",
    },
    {
      id: "5",
      title: "Plastic List Summary Analysis",
      description: "Review of Plastic List Summary Insights",
      imageUrl: "https://plus.unsplash.com/premium_photo-1682144492263-7623997157df",
      tags: ["python"],
      githubLink: "https://github.com/van-william/plastic-list-analysis",
    },
    {
      id: "6",
      title: "IoT + Web3 with Helium",
      description: "Overview of using Helium blockchain to stream IoT data",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      tags: ["python"],
      articleLink: "https://medium.com/cryptostars/web3-iot-connect-iot-devices-to-azure-via-helium-network-fdd144d526f1",
    },
    {
      id: "7",
      title: "808 Emulator",
      description: "Built a replica of the Roland TR-808 drum machine with Lovable, Cursor, and Netlify",
      imageUrl: "../project_images/rhythm_composer.png",
      tags: ["Typescript", "LLM", "React"],
      githubLink: "https://github.com/van-william/beatwave-emulator",
      articleLink: "https://808-emulator.netlify.app/"
    },
    // {
    //   id: "architecture-diagrams",
    //   title: "Architecture Diagrams",
    //   description: "Interactive architecture diagrams using Mermaid.js, showcasing various system designs and infrastructure layouts with a focus on cloud and distributed systems.",
    //   imageUrl: "../project_images/architecture.png",
    //   tags: ["React", "TypeScript", "Mermaid.js", "System Design"],
    //   featured: true,
    //   articleLink: "/architecture-diagrams"
    // },
  ];
  