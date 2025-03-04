
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
  githubLink?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Personal Portfolio Website",
    description: "A minimalist portfolio website built with React and Tailwind CSS, featuring smooth animations and responsive design.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    link: "https://example.com",
    githubLink: "https://github.com/yourusername/portfolio",
  },
  {
    id: "2",
    title: "Photography Showcase App",
    description: "A photography showcase application with advanced filtering and lightbox features.",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["React", "Styled Components", "Firebase"],
    link: "https://example.com/photography",
    githubLink: "https://github.com/yourusername/photography-app",
  },
  {
    id: "3",
    title: "Markdown Blog Engine",
    description: "A lightweight blog engine that converts Markdown files to beautiful HTML pages with syntax highlighting and responsive design.",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["JavaScript", "Node.js", "Markdown"],
    link: "https://example.com/blog-engine",
    githubLink: "https://github.com/yourusername/markdown-blog",
  },
  {
    id: "4",
    title: "Weather Dashboard",
    description: "A clean and intuitive weather dashboard with real-time data visualization and location-based forecasts.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    tags: ["React", "Chart.js", "Weather API"],
    link: "https://example.com/weather",
    githubLink: "https://github.com/yourusername/weather-dashboard",
  },
  {
    id: "5",
    title: "E-commerce Product Page",
    description: "A responsive product page with image gallery, reviews, and cart functionality.",
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://example.com/product-page",
    githubLink: "https://github.com/yourusername/product-page",
  },
];
