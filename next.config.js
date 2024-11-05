const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

module.exports = withNextra({
  async redirects() {
    return [
      {
        destination: "/evaluation",
        permanent: true,
        source: "/evaluation/installation",
      },
    ];
  },
});

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
