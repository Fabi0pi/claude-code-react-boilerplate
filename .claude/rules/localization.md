# Localization (i18next)

- Stack: **i18next** + **react-i18next**
- Tutte le stringhe vivono in `public/locales/<lang>/translation.json`

## Uso nei componenti

```tsx
import { useTranslation } from 'react-i18next'

const { t } = useTranslation()
return <Button>{t('save')}</Button>
```

## Convenzioni chiavi

- `snake_case` o `camelCase`, scegli uno e mantienilo
- Raggruppa per dominio: `auth.login`, `forms.errors.required`
- Chiavi corte e riusabili meglio di chiavi lunghe e specifiche
