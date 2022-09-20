const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/api/auth/google", "/api/auth/github"],
    createProxyMiddleware({
      target: "http://localhost:3001",
    })
  );
};
