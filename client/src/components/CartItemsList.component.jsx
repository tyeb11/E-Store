import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import CartItems from "./CartItems.component";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import * as actions from "../store/cart/cart.actions";

function CartItemsList({ cart }) {
  const [cartItems, setCartItems] = useState(cart);
  useEffect(() => {
    setCartItems(cart);
  }, [cart]);
  return (
    <Box sx={{ marginTop: "10px" }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        {cartItems.map((item) => (
          <CartItems item={item} />
        ))}
      </Grid>
    </Box>
  );
}

function mapStateToProps({ cart }) {
  return { cart: cart.cartItems };
}

export default connect(mapStateToProps, actions)(CartItemsList);
