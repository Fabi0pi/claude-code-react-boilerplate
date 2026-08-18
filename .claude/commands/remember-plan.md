---
description: Load a work plan saved in the current project's .claude/plans/ into memory
---

# Remember Plan

Load the work plan saved in the current project's `.claude/plans/` into memory.

## Instructions

1. Find the project root:
   ```bash
   git rev-parse --show-toplevel
   ```

2. List the files in `<project-root>/.claude/plans/`:
   ```bash
   ls <project-root>/.claude/plans/
   ```

3. If no plans exist:
   - Tell the user there are no saved plans in this project.
   - Suggest using `/save-plan` to save one.
   - Stop here.

4. If **only one file** exists: load it directly.

5. If **multiple files** exist: show the list with date and name, and ask the
   user which one to load.

6. Read the content of the chosen file and confirm it to the user with a
   summary in this format:

   ```
   Plan loaded: <file-name>.md
   Date: <from frontmatter>
   Status: <from frontmatter>

   ## Summary
   <2-4 lines summarizing the goal and next steps>

   Ready to proceed. Should I start from Step 1, or do you have updates to the plan?
   ```

7. Keep the active plan's content in context for the rest of the session,
   without needing to re-read it on every message.
