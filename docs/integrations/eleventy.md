---
layout: layout-page.njk
title: Eleventy Integration
---

The official plugin for integrating [JamComments](https://jamcomments.com) into your Eleventy site.

## Prerequisites

In order to use this plugin, you'll need a JamComments account, where you'll also need to have created a site and generated an API key.

## Installation

Run `npm install @jam-comments/eleventy`.

## Configuration

In your `.eleventy.js` file, require the plugin and initialize it with your site's domain and API key.

```js
const jamComments = require('@jam-comments/eleventy');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(jamComments, {
    domain: process.env.JAM_COMMENTS_DOMAIN,
    apiKey: process.env.JAM_COMMENTS_API_KEY
  });
});
```

## Displaying Comments

Embed the following Nunjucks shortcode in the template that renders individual posts or pages.

```
{{ "{% jamcomments %}" | escape }}
```

## Supported Rendering Engines

- \*.njk
- \*.liquid

## Contributions

The source for this plugin is open to contributions. If you have a bug fix or idea for improvement, leave a pull request or issue in the [GitHub repository](https://github.com/alexmacarthur/jam-comments-javascript/tree/master/packages/eleventy).