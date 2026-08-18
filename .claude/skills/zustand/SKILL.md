---
name: zustand
description: Use when adding or reviewing global client state. Covers when to reach for Zustand vs useState vs TanStack Query, store design, location, and selector rules.
---

# State Management (Zustand)

## What to use when

| State type | Tool |
|---|---|
| Server state (fetch/mutation) | TanStack Query |
| Local component state | `useState` |
| Global client-side state | Zustand |
| URL state (filters, tabs) | React Router params |

**Default:** start with `useState`, then lift state up, then Zustand. Never start from global.

## Store design

- One store per domain/feature (no monoliths)
- Keep stores small and focused
- Don't mix UI state and business state in the same store

## Location

- `src/features/<feature>/store/` for feature-specific state
- `src/app/store/` only if truly global (e.g. theme, auth user)

## State rules

- Store only what's strictly necessary
- Avoid derived state in the store (compute it outside when possible)
- Keep state flat, not deeply nested

## Actions

- Actions live inside the store
- They must be simple and predictable
- No complex logic in components

## Selectors

- Always select only what's needed
- Don't subscribe to the entire store
- Don't pass the whole store down to components

## Typical examples

- `useUserStore` → user data (client-side)
- `useUIStore` → UI flags (modals, sidebar, theme)
- `useCartStore` → cart

## Async

- For server state: **always** TanStack Query, never Zustand
