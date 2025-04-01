# My 2025 Website Update: Contentful-Powered Gatsby Site 1.3.0
>

![Lighthouse Score](./light-house.png)

![Content Model](./content-mod-lastest.png)

[![Netlify Status](https://api.netlify.com/api/v1/badges/f2ecbaf1-b540-48fd-82fd-b0d389e98a81/deploy-status)](https://app.netlify.com/sites/gilbertaharocode/deploys)

## Project Overview

This repository contains a **Gatsby** website integrated with **Contentful** for content management and a newly introduced **Blog Post** system. By leveraging **GraphQL** queries and Contentful’s flexible data model, the site can fetch and render content for **Pages**, **Blog Posts**, and modular homepage blocks (e.g., Hero, Feature, CTA, etc.).

## Key Features

- **Blog Post Content Type**: Manage blog articles (title, slug, excerpt, body, image, category, date, etc.) directly from Contentful.
- **Modular Homepage Blocks**: Use a variety of content types (Hero, Feature, CTA, etc.) for flexible, reusable homepage sections.
- **SEO-Friendly**: Includes separate fields for SEO Title and SEO Description in both Page and Blog Post content types, plus a custom `<SEOHead>` component for meta tags.
- **Dynamic Routing**: Gatsby’s `createPages` API in `gatsby-node.js` generates individual blog pages and category-based archives automatically.
- **Responsive, Accessible UI**: Styles built with **Vanilla Extract** for consistent design tokens and fluid responsiveness.

## Core Technologies

- **Gatsby**: React-based static site generator for high performance and speed.
- **Contentful**: Headless CMS to store and deliver structured content.
- **GraphQL**: Query language for pulling data from Contentful.
- **Vanilla Extract**: CSS-in-JS approach for theming and design tokens.
- **Netlify**: Hosting and continuous deployment (see `netlify.toml`).
- **Node.js**: For local development scripts and Gatsby build process.

---

## Contentful Model Overview

### 1. **Blog Post**

**Fields**:

- **Slug** *(Short text, required)*  
- **Title** *(Short text, required)*  
- **Body** *(Rich text)*  
- **Excerpt** *(Long text)*  
- **Image** *(File)*  
- **Date** *(Date & time)*  
- **Category** *(Short text)*  
- **Author** *(Reference to an Author or text)*  
- **SEO Title** *(Short text, < 50 chars)*  
- **SEO Description** *(Long text)*

> **Note**: The `slug` is used to generate the page URL (e.g. `/blogs/{slug}`). GraphQL queries in `gatsby-node.js` or `blog-post.js` fetch data for each post.

### 2. **Page**

**Fields**:

- **title** *(Short text)*  
- **slug** *(Short text, required)*  
- **description** *(Short text)*  
- **Image** *(File)*  
- **Body** *(Rich text)*  
- **SEO Title** *(Short text, <35 chars)*  
- **SEO Description** *(Long text)*

> **Note**: Typically used for top-level site pages with custom content.

### 3. **Layout & Homepage Blocks**

These content types (e.g., Homepage Hero, Feature List, CTA, LayoutHeader, LayoutFooter, etc.) are stored in Contentful and retrieved for the homepage and global site layout. They share common fields via GraphQL **interfaces**.

---

## Developer Documentation

1. **Setup**  
   - Copy `.env.EXAMPLE` → `.env.development` & `.env.production`, fill in **Contentful** credentials:

     ```env
     CONTENTFUL_SPACE_ID=xxxx
     CONTENTFUL_ACCESS_TOKEN=xxxx
     CONTENTFUL_MANAGEMENT_TOKEN=xxxx
     ```

   - Install dependencies:  

     ```bash
     npm install
     # or
     yarn install
     ```

2. **Local Development**  
   - Run `npm run develop` or `yarn develop`.
   - Open `http://localhost:8000` to see the site locally.  
   - Use `gatsby-source-contentful` for fetching data. Check `gatsby-config.mjs` for plugin options.

3. **Creating Blog Post Pages**  
   - In `gatsby-node.js`, we query all blog post slugs and create individual pages at build time, using the `blog-post.js` template.  
   - For category listings, `blog-category.js` can filter posts by a `category` field.

4. **SEO & `<SEOHead>`**  
   - Use `src/components/head.js` to inject meta tags on each page or post.  
   - Pass `title`, `description`, and optional `image` or `url` props.

---

## Full Folder Structure (with Comments)

```bash
└── gah-code-gilbertoharosite/      # Root of the project
    ├── README.md                  # Project readme (this file)
    ├── LICENSE                    # License info (BSD 0-Clause)
    ├── gatsby-browser.js          # Gatsby browser-level APIs (fonts, global styles)
    ├── gatsby-config.mjs          # Main Gatsby config, includes plugins
    ├── gatsby-node.js             # Gatsby Node APIs for dynamic page creation
    ├── netlify.toml               # Netlify configuration for deployment
    ├── package.json               # NPM/Yarn dependencies and scripts
    ├── .env.EXAMPLE               # Example env variables for Contentful
    ├── .nvmrc                     # Node version specification
    ├── .prettierignore            # Prettier ignore rules
    ├── .prettierrc.json           # Prettier configuration
    └── src/                       # Source code for the Gatsby site
        ├── components/            # Reusable and layout components
        │   ├── fallback.js        # Fallback component for unknown block types
        │   ├── head.js            # SEOHead component for meta tags
        │   ├── sections.js        # Exports homepage sections (Hero, CTA, etc.)
        │   ├── blog/              # Blog post-specific components
        │   │   ├── Card.js
        │   │   ├── PostCard.jsx
        │   │   └── PostCardSmall.jsx
        │   ├── design-system/     # Vanilla Extract theming + base styles
        │   │   ├── 404.css.ts
        │   │   ├── about-hero.css.ts
        │   │   ├── colors.css.ts
        │   │   ├── skill.css.ts
        │   │   ├── styles.css.ts
        │   │   └── theme.css.ts
        │   ├── layout/            # Layout and navigation structure
        │   │   ├── footer.js      # Global footer
        │   │   ├── hero.js        # Hero layout section
        │   │   ├── layout.js      # Wraps each page with header/footer
        │   │   ├── header/
        │   │   │   ├── header.css.ts
        │   │   │   └── header.js
        │   │   └── navigation/
        │   │       ├── caret.css.ts
        │   │       ├── caret.js
        │   │       ├── nav-item-group.css.ts
        │   │       └── nav-item-group.js
        │   └── ui/                 # Generic UI components (buttons, lists, etc.)
        │       ├── benefit-list.js
        │       ├── brand-logo.js
        │       ├── chevron-right.js
        │       ├── cta.js
        │       ├── logo-list.js
        │       ├── product-list.js
        │       ├── stat-list.js
        │       ├── ui.css.ts
        │       ├── ui.jsx
        │       ├── certifications/
        │       │   ├── resume-styled-cert-list.css.ts
        │       │   ├── resume-styled-cert-list.jsx
        │       │   └── resume-styled-item.js
        │       ├── feature/
        │       │   ├── feature-list.jsx
        │       │   └── feature.jsx
        │       └── skills/
        │           ├── skill-list-grid.js
        │           └── styles.css
        ├── data/
        │   └── certifications.json # Content data for certifications
        ├── pages/                  # Gatsby pages mapped to routes
        │   ├── 404.js              # Custom 404 page
        │   ├── experience.js       # Experience page
        │   ├── index.js            # Homepage
        │   ├── learning.js         # Learning page
        │   └── {Page.slug}.js      # Dynamically created pages from Contentful
        └── templates/              # Templates for dynamic page creation
            ├── RichTextRenderer.js # Renders rich text fields from Contentful
            ├── blog-category.js    # Lists posts under specific categories
            ├── blog-index.js       # Main blog listing or "index" page
            ├── blog-post.css.ts    # Styling for single blog posts
            └── blog-post.js        # Template for rendering individual blog posts

```

---

## Local Development & Deployment

1. **Clone & Install**  

   ```bash
   git clone <repo-url>
   cd gah-code-gilbertoharosite
   npm install
   # or
   yarn install
   ```

2. **Environment Variables**  
   - Copy `.env.EXAMPLE` → `.env.development` / `.env.production`
   - Provide **Contentful** credentials.

3. **Develop**  

   ```bash
   npm run develop
   ```

   or

   ```bash
   yarn develop
   ```

   Go to `http://localhost:8000`.

4. **Build & Serve**  

   ```bash
   npm run build && npm run serve
   ```

   or

   ```bash
   yarn build && yarn serve
   ```

5. **Deploy**  
   - **Netlify**: This project includes `netlify.toml` for config.  
   - Other hosts: Serve the `public/` folder after `gatsby build`.

---

## License

This project is licensed under **BSD Zero Clause License (0BSD)**. See [LICENSE](./LICENSE) for details.

---

### Project Cleanup and Optimization To-Do List

---

#### **General Cleanup 1.4.0**

- [X] **Audit Dependencies**
  - [X] Remove unused dependencies in `package.json`.
  - [X] Update outdated dependencies (`npm outdated`).
- [X] **Review Environment Variables**
  - [X] Ensure `.env.EXAMPLE` reflects all required environment variables.
  - [X] Add `.env` to `.gitignore` to prevent sensitive data leaks.
- [X] **Code Cleanup**
  - [X] Remove unused components and files.
  - [X] Delete commented-out or dead code.
- [X] **Organize Folder Structure**
  - [X] Consolidate redundant folders (e.g., `/post/` and `/templates/`).
  - [X] Consolidate Card with Compound pattern
  - [X] **ESLint configuration**
  - [X] Allow single-use props without requiring destructuring,enforce it for multiple uses
  - [X] no-unused-modules update

---

#### **Performance Optimizations 1.5.0**

- [ ] **Image Optimization**
  - [ ] Ensure all images use `gatsby-plugin-image`.
  - [X] Replace large static images with Contentful-hosted versions.
- [ ] **Lazy Loading**
  - [ ] Add lazy loading for non-critical components.
- [ ] **Build Performance**
  - [ ] Add `gatsby-plugin-preload-fonts`.
  - [ ] Optimize `gatsby-plugin-sharp` for images.
  - [ ] Use `gatsby-plugin-webpack-bundle-analyser-v2` to identify large bundles.
- [ ] **Contentful Query Optimizations**
  - [ ] Fetch only necessary fields in GraphQL queries.
- [ ] **Component Refactoring**
  - [X] Refactor `BlogIndex` Component

---

#### **SEO & Accessibility Improvements 1.5.0**

- [ ] **SEO Metadata**
  - [ ] Add `<SEOHead>` for all pages.
  - [ ] Set default fallback metadata in `gatsby-config.mjs`.
- [ ] **Accessibility (A11y)**
  - [ ] Test with Lighthouse for accessibility improvements.
  - [ ] Use semantic HTML (e.g., replace `<div>` with `<button>` where appropriate).
- [ ] **Structured Data**
  - [ ] Add schema markup for blog posts (author, date, category).

---

#### **Design System & Styling**

- [ ] **Vanilla Extract Tokens**
  - [ ] Audit unused/redundant style tokens.
  - [ ] Ensure tokens are consistently used across components.
- [ ] **Global Stylesheet**
  - [ ] Add a `base.css.ts` for global resets and typography.
- [] **Code Cleanup**

---

#### **Dynamic Content & Routing**

- [ ] **Dynamic Blog Pages**
  - [X] Verify blog posts and category pages are generated correctly.
  - [X] Add 404 handling for invalid slugs.
- [ ] **Pagination**
  - [ ] Add pagination for `/blog` and category pages.
- [ ] **Search Functionality**
  - [ ] Implement search or filtering for blog posts.

---

#### **Developer Experience 1.6.0**

- [ ] **Linting & Formatting**
  - [X] Ensure `.prettierrc.json` and `.prettierignore` are properly configured.
    - [X] Enable ESLint Rules for Unused Imports & Modules
  - [X] Add or configure `eslint` for consistent linting base set up.
- [ ] **TypeScript Migration**
  - [ ] Migrate components to TypeScript.
  - [ ] Add `gatsby-plugin-typescript`.
- [ ] **Testing**
  - [ ] Add unit tests for reusable components (e.g., `PostCard.js`).
  - [ ] Add end-to-end tests using Cypress.

---

#### **Deployment & Monitoring**

- [ ] **Netlify Configuration**
  - [ ] Optimize `netlify.toml` for redirects and caching.
  - [ ] Enable Netlify analytics.
- [ ] **CI/CD Integration**
  - [ ] Set up GitHub Actions or Netlify hooks for automated deployments.
- [ ] **Error Tracking**
  - [ ] Integrate Sentry for error reporting and monitoring.

---

#### **General Cleanup 1.9.0**

---

#### **Future Enhancements 2.0.0**

- [ ] **Contentful Webhooks**
  - [ ] Trigger Gatsby builds on content changes.
- [ ] **Offline Support**
  - [ ] Add `gatsby-plugin-offline` for PWA capabilities.
- [ ] **Dark Mode**
  - [ ] Add dark mode support to Vanilla Extract tokens.
- [ ] **Analytics**
  - [ ] Add Google Analytics, Plausible, or PostHog for user behavior tracking.

---

---

#### **Style & UI Improvements 2.0.0**

- [ ] **Consistency & Theming**
  - [ ] Maintain consistent styling for headings, buttons, and links across all pages.
  - [ ] Develop a style guide or pattern library to standardize UI elements.
  - [ ] Check spacing and alignment to keep layouts uniform.

- [ ] **Color Scheme Updates**
  - [ ] Conduct a color palette audit to identify areas lacking visual contrast.
  - [ ] Choose a primary and secondary color that align with branding and improve readability.
  - [ ] Use accent colors to highlight important CTAs and hover states.

- [ ] **Typography & Readability**
  - [ ] Select or refine a font pairing (e.g., header and body fonts) for consistent branding.
  - [ ] Standardize font sizes/weights for headings, subheadings, and body text to create a clear hierarchy.
  - [ ] Test line and paragraph spacing to ensure comfortable readability.

- [ ] **Button & CTA Design**
  - [ ] Redesign buttons with sufficient padding, distinct hover states, and clear labeling (e.g., "Learn More").
  - [ ] Implement color, contrast, and whitespace to make buttons stand out.
  - [ ] Ensure buttons are large enough for mobile tap targets (at least ~44×44px).

- [ ] **Responsive Layout Adjustments**
  - [ ] Review breakpoints to ensure smooth adaptation to mobile, tablet, and desktop.
  - [ ] Check for overlapping or truncated text on smaller screens.
  - [ ] Adjust font sizes and images for mobile to maintain accessibility.

- [ ] **Navigation Streamlining**
  - [ ] Simplify main menu items by grouping pages or sections logically.
  - [ ] Use descriptive labels for navigation links to clearly communicate destinations.
  - [ ] Consider a sticky or fixed navigation bar for easier access on long pages.

- [ ] **Visual Hierarchy & Content Organization**
  - [ ] Add consistent headings and subheadings to guide users through content.
  - [ ] Leverage whitespace to separate sections and reduce clutter.
  - [ ] Use consistent styling (backgrounds, dividers) to distinguish content blocks.

- [ ] **Incorporate User Feedback**
  - [ ] Monitor analytics and heatmaps to identify areas with high bounce/exit rates.

- [ ] **Enhance Interactive Elements**
  - [ ] Add subtle animations or hover effects to highlight clickable elements.
  - [ ] Ensure forms have clear labeling, user-friendly error messages, and field highlights.
  - [ ] Provide immediate visual feedback (color change, loading state) on clicks/submissions.

- [ ] **Accessibility (A11y)**
  - [ ] Ensure adequate color contrast for text and background (meets WCAG guidelines).
  - [ ] Provide descriptive alt text for images and clear button/link text for screen readers.
  - [ ] Verify keyboard accessibility for interactive elements (buttons, forms, modals).

- [ ] **Testing & Finalization**
  - [ ] Gather final feedback and make remaining adjustments.
  - [ ] Monitor analytics post-launch to measure performance and user engagement.

  ## 🚀 End-to-End Blog Publishing Workflow

---
