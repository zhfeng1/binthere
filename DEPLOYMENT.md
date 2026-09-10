# Cloudflare deployment

Instance: https://binthere.zhf-mike.workers.dev

Source fork: https://github.com/zhfeng1/binthere

This instance runs as the `binthere` Cloudflare Worker, with Workers Static
Assets, its own production and preview KV namespaces, the SQLite-backed
`BurnPaste` Durable Object, and a limit of 30 note creations per minute per IP.

The web interface defaults to Simplified Chinese. The language button in the
top-right corner switches between Chinese and English without reloading the
page or changing notes, passwords, or links. The choice is saved locally.
Translations live in `public/js/i18n.js`; marked interface elements retain
their English source message as a stable translation key.

## Update this instance

Use Node.js 22 or newer, then run from this repository:

```sh
npm ci
npx wrangler login
npm run deploy
```

The account and KV identifiers in `wrangler.toml` are resource identifiers,
not credentials. Keep these instance-specific values when merging upstream
updates. OAuth credentials stay in the local Wrangler configuration.

No GitHub deployment workflow is configured; pushing source changes does not
deploy them automatically. Run `npm run deploy` after pushing an update.

## CLI

Use the published CLI against this instance:

```sh
BINTHERE_SERVER=https://binthere.zhf-mike.workers.dev npx binthere
```

The website creates notes that disappear after one read or 24 hours. The API
retains upstream support for other expiry values, including `never`; Cloudflare
usage and billing follow the account's plan and current service limits.
