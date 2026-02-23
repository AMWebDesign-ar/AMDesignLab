# AM Web Design

## Overview

AM Web Design is a professional one-page website for a digital agency targeting small businesses, professionals, and entrepreneurs in Argentina. The site showcases web development, SEO, automation, and social media services with a modern dark-mode-only theme featuring glass morphism effects, fluid slow-motion animations, and responsive mobile-first design. All content is in Spanish (Argentina). Built with React and Tailwind CSS.

### Website Sections
1. **Header**: Fixed navigation with logo (DM Sans, blue glow), nav links, and HABLEMOS CTA (desktop in header, mobile as fixed floating button)
2. **Hero**: Full-screen section with background image, 4-second cinematic blur entrance animation on "Tu web lista para vender y posicionar" headline, badge, subtitle, and CTA button
3. **Services**: 4 expandable service cards (Sitios Web, SEO, Automatización, Redes Sociales) with icons, descriptions, and glass morphism
4. **Why Choose Us (Nosotros)**: 4 benefit items with icons and hover effects
5. **Contact**: Contact form + WhatsApp/email/phone links
6. **Footer**: Simplified branding (AM Web Design + copyright only)

### Contact Information
- Email: contacto.amdigital@gmail.com
- WhatsApp: +54 223 666 3939

## User Preferences

- Preferred communication style: Simple, everyday language
- Nickname for agent: "Crispy"
- Brand name: "AM Web Design" (not "AM Web Studio")
- Dark mode only (no light mode toggle)
- Prefers slow, cinematic animations
- Logo: DM Sans font, white, blue text-shadow glow, antialiased

## Mobile Responsiveness Lessons Learned

**CRITICAL for all future projects:**
1. **Always add `overflow-x: hidden` to html and body in CSS** — prevents horizontal scroll on mobile devices. A wrapper div with `overflow-x-hidden` is NOT sufficient.
2. **Use responsive padding**: `px-4 sm:px-6` instead of fixed `px-6` on all container elements.
3. **Avoid fixed-width decorative elements** that exceed mobile viewport (e.g., `w-[600px]`). Use responsive sizes like `w-[300px] sm:w-[600px]`.
4. **Test hero title font sizes** on narrow screens (~412px for Samsung S25 Ultra). Use smaller base sizes like `text-[2.2rem] sm:text-5xl md:text-7xl lg:text-8xl`.
5. **Fixed/floating buttons** on mobile should use `right-3` or smaller to stay within viewport bounds.
6. **Scale animations** (e.g., `scale: 1.08`) can cause temporary overflow during animation — ensure parent has `overflow-hidden`.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming (dark mode only)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for page transitions and micro-interactions

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript compiled with tsx
- **API Pattern**: RESTful endpoints prefixed with `/api`
- **Build System**: Custom esbuild script for production bundling with selective dependency bundling

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` for shared type definitions
- **Migrations**: Drizzle Kit for database migrations stored in `/migrations`
- **Development Storage**: In-memory storage implementation available for rapid prototyping

### Project Structure
```
client/           # React frontend application
  src/
    components/ui/  # shadcn/ui component library
    pages/          # Page components (home, not-found)
    hooks/          # Custom React hooks
    lib/            # Utility functions and query client
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route definitions
  storage.ts      # Data access layer interface
  vite.ts         # Vite dev server integration
shared/           # Shared code between client and server
  schema.ts       # Drizzle schema and Zod validators
```

### Design System
- **Theme**: Dark mode only with CSS custom properties
- **Typography**: DM Sans (logo), Plus Jakarta Sans (hero title), Geist Mono, Fira Code
- **Color Palette**: Blue primary (HSL 217) with neutral grays
- **Component Variants**: Class Variance Authority (CVA) for consistent component styling
- **Glass Morphism**: backdrop-blur + semi-transparent backgrounds throughout
- **Animations**: Slow cinematic blur entrances, staggered reveals, shimmer effects

## External Dependencies

### Database
- **PostgreSQL**: Primary database (configured via `DATABASE_URL` environment variable)
- **connect-pg-simple**: Session storage for Express sessions

### UI/Frontend Libraries
- **Radix UI**: Accessible component primitives (dialog, dropdown, accordion, etc.)
- **Embla Carousel**: Carousel/slider functionality
- **Lucide React**: Icon library
- **react-icons**: Company/brand logos (SiWhatsapp)
- **React Day Picker**: Calendar component
- **Recharts**: Charting library
- **Vaul**: Drawer component

### Form & Validation
- **React Hook Form**: Form state management
- **Zod**: Schema validation
- **drizzle-zod**: Automatic Zod schema generation from Drizzle schemas

### Development Tools
- **Replit Plugins**: Runtime error overlay, cartographer, and dev banner for Replit environment
- **PostCSS/Autoprefixer**: CSS processing
