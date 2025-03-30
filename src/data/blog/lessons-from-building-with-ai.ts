import { BlogPost } from "@/utils/markdown";

export const post: BlogPost = {
  id: "6",
  title: "Lessons from Building with AI",
  slug: "lessons-from-building-with-ai",
  date: "2025-03-28",
  excerpt: "Experience with using Perplexity,Lovable, and Cursor, to build",
  coverImage: "https://images.unsplash.com/photo-1636690598773-c50645a47aeb",
  tags: ["javascript", "typescript", "react", "llm"],
  content: `
# Lessons from Building with AI

I recently built a [drum machine emulator](https://808-emulator.netlify.app/) with Lovable, Cursor, and a few other AI tools. Here are some lessons I learned from the experience.

## The Journey

After exploring Lovable for initial prototypes, I decided to tackle a bigger project. I wanted to learn more about complex web app architectures - authentication with Google Auth, storing user data in Supabase, complex interactions in a web app, and more. From this exploration, I had the idea to recreate a synthesizer - specifically, a Roland TR-808 drum machine.

Here was my overall workflow:

1. **Research Phase**: I started with basic research on web app architecture using Perplexity. What is Vite? Is that better than Create React App? Firebase vs. Supabase? What is TypeScript anyway? I wanted to grasp general best practices before diving in.

2. **Initial Build**: Armed with some basic knowledge, I prompted Lovable to build a synthesizer replica. With some fine-tuning, I was able to refine the frontend, though complex backend logic around user authentication and file exports proved challenging.

3. **Refinement**: After finalizing the overall user flow and design, I synced the Lovable project to GitHub for further work.

4. **Backend Development**: Using Cursor, I was able to implement specific updates around backend logic, authentication, and Netlify hosting. What was interesting is that I could not only tell the agent what to change but also ask questions about its decisions - context is key!

## Key Lessons Learned

### Perplexity
Perplexity was excellent for getting a high-level understanding of the necessary architecture and key constraints. I frankly didn't even know what Vite was - I had assumed it was just a newer version of React. Asking open-ended questions to Perplexity helped fill these knowledge gaps.

I didn't explore prompt engineering deeply, but I think Perplexity could also help research optimal prompts for Lovable and Cursor.

### Lovable
Lovable shined for initial frontend development. The zero-to-one experience was incredibly fast. There was some "fluff" UX - some experiments resulted in excessive landing pages that looked great but weren't necessary.

Comparing starting with Cursor versus Lovable, I found that with Cursor, I needed to be super clear about design, or things came out basic and clunky. With Lovable, I didn't need to be as precise with UI/UX prompting - it usually created something well-designed out of the box.

However, Lovable struggled with complex backend logic. It could start work on Supabase integration and Google Auth, but I needed Cursor for refinement.

Time-wise, I spent much more time with Cursor finalizing the last 20% of the project. Getting the first 80% right with Lovable happened quickly.

### Cursor
Cursor excelled at refinement, but precision was crucial. With Lovable, I could be somewhat loose with my requests. With Cursor, my prompts needed to be specific and tactical - table structure in Supabase, linter errors, callback logic, etc.

I discovered that imprecise prompts could easily backfire with Cursor - it could quickly update the web app and make a mess if I wasn't careful. On the other hand, it gave clear advice on configuring external systems like Google Auth and Supabase.

Cursor also provided context on errors and how to fix them. In essence, Cursor is like a scalpel: very precise but requiring careful handling.

## Final Thoughts

The workflow from Perplexity (research) to Lovable (initial frontend) to Cursor (backend refinement) proved successful. As AI models advance, the need for nuanced prompting decreases - many prompting techniques from just a couple of years ago are already outdated.

I realized it's less about communicating complex rules to the AI and more about simplifying the architecture upfront. You don't need to worry about communicating complex rules when the structure is simple to begin with.

Interestingly, building with AI tools actually increased my desire to learn more about frontend development. Because I made such fast progress, it sparked my curiosity about many aspects of web development.

While I probably won't become a full-stack engineer anytime soon, even learning the basics of web app development has changed how I think about application structure.

In the end, the combination of these tools made it possible to create something I wouldn't have been able to build on my own, and simply put: that's pretty cool.
`,
};
