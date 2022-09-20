import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
const stone = "#336b87";
const mist = "#90afc5";

const BootstrapButton = styled(Button)({
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

export default function CustomizedButtons(props) {
  return (
    <BootstrapButton variant="contained" onClick={props.onClick} disableRipple>
      {props.children}
    </BootstrapButton>
  );
}
