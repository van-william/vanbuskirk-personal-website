
import React, { useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { BlogCard } from "@/components/ui/blog-card";
import { blogPosts } from "@/data/blog-posts";
import { sortBlogPostsByDate } from "@/utils/markdown";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const Blog = () => {
  // Get all unique tags from blog posts
  const allTags = Array.from(
    new Set(blogPosts.flatMap(post => post.tags || []))
  );
  
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Sort posts by date and filter based on selected tag
  const sortedPosts = sortBlogPostsByDate(blogPosts);
  const filteredPosts = selectedTag
    ? sortedPosts.filter(post => post.tags?.includes(selectedTag))
    : sortedPosts;

  return (
    <>
      <PageHeader
        title="Blog"
        description="Thoughts, tutorials, and insights on design, development, and creativity."
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No blog posts found with the selected tag.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
