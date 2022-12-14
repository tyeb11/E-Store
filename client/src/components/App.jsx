import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import Header from "./Header.component";
import { connect } from "react-redux";
import Home from "./routes/Home.routes";
import Store from "./routes/Store.routes";
import SignInModal from "./modals/SignInModal.modal";
import CartModal from "./modals/CartModal.modal";
import UserModal from "./modals/UserModal.modal";
import { useEffect } from "react";
import * as actions from "../store/user/user.actions";
import About from "./routes/About.routes";
import SuccessModal from "./modals/SuccessModal.modal";

const App = ({
  sign_in_modal,
  cart_modal,
  user_modal,
  getUser,
  current_user,
  success_modal,
}) => {
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/store/*" index element={<Store />} />
          <Route path="/about" index element={<About />} />
        </Routes>
        {sign_in_modal && <SignInModal />}
        {cart_modal && <CartModal />}
        {user_modal && <UserModal />}
        {success_modal && <SuccessModal />}
      </BrowserRouter>
    </>
  );
};

function mapStateToProps({ modal, user }) {
  return {
    sign_in_modal: modal.sign_in_modal,
    cart_modal: modal.cart_modal,
    user_modal: modal.user_modal,
    current_user: user.current_user,
    success_modal: modal.success_modal,
  };
}

export default connect(mapStateToProps, actions)(App);
