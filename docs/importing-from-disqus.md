---
layout: layout-page.njk
title: Importing from Disqus
description: How to migrate your blog post comments from Disqus to JamComments.
---

If you were previously a Disqus user before coming to JamComments, you won't be asked to totally abandon all of that sweet, written engagement with your content. Follow the steps below to migrate those comments into JamComments, and obtain the performance and SEO benefits statically-rendered HTML and no more creepy [data-mining tactics](https://techcrunch.com/2021/05/05/disqus-facing-3m-fine-in-norway-for-tracking-users-without-consent/).

## The Steps

### 1. Request an export from Disqus.

Navigate to the [Export page](http://disqus.com/admin/discussions/export/) in the Disqus Admin, and request that an XML export file be emailed to you.

{% image "disqus.jpeg", "" %}

For more details on this process, [see here](https://help.disqus.com/en/articles/1717164-comments-export).

### 2. Import into JamComments.

Once you have your XML export, log into the [JamComments Admin](https://app.jamcomments.com). Once logged in, go to `Sites > YOUR SITE > Import from Disqus`. Finally, upload the XML file and click "Upload." Once uploaded, the number of successfully imported comments will be shown, along with those that were skipped due to them being duplicates, and those that, for whatever reason failed.

## Things to Know

Due to Disqus and JamComments being fundamentally different platforms, there are a few disclaimers that need to be made regarding an import:

1. The email addresses of comment authors are not carried over. This means that after migrating, replying to a comment will not trigger an email notification, because it will not exist within JamComments.
2. Tags of other Disqus users will keep the "@" prefix and other formatting. For example, if "@billy-bobby" was tagged in a Disqus comment, that same "@billy-bobby" string will be preserved within JamComments.
3. HTML within comments will be preserved. Disqus allows [certain HTML tags](https://help.disqus.com/en/articles/1717235-what-html-tags-are-allowed-within-comments) to be used in comments. None of that HTML will be stripped out when migrating to JamComments.

## Issues or Questions?

If you run into any issues or questions about this process, [contact me](https://macarthur.me/contact)!
