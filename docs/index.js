const basicInfo = require("./basicinfo.js");
const servers = require("./server");
const tags = require("./tags");
const components = require("./components.js");
const bookTable = require("./BookTable");

module.exports = {
  ...basicInfo,
  ...servers,
  ...tags,
  ...components,
  ...bookTable,
};
