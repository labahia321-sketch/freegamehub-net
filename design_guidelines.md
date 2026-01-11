# Design Guidelines: Interactive Gaming Web App

## Design Approach
**Selected Framework**: Hybrid approach combining Netflix/Spotify media browsing patterns with Material Design's interactive feedback system. Gaming platforms require visual engagement while maintaining functional clarity for content discovery.

**Core Principles**:
- Immersive but navigable: Dark-first aesthetic with vibrant game thumbnails
- Quick access: Minimal clicks to gameplay
- Content-forward: Games are heroes, not marketing copy

---

## Layout System

**Spacing Units**: Tailwind units of 2, 4, 6, 8, 12, 16, 20
- Micro spacing (icons, badges): 2, 4
- Component padding: 6, 8
- Section gaps: 12, 16, 20

**Container Structure**:
- Max-width: `max-w-7xl` for content areas
- Full-width: Game embed pages, header, footer
- Grid systems: 2-4 columns for game cards (responsive: `grid-cols-1 md:grid-cols-3 lg:grid-cols-4`)

---

## Typography

**Font Stack**: 
- Primary: Inter or Poppins (Google Fonts CDN) - modern, gaming-appropriate
- Monospace: JetBrains Mono for metadata (player count, ratings)

**Hierarchy**:
- H1 (Page titles): text-4xl, font-bold
- H2 (Category headers): text-2xl, font-semibold  
- H3 (Game titles): text-lg, font-medium
- Body: text-base
- Metadata: text-sm, text-xs for timestamps/stats

---

## Core Components

### Header (Fixed)
- Sticky navigation: Logo left, category links center, theme switcher right
- Height: h-16
- Search bar integrated (collapsible on mobile)
- Active category indicator (underline or pill background)

### Theme Switcher
- Toggle component with 3 states: Light, Attenuated (dim), Dark
- Icon-based selector (sun/moon/adjust icons from Heroicons)
- Persists via localStorage

### Game Card Component
Thumbnail (16:9 aspect ratio)
- Overlay gradient on hover revealing: Play button, game title, category badge
- Metadata row: views count, rating stars (Font Awesome icons)
- Rounded corners: rounded-lg

### Banner Integration Zones
**Homepage (AdSense)**:
- Top banner: Below header, before first game row (728x90 leaderboard)
- Sidebar banner: Right rail on desktop (300x600 half-page)
- In-feed banner: Between game rows (responsive units)

**Game Pages (Ezoic)**:
- Above embed: 728x90 banner
- Sidebar: 300x250 medium rectangle
- Bottom: Anchor ad (sticky footer ad unit)

### Game Embed Container
- Responsive iframe with 16:9 aspect ratio wrapper
- Full-screen button integrated (top-right corner)
- Related games carousel below embed (horizontal scroll, 6-8 cards)

### Footer
Three-column layout (stacks on mobile):
- Column 1: Categories list (Action, Puzzle, Sports, etc.)
- Column 2: Pages (About, Privacy, Contact)
- Column 3: Social icons + copyright
- Background: Slightly darker than body for separation

---

## Page Structures

### Homepage (index.html)
1. Header (fixed)
2. Hero section (optional featured game carousel, h-64)
3. Top banner ad zone
4. Category sections (each with 4-8 game cards in grid)
   - "Action Games" → grid of cards
   - "Puzzle Games" → grid of cards
   - "Recently Added" → horizontal scroll
5. Sidebar ads (desktop only, sticky)
6. Footer

### Category Page (action.html, puzzle.html)
1. Header
2. Page title with game count
3. Filter/sort bar (Most Played, Newest, A-Z)
4. Ad banner
5. Game grid (12-24 cards, pagination or infinite scroll)
6. Footer

### Individual Game Page (game1.html)
1. Header
2. Game title + metadata (category, date, rating)
3. Top ad banner
4. Game embed (centered, max-w-4xl)
5. Sidebar ads (desktop)
6. Related games section (4-6 cards)
7. Bottom ad banner
8. Footer

---

## Images

**Hero Images**: Not required for homepage - game thumbnails provide visual richness
**Game Thumbnails**: Required for every game card
- Size: 300x169px (16:9 ratio)
- Source: Use placeholder service initially (placeholder.com/300x169)
- Alt text: "[Game Name] - Play Online"

**Category Backgrounds**: 
- Subtle patterns/textures related to category (e.g., circuit board for tech games)
- Low opacity (10-20%) behind game grids
- Full-width, non-repeating

**Icons**: Heroicons for UI elements (play, fullscreen, theme toggle, menu)

---

## Interaction Patterns

**Game Cards**:
- Hover: Scale up slightly (scale-105), show overlay with metadata
- Click: Navigate to game page

**Theme Transitions**: Smooth color transitions (0.3s ease)

**Scroll Behavior**: 
- Smooth scroll for anchor links
- Lazy load game thumbnails below fold

**Ad Placement**: 
- Maintain minimum 8-unit spacing from game content
- Clearly labeled "Advertisement" text above ad units

---

## Accessibility
- Focus indicators on all interactive elements
- Keyboard navigation for game grid (arrow keys)
- ARIA labels for icon-only buttons
- Skip-to-content link for keyboard users
- Minimum contrast ratios maintained across all three themes

---

**Design Philosophy**: This platform prioritizes quick content discovery and seamless gameplay access. The design removes friction between user and game while maintaining professional monetization integration. Dark theme dominates for extended play sessions, but light/attenuated options accommodate all user preferences.