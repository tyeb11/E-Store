import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FiMenu } from "react-icons/fi";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "./Button.component";
import { FiLogIn } from "react-icons/fi";
import { connect } from "react-redux";
import * as actions from "../store/modal/modal.actions";
import { BUTTON_TYPE_CLASSES } from "./Button.component";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart.component";
import Avatar from "./Avatar.componenet";

function Header(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const drawerWidth = 240;

  let navItems = [];
  if (props.current_user.id) {
    navItems = ["About", "Cart", "User"];
  } else {
    navItems = ["Sign in"];
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{ my: 2, cursor: "pointer" }}
        onClick={() => handleStore()}
      >
        E-Store
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => {
          if (item === "Sign in") {
            return (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  onClick={() => handleSignInModal()}
                  sx={{ textAlign: "center" }}
                >
                  <ListItemText primary={item} />
                  <FiLogIn />
                </ListItemButton>
              </ListItem>
            );
          } else if (item === "About") {
            return (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  onClick={() => handleAbout()}
                  sx={{ textAlign: "center" }}
                >
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            );
          } else if (item === "Cart") {
            return (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  onClick={() => handleAbout()}
                  sx={{ textAlign: "center" }}
                >
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            );
          } else if (item === "User") {
            return (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  onClick={() => handleAbout()}
                  sx={{ textAlign: "center" }}
                >
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            );
          }
        })}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleSignInModal = () => {
    console.log("Hello");
    props.toggleSignInModal(!props.sign_in_modal);
  };
  const handleCartModal = () => {
    console.log("Hello");
    props.toggleCartModal(!props.cart_modal);
  };
  const handleUserModal = () => {
    console.log("Hello");
    props.toggleUserModal(!props.user_modal);
  };
  const handleAbout = () => {
    navigate("/about");
  };
  const handleStore = () => {
    navigate("/store");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ backgroundColor: "#2a3132" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <FiMenu />
          </IconButton>
          <Typography
            onClick={() => handleStore()}
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              cursor: "pointer",
              display: { xs: "none", sm: "block" },
            }}
          >
            E-Store
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => {
              if (item === "Sign in") {
                return (
                  <Button
                    buttonType={BUTTON_TYPE_CLASSES.signIn}
                    onClick={() => handleSignInModal()}
                  >
                    {item}
                  </Button>
                );
              } else if (item === "About") {
                return (
                  <Button
                    buttonType={BUTTON_TYPE_CLASSES.header}
                    onClick={() => handleAbout()}
                  >
                    {item}
                  </Button>
                );
              } else if (item === "Cart") {
                return (
                  <IconButton onClick={() => handleCartModal()}>
                    <Cart />
                  </IconButton>
                );
              } else if (item === "User") {
                return (
                  <IconButton
                    onClick={() => handleUserModal()}
                    sx={{ p: 0, marginLeft: "30px" }}
                  >
                    <Avatar />
                  </IconButton>
                );
              }
            })}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

function mapStateToProps({ modal, user }) {
  return {
    sign_in_modal: modal.sign_in_modal,
    cart_modal: modal.cart_modal,
    user_modal: modal.user_modal,
    current_user: user.current_user,
  };
}

export default connect(mapStateToProps, actions)(Header);
