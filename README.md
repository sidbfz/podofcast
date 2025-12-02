# Pod of Cast 🎙️

A modern, beautifully designed podcast website built with Next.js 14 and Tailwind CSS. Pod of Cast is your go-to destination for insightful conversations, inspiring stories, and thought-provoking discussions.

![Pod of Cast](public/images/cover-perplexed.png)

## ✨ Features

- **Modern Design** - Clean, responsive UI with custom design tokens (Vermillion, Pewter Blue, Davys Grey, Champagne)
- **Dynamic Podcast Pages** - Individual pages for each episode with full descriptions, hosts info, and related content
- **Blog Section** - Articles and news about podcasting, tips & tricks, and more
- **Testimonials Carousel** - Infinite scrolling testimonials from listeners
- **Pricing Plans** - Membership tiers with different benefits
- **Platform Integration** - Available on Spotify, Google Podcasts, YouTube, Apple Podcasts
- **Mobile App CTA** - Promotional section for the mobile app
- **Responsive Navigation** - Clean header with moving podcast covers carousel

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Fonts**: Geist (via next/font)
- **Images**: Next.js Image optimization

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx          # Homepage
│   ├── layout.tsx        # Root layout
│   ├── globals.css       # Global styles & design tokens
│   ├── about/            # About page
│   ├── blog/             # Blog listing & dynamic blog posts
│   └── podcast/          # Dynamic podcast episode pages
├── components/
│   ├── Header.tsx        # Navigation with podcast carousel
│   ├── Episodes.tsx      # Recent episodes grid
│   ├── Testimonials.tsx  # Listener testimonials carousel
│   ├── Features.tsx      # Membership benefits
│   ├── Pricing.tsx       # Pricing plans
│   ├── Blog.tsx          # Article & news section
│   ├── About.tsx         # About section
│   ├── CTA.tsx           # Mobile app download CTA
│   └── Footer.tsx        # Site footer
public/
├── icons/               # UI icons and decorative elements
└── images/              # Podcast covers, avatars, blog images
```

## 🎨 Design System

The site uses a custom color palette:

| Color | Hex | Usage |
|-------|-----|-------|
| Vermillion | `#CD4631` | Primary accent, CTAs, highlights |
| Pewter Blue | `#81ADC8` | Secondary accent, backgrounds |
| Davys Grey | `#4D4D4D` | Body text, subtle elements |
| Champagne | `#F7EDE8` | Light backgrounds, sections |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/podcast.git
cd podcast
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Pages

- `/` - Homepage with hero, episodes, testimonials, features, pricing, blog preview
- `/about` - About the podcast and hosts (Porter Severus & Marques Keith)
- `/blog` - Blog listing with articles
- `/blog/[slug]` - Individual blog posts
- `/podcast/[slug]` - Individual podcast episode pages

### Podcast Episodes

- Pandemic Becoming Endemic
- Tesla Autopilot Controversy  
- Women's Rights
- Self-Confidence
- Social Class
- Perplexed Mind

## 🌐 Deployment

Deploy easily on [Vercel](https://vercel.com/):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?utm_medium=default-template&filter=next.js)

Or check the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for other options.

## 📄 License

This project is for educational and demonstration purposes.

---

Built with ❤️ using Next.js and Tailwind CSS
