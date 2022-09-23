import "../styles/Button.styles";
import {
  BaseButton,
  SignInButton,
  GoogleSignInButton,
  GithubSignInButton,
  CancelButton,
  AddItemButton,
  IncItemButton,
  DecItemButton,
  CheckoutButton,
  InvertedButton,
  LoadingSpinner,
  HeaderButton,
  LogoutButton,
  InvCancelButton,
} from "../styles/Button.styles.jsx";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  signIn: "sign-in",
  google: "google-sign-in",
  github: "github-sign-in",
  cancel: "cancel",
  invcancel: "invcancel",
  add: "add-item",
  inc: "inc-item",
  dec: "dec-item",
  checkout: "checkout",
  inverted: "inverted",
  header: "header",
  logout: "logout",
};
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.signIn]: SignInButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.github]: GithubSignInButton,
    [BUTTON_TYPE_CLASSES.cancel]: CancelButton,
    [BUTTON_TYPE_CLASSES.invcancel]: InvCancelButton,
    [BUTTON_TYPE_CLASSES.add]: AddItemButton,
    [BUTTON_TYPE_CLASSES.inc]: IncItemButton,
    [BUTTON_TYPE_CLASSES.dec]: DecItemButton,
    [BUTTON_TYPE_CLASSES.checkout]: CheckoutButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPE_CLASSES.header]: HeaderButton,
    [BUTTON_TYPE_CLASSES.logout]: LogoutButton,
  }[buttonType]);
const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton
      disabled={isLoading}
      {...otherProps}
      variant="contained"
      disableRipple
    >
      {isLoading ? <LoadingSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
