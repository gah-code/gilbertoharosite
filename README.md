# Full Report and README for Contentful-Gatsby Codebase

## Project Overview

This project is a Gatsby site that integrates Contentful as its content management system (CMS). It serves as a homepage template that can be customized to match your branding while using Contentful as the back-end content provider. The project includes several custom scripts for setting up Contentful, importing content models, and combining new content types with existing ones to avoid redundancy.

### Key Features

- **Gatsby Integration with Contentful**: Gatsby is used as the frontend, while Contentful serves as the CMS. This combination provides an efficient static site generator that pulls content from Contentful.
- **Contentful Setup Script**: A script is provided to streamline the initial Contentful setup and data import, helping developers get started with minimal friction.
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

## Combining Existing and New Contentful Content Types

The setup script has been enhanced to merge new content types with existing ones in Contentful without causing duplication or overwriting.

### How It Works

1. **Fetch Existing Content Types**: The script connects to the Contentful API and fetches the existing content types from your space.
2. **Filter New Content Types**: Any content type that already exists is filtered out.
3. **Import Only New Content Types**: The remaining content types are then imported, ensuring that your existing content remains intact.

## Netlify Setup

This project can be deployed to Netlify for easy hosting and continuous deployment. Follow these steps to set up Netlify:

1. **Create a Netlify Account**
   - Go to [Netlify](https://app.netlify.com/) and create an account if you haven't already.

2. **Connect Your Repository**
   - Click **New Site from Git**.
   - Choose your Git provider (e.g., GitHub) and select the repository for this project.

3. **Configure Build Settings**
   - **Build Command**: `gatsby build`
   - **Publish Directory**: `public`

4. **Add Environment Variables**
   - Go to **Site Settings** > **Environment Variables**.
   - Add the following variables:
     - `CONTENTFUL_SPACE_ID`
     - `CONTENTFUL_ACCESS_TOKEN`
     - `CONTENTFUL_MANAGEMENT_TOKEN` (if needed for preview or management purposes)

5. **Deploy Site**
   - Click **Deploy Site**. Netlify will build and deploy your site automatically.

6. **Set Up Continuous Deployment**
   - Whenever you push changes to the connected repository, Netlify will automatically rebuild and deploy your site.

## Troubleshooting Common Issues

### Dependency Conflicts (ERESOLVE)

If you encounter an `ERESOLVE` error while installing dependencies, it is caused by a conflict between the version of `sharp` required by Gatsby plugins. To resolve this:

```bash
npm install sharp@^0.32.6 --legacy-peer-deps
```

This will install a compatible version of `sharp` and ignore peer dependency conflicts.

### Missing Module (`ajv/dist/compile/codegen`)

If you see an error about missing modules related to `ajv` or `ajv-keywords`:

1. Install compatible versions of `ajv` and `ajv-keywords`:

   ```bash
   npm install ajv@^8.0.0 ajv-keywords@^5.0.0 --legacy-peer-deps
   ```

2. Clean up and reinstall all dependencies:

   ```bash
   rm -rf node_modules package-lock.json
   npm install --legacy-peer-deps
   ```

## Running the Project

Once the setup is complete, start the development server:

```bash
yarn start
# or
gatsby develop
```

The Gatsby development server will run locally at `http://localhost:8000`.

## Project Structure

- **scripts/setup.js**: Script to help set up Contentful and import content types.
- **src/**: Contains the source code for the Gatsby project.
  - **components/**: React components used throughout the site.
  - **pages/**: Contains the page-level components (e.g., homepage, about page).
- **gatsby-config.js**: The configuration file for Gatsby, containing plugin information including Contentful.

## Updating Contentful Models

### Adding a New Content Type

1. **Create the Content Type in Contentful**: Add a new content type directly in your Contentful space.
2. **Update Gatsby Queries**: Modify the GraphQL queries to include the new fields or content types as needed.
3. **Update Components**: Add or modify React components to render the new content type.

### Example Query Update

If you add a new content type called **HomepageBanner**, you need to add it to your GraphQL query:

```graphql
export const query = graphql`
  {
    homepage {
      id
      title
      blocks {
        ... on HomepageBanner {
          heading
          subheading
          image {
            url
          }
        }
      }
    }
  }
`
```

## Best Practices

- **Environment Variables**: Always keep sensitive information such as API keys in environment variables and **never commit them** to source control.
- **Testing**: Thoroughly test your setup after adding new content types to ensure there are no schema conflicts.
- **Schema Updates**: When updating content types, make sure to clean the Gatsby cache:

  ```bash
  gatsby clean
  ```

## Future Improvements

- **Automate Contentful Schema Changes**: Use a CI/CD process to automate importing and updating the content model in Contentful.
- **Error Handling**: Improve error handling in the setup script to provide more actionable information when something goes wrong.

## Additional Resources

- **Gatsby Documentation**: [Gatsby Docs](https://www.gatsbyjs.com/docs/)
- **Contentful Documentation**: [Contentful Docs](https://www.contentful.com/developers/docs/)
- **GraphQL Reference**: Learn more about GraphQL for efficient querying of Contentful content.

## Conclusion

This project is designed to provide an efficient and scalable way to create a homepage using Gatsby and Contentful. The setup script facilitates easy integration while merging content types to avoid redundancy. Ensure that all environment configurations are correctly set and make use of the troubleshooting steps provided if any issues arise.
