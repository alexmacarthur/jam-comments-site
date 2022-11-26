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
        apiKey: process.env.JAM_COMMENTS_API_KEY,
        domain: process.env.JAM_COMMENTS_DOMAIN
      }
    }
  ]
};
```

## Usage

### Embedding Comments

To include a form and comments on your blog posts, you'll need to place the following component in your page component, along with the required `pageContext` prop. [This object](https://www.gatsbyjs.com/docs/creating-and-modifying-pages) holds any comment data that's already been submitted, which will then be rendered on the page when it's built.

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
      />
    </article>
  );
};

export default MyPost;
```

### Contributions

The source for this plugin is open to contributions. If you have a bug fix or idea for improvement, leave a pull request or issue in the [GitHub repository](https://github.com/alexmacarthur/jam-comments-javascript/tree/master/packages/gatsby).
