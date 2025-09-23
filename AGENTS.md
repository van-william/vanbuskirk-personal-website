# Agent Playbook

A quick-start reference to help automation agents and human collaborators work consistently in this repository.

## Repo Snapshot
- Framework: React 18 + Vite + TypeScript (`npm run dev`)
- Styling: Tailwind CSS with shadcn/ui primitives and custom utility `cn` (`src/lib/utils.ts`)
- Routing: `react-router-dom` configured in `src/App.tsx`
- Data-driven pages load content from TypeScript data files under `src/data` via helpers in `src/utils`

## Essential Commands
- Install deps: `npm install`
- Start dev server: `npm run dev`
- Lint: `npm run lint`
- Tests (Vitest): `npm run test`, `npm run test:watch`, `npm run test:coverage`
- Build preview: `npm run build` then `npm run preview`

Always run relevant commands after making changes that could affect them. Prefer Vitest for unit tests; Jest config exists for legacy purposes but is not wired to scripts.

## Path & Import Conventions
- Use the `@/` alias (defined in `tsconfig.json`) for imports inside `src`
- Keep React files as `.tsx` using functional components and hooks
- Co-locate UI pieces under `src/components`, pages under `src/pages`, strongly-typed data in `src/data`
- Shared types live in `src/types`; avoid duplicating interfaces in feature code

## Content Workflows

### Blog (`/blog`, `/blog/:slug`)
- Source of truth: one file per post in `src/data/blog/<slug>.ts`
- Each file exports `post: BlogPost` from `@/utils/markdown`
- The slug **must** match the filename; `loadBlogPosts` relies on `import.meta.glob`
- Markdown inside `content` supports Prism-highlighted code blocks; keep frontmatter fields filled (`id`, `title`, `date`, `excerpt`, optional `coverImage`, `tags`)
- Images referenced in markdown should live under `public/blog_images/<slug>/` or use remote URLs
- No list updates are required elsewhere; listings auto-populate based on files present

### Projects (`/projects`)
- Data array in `src/data/projects.ts`
- Ensure `id` values stay unique strings; duplicates can break filtering
- Prefer hosting project thumbnails in `public/project_images/` and referencing with relative paths like `/project_images/foo.png`
- Optional fields: `link`, `articleLink`, `githubLink`; keep unused fields omitted rather than empty strings
- When adding tags, reuse existing ones where possible to keep filter set manageable

### Photography (`/photography`)
- Metadata in `src/data/photos.ts`; `imageUrl` may be remote or under `public/photography_images`
- Maintain correct `width`/`height` to prevent layout shifts
- Categories derive automatically (`categories` export); stay consistent with casing to avoid duplicates

### Architecture Diagrams (`/architecture-diagrams`, detail route)
- One file per diagram under `src/data/architectures/<slug>.ts` exporting `architecture`
- Metadata should respect `ArchitectureMetadata` (`complexity` values: `"basic" | "intermediate" | "advanced"`)
- Diagram images live under `public/architecture/`; reference them via `/architecture/<file>`
- Descriptive markdown renders through `react-markdown`; avoid raw HTML where possible
- No central registry file exists—`loadArchitectureDiagrams` globs the directory

### Content Guide Page Sync
- `src/utils/content-loader.ts` includes `contentManagementGuide`; keep its instructions aligned with the actual workflows above when content changes

## UI & Layout Patterns
- Wrap page content with `PageHeader` + sections using `Section` or semantic containers
- Use shadcn/ui components under `src/components/ui`; extend variants via `class-variance-authority` where needed
- Animation utilities defined in `tailwind.config.ts` (`animate-fade-in`, etc.) are used for page transitions—reuse rather than redefining
- For cards/lists, leverage existing components like `BlogCard`, `ProjectCard`, `PhotoCard`

## State & Data Loading Guidelines
- Prefer hooks (`useEffect`, `useState`) for client data fetching; keep async logic inside effect callbacks
- Shared loaders: `loadBlogPosts`, `loadBlogPost`, `loadArchitectureDiagrams`, `loadArchitectureDiagram`, `loadPhotos`
- Always handle loading and error states (see `ArchitectureDiagrams.tsx` for patterns)
- When adding new loaders, colocate them in `src/utils/content-loader.ts` and type them with interfaces from `src/types`

## Testing Expectations
- Add or update Vitest tests under `src/__tests__` when modifying behavior
- For React components, use Testing Library patterns already present (see `src/__tests__/App.test.tsx`)
- Snapshot tests are not used; prefer assertions on rendered output and accessibility

## Accessibility & SEO
- Maintain semantic headings (`h1`–`h3`) in markdown and components
- Ensure images include descriptive `alt` text (check `BlogPost`, `ArchitectureDiagramDetail` patterns)
- Links should use `react-router-dom` `Link` for internal navigation; external URLs can remain anchors inside markdown or data items

## Common Pitfalls
- Forgetting to export default components from `src/pages` breaks routing
- Missing or mismatched slugs in content files lead to 404 behavior (loaders return `null`)
- Tailwind classes should be composed with `cn` when conditional; avoid manual string concatenation
- Avoid hardcoding layout padding/margins; rely on container classes already in use

## Task Handoffs
- When an agent finishes a content update, note whether lint/tests were run
- Provide page route(s) impacted for quick QA (e.g., `/blog`, `/projects`)
- Flag any follow-up work (e.g., missing imagery) in PR descriptions or task notes

Refer back to this playbook whenever creating new automation routines or onboarding collaborators.
