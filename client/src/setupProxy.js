const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    [
      "/api",
      "/api/auth/google",
      "/api/auth/github",
      "/api/payment/orders",
      "/api/payment/verify",
    ],
    createProxyMiddleware({
      target: "http://localhost:3001",
    })
  );
};
