---
description: Save the current work plan to .claude/plans/ in the active project
---

# Save Plan

Save the current work plan to the `.claude/plans/` folder in the active project's root.

## Instructions

1. Find the project root by running:
   ```bash
   git rev-parse --show-toplevel
   ```
   If the command fails (not in a git repo), fall back to `$PWD`.

2. Create the directory if it doesn't exist:
   ```bash
   mkdir -p <project-root>/.claude/plans
   ```

3. Generate a descriptive kebab-case filename based on the plan's content
   (e.g. `zod-validation-forms.md`, `auth-refactor.md`, `api-pagination.md`).
   If the user already provided a name, use it.

4. Write the plan to `<project-root>/.claude/plans/<name>.md`, keeping the
   existing structure without reformatting. Add only this frontmatter at the top:

   ```
   ---
   date: <today's date in YYYY-MM-DD format>
   status: in-progress
   ---
   ```

5. Confirm the full path of the saved file to the user, e.g.:
   `Plan saved to: /path/to/project/.claude/plans/plan-name.md`

## Notes

- Never save to `~/.claude/` or other global paths: the plan belongs to the project.
- If a file with the same name already exists, ask the user whether to overwrite it
  or create a new version (e.g. `plan-name-v2.md`).
- If `.claude/plans/` isn't already in the project's `.gitignore`, ask the user
  whether to add it (useful if the plan contains internal details that shouldn't be committed).
