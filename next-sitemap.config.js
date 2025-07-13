/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://chiemelieokafor.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/404'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
} 