import { connect } from "react-redux";
import * as actions from "../../store/modal/modal.actions";
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
import {
  style,
  cancelContainer,
  buttonContainer,
  headingContainer,
} from "../../styles/SignInModal.styles";

function TransitionsModal(props) {
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
            <Box sx={buttonContainer}></Box>

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

function mapStateToProps({ modal }) {
  return {
    sign_in_modal: modal.sign_in_modal,
    cart_modal: modal.cart_modal,
    user_modal: modal.user_modal,
  };
}

export default connect(mapStateToProps, actions)(TransitionsModal);
