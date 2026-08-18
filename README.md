# claude-code-react-boilerplate

![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)
![Made for Claude Code](https://img.shields.io/badge/made%20for-Claude%20Code-D97757.svg)

Configurazione riutilizzabile per chi sviluppa con [Claude Code](https://claude.com/claude-code) e fa "vibe coding" su progetti **React 19 + TypeScript + Vite**. Contiene regole, comandi, skill e sub-agenti pronti all'uso — non è codice applicativo, è la configurazione che guida l'agente.

## Come si usa

Copia `CLAUDE.md`, `AGENTS.md` e la cartella `.claude/` nella root del tuo progetto (o usa questa repo come **Template** su GitHub per iniziarne uno nuovo). Claude Code carica automaticamente:

- `CLAUDE.md` — profilo utente, stack di default, regole critiche, naming conventions
- `.claude/rules/*.md` — regole di dettaglio, iniettate in ogni sessione senza bisogno di essere lette manualmente
- `.claude/agents/*.md` — sub-agenti specializzati, invocabili con `@nome-agente`
- `.claude/commands/*.md` — slash command personalizzati
- `.claude/skills/<nome>/SKILL.md` — skill invocabili on-demand
- `.claude/settings.json` — permessi di default e hook di sicurezza

Nessuna di queste cartelle funziona se rinominata o spostata: Claude Code cerca esattamente `.claude/rules`, `.claude/agents`, `.claude/commands`, `.claude/skills/<nome>/SKILL.md`.

`AGENTS.md` in root è un file separato, più corto: è lo standard aperto che altri assistenti agentic (Codex CLI, ecc.) leggono come fallback quando non usi Claude Code. Riassume stack e regole critiche senza il meccanismo rules/skills, che è specifico di Claude Code.

## Stack di riferimento

React 19 · TypeScript 5.9 · Vite · React Router · TanStack Query · Zustand · Tailwind CSS · shadcn/ui · React Hook Form · Zod · i18next.

Le regole in `.claude/rules/` assumono questo stack. Se il tuo progetto è diverso, adatta i file prima di usarli (in particolare `theming.md` e `tailwind.md` sono specifici di questa combinazione).

## Cosa c'è dentro

### Rules vs Skills — come sono organizzate

Claude Code inietta **per intero** il contenuto di `.claude/rules/*.md` a ogni singola sessione, indipendentemente dal task: più file/più righe ci sono, più token si pagano a ogni messaggio, anche quando non servono. Le **skill** invece costano solo una riga (`name` + `description`) finché non vengono invocate — il contenuto pieno si carica solo on-demand.

Per questo qui dentro:
- **`rules/`** contiene solo regole piccole e davvero universali, che si applicano a ogni singolo messaggio.
- **`skills/`** contiene tutto ciò che è situazionale o corposo (form, dashboard, data fetching, struttura progetto...), da invocare solo quando serve.

Non duplicare lo stesso contenuto in entrambi i posti: se aggiungi una regola, chiediti prima se serve *sempre* o solo in certi task.

### Rules (`.claude/rules/`)
Sempre attive, iniettate automaticamente a ogni sessione: architettura, coding style, React 19, Tailwind, theming/token semantici, localizzazione.

### Skills (`.claude/skills/`)
| Skill | Quando si attiva |
|---|---|
| `components` | Creazione o refactor di un componente React — single responsibility, composizione con shadcn |
| `form-validation` | Creazione o modifica di una form — pattern Zod + React Hook Form completo |
| `code-patterns` | Esempi DO/DON'T per callback inline e liste mappate |
| `dashboard-design` | Design di dashboard/admin panel/UI data-heavy |
| `project-structure` | Scaffolding di un nuovo progetto o dubbi su dove mettere un file |
| `tanstack-query` | Data fetching, server state, query e mutation |
| `zustand` | Stato globale client-side |

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

## Pubblicazione su GitHub

Dopo aver creato il repo remoto:
- Spunta **Settings → Template repository**, così chi lo usa può fare "Use this template" invece di forkare
- Aggiungi questi **Topics** (Settings → generale, icona ingranaggio accanto a "About"): `claude-code`, `boilerplate`, `ai-agents`, `vibe-coding`, `react`, `typescript`, `shadcn-ui`, `agents-md`
- Imposta una **social preview image** (Settings → General → Social preview) per link più curati quando il repo viene condiviso

## Licenza

MIT — vedi [LICENSE](LICENSE).
