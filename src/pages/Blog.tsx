
import React, { useState, useEffect } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { BlogCard } from "@/components/ui/blog-card";
import { sortBlogPostsByDate, BlogPost } from "@/utils/markdown";
import { loadBlogPosts } from "@/utils/content-loader";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const fetchedPosts = await loadBlogPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error loading blog posts:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchPosts();
  }, []);
  
  // Get all unique tags from blog posts
  const allTags = Array.from(
    new Set(posts.flatMap(post => post.tags || []))
  );
  
  // Sort posts by date and filter based on selected tag
  const sortedPosts = sortBlogPostsByDate(posts);
  const filteredPosts = selectedTag
    ? sortedPosts.filter(post => post.tags?.includes(selectedTag))
    : sortedPosts;

  return (
    <>
      <PageHeader
        title="Blog"
        description="Thoughts, tutorials, and insights on analytics, iot, operations strategy, and more."
      />
      
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <>
              <div className="mb-8 py-4">
                <div className="flex space-x-2 overflow-x-auto">
                  <Skeleton className="h-8 w-16 rounded-full" />
                  <Skeleton className="h-8 w-20 rounded-full" />
                  <Skeleton className="h-8 w-24 rounded-full" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex flex-col space-y-3">
                    <Skeleton className="h-[200px] w-full rounded-lg" />
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-20 w-full" />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
