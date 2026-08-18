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
│  │  │  ├─ router-provider.tsx
│  │  │  ├─ query-provider.tsx
│  │  │  └─ theme-provider.tsx
│  │  ├─ router/
│  │  │  └─ index.tsx
│  │  └─ store/
│  │     └─ index.js
│  │
│  ├─ pages/
│  │  ├─ page1/
│  │  │  ├─ page1.tsx
│  │  │  ├─ page1-detail.tsx
│  │  │  ├─ types/                              # only if necessary
│  │  │  ├─ hooks/                              # only if necessary
│  │  │  └─ components/                         # only if necessary
│  │  │     └─ customPageComponent.tsx
│  │  └─ not-found/
│  │     └─ not-found-page.tsx
│  │
│  ├─ features/
│  |   ├── feature_1/
│  |   │   ├── api                               # API layer with backend calls
│  |   │   ├── store                             # store (only if necessary)
│  |   │   ├── components                        # Feature 1 specific components (only ifnecessary)
│  |   │   └── pages                             # Feature 1 pages for React Router
│  │
│  ├─ components/
│  │  ├─ ui/                                     # Generic reusable components configurable with props
│  │  │  ├─ button/
|  |  |  |  ├─ types/                            # only if necessary
|  |  |  |  ├─ config/                           # only if necessary
|  |  |  |  └─ button.tsx
│  │  │  ├─ input/
│  │  │  ├─ modal/
│  │  │  └─ spinner/
│  │  └─ layout/
│  │     ├─ app-shell.tsx
│  │     ├─ header.tsx
│  │     └─ sidebar.tsx
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
│  │  ├─ index.ts                                  # extendTheme
│  │  ├─ semanticTokens.ts                   
│  │  ├─ components.ts                  
│  │  └─ rawColors.ts
│  │
│  ├─ assets/
│  │  └─ images/
│  │
│  ├─ main.tsx
│  ├─ app.tsx                                      # Entry point
│  └─ index.css
├─ .env
├─ .env.example
├─ jsconfig.json
├─ package.json
├─ vite.config.js
└─ README.md
```
