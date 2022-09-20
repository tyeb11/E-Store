import axios from "axios";
import login from "../middleware/login.js";
import { User } from "../model/user.js";

export default (app) => {
  app.post("/api/add-cart-item", login, async (req, res) => {
    try {
      const { cartID } = req.body;

      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${cartID}`
      );
      const data = await response.data;
      const id = data.id;
      const name = data.title;

      let cart = await User.findOne({ _id: req.user._id }, { cart: 1, _id: 0 });

      let cartExist = cart.cart.find((item) => item.itemID === id);

      if (cartExist) {
        User.updateOne(
          {
            _id: req.user._id,
            cart: {
              $elemMatch: { itemID: id },
            },
          },
          {
            $inc: { "cart.$.itemCount": 1 },
          }
        ).exec();
        cart = await User.findOne({ _id: req.user._id }, { cart: 1, _id: 0 });
        req.user.cart = cart.cart;
        return res.send(cart.cart);
      } else {
        await User.findByIdAndUpdate(
          { _id: req.user._id },
          {
            $push: {
              cart: {
                itemID: id,
                itemName: name,
                itemCount: 1,
                itemDate: Date.now(),
              },
            },
          }
        ).save();
        cart = await User.findOne({ _id: req.user._id }, { cart: 1, _id: 0 });
        req.user.cart = cart.cart;
        return res.send(cart.cart);
      }
    } catch (e) {
      return res.send({ error: "product not available in store" });
    }
  });
  app.get("/api/cart", login, async (req, res) => {
    try {
      let cart = await User.findOne({ _id: req.user._id }, { cart: 1, _id: 0 });
      return res.send(cart.cart);
    } catch (e) {
      return res.status(404).send({ error: "can not get cart" });
    }
  });
  app.delete("/api/remove-cart-item", login, async (req, res) => {
    try {
      const { cartID } = req.body;

      let cart = await User.findOne({ _id: req.user._id }, { cart: 1, _id: 0 });
      let existingItem = cart.cart.filter((item) => item.itemID === cartID);
      if (existingItem[0].itemCount <= 1) {
        User.updateOne(
          {
            _id: req.user._id,
          },
          { $pull: { cart: { itemID: cartID } } }
        ).exec();
        cart = await User.findOne({ _id: req.user._id }, { cart: 1, _id: 0 });
        req.user.cart = cart.cart;
        return res.send(cart.cart);
      } else {
        User.updateOne(
          {
            _id: req.user._id,
            cart: {
              $elemMatch: { itemID: cartID },
            },
          },
          {
            $inc: { "cart.$.itemCount": -1 },
          }
        ).exec();
        cart = await User.findOne({ _id: req.user._id }, { cart: 1, _id: 0 });
        req.user.cart = cart.cart;
        return res.send(cart.cart);
      }
    } catch (e) {
      return res.status(404).send({ error: "product not available in store" });
    }
  });
  app.delete("/api/cart", login, async (req, res) => {
    try {
      User.updateOne({ _id: req.user._id }, { $set: { cart: [] } }).exec();
      let cart = await User.findOne({ _id: req.user._id }, { cart: 1, _id: 0 });
      req.user.cart = cart.cart;
      return res.send(cart.cart);
    } catch (e) {
      return res.status(404).send({ error: "can not delete cart" });
    }
  });
};
