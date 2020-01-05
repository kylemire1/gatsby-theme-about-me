const fs = require("fs");
const path = require("path");

exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || "content";

  if (!fs.existsSync(contentPath)) {
    reporter.info(`Creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};

exports.onCreateNode = ({ node, actions }) => {
  if (node.internal.type !== "MarkdownRemark") return;

  const relativePath = path
    .relative(__dirname, node.fileAbsolutePath)
    .replace(/\\+/g, "/");

  actions.createNodeField({
    node,
    name: "fileRelativePath",
    value: relativePath
  });
};

exports.createPages = async ({ actions, reporter }, options) => {
  const basePath = options.basePath || "/";

  reporter.info(`Creating the About Me page at path: ${basePath}`);

  actions.createPage({
    path: basePath,
    component: require.resolve("./src/templates/about-me.js"),
    context: {
      glob: `/${options.contentPath}/*.md`
    }
  });
};
