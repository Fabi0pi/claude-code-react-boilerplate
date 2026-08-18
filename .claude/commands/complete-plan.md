---
description: Mark the current plan as completed and delete it from .claude/plans/
---

# Complete Plan

Mark the current plan as completed and delete it from `.claude/plans/`.

## Instructions

1. Find the project root:
   ```bash
   git rev-parse --show-toplevel
   ```

2. List the files in `<project-root>/.claude/plans/`.

3. If no plans exist, tell the user and stop.

4. If **only one file** exists: use it directly.
   If **multiple files** exist: ask which one to complete.

5. Before deleting, ask the user for explicit confirmation:
   ```
   You're about to delete the plan "<file-name>.md".
   Do you want to proceed? (yes / no)
   ```

6. If confirmed:
   - Delete the file:
     ```bash
     rm <project-root>/.claude/plans/<file-name>.md
     ```
   - If the `.claude/plans/` folder is now empty, mention it
     (don't delete the folder automatically).
   - Confirm with:
     ```
     Plan "<file-name>" deleted. Great work! 🎉
     ```

7. If the user says no: cancel without doing anything.

## Note

If you want to keep a history instead of deleting, you can use `/archive-plan`
(to be created) which moves the file to `.claude/plans/done/` and updates its
status to `completed`. Ask the user if they'd prefer this option before deleting.
