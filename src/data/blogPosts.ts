export interface BlogPost {
  slug: string;
  title: string;
  /** <title> tag — deliberately different from the on-page H1 (title) */
  seoTitle: string;
  description: string;
  excerpt: string;
  publishDate: string; // ISO date
  readTime: string;
  /** Original (non-copyrighted) cover illustration, lazy-loaded */
  cover: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-make-a-youtube-thumbnail",
    title: "How to Make a YouTube Thumbnail: The Complete Guide",
    seoTitle: "Make a YouTube Thumbnail: Size, Tools & Tips | VT Analyzer",
    description:
      "A complete guide to making a YouTube thumbnail — the right size, free tools like Canva, phone-only methods, and the design habits that actually raise your click-through rate.",
    excerpt:
      "Every method for making a YouTube thumbnail, from free desktop tools to phone-only apps — plus the exact size, ratio, and design habits that separate thumbnails people click from thumbnails people scroll past.",
    publishDate: "2026-08-20",
    readTime: "9 min read",
    cover: "/img/blog/cover-make-thumbnail.svg",
  },
  {
    slug: "how-to-download-a-youtube-thumbnail",
    title: "How to Download a YouTube Thumbnail (Any Resolution, Free)",
    seoTitle: "Download YouTube Thumbnails in HD (Free) | VT Analyzer",
    description:
      "How to download a YouTube thumbnail in HD or the highest resolution available, by link or video ID, on desktop or mobile — plus what to do when you want an Instagram thumbnail instead.",
    excerpt:
      "The direct-link method for pulling any YouTube thumbnail at its highest available resolution, a quick resolution guide, and why Instagram thumbnails need a different approach entirely.",
    publishDate: "2026-08-22",
    readTime: "7 min read",
    cover: "/img/blog/cover-download-thumbnail.svg",
  },
];
