import React from "react";
import { Project } from "@/types/project";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FileText, BookOpen, Book, Newspaper, FileSpreadsheet, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  // Helper function to determine icon and label for article links
  const getArticleLinkInfo = (url: string) => {
    if (url.includes('linkedin.com')) {
      return { icon: <Newspaper className="h-4 w-4" />, label: "LinkedIn" };
    } else if (url.includes('medium.com')) {
      return { icon: <BookOpen className="h-4 w-4" />, label: "Medium" };
    } else if (url.includes('netlify.app') || url.includes('vercel.app') || url.includes('.com')) {
      return { icon: <Globe className="h-4 w-4" />, label: "Demo" };
    } else {
      return { icon: <FileText className="h-4 w-4" />, label: "Article" };
    }
  };

  // Helper function to determine icon and label for primary links
  const getPrimaryLinkInfo = (url: string) => {
    if (url.includes('netlify.app') || url.includes('vercel.app')) {
      return { icon: <Globe className="h-4 w-4" />, label: "Live Demo" };
    } else if (url.includes('.com') || url.includes('.org') || url.includes('.io')) {
      return { icon: <ExternalLink className="h-4 w-4" />, label: "Visit" };
    } else {
      return { icon: <ExternalLink className="h-4 w-4" />, label: "Link" };
    }
  };

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
      <CardFooter className="flex flex-wrap gap-2">
        {project.link && (
          <Button variant="outline" size="sm" className="gap-2" asChild>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {getPrimaryLinkInfo(project.link).icon}
              <span>{getPrimaryLinkInfo(project.link).label}</span>
            </a>
          </Button>
        )}
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
              {getArticleLinkInfo(project.articleLink).icon}
              <span>{getArticleLinkInfo(project.articleLink).label}</span>
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
