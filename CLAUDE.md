# Claude — Istruzioni globali utente

## Profilo e preferenze

- Preferisco soluzioni semplici e veloci da implementare
- Evita overengineering
- Quando ha senso, dai una versione "quick & dirty" + una "scalable" con i trade-off
- Non essere verbose inutilmente — risposte concise, codice prima delle spiegazioni
- Lingua: rispondi in **italiano** salvo richiesta diversa

## Stack di default (web)

- **React 19** + **TypeScript 5.9** + **Vite**
- **React Router** per navigazione
- **TanStack Query** per server state
- **Zustand** per global client state
- **Tailwind CSS** per styling
- **shadcn/ui** per componenti UI accessibili e composabili (no Chakra, no styled-components)
- **design tokens** per colori, typography, spacing, radius, ecc.
- **React Hook Form** per form state
- **Zod** per schema validation
- **i18next** per localizzazione

## Regole sempre attive

Vedi `.claude/rules/` per i dettagli (caricate automaticamente). Le più critiche:
 
- **No `useMemo` / `useCallback` / `React.memo`** — il React Compiler gestisce la memoization
  > Nota: vale solo se React Compiler è configurato correttamente nel progetto e non crea conflitti con lo state manager o il rendering. Verificare prima di applicare la regola.
- **Mai `hooks` chiamati condizionalmente** - evitiamo l'errore "React Hook is called conditionally."
- **Mai `setState` in `useEffect`** per derivare/resettare altro stato → cascading render
- **Mai `useEffect` per data fetching** → usa TanStack Query
- **Mai colori raw Tailwind** (`bg-blue-500`) per valori semantici → usa token shadcn (`bg-primary`)
- **Mai testo inline** nei componenti → usa `t()` di i18next
- Componenti max ~100 righe, callback inline max 4 righe, mapped components max 6 righe inline
- I design tokens sono `the source of truth` per i valori visivi. Le utility di Tailwind devono utilizzare i token anziché introdurre colori, spaziatura, tipografia o valori di raggio arbitrari. I componenti shadcn/ui devono essere personalizzati tramite il sistema di token e le varianti dei componenti, non introducendo un secondo sistema di stile.

## Naming conventions

| Tipo | Convenzione | Esempio |
|---|---|---|
| Componenti React | PascalCase | `UserProfileCard.tsx` |
| Funzioni / variabili | camelCase | `getUserById()` |
| Costanti | UPPER_SNAKE_CASE | `MAX_RETRY_COUNT` |
| Tipi / interfacce | PascalCase | `UserProfile` |
| File non-componente | kebab-case | `auth-utils.ts` |
| Cartelle | kebab-case | `user-management/` |
| Variabili d'ambiente | UPPER_SNAKE_CASE | `DATABASE_URL` |

## Workflow

- **Debug**: identifica root cause prima, non patchare sintomi. Riproduci l'errore, proponi il fix, verifica.
- **Refactor**: comportamento invariato, splitta componenti grandi, estrai hook
- **Plan**: piani complessi vanno salvati con `/save-plan` (slash command)
- **Form**: nuova form? Segui sempre la skill `/form-validation`
- **Test**: ogni feature ha test base con esempi input/output; verifica sempre il risultato prima di considerarla fatta

## Indice file di dettaglio

### Rules (`.claude/rules/`) — caricate automaticamente a ogni sessione, tienile piccole

- `architecture.md` — separazione logica/UI
- `coding-style.md` — stile codice generico
- `react-core.md` — regole React 19
- `tailwind.md` — uso Tailwind
- `theming.md` — token semantici shadcn + dark mode
- `localization.md` — i18next

### Skills (`.claude/skills/<nome>/SKILL.md`) — caricate solo quando invocate

- `components` — quando creare/splittare componenti
- `form-validation` — pattern Zod completo per le form
- `code-patterns` — esempi DO/DON'T su callback e liste mappate
- `dashboard-design` — principi di design per dashboard/UI data-heavy
- `project-structure` — struttura cartelle di riferimento per un nuovo progetto
- `tanstack-query` — pattern per server state e data fetching
- `zustand` — pattern per stato globale client-side

Regola generale: se un contenuto serve **sempre**, va in `rules/` (piccolo, a basso costo). Se serve solo in certi task (form, dashboard, data fetching...), va in `skills/` (si carica solo su richiesta). Non duplicare lo stesso contenuto in entrambi i posti.
