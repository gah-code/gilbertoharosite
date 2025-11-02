
# Project Cleanup and Optimization To-Do List

---

## Complete

**General Cleanup 1.4.0**

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
  - [ ] Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity.
  - [ ] Gatsby API Script Update
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
