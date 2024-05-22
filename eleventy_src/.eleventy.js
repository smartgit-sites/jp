module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});
  
  // HTML ファイルをテンプレートとして認識させる
  eleventyConfig.addTemplateFormats("html");

  return {
    dir: {
      input: "src",
      includes: "includes",
      output: "_site"
    },
    // ファイル名をそのまま維持する
    htmlTemplateEngine: "njk",
    permalinkNaming: "unchanged"
  };
};