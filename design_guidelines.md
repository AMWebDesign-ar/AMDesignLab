# Design Guidelines: AM Web Studio

## Design Approach
**Reference-Based**: Drawing inspiration from modern tech agency websites like Vercel, Stripe, and Linear - prioritizing clarity, professionalism, and technical sophistication with a dark aesthetic.

## Core Design Principles
- **Tech-forward minimalism**: Clean layouts with purposeful white space
- **Trust-building professionalism**: Structured, organized information hierarchy
- **Argentinian market context**: Direct, conversational Spanish tone with business credibility

## Typography System
- **Headlines**: Bold, modern sans-serif (e.g., Inter, Space Grotenica) - large, commanding presence
  - H1 (Hero): 3xl/4xl mobile, 6xl/7xl desktop, font-bold
  - H2 (Sections): 2xl/3xl mobile, 4xl/5xl desktop, font-bold
  - H3 (Cards): xl/2xl, font-semibold
- **Body**: Clean, readable sans-serif - base/lg sizes
- **Accents**: Tight letter spacing for technical feel on headings

## Layout System
**Spacing units**: Tailwind 4, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 md:py-24 lg:py-32
- Container: max-w-7xl mx-auto px-6
- Card spacing: gap-6 md:gap-8

## Component Library

### Hero Section
- Full viewport height (min-h-screen) with centered content
- Large background image: Blurred abstract tech/workspace imagery (dark, moody)
- Content overlay with backdrop blur
- Headline + subtitle stacked vertically with mb-6 spacing
- Primary CTA: Large button with blurred background (backdrop-blur-sm), subtle glow effect
- Image: Dark-toned workspace with monitors/code, overlay gradient for text readability

### Services Cards
- 3-column grid on desktop (grid-cols-1 md:grid-cols-3)
- Card design: Bordered containers with subtle background, rounded corners (rounded-xl)
- Icon at top (use Heroicons - Code, MagnifyingGlass, Cog icons)
- Title + 2-3 line description
- Hover: Subtle lift effect (transform transition)

### Why Choose Us
- 2-column layout (grid-cols-1 md:grid-cols-2) with 4 items
- Checkmark icon + text format
- Clean, scannable list with generous spacing (gap-4)

### Contact Section  
- Centered layout with email display and WhatsApp CTA
- Similar CTA styling to hero button
- Conversational invitation text above

### Footer
- Simple centered layout
- Company name, tagline, email
- Minimal, clean sign-off

## Images
**Hero Image**: Required - Dark, professional workspace scene (monitors, coding environment, clean desk setup). Should have moody, low-key lighting. Apply dark overlay (opacity-60) for text contrast.

**Icons**: Heroicons (outline style) via CDN for services and features

## Animations
- Subtle fade-in on scroll for section reveals
- Card hover lifts (translate-y-1)
- Button hover glow enhancement
- Keep transitions smooth (transition-all duration-300)
- NO complex scroll-triggered animations

## Accessibility
- High contrast text on dark backgrounds
- Clear focus states on interactive elements
- Semantic HTML structure throughout
- ARIA labels on icon-only buttons

## Visual Hierarchy
1. Hero dominates viewport with clear primary action
2. Services presented as equal-weight offerings
3. Trust elements (why choose) support conversion
4. Direct, low-friction contact path

**Key Differentiator**: Dark aesthetic with technical sophistication while maintaining warmth and approachability for small business audience.