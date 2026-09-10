import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// Optional frontmatter links can be blank. Treat non-string placeholders as
// absent while preserving the original content files.
const optionalText = z
  .any()
  .transform((value) => (typeof value === 'string' ? value : undefined))
  .optional();

const publications = defineCollection({
  loader: glob({ pattern: '**/item.md', base: './src/content/publications' }),
  schema: z.object({
    type: z.enum(['journal', 'conference', 'dataset', 'thesis']),
    teaser: optionalText,
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    venue2: optionalText,
    status: optionalText,
    award: optionalText,
    arxiv: optionalText,
    pdf: optionalText,
    poster: optionalText,
    link: optionalText,
    github: optionalText,
    project: optionalText,
    bibtex: optionalText,
    sdr: optionalText,
    zenodo: optionalText,
    correction: optionalText,
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    teaser: z.union([z.string(), z.array(z.string()).min(1)]).optional(),
    company: z.string(),
    address: z.string(),
    begin: z.string(),
    end: z.string(),
    title: z.string(),
    misc: z.string().optional(),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/education' }),
  schema: z.object({
    teaser: z.union([z.string(), z.array(z.string()).min(1)]).optional(),
    school: z.string(),
    address: z.string(),
    begin: z.string(),
    end: z.string(),
    degree: z.string(),
    misc: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/item.md', base: './src/content/projects' }),
  schema: z.object({
    teaser: z.string().optional(),
    title: z.string(),
    description: z.string(),
    link: z.string(),
  }),
});

export const collections = { publications, experience, education, projects };
