# AvoQx Plus Portfolio

The public website for AvoQx Plus: AI, production machine learning, and
embedded systems built for practical, sustainable impact.

## Local development

Requirements:

- Node.js 24
- npm 11 or newer

```bash
npm ci
npm run dev
```

The local development server is available at `http://localhost:4321`.

## Validation

```bash
npm run check
npm run build
npm run preview
```

The static production output is generated in `dist/`.

## Deployment

Merges to `main` trigger the GitHub Pages workflow in
`.github/workflows/deploy.yml`. The official Astro action installs locked
dependencies, builds the static site, and publishes it to:

<https://avoqx-plus.github.io/>

## Public-content policy

Only approved public information belongs in this repository. Never publish:

- Internal messages or private Project data
- Auditor identities without written permission
- Real audit documents or private datasets
- Dataset or storage paths
- API keys, passwords, `.env` files, or other secrets
- Content copied from private repositories

Team profiles, benchmark values, demo media, and contact details remain marked
as pending until the relevant people approve publication.

## Contributing

Start with a GitHub Issue, use a feature branch, and submit a Pull Request that
closes the Issue. See [CONTRIBUTING.md](CONTRIBUTING.md) for the full workflow.
