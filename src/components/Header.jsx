import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header_1 from "./Header/Header1";
import Header_2 from "./Header/Header2";
import Header_3 from "./Header/Header3";
import Header_4 from "./Header/Header4";

import { constants as c } from "../constants";
import { appActions } from "../actions/appActions";

export default function Header() {
  const dispatch = useDispatch();
  const appTheme = useSelector((state) => state.app.appTheme.home_page_type);
  console.log(appTheme)
  return <React.Fragment>
    {
      appTheme == 1 || appTheme == null ? <Header_1/> : appTheme == 2 ? <Header_2/> : appTheme  == 3 ? <Header_3/> :   <Header_4/>  
    }

  </React.Fragment>;
}
