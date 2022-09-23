import Button, { BUTTON_TYPE_CLASSES } from "./Button.component";
import * as actions from "../store/cart/cart.actions";
import { connect } from "react-redux";
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
  console.log("item", item);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        border: "1px solid black",
        height: "50px",
      }}
    >
      <div style={{ flexGrow: "3" }}>{item.itemName}</div>

      <div style={{ flexGrow: "2" }}>
        <RemoveCircleOutlineIcon
          sx={{ "&:hover": { color: "#763626" } }}
          onClick={() => handleRemoveToCart()}
        />
        {item.itemCount}

        <AddCircleOutlineIcon
          sx={{ "&:hover": { color: "#336b87" } }}
          onClick={() => handleAddToCart()}
        />
      </div>
    </div>
  );
}

export default connect(null, actions)(CartItems);
