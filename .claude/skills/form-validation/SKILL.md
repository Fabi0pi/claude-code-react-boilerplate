---
name: form-validation
description: Use when creating or modifying any form. Defines the Zod + React Hook Form pattern, schema location, error state handling, and field-level error display.
---

# Form Validation — Zod Pattern

Every new form MUST use Zod. Never use inline regex, manual error types,
or `if (!value)` checks as the primary validation strategy.

## Required structure

### 1. Schema in `apps/frontend/src/schemas/<domain>.ts`

- File name: logical domain (`auth.ts`, `athlete.ts`, `lab.ts`, …)
- Schema name: `<Entity><Action>FormSchema`
- Always export the inferred type:

```ts
export const AthleteCreateFormSchema = z.object({ ... })
export type AthleteCreateFormValues = z.infer<typeof AthleteCreateFormSchema>
```

### 2. Error state in the component

```ts
const [errors, setErrors] = useState<Record<string, string>>({})
```

### 3. Validation in handleSubmit / handleSave

```ts
const result = XFormSchema.safeParse(data)
if (!result.success) {
  const fieldErrors: Record<string, string> = {}
  result.error.issues.forEach(issue => {
    const field = issue.path as string
    if (!fieldErrors[field]) fieldErrors[field] = issue.message
  })
  setErrors(fieldErrors)
  return
}
// proceed with validated data: result.data
```

### 4. Pass errors to fields

```tsx
<TextField
  ...
  error={errors.first_name}
/>
```

## Field conventions

| Case | Zod pattern |
|---|---|
| Required field | `z.string().min(1, 'Required')` |
| Email | `z.string().email('Invalid email')` |
| Optional field | `.optional()` |
| Number from `<input type="number">` | `z.coerce.number().positive()` |
| No future dates | `z.string().refine(val => new Date(val) <= new Date(), 'Date cannot be in the future')` |
| Nullable (DB-aligned) | `.nullable().optional()` |

## Error messages and i18n

If the form uses `t()`, use short keys as the Zod message that map directly
to existing i18n keys:

```ts
email: z.string().min(1, 'required').email('invalid'),
// → t(issue.message) → t('required'), t('invalid')
```

If the form does not use i18n, write the error message directly in the schema
in the appropriate language.

## Existing schemas (reference)

| File | Schema(s) |
|---|---|
| `schemas/auth.ts` | `LoginFormSchema` |
| `schemas/athlete.ts` | `AthleteCreateFormSchema`, `AthleteUpdateFormSchema` |
| `schemas/lab.ts` | `NewTestFormSchema` |
| `schemas/goals.ts` | `GoalFormSchema` ✅ primary reference |
| `schemas/settings.ts` | `GeneralSettingsSchema` ✅ primary reference |

## Extending an existing schema

Use `.extend()` for variants of the same domain instead of duplicating:

```ts
export const AthleteUpdateFormSchema = AthleteCreateFormSchema.extend({
  email: z.string().email('Invalid email').optional(),
})
```

## PR checklist

- [ ] Schema defined in `schemas/<domain>.ts`, not inline in the component
- [ ] Inferred type exported via `z.infer<>`
- [ ] `useState<Record<string, string>>({})` for field errors
- [ ] `.safeParse()` used in handleSubmit, no manual validate() function
- [ ] `error={errors.<field>}` passed to every involved TextField
- [ ] `tsc --noEmit` passes with no new errors