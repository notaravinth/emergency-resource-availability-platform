# Component Documentation

## Overview

This document provides detailed information about each component in the MediTrack application.

---

## Header Component

**File**: `src/components/Header.jsx`

### Purpose

Provides persistent navigation across the application with emergency call access.

### Features

- Responsive navigation menu
- Logo with icon
- Emergency call button (high visibility)
- Mobile hamburger menu (prepared for future implementation)

### Props

None (static navigation)

### Styling

- Sticky header that stays at top when scrolling
- White background with subtle shadow
- Blue accent colors for interactive elements
- Red emergency button for high visibility

---

## HeroSection Component

**File**: `src/components/HeroSection.jsx`

### Purpose

Main landing section with search functionality for finding medical resources.

### Features

- Large, clear heading
- Descriptive subheading
- Search input with icon
- Search button
- Form submission handling

### State

- `searchQuery`: Stores user input from search bar

### Props

None

### Styling

- Gradient background (dark blue/slate)
- White text for high contrast
- Rounded corners on inputs
- Shadow effects for depth

---

## QuickAccess Component

**File**: `src/components/QuickAccess.jsx`

### Purpose

Provides one-click access to main resource categories.

### Features

- 4 category cards:
  - Hospitals (Blue)
  - Blood Banks (Red)
  - Ambulances (Orange)
  - Pharmacies (Green)
- Icon-based visual identification
- Hover effects and animations

### Data Structure

Each item contains:

- `id`: Unique identifier
- `title`: Display name
- `icon`: SVG icon component
- `color`: Text color class
- `bgColor`: Background color class
- `hoverColor`: Hover state color

### Props

None (static data)

---

## NearbyFacilities Component

**File**: `src/components/NearbyFacilities.jsx`

### Purpose

Displays nearby medical facilities with real-time status information.

### Features

- Card-based layout
- Facility images
- Status badges (Available, Low Stock, Busy)
- Distance and time information
- Resource-specific metrics (beds, blood units, wait time)
- "View All" button for extended list

### Data Structure

Each facility contains:

- `id`: Unique identifier
- `name`: Facility name
- `type`: Resource type label
- `distance`: Distance from user
- `time`: Estimated time or units
- `status`: Availability status text
- `statusColor`: Badge color (green, orange, red)
- `info`: Primary metric display
- `image`: Facility photo URL

### Helper Functions

- `getStatusTextColor(statusColor)`: Maps background colors to text colors

### Props

None (static demo data)

### Styling

- Card hover effects
- Border color changes on hover
- Responsive grid (1-3 columns based on screen size)
- Color-coded status badges

---

## LiveResourceMap Component

**File**: `src/components/LiveResourceMap.jsx`

### Purpose

Visual map display of medical resources in the area.

### Features

- Map container (ready for Google Maps API)
- Location markers with color coding
- Zoom controls (+/-)
- Legend for marker meanings
- "Use My Location" button
- Static placeholder map image

### Map Markers

- Blue: User's current location (animated pulse)
- Green: Available resources
- Red: Limited/Busy resources

### Future Integration

Ready for:

- Google Maps JavaScript API
- Marker clustering
- Info windows on marker click
- Real-time marker updates
- Routing/directions

### Props

None

### Styling

- Rounded corners
- Shadow effects
- Absolute positioned controls
- Floating legend card

---

## Footer Component

**File**: `src/components/Footer.jsx`

### Purpose

Provides site information and legal links.

### Features

- Copyright notice
- Navigation links:
  - Privacy Policy
  - Terms of Service
  - Support
- Responsive layout (vertical on mobile, horizontal on desktop)

### Props

None

### Styling

- White background with top border
- Gray text with blue hover effects
- Centered on mobile, space-between on desktop

---

## App Component

**File**: `src/App.jsx`

### Purpose

Main application component that orchestrates all sections.

### Structure

```jsx
<div>
  <Header />
  <main>
    <HeroSection />
    <QuickAccess />
    <NearbyFacilities />
    <LiveResourceMap />
  </main>
  <Footer />
</div>
```

### Features

- Semantic HTML structure
- Full-height minimum viewport
- Gray background color
- Component composition

---

## Styling Guidelines

### Color System

- **Primary**: Blue (#3B82F6) - Trust, clarity
- **Emergency**: Red (#EF4444) - Urgency
- **Success**: Green (#10B981) - Available
- **Warning**: Orange (#F97316) - Limited
- **Neutral**: Gray scale for text/backgrounds

### Spacing

- Consistent padding: 4, 6, 8, 12, 16 (Tailwind scale)
- Container max-width: 7xl (1280px)
- Section padding: py-12 (48px vertical)

### Typography

- Headings: Bold, larger sizes
- Body: Regular weight, readable size
- Labels: Uppercase, tracking-wide for emphasis

### Responsive Breakpoints

- `sm:` 640px - Small devices
- `md:` 768px - Medium devices
- `lg:` 1024px - Large devices

### Shadows

- `shadow-sm`: Subtle elevation
- `shadow-md`: Medium elevation
- `shadow-lg`: High elevation
- `shadow-xl`: Maximum elevation

### Transitions

- Default: `transition-all` or `transition-colors`
- Duration: Tailwind defaults (150ms-300ms)
- Hover scales: 1.05 for subtle lift

---

## Best Practices

### Component Structure

1. Imports at top
2. Helper functions (if needed)
3. Component definition
4. Return JSX
5. Export default

### State Management

- Use `useState` for local component state
- Keep state close to where it's used
- Lift state up only when needed

### Accessibility

- Use semantic HTML (`<header>`, `<main>`, `<section>`)
- Provide alt text for images
- Ensure keyboard navigation works
- Maintain color contrast ratios

### Performance

- Avoid inline function definitions in JSX when possible
- Use React.memo() for expensive components (future)
- Optimize images (use webp, lazy loading)

---

## Future Component Additions

Planned components for full application:

- `ResourceDetail`: Modal/page for detailed facility info
- `EmergencyRequestForm`: Quick request submission
- `RequestStatus`: Track emergency request progress
- `UserProfile`: User settings and history
- `NotificationBadge`: Real-time alerts
- `FilterPanel`: Advanced search filters
- `MobileNav`: Slide-out mobile navigation menu
