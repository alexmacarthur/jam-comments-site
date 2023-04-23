---
layout: layout-page.njk
title: Next.js Integration
---

These instructions assume you've already created a JamComments account as well as a "site" within that account. If you haven't, learn more about that process on the [Getting Started](/docs/getting-started) page.

## Prerequisites

In order to use this plugin, you'll need a JamComments account, where you'll also need to have created a site and generated an API key.

## Installation

```bash
npm install @jam-comments/next
```

## Usage

In your `getStaticProps` or `getServerSideProps` hook, retrieve the comments for a given post by using the `fetchMarkup` method, and then passing your API key, domain, and comment data to your rendered page, which should then be passed to the `<JamComments />` component.

```javascript
// [slug].js

import { JamComments } from "@jam-comments/next";

export default function Post({ content, commentData }) {
  return (
    <article>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>

      <JamComments markup={commentData} />
    </article>
  );
}

export async function getStaticProps({ params }) {
  const content = await getContentFromSomewhere();
  const { fetchMarkup } = require("@jam-comments/next");

  // Retrieve all comments already made on this post.
  const commentData = await fetchMarkup({
    domain: process.env.JAM_COMMENTS_DOMAIN,
    apiKey: process.env.JAM_COMMENTS_API_KEY,
    path: `/posts/${params.slug}`,
  });

  // Pass domain, API key, and comments to `props` for use client-side.
  return {
    props: {
      commentData,
      content,
    },
  };
}
```

## Contributions

The source for this plugin is open to contributions. If you have a bug fix or idea for improvement, leave a pull request or issue in the [GitHub repository](https://github.com/alexmacarthur/jam-comments-javascript/tree/master/packages/next).
