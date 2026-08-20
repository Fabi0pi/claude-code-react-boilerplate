---
name: project-structure
description: Use when scaffolding a new project, deciding where a new file or folder should live, or reviewing the overall folder layout of a React + Vite web app.
---

## Project Structure - Web

```
my-react-app/
├─ public/
│  └─ favicon.svg
├─ src/
│  ├─ app/
│  │  ├─ providers/
│  │  │  ├─ RouterProvider.tsx
│  │  │  ├─ QueryProvider.tsx
│  │  │  └─ ThemeProvider.tsx
│  │  ├─ router/
│  │  │  └─ index.tsx
│  │  └─ store/
│  │     └─ index.ts
│  │
│  ├─ pages/
│  │  ├─ page1/
│  │  │  ├─ Page1.tsx
│  │  │  ├─ Page1Detail.tsx
│  │  │  ├─ types/                              # only if necessary
│  │  │  ├─ hooks/                              # only if necessary
│  │  │  └─ components/                         # only if necessary
│  │  │     └─ CustomPageComponent.tsx
│  │  └─ not-found/
│  │     └─ NotFoundPage.tsx
│  │
│  ├─ features/
│  │   ├── feature-1/
│  │   │   ├── api                               # API layer with backend calls
│  │   │   ├── store                             # store (only if necessary)
│  │   │   ├── components                        # feature-specific components (only if necessary)
│  │   │   └── pages                             # feature pages for React Router
│  │
│  ├─ components/
│  │  ├─ ui/                                     # Generic reusable components configurable with props
│  │  │  ├─ button/
│  │  │  │  ├─ types/                            # only if necessary
│  │  │  │  ├─ config/                           # only if necessary
│  │  │  │  └─ Button.tsx
│  │  │  ├─ input/
│  │  │  ├─ modal/
│  │  │  └─ spinner/
│  │  └─ layout/
│  │     ├─ AppShell.tsx
│  │     ├─ Header.tsx
│  │     └─ Sidebar.tsx
│  │
│  ├─ services/
│  │  ├─ http.ts
│  │  └─ env.ts
│  │
│  ├─ hooks/
│  │  ├─ use-debounce.ts
│  │  └─ use-toggle.ts
│  │
│  ├─ types/
│  │  ├─ shared.ts
│  │  └─ generic.ts
│  │
│  ├─ i18n                                        # Localization initialization
│  │
│  ├─ utils/
│  │  ├─ format-date.ts
│  │  ├─ format-currency.ts
│  │  └─ cn.ts
│  │
│  ├─ constants/
│  │  └─ app-routes.ts
│  │
│  ├─ theme/
│  │  ├─ index.ts                                  # theme entry point
│  │  ├─ semantic-tokens.ts
│  │  ├─ components.ts
│  │  └─ raw-colors.ts
│  │
│  ├─ assets/
│  │  └─ images/
│  │
│  ├─ main.tsx                                     # Entry point
│  ├─ App.tsx                                      # Root component
│  └─ index.css
├─ .env
├─ .env.example
├─ tsconfig.json
├─ package.json
├─ vite.config.ts
└─ README.md
```
