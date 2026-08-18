# React Core Rules

- Use React 19 with TypeScript 5.9 and Vite
- Use React Router for navigation
- Use TanStack Query for data fetching
- Prefer functional components

## Component Design
- Keep components under 100 lines
- Follow single responsibility principle
- Split large components
- Separate logic in custom hooks

## State
- Avoid props drilling
- Minimize useEffect
- Never setState inside useEffect for derived state

## Performance
- Do not use useMemo/useCallback/React.memo
- React Compiler handles memoization