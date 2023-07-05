require("dotenv").config();

const htmlmin = require("html-minifier");
const mdIterator = require("markdown-it-for-inline");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const lazyLoading = require('markdown-it-image-lazy-loading');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addWatchTarget("./assets");
  eleventyConfig.addPassthroughCopy("./assets");
  eleventyConfig.addPassthroughCopy("./favicon.ico");
  eleventyConfig.addPassthroughCopy("./robots.txt");
  eleventyConfig.addShortcode("version", function () {
    return String(Date.now());
  });

  eleventyConfig.addFilter("isOnPage", function (path, pageUrl) {
    const removeLeadingAndTrailingSlashes = (str) => str.replace(/^\/|\/$/g, '');

    const slashLessPath = removeLeadingAndTrailingSlashes(path);
    const slashLessPageUrl = removeLeadingAndTrailingSlashes(pageUrl);

    return slashLessPath === slashLessPageUrl;
  });

  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://jamcomments.com",
    },
  });

  // minify HTML
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });

      return minified;
    }

    return content;
  });

  const markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  })
  .use(lazyLoading, { decoding: true })
  .use(mdIterator, "url_new_win", "link_open", function (tokens, idx) {

    console.log(tokens[idx].attrs)

    const [, href] = tokens[idx].attrs.find(
      (attr) => attr[0] === "href"
    );

    if (
      href &&
      !href.includes("jamcomments") &&
      !href.includes("localhost") &&
      !href.startsWith("/") &&
      !href.startsWith("#")
    ) {
      tokens[idx].attrPush(["target", "_blank"]);
      tokens[idx].attrPush(["rel", "noopener noreferrer"]);
    }
  });

  eleventyConfig.setLibrary("md", markdownLibrary);
  eleventyConfig.amendLibrary("md", mdLib => mdLib.use(markdownItAnchor));

  return {
    markdownTemplateEngine: false
  }
};
