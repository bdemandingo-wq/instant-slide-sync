# Security

## Reporting

If you discover a security issue, email **support@cleancollectives.com**. Please don't open a public issue.

## Secrets policy

- Anything tagged `VITE_*` is bundled into the client. Treat it as **public**.
- Supabase anon (publishable) key is intentionally public; row-level security in the database is the actual access control.
- Anything sensitive (Stripe **secret**, service-role keys, OpenPhone API key, OpenAI key) lives **only** in Supabase Edge Function secrets — never in the repo, never in `VITE_*` vars.
- `.env` should be `.gitignore`d. If you need example values for new contributors, put them in `.env.example` with placeholder strings only.

## Continuous scanning

This repo has a `.gitleaksignore` for known false positives. To scan locally:

```sh
brew install gitleaks
gitleaks detect --no-banner
```

If you discover a real new leak, rotate the secret first, *then* commit the code change that removes it. The git history will still expose the old value — only key rotation actually mitigates the exposure.
