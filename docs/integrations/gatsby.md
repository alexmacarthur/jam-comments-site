---
layout: layout-page.njk
title: Gatsby Integration
---

These instructions assume you've already created a JamComments account as well as a "site" within that account. If you haven't, learn more about that process on the [Getting Started](/docs/getting-started) page.

## Installation & Configuration

Install the plugin by running `npm install @jam-comments/gatsby` or `yarn add @jam-comments/gatsby`. After doing so, configure it by adding the following to your `gatsby-config.js`.

<div class="warning">
  <span>
    In your deployed site, it's strongly recommended to store the values in <a href="https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/">environment variables</a>.
  </span>
</div>

```javascript
module.exports = {
  // ... other configuration stuff
  plugins: [
    // ...other plugins
    {
      resolve: '@jam-comments/gatsby',
      options: {
        api_key: process.env.JAM_COMMENTS_API_KEY,
        domain: process.env.JAM_COMMENTS_DOMAIN
      }
    }
  ]
};
```

## Usage

### Embedding Comments

To include a comment form and existing comments on your blog posts, you'll need to place the following component on your page component(s), along with the required `pageContext`, `apiKey`, and `domain` props.

```jsx
import React from "react";
import JamComments from "@jam-comments/gatsby/ui";

const MyPost = (props) => {
  return (
    <article>
      <h1>{props.title}</h1>
      <div>{props.content}</div>
      <JamComments
        pageContext={props.pageContext}
        apiKey={process.env.JAM_COMMENTS_API_KEY}
        domain={process.env.JAM_COMMENTS_DOMAIN}
      />
    </article>
  );
};

export default MyPost;
```

### Component Props

#### `pageContext`

Also provided by Gatsby, the `pageContext` object holds any comment data that's already been submitted, which will then be rendered on the page when it's built.

#### `apiKey`

You API key for the site generated in the JamComments dashboard. It'll be the same value used in your `gatsby-config.js` file, so you should probably store it in the same environment variable for easy sharing.

#### `domain`

The domain for your blog.

### Querying for Data

If needed, you can query available comments by using the following type of query:

```graphql
{
  allJamComment(limit: 10) {
    edges {
      node {
        content
        name
        path
        id
      }
    }
  }
}
```

### Contributions

The source for this plugin is open to contributions. If you have a bug fix or idea for improvement, leave a pull request or issue in the [GitHub repository](https://github.com/alexmacarthur/jam-comments-javascript/tree/master/packages/gatsby).
