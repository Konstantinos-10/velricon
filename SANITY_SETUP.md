# Sanity CMS Integration Guide

This project has been configured to use [Sanity CMS](https://www.sanity.io/) for managing Insights (Articles) and Case Studies.

## 1. Create a Sanity Project

Since you are setting this up for the first time, you need to create a new project on Sanity.

1.  **Install the Sanity CLI** (optional but recommended):
    ```bash
    npm install -g sanity
    ```

2.  **Initialize a new Sanity project**:
    You can create a separate studio folder or initialize it in the current project. For a Next.js App Router project, we typically recommend a separate studio or using the embedded Next.js studio.
    
    Run this command in your terminal (root of the repo):
    ```bash
    npm create sanity@latest
    ```
    - It will ask you to log in.
    - Create a new project.
    - Dataset: `production` (default).
    - Output path: `studio` (creates a subdirectory for the CMS) OR select "Embedded" if offered (requires more config). **Recommendation: Create a separate `studio` folder** for cleaner separation, or just use `https://www.sanity.io/manage` to create a project manually if you don't want a local studio yet.

3.  **Get your Project ID**:
    - Go to [https://www.sanity.io/manage](https://www.sanity.io/manage)
    - Select your project.
    - Copy the `Project ID`.

## 2. Configure Environment Variables

Create or update your `.env.local` file in the root of `Velricon`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

## 3. Configure Content Schemas

You need to define what a "Post" and "Case Study" looks like in your Sanity Studio.

If you created a `studio` folder:
1.  Go to `studio/schemas`.
2.  Create `post.ts` and `caseStudy.ts`.

### `post.ts` (For Articles)
```typescript
export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'readTime',
      title: 'Read Time (e.g. "5 min read")',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent', 
    },
  ],
}
```

### `caseStudy.ts` (For Case Studies)
```typescript
export default {
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
     {
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3
    },
    // Add specific case study fields here (Results, Challenge, Solution etc)
  ],
}
```

### `news.ts` (For Company News)
```typescript
export default {
  name: 'news',
  title: 'Company News',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'description',
      title: 'Short Summary',
      type: 'text',
      rows: 3
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent', 
    },
  ],
}
```

3.  Register these schemas in `studio/schemas/index.ts`.

## 4. Add CORS Origins

For your localhost website to fetch data from Sanity:
1.  Go to [Sanity Manage](https://www.sanity.io/manage).
2.  Select your project -> API -> CORS Origins.
3.  Add `http://localhost:3000` (Allow credentials).
4.  Add your production domain (e.g., `https://velricon.com`) once deployed.

## 5. Verify

1.  Run the studio (`cd studio && npm run dev` or `sanity start`).
2.  Create a "Post" and a "Case Study".
3.  Run your Next.js app (`npm run dev`).
4.  Navigate to `/insights`. You should see your content!

## Troubleshooting

- **Error: Missing environment variable**: Ensure you added `.env.local` and restarted the Next.js server.
- **Empty list**: Ensure you Hit "Publish" in the Sanity Studio.
