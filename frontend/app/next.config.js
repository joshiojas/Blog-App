const { hostname } = require("os");
const path = require("path");

module.exports = {
  images: {
    remotePatterns: [
      {
        hostname: "source.unsplash.com",
        port: "",
        pathname: "**",
      },
      {
        hostname: "images.unsplash.com",
        port: "",
        pathname: "**",
      },
      {
        hostname: "*",
        port: "",
        pathname: "**",
      },
    ],
  },
};
