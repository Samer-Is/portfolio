# Samer H. Ismail - Portfolio Website

A modern, professional portfolio website built with Next.js, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theming**: next-themes (light/dark mode)

## Features

- 📱 Fully responsive design
- 🌓 Light and dark mode support
- ⚡ Fast and performant
- ♿ Accessible (keyboard navigation, proper heading structure, ARIA labels)
- 🔍 SEO optimized with metadata, Open Graph tags, and sitemap
- 🖨️ Print-friendly resume page at `/resume`
- 🎨 Clean, modern design with subtle animations

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main portfolio page
│   ├── sitemap.ts           # Dynamic sitemap
│   ├── robots.ts            # Robots.txt configuration
│   ├── opengraph-image.tsx  # Dynamic OG image generation
│   └── resume/
│       └── page.tsx         # Print-friendly resume
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── Container.tsx        # Content container
│   ├── Section.tsx          # Section wrapper with animations
│   ├── Navbar.tsx           # Navigation bar
│   ├── Hero.tsx             # Hero section
│   ├── ExperienceTimeline.tsx
│   ├── ProjectGrid.tsx
│   ├── SkillGroups.tsx
│   ├── EducationSection.tsx
│   ├── CollaborationSection.tsx
│   ├── IndependentWorkSection.tsx
│   ├── Footer.tsx
│   └── ThemeProvider.tsx
├── content/
│   └── resume.ts            # All portfolio content
└── lib/
    └── utils.ts             # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

## Deployment to Vercel

1. Push your code to a GitHub repository.

2. Go to [Vercel](https://vercel.com) and sign in with GitHub.

3. Click "New Project" and import your repository.

4. Vercel will auto-detect Next.js and configure the build settings.

5. Click "Deploy" and wait for the deployment to complete.

6. Your site will be live at `your-project-name.vercel.app`.

### Custom Domain

1. Go to your project settings in Vercel.
2. Navigate to "Domains".
3. Add your custom domain and follow the DNS configuration instructions.

## Customization

### Content

All content is centralized in `src/content/resume.ts`. Edit this file to update:
- Personal information
- Experience
- Selected work/projects
- Skills
- Education
- Certifications
- Collaboration opportunities
- Independent work

### Styling

- Colors and theming are defined in `src/app/globals.css`
- Component-specific styling uses Tailwind CSS classes
- Modify the shadcn/ui components in `src/components/ui/`

### Adding New Sections

1. Create a new component in `src/components/`
2. Add the data type to `src/content/resume.ts`
3. Import and use in `src/app/page.tsx`

## Important Files

- **CV PDF**: Place your actual CV at `public/Samer-Ismail-CV.pdf`
- **Favicon**: Replace `public/favicon.ico` with your favicon
- **OG Image**: The OG image is dynamically generated, or you can add a static `public/og-image.png`

## Performance

The site is optimized for performance:
- No heavy libraries
- next/image for optimized images
- Font optimization with next/font
- Minimal client-side JavaScript
- Lighthouse-friendly

## License

MIT License
