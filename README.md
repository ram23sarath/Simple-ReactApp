Minimal React + Vite App

Small demo React app using Vite for local development. This repository contains a tiny app that renders a single component into `#root`.

## Files of interest
- `index.html` — HTML entry and stylesheet link
- `index.jsx` — React entry point (creates root and renders `MainContent`)
- `index.css` — Basic styles
- `package.json` — Scripts and dependencies

## Prerequisites
- Node.js (v18+ recommended)
- npm (comes with Node)

## Setup
Install dependencies:

```bash
npm install
```

## Run (development)

Start the Vite dev server:

```bash
npm run dev
```

Vite will print a local URL (often `http://localhost:5173`) — open that in your browser.

## Build & Preview (production)

```bash
npm run build
npm run preview
```

## What I changed / common fixes included
- Fixed `index.html` to reference `index.css` (was `styles.css`).
- Fixed `index.jsx` so it uses the correct React 18 pattern:
  - `const root = createRoot(document.getElementById('root'))`
  - `root.render(<App />)`
  - Also added a small `MainContent` component.
- `package.json` includes scripts: `dev`, `build`, `preview` and lists `react`, `react-dom`, and `vite` as deps/devDeps.

## Troubleshooting

- Error: `React is not defined` — Ensure you either import React (for tooling that requires it) or use a JSX transform that doesn't. This repo imports React in `index.jsx`.
- Error: `Missing script: "build"` — Ensure `package.json` has a `scripts` section with `build` (this repo includes `vite build`).
- Page shows nothing — check browser console for errors, ensure the dev server is running, and confirm `index.jsx` calls `createRoot` and `root.render(...)` on the correct container (`#root`).

## Next steps / suggestions
- Add a small `App` component and expand routing or state as needed.
- Add tests (Jest/Testing Library) if you plan to expand features.

If you want, I can start the dev server here and share the terminal output, or add a simple React component scaffolding and a tiny test file.

---
