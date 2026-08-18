# Claude — Global User Instructions

## Profile and preferences

- Prefer simple, quick-to-implement solutions
- Avoid overengineering
- When it makes sense, give a "quick & dirty" version + a "scalable" one, with trade-offs
- Don't be unnecessarily verbose — concise answers, code before explanations
- Language: respond in **English** unless asked otherwise (edit this to your preferred language — this is a personal setting, not part of the shared boilerplate)

## Default stack (web)

- **React 19** + **TypeScript 5.9** + **Vite**
- **React Router** for navigation
- **TanStack Query** for server state
- **Zustand** for global client state
- **Tailwind CSS** for styling
- **shadcn/ui** for accessible, composable UI components (no Chakra, no styled-components)
- **design tokens** for colors, typography, spacing, radius, etc.
- **React Hook Form** for form state
- **Zod** for schema validation
- **i18next** for localization

## Always-active rules

See `.claude/rules/` for details (loaded automatically). The most critical ones:

- **No `useMemo` / `useCallback` / `React.memo`** — the React Compiler handles memoization
  > Note: only applies if the React Compiler is correctly configured in the project and doesn't conflict with the state manager or rendering. Verify before applying this rule.
- **Never call hooks conditionally** — avoid the "React Hook is called conditionally" error.
- **Never `setState` in `useEffect`** to derive/reset other state → cascading render
- **Never `useEffect` for data fetching** → use TanStack Query
- **Never raw Tailwind colors** (`bg-blue-500`) for semantic values → use shadcn tokens (`bg-primary`)
- **Never inline text** in components → use i18next's `t()`
- Components max ~100 lines, inline callbacks max 4 lines, mapped components max 6 lines inline
- Design tokens are `the source of truth` for visual values. Tailwind utilities must use tokens instead of introducing arbitrary colors, spacing, typography, or radius values. shadcn/ui components must be customized through the token system and component variants, not by introducing a second styling system.

## Naming conventions

| Type | Convention | Example |
|---|---|---|
| React components | PascalCase | `UserProfileCard.tsx` |
| Functions / variables | camelCase | `getUserById()` |
| Constants | UPPER_SNAKE_CASE | `MAX_RETRY_COUNT` |
| Types / interfaces | PascalCase | `UserProfile` |
| Non-component files | kebab-case | `auth-utils.ts` |
| Folders | kebab-case | `user-management/` |
| Environment variables | UPPER_SNAKE_CASE | `DATABASE_URL` |

## Workflow

- **Debug**: identify the root cause first, don't patch symptoms. Reproduce the error, propose the fix, verify it.
- **Refactor**: behavior unchanged, split large components, extract hooks
- **Plan**: complex plans get saved with `/save-plan` (slash command)
- **Form**: building a new form? Always follow the `/form-validation` skill
- **Test**: every feature has basic tests with input/output examples; always verify the result before considering it done

## Detail file index

### Rules (`.claude/rules/`) — loaded automatically every session, keep them small

- `architecture.md` — logic/UI separation
- `coding-style.md` — generic code style
- `react-core.md` — React 19 rules
- `tailwind.md` — Tailwind usage
- `theming.md` — shadcn semantic tokens + dark mode
- `localization.md` — i18next

### Skills (`.claude/skills/<name>/SKILL.md`) — loaded only when invoked

- `components` — when to create/split components
- `form-validation` — full Zod pattern for forms
- `code-patterns` — DO/DON'T examples for callbacks and mapped lists
- `dashboard-design` — design principles for dashboards/data-heavy UI
- `project-structure` — reference folder structure for a new project
- `tanstack-query` — patterns for server state and data fetching
- `zustand` — patterns for global client-side state

General rule: if content is needed **always**, it goes in `rules/` (small, low cost). If it's only needed for certain tasks (forms, dashboards, data fetching...), it goes in `skills/` (loaded only on demand). Don't duplicate the same content in both places.
