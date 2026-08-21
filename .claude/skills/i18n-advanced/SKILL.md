---
name: i18n-advanced
description: Use when implementing pluralization, locale-aware date/number formatting, RTL support, namespace splitting, or lazy-loading translation bundles. Basic t() usage and key conventions are covered by rules/localization.md.
---

# Advanced i18n

Basic setup (`t()`, key conventions, file location) is covered by
`rules/localization.md`. This skill covers what a growing app needs next.

## Pluralization

Use i18next's plural suffixes, never manual `count === 1 ? ... : ...` branching:

```json
{ "item_one": "{{count}} item", "item_other": "{{count}} items" }
```
```tsx
t('item', { count })
```

Languages with more plural forms (Arabic, Russian, Polish…) need the full
CLDR set (`_zero`, `_one`, `_two`, `_few`, `_many`, `_other`) — i18next
handles the selection, you only supply the strings that exist for that
language.

## Date, number, and currency formatting

Never hand-format dates/numbers with string concatenation — use i18next's
built-in `Intl` formatters via interpolation:

```json
{ "price": "{{amount, currency}}", "joined": "Joined {{date, datetime}}" }
```

Or call `Intl.NumberFormat(locale, { style: 'currency', currency })` /
`Intl.DateTimeFormat(locale)` directly when formatting outside a
translation string (e.g. a table column) — always pass the active locale,
never hardcode `'en-US'`.

## Namespaces and lazy loading

- Split `translation.json` into namespaces per domain once it grows past a few hundred keys: `common.json`, `auth.json`, `dashboard.json`
- Load only the namespaces a route needs (`useTranslation('dashboard')`), and code-split them alongside the route itself (see the `performance` skill's route-based splitting) — don't ship every feature's strings on first load
- A `common` namespace (buttons, generic errors, nav) loads eagerly; everything else loads on demand

## Rich text / embedded markup

Never build translated strings with `dangerouslySetInnerHTML` (see
`rules/security.md`) — use react-i18next's `<Trans>` component, which
safely interpolates React elements into a translated string:

```tsx
<Trans i18nKey="agree_to_terms">
  I agree to the <Link to="/terms">Terms</Link>
</Trans>
```

## RTL support

Only relevant if the app ships a RTL language (Arabic, Hebrew…):

- Set `dir="rtl"`/`dir="ltr"` on `<html>` based on the active locale, not per component
- Use Tailwind's logical properties (`ms-4`/`me-4`, `ps-4`/`pe-4`) instead of directional ones (`ml-4`/`mr-4`) for anything that must flip with direction — physical properties silently break in RTL
- Icons that imply direction (arrows, chevrons) need an explicit RTL-flipped variant; icons that don't (search, close) stay as-is

## Locale detection and switching

- Detect once at startup (`i18next-browser-languagedetector`: querystring → localStorage → navigator language, in that priority order), persist the user's explicit choice, don't re-detect on every render
- Changing locale should not require a reload — `i18n.changeLanguage()` re-renders subscribed components automatically

## Missing keys

- Dev: surface missing keys loudly (console warning, or a visually obvious `[[missing: key]]` fallback) so they're caught before merge
- Prod: fall back silently to the default language, never show the raw key to a user
