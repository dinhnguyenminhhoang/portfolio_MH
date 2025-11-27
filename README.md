# 🚀 Portfolio Minh Hoàng - Modern Frontend Developer

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)](https://tailwindcss.com/)

A cyberpunk-themed portfolio showcasing modern web development skills with stunning animations and interactive features.

## ✨ Features

### 🎨 **Modern UI/UX**
- Cyberpunk/tech aesthetic with neon gradients
- Glassmorphism design
- Smooth parallax effects
- Custom cursor animations
- Neural network background
- Responsive design (mobile + desktop)

### 📱 **Mobile First**
- Fully responsive navigation with hamburger menu
- Touch-optimized interactions
- PWA ready with manifest

### 🎮 **Interactive Elements**
- Snake game easter egg (press: ↑↑↓↓←→←→)
- Custom cursor with parallax effect
- Animated backgrounds
- Hover effects and micro-interactions

### 📊 **Data Visualization**
- Line chart for GitHub contributions
- Skills displayed with proficiency levels (not percentages)
- Real-time GitHub stats integration

### 📧 **Contact Form**
- EmailJS integration for real email delivery
- Form validation
- Loading states and success/error messages
- Direct social media links

### ⚡ **Performance & SEO**
- Optimized meta tags for search engines
- Open Graph tags for social media sharing
- Twitter card support
- Structured data ready
- Fast page load times

### 📄 **Resume Download**
- One-click resume download button
- Available in Hero section and Navigation

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Custom CSS
- **Animations:** Framer Motion concepts, CSS animations
- **Email:** EmailJS
- **Icons:** Emoji-based (lightweight)
- **Deployment:** Vercel ready

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/dinhnguyenminhhoang/portfolio-hoang.git

# Navigate to directory
cd portfolio-hoang

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🔧 Configuration

### EmailJS Setup
See [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) for detailed instructions on configuring the contact form.

### Resume File
Place your resume PDF in `/public/resume.pdf`

### Social Links
Update social media URLs in:
- `components/Hero.tsx`
- `components/Contact.tsx`

### Personal Information
Update these files with your information:
- `app/layout.tsx` - SEO metadata
- `components/Hero.tsx` - Name and tagline
- `components/About.tsx` - Bio
- `components/Skills.tsx` - Your skills
- `components/Experience.tsx` - Work history
- `components/Projects.tsx` - Your projects

## 🎯 Sections

1. **Hero** - Introduction with CTA buttons
2. **About** - Personal introduction
3. **Projects** - Showcase of work (horizontal scroll)
4. **Skills** - Technical skills with proficiency levels
5. **Experience** - Work history timeline
6. **Testimonials** - Client/colleague reviews
7. **GitHub Stats** - Contribution activity
8. **Contact** - Contact form and social links

## 🎪 Easter Eggs

- **Konami Code:** Press ↑↑↓↓←→←→ to unlock snake game
- **Game Button:** Click 🎮 in bottom-left corner
- **Custom Cursor:** Interactive cursor follows mouse

## 📝 TODO for Your Deployment

- [ ] Add your resume PDF to `/public/resume.pdf`
- [ ] Setup EmailJS (see EMAILJS_SETUP.md)
- [ ] Update social media links
- [ ] Replace placeholder content with your information
- [ ] Add your projects
- [ ] Update GitHub username in layout.tsx
- [ ] Create OG image (`/public/og-image.png` - 1200x630px)
- [ ] Add favicon (`/public/favicon.ico`)
- [ ] Update Google verification code in layout.tsx

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Other Platforms
The portfolio is a static Next.js app and can be deployed to:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## 📈 Performance

- **Lighthouse Score:** ~95+
- **First Contentful Paint:** < 1s
- **Time to Interactive:** < 2s
- **Bundle Size:** ~105 KB (optimized)

## 🎨 Color Scheme

- **Primary (Cyan):** #00f5ff
- **Secondary (Pink):** #ff0080
- **Accent (Gold):** #ffd700
- **Background:** #0a0a0a
- **Glass/Card:** rgba(255, 255, 255, 0.05)

## 📄 License

MIT License - feel free to use this portfolio as a template for your own!

## 👨‍💻 Author

**Đinh Nguyễn Minh Hoàng**
- GitHub: [@dinhnguyenminhhoang](https://github.com/dinhnguyenminhhoang)
- LinkedIn: [Minh Hoàng](https://www.linkedin.com/in/dinhnguyenminhhoang)
- Email: dinhnguyenminhhoang@gmail.com

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for utility-first styling
- EmailJS for contact form functionality
- GitHub for hosting the README stats

---

⭐ **Star this repo if you found it helpful!**

Made with ❤️ and ☕ by Minh Hoàng
# portfolio_MH
