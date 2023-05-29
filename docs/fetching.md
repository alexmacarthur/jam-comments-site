---
layout: layout-page.njk
title: Fetch Options
---

Regardless of the language and integration you're using, the process of fetching comments for a page accepts a certain number of options.

### `domain`

The domain for your site as [configured in your account](https://go.jamcomments.com/sites). Don't include the protocol ("https").

### `api_key`

The API key generated in [your account settings](https://go.jamcomments.com/settings).

### `environment`

Setting this to anything other than "production" will enable [development mode](https://jamcomments.com/docs/development), rendering dummy comments and accepting quiet comment submissions.

### `tz`

By default, comment dates will be formatted from UTC timestamps as stored in the database. This can sometimes mean that the rendered date may be different from when the comment was submitted relative to your local date. The `tz` option exists for you to specify how those dates will be formatted.

Any valid [timezone identifier](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) is accepted. For example, if "America/Chicago" is passed, dates will be formatted according to the timezone of someone living in Nashville, TN. Or Chicago, obviously.
