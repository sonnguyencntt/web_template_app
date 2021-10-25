import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomePage_1 from "./HomePage_1"
import HomePage_2 from "./HomePage_2"


export default function Footer() {
  const dispatch = useDispatch();
  const appTheme = useSelector((state) => state.app.appTheme.home_page_type);
  console.log(appTheme)
  return <React.Fragment>
    {
      appTheme == 1 ? <HomePage_1/> : appTheme == 2 ? <HomePage_2/> : <HomePage_1/>
    }

  </React.Fragment>;
}
