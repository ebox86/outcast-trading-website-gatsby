const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")

const { theme } = resolveConfig(tailwindConfig)

module.exports = {
  siteMetadata: {
    title: "Outcast Trading",
    author: "evan kohout",
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
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
  ],
}
