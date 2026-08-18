# Agent Instructions

Questo repository è un **boilerplate di configurazione** per sviluppare con agenti AI su progetti **React 19 + TypeScript + Vite**. Se lo stai usando come punto di partenza per un progetto reale, queste istruzioni si applicano al codice che scriverai in quel progetto.

## Stack di default

React 19 · TypeScript 5.9 · Vite · React Router · TanStack Query (server state) · Zustand (client state globale) · Tailwind CSS · shadcn/ui · React Hook Form + Zod · i18next.

## Regole critiche

- Preferisci soluzioni semplici, evita overengineering
- Componenti React: single responsibility, max ~100 righe, split se più grandi
- Mai `useEffect` per data fetching → usa TanStack Query
- Mai `setState` sincrono in `useEffect` per derivare/resettare stato → cascading render
- Mai colori raw Tailwind (`bg-blue-500`) per valori semantici → usa i token shadcn (`bg-primary`, `text-foreground`, ecc.)
- Mai testo hardcoded nei componenti → usa `t()` di i18next
- Form: sempre Zod + React Hook Form, schema separato dal componente, mai validazione manuale
- Naming: componenti PascalCase, funzioni/variabili camelCase, costanti UPPER_SNAKE_CASE, file non-componente e cartelle kebab-case

## Claude Code

Se stai usando Claude Code, questo repo ha una configurazione dedicata più ricca in `.claude/` (regole caricate automaticamente, skill on-demand, sub-agenti, slash command) e in `CLAUDE.md` — usa quella invece di limitarti a questo file.
