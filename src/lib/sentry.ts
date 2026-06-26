/**
 * Sentry initialization for the marketing/booking site.
 *
 * Web-only (no Capacitor shell here — the iOS app lives in the other
 * repo). Shares a Sentry project with CLEAN COLLECTIVE for now; events are
 * tagged `app: "clean collective-marketing"` so they're filterable from the
 * SaaS app's errors in the same dashboard.
 */

import * as Sentry from "@sentry/react";

// Public-by-design fallback. Sentry DSNs are explicitly safe to embed
// in client-side code — see https://docs.sentry.io/concepts/key-terms/dsn-explainer/#dsn-utilization
// Same model as the Supabase anon key. Set VITE_SENTRY_DSN to override
// (e.g. when this site gets its own dedicated Sentry project).
const DEFAULT_DSN =
  "https://e85be9b65b51cacaffdf8b2d3ea85499@o4511473522442240.ingest.us.sentry.io/4511473550753792";

let initialized = false;

export function initSentry(): void {
  if (initialized) return;
  const dsn =
    (import.meta.env.VITE_SENTRY_DSN as string | undefined) || DEFAULT_DSN;
  if (!dsn) {
    if (import.meta.env.DEV) {
      console.info("[sentry] DSN unset — observability disabled");
    }
    return;
  }

  const environment =
    (import.meta.env.VITE_SENTRY_ENVIRONMENT as string | undefined) ||
    (import.meta.env.PROD ? "production" : "development");

  const release =
    (import.meta.env.VITE_APP_VERSION as string | undefined) || undefined;

  Sentry.init({
    dsn,
    environment,
    release,

    tracesSampleRate: import.meta.env.PROD ? 0.1 : 1.0,
    replaysSessionSampleRate: 0,
    replaysOnErrorSampleRate: 1.0,

    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration({
        // Booking form contains customer name, address, phone, email,
        // and price totals. Mask everything by default.
        maskAllText: true,
        maskAllInputs: true,
        blockAllMedia: true,
      }),
    ],

    ignoreErrors: [
      "ResizeObserver loop limit exceeded",
      "ResizeObserver loop completed with undelivered notifications",
      "Non-Error promise rejection captured",
      "Failed to fetch dynamically imported module",
      "Loading chunk",
      "Loading CSS chunk",
      "Importing a module script failed",
    ],

    initialScope: {
      tags: {
        // Distinguishes marketing-site errors from SaaS-app errors in
        // the shared Sentry project. Filter on `app:clean collective-marketing`
        // in Issues to see only what came from here.
        app: "clean collective-marketing",
        platform: "web",
      },
    },
  });

  initialized = true;

  // Expose on window for ad-hoc dev-tools verification.
  if (typeof window !== "undefined") {
    (window as unknown as { Sentry: typeof Sentry }).Sentry = Sentry;
  }
}

export { Sentry };
