<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md

## Project overview
- This repository is a personal portfolio site built with Next.js 16, React 19, TypeScript, and Tailwind CSS.
- The app uses the App Router pattern in `src/app` and keeps content-driven sections in `src/data/portfolio.ts`.
- The project is mostly a static marketing/site app; prefer data-driven updates and reusable section components over introducing new state libraries or backend complexity.

## Working conventions
- Use the existing App Router structure and keep page components relatively lean.
- Reuse the UI primitives in `src/components/ui`, `src/components/layout`, and `src/components/sections` before creating new patterns.
- Use the `@/*` alias for imports from `src`.
- Keep types aligned with `src/types/index.ts` when adding or changing portfolio data.
- Match the current design language: dark background, neutral typography, and accent gold (`#e5a93c`).
- Prefer editing the data source in `src/data/portfolio.ts` for portfolio content, project cards, and tech-stack copy instead of hardcoding content inside page components.

## Typical edit points
- `src/app/page.tsx`: homepage composition and section order.
- `src/data/portfolio.ts`: portfolio content, projects, featured work, and tech entries.
- `src/components/sections`: section-specific UI and layout logic.
- `src/components/ui`: reusable presentational components.
- `src/app/layout.tsx`: metadata and global page shell.
- `src/app/globals.css`: global theme styling and Tailwind utilities.

## Verification
- Run `npm run lint` before finalizing changes.
- For local development, use `npm run dev`.
- For release confidence, run `npm run build` when you change framework or app structure.

## Important notes
- Assets live in `public/images` and are usually rendered with Next.js `Image`.
- This repo is intentionally content-first and portfolio-oriented; avoid adding unrelated features or heavy infrastructure.
- Follow the project's existing naming and TypeScript conventions rather than introducing new abstractions without need.
