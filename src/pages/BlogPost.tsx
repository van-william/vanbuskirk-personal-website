
import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { blogPosts } from "@/data/blog-posts";
import { parseMarkdown, formatDate } from "@/utils/markdown";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Find the blog post with the matching slug
  const post = blogPosts.find(post => post.slug === slug);
  
  useEffect(() => {
    // If the post doesn't exist, redirect to the blog page
    if (!post) {
      navigate("/blog");
    }
    
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, [post, navigate]);
  
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
