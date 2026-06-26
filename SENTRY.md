# Sentry observability

Sentry is wired into the marketing/booking site and reports errors to
the same Sentry project as the Clean Collective SaaS app. Events from this
repo are tagged `app: "clean collective-marketing"` so they're filterable.

## What's captured

- **JS errors** from booking, confirmation, customer portal, password
  reset, and all other pages.
- **Session replay** of the 30 seconds before each error, with all
  text, inputs, and media masked (customer name, address, phone,
  email, price are all hidden in the recording).
- **Performance traces** for 10% of route transitions / network calls
  in production.
- **Logged-in user context** — once a customer signs in via Supabase,
  their `id` and `email` are attached to every subsequent error.

## What's not captured

- `ResizeObserver` browser noise.
- Chunk-load errors (handled by the page itself).
- Anything caught and handled in normal app code.

## Verifying it's working

After a deploy, open https://tidywisecleaning.com (or your preview
URL) in a Chrome **Incognito window with extensions disabled** (most
ad blockers, NordVPN's Threat Protection, Brave Shields, etc. will
block Sentry's ingest endpoint), open dev tools → Console, and run:

```js
window.Sentry?.captureException(new Error("marketing site test"));
```

You should see an event ID returned and the event in the Sentry
Issues tab filtered by `app:clean collective-marketing` within ~30 seconds.

## Configuration

- DSN is hard-coded in `src/lib/sentry.ts` (`DEFAULT_DSN`). DSNs are
  public-by-design — see
  https://docs.sentry.io/concepts/key-terms/dsn-explainer/#dsn-utilization
- To use a separate Sentry project later, set `VITE_SENTRY_DSN` and
  redeploy.
- To disable Sentry entirely (e.g. for a local dev run), set
  `VITE_SENTRY_DSN=""`.

## Where things live

- `src/lib/sentry.ts` — init function, called from `main.tsx`.
- `src/main.tsx` — `<Sentry.ErrorBoundary>` wraps the app root.
- `src/contexts/AuthContext.tsx` — attaches the logged-in Supabase
  user to Sentry events.
- `package.json` — `@sentry/react`.
