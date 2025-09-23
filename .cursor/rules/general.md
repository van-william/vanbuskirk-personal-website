# General Guidelines
- Read `AGENTS.md` before significant changes; keep updates consistent with the playbook.
- Prefer TypeScript React components (`.tsx`) and import with the `@/` alias instead of relative paths.
- Reuse existing layout primitives (`PageHeader`, `Section`, shadcn/ui components) before introducing new patterns.
- Favor Tailwind utility classes already defined in the project; add new utilities in `tailwind.config.ts` only when necessary.
- When modifying behavior or data loaders, add/update Vitest tests in `src/__tests__` and run `npm run test` if feasible.
- Leave helpful, concise comments only for non-obvious logic; avoid obvious narrations.
