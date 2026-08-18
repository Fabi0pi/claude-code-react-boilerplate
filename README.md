# Claude Code Boilerplate

Configurazione riutilizzabile per chi sviluppa con [Claude Code](https://claude.com/claude-code) e fa "vibe coding" su progetti **React 19 + TypeScript + Vite**. Contiene regole, comandi, skill e sub-agenti pronti all'uso — non è codice applicativo, è la configurazione che guida l'agente.

## Come si usa

Copia `CLAUDE.md` e la cartella `.claude/` nella root del tuo progetto (o usa questa repo come **Template** su GitHub per iniziarne uno nuovo). Claude Code carica automaticamente:

- `CLAUDE.md` — profilo utente, stack di default, regole critiche, naming conventions
- `.claude/rules/*.md` — regole di dettaglio, iniettate in ogni sessione senza bisogno di essere lette manualmente
- `.claude/agents/*.md` — sub-agenti specializzati, invocabili con `@nome-agente`
- `.claude/commands/*.md` — slash command personalizzati
- `.claude/skills/<nome>/SKILL.md` — skill invocabili on-demand
- `.claude/settings.json` — permessi di default e hook di sicurezza

Nessuna di queste cartelle funziona se rinominata o spostata: Claude Code cerca esattamente `.claude/rules`, `.claude/agents`, `.claude/commands`, `.claude/skills/<nome>/SKILL.md`.

## Stack di riferimento

React 19 · TypeScript 5.9 · Vite · React Router · TanStack Query · Zustand · Tailwind CSS · shadcn/ui · React Hook Form · Zod · i18next.

Le regole in `.claude/rules/` assumono questo stack. Se il tuo progetto è diverso, adatta i file prima di usarli (in particolare `theming.md`, `tailwind.md`, `tanstack-query.md`, `zustand.md` sono specifici di questa combinazione).

## Cosa c'è dentro

### Rules (`.claude/rules/`)
Regole sempre attive, lette automaticamente a ogni sessione: architettura, coding style, pattern DO/DON'T, React 19, struttura progetto, design dashboard, Tailwind, theming/token semantici, forms, TanStack Query, Zustand, localizzazione, debugging, testing.

### Skills (`.claude/skills/`)
| Skill | Quando si attiva |
|---|---|
| `components` | Creazione o refactor di un componente React — single responsibility, composizione con shadcn |
| `form-validation` | Creazione o modifica di una form — pattern Zod + React Hook Form completo |

### Agents (`.claude/agents/`)
| Agente | Uso |
|---|---|
| `code-reviewer` | Review indipendente dopo aver scritto/modificato codice — restituisce una punch list, non riscrive |
| `form-builder` | Costruisce form React Hook Form + Zod seguendo il pattern schema-per-dominio |
| `refactorer` | Refactor a comportamento invariato: split componenti, estrazione hook, rimozione anti-pattern |
| `ui-builder` | Costruisce schermate/dashboard da zero con Tailwind + shadcn, stati loading/empty/error inclusi |

### Commands (`.claude/commands/`)
| Comando | Cosa fa |
|---|---|
| `/save-plan` | Salva il piano di lavoro corrente in `.claude/plans/` |
| `/remember-plan` | Ricarica un piano salvato in memoria |
| `/complete-plan` | Segna un piano come completato e lo elimina |
| `/redesign-app` | Genera un brief di redesign UX da un template guidato |
| `/write-tests` | Genera test (unit + integration) seguendo la testing pyramid del progetto |

### Hooks (`.claude/hooks/`)
`env-read-guard.ts` — blocca in `PreToolUse` la lettura di file `.env*` (via `Read`, `Edit`, `Write` o comandi shell), per evitare che l'agente esponga accidentalmente segreti. Richiede `npx tsx` disponibile (Node.js).

## Personalizzazione

- Cambia la lingua di risposta di default in `CLAUDE.md` → `Profilo e preferenze`.
- Aggiungi nuove regole come file in `.claude/rules/` e referenziali nell'indice di `CLAUDE.md`.
- Aggiungi nuove skill come cartelle `.claude/skills/<nome>/SKILL.md` con frontmatter `name` + `description`.
- `.claude/plans/` (piani di lavoro salvati da `/save-plan`) è escluso dal versionamento via `.gitignore`: sono per-progetto, non fanno parte del boilerplate.

## Licenza

MIT — vedi [LICENSE](LICENSE).
