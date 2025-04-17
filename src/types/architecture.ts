export interface ArchitectureMetadata {
  title: string;
  description: string;
  tags: string[];
  date?: string;
  lastUpdated?: string;
  complexity?: "basic" | "intermediate" | "advanced";
  relatedArchitectures?: string[];
}

export interface ArchitectureDiagram {
  title: string;
  description: string;
  slug: string;
  tags: string[];
  diagram: {
    type: "image";
    url: string;
    alt: string;
  };
  markdown: string;
}

export interface Architecture {
  metadata: ArchitectureMetadata;
  diagram: {
    type: "image";
    url: string;
    alt: string;
  };
  markdown: string;
} 