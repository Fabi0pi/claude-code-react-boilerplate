# Agent Instructions

This repository is a **configuration boilerplate** for developing with AI agents on **React 19 + TypeScript + Vite** projects. If you're using it as a starting point for a real project, these instructions apply to the code you'll write in that project.

## Default stack

React 19 · TypeScript 7 · Vite · React Router · TanStack Query (server state) · Zustand (global client state) · Tailwind CSS · shadcn/ui · React Hook Form + Zod · i18next.

## Critical rules

- Prefer simple solutions, avoid overengineering
- React components: single responsibility, max ~100 lines, split if larger
- Never `useEffect` for data fetching → use TanStack Query
- Never synchronous `setState` in `useEffect` to derive/reset state → cascading render
- Never raw Tailwind colors (`bg-blue-500`) for semantic values → use shadcn tokens (`bg-primary`, `text-foreground`, etc.)
- Never hardcoded text in components → use i18next's `t()`
- Forms: always Zod + React Hook Form, schema separate from the component, never manual validation
- Naming: components PascalCase, functions/variables camelCase, constants UPPER_SNAKE_CASE, non-component files and folders kebab-case

## Claude Code

If you're using Claude Code, this repo has a richer dedicated configuration in `.claude/` (auto-loaded rules, on-demand skills, sub-agents, slash commands) and in `CLAUDE.md` — use that instead of relying only on this file.
