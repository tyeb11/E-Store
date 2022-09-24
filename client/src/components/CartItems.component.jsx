import Button, { BUTTON_TYPE_CLASSES } from "./Button.component";
import * as actions from "../store/cart/cart.actions";
import { connect } from "react-redux";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function CartItems({ item, removeCartItem, addCartItem }) {
  const handleAddToCart = () => {
    console.log("add to cart");
    addCartItem(item.itemID);
  };
  const handleRemoveToCart = () => {
    console.log("add to cart");
    removeCartItem(item.itemID);
  };
  return (
    <Stack direction="row" spacing={5} justifyContent="space-between">
      <Typography variant="h6" component="h2" sx={{ width: "270px" }}>
        {item.itemName}
      </Typography>
      <Stack
        direction="row"
        spacing={1}
        justifyContent="space-between"
        alignItems="center"
      >
        <RemoveCircleOutlineIcon
          onClick={() => handleRemoveToCart()}
          sx={{ "&:hover": { color: "#763626" } }}
        />
        <Typography variant="h6" component="h2">
          {item.itemCount}
        </Typography>
        <AddCircleOutlineIcon
          onClick={() => handleAddToCart()}
          sx={{ "&:hover": { color: "#336b87" } }}
        />
      </Stack>
    </Stack>
  );
}

export default connect(null, actions)(CartItems);
