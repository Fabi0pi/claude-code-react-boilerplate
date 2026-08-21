---
description: Generate tests (unit + integration) for the given code, following the project's testing pyramid
---

Write tests for: $ARGUMENTS following the project testing guidelines.
For mocking strategy, test data, and where a test belongs (unit vs
integration vs e2e), follow the `testing-architecture` skill.

Testing strategy:
- Use a testing pyramid approach:
  • Unit tests (Vitest): for pure functions, utilities, and isolated business logic (target ≥ 80% coverage)
  • Integration tests (Vitest + React Testing Library): for React components with mocked data
  • Do NOT generate e2e tests unless explicitly requested

Test conventions:
- Place test files next to the source file (same folder)
- Name test files as [filename].test.ts(x)
- Use describe('ComponentName') and it('should [expected behavior] when [condition]')
- Tests must be independent and not rely on execution order
- Use mocks where appropriate (API, external dependencies)

Coverage requirements:
- Include happy paths
- Include edge cases
- Include error states

Additional rules:
- Prefer user-centric testing (Testing Library principles)
- Avoid implementation details
- Keep tests readable and maintainable
