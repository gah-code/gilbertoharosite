const { documentToHtmlString } = require("@contentful/rich-text-html-renderer")
const { getGatsbyImageResolver } = require("gatsby-plugin-image/graphql-utils")

exports.createSchemaCustomization = async ({ actions }) => {
  actions.createFieldExtension({
    name: "blocktype",
    extend(options) {
      return {
        resolve(source) {
          return source.internal.type.replace("Contentful", "")
        },
      }
    },
  })

  actions.createFieldExtension({
    name: "imagePassthroughArgs",
    extend(options) {
      const { args } = getGatsbyImageResolver()
      return {
        args,
      }
    },
  })

  actions.createFieldExtension({
    name: "imageUrl",
    extend(options) {
      const schemaRE = /^\/\//
      const addURLSchema = (str) => {
        if (schemaRE.test(str)) return `https:${str}`
        return str
      }
      return {
        resolve(source) {
          return addURLSchema(source.file.url)
        },
      }
    },
  })

  actions.createFieldExtension({
    name: "navItemType",
    args: {
      name: {
        type: "String!",
        defaultValue: "Link",
      },
    },
    extend(options) {
      return {
        resolve() {
          switch (options.name) {
            case "Group":
              return "Group"
            default:
              return "Link"
          }
        },
      }
    },
  })

  actions.createFieldExtension({
    name: "richText",
    extend(options) {
      return {
        resolve(source, args, context, info) {
          const body = source.body
          const doc = JSON.parse(body.raw)
          const html = documentToHtmlString(doc)
          return html
        },
      }
    },
  })

  // abstract interfaces
  actions.createTypes(/* GraphQL */ `
    interface HomepageBlock implements Node {
      id: ID!
      blocktype: String
    }

    interface HomepageLink implements Node {
      id: ID!
      href: String
      text: String
    }

    interface HeaderNavItem implements Node {
      id: ID!
      navItemType: String
    }

    interface NavItem implements Node & HeaderNavItem {
      id: ID!
      navItemType: String
      href: String
      text: String
      icon: HomepageImage
      description: String
    }

    interface NavItemGroup implements Node & HeaderNavItem {
      id: ID!
      navItemType: String
      name: String
      navItems: [NavItem]
    }

    interface HomepageImage implements Node {
      id: ID!
      alt: String
      gatsbyImageData: GatsbyImageData @imagePassthroughArgs
      url: String
    }

    interface HomepageHero implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      heading: String!
      kicker: String
      subhead: String
      image: HomepageImage
      text: String
      links: [HomepageLink]
    }

    interface HomepageFeature implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      heading: String
      kicker: String
      text: String
      image: HomepageImage
      links: [HomepageLink]
    }

    interface HomepageFeatureList implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      kicker: String
      heading: String
      text: String
      content: [HomepageFeature]
    }

    interface HomepageCta implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      kicker: String
      heading: String
      text: String
      image: HomepageImage
      links: [HomepageLink]
    }

    interface HomepageLogo implements Node {
      id: ID!
      image: HomepageImage
      alt: String
    }

    interface HomepageLogoList implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      text: String
      logos: [HomepageLogo]
    }

    interface HomepageTestimonial implements Node {
      id: ID!
      quote: String
      source: String
      avatar: HomepageImage
    }

    interface HomepageTestimonialList implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      kicker: String
      heading: String
      content: [HomepageTestimonial]
    }

    interface HomepageBenefit implements Node {
      id: ID!
      heading: String
      text: String
      image: HomepageImage
    }

    interface HomepageBenefitList implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      heading: String
      text: String
      content: [HomepageBenefit]
    }

    interface HomepageStat implements Node {
      id: ID!
      value: String
      label: String
      heading: String
    }

    interface HomepageStatList implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      kicker: String
      heading: String
      text: String
      image: HomepageImage
      icon: HomepageImage
      content: [HomepageStat]
      links: [HomepageLink]
    }

    interface HomepageProduct implements Node {
      id: ID!
      heading: String
      text: String
      image: HomepageImage
      links: [HomepageLink]
    }

    interface HomepageProductList implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      heading: String
      kicker: String
      text: String
      content: [HomepageProduct]
    }

    interface Homepage implements Node {
      id: ID!
      title: String
      description: String
      image: HomepageImage
      content: [HomepageBlock]
    }

    interface LayoutHeader implements Node {
      id: ID!
      navItems: [HeaderNavItem]
      cta: HomepageLink
    }

    enum SocialService {
      TWITTER
      FACEBOOK
      INSTAGRAM
      YOUTUBE
      LINKEDIN
      GITHUB
      DISCORD
      TWITCH
    }

    interface SocialLink implements Node {
      id: ID!
      username: String!
      service: SocialService!
    }

    interface LayoutFooter implements Node {
      id: ID!
      links: [HomepageLink]
      meta: [HomepageLink]
      socialLinks: [SocialLink]
      copyright: String
    }

    interface Layout implements Node {
      id: ID!
      header: LayoutHeader
      footer: LayoutFooter
    }

    interface AboutPage implements Node {
      id: ID!
      title: String
      description: String
      image: HomepageImage
      content: [HomepageBlock]
    }

    interface AboutHero implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      heading: String
      text: String
      image: HomepageImage
    }

    interface AboutStat implements Node {
      id: ID!
      value: String
      label: String
    }

    interface AboutStatList implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      content: [AboutStat]
    }

    interface AboutProfile implements Node {
      id: ID!
      image: HomepageImage
      name: String
      jobTitle: String
    }

    interface AboutLeadership implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      kicker: String
      heading: String
      subhead: String
      content: [AboutProfile]
    }

    interface AboutLogoList implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      heading: String
      links: [HomepageLink]
      logos: [HomepageLogo]
    }

    interface Page implements Node {
      id: ID!
      slug: String!
      title: String
      description: String
      image: HomepageImage
      html: String!
    }
  `)

  // CMS-specific types for Homepage
  actions.createTypes(/* GraphQL */ `
    type ContentfulHomepageLink implements Node & HomepageLink @dontInfer {
      id: ID!
      href: String
      text: String
    }

    type ContentfulNavItem implements Node & NavItem & HeaderNavItem
      @dontInfer {
      id: ID!
      navItemType: String @navItemType(name: "Link")
      href: String
      text: String
      icon: HomepageImage @link(from: "icon___NODE")
      description: String
    }

    type ContentfulNavItemGroup implements Node & NavItemGroup & HeaderNavItem
      @dontInfer {
      id: ID!
      navItemType: String @navItemType(name: "Group")
      name: String
      navItems: [NavItem] @link(from: "navItems___NODE")
    }

    type ContentfulAsset implements Node & HomepageImage {
      id: ID!
      alt: String @proxy(from: "title")
      gatsbyImageData: GatsbyImageData
      url: String @imageUrl
      file: JSON
      title: String
    }

    type ContentfulHomepageHero implements Node & HomepageHero & HomepageBlock
      @dontInfer {
      id: ID!
      blocktype: String @blocktype
      heading: String!
      kicker: String
      subhead: String
      image: HomepageImage @link(from: "image___NODE")
      text: String
      links: [HomepageLink] @link(from: "links___NODE")
    }

    type ContentfulHomepageFeature implements Node & HomepageBlock & HomepageFeature
      @dontInfer {
      blocktype: String @blocktype
      heading: String
      kicker: String
      text: String
      image: HomepageImage @link(from: "image___NODE")
      links: [HomepageLink] @link(from: "links___NODE")
    }

    type ContentfulHomepageFeatureList implements Node & HomepageBlock & HomepageFeatureList
      @dontInfer {
      blocktype: String @blocktype
      kicker: String
      heading: String
      text: String
      content: [HomepageFeature] @link(from: "content___NODE")
    }

    type ContentfulHomepageCta implements Node & HomepageBlock & HomepageCta
      @dontInfer {
      blocktype: String @blocktype
      kicker: String
      heading: String
      text: String
      image: HomepageImage @link(from: "image___NODE")
      links: [HomepageLink] @link(from: "links___NODE")
    }

    type ContentfulHomepageLogo implements Node & HomepageLogo @dontInfer {
      id: ID!
      image: HomepageImage @link(from: "image___NODE")
      alt: String
    }

    type ContentfulHomepageLogoList implements Node & HomepageBlock & HomepageLogoList
      @dontInfer {
      blocktype: String @blocktype
      text: String
      logos: [HomepageLogo] @link(from: "logos___NODE")
    }

    type ContentfulHomepageTestimonial implements Node & HomepageTestimonial
      @dontInfer {
      id: ID!
      quote: String
      source: String
      avatar: HomepageImage @link(from: "avatar___NODE")
    }

    type ContentfulHomepageTestimonialList implements Node & HomepageBlock & HomepageTestimonialList
      @dontInfer {
      id: ID!
      blocktype: String @blocktype
      kicker: String
      heading: String
      content: [HomepageTestimonial] @link(from: "content___NODE")
    }

    type ContentfulHomepageBenefit implements Node & HomepageBenefit
      @dontInfer {
      id: ID!
      heading: String
      text: String
      image: HomepageImage @link(from: "image___NODE")
    }

    type ContentfulHomepageBenefitList implements Node & HomepageBlock & HomepageBenefitList
      @dontInfer {
      id: ID!
      blocktype: String @blocktype
      heading: String
      text: String
      content: [HomepageBenefit] @link(from: "content___NODE")
    }

    type ContentfulHomepageStat implements Node & HomepageStat @dontInfer {
      id: ID!
      value: String
      label: String
      heading: String
    }

    type ContentfulHomepageStatList implements Node & HomepageBlock & HomepageStatList
      @dontInfer {
      id: ID!
      blocktype: String @blocktype
      kicker: String
      heading: String
      text: String
      image: HomepageImage @link(from: "image___NODE")
      icon: HomepageImage @link(from: "icon___NODE")
      content: [HomepageStat] @link(from: "content___NODE")
      links: [HomepageLink] @link(from: "links___NODE")
    }

    type ContentfulHomepageProduct implements Node & HomepageProduct
      @dontInfer {
      heading: String
      text: String
      image: HomepageImage @link(from: "image___NODE")
      links: [HomepageLink] @link(from: "links___NODE")
    }

    type ContentfulHomepageProductList implements Node & HomepageProductList & HomepageBlock
      @dontInfer {
      blocktype: String @blocktype
      heading: String
      kicker: String
      text: String
      content: [HomepageProduct] @link(from: "content___NODE")
    }

    type ContentfulHomepage implements Node & Homepage @dontInfer {
      id: ID!
      title: String
      description: String
      image: HomepageImage @link(from: "image___NODE")
      content: [HomepageBlock] @link(from: "content___NODE")
    }
  `)

  // CMS specific types for About page
  actions.createTypes(/* GraphQL */ `
    type ContentfulAboutHero implements Node & AboutHero & HomepageBlock
      @dontInfer {
      id: ID!
      blocktype: String @blocktype
      heading: String
      text: String
      image: HomepageImage @link(from: "image___NODE")
    }

    type ContentfulAboutStat implements Node & AboutStat @dontInfer {
      id: ID!
      value: String
      label: String
    }

    type ContentfulAboutStatList implements Node & AboutStatList & HomepageBlock
      @dontInfer {
      id: ID!
      blocktype: String @blocktype
      content: [AboutStat] @link(from: "content___NODE")
    }

    type ContentfulAboutProfile implements Node & AboutProfile @dontInfer {
      id: ID!
      image: HomepageImage @link(from: "image___NODE")
      name: String
      jobTitle: String
    }

    type ContentfulAboutLeadership implements Node & AboutLeadership & HomepageBlock
      @dontInfer {
      id: ID!
      blocktype: String @blocktype
      kicker: String
      heading: String
      subhead: String
      content: [AboutProfile] @link(from: "content___NODE")
    }

    type ContentfulAboutLogoList implements Node & AboutLogoList & HomepageBlock
      @dontInfer {
      id: ID!
      blocktype: String @blocktype
      heading: String
      links: [HomepageLink] @link(from: "links___NODE")
      logos: [HomepageLogo] @link(from: "logos___NODE")
    }

    type ContentfulAboutPage implements Node & AboutPage @dontInfer {
      id: ID!
      title: String
      description: String
      image: HomepageImage @link(from: "image___NODE")
      content: [HomepageBlock] @link(from: "content___NODE")
    }
  `)

  // Layout types
  actions.createTypes(/* GraphQL */ `
    type ContentfulLayoutHeader implements Node & LayoutHeader @dontInfer {
      id: ID!
      navItems: [HeaderNavItem] @link(from: "navItems___NODE")
      cta: HomepageLink @link(from: "cta___NODE")
    }

    type ContentfulSocialLink implements Node & SocialLink @dontInfer {
      id: ID!
      username: String!
      service: SocialService!
    }

    type ContentfulLayoutFooter implements Node & LayoutFooter @dontInfer {
      id: ID!
      links: [HomepageLink] @link(from: "links___NODE")
      meta: [HomepageLink] @link(from: "meta___NODE")
      socialLinks: [SocialLink] @link(from: "socialLinks___NODE")
      copyright: String
    }

    type ContentfulLayout implements Node & Layout @dontInfer {
      id: ID!
      header: LayoutHeader @link(from: "header___NODE")
      footer: LayoutFooter @link(from: "footer___NODE")
    }
  `)

  // Page types
  actions.createTypes(/* GraphQL */ `
    type ContentfulPage implements Node & Page {
      id: ID!
      slug: String!
      title: String
      description: String
      image: HomepageImage @link(from: "image___NODE")
      html: String! @richText
    }
  `)
}

// const path = require("path")

// exports.createPages = ({ actions }) => {
//   const { createSlice } = actions
//   createSlice({
//     id: "header",
//     component: require.resolve("./src/components/header/header.js"),
//   })
//   createSlice({
//     id: "footer",
//     component: require.resolve("./src/components/footer.js"),
//   })
// }

// const path = require("path")
// const path = require("path")
// const { createFilePath } = require("gatsby-source-filesystem")
// // import { compileMDXWithCustomOptions } from "gatsby-plugin-mdx"
// // import { remarkHeadingsPlugin } from "./remark-headings-plugin.mjs"

// // Add Slug Field for MDX Nodes
// // exports.onCreateNode = ({ node, actions, getNode }) => {
// //   const { createNodeField } = actions

// //   if (node.internal.type === "Mdx") {
// //     const slug = createFilePath({ node, getNode, basePath: "posts" })
// //     createNodeField({
// //       node,
// //       name: "slug",
// //       value: slug,
// //     })
// //   }
// // }

// // Create Pages Dynamically

// const createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions

//   // Paths for templates
//   const postTemplate = path.resolve(`./src/templates/post-template.jsx`)
//   const tagTemplate = path.resolve(`./src/templates/tag-template.jsx`)
//   // Create header and footer slices
//   createSlice({
//     id: "header",
//     component: require.resolve("./src/components/header/header.js"),
//   })
//   createSlice({
//     id: "footer",
//     component: require.resolve("./src/components/footer.js"),
//   })

//   // Fetch MDX Posts
//   const result = await graphql(`
//     {
//       allMdx {
//         nodes {
//           id
//           frontmatter {
//             slug
//             title
//             category # Ensure category is queried
//           }
//           internal {
//             contentFilePath # Needed for MDX v4
//           }
//         }
//       }
//     }
//   `)

//   if (result.errors) {
//     reporter.panicOnBuild("Error loading MDX posts", result.errors)
//     return
//   }

//   const posts = result.data.allMdx.nodes

//   // 1. Create individual post pages
//   posts.forEach((node) => {
//     createPage({
//       path: node.frontmatter.slug,
//       component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
//       context: { id: node.id },
//     })
//   })

//   // 2. Create paginated tag pages
//   const postsByCategory = {}

//   // Group posts by category
//   posts.forEach((post) => {
//     const category = post.frontmatter.category
//     if (!postsByCategory[category]) {
//       postsByCategory[category] = []
//     }
//     postsByCategory[category].push(post)
//   })

//   Object.keys(postsByCategory).forEach((category) => {
//     const categoryPosts = postsByCategory[category]
//     const postsPerPage = 5 // Number of posts per page
//     const numPages = Math.ceil(categoryPosts.length / postsPerPage)

//     Array.from({ length: numPages }).forEach((_, i) => {
//       createPage({
//         path:
//           i === 0
//             ? `/tags/${category.toLowerCase()}/` // First page
//             : `/tags/${category.toLowerCase()}/${i + 1}/`, // Paginated pages
//         component: tagTemplate,
//         context: {
//           category,
//           limit: postsPerPage,
//           skip: i * postsPerPage,
//           currentPage: i + 1,
//           numPages,
//         },
//       })
//     })
//   })
// }

// exports.onPreBootstrap = ({ actions }) => {
//   const { createSlice } = actions

//   // Register header and footer slices
//   createSlice({
//     id: "header",
//     component: require.resolve("./src/components/header/header.js"),
//   })

//   createSlice({
//     id: "footer",
//     component: require.resolve("./src/components/footer.js"),
//   })
// }
// const path = require("path")

// exports.createPages = ({ actions }) => {
//   const { createSlice } = actions
//   createSlice({
//     id: "header",
//     component: require.resolve("./src/components/header/header.js"),
//   })
//   createSlice({
//     id: "footer",
//     component: require.resolve("./src/components/footer.js"),
//   })
// }

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions

//   // Paths for templates
//   const postTemplate = path.resolve(`./src/templates/post-template.jsx`)
//   const tagTemplate = path.resolve(`./src/templates/tag-template.jsx`)

//   // Fetch MDX Posts
//   const result = await graphql(`
//     {
//       allMdx {
//         nodes {
//           id
//           frontmatter {
//             slug
//             title
//             category
//           }
//           internal {
//             contentFilePath
//           }
//         }
//       }
//     }
//   `)

//   if (result.errors) {
//     reporter.panicOnBuild("Error loading MDX posts", result.errors)
//     return
//   }

//   const posts = result.data.allMdx.nodes

//   // Create individual post pages
//   posts.forEach((node) => {
//     createPage({
//       path: node.frontmatter.slug,
//       component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
//       context: { id: node.id },
//     })
//   })

//   // Create paginated tag pages
//   const postsByCategory = {}

//   posts.forEach((post) => {
//     const category = post.frontmatter.category
//     if (!postsByCategory[category]) {
//       postsByCategory[category] = []
//     }
//     postsByCategory[category].push(post)
//   })

//   Object.keys(postsByCategory).forEach((category) => {
//     const categoryPosts = postsByCategory[category]
//     const postsPerPage = 5
//     const numPages = Math.ceil(categoryPosts.length / postsPerPage)

//     Array.from({ length: numPages }).forEach((_, i) => {
//       createPage({
//         path:
//           i === 0
//             ? `/tags/${category.toLowerCase()}/`
//             : `/tags/${category.toLowerCase()}/${i + 1}/`,
//         component: tagTemplate,
//         context: {
//           category,
//           limit: postsPerPage,
//           skip: i * postsPerPage,
//           currentPage: i + 1,
//           numPages,
//         },
//       })
//     })
//   })
// }

// exports.createPages = ({ actions }) => {
//   const { createSlice } = actions
//   createSlice({
//     id: "header",
//     component: require.resolve("./src/components/header/header.js"),
//   })
//   createSlice({
//     id: "footer",
//     component: require.resolve("./src/components/footer.js"),
//   })
// }

// const path = require("path")

// // 1. Register Slices Globally
// exports.onPreBootstrap = ({ actions }) => {
//   const { createSlice } = actions

//   // Create Header Slice
//   createSlice({
//     id: "header",
//     component: require.resolve("./src/components/header/header.js"),
//     allowEmpty: true, // Allow empty slices (e.g., for /404.html)
//   })

//   // Create Footer Slice
//   createSlice({
//     id: "footer",
//     component: require.resolve("./src/components/footer.js"),
//     allowEmpty: true, // Allow empty slices
//   })
// }

// // 2. Create Pages Dynamically
// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions
//   const { createSlice } = actions

//   createSlice({
//     id: "header",
//     component: require.resolve("./src/components/header/header.js"),
//   })
//   createSlice({
//     id: "footer",
//     component: require.resolve("./src/components/footer.js"),
//   })

//   // Paths for templates
//   const postTemplate = path.resolve(`./src/templates/post-template.jsx`)
//   const tagTemplate = path.resolve(`./src/templates/tag-template.jsx`)

//   // Fetch MDX Posts
//   const result = await graphql(`
//     {
//       allMdx {
//         nodes {
//           id
//           frontmatter {
//             slug
//             title
//             category
//           }
//           internal {
//             contentFilePath
//           }
//         }
//       }
//     }
//   `)

//   // Handle GraphQL Errors
//   if (result.errors) {
//     reporter.panicOnBuild("Error loading MDX posts", result.errors)
//     return
//   }

//   const posts = result.data.allMdx.nodes

//   // 3. Create Individual Post Pages
//   posts.forEach((node) => {
//     createPage({
//       path: node.frontmatter.slug,
//       component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
//       context: { id: node.id },
//     })
//   })

//   // 4. Create Paginated Category Pages
//   const postsByCategory = {}

//   // Group posts by category
//   posts.forEach((post) => {
//     const category = post.frontmatter.category
//     if (!postsByCategory[category]) {
//       postsByCategory[category] = []
//     }
//     postsByCategory[category].push(post)
//   })

//   // Create paginated category pages
//   Object.keys(postsByCategory).forEach((category) => {
//     const categoryPosts = postsByCategory[category]
//     const postsPerPage = 5 // Posts per page
//     const numPages = Math.ceil(categoryPosts.length / postsPerPage)

//     Array.from({ length: numPages }).forEach((_, i) => {
//       createPage({
//         path:
//           i === 0
//             ? `/tags/${category.toLowerCase()}/` // First page
//             : `/tags/${category.toLowerCase()}/${i + 1}/`, // Paginated pages
//         component: tagTemplate,
//         context: {
//           category,
//           limit: postsPerPage,
//           skip: i * postsPerPage,
//           currentPage: i + 1,
//           numPages,
//         },
//       })
//     })
//   })
// }

// const path = require("path")

// // 1. Create Pages and Register Slices
// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage, createSlice } = actions

//   // 1. Register Global Slices
//   createSlice({
//     id: "header",
//     component: require.resolve("./src/components/header/header.js"),
//     allowEmpty: true, // Allows rendering empty slices for pages like 404.html
//   })

//   createSlice({
//     id: "footer",
//     component: require.resolve("./src/components/footer.js"),
//     allowEmpty: true,
//   })

//   // 2. Paths for templates
//   const postTemplate = path.resolve(`./src/templates/post-template.jsx`)
//   const tagTemplate = path.resolve(`./src/templates/tag-template.jsx`)

//   // 3. Fetch MDX Posts
//   const result = await graphql(`
//     {
//       allMdx {
//         nodes {
//           id
//           frontmatter {
//             slug
//             title
//             category
//           }
//           internal {
//             contentFilePath
//           }
//         }
//       }
//     }
//   `)

//   // Handle GraphQL Errors
//   if (result.errors) {
//     reporter.panicOnBuild("Error loading MDX posts", result.errors)
//     return
//   }

//   const posts = result.data.allMdx.nodes

//   // 4. Create Individual Post Pages
//   posts.forEach((node) => {
//     createPage({
//       path: node.frontmatter.slug,
//       component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
//       context: { id: node.id },
//     })
//   })

//   // 5. Create Paginated Category Pages
//   const postsByCategory = {}

//   // Group posts by category
//   posts.forEach((post) => {
//     const category = post.frontmatter.category
//     if (!postsByCategory[category]) {
//       postsByCategory[category] = []
//     }
//     postsByCategory[category].push(post)
//   })

//   Object.keys(postsByCategory).forEach((category) => {
//     const categoryPosts = postsByCategory[category]
//     const postsPerPage = 5
//     const numPages = Math.ceil(categoryPosts.length / postsPerPage)

//     Array.from({ length: numPages }).forEach((_, i) => {
//       createPage({
//         path:
//           i === 0
//             ? `/tags/${category.toLowerCase()}/` // First page
//             : `/tags/${category.toLowerCase()}/${i + 1}/`, // Paginated pages
//         component: tagTemplate,
//         context: {
//           category,
//           limit: postsPerPage,
//           skip: i * postsPerPage,
//           currentPage: i + 1,
//           numPages,
//         },
//       })
//     })
//   })
// }
const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createSlice } = actions

  // Register Header Slice
  createSlice({
    id: "header",
    component: require.resolve("./src/components/header/header.js"),
    allowEmpty: true, // Allow empty slices for fallback pages (e.g., /404.html)
  })

  // Register Footer Slice
  createSlice({
    id: "footer",
    component: require.resolve("./src/components/footer.js"),
    allowEmpty: true,
  })

  // Paths for templates
  const postTemplate = path.resolve(`./src/templates/post-template.jsx`)
  const tagTemplate = path.resolve(`./src/templates/tag-template.jsx`)

  // Fetch all MDX posts
  const result = await graphql(`
    {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
            title
            excerpt
            category
            author
            image {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 768, height: 400)
              }
            }
            imageAlt
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  // Handle GraphQL errors
  if (result.errors) {
    reporter.panicOnBuild("Error loading MDX posts", result.errors)
    return
  }

  const posts = result.data.allMdx.nodes

  // Create individual post pages
  posts.forEach((node) => {
    createPage({
      path: node.frontmatter.slug,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
        slug: node.frontmatter.slug,
        title: node.frontmatter.title,
        excerpt: node.frontmatter.excerpt,
        category: node.frontmatter.category,
        author: node.frontmatter.author,
        image: node.frontmatter.image,
        imageAlt: node.frontmatter.imageAlt,
      },
    })
  })

  // Group posts by category for tags
  const postsByCategory = {}
  posts.forEach((post) => {
    const category = post.frontmatter.category
    if (!postsByCategory[category]) {
      postsByCategory[category] = []
    }
    postsByCategory[category].push(post)
  })

  // Create paginated category pages
  Object.keys(postsByCategory).forEach((category) => {
    const categoryPosts = postsByCategory[category]
    const postsPerPage = 5
    const numPages = Math.ceil(categoryPosts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path:
          i === 0
            ? `/tags/${category.toLowerCase()}/`
            : `/tags/${category.toLowerCase()}/${i + 1}/`,
        component: tagTemplate,
        context: {
          category,
          limit: postsPerPage,
          skip: i * postsPerPage,
          currentPage: i + 1,
          numPages,
        },
      })
    })
  })
}
