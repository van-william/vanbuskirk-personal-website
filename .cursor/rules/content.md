# Content Updates
- Blog posts live in `src/data/blog/<slug>.ts` and must export `post: BlogPost`; ensure the filename and `slug` match.
- Architecture diagrams live in `src/data/architectures/<slug>.ts` exporting `architecture`; metadata should match `ArchitectureMetadata` (use `basic | intermediate | advanced` for `complexity`).
- Project listings reside in `src/data/projects.ts`; keep `id` values unique and prefer image paths under `/project_images/`.
- Photography metadata is stored in `src/data/photos.ts`; maintain accurate `width`/`height` and consistent category casing.
- After altering data-driven content, review the related routes (`/blog`, `/projects`, `/architecture-diagrams`, `/photography`) in the dev server before shipping.
- Keep `contentManagementGuide` helpers in `src/utils/content-loader.ts` synchronized with any new instructions.
