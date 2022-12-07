---
layout: layout-page.njk
title: Jekyll Integration
---

[Jekyll](https://jekyllrb.com) is a legend of an SSG, laying the foundation of the Jamstack ecosystem even before "Jamstack" became a term. Its developer friendliness and low barrier to entry still make it a strong contender in the more "modern" era, making it an obvious one to decide to support for JamComments.

These instructions assume you've already created a JamComments account as well as a site within that account. If you haven't, learn more about that process on the [Getting Started](/docs/getting-started) page.

## Installation & Configuration

In your Jekyll site, install the plugin by running `bundle add jekyll_jam_comments` or by adding the following to your Gemfile:

```ruby
gem "jekyll_jam_comments"
```

After doing so, set up the following environment variables for your site:

| Syntax      | Description |
| ----------- | ----------- |
| `JAM_COMMENTS_DOMAIN` | The domain for your site as [configured in your account](https://go.jamcomments.com/sites). Don't include the protocol ("https").|
| `JAM_COMMENTS_API_KEY`   | The API generated in [your account settings](https://go.jamcomments.com/settings).|
| `JAM_COMMENTS_ENVIRONMENT`  | Setting this to `development` will cause "dummy" comments to be locally rendered, which is helpful for styling. By default, this will fall back to the value of `JEKYLL_ENV`.|

If you'd like to set these values within your `config.yml` file, you may do so:

```yml
  # config.yml
  jam_comments:
    domain: JAM_COMMENTS_DOMAIN
    api_key: JAM_COMMENTS_API_KEY
    environment: 'production' or 'development' # optional
```

## Usage

Place the `{% jam_comments %}` Liquid tag on the page you'd like comments to appear. Under the hood, the plugin uses the `page.url` context variable to determine the page path.

```html
<div class="post">
  <!-- content... -->
</div>

{% jam_comments %}
```

### Contributions

The source for this plugin is open to contributions. If you have a bug fix or idea for improvement, leave a pull request or issue in the [GitHub repository](https://github.com/alexmacarthur/jekyll-jam-comments).
