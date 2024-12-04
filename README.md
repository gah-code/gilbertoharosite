# gilbert-contentful-website 2025

# TO DO

# Full Report and README

## Project Overview

This project is a Gatsby site that integrates Contentful as its content management system (CMS).

### Key Features

- **Gatsby Integration with Contentful**: Gatsby is used as the frontend, while Contentful serves as the CMS. This combination provides an efficient static site generator that pulls content from Contentful.
- **Combining Content Types**: The script ensures that existing content types are not overwritten, merging new content types with the ones already in place.

### Tech Stack

- **Gatsby**: Static site generator for React-based web applications.
- **Contentful**: Headless CMS for managing content.
- **Node.js**: For executing server-side scripts and managing the setup process.

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

## Conclusion
