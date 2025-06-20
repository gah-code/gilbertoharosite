Here's an updated folder structure and approach tailored to your **2025 Contentful-Powered Gatsby Site V2.0**, aligning with your latest README and project goals. This structure supports advanced features like dynamic routing, blog post templates, modular design with **Vanilla Extract**, **TypeScript migration**, and continuous deployment on **Netlify**.

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

Opening Statement
This review captures my first eight weeks in the CMS onboarding program. Drawing on my background in documentation, frontend development, AEM, and Agile/Scrum, I highlight what works, where friction occurs, and how we can accelerate ramp-up for future hires.

Focus Areas
Change-Management workflows
Trainee resources & technical docs
Stakeholder communication
Core and extended AEM authoring features
Each section uses concise bullet points and tags for quick reference, separating dense topics into standalone subsections when needed. The aim is to refine existing materials so that both new and seasoned Content Managers can navigate AEM smoothly within their first 60 days.

Objectives & Scope
By completing this section, I will be able to:
Create, edit, publish, and archive Content Fragments needed for the Rome project’s Phase-1 deliverables (Days 1-60). (create → edit → publish → etc.)
Filter out non-essential material outside the 60-day onboarding window to keep learning sharply focused.
Navigate the fragment-first authoring environment—including folder structures, versioning, and CRUD operations—without additional assistance.
Because Rome relies on a fragment-centric workflow, mastering fragment locations and lifecycle is foundational. Deeper technical topics (e.g., GraphQL, Network Debugging) will be covered in a later module.

Starting with Rome CM Onboarding Checklist

Onboarding Overview & Folder Structure
The onboarding materials give a solid introduction to our tools and workflows. To help new team members feel even more at home, we could add a short visual guide to the folder hierarchy and naming conventions used in Rome’s fragment-first model. A quick reference table might look like this:

table
FolderPurposeHelpful Hint
<!-- /Assets/<Channel>/Fragments Channel-specific Content Fragments Use lowercase kebab-case for clarity. -->
<!-- /Assets/<Channel>/Images Image library for the channel Keep originals; AEM renditions handle resizing. -->
/Assets/Shared Reusable fragments across channels Reference with Content Reference rather than duplicating.
A brief walkthrough of this structure—before diving into creation steps—can save newcomers time and questions later on.

Content Reference rather than duplicating.
A brief walkthrough of this structure—before diving into creation steps—can save newcomers time and questions later on.
Creation & Configuration Workflow
One minor wording tweak would make the workflow section more straightforward for those coming from a page-centric background: replacing the term “Page” with “Content Fragment” wherever it appears. A side-by-side comparison (traditional page vs. fragment powering a flyout) would reinforce the idea that fragments are channel-agnostic and not tied to AEM Sites templates.

Immediate improvements:
Add a 15-minute “Hello Fragment” lab on Day 1. Trainees create, tag, and publish a simple hero fragment in the sandbox; success is confirmed when the fragment appears in the GraphQL response at /content/dam/rome//fragments.
Teach flyout authoring before page assembly; move page-focused examples to a later module (Weeks 4–6).

Channel-Independent Philosophy
 Fragments can be delivered to any channel through Content Services or GraphQL endpoints. Emphasize the idea of “fragments first; pages optional” early in the course.
Tone and Style Guidelines
Capitalise “Content Fragment” consistently.
Use direct language (“Fragments live in …”) instead of tentative phrasing.
Flag any screenshot that still shows “Page,” so the training team can update it.

I will conclude with a few final notes and comments on this document, highlighting other ideas that may be useful. Most of the remaining bullet points focus on framing this training from a page perspective. This approach means that the core information and examples will not be put into practice for at least the next three weeks, as I understand that new hires typically start by working on flyouts instead of pages. This could lead to retention issues. I believe it is crucial to reinforce learning by having new hires practice what they have learned as soon as possible.

Additionally, one of my biggest pet peeves is when sections are numbered out of order, which is the case for this entire section.

--> To provide clarity and context, this review focuses on the first eight weeks of the onboarding and training program as experienced at the time of writing. As a new hire and trainee, I recognize that onboarding plays a critical role in long-term success, and each participant's engagement contributes meaningfully to the program’s overall effectiveness.
