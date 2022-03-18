const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { DateTime } = require("luxon");
const svgContents = require("eleventy-plugin-svg-contents");

//
// 11ty Image 
//
const Image = require("@11ty/eleventy-img");
async function imageShortcode(data = {}) {

  const format = data.format ? data.format : null;
  const size = data.size ? data.size : null;
  const src = String(data.src);
  const alt = data.alt ? data.alt : "";
  const sizes = data.sizes ? data.sizes : null;
  const loading = data.loading ? data.loading : "lazy"; // eager|lazy
  const decoding = data.decoding ? data.decoding : "async"; // sync|async
  const cls = data.cls ? data.cls : "";

  let meta = await Image(src, {
    widths: [size],
    formats: ["webp", format],
  });

  let attr = {
    alt,
    sizes,
    class: cls,
    loading: loading,
    decoding: decoding,
  };

  return Image.generateHTML(meta, attr);

}

//
//  Config
//
module.exports = function(eleventyConfig) {

  // Passthrough copy files and watch targets
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("./src/assets/script.js");
  eleventyConfig.addPassthroughCopy("./src/assets/images/");
  eleventyConfig.addPassthroughCopy("./src/assets/portfolio/");
  // watch targets
  eleventyConfig.addWatchTarget("./src/assets/");
  eleventyConfig.addWatchTarget('./tailwind.config.js');

  /**
   * Eleventy Navigation
   * @example
   * {% set navPages = collections.all | eleventyNavigation %}
   * {% for item in navPages %}...{% endfor %}
   */
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  /**
   *  Eleventy Image Shortcode
   *  @param {string} src - Image path / url
   *  @param {string} alt - Image alt text
   *  @param {string} size - Image size 
   *  @param {string} format - Image format (jpg, png...)
   *  @param {string} sizes - Image sizes: (min-width: 30em) 50vw, 100vw
   *  @example {% image {src: "my_image.jpg", size: "46", format: "png"...} %}
   */
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addJavaScriptFunction("image", imageShortcode);

  /**
   *  SVG contents Plugin
   *  @example  {{ "my_icon.svg" | svgContents("my-svg-class") | safe }}
   */
  eleventyConfig.addPlugin(svgContents);

  /**
   * Buster
   * Add timestamp at the end of the filename.
   * Used to bust browser cache for css and js files
   * @example {{ '/assets/script.js' | buster }}
   */
  eleventyConfig.addFilter("buster", function(value) {
    return value + "?" + Date.now();
  });

  /**
   * Get the base url eg: /blog/post/ => /blog/
   * @example {{ page.url | baseUrl }}
   * @use Used this to add active classes on "parent" element
   * @see navbar.njk
   */
  eleventyConfig.addFilter("baseUrl", function(value) {
    if(!typeof value === "string") return;
    let array = value.split("/");
    if(!array[2]) return value;
    let baseURL = array[1];
    return `/${baseURL}/`;
  });

  /**
   * Year Shortcode
   * @example {% year %}
   */
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };

}