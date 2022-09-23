import { connect } from "react-redux";
import * as actions from "../../store/modal/modal.actions";
import * as action from "../../store/user/user.actions";
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
import LogoutIcon from "@mui/icons-material/Logout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TransitionsModal(props) {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await axios.post("/api/auth/logout");
    navigate("/");
    props.removeUser();
    props.toggleUserModal(!props.user_modal);
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
  console.log("user", props.username);

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
                {props.username}
              </Typography>
            </Box>
            <Box sx={buttonContainer}>
              <Button
                startIcon={<LogoutIcon />}
                buttonType={BUTTON_TYPE_CLASSES.logout}
                onClick={() => handleLogout()}
              >
                Sign out
              </Button>
            </Box>
            <Box sx={{ marginBottom: "10px", textAlign: "center" }}>
              <Typography component="div" variant="h6">
                Stay sign in to keep shopping
              </Typography>
            </Box>
            <Box sx={cancelContainer}>
              <Button
                buttonType={BUTTON_TYPE_CLASSES.invcancel}
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

function mapStateToProps({ modal, user }) {
  return {
    sign_in_modal: modal.sign_in_modal,
    cart_modal: modal.cart_modal,
    user_modal: modal.user_modal,
    username: user.current_user.name,
  };
}

export default connect(mapStateToProps, { ...actions, ...action })(
  TransitionsModal
);
