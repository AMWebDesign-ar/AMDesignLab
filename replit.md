# AM Web Studio

## Overview

AM Web Studio is a professional one-page website for a digital agency targeting small businesses, professionals, and entrepreneurs in Argentina. The site showcases web development, SEO, and automation services with a modern dark theme and blue accents. Built with React and Tailwind CSS, it features smooth animations, responsive design, and dark/light theme toggle.

### Website Sections
1. **Header**: Fixed navigation with logo, nav links, theme toggle, and WhatsApp CTA
2. **Hero**: Full-screen section with background image, main headline "Desarrollo de sitios web a medida", and CTAs
3. **Services**: 3 service cards (Sitios Web, SEO, Automatización) with icons and descriptions
4. **Why Choose Us**: 4 benefit items with checkmarks (Soluciones a medida, Enfoque en resultados, etc.)
5. **Contact**: Invitation text, WhatsApp CTA, and email display
6. **Footer**: Branding, tagline, and contact email

### Contact Information
- Email: contacto.amdigital@gmail.com
- WhatsApp: Placeholder link (update WHATSAPP_LINK in home.tsx)

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming (dark mode default)
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
- **Theme**: Dark mode by default with CSS custom properties
- **Typography**: DM Sans, Geist Mono, Fira Code fonts
- **Color Palette**: Blue primary (HSL 217) with neutral grays
- **Component Variants**: Class Variance Authority (CVA) for consistent component styling
- **Spacing System**: Tailwind's 4/8/12/16/20/24 spacing units

## External Dependencies

### Database
- **PostgreSQL**: Primary database (configured via `DATABASE_URL` environment variable)
- **connect-pg-simple**: Session storage for Express sessions

### UI/Frontend Libraries
- **Radix UI**: Accessible component primitives (dialog, dropdown, accordion, etc.)
- **Embla Carousel**: Carousel/slider functionality
- **Lucide React**: Icon library
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