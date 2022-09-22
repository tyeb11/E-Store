import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import Header from "./Header.component";
import { connect } from "react-redux";
import Home from "./routes/Home.routes";
import Store from "./routes/Store.routes";
import Modal from "./modals/SignInModal.modal";
import { useEffect } from "react";
import * as actions from "../store/user/user.actions";
import About from "./routes/About.routes";

const App = ({ sign_in_modal, cart_modal, getUser, current_user }) => {
  useEffect(() => {
    getUser();
  }, []);
  console.log(current_user);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/store/*" index element={<Store />} />
          <Route path="/about" index element={<About />} />
        </Routes>
        {sign_in_modal && <Modal />}
        {cart_modal && <Modal />}
      </BrowserRouter>
    </>
  );
};

function mapStateToProps({ modal, user }) {
  return {
    sign_in_modal: modal.sign_in_modal,
    cart_modal: modal.cart_modal,
    current_user: user.current_user,
  };
}

export default connect(mapStateToProps, actions)(App);
