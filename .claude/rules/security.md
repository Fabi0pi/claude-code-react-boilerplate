# Security (frontend baseline)

Non-negotiable for every piece of client code:

- **Secrets never reach the client bundle.** Every `VITE_*` env variable is public — only the API base URL and truly public keys belong there. API secrets, service keys, and tokens live server-side only.
- **Never `dangerouslySetInnerHTML` with user or remote content** — if unavoidable, sanitize first (e.g. DOMPurify) and isolate it in one dedicated component
- **Validate at every boundary with Zod**: API responses, URL/query params, `localStorage` reads, form input — never trust external data shapes
- External links with `target="_blank"` get `rel="noopener noreferrer"`
- **Auth tokens**: prefer httpOnly cookies set by the backend; if the client must hold a token, keep it in memory — not `localStorage`
- Never build redirects or `href` values from unvalidated user input (`javascript:` URLs, open redirects)
- No `eval`, `new Function`, or string-based timers
