
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  articleLink?: string;
  githubLink?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Arduino Opta - Habit Tracker",
    description: "A simple habit tracker built with an Arduino Opta and analog switches",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["IoT", "Tulip", "c++", "Python"],
    articleLink: "https://www.linkedin.com/pulse/iot-lessons-learned-building-screen-free-habit-william-vanbuskirk-rnetc/",
    githubLink: "https://github.com/van-william/Arduino-Opta---Habit-Tracker",
  },
  {
    id: "2",
    title: "Machine Monitoring Demonstration",
    description: "Exploration of machine monitoring using a Tulip Edge MC, Tulip apps, InfluxDB, and more.",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["IoT", "Tulip", "Node-RED", "InfluxDB", "MQTT"],
    articleLink: "https://www.linkedin.com/pulse/demystifying-unified-namespace-iot-building-simple-proof-vanbuskirk-m7zxc/",
    githubLink: "https://github.com/van-william/Machine-Monitoring",
  },
  {
    id: "3",
    title: "Local LLM Chatbot via Streamlit",
    description: "Simple LLM chatbot via Streamlit",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["Python", "LLM"],
    articleLink: "https://example.com/blog-enginehttps://www.linkedin.com/posts/wvanbuskirk_lesser-known-place-for-interacting-with-llms-activity-7291095099038449664-JVGV",
    githubLink: "https://github.com/van-william/local-llm",
  },
  {
    id: "4",
    title: "Local LLM Chatbot via Streamlit",
    description: "Simple LLM chatbot via Streamlit",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["Python", "LLM"],
    articleLink: "https://example.com/blog-enginehttps://www.linkedin.com/posts/wvanbuskirk_lesser-known-place-for-interacting-with-llms-activity-7291095099038449664-JVGV",
    githubLink: "https://github.com/van-william/money-in-bible",
  },
];
