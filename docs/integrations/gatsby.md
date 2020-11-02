---
layout: layout-page.njk
title: Gatsby Integration
---

These instructions assume you've already created a JamComments account as well as a site. If you haven't, learn more about that process on the [Getting Started](/docs/getting-started) page.

## Prerequisites
In order to use this plugin, you'll need a JamComments account, where you'll also need to have created a site and generated an API key.

## Installation & Configuration

Install the plugin by running `npm install gatsby-plugin-jam-comments` or `yarn add gatsby-plugin-jam-comments`. After doing so, configure it by adding the following to your `gatsby-node.js`.

```js
resolve: 'gatsby-plugin-jam-comments',
  options: {
    api_key: "YOUR-API-KEY",
    domain: "your-domain.me"
  }
}
```

## Usage

### Embedding Comments

To include a comment form and existing comments on your blog posts, you'll need to place the following component on your page component(s), along with the required `path` and `pageContext` props:

```jsx
import React from 'react';

const Post = (props) => {
  return (
    <div>
      <article>
        {props.postContent}
      </article>

      <JamComments path={props.path} pageContext={props.pageContext} />
    </div>
  )
}

export default Post;
```

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

The source for this plugin is open to contributions. If you have a bug fix or idea for improvement, leave a pull request or issue in the [GitHub repository](https://github.com/alexmacarthur/gatsby-plugin-jam-comments).
