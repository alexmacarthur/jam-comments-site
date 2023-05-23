---
layout: layout-page.njk
title: Remix Integration
---

[Remix](https://remix.run/) is a modern, full-stack framework with a strong emphasis on user experience and web standards.

These instructions assume you've already created a JamComments account as well as a "site" within that account. If you haven't, learn more about that process on the [Getting Started](/docs/getting-started) page.

## Prerequisites

In order to use this plugin, you'll need a JamComments account, where you'll also need to have created a site and generated an API key.

## Installation

```bash
npm install @jam-comments/remix
```

## Environment Variables

After installation, set the following environment variables for your Remix application:

## Environment Variables

| Variable      | Description                     |
| ------------- | -------------------------- |
| `JAM_COMMENTS_DOMAIN`      | The root domain of your site (without `https://`).      |
| `JAM_COMMENTS_API_KEY`     | The API key found in your [account settings](https://go.jamcomments.com/settings).     |

## Usage

In the loader responsible for rendering comments for a post, use the `fetchMarkup` function with your environment variables to retrieve your comments. Then, pass that data to the `<JamComments />` component.

```tsx
// posts.$slug.tsx

import getPostFromWherever from "./get-posts";
import { json } from "@remix-run/node";
import { JamComments, fetchMarkup } from "@jam-comments/remix";

export const loader = async ({ params }) => {
  const post = await getPostFromWherever(params.slug);

  const markup = await fetchMarkup({
    domain: process.env.JAM_COMMENTS_DOMAIN,
    apiKey: process.env.JAM_COMMENTS_API_KEY,
    path: `/posts/${params.slug}`,
  });

  return json({ post, markup });
}

export default function Post() {
  const { post, markup } = useLoaderData();

  return (
    <article>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>

      {/* Comments will be rendered here: */}
      <JamComments markup={markup} />
    </article>
  );
}
```

## Contributions

The source for this plugin is open to contributions. If you have a bug fix or idea for improvement, leave a pull request or issue in the [GitHub repository](https://github.com/alexmacarthur/jam-comments-javascript/tree/master/packages/remix).
