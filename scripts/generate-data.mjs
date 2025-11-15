#!/usr/bin/env node
/**
 * Generate static data from Astro content collections for client-side React components
 * This is a temporary solution until CMS integration is implemented
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';
import matter from 'gray-matter';
import { marked } from 'marked';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function readMarkdownFiles(pattern) {
  const files = await glob(pattern, { cwd: rootDir });
  const data = [];

  for (const file of files) {
    const filePath = path.join(rootDir, file);
    const content = await fs.readFile(filePath, 'utf-8');
    const { data: frontmatter, content: markdown } = matter(content);
    const html = marked.parse(markdown);

    data.push({
      frontmatter,
      html,
    });
  }

  return data;
}

async function generateData() {
  console.log('Generating static data from content collections...');

  // Read all content
  const jobs = await readMarkdownFiles('src/content/jobs/**/index.md');
  const education = await readMarkdownFiles('src/content/education/**/index.md');
  const projects = await readMarkdownFiles('src/content/projects/*.md');
  const publications = await readMarkdownFiles('src/content/publications/*.md');
  const posts = await readMarkdownFiles('src/content/posts/*.md');

  // Sort jobs by date (descending)
  jobs.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

  // Sort education by date (descending)
  education.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

  // Get featured projects and sort by featuredSort
  const featuredProjects = projects
    .filter(p => p.frontmatter.featured === true)
    .sort((a, b) => (a.frontmatter.featuredSort || 999) - (b.frontmatter.featuredSort || 999));

  // Sort all projects by date
  projects.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

  // Sort publications by date (descending)
  publications.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

  // Prepare data for export
  const dataExport = {
    jobs: jobs.map(({ frontmatter, html }) => ({ node: { frontmatter, html } })),
    education: education.map(({ frontmatter, html }) => ({ node: { frontmatter, html } })),
    projects: projects.map(({ frontmatter, html }) => ({ node: { frontmatter, html } })),
    featuredProjects: featuredProjects.map(({ frontmatter, html }) => ({ node: { frontmatter, html } })),
    publications: publications.map(({ frontmatter, html }) => ({ node: { frontmatter, html } })),
    posts: posts.map(({ frontmatter, html }) => ({ node: { frontmatter, html } })),
  };

  // Write to file
  const outputPath = path.join(rootDir, 'src/data/content.json');
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, JSON.stringify(dataExport, null, 2));

  console.log(`✓ Generated static data at ${outputPath}`);
  console.log(`  - Jobs: ${jobs.length}`);
  console.log(`  - Education: ${education.length}`);
  console.log(`  - Projects: ${projects.length}`);
  console.log(`  - Featured Projects: ${featuredProjects.length}`);
  console.log(`  - Publications: ${publications.length}`);
  console.log(`  - Posts: ${posts.length}`);
}

generateData().catch(console.error);
