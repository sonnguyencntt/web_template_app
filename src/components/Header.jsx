import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header_1 from "./Header/Header1";
import Header_2 from "./Header/Header2";
import { constants as c } from "../constants";
import { appActions } from "../actions/appActions";

export default function Header() {
  const dispatch = useDispatch();
  const appTheme = useSelector((state) => state.app.appTheme.home_page_type);
  console.log(appTheme)
  return <React.Fragment>
    {
      appTheme == 1 ? <Header_1/> : appTheme == 2 ? <Header_2/> : <Header_1/>
    }

  </React.Fragment>;
}
