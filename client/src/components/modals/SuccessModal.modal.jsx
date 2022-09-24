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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  style,
  cancelContainer,
  buttonContainer,
  headingContainer,
} from "../../styles/SignInModal.styles";

function SuccessModal(props) {
  const handleModal = () => {
    if (props.sign_in_modal) {
      props.toggleSignInModal(!props.sign_in_modal);
    } else if (props.cart_modal) {
      props.toggleCartModal(!props.cart_modal);
    } else if (props.success_modal) {
      props.toggleSuccessModal(!props.success_modal);
    } else {
      props.toggleUserModal(!props.user_modal);
    }
    window.location = "/store";
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
            <Box>
              <CheckCircleIcon
                sx={{ color: "green", width: "100px", height: "100px" }}
              />
            </Box>
            <Box>
              <Typography component="h2" variant="h6">
                It Was a Pleasure Doing Business with You
              </Typography>
            </Box>
            <Box sx={cancelContainer}>
              <Button
                onClick={() => handleModal()}
                buttonType={BUTTON_TYPE_CLASSES.invcancel}
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
    success_modal: modal.success_modal,
  };
}

export default connect(mapStateToProps, actions)(SuccessModal);
