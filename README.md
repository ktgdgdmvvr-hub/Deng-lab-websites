# Deng Lab Website

Official bilingual website of Deng Lab, School of Basic Medical Sciences, Hainan Medical University.

## Website sections

- Home
- Research and detailed research directions
- Publications
- Lab news
- Resources
- Join us

## GitHub Pages

The website is built automatically by GitHub Actions after each push to `main`.
The deployment workflow is located at `.github/workflows/deploy-pages.yml`.

Before a custom domain is connected, the temporary project URL uses the
`/Deng-lab-websites` base path. When a custom domain is connected, remove the
`NEXT_PUBLIC_BASE_PATH` value from the workflow and redeploy.

## Local editing

Requirements: Node.js 22 or later.

```bash
npm ci
npm run dev
```

To test the GitHub Pages export locally:

```bash
NEXT_PUBLIC_BASE_PATH=/Deng-lab-websites npm run export:github
```
