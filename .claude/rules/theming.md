# Theming (Tailwind + shadcn/ui)

Stack: **Tailwind CSS** + **shadcn/ui** (CSS variables based theming).
Do not use Chakra UI or other styling libraries in parallel.

## Color tokens

Always use the semantic CSS variables defined in `globals.css`,
never raw Tailwind palette colors for semantic values.

| Use | Semantic token | Avoid |
|---|---|---|
| Page background | `bg-background` | `bg-white`, `bg-gray-50` |
| Card/surface background | `bg-card`, `bg-popover` | `bg-white`, `bg-slate-100` |
| Primary text | `text-foreground` | `text-black`, `text-gray-900` |
| Secondary text | `text-muted-foreground` | `text-gray-500` |
| Borders | `border-border` | `border-gray-200` |
| Primary action | `bg-primary text-primary-foreground` | `bg-blue-600` |
| Destructive state | `bg-destructive text-destructive-foreground` | `bg-red-600` |
| Focus ring | `ring-ring` | `ring-blue-500` |

Raw colors (`bg-blue-500`, `text-red-600`) are allowed **only** for
purely decorative elements (e.g. categorical badges, charts).

## Dark mode

- Dark mode is handled automatically by the CSS variables
- Never write `dark:` for semantic values already covered by tokens
- Use `dark:` only for edge cases (e.g. inverting an image)

## Validation checklist

Before considering a component done, check mentally:
- Does it look correct in light mode?
- Does it look correct in dark mode?
- Are all colors used semantic tokens (not raw)?
- Does spacing follow the 8px grid (gap-2, p-4, etc.)?
