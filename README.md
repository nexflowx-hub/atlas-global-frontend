# Atlas Global Frontend

Official institutional frontend for **Atlas Global — Research • Architecture • Platforms**.

The project implements the first production-ready homepage for `atlasglobal.digital`, based on the approved Atlas Global visual specification.

## Current scope

- Responsive institutional navigation
- Hero with connected global visual
- Technology trust strip
- Eight-unit Atlas ecosystem grid
- “Porquê Atlas?” value proposition section
- Technology stack overview and dialog
- Conversion CTA for meetings and preferred contact channels
- Accessible contact dialog with email fallback
- SEO metadata, JSON-LD, robots and sitemap
- Open Graph image generation
- Reduced-motion support
- Reproducible npm dependency lockfile
- Automated typecheck, lint, build, runtime smoke test and visual QA captures

The project intentionally does not yet include Atlas Core, authentication, dashboards, CMS, AI Concierge, customer portals or database-backed lead storage.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Radix Dialog
- React Hook Form
- Zod
- Lucide React

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run typecheck
npm run lint
npm run build
```

The GitHub Actions workflow also starts the production server, requests the homepage and generates desktop and mobile visual QA captures.

## Environment variables

Copy `.env.example` to `.env.local` and configure only the values that are available.

```bash
NEXT_PUBLIC_ATLAS_CONTACT_EMAIL=hello@atlasglobal.digital
NEXT_PUBLIC_ATLAS_BOOKING_URL=
NEXT_PUBLIC_ATLAS_WHATSAPP_URL=
NEXT_PUBLIC_ATLAS_LINKEDIN_URL=
NEXT_PUBLIC_ATLAS_X_URL=
NEXT_PUBLIC_ATLAS_YOUTUBE_URL=
```

When booking or WhatsApp URLs are not configured, the actions open the Atlas contact dialog instead of generating broken links.

## Contact behaviour

The current launch version prepares a structured email in the visitor’s email client. This is an explicit fallback and does not claim server-side persistence. The form service can later be replaced by the Atlas Core lead endpoint without redesigning the interface.

## Deployment

The project is ready for Vercel deployment.

1. Import this repository into Vercel.
2. Set the production domain to `atlasglobal.digital`.
3. Add the required environment variables.
4. Deploy the `main` branch after visual approval.

## Repository structure

```text
src/
├── app/               Next.js App Router, metadata and global styles
├── components/        Homepage, navigation, dialogs and brand components
├── config/            Typed public site configuration
└── data/              Externalized institutional content
public/
├── favicon.svg
└── globe.svg
```

## Brand position

Atlas Global is a Technology Research, Architecture and Platform Company. The public identity is:

> Research • Architecture • Platforms

Copyright © 2026 Atlas Global. All rights reserved.
