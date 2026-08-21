---
name: visual-craft
description: Use when refining or reviewing the visual polish of a UI — typography scale, spacing rhythm, alignment, color contrast for hierarchy, motion, and micro-interaction states (hover/active/focus/disabled/loading). Complements dashboard-design (layout/structure) and accessible-components (ARIA) with the aesthetic/craft dimension.
---

# Visual Craft

Systemic rules (semantic color tokens, 8px grid, WCAG contrast minimums) are
always active via `rules/theming.md` and `rules/tailwind.md`. This skill is
the craft layer on top: how to actually use type, space, alignment, motion,
and interaction feedback well.

## Typography

- One type scale for the whole app, not per-component: e.g. `text-xs/sm/base/lg/xl/2xl/3xl` mapped to specific uses (meta, body, subtitle, section title, page title) — pick once, reuse everywhere
- Body text: `leading-relaxed` (1.6–1.7); tight headings: `leading-tight` (1.1–1.25). Line-height shrinks as size grows
- Line length for body text: ~50–75 characters (`max-w-prose` or `max-w-[65ch]`) — full-width paragraphs on wide screens are unreadable
- Weight carries hierarchy before size does: prefer `font-semibold` at the same size over jumping a whole size step
- Never more than 3 font sizes visible in one view (title, body, meta) — more than that reads as noise, not hierarchy

## Spacing

Single system, don't invent new values: the 8px grid via Tailwind's default
scale (`gap-2`=8px, `gap-4`=16px, `gap-6`=24px, `gap-8`=32px…).

- Related elements sit closer than unrelated ones — spacing *is* the grouping signal (see: proximity principle). If two things need a label to explain they're related, they're too far apart
- Increase spacing as hierarchy increases: tight gaps inside a card (`gap-2`/`gap-3`), larger gaps between cards/sections (`gap-6`/`gap-8`)
- Padding scales with the container's importance: a page section gets more breathing room than a table cell
- One spacing scale for the whole app — no arbitrary `mt-[13px]`

## Alignment

- Establish one left edge per column/section and keep everything on it — ragged left edges are the most common "looks off but I can't say why" bug
- Optical alignment over mathematical: icons next to text often need a 1-2px nudge to *look* centered, even if the box-model says they are
- Numbers in tables/lists: right-align and use tabular figures (`tabular-nums`) so digits line up vertically
- Center only short, isolated content (empty states, single CTAs) — never center body text or multi-line content

## Color contrast for hierarchy

Beyond the WCAG minimums (`accessible-components` skill), contrast is also a
hierarchy tool:

- The highest-contrast element on screen should be the primary action — if everything is high-contrast, nothing stands out
- Push secondary information toward `text-muted-foreground`, not a smaller size — size changes are subtler than most people think, contrast changes read instantly
- Don't fight your own hierarchy: a muted-color primary button next to a high-contrast secondary one inverts the intended emphasis

## Motion

- Duration: 100–150ms for micro-feedback (hover, press), 200–300ms for transitions (open/close, expand/collapse). Above ~400ms starts to feel sluggish
- Easing: `ease-out` for things entering/appearing (fast start, gentle stop), `ease-in` for things leaving. Avoid linear — it reads as mechanical
- Animate **transform** and **opacity** only when possible (GPU-accelerated, no layout thrashing) — avoid animating `width`/`height`/`top`/`left`
- Motion should confirm an action or connect two states, not decorate. If removing an animation doesn't lose any information, it's decoration — cut it
- Always respect `prefers-reduced-motion` (see `rules/accessibility.md`) — provide the instant state-change as a fallback, not a broken half-animation

## Micro-interactions (state feedback)

Every interactive element needs a visible, consistent story across its states:

| State | Signal |
|---|---|
| Hover | Subtle background/border shift (`hover:bg-accent`) — never the only cue on touch devices |
| Active/pressed | Slightly stronger shift or scale (`active:scale-[0.98]`) — confirms the click registered before the async result returns |
| Focus | Visible ring (`focus-visible:ring-ring`) — see `rules/accessibility.md`, never skip this for hover-only feedback |
| Disabled | Reduced opacity (`disabled:opacity-50`) + `cursor-not-allowed` — never just remove the click handler silently |
| Loading | Replace the label or show an inline spinner, keep the element's size stable (no layout shift when the label changes) |

Keep the transition between these states quick (100–150ms) and consistent
across all interactive components — inconsistent timing across buttons/links
is one of the fastest ways to make an interface feel unpolished.
