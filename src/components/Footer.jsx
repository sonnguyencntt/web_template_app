import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer1 from "./Footer/Footer1";
import Footer2 from "./Footer/Footer2";
import { ToastContainer } from "react-toastify";
import MessengerCustomerChat from "react-messenger-customer-chat";
export default function Footer() {
  const appTheme = useSelector((state) => state.app.appTheme.home_page_type);
  const tokenInfo = useSelector((state) => state.user.tokenInfo);
  return (
    <React.Fragment>
      <ToastContainer />
      {tokenInfo != null ? (
        ""
      ) : (
        <MessengerCustomerChat
          pageId={appTheme.id_facebook ?? "633385377094079"}
          appId="394449898190174"
          //  htmlRef="<REF_STRING>"
        />
      )}
      {appTheme == 1 ? <Footer1 /> : appTheme == 2 ? <Footer2 /> : <Footer1 />}
    </React.Fragment>
  );
}
