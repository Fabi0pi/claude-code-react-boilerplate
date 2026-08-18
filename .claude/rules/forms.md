# Forms (React Hook Form + Zod)

- Use React Hook Form for all forms
- Use Zod for schema validation when needed

## Structure
- Define schema separately
- Keep form logic outside UI when possible

## Validation
- Use Zod resolver
- Validate only what is necessary

## Form Design
- Keep forms simple and readable
- Avoid deeply nested form state

## Submission
- Handle submit with handleSubmit
- Do not mix form state with unrelated state

## Reusability
- Extract reusable inputs (Input, Select, Checkbox)
- Keep UI components dumb

## Example Flow
1. Define schema
2. Initialize form
3. Bind inputs
4. Handle submit