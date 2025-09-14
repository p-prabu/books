# Book‑Style Weekly Newsletter (GitHub Pages)

This repo gives you a **bookshelf → book** reading experience:

- **Homepage** shows a bookshelf of sticky-notes (one per category).
- Clicking a category opens its **book-style reader** with a two-page spread.
- All content is written as **Markdown posts** under `_posts/` with `categories:` in front matter.

## How to use

1. Create a new repo named `<username>.github.io` (or any repo and enable Pages).
2. Upload the contents of this zip to the repo root.
3. Commit and enable **GitHub Pages** (Settings → Pages → Source: `GitHub Actions` or `Deploy from branch` → `main`).
4. Edit or add posts in `_posts/` — keep `categories: <one-category>` to place the post in its book.
5. Optionally update `_data/categories.yml` to rename or reorder categories.

## Add new posts

Create a new file in `_posts/`:

```markdown
---
title: "My New Post"
date: 2025-08-19
categories: technology
subtitle: "A short one-line summary (optional)"
---

Write your **Markdown** here. Images, code fences, lists — all work.

```

The post will show up in the **Technology** book automatically.

## Run Locally

You can preview the site locally using the same setup as GitHub Pages.

- Prereqs: Ruby 3.x and Bundler installed
- Install dependencies:
  - `bundle install`
- Serve the site:
  - `bundle exec jekyll serve`
- Open in your browser:
  - Because `_config.yml` has `baseurl: /books`, visit `http://localhost:4000/books/`
  - Example post: `http://localhost:4000/books/technology/ai-trends-this-week/`

Tip: To serve at the root for local testing, run `bundle exec jekyll serve --baseurl ""` and open `http://localhost:4000/`.
