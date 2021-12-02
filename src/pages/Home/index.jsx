import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { appActions } from "../../actions/appActions";
import { constants as c } from "../../constants";
import HomePage1 from "./HomePage1"
import HomePage2 from "./HomePage2"
import HomePage3 from "./HomePage3"
import HomePage4 from "./HomePage4"
import HomePage5 from "./HomePage5"


export default function Footer() {
  const homeInfo = useSelector((state) => state.app.home);

  const dispatch = useDispatch();
  const appTheme = useSelector((state) => state.app.appTheme.home_page_type);
  const isShowPopup = useSelector((state) => state.app.isShowPopup);


  function handleShowPopup() {
    if(isShowPopup == false && homeInfo.popups.length > 0)
    {
      dispatch(appActions.changePopup(c.POPUP_MAIN));
      dispatch({type : c.SHOW_POPUP_MAIN , data : true })
    }
  }


  return <React.Fragment>
      {homeInfo.status === c.LOADING ? null : handleShowPopup()  }
    {
      appTheme == 1 || appTheme == null ? <HomePage1/> : appTheme == 2 ? <HomePage2/> :   appTheme == 3 ? <HomePage3 /> : appTheme == 4 ? <HomePage4 /> : <HomePage5 /> 
    }

  </React.Fragment>;
}
