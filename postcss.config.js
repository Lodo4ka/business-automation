const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    require("tailwindcss")("tailwind.js"),
    require("autoprefixer")(),
    process.env.NODE_ENV === "production"
      ? purgecss({
          content: ["./src/**/*.html", "./src/**/*.vue"],
          defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
        })
      : ""
  ]
};
