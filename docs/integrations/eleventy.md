---
layout: layout-page.njk
title: Eleventy Integration
---

The official plugin for integrating [JamComments](https://jamcomments.com) into your Eleventy site.

## Prerequisites

In order to use this plugin, you'll need to do the following:

- Create a new JamComments account ([create one here](https://go.jamcomments.com/register)).
- [Create a new site](https://go.jamcomments.com/sites) after logging into the dashboard.
- [Generate an API key](https://go.jamcomments.com/settings) and store it in a safe location.

## Installation

Run `npm install @jam-comments/eleventy`.

## Configuration

In your `.eleventy.js` file, require the plugin and initialize it with your site's domain and API key.

```js
const jamComments = require('@jam-comments/eleventy');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(jamComments, {
    domain: process.env.JAM_COMMENTS_DOMAIN,
    apiKey: process.env.JAM_COMMENTS_API_KEY,
    environment: process.env.NODE_ENV, // Optional.
    tz: "America/Chicago" // Optional.
  });
});
```

## Displaying Comments

Embed the `jamcomments` Nunjucks shortcode in the template that renders individual posts or pages. Note that explicitly passing the `path.url` is optional. If it's not provided, it'll use the current path as indicated by Eleventy on build.

```html
<h1>My Page Title</h1>

<p>Here's some page content.</p>

<!-- Form and comments will render here! -->
{% jamcomments path.url %}
```

## Supported Rendering Engines

- \*.njk
- \*.liquid

## Contributions

The source for this plugin is open to contributions. If you have a bug fix or idea for improvement, leave a pull request or issue in the [GitHub repository](https://github.com/alexmacarthur/jam-comments-javascript/tree/master/packages/eleventy).
