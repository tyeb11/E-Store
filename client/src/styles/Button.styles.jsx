import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const stone = "#336b87";
const mist = "#90afc5";
const shadow = "#2a3132";
const autum = "#763626";

export const BaseButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,

  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
  },
  "&:focus": {},
});

export const GoogleSignInButton = styled(BaseButton)({
  backgroundColor: shadow,
  color: mist,
  fontSize: "1.2rem",
  border: "none",

  "&:hover": {
    backgroundColor: mist,
    color: shadow,
    border: "none",
  },
});

export const SignInButton = styled(BaseButton)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: stone,
  borderColor: mist,
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: stone,
    borderColor: stone,
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: stone,
    borderColor: stone,
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba( 51 ,107 ,135,.5)",
  },
});

export const GithubSignInButton = styled(BaseButton)({
  backgroundColor: shadow,
  fontSize: "1.2rem",
  color: mist,
  border: "none",

  "&:hover": {
    backgroundColor: mist,
    color: shadow,
    border: "none",
  },
});
export const CancelButton = styled(BaseButton)({
  backgroundColor: "whitesmoke",
  color: autum,
  border: `3px solid ${autum}`,
  fontSize: "1.2em",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: autum,
    color: "whitesmoke",
  },
});
export const AddItemButton = styled(BaseButton)({});
export const IncItemButton = styled(BaseButton)({
  borderRadius: "100%",
  backgroundColor: shadow,
  color: mist,
  border: "none",
});
export const DecItemButton = styled(BaseButton)({
  borderRadius: "100%",
  backgroundColor: shadow,
});
export const CheckoutButton = styled(BaseButton)({});
export const InvertedButton = styled(BaseButton)({});
export const InvCancelButton = styled(BaseButton)({
  backgroundColor: "whitesmoke",
  color: shadow,
  border: `3px solid ${shadow}`,
  fontSize: "1.2em",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: shadow,
    color: "whitesmoke",
  },
});
export const LogoutButton = styled(BaseButton)({
  backgroundColor: shadow,
  fontSize: "1.2rem",
  color: mist,
  border: "none",
  "&:hover": {
    color: mist,
    backgroundColor: autum,
  },
});
export const HeaderButton = styled(BaseButton)({
  backgroundColor: shadow,
  border: "none",
  color: "whitesmoke",
  height: "60px",
  "&:hover": {
    color: stone,
    backgroundColor: shadow,
  },
});
export const LoadingSpinner = styled(BaseButton)({});
