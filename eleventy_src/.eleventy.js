const { spawn } = require('child_process');
const path = require('path');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});
  
  // HTML ファイルをテンプレートとして認識させる
  eleventyConfig.addTemplateFormats("html");

  eleventyConfig.on('eleventy.after', async () => {
    console.log('Running custom script...');
    await runScript('node', [path.join(__dirname, 'custom_scripts', 'post-process.js')]);
    console.log('Custom script finished.');
  });

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

function runScript(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: 'inherit' });
    child.on('close', code => {
      if (code !== 0) {
        reject(new Error(`Custom script exited with code ${code}`));
      } else {
        resolve();
      }
    });
  });
}