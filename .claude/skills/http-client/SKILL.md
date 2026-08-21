---
name: http-client
description: Use when setting up or extending the app's HTTP/API layer — base client, auth headers, error normalization, typed responses. Complements tanstack-query (caching/retry) and error-handling (error boundaries) with the request layer itself.
---

# HTTP Client

## Single client, one place

- One fetch wrapper in `src/services/http.ts` (see `project-structure` skill) — never call raw `fetch()` scattered across features
- Base URL and common headers configured once:

```ts
const BASE_URL = import.meta.env.VITE_API_URL

async function http<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...authHeaders(), ...options?.headers },
  })
  if (!response.ok) throw await toApiError(response)
  return response.json()
}
```

## Auth headers

- Attach the token in one place (`authHeaders()` above), read from wherever the session lives (see `rules/security.md` — prefer httpOnly cookies set by the backend over reading a token from JS)
- On `401`: clear the local session and redirect to login from this one place, not with a check duplicated in every query/mutation

## Error normalization

Convert every failed response into one consistent shape before it reaches
TanStack Query or a component:

```ts
type ApiError = { status: number; code?: string; message: string }

async function toApiError(response: Response): Promise<ApiError> {
  const body = await response.json().catch(() => null)
  return { status: response.status, code: body?.code, message: body?.message ?? 'Request failed' }
}
```

- This is the `getErrorMessage(error)` helper referenced in the `error-handling` skill — one function, reused everywhere, never re-derived per component
- Distinguish 4xx (user-actionable: validation, permission) from 5xx (unexpected) at this layer so components don't inspect status codes themselves

## Typed responses

- Parse the response through a Zod schema, don't just `as Type` cast it — same boundary-validation principle as `rules/security.md` and `form-validation`
- Keep parsing at the query-function level (`features/<feature>/api/`), not inside the generic `http()` wrapper, which stays type-agnostic

## Retries — don't duplicate TanStack Query

- Retry logic lives in TanStack Query's `retry` option (see `tanstack-query` skill), not in the HTTP client — one retry mechanism, not two competing ones
- The client's own job is timeouts and cancellation: `AbortSignal.timeout(10_000)`, or pass through the `signal` TanStack Query provides to the query function so requests cancel on unmount

## File uploads

Don't set `Content-Type` manually for `FormData` — let the browser set the
multipart boundary; only set it explicitly for JSON bodies.

## What NOT to do

- No client instantiated per feature or per component
- No re-implementing what TanStack Query already does (retry, caching, dedup)
- No letting a raw `Response`/`Error` reach a component — always the normalized `ApiError` shape
