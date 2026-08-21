---
name: design-tokens
description: Use when defining or extending the design token system beyond color — typography scale, spacing scale, radius, elevation/shadow — or deciding what belongs in raw-colors.ts vs semantic-tokens.ts vs components.ts. Color tokens themselves are covered by rules/theming.md.
---

# Design Tokens (beyond color)

Color tokens and dark mode are covered by `rules/theming.md` — this skill
applies the same three-tier model to typography, spacing, radius, and
elevation, and clarifies what belongs in each file under `src/theme/`.

## Three-tier model

`project-structure`'s `theme/` folder already implies this hierarchy —
make it explicit:

1. **`raw-colors.ts`** (raw values, not just colors): primitives with no meaning attached — a color hex/oklch, a base spacing unit, a font family stack, a base radius. Never imported outside `theme/`
2. **`semantic-tokens.ts`**: purpose-named tokens built from raw values — `spacing.cardPadding`, `radius.card`, `text.heading`. This is what the rest of the app actually consumes
3. **`components.ts`**: component-specific overrides, only when a component genuinely needs a value the semantic scale doesn't cover — the exception, not the default

## Source of truth: CSS/Tailwind, not a parallel JS system

Tailwind's config (or the CSS variables in `globals.css`, per `theming.md`)
is the **primary** source of truth — most components consume tokens via
className, not via `theme/*.ts` imports. The TypeScript token files exist
for what className can't reach: values passed to charting libraries,
canvas/SVG, or computed inline styles. Define a value once in the CSS
layer and re-export it into `theme/*.ts` — never define a spacing, radius,
or color value in TypeScript that doesn't already exist in CSS.

## Spacing

- Don't invent a spacing scale — Tailwind's default scale (4px base: `1`=4px, `2`=8px, `4`=16px…) already **is** the token system, per `rules/tailwind.md`'s 8px grid
- `semantic-tokens.ts` only needs entries for named, reused gaps that recur across the app (`spacing.cardPadding`, `spacing.sectionGap`) — not a redefinition of the whole scale

## Typography

- Token the *roles*, not just sizes: `text.pageTitle`, `text.sectionTitle`, `text.body`, `text.meta` — each bundling size + weight + line-height together (see `visual-craft` for the actual scale/line-height values to bundle)
- One font-family token per role (`font.sans`, `font.mono`) — never a raw font-family string inline in a component

## Radius

- One radius scale, reused everywhere: `radius.sm` (inputs, badges), `radius.md` (cards, buttons), `radius.lg` (modals, sheets), `radius.full` (avatars, pills)
- shadcn/ui's `--radius` CSS variable already is this system for its own components — extend it, don't create a second one

## Elevation / shadow

- Token shadows by *purpose*, not by value: `shadow.card`, `shadow.dropdown`, `shadow.modal` — each a fixed blur/spread/opacity combination, not an ad-hoc `shadow-[0_2px_8px_rgba(...)]` per component
- More elevation = more visual "distance" from the page: dropdowns/popovers sit above cards, modals above dropdowns — keep this ordering consistent across the app

## When to add a new token vs reuse one

Before adding a new token, check whether an existing semantic token
already covers the case — a new token is for a genuinely new *purpose*,
not a new *value*. Two components needing "the same gray but 2% darker"
is almost always a sign to reuse the existing token, not add one.
