const { minify } = require("terser");

module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./_tmp/style.css");
  
    eleventyConfig.addPassthroughCopy({ "./_tmp/style.css": "./style.css" });
  
    eleventyConfig.addShortcode("version", function () {
        return String(Date.now());
    });

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
};