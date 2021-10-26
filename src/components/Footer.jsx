import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer_1 from "./Footer/Footer1";
import Footer_2 from "./Footer/Footer2";

export default function Footer() {
  const appTheme = useSelector((state) => state.app.appTheme.home_page_type);
  return <React.Fragment>
    {
      appTheme == 1 ? <Footer_1/> : appTheme == 2 ? <Footer_2/> : <Footer_1/>
    }


  </React.Fragment>;
}
