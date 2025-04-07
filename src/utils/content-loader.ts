import { BlogPost } from "@/types/blog";
import { Photo } from "@/data/photos";
import { ArchitectureDiagram } from "@/types/architecture";

// Dynamically import all blog posts
export async function loadBlogPosts(): Promise<BlogPost[]> {
  try {
    const modules = import.meta.glob("@/data/blog/*.ts");

    const posts: BlogPost[] = await Promise.all(
      Object.entries(modules).map(async ([path, resolver]) => {
        const slug = path.split("/").pop()?.replace(".ts", ""); // Extract slug from filename
        const mod = await resolver() as { post: BlogPost };
        return { ...mod.post, slug };
      })
    );

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
    const module = await import(`@/data/blog/${slug}.ts`) as { post: BlogPost };
    return module.post;
  } catch (error) {
    console.error(`Error loading blog post ${slug}:`, error);
    return null;
  }
}

// Load all architecture diagrams
export const loadArchitectureDiagrams = async (): Promise<ArchitectureDiagram[]> => {
  const { architectureDiagrams } = await import("@/data/architectures");
  return architectureDiagrams;
};

// Load a single architecture diagram by slug
export const loadArchitectureDiagram = async (slug: string): Promise<ArchitectureDiagram | null> => {
  const diagrams = await loadArchitectureDiagrams();
  return diagrams.find(diagram => diagram.slug === slug) || null;
};

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
  `,

  addingArchitectureDiagram: `
# How to Add a New Architecture Diagram

1. Update the \`/src/data/architectures.ts\` file to add a new diagram:
   \`\`\`typescript
   export const architectureDiagrams: ArchitectureDiagram[] = [
     // ... existing diagrams
     {
       id: "unique-id",
       title: "Your Diagram Title",
       slug: "your-diagram-slug",
       description: "Description of the architecture",
       tags: ["tag1", "tag2"],
       diagram: \`
         // Your Mermaid diagram code here
         graph TB
           A[Component A] --> B[Component B]
       \`,
       animation: [ // Optional animations
         {
           targets: ["A", "B"], // Component IDs to animate
           type: "flow", // Animation type: "fade", "pulse", or "flow"
           duration: 2000 // Duration in milliseconds
         }
       ]
     }
   ]
   \`\`\`
2. The diagram will automatically appear in the architecture diagrams listing
  `
};
