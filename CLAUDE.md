# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Ballbox — Padel ball vending machine SaaS landing page. Spanish-language, targeting Argentina/Chile. Generated from v0.app, deployed on Vercel.

Next.js 16 + React 19 + TypeScript. Tailwind CSS v4 with shadcn/ui (New York style). Package manager: pnpm.

## Commands

```bash
pnpm dev          # Dev server on port 3000
pnpm build        # Production build (TS errors ignored via next.config.mjs)
pnpm start        # Start production server
pnpm lint         # ESLint (note: no .eslintrc exists yet, will fail)
```

No test framework configured.

## Architecture

Single-page marketing site using Next.js App Router (`app/` directory).

- `app/page.tsx` — Composes all landing page sections
- `app/layout.tsx` — Root layout with Geist fonts, Vercel Analytics, theme provider
- `app/globals.css` — Tailwind imports + oklch color theme variables (light/dark)
- `components/` — Section components (hero, benefits, faq, navbar, etc.), all `"use client"`
- `components/ui/` — shadcn/ui primitives (button, accordion, input, etc.) using Radix UI + CVA
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)

Path alias: `@/*` maps to project root.

## Gotchas

- `next.config.mjs` sets `typescript.ignoreBuildErrors: true` — TS errors won't block builds
- `styles/globals.css` is a duplicate of `app/globals.css` (unused)
- Heavy Radix UI dependency set installed via shadcn/ui; many UI packages (recharts, embla-carousel, react-day-picker, etc.) present but not all actively used
- No backend/database — purely frontend
- All user-facing copy is in Spanish
