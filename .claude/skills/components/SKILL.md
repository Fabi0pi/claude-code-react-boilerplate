---
name: components
description: Use when creating a new React component or refactoring an existing one. Covers single-responsibility splitting, composition with shadcn primitives, and where each type of component lives in the project.
---

# Components Architecture

## Single responsibility
- One component = one concern
- Split any component that exceeds ~500 lines or handles more than one responsibility
- Extract logic into dedicated hooks (`useXxx`) to keep the JSX clean
- Never inline callbacks longer than 4 lines — extract named functions

## Composition first
- Build primitives first (Button, Input, Badge…) then compose them
- Before creating a new component, check if **shadcn/ui** already provides it
  (see https://ui.shadcn.com/docs/components)
- Design every component to be **configurable via props**, not duplicated

## Where components live

| Type | Path |
|---|---|
| Generic, reusable | `src/components/ui/` |
| App-wide layout | `src/components/layout/` |
| Feature-specific | `src/features/<feature>/components/` |
| Page-specific | `src/pages/<page>/components/` |
