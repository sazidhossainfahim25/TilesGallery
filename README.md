This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```
tiles-gallery
├─ .prettierignore
├─ .prettierrc
├─ db.json
├─ eslint.config.mjs
├─ jsconfig.json
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ favicon.jpg
│  ├─ images
│  │  ├─ banner1.jpg
│  │  └─ banner2.jpg
│  ├─ logo.png
│  └─ logo1.png
├─ README.md
└─ src
   ├─ app
   │  ├─ (auth)
   │  │  ├─ register
   │  │  │  └─ page.jsx
   │  │  └─ signin
   │  │     └─ page.jsx
   │  ├─ allTiles
   │  │  └─ page.jsx
   │  ├─ favicon.ico
   │  ├─ globals.css
   │  ├─ layout.js
   │  ├─ page.js
   │  ├─ profile
   │  │  ├─ page.jsx
   │  │  └─ update
   │  │     └─ page.jsx
   │  └─ tile
   │     └─ [id]
   │        └─ page.jsx
   ├─ components
   │  ├─ cards
   │  │  └─ TileCard.jsx
   │  ├─ FeaturedTiles.jsx
   │  ├─ home
   │  │  ├─ Banner.jsx
   │  │  └─ MarqueeTex.jsx
   │  ├─ shared
   │  │  ├─ Footer.jsx
   │  │  ├─ MyLink.jsx
   │  │  └─ Navbar.jsx
   │  └─ UI
   ├─ context
   └─ lib
      ├─ auth.js
      ├─ getTiles.js
      └─ mongodb.js

```