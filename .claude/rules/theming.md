# Theming (Tailwind + shadcn/ui)

Stack: **Tailwind CSS** + **shadcn/ui** (CSS variables based theming).
Non usare Chakra UI o altre librerie di styling in parallelo.

## Color tokens

Usa sempre le variabili CSS semantiche definite in `globals.css`,
mai colori raw del palette Tailwind per valori semantici.

| Uso | Token semantico | Evita |
|---|---|---|
| Sfondo pagina | `bg-background` | `bg-white`, `bg-gray-50` |
| Sfondo card/surface | `bg-card`, `bg-popover` | `bg-white`, `bg-slate-100` |
| Testo primario | `text-foreground` | `text-black`, `text-gray-900` |
| Testo secondario | `text-muted-foreground` | `text-gray-500` |
| Bordi | `border-border` | `border-gray-200` |
| Azione primaria | `bg-primary text-primary-foreground` | `bg-blue-600` |
| Stato distruttivo | `bg-destructive text-destructive-foreground` | `bg-red-600` |
| Focus ring | `ring-ring` | `ring-blue-500` |

Colori raw (`bg-blue-500`, `text-red-600`) ammessi **solo** per
elementi puramente decorativi (es. badge categorici, grafici).

## Dark mode

- Dark mode è gestito automaticamente dalle CSS variables
- Non scrivere mai `dark:` per valori semantici già coperti dai token
- Usa `dark:` solo per casi edge (es. invertire un'immagine)

## Validation checklist

Prima di considerare un componente fatto, verifica mentalmente:
- Si vede correttamente in light mode?
- Si vede correttamente in dark mode?
- Tutti i colori usati sono token semantici (non raw)?
- Spacing usa la 8px grid (gap-2, p-4, ecc.)?
