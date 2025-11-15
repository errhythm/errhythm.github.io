import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional().default(false),
    slug: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.coerce.date(),
    title: z.string(),
    github: z.string().optional(),
    external: z.string().optional(),
    image: z.string().optional(),
    tech: z.array(z.string()).optional().default([]),
    company: z.string().optional(),
    showInProjects: z.boolean().optional().default(true),
    featured: z.boolean().optional().default(false),
    featuredSort: z.number().optional(),
    featuredCover: z.string().optional(),
    testimonial: z
      .object({
        name: z.string(),
        company: z.string(),
        image: z.string(),
        rating: z.number(),
        content: z.string(),
      })
      .optional(),
  }),
});

const jobsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.coerce.date(),
    title: z.string(),
    company: z.string(),
    location: z.string(),
    range: z.string(),
    url: z.string(),
  }),
});

const educationCollection = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.coerce.date(),
    title: z.string(),
    degree: z.string(),
    company: z.string(),
    location: z.string(),
    range: z.string(),
    url: z.string(),
  }),
});

const publicationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.coerce.date(),
    title: z.string(),
    type: z.string().optional(),
    conference: z.string().optional(),
    doi: z.string().optional(),
    url: z.string().optional(),
    featured: z.boolean().optional(),
    authors: z.array(z.object({
      name: z.string(),
      affiliation: z.string().optional(),
      url: z.string().optional(),
      email: z.string().optional(),
    })).optional(),
  }),
});

export const collections = {
  posts: postsCollection,
  projects: projectsCollection,
  jobs: jobsCollection,
  education: educationCollection,
  publications: publicationsCollection,
};
