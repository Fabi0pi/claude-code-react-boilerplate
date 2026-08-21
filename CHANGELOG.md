# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- `rules/accessibility.md` — always-on accessibility baseline (semantic HTML, labels, visible focus, keyboard operability, color-independent state)
- `skills/accessible-components` — on-demand ARIA patterns for complex widgets (dialogs, comboboxes, tabs, menus, live regions) with a keyboard/screen-reader test checklist
- `skills/responsive-design` — on-demand breakpoint strategy, fluid layout patterns, per-component adaptations (nav, tables, grids, dialogs), and a viewport test checklist
- `rules/security.md` — always-on frontend security baseline (no secrets in the client bundle, XSS/`dangerouslySetInnerHTML`, Zod validation at boundaries, token storage, safe links and redirects)
- `skills/visual-craft` — on-demand visual polish guidance: typography scale, spacing rhythm, alignment, color contrast for hierarchy, motion (durations/easing), and micro-interaction states (hover/active/focus/disabled/loading)
- `rules/typescript.md` — always-on TypeScript conventions (strict mode, no `any`, discriminated unions for variant state, type-only imports, utility types over hand-duplicated shapes)
- `skills/performance` — on-demand guidance on route-based code splitting, list virtualization, image/asset loading, and when optimization is (not) worth it
- `skills/error-handling` — on-demand Error Boundary granularity, sync-vs-async error handling, and fallback UI patterns
- `rules/architecture.md` — module boundaries bullet: features don't import from other features, pages import features (not the other way around)
- `skills/testing-architecture` — on-demand testing strategy: MSW for network-boundary mocking, unit/integration/e2e boundaries, Testing Library query priority, test data builders, testing hooks/stores/async state, coverage philosophy
- `skills/http-client` — on-demand HTTP/API layer: single fetch wrapper, auth header handling and 401 flow, normalized `ApiError` shape (the `getErrorMessage` helper `error-handling` already referenced), typed responses via Zod, and an explicit division of responsibility with TanStack Query's retry/caching
- `skills/design-tokens` — on-demand design token system beyond color: the three-tier `raw-colors.ts` → `semantic-tokens.ts` → `components.ts` model, with CSS/Tailwind as the source of truth and the TS files as re-exports for what className can't reach, applied to spacing, typography, radius, and elevation
- `skills/i18n-advanced` — on-demand pluralization (CLDR plural forms), locale-aware date/number/currency formatting, namespace splitting with lazy-loading (paired with `performance`'s route-based splitting), `<Trans>` for rich text instead of `dangerouslySetInnerHTML`, RTL support, locale detection, and missing-key fallback strategy

### Changed
- `skills/error-handling` and `skills/tanstack-query` now cross-reference `http-client` instead of pointing at an undefined API layer
- `skills/project-structure` — `theme/` folder now points to `design-tokens` for what belongs in each file
- `rules/localization.md` now points to `i18n-advanced` for anything beyond basic `t()` usage and key conventions
- `code-reviewer` agent now checks accessibility (missing labels, div-as-button, removed focus styles, color-only state, missing ARIA on custom widgets), responsive issues (fixed widths, missing breakpoint variants, tables without scroll containers, hover-only interactions), and security issues (secrets in client code, unsanitized HTML injection, unvalidated external data, unsafe token storage and links)
- `ui-builder` agent workflow now includes accessibility, responsive, and visual-craft polish steps, pointing to the rules and skills
- `rules/tailwind.md` — strengthened the Responsiveness baseline (fluid layouts, no horizontal page scroll, touch targets)
- README's Customization section now documents the file-based enable/disable model: to exclude a rule/skill/agent/command, delete its file (and its line in `CLAUDE.md`'s index) — there is no toggle mechanism in `settings.json`

### Fixed
- `skills/project-structure` — aligned the reference tree with the declared stack: `tsconfig.json`/`vite.config.ts` instead of `jsconfig.json`/`vite.config.js`, `store/index.ts` instead of `.js`, removed a leftover Chakra `extendTheme` comment, and applied the boilerplate's own naming conventions throughout — all component files PascalCase (`Page1.tsx`, `NotFoundPage.tsx`, `RouterProvider.tsx`, `Button.tsx`, `AppShell.tsx`, `App.tsx`…), non-component files kebab-case (`semantic-tokens.ts`, `raw-colors.ts`)
- `skills/code-patterns` — typo ("retun" → "return")
- `commands/write-tests.md` — frontmatter `description` was still in Italian, missed in the earlier translation pass

---

Initial state of the boilerplate: `.claude/` structure (rules, skills, agents, commands, hooks, settings), `CLAUDE.md`, `AGENTS.md`, `README.md`, `LICENSE` (MIT).
