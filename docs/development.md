---
layout: layout-page.njk
title: Local Development
---

To make the setup & customization of JamComments a little easier, some special behavior has been built-in while running your site in development mode.

## Rendering "Dummy" Comments

When you first get JamComments set up, you'll obviously have no real comments to render as you develop your site locally. This can be a particular challenge if you'd like to adjust the default CSS styles. To help with this, JamComments will render a list of "dummy" comments whenever the `NODE_ENV` environment is _not_ set to `production`.

## Quiet New Comment Submissions (Soon!)

When submitting a comment in development mode, JamComments will soon return a successful status message indicating the submission was successful, but will NOT persist those comments to your account or trigger a rebuild of your site.
