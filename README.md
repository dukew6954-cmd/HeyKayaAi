# HeyKayaAI Marketing Site

A modern, animated marketing website for HeyKayaAI - your AI receptionist that never misses a call.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Beautiful Animations**: Framer Motion for smooth, playful interactions
- **Professional UI**: shadcn/ui components with custom HeyKayaAI branding
- **Mobile-First**: Responsive design that works on all devices
- **SEO Optimized**: Dynamic metadata, Open Graph tags, structured data
- **Accessible**: ARIA labels, keyboard navigation, focus management
- **Performance**: Optimized images, fast loading, Lighthouse 90+

## 🎨 Design System

- **Colors**: Teal/Emerald primary, Peach/Purple/Lemon accents
- **Typography**: Manrope (headlines), Inter (body)
- **Animations**: Floating blobs, slide reveals, micro-interactions
- **Components**: Reusable, accessible, customizable

## 📁 Project Structure

```
HeyKayaAI/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles and Tailwind config
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── pricing/           # Pricing page
│   ├── industries/        # Industries page
│   ├── contact/           # Contact page
│   └── api/               # API routes (OG images, etc.)
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   └── sections/         # Page sections
├── lib/                  # Utilities and helpers
├── public/               # Static assets
└── styles/               # Additional styles
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd HeyKayaAI
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect Next.js and deploy
   - Your site will be live at `https://your-project.vercel.app`

### Environment Variables

Create a `.env.local` file for local development:

```env
# Analytics (optional)
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
NEXT_PUBLIC_GA_ID=your_ga_id

# Contact Form (optional)
CONTACT_FORM_ENDPOINT=your_form_endpoint
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## 🎯 Pages & Features

### Home Page (`/`)
- Hero section with animated headline
- Value propositions with icons
- Interactive demo simulation
- Industries preview grid
- Testimonials carousel
- Final CTA section

### Pricing Page (`/pricing`)
- Three pricing tiers (Starter, Professional, Growth)
- Feature comparisons
- FAQ accordion
- Clear CTAs

### Industries Page (`/industries`)
- Detailed industry breakdowns
- Pain points and solutions
- Integration examples

### Contact Page (`/contact`)
- Contact form with validation
- Contact information
- Support response times

### Global Elements
- Sticky navigation with CTAs
- Announcement bar
- Comprehensive footer
- Mobile-responsive menu

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to modify the brand colors:

```typescript
colors: {
  primary: {
    50: '#f0fdfa',
    500: '#14b8a6',
    600: '#0d9488',
  },
  // ... other colors
}
```

### Content
Update content in the respective component files:
- `components/sections/HeroSection.tsx` - Hero headline and CTAs
- `components/sections/ValuePropsSection.tsx` - Value propositions
- `components/sections/PricingSection.tsx` - Pricing tiers and features

### Animations
Modify animations in `tailwind.config.ts` and component files:
- Custom keyframes for floating blobs
- Framer Motion variants for page transitions
- Hover effects and micro-interactions

## 🔧 Development

### Adding New Pages

1. Create a new folder in `app/` (e.g., `app/about/`)
2. Add `page.tsx` with metadata and content
3. Update navigation in `components/Navbar.tsx`

### Adding New Components

1. Create component file in `components/` or `components/sections/`
2. Export as default function
3. Import and use in pages

### Styling Guidelines

- Use Tailwind CSS classes for styling
- Follow the design system colors and spacing
- Ensure mobile-first responsive design
- Add hover states and animations
- Maintain accessibility standards

## 📊 Performance

The site is optimized for:
- **Core Web Vitals**: LCP, FID, CLS
- **SEO**: Meta tags, structured data, sitemap
- **Accessibility**: ARIA labels, keyboard navigation
- **Mobile**: Touch-friendly, responsive design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For questions or issues:
- Check the [documentation](link-to-docs)
- Open an issue on GitHub
- Contact the development team

---

Built with ❤️ for HeyKayaAI

