---
name: tanstack-query
description: Use when implementing data fetching, server state, queries, or mutations. Covers TanStack Query conventions — query keys, feature/api layout, caching, and mutation patterns.
---

# TanStack Query Rules

- Use TanStack Query for all server state
- Do not use useEffect for data fetching

## Queries
- Use useQuery for GET requests
- Always define a stable queryKey
- Keep query functions in feature/api layer

## Mutations
- Use useMutation for POST/PUT/DELETE
- Handle success and error states explicitly
- Invalidate queries after mutations when needed

## Caching
- Prefer default caching first
- Tune staleTime only when necessary

## Structure
- API calls → features/<feature>/api
- Hooks → features/<feature>/hooks

## Example Pattern

- api/
  - get-users.ts
- hooks/
  - use-users.ts

## Best Practices
- Avoid duplicate queries
- Do not mix server state with local state
- Keep query logic out of UI components
