---
layout: layout-page.njk
title: Local Development
---

To make the setup & customization of JamComments a little easier, some special behavior has been built-in while running your site in development mode, which is determined by any environment that is _not_ "production". Specifically, two things will occur:

**#1. Dummy comments will be rendered.**

It's just a list of a few example comments. Disregard the content itself. Again, it's just to help you see how comments will render once your site is deployed.

**#2. Comments will be submitted quietly.**

It'll _look_ like you've just submitted a comment, but you won't get an email notificaiton, your webhooks won't be triggered, and the comment will not be rendered anywhere on your site.

## Configuring Development Mode

You can explicitly set your environment to set development mode while setting up your integration. For example, for the Remix integration, it'd look something like this:

```typescript
const markup = await fetchMarkup({
  domain: process.env.JAM_COMMENTS_DOMAIN as string,
  apiKey: process.env.JAM_COMMENTS_API_KEY as string,
  path: `/posts/${params.slug}`,
  environment: process.env.NODE_ENV, // <-- Environment explicitly set here.
});
```

Or, for a different language flavor, here's how the Bridgetown integration would look:

```ruby
Bridgetown.configure do |config|
  init :bridgetown_jam_comments
    domain "your.domain.com"
    api_key "123-api-key"
    environment "production" # <-- Environment explicitly set here.
  end
end
```

### Platform-Based Environment Defaults

When an environment is not explicitly set, each integration will attempt to reasonably assume the current environment. For example, the Jekyll integration will fall back to `JEKYLL_ENV`, and Node-based integrations will use `process.env.NODE_ENV`.
