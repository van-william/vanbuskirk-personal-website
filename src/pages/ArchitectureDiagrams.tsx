import React, { useState, useEffect } from "react";
import { loadArchitectureDiagrams } from "@/utils/content-loader";
import { PageHeader } from "@/components/layout/PageHeader";
import { Skeleton } from "@/components/ui/skeleton";
import { ArchitectureDiagram } from "@/types/architecture";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import { MermaidDiagram } from "@/components/ui/mermaid-diagram";

const ArchitectureDiagrams = () => {
  const [diagrams, setDiagrams] = useState<ArchitectureDiagram[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDiagram, setSelectedDiagram] = useState<ArchitectureDiagram | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDiagrams = async () => {
      try {
        const loadedDiagrams = await loadArchitectureDiagrams();
        setDiagrams(loadedDiagrams);
        if (loadedDiagrams.length > 0) {
          setSelectedDiagram(loadedDiagrams[0]);
        }
      } catch (err) {
        setError("Failed to load architecture diagrams");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDiagrams();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-8">
          <div className="w-64">
            <Skeleton className="h-8 w-full mb-4" />
            <Skeleton className="h-8 w-full mb-4" />
            <Skeleton className="h-8 w-full mb-4" />
          </div>
          <div className="flex-1">
            <Skeleton className="h-[600px] w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-destructive mb-4">Error</h2>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHeader
        title="Architecture Diagrams"
        description="A collection of system designs, infrastructure layouts, and component interactions."
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="space-y-2">
              {diagrams.map((diagram) => (
                <button
                  key={diagram.slug}
                  onClick={() => setSelectedDiagram(diagram)}
                  className={cn(
                    "w-full text-left px-4 py-2 rounded-md transition-colors",
                    selectedDiagram?.slug === diagram.slug
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  )}
                >
                  {diagram.title}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {selectedDiagram ? (
              <div className="space-y-8">
                <div className="prose dark:prose-invert max-w-none">
                  <h2>{selectedDiagram.title}</h2>
                  <p className="text-muted-foreground">{selectedDiagram.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedDiagram.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Mermaid Diagram */}
                <div className="bg-card rounded-lg p-6 border">
                  <MermaidDiagram 
                    diagram={selectedDiagram.mermaid}
                    className="flex justify-center items-center"
                  />
                </div>

                {/* Annotations */}
                {selectedDiagram.annotations && (
                  <div className="prose dark:prose-invert max-w-none">
                    <ReactMarkdown>{selectedDiagram.annotations}</ReactMarkdown>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Select a diagram from the sidebar to view it.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArchitectureDiagrams; 