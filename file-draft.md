**2025 Contentful-Powered Gatsby Site V2.0**, aligning with your latest README and project goals. This structure supports advanced features like dynamic routing, blog post templates, modular design with **Vanilla Extract**, **TypeScript migration**, and continuous deployment on **Netlify**.

---

### **Updated Folder Structure**

```plaintext
gah-code-gilbertoharosite/
├── README.md                 # Updated README (as per your content)
├── LICENSE                   # BSD Zero-Clause License
├── gatsby-browser.js         # Browser-level APIs (fonts, global styles)
├── gatsby-config.mjs         # Gatsby configuration (plugins, metadata)
├── gatsby-node.js            # Node APIs for page creation
├── gatsby-ssr.js             # Server-side rendering
├── netlify.toml              # Netlify deployment configuration
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── jest.config.js            # Jest for unit testing
├── .env.EXAMPLE              # Example environment variables
├── .prettierignore           # Files to ignore for Prettier
├── .prettierrc.json          # Prettier configuration
├── .eslintrc.js              # ESLint configuration
├── static/                   # Static assets (e.g., fonts, images)
│   ├── favicon.ico           # Favicon for the site
│   ├── fonts/                # Custom fonts
│   └── images/               # Static images and icons
├── src/
│   ├── components/           # Reusable components
│   │   ├── layout/           # Global layout components
│   │   │   ├── header/       # Header
│   │   │   │   ├── header.tsx
│   │   │   │   ├── header.css.ts
│   │   │   │   └── header.module.css
│   │   │   ├── footer.tsx
│   │   │   ├── layout.tsx
│   │   │   └── navigation/
│   │   │       ├── nav-item-group.tsx
│   │   │       └── nav-item-group.module.css
│   │   ├── post/             # Blog post-specific components
│   │   │   ├── PostCard.tsx
│   │   │   ├── PostGrid.tsx
│   │   │   └── PostCategories.tsx
│   │   ├── sections/         # Homepage and modular sections
│   │   │   ├── hero.tsx
│   │   │   ├── feature.tsx
│   │   │   └── cta.tsx
│   │   ├── ui/               # Atomic UI components
│   │   │   ├── button.tsx
│   │   │   ├── icon.tsx
│   │   │   ├── testimonial-list.tsx
│   │   │   └── stat-list.tsx
│   │   ├── animations/       # Motion effects
│   │   │   ├── fade-in.tsx
│   │   │   └── scroll-reveal.tsx
│   │   └── design-system/    # Vanilla Extract themes
│   │       ├── colors.css.ts
│   │       ├── typography.css.ts
│   │       └── theme.css.ts
│   ├── graphql/              # GraphQL queries and fragments
│   │   ├── fragments/
│   │   │   ├── blog-post.ts
│   │   │   ├── page.ts
│   │   │   └── homepage.ts
│   │   └── queries/
│   │       ├── blog-posts.ts
│   │       └── pages.ts
│   ├── hooks/                # Custom React hooks
│   │   ├── useContentful.ts  # Fetch data from Contentful
│   │   ├── useScroll.ts      # Scroll position tracking
│   │   └── useTheme.ts       # Manage theme state
│   ├── pages/                # Static and dynamic pages
│   │   ├── 404.tsx           # Custom 404 page
│   │   ├── index.tsx         # Homepage
│   │   ├── blog.tsx          # Blog listing page
│   │   ├── {Page.slug}.tsx   # Dynamic pages from Contentful's Page model
│   │   └── blog/
│   │       ├── {slug}.tsx    # Blog posts from Contentful's Blog Post model
│   │       └── categories/
│   │           └── {category}.tsx # Blog categories
│   ├── templates/            # Templates for dynamic pages
│   │   ├── blog-category.tsx
│   │   ├── blog-index.tsx
│   │   └── blog-post.tsx
│   ├── styles/               # Global and shared styles
│   │   ├── reset.css         # Reset CSS
│   │   ├── global.css        # Global styles
│   │   └── typography.css    # Typography styles
│   ├── utils/                # Utility functions
│   │   ├── fetcher.ts        # Fetch utilities
│   │   ├── logger.ts         # Logging
│   │   └── helpers.ts        # General helpers
│   ├── types/                # TypeScript type definitions
│   │   ├── contentful.d.ts   # Contentful types
│   │   ├── graphql.d.ts      # GraphQL types
│   │   └── react.d.ts        # React types
│   └── config/               # Configuration files
│       ├── contentful.ts     # Contentful API config
│       ├── motion.ts         # Scroll animation settings
│       └── site-metadata.ts  # Metadata for SEO
└── scripts/                  # Automation scripts
    ├── build-sitemap.ts
    ├── prebuild.ts
    └── generate-types.ts     # Generate GraphQL TypeScript types
```

---

### **Key Updates**

1. **Blog Post System**:
   - Dedicated directory for `post/` components and templates for `blog-post.tsx` and `blog-category.tsx`.
   - Supports dynamic routing for individual posts and categories.

2. **Modular Sections**:
   - `sections/` directory contains reusable homepage blocks (e.g., Hero, Feature).
   - Use Contentful’s modular content to fetch and render these sections.

3. **Vanilla Extract for Styling**:
   - `design-system/` centralizes theming with `theme.css.ts` and design tokens for colors and typography.

4. **Contentful Integration**:
   - `graphql/fragments/` and `queries/` provide reusable queries for Contentful data.

5. **SEO Enhancements**:
   - Custom `<SEOHead>` component in `components/head.js` for injecting meta tags dynamically.

6. **TypeScript Migration**:
   - Start with `.ts` files for new components while leaving existing `.js` files intact.
   - Store reusable types in `types/` for scalability.

7. **Testing**:
   - **Jest**: Unit tests for `components/`.
   - **Cypress**: End-to-end tests for blog and homepage flows.

8. **Responsive & Scroll Animations**:
   - `animations/` contains reusable motion effects like `scroll-reveal` and `fade-in`.

---

### **Setup and Deployment**

1. **Install Dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

2. **Set Environment Variables**:
   - Copy `.env.EXAMPLE` to `.env.development` and `.env.production`.
   - Add Contentful API credentials.

3. **Run Locally**:

   ```bash
   npm run develop
   ```

4. **Build & Deploy**:

   ```bash
   npm run build && npm run serve
   ```

5. **Netlify Deployment**:
   - Automatically deploy using `netlify.toml` configuration.

---

### **Future Enhancements**

- **Dark Mode**: Add dark mode support using Vanilla Extract tokens.
- **Search Functionality**: Implement a search/filter for blog posts.
- **Analytics**: Integrate Google Analytics or Plausible.
- **Dynamic Content Updates**: Use Contentful Webhooks for real-time updates.

This structure is optimized for scalability and performance, perfectly aligning with your goals for 2025. Let me know if you need further customization! 🚀

---
