
import { BlogPost, generateExcerpt } from "./markdown";
import { Photo } from "@/data/photos";

// This is a mock implementation that simulates loading content from files
// In a real production environment, this would be replaced with actual file system access
// or a content management system API

// For blogs: In a production app, you'd use something like:
// - Next.js API routes to read markdown files from the file system
// - A headless CMS like Contentful, Sanity, or Strapi
// - A Git-based CMS like Netlify CMS or TinaCMS

export async function loadBlogPosts(): Promise<BlogPost[]> {
  // In production, this would read markdown files from a directory
  // For this demo, we'll simulate with the existing data
  
  // Simulating the delay of a real file read
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Import the posts dynamically to simulate file loading
  const { blogPosts } = await import("@/data/blog-posts");
  
  return blogPosts;
}

export async function loadBlogPost(slug: string): Promise<BlogPost | null> {
  const posts = await loadBlogPosts();
  return posts.find(post => post.slug === slug) || null;
}

export async function loadPhotos(): Promise<Photo[]> {
  // In production, this would scan a directory of images
  // For this demo, we'll simulate with the existing data
  
  // Simulating the delay of a real file read
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Import the photos dynamically to simulate file loading
  const { photos } = await import("@/data/photos");
  
  return photos;
}

// This function simulates how we would parse a markdown file in production
export function parseMarkdownFile(filename: string, content: string): BlogPost {
  // In a real implementation, we would:
  // 1. Parse front matter (YAML metadata at the top of markdown files)
  // 2. Extract title, date, tags, etc. from the front matter
  // 3. Parse the remaining content as markdown
  
  // For example, a markdown file might look like:
  /*
    ---
    title: My Blog Post
    date: 2023-06-15
    tags: ["markdown", "tutorial"]
    coverImage: /images/blog/my-cover.jpg
    ---
    
    # This is my blog post
    
    Content goes here...
  */
  
  // Simulated parsing logic
  const id = filename.replace(/\.md$/, '');
  const slug = filename.replace(/\.md$/, '').toLowerCase().replace(/\s+/g, '-');
  const titleMatch = content.match(/^# (.+)$/m);
  const title = titleMatch ? titleMatch[1] : 'Untitled Post';
  const excerpt = generateExcerpt(content, 150);
  
  return {
    id,
    title,
    slug,
    date: new Date().toISOString(),
    excerpt,
    content,
    tags: ['example']
  };
}

// This explains how to add new content in a production environment
export const contentManagementGuide = {
  addingBlogPost: `
# How to Add a New Blog Post

1. Create a new markdown file in the \`/content/blog/\` directory
2. Add front matter at the top with required metadata:
   \`\`\`
   ---
   title: Your Blog Post Title
   date: YYYY-MM-DD
   excerpt: A brief summary of your post
   coverImage: /images/blog/your-image.jpg (optional)
   tags: ["tag1", "tag2"] (optional)
   ---
   \`\`\`
3. Write your blog content in markdown format below the front matter
4. The post will automatically appear in the blog listing
  `,
  
  addingPhotography: `
# How to Add New Photographs

1. Add your image files to the \`/public/images/photography/\` directory
2. Create or update the \`/content/photography.json\` file with metadata:
   \`\`\`
   [
     {
       "id": "unique-id",
       "title": "Photo Title",
       "description": "Photo description",
       "imageUrl": "/images/photography/your-image.jpg",
       "category": "Landscape",
       "width": 1200,
       "height": 800
     },
     ...
   ]
   \`\`\`
3. The photos will automatically appear in the photography section
  `
};
