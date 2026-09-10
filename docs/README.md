# Personal website

This website uses Astro. Run these commands from this directory:

```sh
npm ci
npm run dev
```

Open the local URL printed by Astro (normally `http://localhost:4321`).
To build and preview the static site locally:

```sh
npm run build
npm run preview
```

These commands do not publish the website. The build output is in `dist/`.

To clear Astro and Vite caches, stop the dev server first, then run:

```sh
npm run clean
npm run dev
```

## Content and assets

- `src/content/experience/`: experience entries.
- `src/content/education/`: education entries.
- `src/content/publications/`: one `item.md` per publication.
- `src/content/projects/`: one `item.md` per project.
- `src/data/`: About and News text.
- `src/components/`, `src/layouts/`, `src/pages/`: presentation and routes.
- `src/styles/global.css`: shared styles.
- `public/`: original logos, images, PDFs, BibTeX files, fonts, and CNAME.

The content schema and collection locations are in `src/content.config.ts`.
Keep new publication and project assets in their matching `public/` folders;
their URLs omit the `public` prefix. For example, a paper stored at
`public/files/papers/paper.pdf` uses `/files/papers/paper.pdf`.

Keep logos in their original form. Store all served assets under `public/`;
duplicate root-level asset folders can interfere with Astro's development
routes. Jekyll and Ruby are no longer required.
