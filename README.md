# Velricon Website

A premium, modern website for Velricon - fractional CFO and financial leadership services.

## Tech Stack

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **next/font** (typography)
- **Vercel Analytics** or **Google Analytics 4**

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

### Analytics Configuration

Choose **one** of the following options:

#### Option 1: Vercel Analytics (Default)
No additional configuration needed. Analytics and Speed Insights are automatically enabled when deployed on Vercel.

#### Option 2: Google Analytics 4
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

If `NEXT_PUBLIC_GA_ID` is set, Google Analytics will be used instead of Vercel Analytics.

### Booking Configuration

Choose **one** booking provider:

#### HubSpot Meetings
```env
NEXT_PUBLIC_BOOKING_PROVIDER=hubspot
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=your_portal_id
NEXT_PUBLIC_HUBSPOT_MEETING_ID=your_meeting_id
```

#### Calendly (Default)
```env
NEXT_PUBLIC_BOOKING_PROVIDER=calendly
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username/meeting-type
```

### Site Configuration
```env
NEXT_PUBLIC_SITE_URL=https://velricon.com
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with fonts and analytics
│   ├── page.tsx           # Home page
│   ├── services/          # Service pages
│   ├── insights/          # Blog/insights pages
│   ├── who-we-are/        # About page
│   └── contact/           # Contact page with booking
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── hero/              # Hero section and visual placeholder
│   ├── ui/                # Reusable UI components
│   ├── booking/           # Booking embed component
│   └── analytics/         # Analytics components
├── config/                # Configuration files
│   ├── site.ts            # Site metadata
│   └── booking.ts         # Booking provider config
└── lib/                   # Utilities
    └── analytics.ts       # Analytics event tracking
```

## Design System

### Typography
- **Headers**: Montserrat
- **Accent**: Alegreya (used sparingly)
- **Body**: Karla

### Colors
All colors are defined as Tailwind theme tokens in `tailwind.config.ts`:
- Core: `velricon-navy`, `strategy-blue`
- Surfaces: `deep-void`, `elevation-layer`, `soft-white`
- Text: `white`, `platinum`, `slate`, `dark-ink`
- Interactive: `electric-blue`, `blue-hover`, `surface-border`

## Analytics Event Tracking

The following events are automatically tracked:

- `strategy_call_click` - When users click "Strategy Call" buttons
- `nav_service_click` - When users click service links in navigation
- `booking_embed_view` - When the booking embed is viewed on the contact page

Events are tracked via the `trackEvent` function in `src/lib/analytics.ts`.

## Booking Embed

The `<BookingEmbed />` component supports both HubSpot and Calendly. The provider is configured via environment variables and can be easily swapped.

Usage:
```tsx
import { BookingEmbed } from '@/components/booking/BookingEmbed'

<BookingEmbed provider="calendly" />
// or
<BookingEmbed provider="hubspot" />
```

## Hero Visual Placeholder

The hero section includes a `<HeroVisualPlaceholder />` component on the right side. This is designed to be easily replaced with a future 3D interactive component (WebGL/Three.js).

To replace it:
1. Create your 3D component
2. Replace the `<HeroVisualPlaceholder />` import and usage in `src/components/hero/Hero.tsx`
3. The container maintains proper layout and spacing

See `src/components/hero/HeroVisualPlaceholder.tsx` for implementation details and comments.

## Adding Insights Posts

The insights section is set up for MDX content. Currently, posts are defined as placeholders in `src/app/insights/[slug]/page.tsx`.

To add MDX support:
1. Install `@next/mdx` and `remark`/`rehype` plugins
2. Configure Next.js to handle `.mdx` files
3. Create posts in `src/content/insights/`
4. Update the dynamic route to read from the MDX files

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This project is optimized for Vercel deployment:

1. Push to your Git repository
2. Import the project in Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

## License

Private - Velricon

