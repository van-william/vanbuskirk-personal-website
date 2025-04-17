import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { loadArchitectureDiagram } from "@/utils/content-loader";
import type { ArchitectureDiagram } from "@/types/architecture";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import ReactMarkdown from "react-markdown";

const ArchitectureDiagramDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [diagram, setDiagram] = useState<ArchitectureDiagram | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchDiagram() {
      if (!slug) return;
      
      try {
        setLoading(true);
        const fetchedDiagram = await loadArchitectureDiagram(slug);
        
        if (fetchedDiagram) {
          setDiagram(fetchedDiagram);
        } else {
          // If the diagram doesn't exist, redirect to the diagrams page
          navigate("/architecture-diagrams");
        }
      } catch (error) {
        console.error("Error loading architecture diagram:", error);
        navigate("/architecture-diagrams");
      } finally {
        setLoading(false);
      }
    }
    
    fetchDiagram();
    
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, [slug, navigate]);
  
  if (loading) {
    return (
      <div className="animate-fade-in">
        <div className="pt-16 pb-10 lg:pt-20 lg:pb-14 border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Skeleton className="h-10 w-32 mb-8" />
              <Skeleton className="h-12 w-full mb-4" />
              <Skeleton className="h-6 w-48" />
            </div>
          </div>
        </div>
        <div className="py-6 lg:py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Skeleton className="h-96 w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!diagram) return null;

  return (
    <article className="animate-fade-in">
      <header className="pt-16 pb-10 lg:pt-20 lg:pb-14 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Button variant="ghost" size="sm" className="mb-8 -ml-2" asChild>
              <Link to="/architecture-diagrams" className="flex items-center text-muted-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to diagrams
              </Link>
            </Button>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
              {diagram.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              {diagram.description}
            </p>
            
            {diagram.tags && diagram.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {diagram.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>
      
      <div className="py-6 lg:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Architecture Diagram Image */}
            <div className="rounded-lg shadow-sm border mb-8 overflow-auto bg-white dark:bg-slate-900">
              <img 
                src={diagram.diagram.url} 
                alt={diagram.diagram.alt}
                className="max-w-full h-auto p-6"
              />
            </div>
            
            {/* Description */}
            <div className="prose dark:prose-invert max-w-none">
              <ReactMarkdown>{diagram.markdown}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArchitectureDiagramDetail; 