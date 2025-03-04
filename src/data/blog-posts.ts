
import { BlogPost } from "@/utils/markdown";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Markdown",
    slug: "getting-started-with-markdown",
    date: "2023-06-15",
    excerpt: "Learn the basics of Markdown syntax for creating elegant and readable content.",
    coverImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["markdown", "writing", "tutorial"],
    content: `
# Getting Started with Markdown

Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. Created by John Gruber in 2004, Markdown is now one of the world's most popular markup languages.

## Why Use Markdown?

- **Simplicity**: The syntax is straightforward and easy to learn
- **Platform Independent**: Files can be opened with virtually any application
- **Future Proof**: Even if your application stops working, you can read the raw file
- **Versatility**: Used for websites, documents, notes, books, presentations, and more

## Basic Syntax

### Headers

You can create headers using the hash symbol (#). The number of hash symbols indicates the level of the header:

\`\`\`
# Header 1
## Header 2
### Header 3
\`\`\`

### Emphasis

To create italic text, surround the text with single asterisks or underscores:

\`\`\`
*This text will be italic*
_This will also be italic_
\`\`\`

For bold text, use double asterisks or underscores:

\`\`\`
**This text will be bold**
__This will also be bold__
\`\`\`

### Lists

You can create unordered lists using asterisks, pluses, or hyphens:

\`\`\`
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2
\`\`\`

For ordered lists, use numbers:

\`\`\`
1. First item
2. Second item
3. Third item
\`\`\`

### Links

Creating links is easy with this format:

\`\`\`
[Link text](URL)
\`\`\`

For example: [Google](https://www.google.com)

### Images

Images are similar to links but with an exclamation mark at the beginning:

\`\`\`
![Alt text](image URL)
\`\`\`

## Conclusion

Markdown is a powerful yet simple tool for creating formatted content. With just a few simple syntax rules, you can create well-structured documents that are easy to read and write.

Start using Markdown today for your documentation, notes, or website content, and you'll quickly appreciate its elegance and simplicity.
`,
  },
  {
    id: "2",
    title: "The Art of Minimalist Design",
    slug: "art-of-minimalist-design",
    date: "2023-07-22",
    excerpt: "Explore the principles and practices of minimalist design and how to apply them to your own projects.",
    coverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["design", "minimalism", "aesthetics"],
    content: `
# The Art of Minimalist Design

Minimalist design is characterized by extreme simplicity and subtle sophistication. It focuses on the essential elements and removes everything unnecessary.

## Core Principles

### Simplicity

The heart of minimalist design is simplicity. Every element should serve a purpose, and anything that doesn't contribute to the functionality or core aesthetic should be eliminated.

### Negative Space

Also known as white space, negative space is the area between elements. Proper use of negative space creates breathing room and helps direct the user's attention to what matters.

### Limited Color Palette

Minimalist designs typically feature a limited color palette, often monochromatic or with just a few complementary colors. This creates a clean, harmonious look.

### Typography

Typography plays a crucial role in minimalist design. Clean, simple fonts with careful attention to size, weight, and spacing help convey information clearly without visual clutter.

## Benefits of Minimalist Design

- **Improved User Experience**: By focusing on what's important, minimalist designs can improve usability and functionality.
- **Faster Load Times**: With fewer elements, minimalist websites tend to load faster.
- **Timelessness**: Simple designs tend to age well and remain effective for longer periods.
- **Stronger Brand Message**: Without distractions, your core message can shine through more effectively.

## How to Apply Minimalist Principles

1. **Start with purpose**: Understand the core purpose of your design or product.
2. **Eliminate the non-essential**: Question every element. If it doesn't serve the core purpose, consider removing it.
3. **Focus on hierarchy**: Use size, color, and positioning to establish a clear visual hierarchy.
4. **Be intentional with space**: Use negative space deliberately to create focus and breathing room.
5. **Refine and iterate**: Minimalist design often requires multiple iterations to get right.

## Conclusion

Minimalist design isn't about making something plain or boring - it's about distilling a design down to its essential elements, creating something that communicates clearly and effectively without unnecessary complexity.

By embracing minimalist principles, you can create designs that are both beautiful and functional, focusing the user's attention exactly where you want it to go.
`,
  },
  {
    id: "3",
    title: "Building a Personal Photography Portfolio",
    slug: "building-photography-portfolio",
    date: "2023-08-10",
    excerpt: "Tips and strategies for creating an impressive photography portfolio that showcases your unique vision.",
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["photography", "portfolio", "creative"],
    content: `
# Building a Personal Photography Portfolio

A well-crafted photography portfolio is essential for showcasing your work and attracting potential clients or employers. It's a reflection of your skills, style, and creative vision.

## Selecting Your Best Work

The most challenging part of creating a portfolio is often deciding which images to include. Here are some guidelines:

- **Quality over quantity**: It's better to have 20 outstanding images than 50 mediocre ones.
- **Show variety**: Demonstrate your range while maintaining a consistent style.
- **Tell a story**: Arrange images in a way that creates a narrative or flow.
- **Update regularly**: Keep your portfolio fresh with your latest and best work.

## Organizing Your Portfolio

### By Category

Consider organizing your work into categories such as:
- Landscapes
- Portraits
- Street Photography
- Abstract
- Commercial Work

### By Project

Alternatively, organize by specific projects or series, especially if you work on themed collections.

## Platform Options

### Personal Website

A dedicated website gives you complete control over presentation and branding. Consider platforms like:
- WordPress
- Squarespace
- Wix

### Portfolio Sites

Specialized portfolio platforms offer built-in features for photographers:
- Behance
- 500px
- Flickr

### Social Media

Instagram and Pinterest can serve as supplementary portfolio channels, especially for reaching new audiences.

## Technical Considerations

### Image Quality

- Use high-resolution images, but optimize for web to ensure fast loading
- Maintain consistent dimensions for a cleaner look
- Consider watermarking if you're concerned about unauthorized use

### Mobile Responsiveness

Ensure your portfolio looks great on all devices, especially mobile phones, as many people will view your work on smaller screens.

## Presentation Tips

- **Keep design minimal**: Let your photos be the focus
- **Use ample white space**: Give each image room to breathe
- **Consistent editing style**: Maintain a cohesive look across your portfolio
- **Include brief descriptions**: Provide context when it adds value

## Conclusion

Building an effective photography portfolio is an ongoing process. Regularly review and update your collection, seeking feedback from peers and mentors to refine your presentation.

Remember that your portfolio is often your first impression - make it count by thoughtfully curating images that represent your unique vision and technical abilities.
`,
  },
];
