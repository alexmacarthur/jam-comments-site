---
layout: layout-page.njk
title: Astro Integration
---

[Astro](https://astro.build/) is a modern framework that's been causing a stir as of late, billing itself as being great for building "fast, content-focused websites." Two of its primary selling points include a framework-agnostic approach to building sites, as well as the ["islands" architecture](https://docs.astro.build/en/concepts/islands/) it's been pioneering.

These instructions assume you've already created a JamComments account as well as a site within that account. If you haven't, learn more about that process on the [Getting Started](/docs/getting-started) page.

## Installation & Configuration

Install the plugin by running `npm install @jam-comments/astro` or `yarn add @jam-comments/astro`. After doing so, configure it by setting the following environment variables in your site:

| Syntax                     | Description                                                                                                                       |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `JAM_COMMENTS_DOMAIN`      | The domain for your site as [configured in your account](https://go.jamcomments.com/sites). Don't include the protocol ("https"). |
| `JAM_COMMENTS_API_KEY`     | The API generated in [your account settings](https://go.jamcomments.com/settings).                                                |
| `JAM_COMMENTS_ENVIRONMENT` | Setting this to `development` will cause "dummy" comments to be locally rendered, which is helpful for styling.                   |

## Usage

Import the `JamComments.astro` component, place it where you'd like comments to render, and pass in the current path as a prop. You're done!

```js
import JamComments from '@jam-comments/astro';

const { url } = Astro.props;
---

// The rest of your markup...

<JamComments path={url} />
```

### Contributions

The source for this plugin is open to contributions. If you have a bug fix or idea for improvement, leave a pull request or issue in the [GitHub repository](https://github.com/alexmacarthur/jam-comments-javascript/tree/master/packages/astro).
