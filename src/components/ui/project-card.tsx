import React from "react";
import { Project } from "@/data/projects";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FileText, BookOpen, Book, Newspaper, FileSpreadsheet } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Card className={cn("overflow-hidden h-full transition-all duration-300 hover:shadow-md", className)}>
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        {project.githubLink && (
          <Button variant="outline" size="sm" className="gap-2" asChild>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </Button>
        )}
        {project.articleLink && (
          <Button variant="outline" size="sm" className="gap-2" asChild>
            <a href={project.articleLink} target="_blank" rel="noopener noreferrer">
              <FileText className="h-4 w-4" />
              <span>Article</span>
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
