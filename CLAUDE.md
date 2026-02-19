# Antigravity — Personal Website

## Project Goal
Professional multi-page personal website for Alex Mettenheimer. Off-white + neon red minimalistic aesthetic using Next.js App Router + Tailwind v4 + shadcn/ui.

## Tech Stack
- **Framework**: Next.js 16 (App Router, `src/` directory)
- **Styling**: Tailwind CSS v4 (CSS-first config in `globals.css`)
- **UI**: shadcn/ui components + custom 21st.dev-inspired components
- **Animation**: framer-motion
- **Icons**: lucide-react
- **Language**: TypeScript (strict)

## Design System
### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `primary` / `accent` | `#FF1F3D` (neon red) | Borders, hover, glows, active states, CTAs |
| `background` | `#FAFAF8` (off-white) | Page backgrounds |
| `foreground` | `#1A1A1A` (near-black) | Body text |
| `card` | `#FFFFFF` | Card backgrounds |
| `muted` | `#F0F0EC` | Secondary surfaces |
| `muted-foreground` | `#6B6B6B` | Secondary text |
| `border` | `#E0E0DC` | Dividers, card borders |

### Rules
- Use `text-primary` / `border-primary` for neon red accents
- No rainbow gradients. Only subtle neon glow allowed
- No dark mode — light theme only
- Animations: subtle, never overwhelming
- No exaggerated claims in content

## File Structure
```
src/
  app/                    # App Router pages
    globals.css           # Tailwind v4 theme tokens
    layout.tsx            # Root layout (NavBar + Footer)
    page.tsx              # Home
    about/page.tsx
    experience/page.tsx
    projects/page.tsx
    contact/page.tsx
  components/
    ui/                   # UI primitives (shadcn + custom)
      button.tsx          # shadcn Button
      background-paths.tsx
      tubelight-navbar.tsx
      hyper-text.tsx
      star-button.tsx
    footer.tsx            # Site footer
  lib/
    utils.ts              # cn() utility
    projects.ts           # Project data source (oldest → newest)
```

## Adding New 21st.dev Components
1. Create file in `src/components/ui/`
2. Add `"use client"` directive if using hooks/framer-motion
3. Replace default colors with theme tokens (`text-primary`, `bg-background`, etc.)
4. Import `cn` from `@/lib/utils` for conditional classes
5. Export named component (not default)

## Self-Checklist (run after changes)
```bash
npm run build        # Must pass with zero errors
npm run lint         # Fix all lint warnings
npm run dev          # Verify pages render correctly
```

## Commands
```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run lint         # Run ESLint
```
