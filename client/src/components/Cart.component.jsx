import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../store/cart/cart.actions";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function Cart({ cartItems, getCartItems }) {
  const [cartItemsCount, setCartItemCount] = useState(0);
  useEffect(() => {
    const req = async () => {
      await getCartItems();
      let count = [];
      count = cartItems.map((item) => item.itemCount);
      if (count.length > 0) {
        count = count.reduce((num1, num2) => num1 + num2);
        setCartItemCount(count);
      }
    };
    req();
  }, []);
  useEffect(() => {
    let count = [];
    count = cartItems.map((item) => item.itemCount);
    if (count.length > 0) {
      count = count.reduce((num1, num2) => num1 + num2);
      setCartItemCount(count);
    }
  }, [cartItems]);
  console.log(cartItemsCount);
  return (
    <IconButton aria-label="cart">
      <StyledBadge
        badgeContent={cartItemsCount}
        sx={{ color: "whitesmoke", "&:hover": { color: "#336b87" } }}
      >
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}

function mapStateToProps({ cart }) {
  return { cartItems: cart.cartItems };
}

export default connect(mapStateToProps, actions)(Cart);
