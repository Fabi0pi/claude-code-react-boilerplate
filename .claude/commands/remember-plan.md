---
description: Carica in memoria un piano di lavoro salvato in .claude/plans/ del progetto corrente
---

# Remember Plan

Carica in memoria il piano di lavoro salvato in `.claude/plans/` del progetto corrente.

## Istruzioni

1. Trova la root del progetto:
   ```bash
   git rev-parse --show-toplevel
   ```

2. Elenca i file presenti in `<project-root>/.claude/plans/`:
   ```bash
   ls <project-root>/.claude/plans/
   ```

3. Se non esistono piani:
   - Comunica all'utente che non ci sono piani salvati in questo progetto.
   - Suggerisci di usare `/save-plan` per salvarne uno.
   - Fermati qui.

4. Se esiste **un solo file**: caricalo direttamente.

5. Se esistono **più file**: mostra l'elenco con data e nome, e chiedi all'utente
   quale vuole caricare.

6. Leggi il contenuto del file scelto e confermalo all'utente con un riepilogo
   in questo formato:

   ```
   Piano caricato: <nome-file>.md
   Data: <dal frontmatter>
   Status: <dal frontmatter>

   ## Riepilogo
   <2-4 righe che sintetizzano obiettivo e prossimi step>

   Pronto a procedere. Vuoi che inizi dallo Step 1 o hai aggiornamenti al piano?
   ```

7. Tieni il contenuto del piano attivo nel contesto per tutta la sessione,
   senza doverlo rileggere ad ogni messaggio.
