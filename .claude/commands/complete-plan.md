---
description: Segna il piano corrente come completato ed eliminalo da .claude/plans/
---

# Complete Plan

Segna il piano corrente come completato ed eliminalo da `.claude/plans/`.

## Istruzioni

1. Trova la root del progetto:
   ```bash
   git rev-parse --show-toplevel
   ```

2. Elenca i file in `<project-root>/.claude/plans/`.

3. Se non esistono piani, comunica all'utente e fermati.

4. Se esiste **un solo file**: usalo direttamente.
   Se esistono **più file**: chiedi quale completare.

5. Prima di eliminare, chiedi conferma esplicita all'utente:
   ```
   Stai per eliminare il piano "<nome-file>.md".
   Vuoi procedere? (sì / no)
   ```

6. Se confermato:
   - Elimina il file:
     ```bash
     rm <project-root>/.claude/plans/<nome-file>.md
     ```
   - Se la cartella `.claude/plans/` è rimasta vuota, segnalalo
     (non eliminarla automaticamente).
   - Conferma con:
     ```
     Piano "<nome-file>" eliminato. Ottimo lavoro! 🎉
     ```

7. Se l'utente risponde no: annulla senza fare nulla.

## Nota

Se vuoi conservare uno storico invece di eliminare, puoi usare `/archive-plan`
(da creare) che sposta il file in `.claude/plans/done/` aggiornando lo status
a `completed`. Chiedilo all'utente se preferisce questa opzione prima di eliminare.
