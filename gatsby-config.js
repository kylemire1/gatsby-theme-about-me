module.exports = ({
  contentPath,
  basePath = "/",
  contactLink = "",
  shortBio = "This is a short bio"
}) => ({
  siteMetadata: {
    contactLink: contactLink,
    shortBio: shortBio
  },
  plugins: [
    `gatsby-theme-ui`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${contentPath}`
      }
    }
  ]
});
