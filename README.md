# ✨ christina.codes ✨

ℹ️ _This is a statically generated blog using Next.js, Markdown, and
TypeScript._

The blog posts are stored in `/_posts` as Markdown files with front matter
support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts, we use [`remark`](https://github.com/remarkjs/remark)
and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the
Markdown files into an HTML string, and then send it down as a prop to the page.
The metadata of every post is handled by
[`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in
props to the page.

This site uses uses [Tailwind CSS](https://tailwindcss.com)
[(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3).

## Development

### Prerequisites

This project uses [Mise](https://mise.jdx.dev/) for managing tool versions. Install the required Node.js version:

```sh
mise install
```

### Running Locally

Use a slim HTTP server to serve static files for this website. It will be
available on http://localhost:3000.

```sh
yarn install
yarn dev
```

### Build & Deployment

To re-generate the static files you will need to rebuild the website with the
following:

```sh
yarn build
```

This website is hosted with [Railway](https://railway.app/). Changes made to the
`main` branch will be automatically pushed to production.
