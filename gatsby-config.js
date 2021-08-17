module.exports = {
  siteMetadata: {
    siteUrl: 'https://example.talusanalytics.com/',
    title: 'Talus Analytics',
    cookieConsent: {
      cookieMessage:
        'Talus sites use cookies to ensure you get the best experience possible.',
      buttonColor: 'rgb(15, 35, 75)',
      backgroundColor: '#edf2f2',
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        concurrency: 5,
        tables: [
          {
            baseId: `apptYPkeoCz0lSn19`,
            tableName: `Table 1`,
          },
        ],
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-mdx',
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `G-XXXXXXXXXX`,
        anonymize: true,
        head: false,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
}
