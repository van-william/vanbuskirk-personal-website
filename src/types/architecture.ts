export interface ArchitectureMetadata {
  title: string;
  description: string;
  tags: string[];
  date?: string;
  lastUpdated?: string;
  complexity?: "basic" | "intermediate" | "advanced";
  relatedArchitectures?: string[];
}

export interface Architecture {
  metadata: ArchitectureMetadata;
  mermaid: string;
  markdown: string;
}

export interface ArchitectureDiagram {
  title: string;
  description: string;
  slug: string;  // This comes from the filename
  tags: string[];
  mermaid: string;
  annotations?: string;
} 