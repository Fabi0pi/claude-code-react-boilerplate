---
description: Generate an app redesign brief from a guided template
---

Use the following template to produce a complete redesign brief for the app
described by the user. Fill in each section **based on what has already been
discussed** in the conversation and what you can inspect in the current
project. Where information is missing, ask 2-3 targeted questions before
proceeding — don't make things up.

The final output must be clean markdown, written in the language configured
in `CLAUDE.md` (default: English unless the user says otherwise), ready to
hand off to a designer. Target style: **Notion / Stripe / Airbnb** — minimal,
modern, focused on clarity and speed of use.

---

## Template

**App name:** [insert]

**App goal:**
This application serves to [main function] and helps the user
[specific problem solved]. In practice, it lets users [main action]
faster, more organized, and clearer than generic tools.

**Problem solved:** [main pain point]

**Target users:**
- [Profile 1] who wants [goal]
- [Profile 2] who needs [need]
- [Profile 3] who uses the app for [outcome]

**Main use cases:**
1. Onboarding — first use
2. Core activity management
3. Viewing/editing existing data
4. Monitoring status/results
5. Recurring use over time

**Main features:** (5 max, one line each)

**Current structure:** dashboard / operational area / detail / create-edit / settings

**Key user flow:** linear, few steps, clear microcopy, feedback on every action.

**Current UX problems:** (weak visual hierarchy, too much info per screen, unpredictable navigation, unnecessary flow steps, overly technical language, unclear system feedback…)

**Technical constraints:** existing structure, features to preserve, performance, component compatibility.

**Redesign guidelines:**
- Simple, modern, intuitive
- Strong visual hierarchy
- Consistent patterns across screens
- Always-clear states (loading/empty/error/success)

**Desired style:** minimal, modern, inspired by Notion / Stripe / Airbnb — clarity, reliability, quality.

**Important for the designer:** every screen must make it clear to the user *where they are*, *what they can do*, *what the next step is*, *what happened after an action*.
