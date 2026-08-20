---
name: accessible-components
description: Use when building or reviewing complex interactive widgets — dialogs, comboboxes, tabs, menus, tooltips, async/loading states. Covers ARIA patterns, focus management, live regions, and a keyboard/screen-reader test checklist.
---

# Accessible Components — ARIA Patterns

Baseline rules (semantic HTML, labels, visible focus, color-independence) are
always active via `rules/accessibility.md`. This skill covers the heavier
patterns for complex widgets.

## Prefer shadcn/ui primitives first

shadcn/ui components are built on Radix UI, which already implements correct
ARIA roles, focus management, and keyboard interaction. **Use them instead of
hand-rolling widgets** — most of this skill becomes unnecessary when you do.
Hand-roll only when no primitive fits, and then follow the patterns below.

## Dialogs / Modals

- `role="dialog"` + `aria-modal="true"`, labelled by its title (`aria-labelledby`)
- Focus moves into the dialog on open (first focusable element or the title)
- Focus is **trapped** while open (Tab cycles inside)
- `Esc` closes; on close, focus returns to the element that opened it
- Content behind the dialog is inert (`inert` attribute or `aria-hidden`)

## Comboboxes / Autocomplete

- Input has `role="combobox"`, `aria-expanded`, `aria-controls` pointing to the listbox
- Listbox options use `role="option"` + `aria-selected`
- Arrow keys move the active option (`aria-activedescendant`), Enter selects, Esc closes
- Announce result counts with a live region ("5 results available")

## Tabs

- `role="tablist"` / `role="tab"` / `role="tabpanel"`, linked via `aria-controls` / `aria-labelledby`
- Active tab: `aria-selected="true"` and `tabindex="0"`; inactive tabs `tabindex="-1"`
- Arrow keys move between tabs (roving tabindex); Tab moves into the panel

## Menus / Dropdowns

- Trigger: `aria-haspopup="menu"` + `aria-expanded`
- `role="menu"` / `role="menuitem"`, arrow-key navigation, Esc closes and returns focus
- Don't use menu roles for navigation links — a styled `<nav>` with links is correct there

## Async states / Live regions

- Announce async outcomes with `aria-live="polite"` (or `role="status"`); reserve
  `aria-live="assertive"` / `role="alert"` for errors that need immediate attention
- Loading: pair spinners/skeletons with visually-hidden text ("Loading results…")
- Disable-and-announce on submit: `aria-disabled` + status text, so the state change
  is perceivable without vision
- Form errors: link each message to its field (`aria-describedby`), set
  `aria-invalid="true"`, and move focus to the first invalid field on failed submit

## Test checklist

Before considering a widget done:

- [ ] Complete every flow with keyboard only (Tab, Shift+Tab, Enter, Space, arrows, Esc)
- [ ] Focus is always visible and never lost (check after open/close/delete actions)
- [ ] VoiceOver/NVDA announces the widget's name, role, and state changes
- [ ] Zoom at 200% — no clipped content, no horizontal scroll on text
- [ ] Contrast: text ≥ 4.5:1, large text/UI parts ≥ 3:1 (semantic tokens should already guarantee this — verify custom values)
- [ ] Animations disabled under `prefers-reduced-motion`
