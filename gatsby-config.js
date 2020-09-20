const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")

const { theme } = resolveConfig(tailwindConfig)

module.exports = {
  siteMetadata: {
    title: "Outcast Trading",
    author: "ebox86#5335",
    description: "Homepage for Outcast Trading",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Outcast Trading",
        short_name: "Outcast Trading",
        start_url: "/",
        background_color: theme.colors.white,
        theme_color: theme.colors.red[700],
        icon: "static/favicon.svg",
        },
      },
      "gatsby-plugin-postcss",
      {
        resolve: "gatsby-plugin-purgecss",
        options: {
          tailwind: true,
          purgeOnly: ["src/css/tailwind.css"],
        },
      },
      "gatsby-plugin-typescript"
  ],
}
