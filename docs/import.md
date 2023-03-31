---
layout: layout-page.njk
title: Importing Comments
---

You can import your comments by uploading a CSV file on the [import page](https://go.jamcomments/settings/import) within the JamComments dashboard. Currently, you can import comments only from WordPress, but Disqus will eventually be supported as well.

## Importing from WordPress

In order import comments from WordPress, you'll need to create a CSV export from the following query. It's largely just the contents of the `wp_comments` table, joined with the `wp_posts` table to access the post slugs.

The following query **assumes** your table prefix is `wp_`:

```sql
SELECT wp_comments.*, wp_posts.post_name
FROM wp_comments
JOIN wp_posts ON wp_posts.id = wp_comments.comment_post_id;
```

**Important!** The `post_name` value will be treated as the full path of your post. If the posts on your destination use a slightly different path (ex: they start with `/posts/*`), this column will need to be modified to match that new path exactly. Otherwise, comments will not render correctly after the migration.

After exporting to a CSV file, select the "WordPress" platform option and uploaded it:

![WordPress Import Form](/assets/img/wordpress-import.png)

After the import process is complete, you'll be shown how many comments were imported, as well as if any duplicate comments were skipped.

## Have Issues?

[Let me know!](https://macarthur.me/contact) Importing comments is a relatively new feature, and so I'm especially happy to help work through any issues that arise.
