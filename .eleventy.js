require("dotenv").config();

const htmlmin = require("html-minifier");
const path = require("path");
const mdIterator = require("markdown-it-for-inline");
const markdownIt = require("markdown-it");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");
const Image = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addWatchTarget("./assets");
  eleventyConfig.addPassthroughCopy("./assets");
  eleventyConfig.addPassthroughCopy("./favicon.ico");
  eleventyConfig.addPassthroughCopy("./robots.txt");
  eleventyConfig.addShortcode("version", function () {
    return String(Date.now());
  });

  // --- START, eleventy-img
  function imageShortcode(src, alt, sizes = "(min-width: 1024px) 100vw, 50vw") {
    console.log(`Generating image(s) from:  ${src}`);

    const formattedSrc = `${process.cwd()}/assets/img/${src}`;

    let options = {
      widths: [600, 900, 1500],
      formats: ["webp", "jpeg"],
      urlPath: "/optimized-images/",
      outputDir: "./_site/optimized-images/",
      filenameFormat: function (_id, src, width, format, _options) {
        const extension = path.extname(src)
        const name = path.basename(src, extension)
        return `${name}-${width}w.${format}`
      }
    }

    Image(formattedSrc, options);

    let imageAttributes = {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async",
    }

    metadata = Image.statsSync(formattedSrc, options)
    return Image.generateHTML(metadata, imageAttributes)
  }

  eleventyConfig.addShortcode("image", imageShortcode)

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

  return {
    markdownTemplateEngine: false
  }
};
