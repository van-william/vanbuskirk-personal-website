import { marked } from "marked";
import DOMPurify from "dompurify";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  tags?: string[];
}

// Parse markdown content to HTML
export function parseMarkdown(markdown: string): string {
  const html = marked.parse(markdown);
  return DOMPurify.sanitize(html);
}

// Format date for display
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

// Sort blog posts by date (newest first)
export function sortBlogPostsByDate(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

// Generate excerpt from content
export function generateExcerpt(content: string, maxLength: number = 150): string {
  // Remove markdown formatting
  const plainText = content.replace(/[#*`_[\]]/g, "").trim();
  if (plainText.length <= maxLength) return plainText;
  
  // Find a good breakpoint
  const breakpoint = plainText.lastIndexOf(" ", maxLength);
  return plainText.substring(0, breakpoint > 0 ? breakpoint : maxLength) + "...";
}
