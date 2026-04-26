# nedelya-site

Russian-language marketing landing page for a "website in a week" service — fast website launch in 4–10 days at a fixed price. Deployment targets: Vercel or GitHub Pages.

## Stack

- **React 18 + TypeScript** — components in `src/app/`
- **Vite** — bundler
- **Tailwind CSS 4** — utility styles
- **shadcn/ui + Radix UI** — base UI components in `src/app/components/ui/`
- **react-router v7** — routes defined in `src/app/routes.tsx`

## Page structure

Single route `/` → `LandingPage`:

```
Header → Hero → Services → Process → Portfolio → ContactForm → FAQ → Footer
```

Route `/privacy` — privacy policy page.

## Key details

- Section CSS classes use the `nd-` prefix (namespace "nedelya").
- Scroll animations use `IntersectionObserver` with `.nd-anim` / `.nd-anim--visible` classes.
- Contact form (`ContactForm`) sends via **EmailJS** — currently stubbed with `setTimeout`. Real `SERVICE_ID`, `TEMPLATE_ID`, and `PUBLIC_KEY` still need to be wired in.

## Key Rules

- **Keep replies concise** — no fluff, no long unnecessary explanations.
- **No unnecessary features** — stick to core use cases; avoid extra settings and secondary features in MVP.
- **Do not run builds** — describe what to verify instead.
- **Do not commit** — the developer handles all git commits.
- **Reuse before creating** — before implementing any UI element (modal, list item, button, input, etc.), at least search `src/components/` for existing primitives. Prefer composition of existing components over writing new ones from scratch.

## Commands

```bash
npm run dev      # local dev server
npm run build    # production build → dist/
```
