
# 🔌 Contentful API Integration (Postman)

This repo includes a Postman request set to interact with the Contentful Delivery API for querying content from a specific space and environment.

---

## ⚙️ Setup

### Requirements

- [Postman](https://www.postman.com/downloads/)
- Access to your Contentful Space and API credentials

### Postman Variables (Required)

Define these variables in your collection or environment:

| Variable        | Description                        |
|----------------|------------------------------------|
| `space_id`      | Your Contentful Space ID           |
| `env_id`        | Contentful Environment ID (`master` by default) |
| `access_token`  | Content Delivery API token         |

Under **Authorization**, use:

- Type: `Bearer Token`
- Token: `{{access_token}}`

---

## 🌐 Base API URL

All requests target the Content Delivery API:

```

<https://cdn.contentful.com/spaces/{{space_id}}/environments/{{env_id}}/>

```

---

## 📬 Included Requests

### 1. GET Entries with Select Fields

Fetch minimal entry data (e.g., title and slug only):

```

GET /entries?select=fields.title,fields.slug

```

### 2. GET Linked Assets

Retrieve all published assets (images, PDFs, etc.):

```

GET /assets

```

### 3. GET Entries Ordered by Creation Date

Get entries sorted by creation timestamp (newest first):

```

GET /entries?order=-sys.createdAt

```

---

## 📥 Import Collection

To import:

1. Open Postman → Import
2. Select `Contentful-gcode-postman-subset.json` from this repo
3. Add or map variables as needed (e.g., `space_id`, `access_token`)

---

## 🧠 Notes

- This setup uses the **Content Delivery API**, which returns **published** entries only.
- To access **draft** content, switch to the [Content Preview API](https://www.contentful.com/developers/docs/references/content-preview-api/) and use the appropriate token/base URL.
- Avoid committing API tokens. Use `.env`-style or environment files for secrets management when possible.

---

## 📚 Docs

- [Contentful Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/)
- [Postman Variables Guide](https://learning.postman.com/docs/sending-requests/variables/)
- [Preview API Reference](https://www.contentful.com/developers/docs/references/content-preview-api/)
