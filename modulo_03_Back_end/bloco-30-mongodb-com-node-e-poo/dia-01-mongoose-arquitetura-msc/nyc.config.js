// eslint-disable-next-line no-undef
module.exports = {
  "extends": "@istanbuljs/nyc-config-typescript",
  "include": [
    "src/glassesStore/models",
    "src/glassesStore/services",
    "src/glassesStore/controllers"
  ],
  "reporter": [
    "text",
    "text-summary",
    "json-summary",
    "html",
    "lcov"
  ],
}