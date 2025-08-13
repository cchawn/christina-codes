# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a statically generated personal blog built with Next.js, TypeScript, and Tailwind CSS. The blog uses Markdown files for content and generates static HTML for deployment.

## Development Commands

- `yarn install` - Install dependencies
- `yarn dev` - Start development server (serves static files from ./dist on port 3000)
- `yarn build` - Generate static site files to ./dist directory
- `yarn lint` - Run ESLint linting
- `yarn prettier` - Format code with Prettier
- `yarn typecheck` - Run TypeScript type checking

Note: This project uses a static export approach (`output: 'export'` in next.config.js), so `yarn dev` serves pre-built files rather than running a typical Next.js development server.

## Architecture

### Content Management
- Blog posts are stored as Markdown files in `/_posts/` directory
- Front matter is parsed using `gray-matter` library
- Markdown content is converted to HTML using `remark` and `remark-html`
- Post metadata is defined in `interfaces/post.ts`

### Key Components
- **API Layer**: `lib/api.ts` handles reading and parsing blog posts from the filesystem
- **Markdown Processing**: `lib/markdownToHtml.ts` converts Markdown to HTML
- **Static Generation**: Uses Next.js `getStaticProps` and `getStaticPaths` for static site generation
- **Routing**: Dynamic routing via `pages/posts/[slug].tsx` for individual blog posts

### Styling
- Uses Tailwind CSS with custom configuration in `tailwind.config.js`
- Custom colour scheme with accent colours and extended typography settings
- Responsive design patterns throughout components

### File Structure
- `components/` - Reusable UI components (header, footer, post components)
- `pages/` - Next.js pages and API routes
- `lib/` - Utility functions and constants
- `interfaces/` - TypeScript type definitions
- `_posts/` - Markdown blog post files
- `public/assets/` - Static assets including images

## Code Quality Tools

- **ESLint**: Configured with Next.js core web vitals and Prettier integration
- **Prettier**: Single quotes, trailing commas, prose wrapping enabled
- **TypeScript**: Configured with relaxed settings (`strict: false`)