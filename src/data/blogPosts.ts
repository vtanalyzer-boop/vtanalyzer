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
    seoTitle: "Make a YouTube Thumbnail: Size, Background & Tools | VT Analyzer",
    description:
      "A complete guide to making a YouTube thumbnail — the right YouTube thumbnail size, how to pick a thumbnail background, free tools like Canva, phone-only methods, and the design habits that raise click-through rate.",
    excerpt:
      "Every method for making a YouTube thumbnail, from free desktop tools to phone-only apps — plus the exact size, ratio, and design habits that separate thumbnails people click from thumbnails people scroll past.",
    publishDate: "2026-08-20",
    readTime: "9 min read",
    cover: "/img/blog/cover-make-thumbnail.svg",
  },
  {
    slug: "how-to-download-a-youtube-thumbnail",
    title: "How to Download a YouTube Thumbnail (Any Resolution, Free)",
    seoTitle: "YouTube Thumbnail Downloader Guide: Save Any YT Thumbnail in HD | VT Analyzer",
    description:
      "How to download a YouTube thumbnail in HD with no thumbnail downloader needed — by link or video ID, on desktop or mobile — plus what to do when you want an Instagram thumbnail instead.",
    excerpt:
      "The direct-link method for pulling any YouTube thumbnail at its highest available resolution, a quick resolution guide, and why Instagram thumbnails need a different approach entirely.",
    publishDate: "2026-08-22",
    readTime: "7 min read",
    cover: "/img/blog/cover-download-thumbnail.svg",
  },
  {
    slug: "how-to-make-a-fortnite-thumbnail",
    title: "How to Make a Fortnite Thumbnail That Gets Clicks",
    seoTitle: "Fortnite Thumbnail Guide: Size, Background & Layout | VT Analyzer",
    description:
      "Learn how to make a Fortnite thumbnail: the right YouTube thumbnail size, the best thumbnail background, a step-by-step layout, and how to test it on mobile.",
    excerpt:
      "A step-by-step guide to a Fortnite thumbnail that stays readable on a phone: size, thumbnail background, character placement, text, and a pre-publish check.",
    publishDate: "2026-10-09",
    readTime: "6 min read",
    cover: "/img/blog/cover-fortnite-thumbnail.svg",
  },
  {
    slug: "how-much-do-thumbnail-artists-get-paid",
    title: "How Much Do Thumbnail Artists Get Paid? (And What MrBeast Pays)",
    seoTitle: "How Much Do Thumbnail Artists Get Paid? Rates & MrBeast | VT Analyzer",
    description:
      "How much do YouTube thumbnail artists get paid? Typical per-thumbnail and hourly rates, what affects pricing, and what MrBeast reportedly pays for a thumbnail.",
    excerpt:
      "Typical freelance thumbnail rates from beginner to premium, what changes the price, and the reported $10,000 MrBeast figure in context.",
    publishDate: "2026-10-09",
    readTime: "6 min read",
    cover: "/img/blog/cover-thumbnail-pay.svg",
  },
];
