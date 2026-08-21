---
name: error-handling
description: Use when adding error boundaries, designing fallback UI, or deciding how a feature should fail gracefully. Covers Error Boundary granularity, sync vs async error handling, and fallback UI patterns.
---

# Error Handling

## Sync vs async — different mechanisms

- **Render/lifecycle errors** (a component throws while rendering) → React Error Boundaries. This is the only case they catch — they do **not** catch errors in event handlers, effects, or async code
- **Async/data errors** (a failed fetch, a rejected mutation) → already handled by TanStack Query's `error`/`isError` state, not by an Error Boundary. Render the error state where the data is used, same as you'd render the loading state
- **Event handler errors** (a click handler throws) → try/catch at the handler, or let it surface to `window.onerror`/your logging setup — a boundary won't help here

## Error Boundary granularity

- One boundary at the app root as a last-resort catch-all (full-page fallback: "Something went wrong" + reload action) — this should rarely fire
- One boundary per route/page, not per component — a crash in a widget shouldn't blank the whole page, but a boundary per button is noise
- For a genuinely isolated, risky piece of UI (a third-party embed, a chart library), wrap just that piece so its failure doesn't take down the page around it

## Fallback UI

- Fallback content matches the scale of what broke: a failed widget shows an inline message in its own space, a failed page shows a full-page state — never a blank screen (see `rules/accessibility.md` / feedback states)
- Give the user a way out: retry action for transient failures, link back to a known-good page for structural ones
- Log the actual error (message + stack + relevant context) to your error tracking service from the boundary's `componentDidCatch`/`onError` — the user-facing message should never be the raw error string

## Data-layer errors (TanStack Query)

```tsx
const { data, error, isError, isLoading } = useQuery(...)

if (isLoading) return <Skeleton />
if (isError) return <ErrorState message={getErrorMessage(error)} onRetry={refetch} />
return <Content data={data} />
```

- Normalize errors at the API layer (one `getErrorMessage(error)` helper) instead of branching on error shape in every component
- Distinguish user-actionable errors (validation, permission) from unexpected ones (500, network) — the former get a specific message, the latter a generic one plus logging

## Anti-patterns (DO NOT)

- Don't wrap every component in its own Error Boundary "just in case"
- Don't swallow errors silently (empty `catch {}`) — always either handle, log, or re-throw
- Don't show raw error objects/stack traces to end users
- Don't use an Error Boundary to handle a failed fetch — that's what the query's `error` state is for
