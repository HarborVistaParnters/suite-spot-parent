/** @link https://www.11ty.dev/docs/config/ */
// import { shortcodes } from "./src/lib/shortcodes/index.js";
// import { filters } from "./src/lib/filters/index.js";

/** @param {import("@11ty/eleventy").UserConfig} config */
export default function (config) {
    /** Liquid Template Settings */
    config.setLayoutResolution(false);
    config.setLiquidOptions({ jsTruthy: true, dynamicPartials: true });

    /** Passthrough directories */
    config.addPassthroughCopy({ "src/static": "/" });

    /** Plugins */
    /** Shortcodes */
    // for (const key in shortcodes) {
    //     if (shortcodes.hasOwnProperty(key)) {
    //         config.addShortcode(key, shortcodes[key]);
    //     }
    // }

    /** Filters */
    // for (const key in filters) {
    //     if (filters.hasOwnProperty(key)) {
    //         config.addFilter(key, filters[key]);
    //     }
    // }

    return {
        dir: {
            input: "src",
        },
        templateFormats: ["html", "liquid", "md", "11ty.js"],
        htmlTemplateEngine: "liquid",
        markdownTemplateEngine: "liquid",
    };
}
