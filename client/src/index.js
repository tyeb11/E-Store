import { Container } from "@mui/material";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import { store } from "./store/store";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Container>
      <Provider store={store}>
        <App />
      </Provider>
    </Container>
  </StrictMode>
);

//Royal Mist #90afc5, stone #336b87,shadow #2a3132,autum #763626
