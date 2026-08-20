# UI System (Tailwind)

- Use Tailwind for styling
- Prefer utility classes over custom CSS

## Design Principles
- Keep UI clean and minimal
- Maintain consistent spacing
- Use design tokens ever

## Components
- Build reusable UI primitives first:
  - Button
  - Input
  - Select
  - Card
  - Modal

## Styling
- Avoid inline styles
- Avoid duplicated class patterns
- Extract reusable patterns into components

## Class Management
- Use cn() utility for conditional classes

## Responsiveness
- Design mobile-first: base styles target mobile, layer complexity at breakpoints (sm, md, lg…)
- Fluid layouts (flex/grid + gap), never fixed pixel widths on containers
- No horizontal page scroll at any viewport; wide content scrolls inside its own container
- Touch targets ≥ 44×44px; never hide functionality behind hover-only interactions
- For per-component layout patterns (nav, tables, grids, dialogs), follow the `responsive-design` skill

## Avoid
- Overly complex class chains
- Mixing Tailwind with other styling systems