const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const CONFIG_FILE = 'post-process-config.json';
const DEFAULT_CONFIG = {
  postProcessEnable: false,
  destinationDirectory: '',
  formatHtml: false,
  webstormExecutablePath: 'webstorm64.exe'
};

function loadConfig() {
  if (fs.existsSync(CONFIG_FILE)) {
    const configData = fs.readFileSync(CONFIG_FILE, 'utf8');
    return JSON.parse(configData);
  } else {
    fs.writeFileSync(CONFIG_FILE, JSON.stringify(DEFAULT_CONFIG, null, 2));
    console.log(`Configuration file not found. Created a new one with default values: ${CONFIG_FILE}`);
    return DEFAULT_CONFIG;
  }
}

function copyFiles(srcDir, destDir) {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  fs.readdirSync(srcDir).forEach(file => {
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, file);

    if (fs.lstatSync(srcPath).isDirectory()) {
      copyFiles(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

function getWebStormFullPath(webstormPath) {
  if (path.isAbsolute(webstormPath)) {
    return webstormPath;
  } else {
    const webstormExecutable = path.basename(webstormPath);
    const pathDirs = process.env.PATH.split(path.delimiter);
    for (const dir of pathDirs) {
      const webstormFullPath = path.join(dir, webstormExecutable);
      if (fs.existsSync(webstormFullPath)) {
        return webstormFullPath;
      }
    }
    return null;
  }
}

function checkWebStormPath(webstormPath) {
  const webstormFullPath = getWebStormFullPath(webstormPath);
  if (webstormFullPath) {
    console.log('WebStorm path is valid.');
    return true;
  } else {
    console.error('WebStorm is not installed or not available in PATH.');
    return false;
  }
}

function formatHtmlFiles(directory, webstormPath) {
  fs.readdirSync(directory).forEach(file => {
    const filePath = path.join(directory, file);
    if (path.extname(file).toLowerCase() === '.html') {
      const command = `"${webstormPath}" format -allowDefaults "${filePath}"`;
      try {
        execSync(command, { stdio: 'inherit' });
        console.log(`Formatted file: ${filePath}`);
      } catch (error) {
        console.error(`Error formatting file ${filePath}: ${error.message}`);
      }
    }
  });
}

async function main() {
  const config = loadConfig();

  if (config.postProcessEnable && config.destinationDirectory) {
    const srcDir = '_site';
    const destDir = config.destinationDirectory;
    copyFiles(srcDir, destDir);
    console.log(`Post-processing completed. Files copied to: ${destDir}`);

    if (config.formatHtml && config.webstormExecutablePath) {
      const webstormPath = getWebStormFullPath(config.webstormExecutablePath);
      if (webstormPath) {
        console.log(`WebStorm path: ${webstormPath}`);
        await formatHtmlFiles(destDir, webstormPath);
      } else {
        console.error('WebStorm is not installed or not available in PATH.');
      }
    } else {
      console.log('HTML formatting is disabled or WebStorm executable path is not set.');
    }
  } else {
    console.log('Post-processing is disabled or destination directory is not set.');
  }
}

main().catch(error => {
  console.error('An error occurred during post-processing:', error);
});