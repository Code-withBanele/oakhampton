# Oakhampton Accommodation

A responsive boutique hospitality website for Oakhampton Accommodation, an independent bed and
breakfast at 8 Oakhampton Road, Berea, East London, South Africa.

The website replaces the visual language of the previous WordPress site with a warm, editorial
experience built around real property photography, expressive typography, generous spacing and
selective bento-grid compositions.

## Creative Direction

The visual approach combines:

- Contemporary editorial design
- Boutique hospitality branding
- Spacious, asymmetrical compositions
- Rounded photographic treatments
- Warm natural colours
- Restrained, playful details
- Photography-led storytelling

The experience should feel independent and personal rather than corporate or template-driven.
Design references include boutique accommodation, small editorial hotels and relaxed South African
hospitality.

### Brand Personality

- Warm and welcoming
- Calm and comfortable
- Sophisticated without being formal
- Playful without feeling decorative
- Local, personal and trustworthy

## Visual Identity

### Colour Palette

The colour system is defined as CSS custom properties in `src/index.css`.

| Token       | Value     | Primary use                               |
| ----------- | --------- | ----------------------------------------- |
| Warm ivory  | `#F5F0E8` | Main page background                      |
| Soft sand   | `#DED3C2` | Hero copy, contact and preloader surfaces |
| Muted sage  | `#A6B39F` | Supporting natural accent                 |
| Deep olive  | `#66735D` | Brand actions, emphasis and map content   |
| Dark forest | `#343B32` | Primary buttons, navigation and footer    |
| Warm bronze | `#B29A78` | Numbering and refined accent details      |
| Cream       | `#FBF8F2` | Forms and elevated content surfaces       |
| Ink         | `#30332E` | Primary body text                         |

Green is used selectively. Large content areas remain neutral so that photography and typography
carry the visual hierarchy.

### Typography

The site uses two Google Fonts:

- **Fraunces** — expressive display headings, room names, prices and editorial statements
- **DM Sans** — navigation, body text, buttons, labels and interface controls

Fraunces uses italics and variable softness to create the boutique editorial character. Display
headings use tight line-height and negative letter spacing, while body content remains restrained
and readable.

Key typographic ideas:

- Oversized editorial headings
- Selective italic emphasis
- Small uppercase labels with wide tracking
- Large prices set as display typography
- Short paragraphs with controlled reading widths

## Layout System

The main content width is capped at `1380px`, with responsive outer gutters:

```css
width: min(1380px, calc(100% - 7vw));
```

The radius system is consistent across photographs, maps, modals and content tiles:

- Large: `32px`
- Medium: `23px`
- Small: `15px`

### Hero

The opening uses a spacious 12-column bento composition:

- Large editorial headline tile
- Dominant Oakhampton exterior photograph
- Wide “Planning your next stay?” action
- Wide Berea location tile

The headline “Stay a little. Feel at home.” is positioned in the upper portion of the copy panel to
give the opening more breathing room.

### Property Introduction and Gallery

The introduction is a vertical editorial stack:

1. Section number and large heading
2. Enlarged welcome paragraph
3. Supporting caption
4. Full-width property carousel

The carousel contains Oakhampton and nearby-attraction photography, including:

- Rainbow at the coast
- Moonrise over the lagoon
- Birdlife by the beach
- Poolside courtyard
- Garden pool
- Braai area
- Guest kitchen

It supports arrows, pagination, touch gestures and an expanded lightbox.

### Accommodation

The accommodation section intentionally avoids conventional pricing cards. Each room is presented
as an asymmetrical editorial showcase with:

- Large room photograph
- Room name
- Nightly rate
- Included amenities
- Room-specific enquiry action

Current rates:

- **Single Room:** R 800.00 per night
- **Double Bedroom:** R 1100.00 per night

Both rates include:

- Full cooked breakfast
- Free WIFI
- DSTV
- Gated off-street parking

### Enquiry Experience

Booking enquiry is handled in a dedicated modal rather than occupying a large homepage section.

The modal includes:

- Check-in date
- Check-out date
- Compact calendar popover
- Room preference
- Full name
- Email address
- Contact number
- Optional message
- Validation and confirmation states

Selecting “Check availability” from a room showcase preselects that room.

This is an enquiry prototype only. It does not:

- Check live availability
- Confirm a reservation
- Process payments
- Store submissions

The interface explicitly communicates these limitations and is structured so a future booking
engine can replace the prototype without redesigning the full site.

### Location

The location section keeps the map as the primary visual focus:

- Editorial location heading
- Short supporting description
- Get Directions action
- Large embedded Google Map
- Horizontal contact-information row

The map uses the supplied Oakhampton address and includes native Google Maps controls.

### Contact and Footer

The contact section uses a warm sand surface with direct actions for email, telephone and enquiry.
The footer remains compact and editorial rather than becoming another oversized content section.

Current contact information:

- **Address:** 8 Oakhampton Road, Berea, East London, 5241
- **Phone:** [043 7269963](tel:+27437269963)
- **Email:** [emslieco@iafrica.com](mailto:emslieco@iafrica.com)

## Motion and Interaction

Motion is restrained and supports hierarchy rather than competing with content.

Implemented interactions include:

- Branded Oakhampton preloader
- Animated loading progress line
- Hero headline and supporting-copy entrance
- Hero image reveal
- Scroll-triggered content reveals
- Gentle image scaling on hover
- Animated bento-tile icons
- Staggered mobile navigation
- Smooth carousel transitions
- Keyboard and swipe lightbox navigation
- Calendar popover transition
- Modal validation and confirmation

The `prefers-reduced-motion` media query disables non-essential animation and smooth scrolling.

## Responsive Behaviour

The layout is intentionally recomposed rather than simply scaled down.

### Desktop

- Spacious multi-column hero
- Wide secondary hero tiles
- Alternating room-showcase layouts
- Large landscape carousel and map
- Horizontal contact information

### Tablet — below `1050px`

- Rebalanced hero columns
- Simplified room proportions
- Reduced tile complexity
- Two-column location treatment where appropriate

### Mobile — below `760px`

- Single-column hero composition
- Stacked plan and location tiles
- Full-height photographic carousel
- Vertical room showcases
- Bottom-sheet-style enquiry modal
- Staggered dropdown navigation
- Stacked contact and location details

## Accessibility

The interface includes:

- Semantic section and heading structure
- Descriptive image alternative text
- Keyboard-accessible controls
- Visible focus states
- Accessible navigation labels
- Dialog roles and modal semantics
- Escape-key support for modals and lightboxes
- Arrow-key lightbox navigation
- Touch and swipe gallery navigation
- Form validation messaging
- Reduced-motion support
- High-contrast action states

## Project Structure

```text
src/
  App.tsx        Components, content, gallery, enquiry flow and interactions
  index.css      Design tokens, typography, layout, responsive rules and motion
  main.tsx       React application entry point

public/
  assets/
    oakhampton-logo.png
    oakhampton-property.jpg
    single-room.jpg
    double-room.jpg
    gallery/     Oakhampton and nearby-attraction carousel photography
```

The current implementation keeps components in `App.tsx` because the project remains a focused
single-page concept. The component boundaries already separate navigation, gallery, accommodation,
calendar, enquiry, location, contact and footer behavior for future extraction.

## Technology

- React 19
- TypeScript
- Vite 8
- Tailwind CSS 4
- Custom CSS design system
- Google Fonts
- Google Maps embed

No backend, CMS, payment system or booking database is connected.

## Development

The Figma Make development server starts automatically. Do not start an additional development
server.

Useful project commands:

```bash
pnpm format
pnpm build
```

## Future Integration Notes

When the project moves beyond the concept stage:

1. Replace remaining placeholder photography with final Oakhampton assets.
2. Connect the enquiry form to an approved email or booking service.
3. Add server-side validation and spam protection.
4. Integrate a real availability source before displaying availability claims.
5. Add a payment gateway only after reservation and cancellation policies are confirmed.
6. Optimize final photography into responsive image formats and sizes.
7. Add structured business and accommodation metadata for search engines.
#   o a k h a m p t o n  
 