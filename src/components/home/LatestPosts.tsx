
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { sortBlogPostsByDate, BlogPost } from "@/utils/markdown";
import { loadBlogPosts } from "@/utils/content-loader";
import { BlogCard } from "@/components/ui/blog-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export function LatestPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  
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
  
  // Display only the most recent 2 posts
  const latestPosts = sortBlogPostsByDate(posts).slice(0, 2);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Thoughts, insights, and tutorials on design, development, and creativity.
            </p>
          </div>
          <Button variant="ghost" size="sm" className="mt-4 md:mt-0" asChild>
            <Link to="/blog" className="group flex items-center">
              View all articles
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="flex flex-col space-y-3">
                <Skeleton className="h-[200px] w-full rounded-lg" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-20 w-full" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
