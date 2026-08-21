# TypeScript

- Strict mode is on (TypeScript 7 defaults to `strict: true` if unset) — never weaken it to make an error go away, and keep it explicit in `tsconfig.json` even though it's now the default
- Never use `any`; use `unknown` + narrowing, or the actual type. If truly unavoidable, `// eslint-disable` with a comment explaining why
- Prefer `type` for unions/props/utility compositions, `interface` only when you need declaration merging
- Model variant state with discriminated unions (`{ status: 'loading' } | { status: 'error'; message: string } | { status: 'success'; data: T }`), not multiple optional booleans that can go out of sync
- Infer types from a single source of truth instead of duplicating them: `z.infer<typeof Schema>` for anything with a Zod schema, `ReturnType<typeof fn>`/`Parameters<typeof fn>` over hand-written mirrors
- `import type { Foo } from '...'` for type-only imports — keeps runtime bundles smaller and intent explicit
- Prefer utility types (`Pick`, `Omit`, `Partial`, `Record`) over redeclaring a shape by hand
- Function signatures: explicit return types on exported functions; let inference handle locals and internals
