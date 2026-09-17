export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishDate: string; // ISO date
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-make-a-youtube-thumbnail",
    title: "How to Make a YouTube Thumbnail: The Complete Guide",
    description:
      "A complete guide to making a YouTube thumbnail — the right size, free tools like Canva, phone-only methods, and the design habits that actually raise your click-through rate.",
    excerpt:
      "Every method for making a YouTube thumbnail, from free desktop tools to phone-only apps — plus the exact size, ratio, and design habits that separate thumbnails people click from thumbnails people scroll past.",
    publishDate: "2026-08-20",
    readTime: "9 min read",
  },
];
