export interface ArchitectureDiagram {
  id: string;
  title: string;
  description: string;
  slug: string;
  tags: string[];
  mermaid: string;
  annotations?: string;
} 