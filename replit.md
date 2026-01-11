# FreeGameHub - Free Online Games Portal

## Overview

FreeGameHub is a free online games portal built as a full-stack TypeScript application. Users can browse, search, and play embedded games directly in the browser without downloads. The platform organizes games by categories (Action, Puzzle, Racing, Sports, Adventure) with features like view tracking, featured game carousel, theme switching, and responsive design optimized for gaming content consumption.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack Query for server state caching and synchronization
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style variant)
- **Theme System**: Custom light/attenuated/dark theme support with CSS variables and localStorage persistence
- **Build Tool**: Vite with React plugin and path aliases (@/, @shared/, @assets/)

**Key Design Decisions**:
- Dark-first aesthetic with orange (#ff6600) accent colors
- Content-forward layout with games as visual heroes
- Component architecture using Radix UI primitives wrapped in shadcn/ui styling
- Responsive grid system (2-4 columns) for game cards
- Sticky ad sidebar placeholders on large screens

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints under /api prefix
- **Build Process**: esbuild for server bundling

**API Endpoints**:
- `GET /api/categories` - List all game categories
- `GET /api/categories/:slug` - Get category by slug
- `GET /api/games` - List all games
- `GET /api/games/:slug` - Get game details (increments view count)

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: shared/schema.ts (shared between client and server)
- **Validation**: Zod schemas generated via drizzle-zod
- **Current Storage**: In-memory storage implementation (MemStorage class)

**Database Schema**:
- `users`: Authentication (id, username, password)
- `categories`: Game categories (id, name, slug, icon, description, gameCount)
- `games`: Game entries (id, title, slug, description, thumbnailUrl, embedUrl, categoryId, views, rating, featured)

### Theme System
- **Light Mode (Default)**: White background (#fff), dark text
- **Attenuated Mode**: Light gray background (#f0f0f0), balanced contrast
- **Dark Mode**: Deep dark (#111) with orange (#ff6600) accents
- Theme preference saved to localStorage ("freegamehub-theme")

### Ad Integration Zones
- **Home Page (AdSense)**: Leaderboard below header, sticky 160x600 sidebars on XL screens, mobile banners between category sections
- **Category Pages (Ezoic)**: Same layout as Home - leaderboard, sticky sidebars, mobile banners
- **Game Detail Pages (Ezoic)**: Leaderboard above embed, 300x250 ads in right column, leaderboard below recommendations section
- All ad zones are placeholder components ready for real ad code integration

## External Dependencies

### UI Component Library
- **shadcn/ui**: Pre-built accessible components based on Radix UI
- **Radix UI**: Unstyled, accessible component primitives
- **Lucide React**: Icon library

### Third-Party Integrations
- **Ad Placeholders**: AdBanner component prepared for AdSense/Ezoic/Media.net integration
- **Google Fonts**: Inter/Poppins for UI, JetBrains Mono for metadata display

### Build & Development Tools
- **Vite**: Frontend bundler with React and TypeScript support
- **esbuild**: Server bundling for production
- **tsx**: TypeScript execution for development

## Recent Changes
- Rebranded from GameZone to FreeGameHub
- Updated color scheme to orange (#ff6600) accents
- Changed default theme from dark to light mode
- Added sticky sidebar ad placements (160x600) for XL screens
- Different ad providers per page type: AdSense (Home), Ezoic (Category/Game)
- Game detail page redesigned with grid layout for ads beside embed
- Added mobile-responsive ad banner placements between sections
- Updated footer with legal links (Privacy & Cookies, Terms of Use, etc.)
- Updated meta tags and SEO information
- Added Firebase Hosting configuration (firebase.json, .firebaserc)
- Added React Native mobile app structure with AdMob placeholders (mobile-app/)
- Added responsive Ezoic ad component for variable ad sizes

## Deployment

### Firebase Hosting (Web)
```bash
npm run build
firebase deploy
```

### Mobile App (React Native)
See `mobile-app/README.md` for setup and build instructions. probando actualizacion 11-01-2026
