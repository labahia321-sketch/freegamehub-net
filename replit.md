# GameZone - Interactive Gaming Web App

## Overview

GameZone is a free online games portal built as a full-stack TypeScript application. Users can browse, search, and play embedded games directly in the browser without downloads. The platform organizes games by categories (Action, Puzzle, Racing, etc.) with features like view tracking, featured game carousel, and responsive design optimized for gaming content consumption.

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
- Dark-first aesthetic following Netflix/Spotify media browsing patterns
- Content-forward layout with games as visual heroes
- Component architecture using Radix UI primitives wrapped in shadcn/ui styling
- Responsive grid system (2-4 columns) for game cards

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints under /api prefix
- **Build Process**: esbuild for server bundling with allowlist for cold start optimization

**API Endpoints**:
- `GET /api/categories` - List all game categories
- `GET /api/categories/:slug` - Get category by slug
- `GET /api/games` - List all games
- `GET /api/games/:slug` - Get game details (increments view count)

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: shared/schema.ts (shared between client and server)
- **Validation**: Zod schemas generated via drizzle-zod
- **Current Storage**: In-memory storage implementation (MemStorage class) with interface ready for database migration

**Database Schema**:
- `users`: Authentication (id, username, password)
- `categories`: Game categories (id, name, slug, icon, description, gameCount)
- `games`: Game entries (id, title, slug, description, thumbnailUrl, embedUrl, categoryId, views, rating, featured)

### Development vs Production
- **Development**: Vite dev server with HMR, served via Express middleware
- **Production**: Static file serving from dist/public, server bundled to dist/index.cjs

## External Dependencies

### Database
- **PostgreSQL**: Required for production (DATABASE_URL environment variable)
- **Drizzle Kit**: Database migrations stored in /migrations directory
- **connect-pg-simple**: Session storage for PostgreSQL

### UI Component Library
- **shadcn/ui**: Pre-built accessible components based on Radix UI
- **Radix UI**: Unstyled, accessible component primitives (dialog, dropdown, toast, etc.)
- **Lucide React**: Icon library

### Third-Party Integrations
- **Ad Placeholders**: AdBanner component prepared for AdSense/Ezoic integration (currently placeholder)
- **Google Fonts**: Inter/Poppins for UI, JetBrains Mono for metadata display

### Build & Development Tools
- **Vite**: Frontend bundler with React and TypeScript support
- **esbuild**: Server bundling for production
- **tsx**: TypeScript execution for development
- **Replit Plugins**: cartographer, dev-banner, runtime-error-modal (development only)