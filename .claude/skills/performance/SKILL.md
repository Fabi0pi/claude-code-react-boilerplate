---
name: performance
description: Use when a screen handles large datasets, a route feels slow to load, or you're deciding whether something needs optimizing. Covers route-based code splitting, list virtualization, image/asset loading, and when optimization is actually worth it.
---

# Performance

Don't optimize speculatively — the React Compiler already handles memoization
(see `rules/react-core.md`). This skill is about the things it *doesn't*
handle: what to load, when, and how much.

## Route-based code splitting

- Lazy-load routes/pages, not shared UI primitives: `const SettingsPage = lazy(() => import('./SettingsPage'))`
- Wrap the router outlet in a single top-level `<Suspense>` with a skeleton fallback, not one per route
- Don't split below the route level unless a specific component is both heavy and rarely used (a chart library, a rich text editor) — over-splitting adds request waterfalls for no benefit

## Large lists and tables

- Virtualize anything rendering more than ~200 rows at once (`@tanstack/react-virtual` pairs naturally with TanStack Query)
- Paginate at the data layer before reaching for virtualization — fetching 10,000 rows to virtualize them client-side is usually the wrong fix
- Server-side filtering/sorting for large datasets; client-side only for what's already on screen

## Images and assets

- Always set explicit `width`/`height` (or `aspect-ratio`) to reserve space and avoid layout shift
- Lazy-load below-the-fold images (`loading="lazy"`), eager-load the one above the fold (hero, avatar in header)
- Serve responsive sizes (`srcset`/`sizes`) instead of one large image scaled down by CSS
- Icon libraries: import individual icons, never the whole set (`import { Check } from 'lucide-react'`, not `import * as Icons`)

## Data fetching

- `staleTime`/caching is the first lever, not a rewrite — see `rules/tanstack-query.md`... check `skills/tanstack-query` before reaching for anything else
- Prefetch on hover/intent for predictable next navigations (e.g. hovering a table row before clicking into detail)
- Debounce search/filter inputs (300ms is a reasonable default) before firing a query

## When *not* to optimize

- Don't virtualize a list under ~100 items — the overhead isn't worth it
- Don't code-split a route that's the app's entry point or visited by nearly everyone (login, home) — the extra request costs more than it saves
- Profile before optimizing rendering: if you can't point to a measured slow interaction, you're guessing. Use React DevTools Profiler, not intuition
