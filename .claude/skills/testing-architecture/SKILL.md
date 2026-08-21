---
name: testing-architecture
description: Use when deciding what to mock, how to structure test data, or where a test belongs (unit vs integration vs e2e). Covers MSW for API mocking, Testing Library query priority, test data builders, and testing hooks/stores/async state.
---

# Testing Architecture

The `/write-tests` command generates tests following the pyramid (Vitest for
unit, Vitest + React Testing Library for integration, no e2e unless asked).
This skill is the strategy behind it: what to mock, how to structure it, and
where a given test belongs.

## What to mock

- **Mock at the network boundary, not the module boundary**: use MSW (Mock Service Worker) to intercept HTTP requests, not `vi.mock('./api')`. Tests exercise the real TanStack Query + fetch code path, only the network response is fake — catches real serialization/error-handling bugs that module mocks hide
- Mock external services (analytics, payment SDKs, third-party embeds) at their client boundary — don't let tests make real network calls to them
- Never mock the component under test, and never mock what you're asserting on

## Test boundaries — where does this test belong

| Layer | Tests | Tool |
|---|---|---|
| Unit | Pure functions, utils, Zod schemas, isolated hooks with no rendering | Vitest |
| Integration | A component (or small tree) as a user would interact with it — clicks, form fills, assertions on rendered output | Vitest + React Testing Library |
| E2E | Full user flows across real routing/backend | Only when explicitly requested — not the default |

A component that just renders props needs an integration test, not a unit
test per prop combination. A utility function needs a unit test, not a
rendered component wrapping it.

## Testing Library query priority

Query by what the user perceives, not implementation details:

1. `getByRole` (with accessible name) — matches how assistive tech finds things, and doubles as an accessibility check
2. `getByLabelText` — for form fields
3. `getByText` — for non-interactive content
4. `getByTestId` — last resort only, when no accessible query works (e.g. no visible/labelable role)

If you reach for `getByTestId` often, it's usually a signal the markup is
missing semantics `rules/accessibility.md` already requires.

## Test data

- Use builder/factory functions (`buildUser({ overrides })`) instead of copy-pasted literal objects across test files — one place to update when a shape changes
- Keep factories minimal: only the fields the test actually cares about are explicit, the rest get sane defaults
- Don't share mutable fixtures between tests — each test builds its own data

## Testing hooks, stores, and async state

- Custom hooks: `renderHook` from Testing Library, not manual component wrappers
- Zustand stores: reset state between tests (`store.setState(initialState, true)` in `afterEach`) — shared module state leaks across tests otherwise
- TanStack Query: wrap in a fresh `QueryClientProvider` per test with `retry: false` (default retries make failing-request tests slow and flaky); assert on loading → error/success transitions with `waitFor`, don't assert on intermediate state synchronously

## Snapshot tests

Avoid by default — they tend to be approved without being read, and break on
unrelated changes. Acceptable only for genuinely stable output where a diff
itself is the useful signal (e.g. a generated config object), not for
component markup.

## Coverage

Coverage percentage is a signal, not a target — 100% coverage with no
assertions on behavior is worse than 70% that actually exercises edge cases.
Prioritize: error states and edge cases over additional happy-path
permutations of the same logic.
