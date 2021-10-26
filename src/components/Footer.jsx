import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer1 from "./Footer/Footer1";
import Footer2 from "./Footer/Footer2";

export default function Footer() {
  const appTheme = useSelector((state) => state.app.appTheme.home_page_type);
  return <React.Fragment>
    {
      appTheme == 1 ? <Footer1/> : appTheme == 2 ? <Footer2/> : <Footer1/>
    }


  </React.Fragment>;
}
