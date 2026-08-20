# Accessibility (always-on)

Non-negotiable baseline for every component:

- Use semantic HTML (`button`, `nav`, `header`, `main`, `ul`…) — never a `div`/`span` with a click handler where a native element exists
- Every input has a label (`<label>`, `aria-label`, or `aria-labelledby`); every icon-only button has an accessible name
- Focus must always be visible — never remove outlines without a replacement (`focus-visible:ring-ring`)
- Never rely on color alone to convey state (error/success/warning) — pair it with text or an icon
- All interactive elements must be keyboard-reachable and operable (Tab, Enter/Space)
- Images: meaningful ones get descriptive `alt`, decorative ones get `alt=""`
- Respect `prefers-reduced-motion` for non-essential animations

For complex interactive widgets (dialogs, comboboxes, tabs, menus, live regions),
follow the `accessible-components` skill.
