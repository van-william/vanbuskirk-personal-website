
import React from "react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/project-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function LatestProjects() {
  // Display only the first 3 projects
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Latest Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A selection of my recent work across web development, design, and creative coding.
            </p>
          </div>
          <Button variant="ghost" size="sm" className="mt-4 md:mt-0" asChild>
            <Link to="/projects" className="group flex items-center">
              View all projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
