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
  const handleModal = () =>
    props.sign_in_modal
      ? props.toggleSignInModal(!props.sign_in_modal)
      : props.toggleCartModal(!props.cart_modal);

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
                Sign in
              </Typography>
            </Box>
            <Box sx={buttonContainer}>
              <Button
                startIcon={<BsGoogle />}
                buttonType={BUTTON_TYPE_CLASSES.google}
                onClick={() => handleGoogle()}
              >
                Google
              </Button>
              <Button
                startIcon={<BsGithub />}
                buttonType={BUTTON_TYPE_CLASSES.github}
                onClick={() => handleGithub()}
              >
                Github
              </Button>
            </Box>
            <Box sx={{ marginBottom: "10px", textAlign: "center" }}>
              <Typography component="div" variant="h6">
                Sign in to enter our store
              </Typography>
            </Box>
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
  return { sign_in_modal: modal.sign_in_modal, cartmodal: modal.cart_modal };
}

export default connect(mapStateToProps, actions)(TransitionsModal);
