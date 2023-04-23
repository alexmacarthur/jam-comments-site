---
layout: layout-page.njk
title: Bridgetown Integration
---

[Bridgetown.rb](https://bridgetownrb.com) is a modern spin-off of the Jekyll static site generator, with a sophisticated & growing breadth of features that make it a great choice for buidling a content platform.

These instructions assume you've already created a JamComments account as well as a site within that account. If you haven't, learn more about that process on the [Getting Started](/docs/getting-started) page.

## Installation

In your Bridgetown site, install the plugin by running `bundle add bridgetown_jam_comments` or by adding the following to your Gemfile:

```ruby
gem "bridgetown_jam_comments"
```

After doing so, initialize the integration by adding the following to your `config/initializers.rb` file:

```ruby
Bridgetown.configure do |config|
  # The rest of your site's configuration...

  init :bridgetown_jam_comments
end
```

## Configuration Values

The following variables are supported by the itegration:

| Syntax        | Description                                                                                                                                                                       |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `domain`      | The domain for your site as [configured in your account](https://go.jamcomments.com/sites). Don't include the protocol ("https").                                                 |
| `api_key`     | The API generated in [your account settings](https://go.jamcomments.com/settings).                                                                                                |
| `environment` | Setting this to `development` will cause "dummy" comments to be locally rendered, which is helpful for styling. By default, this will fall back to the value of `BRIDGETOWN_ENV`. |

There are a few different ways you can configure these.

### Inside Your Initializer

```ruby
Bridgetown.configure do |config|
  # The rest of your site's configuration...

  init :bridgetown_jam_comments
    domain "your.domain.com"
    api_key "123-api-key"
    environment "production" # or "development" (optional)
  end
end
```

## Environment Variables

| Variable      | Syntax                     |
| ------------- | -------------------------- |
| `domain`      | `JAM_COMMENTS_DOMAIN`      |
| `api_key`     | `JAM_COMMENTS_API_KEY`     |
| `environment` | `JAM_COMMENTS_ENVIRONMENT` |

## In Your Config File

```yml
# bridgetown.config.yml
bridgetown_jam_comments:
  domain: "your.domain.com"
  api_key: "123-api-key"
  environment: "production" # or 'development' (optional)
```

## Usage

Place the `{% jam_comments %}` Liquid tag on the page you'd like comments to appear. Under the hood, the plugin uses `context["page"]["relative_url"]` to determine the page path, which will be used to associate your comment to a post.

```html
<div class="post">
  <!-- content... -->
</div>

{% jam_comments %}
```

### Contributions

The source for this plugin is open to contributions. If you have a bug fix or idea for improvement, leave a pull request or issue in the [GitHub repository](https://github.com/alexmacarthur/bridgetown-jam-comments).
