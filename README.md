# megarohas_demos

A small Next.js site with demo pages for the npm packages published by
[@megarohas](https://github.com/megarohas).

## Demos

| Page | Package |
| --- | --- |
| `/react_top_scroll_demo` | [react_top_scroll](https://github.com/megarohas/react_top_scroll) — a 4000 px tall page; scroll down and the "back to top" button appears |

The component is loaded on the client only, via `next/dynamic` with
`ssr: false`. The index page is empty; open a demo route directly.

## Getting started

Built in November 2021 with Next.js 12 and React 17 — use Node 14 or 16.

```bash
npm install --legacy-peer-deps   # react_top_scroll still declares React 16 as a peer
npm run dev                      # http://localhost:3000/react_top_scroll_demo
```

Production: `npm run build && PORT=3000 npm start`.

To add a demo for another package, install it and add a page under `pages/`.

## Context

The site used to be hosted on Heroku's free tier, which no longer exists, so
there is no live deployment at the moment.
