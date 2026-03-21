# Portfolio Project

Personal portfolio website built with modern web technologies.

## Tech Stack

- React 19 with TypeScript 5.9
- Vite 8 (build tool)
- Tailwind CSS 4 with @tailwindcss/vite and @tailwindcss/typography
- React Router 7 (routing)
- Framer Motion (animations)
- i18next + react-i18next (internationalization: EN/ES)
- lucide-react (icons)
- clsx + tailwind-merge (class utilities)
- pnpm (package manager)

## Project Structure

```
src/
  components/     # Reusable UI components
    ui/           # Base UI primitives (Badge, Button, Card, etc.)
  pages/          # Route-level page components
  layouts/        # Layout wrappers (MainLayout)
  hooks/          # Custom React hooks
  data/           # Static data (projects, experience, blog posts, skills, social links)
  i18n/           # Internationalization config and locale files (en, es)
  lib/            # Utilities and constants
  types/          # TypeScript type definitions
```

## Path Aliases

- `@/*` maps to `./src/*` (configured in tsconfig.json and vite.config.ts)

## Development Commands

- `pnpm dev` — Start development server
- `pnpm build` — Type-check with tsc then build with Vite
- `pnpm preview` — Preview production build locally

## Code Conventions

- Functional components with named exports
- TypeScript strict mode (noUnusedLocals, noUnusedParameters)
- Tailwind CSS for all styling (no CSS modules or styled-components)
- Use `cn()` utility from `@/lib/utils` for conditional classes (clsx + tailwind-merge)
- Use `@/` path alias for all imports from src
- Components: PascalCase filenames
- Hooks: camelCase with `use` prefix

## Important Rules

- NEVER add Co-Authored-By, Signed-off-by, or any AI attribution in commits or PRs
- NEVER mention Claude, AI, or any AI assistant in commit messages, PR descriptions, or code comments
- All commit messages and PR descriptions MUST be in English
- Follow conventional commits format: feat, fix, docs, style, refactor, test, chore, perf, ci, build
