import React, { useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";

const Projects = () => {
  // Get all unique tags from projects
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Filter projects based on selected tag
  const filteredProjects = selectedTag
    ? projects.filter(project => project.tags.includes(selectedTag))
    : projects;

  return (
    <>
      <PageHeader
        title="Projects"
        description="A collection of side projects across analytics, industrial IoT, and more."
      />
      
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 overflow-x-auto py-4">
            <div className="flex space-x-2 min-w-max">
              <Badge
                variant={selectedTag === null ? "default" : "outline"}
                className={cn(
                  "cursor-pointer px-4 py-2",
                  selectedTag === null ? "bg-primary" : "hover:bg-secondary"
                )}
                onClick={() => setSelectedTag(null)}
              >
                All
              </Badge>
              {allTags.map(tag => (
                <Badge
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  className={cn(
                    "cursor-pointer px-4 py-2",
                    selectedTag === tag ? "bg-primary" : "hover:bg-secondary"
                  )}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found with the selected tag.</p>
            </div>
          )}
          
          {/* Commented out Architecture Diagrams Section for now
          <div className="mt-16 p-8 bg-muted rounded-lg">
            <div className="flex flex-col items-center text-center">
              <Code2 className="h-12 w-12 mb-4 text-primary" />
              <h2 className="text-2xl font-bold mb-4">Architecture Diagrams</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                Explore additional architecture diagrams. 
                A collection of system designs, solution architecture, and more across Industry 4.0, IoT, and other use cases.
              </p>
              <Button asChild size="lg">
                <Link to="/architecture-diagrams">
                  View Diagrams
                </Link>
              </Button>
            </div>
          </div>
          */}
        </div>
      </section>
    </>
  );
};

export default Projects;
