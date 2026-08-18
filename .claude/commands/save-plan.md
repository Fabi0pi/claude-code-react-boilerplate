---
description: Salva il piano di lavoro corrente in .claude/plans/ del progetto attivo
---

# Save Plan

Salva il piano di lavoro corrente nella cartella `.claude/plans/` della root del progetto attivo.

## Istruzioni

1. Trova la root del progetto eseguendo:
   ```bash
   git rev-parse --show-toplevel
   ```
   Se il comando fallisce (non siamo in un repo git), usa `$PWD` come fallback.

2. Crea la directory se non esiste:
   ```bash
   mkdir -p <project-root>/.claude/plans
   ```

3. Genera un nome file descrittivo in kebab-case basato sul contenuto del piano
   (es. `zod-validation-forms.md`, `auth-refactor.md`, `api-pagination.md`).
   Se l'utente ha già fornito un nome, usalo.

4. Scrivi il piano nel file `<project-root>/.claude/plans/<nome>.md` mantenendo
   la struttura esistente senza riformattare. Aggiungi solo questo frontmatter in cima:

   ```
   ---
   date: <data odierna in formato YYYY-MM-DD>
   status: in-progress
   ---
   ```

5. Conferma all'utente il path completo del file salvato, ad esempio:
   `Piano salvato in: /path/to/project/.claude/plans/nome-piano.md`

## Note

- Non salvare mai in `~/.claude/` o path globali: il piano appartiene al progetto.
- Se esiste già un file con lo stesso nome, chiedi all'utente se vuole sovrascriverlo
  o creare una nuova versione (es. `nome-piano-v2.md`).
- Se `.claude/plans/` non è già nel `.gitignore` del progetto, chiedi all'utente
  se vuole aggiungerlo (utile se il piano contiene dettagli interni non da committare).