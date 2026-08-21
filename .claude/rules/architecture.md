# Architecture

- Separate logic from UI
- Use hooks for logic
- UI components must be presentational

## Composition
- Build small primitives first
- Reuse them in complex components

## Module boundaries
- Features never import from other features directly — shared code moves to `components/`, `hooks/`, or `utils/`
- Pages import features, features don't import pages