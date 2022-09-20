import login from "../middleware/login.js";
import axios from "axios";

export default (app) => {
  app.get("/api/store/categories", login, async (req, res) => {
    //res.send(req.user);
    try {
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/categories?offset=${req.query.skip}&limit=10`
      );
      const data = await response.data;
      res.send(data);
    } catch (e) {
      return res.send({ error: "bad request" });
    }
  });

  app.get("/api/store/categories/:id/products", login, async (req, res) => {
    try {
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/categories/${req.params.id}/products?offset=${req.query.skip}&limit=10`
      );
      const data = response.data;
      res.send(data);
    } catch (e) {
      return res.send({ error: "bad request" });
    }
  });

  app.get("/api/store/product/:id", login, async (req, res) => {
    try {
      const response = await axios.get(
        ` https://api.escuelajs.co/api/v1/products/${req.params.id}`
      );
      const data = await response.data;
      res.send(data);
    } catch (e) {
      return res.send({ error: "bad request" });
    }
  });
};
