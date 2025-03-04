
import { BlogPost } from "@/utils/markdown";
import { Photo } from "@/data/photos";

// Dynamically import all blog posts
export async function loadBlogPosts(): Promise<BlogPost[]> {
  try {
    // List of blog post slugs (filenames without the .ts extension)
    const slugs = [
      "art-of-minimalist-design",
      "building-photography-portfolio",
      "getting-started-with-markdown"
    ];
    
    const posts: BlogPost[] = [];
    
    // Load each blog post by slug
    for (const slug of slugs) {
      const post = await loadBlogPost(slug);
      if (post) {
        posts.push(post);
      }
    }
    
    return posts;
  } catch (error) {
    console.error("Error loading blog posts:", error);
    return [];
  }
}

// Load a single blog post by slug
export async function loadBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    // Dynamic import of the blog post file
    const module = await import(`@/data/blog/${slug}.ts`);
    return module.post;
  } catch (error) {
    console.error(`Error loading blog post ${slug}:`, error);
    return null;
  }
}

// Load all photos
export async function loadPhotos(): Promise<Photo[]> {
  try {
    // In a real app, this would load from a directory or API
    const { photos } = await import('@/data/photos');
    return photos;
  } catch (error) {
    console.error("Error loading photos:", error);
    return [];
  }
}

// Update the contentManagementGuide to reflect the new file structure
export const contentManagementGuide = {
  addingBlogPost: `
# How to Add a New Blog Post

1. Create a new TypeScript file in the \`/src/data/blog/\` directory with the slug as the filename (e.g., \`my-new-post.ts\`)
2. Use the following format:
   \`\`\`typescript
   import { BlogPost } from "@/utils/markdown";

   export const post: BlogPost = {
     id: "unique-id",
     title: "Your Blog Post Title",
     slug: "my-new-post",  // Must match the filename
     date: "YYYY-MM-DD",
     excerpt: "A brief summary of your post",
     coverImage: "URL to your cover image",
     tags: ["tag1", "tag2"],
     content: \`
       # Markdown Content Goes Here

       Your blog post content in markdown format...
     \`
   };
   \`\`\`
3. Update the list of blog post slugs in the \`loadBlogPosts\` function in \`/src/utils/content-loader.ts\` to include your new post slug
4. The post will automatically appear in the blog listing
  `,
  
  addingPhotography: `
# How to Add New Photographs

1. Add your image files to the \`/public/images/photography/\` directory
2. Update the \`/src/data/photos.ts\` file with metadata:
   \`\`\`typescript
   export const photos: Photo[] = [
     {
       id: "unique-id",
       title: "Photo Title",
       description: "Photo description",
       imageUrl: "/images/photography/your-image.jpg",
       category: "Landscape",
       width: 1200,
       height: 800
     },
     ...
   ]
   \`\`\`
3. The photos will automatically appear in the photography section
  `
};
