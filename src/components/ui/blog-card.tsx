import React from "react";
import { Link } from "react-router-dom";
import { BlogPost, formatDate } from "@/utils/markdown";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export function BlogCard({ post, className }: BlogCardProps) {
  return (
    <Card className={cn("overflow-hidden h-full transition-all duration-300 hover:shadow-md", className)}>
      {post.coverImage && (
        <Link to={`/blog/${post.slug}`} className="block aspect-video overflow-hidden">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </Link>
      )}
      <CardHeader>
        <CardTitle>
          <Link 
            to={`/blog/${post.slug}`}
            className="hover:text-primary transition-colors"
          >
            {post.title}
          </Link>
        </CardTitle>
        <CardDescription>
          {formatDate(post.date)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          {post.excerpt}
        </p>
        {post.tags && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Link 
          to={`/blog/${post.slug}`}
          className="text-sm text-primary hover:underline"
        >
          Read more
        </Link>
      </CardFooter>
    </Card>
  );
}