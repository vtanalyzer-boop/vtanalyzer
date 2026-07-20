export interface Faq {
  question: string;
  answer: string;
  category: "Basics" | "Sizing & Specs" | "Tools & Creation" | "Testing & Optimization" | "Rules & Policy";
}

export const faqs: Faq[] = [
  {
    category: "Basics",
    question: "What is a thumbnail?",
    answer:
      "A thumbnail is the small preview image that represents a piece of video or media content before it's opened or played. On platforms like YouTube, a thumbnail is the first thing a viewer sees in search results, suggested videos, and playlists, so its job is to summarize the video and earn the click. A strong thumbnail is clear at a small size, uses high contrast, and gives a viewer a reason to watch.",
  },
  {
    category: "Basics",
    question: "What is a YouTube thumbnail?",
    answer:
      "A YouTube thumbnail is the still image that appears next to your video's title across YouTube — in search results, the homepage feed, suggested videos, and playlists. YouTube either auto-generates one from a frame of your video or lets you upload a custom image once your channel is verified. Custom thumbnails almost always outperform auto-generated frames because creators can design them specifically for readability and click-through rate.",
  },
  {
    category: "Basics",
    question: "What is a thumbnail sketch?",
    answer:
      "A thumbnail sketch is a small, quick, rough drawing used by designers, illustrators, and filmmakers to rapidly test composition, layout, and visual balance before committing to a finished piece — the term predates YouTube and comes from print and film storyboarding. For a YouTube thumbnail, sketching a few tiny layout options first (subject placement, text zone, focal point) is a fast way to spot which composition will still read clearly at a small size before you open a design tool.",
  },
  {
    category: "Sizing & Specs",
    question: "Is YouTube thumbnail size 1280x720 or 1920x1080?",
    answer:
      "YouTube's official recommended thumbnail size is 1280×720 pixels, with a minimum width of 640 pixels, at a 16:9 aspect ratio. You can technically upload a 1920×1080 image since it shares the same 16:9 ratio, and YouTube will scale it down — but 1280×720 is the size YouTube specifically recommends because it matches the resolution thumbnails are actually displayed at, keeps file size efficient, and avoids any unnecessary upscaling artifacts. Keep the file under 2MB and save it as JPG, PNG, GIF, or BMP.",
  },
  {
    category: "Sizing & Specs",
    question: "Can I use a 4K thumbnail on YouTube?",
    answer:
      "You can upload a higher-resolution 4K image as long as it keeps the 16:9 aspect ratio and stays under YouTube's 2MB file size limit, but it offers no real benefit. YouTube displays thumbnails at relatively small sizes across its interface — often well under 720p — so extra pixels beyond 1280×720 are simply thrown away. A 4K file also takes longer to upload and is more likely to bump against the 2MB cap after compression, so 1280×720 remains the practical sweet spot.",
  },
  {
    category: "Sizing & Specs",
    question: "What is the ideal YouTube thumbnail file format and size limit?",
    answer:
      "YouTube accepts JPG, PNG, GIF, and BMP files for custom thumbnails, with a maximum file size of 2MB. JPG is generally the best choice for photographic thumbnails because it compresses efficiently without a large quality loss, while PNG is useful when you need transparency or crisp text edges. Whichever format you use, export at 1280×720 and check the file size before uploading.",
  },
  {
    category: "Tools & Creation",
    question: "What is a thumbnail maker?",
    answer:
      "A thumbnail maker is any design tool — web-based or downloadable — built to help creators produce YouTube-ready thumbnail images quickly, usually with pre-sized 16:9 canvases, templates, text tools, and stock assets. Popular thumbnail makers include Canva, Adobe Express, Fotor, and Photoshop, ranging from simple drag-and-drop template editors to full professional design software.",
  },
  {
    category: "Tools & Creation",
    question: "How do I use Canva to make a YouTube thumbnail?",
    answer:
      "In Canva, search for the 'YouTube Thumbnail' template category, which opens a canvas pre-sized to 1280×720. From there you can pick a template, swap in your own photo or video still, edit the headline text, and adjust colors to match your channel branding. Canva's free plan covers everything needed for a solid thumbnail — templates, stock photos, fonts, and one-click background removal — and you can export directly as a JPG or PNG at the correct YouTube dimensions.",
  },
  {
    category: "Tools & Creation",
    question: "How do I create a MrBeast-style thumbnail?",
    answer:
      "MrBeast-style thumbnails typically combine a few repeatable elements: an exaggerated, high-emotion facial expression shot close-up, bold and often yellow or white outlined text with a thick black stroke for contrast, a saturated and slightly oversaturated color grade, and a clear visual of the video's core hook (money, a challenge, or a dramatic object) placed next to the subject. To recreate the look, shoot or select a high-energy expression, boost saturation and contrast in editing, add short punchy text (3–5 words) with a heavy outlined font, and keep the composition simple with one obvious focal point rather than a cluttered scene.",
  },
  {
    category: "Tools & Creation",
    question: "How do I make a Fortnite thumbnail?",
    answer:
      "A strong Fortnite thumbnail usually pairs a dynamic in-game screenshot or character render — mid-action, with a skin or emote clearly visible — against a bold, high-contrast background, plus short bold text calling out the video's hook (a win, a rare skin, or a challenge). Tools like Canva, Photopea, or Photoshop offer Fortnite-thumbnail templates you can adapt, or you can capture a clean 1280×720 in-game screenshot, cut out your character, and place it over a bright gradient or gameplay background with a text callout.",
  },
  {
    category: "Tools & Creation",
    question: "Can ChatGPT make a YouTube thumbnail?",
    answer:
      "ChatGPT can generate an original thumbnail image directly (through its built-in image generation) if you describe the subject, composition, colors, and any text you want on it, and it can also write thumbnail text ideas, headline variations, or a design brief you then hand to a tool like Canva or Photoshop. Because AI-generated text inside images isn't always crisp, many creators use ChatGPT to generate the background or scene, then add the final bold headline text separately in a design tool for maximum readability.",
  },
  {
    category: "Testing & Optimization",
    question: "What is thumbnail SEO?",
    answer:
      "Thumbnail SEO refers to designing and optimizing a thumbnail so it performs well within YouTube's discovery and ranking system — not by stuffing keywords into the image, but by maximizing the click-through rate (CTR) that YouTube measures whenever your thumbnail is shown. Because CTR and average view duration directly influence how often YouTube recommends a video, a well-optimized thumbnail (clear focal point, readable text, strong contrast, and accurate framing of the content) is one of the most effective 'SEO' levers a creator controls.",
  },
  {
    category: "Testing & Optimization",
    question: "What is a thumbnail checker or thumbnail analyzer?",
    answer:
      "A thumbnail checker, or thumbnail analyzer, is a tool that evaluates a thumbnail image against the factors known to affect click-through rate — readability, contrast, focal point, color saturation, face and emotion detection, aspect ratio, file size, and branding consistency — and returns a thumbnail score along with specific suggestions for improvement. Instead of guessing whether your thumbnail will work, a thumbnail analyzer gives you objective, side-by-side feedback before you publish.",
  },
  {
    category: "Testing & Optimization",
    question: "What is a thumbnail score checker and how is the score calculated?",
    answer:
      "A thumbnail score checker converts a set of visual signals — text readability, contrast, focal point strength, color saturation, aspect ratio, file size, and branding — into a single numeric grade (often out of 100), weighted by how much each factor tends to influence real-world click-through rate. Our analyzer generates separate mobile and web scores, since a thumbnail often reads very differently at a small mobile size than it does on a large desktop screen.",
  },
  {
    category: "Testing & Optimization",
    question: "Where can I test my thumbnails?",
    answer:
      "You can test your thumbnail's design quality instantly with a free thumbnail analyzer like this one, which scores readability, contrast, and mobile-vs-web appearance before you upload anything to YouTube. For real-world performance testing after publishing, YouTube Studio's built-in A/B testing feature (under Content → Details → Test & Compare) lets you try up to three thumbnail variants on a live video and see which one earns the higher click-through rate from actual viewers.",
  },
  {
    category: "Testing & Optimization",
    question: "Why does my thumbnail look different on mobile than on desktop?",
    answer:
      "Mobile screens are dramatically smaller than desktop monitors, and YouTube's mobile app also displays thumbnails at a smaller pixel size within feeds and search results, so small text, thin fonts, and subtle details that look fine on a large screen can become unreadable or invisible on a phone. Since most YouTube watch time comes from mobile devices, designing and testing specifically for how a thumbnail renders on mobile is essential — which is why our analyzer generates a dedicated mobile preview and mobile score alongside the desktop one.",
  },
  {
    category: "Rules & Policy",
    question: "What is not allowed in YouTube thumbnails?",
    answer:
      "YouTube's Community Guidelines prohibit thumbnails containing sexually explicit or gratuitously shocking imagery, graphic violence or gore, misleading or deceptive content that doesn't reflect the actual video (clickbait shock imagery, fake 'play button' overlays, or misleading medical claims), hate speech or harassment, and content that promotes dangerous or illegal activity. Thumbnails also can't infringe on copyright or use another creator's likeness deceptively. Violations can result in the thumbnail being removed, the video being age-restricted, or, for repeated violations, penalties against the channel.",
  },
  {
    category: "Rules & Policy",
    question: "Do I need to be a verified YouTube channel to upload custom thumbnails?",
    answer:
      "Yes — YouTube requires phone number verification before it unlocks the ability to upload custom thumbnails, along with other features like longer video uploads. You can verify your channel for free in YouTube Studio under Settings → Channel → Feature eligibility. Without verification, YouTube will only display an auto-generated frame pulled from your video.",
  },
];
