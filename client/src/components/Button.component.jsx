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
  HeaderButton
} from "../styles/Button.styles.jsx";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  signIn: "sign-in",
  google: "google-sign-in",
  github: "github-sign-in",
  cancel: "cancel",
  add: "add-item",
  inc: "inc-item",
  dec: "dec-item",
  checkout: "checkout",
  inverted: "inverted",
  header:'header'
};
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.signIn]: SignInButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.github]: GithubSignInButton,
    [BUTTON_TYPE_CLASSES.cancel]: CancelButton,
    [BUTTON_TYPE_CLASSES.add]: AddItemButton,
    [BUTTON_TYPE_CLASSES.inc]: IncItemButton,
    [BUTTON_TYPE_CLASSES.dec]: DecItemButton,
    [BUTTON_TYPE_CLASSES.checkout]: CheckoutButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPE_CLASSES.header]: HeaderButton,
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
