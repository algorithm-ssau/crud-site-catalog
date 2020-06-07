import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app: any) {
  app.use(
    createProxyMiddleware("/products/create", {
      target: "https://buoyant-habitat-279114.df.r.appspot.com",
      changeOrigin: true,
      secure: false
    })
  );
};
