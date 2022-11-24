---
layout: layout-page.njk
title: Getting Started
---

In order to get up & running with JamComments, you'll need to do the following:

## Creating an Account

To do so, use the button in the navigation above, or navigate to the [JamComments application](http://go.jamcomments.com/). Signing up for an account is **free**, but you'll be limited one site and be able to collect a maximum of 10 comments. If you'd like to collect comments beyond that, you'll need to sign up for a paid account.

Subscriptions are managed by [Stripe](https://stripe.com). No sensitive payment information is stored within the application.

## Creating a Site

After logging into the [dashboard](https://go.jamcomments.com), head to the ["Sites" page](https://go.jamcomments.com/sites) and create a new one. Free plans can create one site, but if you need more, consider upgrading to premium plan.

## Adding a Webhook

If you'd like to trigger a new build for your site after a new comment has been collected and approved, you can do so on your site's settings page, found at `Sites > Your Site Name > Webhooks`. Most of the popular Jamstack hosts provide this feature out-of-the-box, including [Vercel](https://vercel.com/docs/more/deploy-hooks) and [Netlify](https://docs.netlify.com/configure-builds/build-hooks/).

## Enabling Auto-Approval (optional)

By default, new comments will not be automatically approved and published. If you'd like to do so, you can toggle on auto-approval by navigating to your site's settings page at `Sites > Your Site Name`.

## Generating an API Key

Your site will need this in order to create new comments after they're submitted. To generate a key, navigate to your [Account Settings](https://go.jamcomments.com/settings) and scroll down to the "API Token" section. There, you'll be able to generate a fresh key or replace an existing one.
