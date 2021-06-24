# Sanity Clean Content Studio

Congratulations, you have now installed the Sanity Content Studio, an open source real-time content editing environment connected to the Sanity backend.

Now you can do the following things:

- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- [Join the community Slack](https://slack.sanity.io/?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)

## Getting Started

1. Create `.env.development` file in root folder with values of:

```javascript
SANITY_STUDIO_PROJECT_URL = // e.g. http://localhost:3000/ OR VERCEL DOMAIN URL
SANITY_STUDIO_PREVIEW_SECRET = // unique string
```

2. Run the development server:

```bash
npm run start
# or
yarn start
```
