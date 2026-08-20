---
name: responsive-design
description: Use when building or adapting layouts across viewports — page shells, navigation, grids, tables, forms, dialogs, images, typography. Covers mobile-first breakpoint strategy, fluid layout patterns, per-component adaptations, and a viewport test checklist.
---

# Responsive Design — Layout Patterns

Baseline rules (mobile-first, fluid layouts, no horizontal scroll, touch
targets) are always active via `rules/tailwind.md`. This skill covers the
heavier per-component patterns.

## Breakpoint strategy

- **Mobile-first**: unprefixed utilities are the mobile layout; `sm:`/`md:`/`lg:` add complexity upward. Never write desktop-first with overrides downward.
- Break where the **content** breaks, not where devices are — if a card grid looks cramped at 700px, that's your breakpoint, regardless of "tablet"
- Tailwind defaults: `sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280 · `2xl` 1536. Customize via theme tokens, don't hardcode arbitrary `min-[...]` values repeatedly

## Fluid layout patterns

- Page shell: `max-w-*` + `mx-auto` + horizontal padding — content column that breathes at any width
- Grids that adapt without breakpoints when possible:
  `grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]` — cards flow naturally
- Explicit column steps when order matters: `grid-cols-1 md:grid-cols-2 xl:grid-cols-4`
- Spacing with `gap`, not margins on children — survives wrapping
- `flex-wrap` for toolbars/chip rows instead of forcing one line

## Per-component adaptations

| Component | Mobile | Desktop |
|---|---|---|
| Sidebar nav | Drawer/Sheet (shadcn `Sheet`), hamburger trigger | Persistent sidebar |
| Data table | Horizontal scroll inside its own container (`overflow-x-auto`), or card list per row | Full table |
| Metric cards | 1 column | 2 → 4 columns via grid steps |
| Form | Single column | Two-column `md:grid-cols-2` for short related fields |
| Dialog | Full-screen or bottom sheet | Centered modal |
| Tabs (many) | Scrollable tab list | Full tab row |

Never "squeeze" a desktop layout to fit mobile — change the pattern.

## Typography & spacing

- Keep the type scale consistent across breakpoints; adjust only page/section titles (`text-2xl lg:text-3xl`)
- `truncate` + tooltip for long text in constrained cells, don't let it break layout
- Use `clamp()`-based fluid sizes sparingly and only via theme tokens, not inline arbitrary values

## Images & media

- `max-w-full h-auto` always; reserve space with `aspect-ratio` to avoid layout shift
- Heavy images: `srcset`/`sizes` so mobile doesn't download desktop assets
- Icons scale with text (`size-4`, `size-5`), not fixed px out of scale

## Container queries

When a component must adapt to its **container** (e.g. a card used both in a
sidebar and a main grid), use container queries (`@container` + `@md:` variants)
instead of viewport breakpoints — viewport-based variants lie inside narrow
containers.

## Test checklist

Before considering a layout done:

- [ ] Check at ~360px, 768px, 1024px, 1440px — no horizontal page scroll at any of them
- [ ] Wide content (tables, code, charts) scrolls inside its own container, never the page
- [ ] Nothing important is hover-only; touch targets ≥ 44×44px
- [ ] Zoom at 200% on desktop — layout reflows, no clipped content
- [ ] Text truncation behaves (long names, long translations)
- [ ] Images don't cause layout shift while loading
