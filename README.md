# claude-code-react-boilerplate

![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)
![Made for Claude Code](https://img.shields.io/badge/made%20for-Claude%20Code-D97757.svg)

A reusable configuration for developers "vibe coding" with [Claude Code](https://claude.com/claude-code) on **React 19 + TypeScript + Vite** projects. Contains ready-to-use rules, commands, skills, and sub-agents — this isn't application code, it's the configuration that guides the agent.

## How to use it

Copy `CLAUDE.md`, `AGENTS.md`, and the `.claude/` folder into your project's root (or use this repo as a **Template** on GitHub to start a new one). Claude Code automatically loads:

- `CLAUDE.md` — user profile, default stack, critical rules, naming conventions
- `.claude/rules/*.md` — detailed rules, injected every session with no need to read them manually
- `.claude/agents/*.md` — specialized sub-agents, invocable with `@agent-name`
- `.claude/commands/*.md` — custom slash commands
- `.claude/skills/<name>/SKILL.md` — skills invoked on-demand
- `.claude/settings.json` — default permissions and security hooks

None of these folders work if renamed or moved: Claude Code looks for exactly `.claude/rules`, `.claude/agents`, `.claude/commands`, `.claude/skills/<name>/SKILL.md`.

`AGENTS.md` at the root is a separate, shorter file: it's the open standard that other agentic assistants (Codex CLI, etc.) read as a fallback when you're not using Claude Code. It summarizes the stack and critical rules without the rules/skills mechanism, which is specific to Claude Code.

## Reference stack

React 19 · TypeScript 5.9 · Vite · React Router · TanStack Query · Zustand · Tailwind CSS · shadcn/ui · React Hook Form · Zod · i18next.

The rules in `.claude/rules/` assume this stack. If your project is different, adapt the files before using them (`theming.md` and `tailwind.md` in particular are specific to this combination).

## What's inside

### Rules vs Skills — how they're organized

Claude Code injects the **full** content of `.claude/rules/*.md` into every single session, regardless of the task: the more files/lines there are, the more tokens you pay on every message, even when they're not needed. **Skills**, on the other hand, cost only one line (`name` + `description`) until invoked — the full content loads only on demand.

That's why, in this repo:
- **`rules/`** contains only small, genuinely universal rules that apply to every single message.
- **`skills/`** contains everything situational or sizable (forms, dashboards, data fetching, project structure...), invoked only when needed.

Don't duplicate the same content in both places: if you're adding a rule, first ask whether it's needed *always* or only for certain tasks.

### Rules (`.claude/rules/`)
Always active, injected automatically every session: architecture, coding style, React 19, Tailwind, semantic theming tokens, localization, accessibility baseline, frontend security baseline.

### Skills (`.claude/skills/`)
| Skill | When it triggers |
|---|---|
| `components` | Creating or refactoring a React component — single responsibility, composition with shadcn |
| `form-validation` | Creating or modifying a form — full Zod + React Hook Form pattern |
| `code-patterns` | DO/DON'T examples for inline callbacks and mapped lists |
| `dashboard-design` | Designing a dashboard/admin panel/data-heavy UI |
| `project-structure` | Scaffolding a new project or deciding where a file belongs |
| `tanstack-query` | Data fetching, server state, queries and mutations |
| `zustand` | Global client-side state |
| `accessible-components` | Complex interactive widgets — ARIA patterns, focus management, live regions, test checklist |
| `responsive-design` | Layouts across viewports — breakpoint strategy, per-component adaptations, viewport test checklist |

### Agents (`.claude/agents/`)
| Agent | Use |
|---|---|
| `code-reviewer` | Independent review after writing/modifying code — returns a punch list, doesn't rewrite |
| `form-builder` | Builds React Hook Form + Zod forms following the schema-per-domain pattern |
| `refactorer` | Behavior-preserving refactor: splits components, extracts hooks, removes anti-patterns |
| `ui-builder` | Builds screens/dashboards from scratch with Tailwind + shadcn, including loading/empty/error states |

### Commands (`.claude/commands/`)
| Command | What it does |
|---|---|
| `/save-plan` | Saves the current work plan to `.claude/plans/` |
| `/remember-plan` | Reloads a saved plan into memory |
| `/complete-plan` | Marks a plan as completed and deletes it |
| `/redesign-app` | Generates a UX redesign brief from a guided template |
| `/write-tests` | Generates tests (unit + integration) following the project's testing pyramid |

### Hooks (`.claude/hooks/`)
`env-read-guard.ts` — blocks `PreToolUse` reads of `.env*` files (via `Read`, `Edit`, `Write`, or shell commands), to prevent the agent from accidentally exposing secrets. Requires `npx tsx` to be available (Node.js).

## Customization

- Change the default response language in `CLAUDE.md` → `Profile and preferences`.
- Add new rules as files in `.claude/rules/` and reference them in `CLAUDE.md`'s index.
- Add new skills as `.claude/skills/<name>/SKILL.md` folders with `name` + `description` frontmatter.
- `.claude/plans/` (work plans saved by `/save-plan`) is excluded from version control via `.gitignore`: they're per-project, not part of the boilerplate.

## License

MIT — see [LICENSE](LICENSE). Permissive: you can use, copy, modify, and distribute this boilerplate, including in commercial projects, with no obligation to open-source your own code — just keep the copyright notice.

If you only copy `.claude/` + `CLAUDE.md`/`AGENTS.md` into your own project (rather than forking the whole repo), keep the `LICENSE` file alongside them to stay compliant with MIT's notice requirement.
