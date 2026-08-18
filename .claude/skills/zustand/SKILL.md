---
name: zustand
description: Use when adding or reviewing global client state. Covers when to reach for Zustand vs useState vs TanStack Query, store design, location, and selector rules.
---

# State Management (Zustand)

## Quando usare cosa

| Tipo di stato | Strumento |
|---|---|
| Server state (fetch/mutation) | TanStack Query |
| Stato locale di un componente | `useState` |
| Stato globale client-side | Zustand |
| Stato URL (filters, tabs) | React Router params |

**Default:** prima `useState`, poi sollevare lo stato, poi Zustand. Mai partire da global.

## Store design

- Uno store per dominio/feature (no monolitici)
- Tieni gli store piccoli e focalizzati
- Non mischiare UI state e business state nello stesso store

## Posizione

- `src/features/<feature>/store/` per stato specifico di feature
- `src/app/store/` solo se davvero globale (es. theme, auth user)

## Regole stato

- Memorizza solo lo stretto necessario
- Evita derived state nello store (calcolalo fuori quando possibile)
- Mantieni lo stato flat, non profondamente annidato

## Actions

- Le actions vivono dentro lo store
- Devono essere semplici e prevedibili
- Niente logica complessa nei componenti

## Selectors

- Seleziona sempre solo quello che serve
- Non subscrivere all'intero store
- Non passare l'intero store ai componenti

## Esempi tipici

- `useUserStore` → user data (client-side)
- `useUIStore` → flag UI (modali, sidebar, theme)
- `useCartStore` → carrello

## Async

- Per server state: **sempre** TanStack Query, mai Zustand
