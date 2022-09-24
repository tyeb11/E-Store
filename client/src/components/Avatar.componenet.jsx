import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { connect } from "react-redux";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.includes(" ") ? name.split(" ")[0][0] : name[0]}${
      name.includes(" ") ? name.split(" ")[1][0] : name[1]
    }`,
  };
}

function BackgroundLetterAvatar({ username }) {
  return <Avatar {...stringAvatar(username)} />;
}

function mapStateToProps({ user }) {
  return { username: user.current_user.name };
}

export default connect(mapStateToProps)(BackgroundLetterAvatar);
