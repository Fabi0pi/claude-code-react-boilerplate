# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- `rules/accessibility.md` — always-on accessibility baseline (semantic HTML, labels, visible focus, keyboard operability, color-independent state)
- `skills/accessible-components` — on-demand ARIA patterns for complex widgets (dialogs, comboboxes, tabs, menus, live regions) with a keyboard/screen-reader test checklist
- `skills/responsive-design` — on-demand breakpoint strategy, fluid layout patterns, per-component adaptations (nav, tables, grids, dialogs), and a viewport test checklist

### Changed
- `code-reviewer` agent now checks accessibility (missing labels, div-as-button, removed focus styles, color-only state, missing ARIA on custom widgets) and responsive issues (fixed widths, missing breakpoint variants, tables without scroll containers, hover-only interactions)
- `ui-builder` agent workflow now includes accessibility and responsive steps, pointing to the rules and skills
- `rules/tailwind.md` — strengthened the Responsiveness baseline (fluid layouts, no horizontal page scroll, touch targets)

---

Initial state of the boilerplate: `.claude/` structure (rules, skills, agents, commands, hooks, settings), `CLAUDE.md`, `AGENTS.md`, `README.md`, `LICENSE` (MIT).
