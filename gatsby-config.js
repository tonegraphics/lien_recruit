module.exports = {
  siteMetadata: {
    title: `りあん RECRUIT`,
    description: `飯塚市・嘉麻市にて児童発達支援や放課後等デイサービスを行う株式会社Lienの求人情報サイトです。`,
    author: `Hayato OKUMA & Taiga KIYOKAWA`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `lien_recruit`,
        short_name: `lien`,
        start_url: `/`,
        background_color: `#F2F2F2`,
        theme_color: `#83D0ED`,
        display: `minimal-ui`,
        icon: `src/images/lien-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
