# My 2025 Website Update: Contentful-Powered Gatsby Site V1.2 | In TESTING 01/24/25

![Lighthouse Score](./light-house.png)

![Content Model](./content-mod-lastest.png)

## **Project Overview**

My **Contentful Website** is a modern, fast, and scalable web application built with GatsbyJS, Contentful, and MDX. It showcases cutting-edge web technologies, including PrismJS for syntax highlighting, Vanilla Extract for styling, and an optimized development workflow for building dynamic, content-rich websites.

### **IN PROGRESS** Summary Checklist

- [ ] **Plugins configured** in `gatsby-config.mjs`.
- [X] **Clean Up**
- [ ] **Rich Text field** for syntax highlighting.
- [ ] **Cross-space references** in Rich Text fields
- [X] **Blog templates** Content Model implmentation.
- [ ] **SEO** to update.
- [ ] **Incremental Static Generation**

## **Key Features**

- **Gatsby Integration with Contentful**:
  - This combination offers an efficient static site generator that retrieves content from Contentful. Content is managed through the Contentful CMS and is seamlessly integrated using GraphQL. It supports rich text, media, and reusable components for effective structured content management.
- **Interactive Blog System**:
  - Built with MDX for writing blogs using JSX and Markdown.
  - Syntax highlighting for code snippets with customizable themes powered by PrismJS.

- **Advanced Theming**:
  - Uses **Vanilla Extract** for CSS-in-JS, enabling scoped styles and theme management.
  - Fully customizable design system with global and component-specific styles.

- **Optimized Performance**:
  - Image optimization with Gatsby's **Sharp** and **Image** plugins.
  - Static rendering for lightning-fast load times and SEO.

- **Responsive and Accessible Design**:
  - Fully responsive UI for all screen sizes.
  - Follows accessibility (a11y) best practices for inclusive user experiences.

- **Developer-Friendly Features**:
  - Hot module replacement for fast development.
  - Preconfigured plugins for MDX, GraphQL, and PrismJS.
  - Includes a robust structure for reusable components and templates.

- **Combining Content Types**: The script ensures that existing content types are not overwritten, merging new content types with the ones already in place.

## **Core Technologies**

- **Framework**: GatsbyJS (React-based static site generator)
- **CMS**: Contentful (Headless CMS)
- **Markdown and JSX**: MDX for flexible content creation
- **Styling**: Vanilla Extract (CSS-in-JS)
- **Image Optimization**: gatsby-plugin-image, gatsby-plugin-sharp
- **Deployment**: Netlify for fast and secure hosting
- **Node.js**: For executing server-side scripts and managing the setup process.

### Abstract Interfaces for GraphQL Schema Customization

This project uses **abstract interfaces** in GraphQL to define a flexible and reusable schema for integrating Contentful data. Interfaces serve as shared contracts for related types, ensuring consistency and simplicity in querying CMS data.

### 🔧🛠 Folder Structure In Progress 🔧🛠

```markdown
.
├── .env.production
├── .env.development
├── netlify.toml
├── package.json
├── README.md
├── gatsby-browser.js
├── gatsby-config.mjs
├── gatsby-node.js
├── docs/                 # (optional) Additional documentation
├── public/               # Gatsby build output
├── src
│   ├── components
│   │   ├── layout
│   │   │   ├── header
│   │   │   │   ├── header.js
│   │   │   │   └── header.css.ts            # or .css.ts if using Vanilla Extract
│   │   │   ├── navigation
│   │   │   │   ├── nav-item-group-css.ts
│   │   │   │   └── nav-item-group.js
│   │   │   ├── footer.js
│   │   │   ├── hero.js
│   │   │   └── layout.js
│   │   │
│   │   ├── design-system
│   │   │   ├── theme.css.ts
│   │   │   ├── colors.css.ts
│   │   │   └── (any other vanilla-extract files)
│   │   │
│   │   ├── prism
│   │   │   ├── prismStyles.css.ts           # or .css
│   │   │   ├── CodeBlock.js                 # Code highlighting w/ PrismJS
│   │   │   └── index.js                     # Re-export if needed
│   │   │
│   │   ├── ui
│   │   │   ├── ui.js
│   │   │   ├── ui.css.ts
│   │   │   ├── shortcodes.js
│   │   │   ├── benefit-list.js
│   │   │   ├── logo-list.js
│   │   │   ├── stat-list.js
│   │   │   ├── testimonial-list.js
│   │   │   ├── cta.js
│   │   │   └── (common UI components like Button, Card, etc.)
│   │   │
│   │   ├── posts
│   │   │   ├── PostCard.js
│   │   │   ├── PostList.js                 # or any other post-related UI
│   │   │   └── (additional blog post components)
│   │   │
│   │   ├── segments
│   │   │   ├── about
│   │   │   ├── feature
│   │   │   └── (other specialized segment folders)
│   │   │
│   │   ├── shortcodes.js                   # If you use MDX shortcodes
│   │   └── ComponentsWrapper.js            # Example: global context
│   │
│   ├── hooks
│   │   └── (custom React hooks if needed)
│   │
│   ├── pages
│   │   ├── index.js
│   │   ├── about.js
│   │   ├── experience.js
│   │   ├── 404.js
│   │   ├── blogs.js
│   │   ├── blogsPage.js
│   │   ├── {Mdx.frontmatter__slug}.js
│   │   └── {Page.slug}.js                  # Sourcing from Contentful
│   │
│   ├── posts                               # Local MDX each folder for a single post.
│   │   ├── highlight-demo
│   │   │   ├── index.mdx
│   │   │   ├── img-1.jpg
│   │   │   └── ...
│   │   ├── seo-metadata-enhancements
│   │   │   ├── index.mdx
│   │   │   ├── seo-demo.jpg
│   │   │   └── thinking.png
│   │   └── (other local MDX posts)
│   │
│   ├── templates
│   │   ├── blog-index.js - IN TESTING
│   │   ├── blog-post.js - IN TESTING
│   │   ├── post-template.jsx - IN TESTING
│   │   ├── tag-template.jsx
│   │   └── (other custom templates)
│   │
│   └── fragments
│       └── fragments.js                    # e.g. GraphQL fragments
├── .prettierignore
├── .prettierrc.json
└── content-mod-draft.png                   # or relocate to /static if needed
```

#### **Overview:**

1. **What are Interfaces?**
   Interfaces define common fields and structure that other types must implement, enabling reusable and flexible schema definitions.

   Example:

   ```graphql
   interface HomepageBlock implements Node {
     id: ID!
     blocktype: String
   }
   ```

2. **Implementation by Types:**
   Concrete types like `ContentfulHomepageHero` or `ContentfulHomepageFeature` implement these interfaces to conform to their structure.

   Example:

   ```graphql
   type ContentfulHomepageHero implements Node & HomepageBlock {
     id: ID!
     blocktype: String @blocktype
     heading: String!
     image: HomepageImage @link(from: "image___NODE")
     text: String
   }
   ```

3. **Simplified Queries:**
   Interfaces enable querying shared fields across all implementations, reducing complexity.

   Example Query:

   ```graphql
   {
     allHomepageBlock {
       nodes {
         id
         blocktype
       }
     }
   }
   ```

#### **Benefits:**

- **Consistency:** Ensures a unified structure across multiple types.
- **Flexibility:** Enables queries at both abstract and specific levels.
- **Reusability:** Shared definitions simplify schema management.
- **Efficient CMS Integration:** Bridges Contentful’s data with GraphQL for easier querying and maintenance.

#### **Use Case in This Project:**

- **Homepage Blocks:** Define blocks (e.g., hero, features) using `HomepageBlock` and its concrete implementations.
- **Rich Text Fields:** Use custom field extensions (e.g., `richText`) for processing Contentful's raw data into HTML.
- **Dynamic Image Handling:** Utilize field extensions for managing Contentful assets with `gatsby-plugin-image`.

This approach creates a scalable, maintainable schema for managing CMS content within the GraphQL API.

## Setup and Installation

### Prerequisites

To set up and run this project, you will need:

- **Node.js** and **npm/yarn** installed.
- A **Contentful Space ID** and **API tokens**.

### Step-by-Step Setup

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install Dependencies**

   ```bash
   npm install --legacy-peer-deps
   # or
   yarn install
   ```

3. **Run Setup Script to Configure Contentful**
   The script provided will help populate the Contentful space and set up the content types required:

   ```bash
   node scripts/setup.js
   ```

   During the setup, you will be prompted to enter:
   - **Contentful Space ID**
   - **Content Delivery API Access Token**
   - **Content Management API Access Token**

   Alternatively, you can provide these values as environment variables:

   ```bash
   CONTENTFUL_SPACE_ID=your_space_id CONTENTFUL_ACCESS_TOKEN=your_delivery_token CONTENTFUL_MANAGEMENT_TOKEN=your_management_token node scripts/setup.js
   ```

### Configuring Environment Variables

After running the setup script, two environment configuration files will be generated:

- **.env.development**
- **.env.production**

These files contain the necessary environment variables to connect your Gatsby project with Contentful. Make sure you **do not commit** these files to version control.

Example of `.env.development`:

```env
CONTENTFUL_SPACE_ID='your_space_id'
CONTENTFUL_ACCESS_TOKEN='your_access_token'
# To enable previews locally, uncomment the next line:
# CONTENTFUL_HOST='preview.contentful.com'
```

## Dev Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/f2ecbaf1-b540-48fd-82fd-b0d389e98a81/deploy-status)](https://app.netlify.com/sites/gilbertaharocode/deploys)

## Dev State IN PROGRESS

TASKS

✅ Uses a unique SEO title: "All Blog Posts | {Site Name}"
✅ Adds a custom SEO description to improve indexing
✅ Ensures URLs are properly normalized for better SEO
✅ Uses the existing SEOHead component for consistency
✅ No need for seoTitle on the blog index—it’s designed to be a landing page!
