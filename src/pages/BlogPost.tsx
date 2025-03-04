
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { parseMarkdown, formatDate, BlogPost as BlogPostType } from "@/utils/markdown";
import { loadBlogPost } from "@/utils/content-loader";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchPost() {
      if (!slug) return;
      
      try {
        setLoading(true);
        const fetchedPost = await loadBlogPost(slug);
        
        if (fetchedPost) {
          setPost(fetchedPost);
        } else {
          // If the post doesn't exist, redirect to the blog page
          navigate("/blog");
        }
      } catch (error) {
        console.error("Error loading blog post:", error);
        navigate("/blog");
      } finally {
        setLoading(false);
      }
    }
    
    fetchPost();
    
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
            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-5/6" />
                <Skeleton className="h-6 w-4/6" />
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-3/4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!post) return null;
  
  // Parse the markdown content to HTML
  const content = parseMarkdown(post.content);

  return (
    <article className="animate-fade-in">
      <header className="pt-16 pb-10 lg:pt-20 lg:pb-14 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Button variant="ghost" size="sm" className="mb-8 -ml-2" asChild>
              <Link to="/blog" className="flex items-center text-muted-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to blog
              </Link>
            </Button>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      
      {post.coverImage && (
        <div className="py-6 lg:py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video overflow-hidden rounded-lg">
                <img 
                  src={post.coverImage} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="py-6 lg:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div 
              className="markdown prose dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
