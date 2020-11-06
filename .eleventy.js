require("dotenv").config();

const { minify } = require("terser");
const CleanCSS = require("clean-css");
const htmlmin = require("html-minifier");
const mdIterator = require("markdown-it-for-inline");
const markdownIt = require("markdown-it");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addWatchTarget("./assets");
  eleventyConfig.addPassthroughCopy("./assets");
  eleventyConfig.addShortcode("version", function () {
    return String(Date.now());
  });

  eleventyConfig.addFilter("isOnPage", function (path, pageUrl) {
    const removeLeadingAndTrailingSlashes = (str) => str.replace(/^\/|\/$/g, '');

    const slashLessPath = removeLeadingAndTrailingSlashes(path);
    const slashLessPageUrl = removeLeadingAndTrailingSlashes(pageUrl);

    return slashLessPath === slashLessPageUrl;
  });

  // minify JavaScript
  eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (
    code,
    callback
  ) {
    try {
      const minified = await minify(code);
      callback(null, minified.code);
    } catch (err) {
      console.error("Terser error: ", err);
      callback(null, code);
    }
  });

  // minify CSS
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
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
  }).use(mdIterator, "url_new_win", "link_open", function (tokens, idx) {
    const [attrName, href] = tokens[idx].attrs.find(
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
};
