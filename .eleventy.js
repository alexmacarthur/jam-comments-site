module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./_tmp/style.css");
  
    eleventyConfig.addPassthroughCopy({ "./_tmp/style.css": "./style.css" });
  
    eleventyConfig.addShortcode("version", function () {
        return String(Date.now());
    });
};