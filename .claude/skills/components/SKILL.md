---
name: components
description: Use when creating a new React component or refactoring an existing one. Covers single-responsibility splitting, composition with shadcn primitives, and where each type of component lives in the project.
---

# Components Architecture

## Single responsibility
- Un componente = una concern
- Splitta qualunque componente che superi ~500 righe o gestisca più responsabilità
- Estrai logica in hook dedicati (`useXxx`) per tenere il JSX pulito
- Mai callback inline più lunghi di 4 righe — estrai funzioni nominate

## Composition first
- Costruisci prima i primitives (Button, Input, Badge…) poi componili
- Prima di creare un nuovo componente, controlla se **shadcn/ui** già lo fornisce
  (consulta https://ui.shadcn.com/docs/components)
- Progetta ogni componente per essere **configurabile via props**, non duplicato

## Dove vivono i componenti

| Tipo | Path |
|---|---|
| Generici riusabili | `src/components/ui/` |
| Layout app-wide | `src/components/layout/` |
| Specifici di feature | `src/features/<feature>/components/` |
| Specifici di pagina | `src/pages/<page>/components/` |
