# Project File Structure

```
hospital-management-system/
│
├── public/                          # Static public assets
│   └── vite.svg                     # Vite logo
│
├── src/                             # Source code directory
│   │
│   ├── components/                  # React components
│   │   ├── Header.jsx              # App header with navigation and emergency button
│   │   ├── HeroSection.jsx         # Hero section with search functionality
│   │   ├── QuickAccess.jsx         # Quick access cards for resource categories
│   │   ├── NearbyFacilities.jsx    # Facility cards with status and details
│   │   ├── LiveResourceMap.jsx     # Interactive map component (placeholder)
│   │   └── Footer.jsx              # App footer with links
│   │
│   ├── assets/                      # Static assets (images, icons, etc.)
│   │   └── react.svg               # React logo
│   │
│   ├── App.jsx                      # Main application component
│   ├── main.jsx                     # Application entry point
│   └── index.css                    # Global styles with Tailwind imports
│
├── index.html                       # HTML template
├── package.json                     # Project dependencies and scripts
├── vite.config.js                   # Vite configuration
├── eslint.config.js                 # ESLint configuration
├── README.md                        # Project documentation
└── COMPONENTS.md                    # Component documentation

```

## File Descriptions

### Configuration Files

#### `package.json`

- Project metadata and dependencies
- Scripts for dev, build, preview
- Dependencies: React, React-DOM, Tailwind CSS, Vite

#### `vite.config.js`

- Vite build tool configuration
- React plugin setup
- Tailwind CSS plugin integration

#### `eslint.config.js`

- Linting rules and configuration
- React-specific rules

#### `index.html`

- Root HTML file
- Entry point for JavaScript
- Meta tags and viewport configuration

### Source Files

#### `src/main.jsx`

- React application initialization
- Renders App component to DOM
- Wraps with StrictMode

#### `src/App.jsx`

- Main application component
- Composes all page sections
- Layout structure

#### `src/index.css`

- Tailwind CSS imports
- Global styles
- Custom CSS (if needed)

### Components

#### `src/components/Header.jsx`

- **Lines**: ~50
- **Features**: Navigation, logo, emergency button
- **State**: None (stateless)
- **Dependencies**: None

#### `src/components/HeroSection.jsx`

- **Lines**: ~40
- **Features**: Search bar, heading, form handling
- **State**: searchQuery
- **Dependencies**: useState

#### `src/components/QuickAccess.jsx`

- **Lines**: ~60
- **Features**: 4 category cards with icons
- **State**: None (static data)
- **Dependencies**: None

#### `src/components/NearbyFacilities.jsx`

- **Lines**: ~100
- **Features**: Facility cards, status badges, images
- **State**: None (static demo data)
- **Dependencies**: Helper function getStatusTextColor

#### `src/components/LiveResourceMap.jsx`

- **Lines**: ~90
- **Features**: Map container, markers, controls, legend
- **State**: None
- **Dependencies**: None (ready for Google Maps)

#### `src/components/Footer.jsx`

- **Lines**: ~20
- **Features**: Copyright, links
- **State**: None
- **Dependencies**: None

## Code Statistics

### Total Files Created/Modified: 8

- Components: 6
- Main files: 2 (App.jsx, index.css)

### Approximate Line Count

- Header: 50 lines
- HeroSection: 40 lines
- QuickAccess: 60 lines
- NearbyFacilities: 100 lines
- LiveResourceMap: 90 lines
- Footer: 20 lines
- App.jsx: 20 lines
- **Total**: ~380 lines of React code

### Component Hierarchy

```
App
│
├── Header
│   ├── Logo
│   ├── Navigation (4 links)
│   └── Emergency Button
│
├── main
│   │
│   ├── HeroSection
│   │   ├── Heading
│   │   ├── Subheading
│   │   └── Search Form
│   │
│   ├── QuickAccess
│   │   └── 4x Category Cards
│   │       ├── Hospitals
│   │       ├── Blood Banks
│   │       ├── Ambulances
│   │       └── Pharmacies
│   │
│   ├── NearbyFacilities
│   │   ├── Section Header
│   │   └── 3x Facility Cards
│   │       ├── Image
│   │       ├── Status Badge
│   │       ├── Details
│   │       └── Metrics
│   │
│   └── LiveResourceMap
│       ├── Section Header
│       ├── Map Container
│       │   ├── Map Image
│       │   ├── Markers (3)
│       │   ├── Legend
│       │   └── Controls
│       └── Location Button
│
└── Footer
    ├── Copyright
    └── Links (3)
```

## Technology Stack

### Core

- **React 18**: Component-based UI
- **Vite**: Build tool and dev server
- **JavaScript (ES6+)**: Language

### Styling

- **Tailwind CSS**: Utility-first CSS framework
- **@tailwindcss/vite**: Vite plugin for Tailwind

### Development Tools

- **ESLint**: Code linting
- **Vite HMR**: Hot module replacement

### Future Integrations (Planned)

- Google Maps JavaScript API
- Supabase (Backend/Database)
- React Router (Navigation)
- Axios/Fetch (API calls)
- React Query (Data fetching)

## Component Dependencies

```
No external component dependencies yet.
All components are self-contained.

Future dependencies will include:
- @react-google-maps/api (for map)
- @supabase/supabase-js (for backend)
- react-router-dom (for routing)
- lucide-react or heroicons (for additional icons)
```

## Styling Approach

### Utility-First (Tailwind)

- All styling done via Tailwind utility classes
- No custom CSS files per component
- Consistent design system

### Responsive Design

- Mobile-first approach
- Breakpoint modifiers (sm:, md:, lg:)
- Flexbox and Grid layouts

### Color Scheme

- Blue (#3B82F6): Primary
- Red (#EF4444): Emergency/Critical
- Green (#10B981): Available/Success
- Orange (#F97316): Warning/Limited
- Gray Scale: Neutral UI elements

## Performance Considerations

### Current

- ✅ No external API calls yet (static data)
- ✅ No image optimization needed (using URLs)
- ✅ Minimal JavaScript bundle
- ✅ Fast Vite dev server
- ✅ Tailwind CSS tree-shaking in production

### Future Optimizations

- Implement React.lazy() for code splitting
- Add image optimization (webp, lazy loading)
- Implement virtual scrolling for large lists
- Add service worker for offline support
- Optimize map rendering

## Scripts Available

```bash
npm run dev       # Start development server (port 5173 or next available)
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## Environment

- **Node.js**: 16+ required
- **Package Manager**: npm (or yarn/pnpm)
- **Dev Server**: Vite (default port 5173)
- **Browser Support**: Modern browsers (ES6+)

---

Last Updated: February 25, 2026
