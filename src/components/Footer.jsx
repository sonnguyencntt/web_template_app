import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer_1 from "./Footer/Footer_1";
import Footer_2 from "./Footer/Footer_2";
import { constants as c } from "../constants";
import { appActions } from "../actions/appActions";

export default function Footer() {
  const dispatch = useDispatch();
  const appTheme = useSelector((state) => state.app.appTheme.home_page_type);
  console.log(appTheme)
  return <React.Fragment>
    {
      appTheme == 1 ? <Footer_1/> : appTheme == 2 ? <Footer_2/> : <Footer_1/>
    }

  </React.Fragment>;
}
