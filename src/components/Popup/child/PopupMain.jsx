import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { appActions } from "../../../actions/appActions";
import { userActions } from "../../../actions/userActions";
import { constants as c } from "../../../constants";
import moment from "moment";
export default function Login(props) {
  const dispatch = useDispatch();
  const appTheme = useSelector((state) => state.app.appTheme);
  const homeInfo = useSelector((state) => state.app.home);
  const [img, setImg] = useState("");

  const isShowPopup = useSelector((state) => state.app.isShowPopup);


  function checkExsit(list,id){
    var x = false
    console.log(list,id)
    if(list.length == 0)
    {
      return false
    }
    for (const item of list) {
      if(item == id)
      {
        x = true
        return x
      }
    }
    return x
  }

  useEffect(() => {
    try {

      var list_popup = localStorage.getItem("list_popup_main") || JSON.stringify({expired : 1 , item : []});
    var parse_list_popup = JSON.parse(list_popup)
    for (const item of homeInfo.popups) {
      if(parse_list_popup.item.length == 0)
      {
        parse_list_popup.item.push(item.id)
        localStorage.setItem('list_popup_main', JSON.stringify(parse_list_popup))
        setImg(item.link_image)
        return;
      }
      if(checkExsit(parse_list_popup.item ,item.id) == false)
      {
        console.log(checkExsit(parse_list_popup.item ,item.id))
        parse_list_popup.item.push(item.id)
        localStorage.setItem('list_popup_main', JSON.stringify(parse_list_popup))
        setImg(item.link_image)
        return;
      }


    }
    if(homeInfo.popups.length > 0)
    {
      parse_list_popup.item.push(homeInfo.popups[0].id)
      localStorage.setItem('list_popup_main', JSON.stringify(parse_list_popup))
      setImg(homeInfo.popups[0].link_image)
      return;
    }
    } catch (error) {
      localStorage.removeItem('list_popup_main');
    }

  }, [isShowPopup]);

  return (
    <div className="modal center">
      <div
        className="login-popup"
        style={{ background: "none", padding: "0em" }}
      >
        <img src={img} class="img-responsive" alt="Image" style = {{maxWidth : "450px" , maxHeight : "450px"}} />

        <button className="close-btn" onClick={props.handleClose}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
}
