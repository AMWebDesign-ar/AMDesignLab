# AM Web Studio

## Overview

AM Web Studio is a web development agency landing page targeting the Argentinian market. The site is built as a modern, dark-themed single-page application showcasing web development, SEO, and automation services. The application follows a tech-forward minimalist design inspired by companies like Vercel, Stripe, and Linear, with content primarily in Spanish.

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