---
layout: layout-page.njk
title: Importing Comments from Disqus
---

If you've been using Disqus for hosting your comments up until now, you're in luck! You can bring them all over to JamComments.

## Requesting an XML Export

Before importing comments from Disqus, you'll need to export them as an XML file. To do this, log into Disqus, select the site from which you'd like to export comments, and navigate to the "Moderation" page, and then select "Export" in the sidebar (this page should be located at https://your-site.disqus.com/admin/discussions/export).

On this page, request an export and wait for Disqus to send you an email with further instructions. After queuing an export, you should see something like this:

![](/assets/img/disqus-moderation-export.png)

For more information on this process, [see here](https://help.disqus.com/en/articles/1717164-comments-export).

## Uploading & Importing Disqus Comments

After downloading the XML export of your comments, navigate to the "Import from Disqus" page in [the JamComments admin](https://go.jamcomments.com/settings/import/disqus).

<video src="/assets/video/disqus-import-demo.mp4" autoplay controls></video>

## About Imported Comments

A few notes about the comments you'll be importing:

- All imported comments will be marked as approved by default.
- If you attempt to import the same comment twice (determined by matching content, author, and site), it will be skipped.
- All nesting relationships will be preserved between comments.

## Have Issues?

[Let me know!](https://macarthur.me/contact)
