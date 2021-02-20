---
layout: layout-page.njk
title: Next.js Integration
---

These instructions assume you've already created a JamComments account as well as a "site" within that account. If you haven't, learn more about that process on the [Getting Started](/docs/getting-started) page.

## Prerequisites

In order to use this plugin, you'll need a JamComments account, where you'll also need to have created a site and generated an API key.

<div class="warning">
  <span>
    This integration was specifically built for statically-generated Next.js sites (using the `getStaticProps` hook), and has not been tested with server-rendered applications.
  </span>
</div>

## Installation

```bash
npm install @jam-comments/next
```

## Usage

```javascript
// [slug].js

import { JamComments } from "@jam-comments/next";

export default function Post({ content, comments, jamCommentsDomain, jamCommentsApiKey}) {
  return (
    <article>
      <div dangerouslySetInnerHTML={{__html: content}}></div>

      <JamComments
        comments={comments}
        domain={jamCommentsDomain}
        apiKey={jamCommentsApiKey}
      />
    </article>
  )
}

export async function getStaticProps() {
  const content = await getContentFromSomewhere();
  const { fetchByPath } = require("@jam-comments/next");

  const comments = await fetchByPath({
    domain: process.env.JAM_COMMENTS_DOMAIN,
    apiKey: process.env.JAM_COMMENTS_API_KEY,
    path: "/posts/when-dom-updates-appear-to-be-asynchronous"
  });

  return {
    props: {
      jamCommentsApiKey: process.env.JAM_COMMENTS_API_KEY,
      jamCommentsDomain: process.env.JAM_COMMENTS_DOMAIN,
      comments,
      content
    },
  };
}
```

## Contributions

The source for this plugin is open to contributions. If you have a bug fix or idea for improvement, leave a pull request or issue in the [GitHub repository](https://github.com/alexmacarthur/jam-comments-javascript/tree/master/packages/next).
