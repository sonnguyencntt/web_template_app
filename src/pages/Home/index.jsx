import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomePage1 from "./HomePage1"
import HomePage2 from "./HomePage2"
import HomePage3 from "./HomePage3"
import HomePage4 from "./HomePage4"


export default function Footer() {
  const dispatch = useDispatch();
  const appTheme = useSelector((state) => state.app.appTheme.home_page_type);
  console.log(appTheme)
  return <React.Fragment>
    {
      appTheme == 1 || appTheme == null ? <HomePage1/> : appTheme == 2 ? <HomePage2/> :   appTheme == 3 ? <HomePage3 /> :  <HomePage4 /> 
    }

  </React.Fragment>;
}
