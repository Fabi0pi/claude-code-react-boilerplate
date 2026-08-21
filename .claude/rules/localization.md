# Localization (i18next)

- Stack: **i18next** + **react-i18next**
- All strings live in `public/locales/<lang>/translation.json`

## Usage in components

```tsx
import { useTranslation } from 'react-i18next'

const { t } = useTranslation()
return <Button>{t('save')}</Button>
```

## Key conventions

- `snake_case` or `camelCase`, pick one and stick to it
- Group by domain: `auth.login`, `forms.errors.required`
- Short, reusable keys beat long, hyper-specific ones

For pluralization, date/number formatting, namespaces, RTL, or lazy-loading translations, follow the `i18n-advanced` skill.
