import Image from "next/image";
import Link from "next/link";

// Sample blog post data - in a real app this would come from a CMS or database
const blogPosts: Record<string, {
  title: string;
  category: string;
  date: string;
  tags: string[];
  heroImage: string;
  content: {
    heading: string;
    paragraphs: string[];
    quote: {
      text: string;
      author: string;
      role: string;
      avatar: string;
    };
    bulletList: {
      title: string;
      items: string[];
    };
    numberedList: {
      title: string;
      items: string[];
    };
    images: {
      src: string;
      caption: string;
      isLink?: boolean;
    }[];
  };
  relatedPosts: {
    slug: string;
    title: string;
    category: string;
    image: string;
    excerpt: string;
    tags: string[];
    date: string;
  }[];
}> = {
  "setup-your-own-podcast": {
    title: "Setup Your Own Podcast",
    category: "PODCAST",
    date: "Sep 14, 2021",
    tags: ["business", "podcast", "startup"],
    heroImage: "/images/blog-setup-podcast.png",
    content: {
      heading: "Getting started with your own podcast studio",
      paragraphs: [
        "Starting your own podcast is one of the most <strong>rewarding creative endeavors</strong> you can undertake. Whether you want to share your expertise, tell compelling stories, or simply connect with like-minded individuals, podcasting offers a unique platform to reach audiences worldwide.",
        "The beauty of podcasting lies in its <strong>accessibility</strong>. You don't need a massive budget or professional studio to get started. With the right approach and <strong>consistent effort</strong>, you can build a loyal audience from your home office or spare room. <a href='#'>Learn more about equipment</a>",
        "In this guide, we'll walk you through everything you need to know about launching your podcast, from choosing the right equipment to developing your content strategy and growing your listener base."
      ],
      quote: {
        text: "Starting a podcast changed my life...",
        author: "John Smith",
        role: "Podcast Host",
        avatar: "/images/blog-avatar-john.png"
      },
      bulletList: {
        title: "Equipment you need:",
        items: [
          "A quality <strong>microphone</strong> is essential for clear audio. Consider USB microphones for beginners or XLR for professional setups.",
          "Good <strong>headphones</strong> help you monitor your audio levels and catch any issues during recording sessions.",
          "Recording <strong>software</strong> like Audacity (free) or Adobe Audition can help you edit and produce professional-sounding episodes."
        ]
      },
      numberedList: {
        title: "Steps to launch:",
        items: [
          "Define your <strong>niche and target audience</strong>. Understanding who you're speaking to helps shape your content and marketing strategy.",
          "Plan your <strong>content calendar</strong> and episode format. Consistency is key to building a loyal listener base.",
          "Choose your <strong>hosting platform</strong> and submit to directories like Spotify, Apple Podcasts, and Google Podcasts."
        ]
      },
      images: []
    },
    relatedPosts: [
      {
        slug: "doodle-artwork-101",
        title: "Doodle Artwork 101",
        category: "TIPS & TRICK",
        image: "/images/blog-doodle-hero.png",
        excerpt: "Master the art of doodling with these beginner-friendly techniques. Learn how simple sketches can boost creativity and reduce stress.",
        tags: ["art", "creative", "tips and trick"],
        date: "Sep 12, 2021"
      },
      {
        slug: "how-to-be-productive",
        title: "How to Be Productive",
        category: "PRODUCTIVITY",
        image: "/images/blog-productive.png",
        excerpt: "Proven strategies and techniques to maximize your productivity. Learn about time management, focus techniques, and building habits that lead to success.",
        tags: ["productivity", "mindset"],
        date: "Sep 8, 2021"
      }
    ]
  },
  "doodle-artwork-101": {
    title: "Doodle Artwork 101",
    category: "TIPS & TRICKS",
    date: "Sep 12, 2021",
    tags: ["art", "tips and trick", "creative"],
    heroImage: "/images/blog-doodle-hero.png",
    content: {
      heading: "Doodle for our podcast background room",
      paragraphs: [
        "Doodling isn't just for daydreamers—it's a <strong>powerful creative tool</strong> that can enhance your focus, boost memory retention, and unleash your artistic potential. Whether you're a seasoned artist or complete beginner, doodling offers endless possibilities for self-expression.",
        "The beauty of doodling lies in its <strong>simplicity</strong>. There are no rules, no right or wrong way to create. Every mark you make is <strong>uniquely yours</strong>, telling a story or capturing a moment in time. <a href='#'>Explore doodle techniques</a>",
        "In this article, we'll explore various doodling techniques, from basic patterns to more complex designs, and show you how to incorporate them into your podcast setup or personal creative projects."
      ],
      quote: {
        text: "Every doodle tells a story. Don't be afraid to let your pen wander and see where it takes you.",
        author: "John Smith",
        role: "Social Community Manager",
        avatar: "/images/blog-avatar-john.png"
      },
      bulletList: {
        title: "Essential doodling tips:",
        items: [
          "Start with <strong>basic shapes</strong>—circles, squares, and triangles form the foundation of most doodle patterns and designs.",
          "Practice <strong>repetitive patterns</strong>. Zentangle-style doodling is meditative and helps develop muscle memory for consistent line work.",
          "Experiment with <strong>different pens</strong> and line weights. Fine-tip markers, gel pens, and brush pens each create unique effects."
        ]
      },
      numberedList: {
        title: "Getting started:",
        items: [
          "Gather your <strong>supplies</strong>—a simple notebook and your favorite pen are all you need to begin your doodling journey.",
          "Find <strong>inspiration</strong> in everyday objects, nature, or abstract concepts. Let your imagination guide your hand.",
          "Practice <strong>daily</strong>, even if just for five minutes. Consistency builds skill and confidence over time."
        ]
      },
      images: [
        {
          src: "/images/blog-doodle-artwork.png",
          caption: "this is an image with a caption example"
        },
        {
          src: "/images/blog-doodle.png",
          caption: "download here",
          isLink: true
        }
      ]
    },
    relatedPosts: [
      {
        slug: "setup-your-own-podcast",
        title: "Setup Your Own Podcast",
        category: "PODCAST",
        image: "/images/blog-setup-podcast.png",
        excerpt: "Everything you need to know about starting your own podcast, from choosing equipment to growing your audience.",
        tags: ["business", "startup"],
        date: "Sep 14, 2021"
      },
      {
        slug: "doodle-artwork-101",
        title: "Doodle Artwork 101",
        category: "TIPS & TRICK",
        image: "/images/blog-doodle-hero.png",
        excerpt: "Master the art of doodling with these beginner-friendly techniques. Learn how simple sketches can boost creativity.",
        tags: ["art", "creative", "tips and trick"],
        date: "Sep 12, 2021"
      }
    ]
  },
  "mother-nature-taking-over": {
    title: "Mother Nature Taking Over",
    category: "NEWS",
    date: "Sep 10, 2021",
    tags: ["news", "nature"],
    heroImage: "/images/blog-mother-nature.png",
    content: {
      heading: "How nature is reclaiming urban spaces",
      paragraphs: [
        "Across the globe, nature is staging a remarkable <strong>comeback in urban environments</strong>. From wildflowers sprouting through concrete to wildlife returning to city centers, the signs are everywhere that our planet is resilient and adaptable.",
        "This environmental shift represents both a <strong>challenge and opportunity</strong>. As urban development patterns change and communities embrace <strong>sustainable living</strong>, we're witnessing a new relationship between humans and nature. <a href='#'>Read about rewilding projects</a>",
        "In this article, we explore the most inspiring examples of nature's resurgence and what they mean for the future of our cities and communities."
      ],
      quote: {
        text: "Nature always finds a way...",
        author: "John Smith",
        role: "Environmental Writer",
        avatar: "/images/blog-avatar-john.png"
      },
      bulletList: {
        title: "Signs of nature's return:",
        items: [
          "Increased <strong>wildlife sightings</strong> in urban areas as animals reclaim abandoned spaces and adapt to city environments.",
          "Urban <strong>green spaces</strong> are expanding as cities prioritize parks and nature reserves for community wellbeing.",
          "Community <strong>gardening projects</strong> are transforming vacant lots into thriving ecosystems and food sources."
        ]
      },
      numberedList: {
        title: "How to help:",
        items: [
          "Plant <strong>native species</strong> in your garden to support local wildlife and pollinators.",
          "Reduce your <strong>carbon footprint</strong> by using public transport, cycling, or walking when possible.",
          "Support <strong>conservation efforts</strong> by donating to or volunteering with environmental organizations."
        ]
      },
      images: []
    },
    relatedPosts: [
      {
        slug: "setup-your-own-podcast",
        title: "Setup Your Own Podcast",
        category: "PODCAST",
        image: "/images/blog-setup-podcast.png",
        excerpt: "Everything you need to know about starting your own podcast, from choosing equipment to growing your audience.",
        tags: ["business", "startup"],
        date: "Sep 14, 2021"
      },
      {
        slug: "how-to-be-productive",
        title: "How to Be Productive",
        category: "PRODUCTIVITY",
        image: "/images/blog-productive.png",
        excerpt: "Proven strategies and techniques to maximize your productivity and achieve your goals.",
        tags: ["productivity", "mindset"],
        date: "Sep 8, 2021"
      }
    ]
  },
  "how-to-be-productive": {
    title: "How to Be Productive",
    category: "PRODUCTIVITY",
    date: "Sep 8, 2021",
    tags: ["productivity", "mindset"],
    heroImage: "/images/blog-productive.png",
    content: {
      heading: "Mastering productivity in the modern age",
      paragraphs: [
        "In today's fast-paced world, productivity isn't just about doing more—it's about doing what <strong>truly matters</strong>. The key to sustainable productivity lies in understanding your personal rhythms, eliminating distractions, and focusing on high-impact tasks.",
        "Many people confuse being <strong>busy</strong> with being <strong>productive</strong>. True productivity requires intentionality, clear priorities, and the discipline to say no to things that don't align with your goals. <a href='#'>Discover productivity frameworks</a>",
        "In this guide, we'll share proven strategies used by top performers to maximize their output while maintaining work-life balance and avoiding burnout."
      ],
      quote: {
        text: "Productivity is not about doing more, it's about doing what matters...",
        author: "John Smith",
        role: "Productivity Coach",
        avatar: "/images/blog-avatar-john.png"
      },
      bulletList: {
        title: "Key habits for productivity:",
        items: [
          "Start your day with a <strong>morning routine</strong> that energizes you and sets a positive tone for the rest of the day.",
          "Use <strong>time blocking</strong> to dedicate specific hours to focused work without distractions or interruptions.",
          "Take regular <strong>breaks</strong> to recharge. The Pomodoro technique suggests 25 minutes of work followed by 5-minute breaks."
        ]
      },
      numberedList: {
        title: "Steps to get started:",
        items: [
          "Identify your <strong>most important tasks</strong> (MITs) each day and tackle them first when your energy is highest.",
          "Eliminate <strong>distractions</strong> by turning off notifications, using website blockers, or finding a quiet workspace.",
          "Review your <strong>progress weekly</strong> to celebrate wins and adjust your approach for continuous improvement."
        ]
      },
      images: []
    },
    relatedPosts: [
      {
        slug: "setup-your-own-podcast",
        title: "Setup Your Own Podcast",
        category: "PODCAST",
        image: "/images/blog-setup-podcast.png",
        excerpt: "Everything you need to know about starting your own podcast, from choosing equipment to growing your audience.",
        tags: ["business", "startup"],
        date: "Sep 14, 2021"
      },
      {
        slug: "doodle-artwork-101",
        title: "Doodle Artwork 101",
        category: "TIPS & TRICK",
        image: "/images/blog-doodle-hero.png",
        excerpt: "Master the art of doodling with these beginner-friendly techniques. Learn how simple sketches can boost creativity.",
        tags: ["art", "creative", "tips and trick"],
        date: "Sep 12, 2021"
      }
    ]
  }
};

// Default post for any slug not found
const defaultPost = blogPosts["doodle-artwork-101"];

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug] || defaultPost;

  return (
    <main className="relative overflow-x-hidden">
      {/* Hero Title Section */}
      <section className="relative bg-[#F7EDE8]">
        {/* Decorative Vector Left */}
        <div className="absolute left-[-304px] top-[70px] w-[630px] h-[592px] opacity-30">
          <Image
            src="/icons/Vector 4.png"
            alt="Swirl decoration"
            fill
            className="object-contain"
          />
        </div>
        
        {/* Decorative Vector Right */}
        <div className="absolute right-[0] top-[234px] w-[120px] h-[167px]">
          <Image
            src="/icons/Group 48095792.png"
            alt="Stars decoration"
            fill
            className="object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="container mx-auto px-[140px] py-6 relative z-10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative w-[74px] h-[74px]">
                <Image
                  src="/icons/Ellipse.png"
                  alt="Logo background"
                  width={64}
                  height={64}
                  className="absolute left-0 top-1"
                />
                <div className="absolute left-[35px] top-[31px] text-[14px] font-bold leading-[0.9] tracking-[-0.56px]">
                  <p className="text-[#CD4631] mb-0">POD</p>
                  <p className="text-black">OF</p>
                  <p className="text-black">CAST</p>
                </div>
              </div>
            </Link>

            {/* Menu Items */}
            <div className="flex items-center gap-[60px]">
              <Link href="/podcast/perplexed-mind" className="text-[16px] font-bold text-black hover:text-[#CD4631] transition-colors">
                Episodes
              </Link>
              <Link href="/about" className="text-[16px] font-bold text-black hover:text-[#CD4631] transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-[16px] font-bold text-black hover:text-[#CD4631] transition-colors">
                Blog
              </Link>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-5">
              <Link href="/podcast/perplexed-mind" className="px-6 py-3 border-2 border-black rounded-lg text-[14px] font-bold text-black hover:bg-black hover:text-white transition-colors">
                RECENT EPISODES
              </Link>
              <button className="px-6 py-3 bg-black rounded-lg text-[14px] font-bold text-white shadow-[3px_3px_0px_rgba(0,0,0,0.25)] hover:bg-[#CD4631] transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </nav>

        {/* Back Button & Date Row */}
        <div className="container mx-auto px-[140px] pt-[60px] relative z-10">
          <div className="flex items-center justify-between">
            <Link href="/blog" className="flex items-center gap-[10px] group">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-[-4px] transition-transform">
                <path d="M15 6L9 12L15 18" stroke="#4D4D4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[14px] font-medium text-[#4D4D4D] leading-[1.6] group-hover:text-[#CD4631] transition-colors">
                Back to articles
              </span>
            </Link>
            <span className="text-[14px] font-medium text-[#4D4D4D] leading-[1.6]">
              {post.date}
            </span>
          </div>
        </div>

        {/* Title Content */}
        <div className="container mx-auto px-[140px] pt-[60px] pb-[60px] text-center relative z-10">
          {/* Category */}
          <p className="text-[14px] font-bold text-[#CD4631] leading-[1.6] mb-[10px]">
            {post.category}
          </p>
          
          {/* Title */}
          <h1 className="text-[59.3px] font-bold text-black leading-[1.2] tracking-[-1.186px] mb-[20px]">
            {post.title}
          </h1>
          
          {/* Tags */}
          <div className="flex items-center justify-center gap-[6px] mb-[30px]">
            {post.tags.map((tag, index) => (
              <div key={index} className="px-[12px] py-[6px] border border-[#4D4D4D] rounded-[4px]">
                <span className="text-[14px] font-medium text-[#4D4D4D] leading-[1.6]">{tag}</span>
              </div>
            ))}
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center justify-center gap-[25px]">
            <Link href="#" className="hover:opacity-70 transition-opacity">
              <Image
                src="/icons/twitter.png"
                alt="Twitter"
                width={24}
                height={24}
                className="text-[#CD4631]"
              />
            </Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">
              <Image
                src="/icons/instagram.png"
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">
              <Image
                src="/icons/tiktok.png"
                alt="TikTok"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-[960px]">
          <Image
            src={post.heroImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Article Content Section */}
      <section className="bg-white py-[100px]">
        <div className="container mx-auto px-[140px]">
          {/* Scribble decoration */}
          <div className="relative mb-[20px]">
            <div className="absolute left-[-50px] top-[-30px] w-[146px] h-[146px] rotate-[-45deg] opacity-30">
              <Image
                src="/icons/Scribble.png"
                alt="Scribble decoration"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-[36.65px] font-bold text-black leading-[1.4] tracking-[-0.733px] text-center mb-[80px]">
            {post.content.heading}
          </h2>

          {/* Two Column Paragraphs */}
          <div className="grid grid-cols-2 gap-[20px] mb-[60px]">
            <div className="text-[16px] font-medium text-[#4D4D4D] leading-[1.6]">
              <p className="mb-4" dangerouslySetInnerHTML={{ __html: post.content.paragraphs[0].replace(/<strong>/g, '<strong class="font-bold text-black">') }} />
              <p dangerouslySetInnerHTML={{ __html: post.content.paragraphs[1].replace(/<strong>/g, '<strong class="font-bold text-black">').replace(/<a /g, '<a class="text-black underline" ') }} />
            </div>
            <div className="text-[16px] font-medium text-[#4D4D4D] leading-[1.6]">
              <p dangerouslySetInnerHTML={{ __html: post.content.paragraphs[2] }} />
            </div>
          </div>

          {/* Separator Line */}
          <div className="w-full h-[1px] bg-black/20 mb-[100px]"></div>

          {/* Quote Block */}
          <div className="relative bg-[#F7EDE8] rounded-[8px] px-[60px] py-[60px] mb-[100px]">
            {/* Decorative Vector */}
            <div className="absolute left-[-60px] bottom-[-20px] w-[120px] h-[120px] opacity-30">
              <Image
                src="/icons/Vector 4.png"
                alt="Decoration"
                fill
                className="object-contain"
              />
            </div>
            
            {/* Star decoration */}
            <div className="absolute right-[60px] top-[-40px] w-[200px] h-[200px]">
              <Image
                src="/icons/Star 2.png"
                alt="Star decoration"
                fill
                className="object-contain"
              />
            </div>

            {/* Quote Mark */}
            <p className="text-[96px] font-bold text-[#CD4631] leading-none text-center mb-[-20px]">
              &ldquo;
            </p>
            
            {/* Quote Text */}
            <p className="text-[36.65px] font-bold text-black leading-[1.4] tracking-[-0.733px] text-center mb-[40px]">
              {post.content.quote.text}
            </p>
            
            {/* Author Info */}
            <div className="flex items-center justify-center gap-[10px]">
              <div className="w-[48px] h-[48px] rounded-full overflow-hidden relative">
                <Image
                  src={post.content.quote.avatar}
                  alt={post.content.quote.author}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-[14px] font-medium text-black leading-[1.6]">
                {post.content.quote.author}
              </span>
              <div className="flex items-center gap-[8px]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="6" fill="#1DB954"/>
                  <path d="M6 6C8 5 10 5 12 6" stroke="white" strokeWidth="1" strokeLinecap="round"/>
                  <path d="M6.5 8.5C8 7.5 10 7.5 11.5 8.5" stroke="white" strokeWidth="1" strokeLinecap="round"/>
                  <path d="M7 11C8 10 10 10 11 11" stroke="white" strokeWidth="0.8" strokeLinecap="round"/>
                </svg>
                <span className="text-[14px] font-bold text-black leading-[1.6]">
                  {post.content.quote.role}
                </span>
              </div>
            </div>
          </div>

          {/* Lists Section */}
          <div className="grid grid-cols-2 gap-[20px] mb-[100px]">
            {/* Bullet List */}
            <div className="flex flex-col gap-[60px]">
              <h3 className="text-[22.65px] font-bold text-black leading-[1.4] tracking-[-0.453px] text-center">
                {post.content.bulletList.title}
              </h3>
              <div className="flex flex-col gap-[40px]">
                {post.content.bulletList.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-[20px]">
                    <div className="w-[8px] h-[8px] rounded-full bg-[#CD4631] mt-[10px] flex-shrink-0" />
                    <p 
                      className="text-[16px] font-medium text-[#4D4D4D] leading-[1.6]"
                      dangerouslySetInnerHTML={{ 
                        __html: item
                          .replace(/<strong>/g, '<strong class="font-bold text-black">')
                          .replace(/<a /g, '<a class="text-black underline" ')
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Numbered List */}
            <div className="flex flex-col gap-[60px]">
              <h3 className="text-[22.65px] font-bold text-black leading-[1.4] tracking-[-0.453px] text-center">
                {post.content.numberedList.title}
              </h3>
              <div className="flex flex-col gap-[40px]">
                {post.content.numberedList.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-[20px]">
                    <span className="text-[16px] font-bold text-[#CD4631] leading-[1.6] flex-shrink-0">
                      {index + 1}.
                    </span>
                    <p 
                      className="text-[16px] font-medium text-[#4D4D4D] leading-[1.6]"
                      dangerouslySetInnerHTML={{ 
                        __html: item
                          .replace(/<strong>/g, '<strong class="font-bold text-black">')
                          .replace(/<a /g, '<a class="text-black underline" ')
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Images with Captions */}
          <div className="grid grid-cols-2 gap-[20px]">
            {/* Colorful Doodle SVG */}
            <div className="flex flex-col gap-[20px] items-center">
              <div className="w-[570px] h-[400px] rounded-[8px] overflow-hidden bg-white">
                <svg viewBox="0 0 570 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  {/* Background shapes and doodles - Colorful version */}
                  {/* Large red swirl */}
                  <path d="M120 180C140 140 180 120 220 140C260 160 280 200 260 240C240 280 200 300 160 280" stroke="#CD4631" strokeWidth="8" strokeLinecap="round" fill="none"/>
                  <path d="M160 280C130 260 110 220 130 180" stroke="#CD4631" strokeWidth="8" strokeLinecap="round" fill="none"/>
                  
                  {/* Blue curved lines top right */}
                  <path d="M380 60C420 40 460 50 480 80C500 110 490 150 460 170" stroke="#81ADC8" strokeWidth="6" strokeLinecap="round" fill="none"/>
                  <path d="M420 100C440 90 460 95 470 110" stroke="#81ADC8" strokeWidth="4" strokeLinecap="round" fill="none"/>
                  
                  {/* Red question mark shape */}
                  <path d="M300 80C320 60 360 60 380 80C400 100 400 140 380 160C360 180 340 180 340 200" stroke="#CD4631" strokeWidth="6" strokeLinecap="round" fill="none"/>
                  <circle cx="340" cy="220" r="6" fill="#CD4631"/>
                  
                  {/* Black spirals and shapes */}
                  <path d="M80 80C100 70 120 80 130 100C140 120 130 140 110 150C90 160 70 150 60 130" stroke="black" strokeWidth="4" strokeLinecap="round" fill="none"/>
                  <path d="M500 200C520 180 550 190 560 220C570 250 550 280 520 290" stroke="black" strokeWidth="5" strokeLinecap="round" fill="none"/>
                  
                  {/* Small circles and dots */}
                  <circle cx="200" cy="60" r="8" fill="black"/>
                  <circle cx="220" cy="80" r="5" fill="black"/>
                  <circle cx="450" cy="250" r="10" fill="black"/>
                  <circle cx="480" cy="270" r="6" fill="black"/>
                  <circle cx="100" cy="300" r="12" fill="black"/>
                  
                  {/* Blue wavy lines */}
                  <path d="M40 250C60 240 80 260 100 250C120 240 140 260 160 250" stroke="#81ADC8" strokeWidth="5" strokeLinecap="round" fill="none"/>
                  <path d="M350 300C370 290 390 310 410 300C430 290 450 310 470 300" stroke="#81ADC8" strokeWidth="4" strokeLinecap="round" fill="none"/>
                  
                  {/* Red accent shapes */}
                  <path d="M520 80L540 60L560 80L540 100Z" fill="#CD4631"/>
                  <path d="M60 180L80 160L100 180L80 200Z" fill="#CD4631"/>
                  
                  {/* Gray elements */}
                  <path d="M280 280C300 260 330 270 340 290C350 310 340 340 310 350" stroke="#9CA3AF" strokeWidth="4" strokeLinecap="round" fill="none"/>
                  <path d="M180 340C200 330 220 340 230 360" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round" fill="none"/>
                  
                  {/* Black abstract shapes */}
                  <path d="M400 140C410 130 430 130 440 140C450 150 450 170 440 180" stroke="black" strokeWidth="4" strokeLinecap="round" fill="none"/>
                  <path d="M250 320C260 310 280 310 290 320" stroke="black" strokeWidth="3" strokeLinecap="round" fill="none"/>
                  
                  {/* Exclamation marks */}
                  <rect x="150" y="260" width="6" height="30" rx="3" fill="black"/>
                  <circle cx="153" cy="300" r="4" fill="black"/>
                  
                  {/* Small triangles */}
                  <path d="M320 40L330 20L340 40Z" fill="black"/>
                  <path d="M480 320L490 300L500 320Z" fill="black"/>
                  
                  {/* Curved S shapes */}
                  <path d="M40 120C60 100 80 110 80 130C80 150 60 160 40 150C20 140 20 120 40 100" stroke="black" strokeWidth="3" strokeLinecap="round" fill="none"/>
                  
                  {/* Dots pattern */}
                  <circle cx="300" cy="180" r="4" fill="black"/>
                  <circle cx="315" cy="175" r="3" fill="black"/>
                  <circle cx="305" cy="195" r="3" fill="black"/>
                  <circle cx="320" cy="190" r="4" fill="black"/>
                  
                  {/* Blue cloud-like shape */}
                  <path d="M200 380C180 370 170 350 180 330C190 310 220 300 250 310C280 320 300 350 290 380" stroke="#81ADC8" strokeWidth="5" strokeLinecap="round" fill="none"/>
                  
                  {/* Red swirl bottom */}
                  <path d="M400 350C420 330 450 340 460 360C470 380 460 400 440 400" stroke="#CD4631" strokeWidth="5" strokeLinecap="round" fill="none"/>
                  
                  {/* Small lines and accents */}
                  <line x1="530" y1="140" x2="550" y2="160" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="550" y1="140" x2="530" y2="160" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                  
                  {/* Champagne colored circle */}
                  <circle cx="140" cy="120" r="15" fill="#F7EDE8" stroke="black" strokeWidth="2"/>
                  
                  {/* Additional decorative elements */}
                  <path d="M360 220C380 210 400 220 410 240" stroke="black" strokeWidth="3" strokeLinecap="round" fill="none"/>
                  <path d="M60 350C80 340 100 350 110 370" stroke="black" strokeWidth="3" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
              <p className="text-[14px] font-medium text-[#4D4D4D] leading-[1.6]">
                this is an image with a caption example
              </p>
            </div>

            {/* Black and White Doodle SVG */}
            <div className="flex flex-col gap-[20px] items-center">
              <div className="w-[570px] h-[400px] rounded-[8px] overflow-hidden bg-white">
                <svg viewBox="0 0 570 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  {/* Black and white doodles */}
                  {/* Large swirl */}
                  <path d="M100 150C130 100 180 80 230 100C280 120 300 180 270 230C240 280 180 290 130 260C80 230 70 180 100 150" stroke="black" strokeWidth="6" strokeLinecap="round" fill="none"/>
                  
                  {/* Curved lines top */}
                  <path d="M350 50C400 30 450 50 480 90C510 130 500 180 460 210" stroke="black" strokeWidth="5" strokeLinecap="round" fill="none"/>
                  <path d="M380 80C410 70 440 80 460 110" stroke="black" strokeWidth="4" strokeLinecap="round" fill="none"/>
                  
                  {/* Question mark shapes */}
                  <path d="M280 60C310 40 350 50 370 80C390 110 380 150 350 170C320 190 300 200 300 230" stroke="black" strokeWidth="5" strokeLinecap="round" fill="none"/>
                  <circle cx="300" cy="250" r="6" fill="black"/>
                  
                  {/* S-curve */}
                  <path d="M500 120C520 100 550 110 560 140C570 170 550 200 520 210C490 220 460 210 450 180" stroke="black" strokeWidth="5" strokeLinecap="round" fill="none"/>
                  
                  {/* Spiral */}
                  <path d="M60 80C90 60 120 70 130 100C140 130 120 160 90 170C60 180 30 160 30 130C30 100 50 80 80 80" stroke="black" strokeWidth="4" strokeLinecap="round" fill="none"/>
                  
                  {/* Wavy lines */}
                  <path d="M40 280C70 260 100 280 130 260C160 240 190 260 220 240" stroke="black" strokeWidth="5" strokeLinecap="round" fill="none"/>
                  <path d="M320 320C350 300 380 320 410 300C440 280 470 300 500 280" stroke="black" strokeWidth="4" strokeLinecap="round" fill="none"/>
                  
                  {/* Circles and dots */}
                  <circle cx="180" cy="50" r="10" fill="black"/>
                  <circle cx="200" cy="70" r="6" fill="black"/>
                  <circle cx="420" cy="260" r="12" fill="black"/>
                  <circle cx="450" cy="280" r="7" fill="black"/>
                  <circle cx="80" cy="320" r="14" fill="black"/>
                  <circle cx="110" cy="340" r="8" fill="black"/>
                  
                  {/* Curved brackets */}
                  <path d="M520 60C540 80 540 120 520 140" stroke="black" strokeWidth="4" strokeLinecap="round" fill="none"/>
                  <path d="M540 60C560 80 560 120 540 140" stroke="black" strokeWidth="4" strokeLinecap="round" fill="none"/>
                  
                  {/* Abstract shapes */}
                  <path d="M250 300C280 280 320 290 340 320C360 350 350 390 310 400" stroke="black" strokeWidth="5" strokeLinecap="round" fill="none"/>
                  
                  {/* Small triangles */}
                  <path d="M160 120L175 95L190 120Z" fill="black"/>
                  <path d="M470 350L485 325L500 350Z" fill="black"/>
                  <path d="M380 180L395 155L410 180Z" fill="black"/>
                  
                  {/* Dots cluster */}
                  <circle cx="280" cy="150" r="5" fill="black"/>
                  <circle cx="295" cy="145" r="4" fill="black"/>
                  <circle cx="285" cy="165" r="4" fill="black"/>
                  <circle cx="300" cy="160" r="5" fill="black"/>
                  <circle cx="310" cy="150" r="3" fill="black"/>
                  
                  {/* Squiggly lines */}
                  <path d="M400 200C420 190 430 210 450 200C470 190 480 210 500 200" stroke="black" strokeWidth="4" strokeLinecap="round" fill="none"/>
                  
                  {/* Hook shapes */}
                  <path d="M180 200C200 180 230 190 240 220C250 250 230 280 200 280" stroke="black" strokeWidth="4" strokeLinecap="round" fill="none"/>
                  
                  {/* Small lines */}
                  <line x1="530" y1="180" x2="550" y2="200" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="550" y1="180" x2="530" y2="200" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="50" y1="220" x2="70" y2="240" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                  <line x1="70" y1="220" x2="50" y2="240" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                  
                  {/* Curved accent */}
                  <path d="M340 380C360 370 380 380 390 400" stroke="black" strokeWidth="4" strokeLinecap="round" fill="none"/>
                  <path d="M150" y="360C170 350 190 360 200 380" stroke="black" strokeWidth="4" strokeLinecap="round" fill="none"/>
                  
                  {/* Additional swirls */}
                  <path d="M480 380C500 360 530 370 540 400" stroke="black" strokeWidth="5" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
              <a href="#" className="text-[14px] font-medium text-[#CD4631] leading-[1.6] underline hover:no-underline">
                download here
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="relative bg-[#F7EDE8] py-[100px]">
        {/* Star decoration */}
        <div className="absolute left-[100px] top-[80px] w-[200px] h-[200px]">
          <Image
            src="/icons/Star 2.png"
            alt="Star decoration"
            fill
            className="object-contain"
          />
        </div>

        {/* Scribble decoration bottom right */}
        <div className="absolute right-[50px] bottom-[100px] w-[120px] h-[120px] opacity-50">
          <Image
            src="/icons/Scribble.png"
            alt="Scribble decoration"
            fill
            className="object-contain"
          />
        </div>

        <div className="container mx-auto px-[140px]">
          {/* Section Header */}
          <div className="text-center mb-[60px]">
            <h2 className="text-[59.3px] font-bold text-black leading-[1.2] tracking-[-1.186px] italic mb-[20px]">
              Related Article
            </h2>
            <p className="text-[16px] font-medium text-[#4D4D4D] leading-[1.6]">
              News, Tips, Tricks and more
            </p>
          </div>

          {/* Related Posts Grid */}
          <div className="grid grid-cols-2 gap-[20px] mb-[60px]">
            {post.relatedPosts.map((relatedPost, index) => (
              <Link 
                key={index}
                href={`/blog/${relatedPost.slug}`}
                className="bg-white border-2 border-black rounded-[8px] overflow-hidden cursor-pointer hover:shadow-[10px_10px_0px_#000000] transition-shadow"
              >
                {/* Image */}
                <div className="relative h-[320px] m-[16px] rounded-[8px] overflow-hidden">
                  <Image
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="px-[16px] pb-[16px]">
                  {/* Category & Title */}
                  <div className="mb-[20px]">
                    <p className="text-[14px] font-bold text-[#4D4D4D] leading-[1.6] mb-[6px]">
                      {relatedPost.category}
                    </p>
                    <h3 className={`text-[36.65px] font-bold leading-[1.4] tracking-[-0.733px] ${index === 0 ? 'text-[#CD4631]' : 'text-black'}`}>
                      {relatedPost.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[14px] font-medium text-[#4D4D4D] leading-[1.6] mb-[20px]">
                    {relatedPost.excerpt}
                  </p>

                  {/* Separator */}
                  <div className="w-full h-[1px] bg-black/20 mb-[20px]"></div>

                  {/* Tags & Date */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-[6px]">
                      {relatedPost.tags.map((tag, tagIndex) => (
                        <div key={tagIndex} className="px-[12px] py-[6px] border border-[#4D4D4D] rounded-[4px]">
                          <span className="text-[12px] font-medium text-[#4D4D4D]">{tag}</span>
                        </div>
                      ))}
                    </div>
                    <span className="text-[12px] font-bold text-[#4D4D4D]">{relatedPost.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Browse All Button */}
          <div className="flex justify-center">
            <Link 
              href="/blog"
              className="px-[24px] py-[12px] bg-black rounded-[8px] text-[14px] font-bold text-white hover:bg-[#CD4631] transition-colors"
            >
              BROWSE ALL
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - App Download */}
      <section className="relative bg-[#EDF3F7] py-[100px] min-h-[650px]">
        {/* Sparkle decorations on left */}
        <div className="absolute left-[30px] top-[280px]">
          <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35 5L38 28L65 35L38 42L35 65L32 42L5 35L32 28L35 5Z" stroke="#CD4631" strokeWidth="1.5" fill="none"/>
          </svg>
        </div>
        <div className="absolute left-[95px] top-[360px]">
          <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5 3L25 18L42 22.5L25 27L22.5 42L20 27L3 22.5L20 18L22.5 3Z" stroke="#CD4631" strokeWidth="1.5" fill="none"/>
          </svg>
        </div>
        <div className="absolute left-[50px] top-[430px]">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2L16 11L26 14L16 17L14 26L12 17L2 14L12 11L14 2Z" stroke="#CD4631" strokeWidth="1.5" fill="none"/>
          </svg>
        </div>

        {/* Scribble decoration at top center */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[-60px] z-20">
          <svg width="50" height="100" viewBox="0 0 50 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="25" cy="15" rx="14" ry="10" stroke="black" strokeWidth="2" fill="none"/>
            <path d="M25 25C22 45 24 60 32 80C36 90 28 95 22 85" stroke="#CD4631" strokeWidth="2" strokeLinecap="round" fill="none"/>
          </svg>
        </div>

        {/* Sparkle/scribble decorations near button - right side */}
        <div className="absolute right-[calc(50%-200px)] top-[370px]">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4L22 16L36 20L22 24L20 36L18 24L4 20L18 16L20 4Z" stroke="#CD4631" strokeWidth="1.5" fill="none"/>
          </svg>
        </div>
        <div className="absolute right-[calc(50%-240px)] top-[330px]">
          <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8C10 4 20 4 27 8" stroke="#CD4631" strokeWidth="2" strokeLinecap="round" fill="none"/>
            <path d="M6 16C12 12 18 12 24 16" stroke="#CD4631" strokeWidth="2" strokeLinecap="round" fill="none"/>
          </svg>
        </div>

        {/* Left - Phone mockup with Music Player UI */}
        <div className="absolute left-[-50px] top-[-80px] w-[320px] h-[640px] z-10" style={{ transform: 'rotate(-8deg)' }}>
          {/* Phone side/edge - pewter blue */}
          <div className="absolute -left-[12px] top-[40px] bottom-[40px] w-[20px] bg-[#81ADC8] rounded-l-[16px]" />
          {/* Phone body */}
          <div className="absolute inset-0 bg-[#1a1a2e] rounded-[40px] border-[6px] border-black overflow-hidden">
            {/* Status bar */}
            <div className="flex justify-between items-center px-6 pt-4 pb-2">
              <span className="text-white text-[12px] font-medium">9:41</span>
              <div className="flex items-center gap-1">
                <svg width="16" height="12" viewBox="0 0 16 12" fill="white"><path d="M1 4h2v8H1V4zm4-2h2v10H5V2zm4-2h2v12H9V0zm4 4h2v8h-2V4z"/></svg>
                <svg width="20" height="12" viewBox="0 0 20 12" fill="white"><rect x="0" y="0" width="18" height="12" rx="2" stroke="white" strokeWidth="1" fill="none"/><rect x="18" y="3" width="2" height="6" rx="1" fill="white"/><rect x="2" y="2" width="12" height="8" rx="1" fill="white"/></svg>
              </div>
            </div>
            
            {/* Now Playing Header */}
            <div className="flex items-center justify-between px-6 py-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12 4L6 10L12 16" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
              <span className="text-white text-[14px] font-semibold">Now Playing</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="4" cy="10" r="2" fill="white"/><circle cx="10" cy="10" r="2" fill="white"/><circle cx="16" cy="10" r="2" fill="white"/></svg>
            </div>
            
            {/* Album Art */}
            <div className="px-8 py-4">
              <div className="relative w-full aspect-square rounded-[20px] overflow-hidden shadow-2xl">
                <Image
                  src="/images/cover-tesla.png"
                  alt="Now playing cover"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2">
                    <p className="text-white text-[10px] font-medium">EPISODE 42</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Track Info */}
            <div className="px-8 py-2 text-center">
              <h3 className="text-white text-[18px] font-bold mb-1">The Future of Tech</h3>
              <p className="text-gray-400 text-[14px]">Pod of Cast • Season 2</p>
            </div>
            
            {/* Progress Bar */}
            <div className="px-8 py-4">
              <div className="relative h-[4px] bg-gray-600 rounded-full">
                <div className="absolute left-0 top-0 h-full w-[65%] bg-[#CD4631] rounded-full"/>
                <div className="absolute left-[65%] top-1/2 -translate-y-1/2 w-[12px] h-[12px] bg-white rounded-full shadow-lg"/>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-gray-400 text-[11px]">24:32</span>
                <span className="text-gray-400 text-[11px]">37:45</span>
              </div>
            </div>
            
            {/* Playback Controls */}
            <div className="flex items-center justify-center gap-8 px-8 py-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M6 6h2v12H6V6zm10 0l-8 6 8 6V6z"/></svg>
              <div className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#1a1a2e"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/></svg>
              </div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M18 6h-2v12h2V6zM6 18l8-6-8-6v12z"/></svg>
            </div>
            
            {/* Bottom Controls */}
            <div className="flex items-center justify-between px-8 py-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3v14M3 10h14" stroke="gray" strokeWidth="2" strokeLinecap="round"/></svg>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 4l12 12M16 4L4 16" stroke="gray" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
          </div>
        </div>

        {/* Right - Phone mockup with Playlist UI */}
        <div className="absolute right-[-70px] top-[-100px] w-[320px] h-[640px] z-10" style={{ transform: 'rotate(8deg)' }}>
          {/* Phone side/edge - pewter blue */}
          <div className="absolute -right-[12px] top-[40px] bottom-[40px] w-[20px] bg-[#81ADC8] rounded-r-[16px]" />
          {/* Phone body */}
          <div className="absolute inset-0 bg-[#1a1a2e] rounded-[40px] border-[6px] border-black overflow-hidden">
            {/* Status bar */}
            <div className="flex justify-between items-center px-6 pt-4 pb-2">
              <span className="text-white text-[12px] font-medium">9:41</span>
              <div className="flex items-center gap-1">
                <svg width="16" height="12" viewBox="0 0 16 12" fill="white"><path d="M1 4h2v8H1V4zm4-2h2v10H5V2zm4-2h2v12H9V0zm4 4h2v8h-2V4z"/></svg>
                <svg width="20" height="12" viewBox="0 0 20 12" fill="white"><rect x="0" y="0" width="18" height="12" rx="2" stroke="white" strokeWidth="1" fill="none"/><rect x="18" y="3" width="2" height="6" rx="1" fill="white"/><rect x="2" y="2" width="12" height="8" rx="1" fill="white"/></svg>
              </div>
            </div>
            
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-3">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12 4L6 10L12 16" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
              <span className="text-white text-[14px] font-semibold">Your Library</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="white" strokeWidth="2" fill="none"/><path d="M14 14l4 4" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            
            {/* Featured Playlist */}
            <div className="px-5 py-3">
              <div className="relative rounded-[16px] overflow-hidden bg-gradient-to-r from-[#81ADC8] to-[#CD4631] p-4">
                <div className="flex items-center gap-3">
                  <div className="w-[60px] h-[60px] rounded-lg overflow-hidden relative">
                    <Image
                      src="/images/cover-perplexed.png"
                      alt="Daily Mix"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white/70 text-[10px] font-medium">CONTINUE LISTENING</p>
                    <h4 className="text-white text-[14px] font-bold">Daily Mix</h4>
                    <p className="text-white/70 text-[11px]">12 episodes</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Episode List */}
            <div className="px-5 py-2">
              <p className="text-gray-400 text-[12px] font-semibold mb-3">RECENTLY PLAYED</p>
              
              {/* Episode Item 1 - Playing */}
              <div className="flex items-center gap-3 py-2 border-b border-gray-700/50">
                <div className="w-[48px] h-[48px] rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/cover-tesla.png"
                    alt="The Future of Tech"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="flex items-end gap-[2px] h-[16px]">
                      <div className="w-[3px] bg-white rounded-full animate-pulse" style={{height: '60%'}}/>
                      <div className="w-[3px] bg-white rounded-full animate-pulse" style={{height: '100%', animationDelay: '0.2s'}}/>
                      <div className="w-[3px] bg-white rounded-full animate-pulse" style={{height: '40%', animationDelay: '0.4s'}}/>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h5 className="text-white text-[13px] font-semibold">The Future of Tech</h5>
                  <p className="text-gray-400 text-[11px]">37:45 • Playing</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="#CD4631"><circle cx="8" cy="8" r="8"/></svg>
              </div>
              
              {/* Episode Item 2 */}
              <div className="flex items-center gap-3 py-2 border-b border-gray-700/50">
                <div className="w-[48px] h-[48px] rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/cover-selfconfidence.png"
                    alt="Design Trends 2024"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h5 className="text-white text-[13px] font-semibold">Self Confidence</h5>
                  <p className="text-gray-400 text-[11px]">42:18</p>
                </div>
              </div>
              
              {/* Episode Item 3 */}
              <div className="flex items-center gap-3 py-2 border-b border-gray-700/50">
                <div className="w-[48px] h-[48px] rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/cover-womensrights.png"
                    alt="Women's Rights"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h5 className="text-white text-[13px] font-semibold">Women&apos;s Rights</h5>
                  <p className="text-gray-400 text-[11px]">28:55</p>
                </div>
              </div>
              
              {/* Episode Item 4 */}
              <div className="flex items-center gap-3 py-2">
                <div className="w-[48px] h-[48px] rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/cover-pandemic.png"
                    alt="Pandemic Stories"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h5 className="text-white text-[13px] font-semibold">Pandemic Stories</h5>
                  <p className="text-gray-400 text-[11px]">51:30</p>
                </div>
              </div>
            </div>
            
            {/* Mini Player at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#2a2a3e] px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="w-[40px] h-[40px] rounded-lg overflow-hidden relative">
                  <Image
                    src="/images/cover-tesla.png"
                    alt="Now playing"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h5 className="text-white text-[12px] font-semibold">The Future of Tech</h5>
                  <div className="h-[2px] bg-gray-600 rounded-full mt-1">
                    <div className="h-full w-[65%] bg-[#CD4631] rounded-full"/>
                  </div>
                </div>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="white"><path d="M8 6h4v16H8V6zm8 0h4v16h-4V6z"/></svg>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-[140px] relative z-20">
          <div className="flex items-center justify-center">
            {/* Center - Text Content */}
            <div className="flex flex-col items-center text-center">
              {/* Beta Badge */}
              <div className="px-[12px] py-[6px] border-2 border-[#CD4631] rounded-[4px] mb-[20px]">
                <span className="text-[12px] font-bold text-[#CD4631] tracking-[1px]">BETA</span>
              </div>

              {/* Title */}
              <h2 className="text-[56px] font-bold leading-[1.1] tracking-[-2px] mb-[16px]">
                <span className="text-black">Available now</span>
                <br />
                <span className="text-black">Pod of Cast App</span>
              </h2>

              {/* Subtitle */}
              <p className="text-[20px] font-medium text-[#4D4D4D] leading-[1.6] mb-[32px]">
                We just launched our podcast app!
              </p>

              {/* Download Button */}
              <button className="px-[36px] py-[18px] bg-black border-2 border-black rounded-[8px] text-[14px] font-bold text-white hover:bg-[#CD4631] hover:border-[#CD4631] transition-colors mb-[32px]">
                DOWNLOAD NOW
              </button>

              {/* Available On */}
              <div className="text-center">
                <p className="text-[14px] font-medium text-[#4D4D4D] mb-[12px]">Content also available on:</p>
                <div className="flex items-center justify-center gap-[16px]">
                  {/* Google Podcasts Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10.5" y="0" width="3" height="5" rx="1.5" fill="#0066D9"/>
                    <rect x="10.5" y="19" width="3" height="5" rx="1.5" fill="#34A853"/>
                    <rect x="10.5" y="9.5" width="3" height="5" rx="1.5" fill="#4285F4"/>
                    <rect x="5" y="5" width="3" height="6" rx="1.5" fill="#FAB908"/>
                    <rect x="5" y="13" width="3" height="6" rx="1.5" fill="#EA4335"/>
                    <rect x="16" y="5" width="3" height="6" rx="1.5" fill="#34A853"/>
                    <rect x="16" y="13" width="3" height="6" rx="1.5" fill="#0066D9"/>
                  </svg>
                  {/* Spotify Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="#191414"/>
                    <path d="M16.5 10.5C13.5 9 9 9 6 10.5" stroke="#1DB954" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M15.5 13C13 11.8 9.5 11.8 7 13" stroke="#1DB954" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M14.5 15.5C12.5 14.5 10 14.5 8 15.5" stroke="#1DB954" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  {/* YouTube Icon */}
                  <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="28" height="20" rx="5" fill="#FF0000"/>
                    <path d="M11 6L18 10L11 14V6Z" fill="white"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white relative">
        {/* Top separator line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#E0E0E0]" />
        
        <div className="container mx-auto px-[140px] py-[140px]">
          <div className="flex justify-between">
            {/* Left Section - Logo, Description, Socials */}
            <div className="flex flex-col">
              {/* Logo */}
              <div className="flex items-center gap-2 mb-0">
                <div className="relative w-[74px] h-[74px]">
                  <div className="absolute left-0 top-[4px] w-[64px] h-[64px]">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M32 4C16.536 4 4 16.536 4 32C4 47.464 16.536 60 32 60" stroke="black" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                    </svg>
                  </div>
                  <div className="absolute left-[25px] top-[22px] text-[14px] font-bold leading-[0.9] tracking-[-0.56px]">
                    <p className="text-[#CD4631] mb-0">POD</p>
                    <p className="text-black mb-0">OF</p>
                    <p className="text-black">CAST</p>
                  </div>
                </div>
                <span className="text-[12px] text-[#4D4D4D] font-medium ml-2">©2021.</span>
              </div>
              
              {/* Description */}
              <p className="text-[14px] text-[#4D4D4D] leading-[1.6] max-w-[275px] mt-[40px] mb-[24px] font-medium">
                Your go-to destination for insightful conversations, inspiring stories, and thought-provoking discussions.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-[25px]">
                <Link href="#" aria-label="Twitter">
                  <Image
                    src="/icons/twitter.png"
                    alt="Twitter"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link href="#" aria-label="Instagram">
                  <Image
                    src="/icons/instagram.png"
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link href="#" aria-label="TikTok">
                  <Image
                    src="/icons/tiktok.png"
                    alt="TikTok"
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
            </div>

            {/* Menu Column 1 */}
            <div className="flex flex-col gap-[20px]">
              <Link href="/about" className="text-[16px] text-black leading-[1.6] font-medium hover:text-[#CD4631] transition-colors">
                About
              </Link>
              <Link href="#" className="text-[16px] text-[#CD4631] leading-[1.6] font-medium">
                Testimonials
              </Link>
              <Link href="#" className="text-[16px] text-black leading-[1.6] font-medium hover:text-[#CD4631] transition-colors">
                Features
              </Link>
            </div>

            {/* Menu Column 2 */}
            <div className="flex flex-col gap-[20px]">
              <Link href="/podcast/perplexed-mind" className="text-[16px] text-[#CD4631] leading-[1.6] font-medium">
                Episodes
              </Link>
              <Link href="#" className="text-[16px] text-black leading-[1.6] font-medium hover:text-[#CD4631] transition-colors">
                Pricing
              </Link>
              <Link href="/blog" className="text-[16px] text-black leading-[1.6] font-medium hover:text-[#CD4631] transition-colors">
                Blog
              </Link>
            </div>

            {/* Right Section - Platforms */}
            <div className="flex flex-col">
              {/* Listen on platforms */}
              <p className="text-[16px] text-[#4D4D4D] leading-[1.6] font-medium mb-[29px]">
                Listen to episodes on your fav platform:
              </p>
              <div className="flex items-center gap-[50px] mb-[40px]">
                {/* Google Podcasts */}
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/google podcast-1.png"
                    alt="Google Podcasts"
                    width={122}
                    height={22}
                    className="h-[22px] w-auto"
                  />
                </Link>
                {/* Spotify */}
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/spotify-1.png"
                    alt="Spotify"
                    width={80}
                    height={22}
                    className="h-[22px] w-auto"
                  />
                </Link>
                {/* YouTube */}
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/youtube-1.png"
                    alt="YouTube"
                    width={94}
                    height={22}
                    className="h-[22px] w-auto"
                  />
                </Link>
              </div>

              {/* App available on */}
              <p className="text-[16px] text-[#4D4D4D] leading-[1.6] font-medium mb-[20px]">
                App available on:
              </p>
              <div className="flex items-center gap-[20px]">
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/app_store.png"
                    alt="App Store"
                    width={36}
                    height={36}
                  />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/icons/google_play.png"
                    alt="Google Play"
                    width={36}
                    height={36}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footnote */}
        <div className="container mx-auto px-[140px] pb-[40px]">
          <div className="border-t border-[#E0E0E0] pt-[20px]">
            <div className="flex items-center justify-between">
              <p className="text-[12px] text-[#4D4D4D] leading-[1.6] font-medium">
                ©2022. All Rights Reserved. <span className="text-[#CD4631]">Pod of Cast</span>
              </p>
              <div className="flex items-center gap-[10px] text-[12px] text-[#4D4D4D] leading-[1.6] font-medium">
                <Link href="#" className="hover:text-[#CD4631] transition-colors">Terms</Link>
                <span>•</span>
                <Link href="#" className="hover:text-[#CD4631] transition-colors">Privacy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
