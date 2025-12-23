# Copilot / AI Agent Instructions

Purpose: help AI contributors be productive quickly in this Next.js + Prisma codebase.

- **Big picture**: This is a Next.js (app router) TypeScript site using Tailwind and Prisma for Postgres. The UI lives under `app/` and reusable UI pieces are in `components/` and `app/components/`.

- **Key folders/files**
  - [app/layout.tsx](app/layout.tsx) — global layout, fonts, and site shell (Navbar/Footer).
  - [app/actions/contact.ts](app/actions/contact.ts) — example Server Action that writes to the database via Prisma.
  - [lib/prisma.tsx](lib/prisma.tsx) — Prisma client initialization using `@prisma/adapter-pg` and the generated client.
  - [prisma/schema.prisma](prisma/schema.prisma) — Prisma schema and models; generator outputs to `generated/prisma`.
  - [generated/prisma](generated/prisma) — generated Prisma client (import paths expect this location).
  - [package.json](package.json) and [tsconfig.json](tsconfig.json) — scripts and path alias `@/*` → `./*`.

- **Architecture & data flow**
  - The app uses the Next.js app-router (server components by default). Pages and components in `app/` may include client components via `'use client'`.
  - Server-only DB access uses `lib/prisma.tsx` exporting `prisma`. Look for `import { prisma } from "@/lib/prisma"` in server actions or API routes (see [app/actions/contact.ts](app/actions/contact.ts)).
  - Prisma client is generated into `generated/prisma`; do not change that output path unless you update imports.

- **Developer workflows & important commands**
  - Start dev server: `npm run dev` (uses `next dev`). See [package.json](package.json).
  - Build: `npm run build` → `next build`; Start prod: `npm run start`.
  - Lint: `npm run lint` (runs `eslint`).
  - Prisma: no npm scripts are provided for migrations — run `npx prisma` as needed (schema located at [prisma/schema.prisma](prisma/schema.prisma)); generated client will appear in `generated/prisma`.

- **Project-specific conventions**
  - Path alias: `@/` maps to repo root (see [tsconfig.json](tsconfig.json)). Use `@/` for imports from the project root.
  - Prisma adapter: project uses `@prisma/adapter-pg` and initializes Prisma with a `PrismaPg` adapter in [lib/prisma.tsx](lib/prisma.tsx). Server environments must provide `DATABASE_URL` in env.
  - UI: components follow default React/Next conventions; many UI primitives live in `components/ui/` (Radix + Tailwind patterns). Keep components small and prefer composition.
  - Server Actions: Prefer Next.js server actions (files under `app/actions/`) for form handling that writes to DB — they run on the server and can import `prisma` directly.

- **Common edit patterns & examples**
  - To add a DB write from a form: create a server action in `app/actions/` and call `prisma.<model>.create(...)` (see [app/actions/contact.ts](app/actions/contact.ts)).
  - To use the Prisma client: `import { prisma } from "@/lib/prisma"` — do not reinstantiate PrismaClient elsewhere to avoid duplicated connections.

- **What to watch for / gotchas**
  - `generated/prisma` is checked into the repo; if you regenerate the client, imports may change — preserve the output path or update imports accordingly.
  - There are no automated test scripts visible; run the app locally to validate behavior.
  - Env vars: `DATABASE_URL` is required for Prisma DB access in server environments.

- **When adding features**
  - Update `prisma/schema.prisma` for new models, run `npx prisma generate` and create migrations via `npx prisma migrate dev` (local dev only).
  - Keep UI changes inside `components/ui` or `app/components` and avoid leaking global CSS outside `app/globals.css`.

If anything here is unclear or you want more detail (examples, patterns, or testing steps), tell me which section to expand. 
