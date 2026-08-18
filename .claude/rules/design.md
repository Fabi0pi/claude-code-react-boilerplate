# Dashboard Design Principles

## Core Philosophy

- Prioritize clarity over creativity
- Design for frequent use, not first impression
- Optimize for scanning, not reading
- Reduce cognitive load at every step
- Every element must have a functional purpose

---

## Layout & Structure

- Always start with a clear layout hierarchy:
  1. Page title + primary actions
  2. Key metrics (if relevant)
  3. Filters / controls
  4. Main content (tables, charts, lists)

- Use consistent spacing (prefer 8px grid via Tailwind)
- Avoid deeply nested layouts
- Prefer flat structures with clear separation (cards, sections)

- Use max 2 levels of visual hierarchy per section:
  - Primary content
  - Secondary/meta info

---

## Data Density

- Prefer high information density over excessive whitespace
- Avoid "landing page spacing" (large paddings, oversized elements)
- Tables should show meaningful data without scrolling when possible

- Use:
  - compact tables
  - small text for secondary info
  - truncation + tooltip for long content

---

## Components Usage (with shadcn/ui)

- Always use shadcn components when available
- Combine primitives instead of creating custom UI unnecessarily

Common patterns:
- Tables → main data surface
- Tabs → switch between datasets/views
- Dialogs → destructive or blocking actions
- Drawers → editing without losing context
- Dropdown menus → secondary actions

---

## Tables (Critical)

- Tables are the core of most dashboards

Always:
- Include sorting when relevant
- Include filtering for large datasets
- Use pagination or virtualization
- Align numbers to the right
- Keep actions in the last column

Avoid:
- Overly tall rows
- Excessive padding
- Too many inline actions

---

## Forms & Input UX

- Prefer inline filters over separate filter pages
- Group related inputs
- Use sensible defaults

- Always:
  - debounce search inputs
  - show loading states
  - handle empty states clearly

---

## Feedback & States

Every data surface must handle:
- loading state
- empty state
- error state

Avoid blank screens at all costs

Use:
- skeletons for loading
- clear empty messages with actions
- concise error messages

---

## Typography

- Use a consistent scale:
  - Page title
  - Section title
  - Body text
  - Secondary/meta text

- Avoid too many font sizes
- Use muted colors for secondary information

---

## Colors & Visual Design

- Use color sparingly and meaningfully:
  - success → green
  - error → red
  - warning → yellow

- Avoid decorative gradients or excessive styling
- Focus on readability and contrast

---

## Interactions

- Minimize clicks for common actions
- Keep primary actions always visible
- Avoid hidden critical actions

- Prefer:
  - inline editing (when safe)
  - quick actions in tables
  - keyboard-friendly interactions (optional)

---

## Performance Awareness

- Assume large datasets
- Avoid rendering heavy components unnecessarily
- Prefer pagination, lazy loading, and caching (TanStack Query)

---

## Anti-Patterns (DO NOT DO)

- Do not design like a marketing page
- Do not center everything
- Do not use excessive whitespace
- Do not hide critical data behind interactions
- Do not overuse modals
- Do not create custom components when shadcn already provides one

---

## Output Expectations

- Produce clean, production-ready UI
- Follow existing project structure
- Use reusable components
- Keep UI consistent across pages

- When generating a page:
  - include layout
  - include realistic mock data
  - include loading/empty states