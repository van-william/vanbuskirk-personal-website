export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  featured?: boolean;
  link?: string;
  articleLink?: string;
  githubLink?: string;
} 