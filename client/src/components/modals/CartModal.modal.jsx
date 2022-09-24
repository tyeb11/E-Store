import { connect } from "react-redux";
import * as actions from "../../store/modal/modal.actions";
import * as action from "../../store/cart/cart.actions";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "../Button.component";
import { BUTTON_TYPE_CLASSES } from "../Button.component";
import { BsGoogle } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { Typography } from "@mui/material";
import axios from "axios";
import {
  style,
  cancelContainer,
  buttonContainer,
  headingContainer,
  cartContainer,
} from "../../styles/SignInModal.styles";
import CartItemList from "../CartItemsList.component";
import Stack from "@mui/material/Stack";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TransitionsModal(props) {
  const [total, setTotal] = useState([]);
  const navigate = useNavigate();
  const initPayment = (data) => {
    const options = {
      key: "rzp_test_rqPQ3XfvWvefZV",
      amount: total,
      currency: data.currency,

      description: "Test Transaction by E-Store",

      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = "/api/payment/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
          if (data.message === "Payment verified successfully") {
            await axios.delete("/api/cart");
            //window.location = "/store";
            props.toggleSuccessModal(!props.success_modal);
          }
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#2a3132",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
    try {
      const orderUrl = "/api/payment/orders";
      const { data } = await axios.post(orderUrl, { amount: total });
      console.log(data);
      initPayment(data.data);
      handleModal();
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogle = () => {
    window.location = "/api/auth/google";
  };
  const handleGithub = () => {
    window.location = "/api/auth/github";
  };
  const handleModal = () => {
    if (props.sign_in_modal) {
      props.toggleSignInModal(!props.sign_in_modal);
    } else if (props.cart_modal) {
      props.toggleCartModal(!props.cart_modal);
    } else {
      props.toggleUserModal(!props.user_modal);
    }
  };
  useEffect(() => {
    if (props.cart.length !== 0) {
      const subTotal = props.cart.map(
        ({ itemPrice, itemCount }) => itemCount * itemPrice
      );
      console.log(subTotal);
      setTotal(subTotal.reduce((num1, num2) => num1 + num2));
    }
  }, [props.cart]);

  const handleCheckout = async () => {
    await handlePayment();
    handleModal();
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={true}
        onClose={() => handleModal()}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={true}>
          <Box sx={style}>
            <Box sx={headingContainer}>
              <Typography component="div" variant="h3">
                Cart
              </Typography>
            </Box>
            <Box sx={cartContainer}>
              {props.cart.length === 0 && (
                <Typography
                  sx={{ color: "#763626" }}
                  component="h2"
                  variant="h6"
                >
                  Cart is Empty
                </Typography>
              )}
              <CartItemList />
            </Box>
            {props.cart.length !== 0 && (
              <Stack
                direction="row"
                spacing={1}
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  padding: "20px",
                  borderTop: "1px solid black",
                  width: "100%",
                }}
              >
                <Typography variant="h5" component="h2">
                  ${total}
                </Typography>
                <Button
                  onClick={() => handleCheckout()}
                  buttonType={BUTTON_TYPE_CLASSES.checkout}
                >
                  Checkout
                </Button>
              </Stack>
            )}

            <Box sx={cancelContainer}>
              <Button
                buttonType={BUTTON_TYPE_CLASSES.cancel}
                onClick={() => handleModal()}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

function mapStateToProps({ modal, cart }) {
  return {
    sign_in_modal: modal.sign_in_modal,
    cart_modal: modal.cart_modal,
    user_modal: modal.user_modal,
    cart: cart.cartItems,
    success: modal.success_modal,
  };
}

export default connect(mapStateToProps, { ...actions, ...action })(
  TransitionsModal
);
