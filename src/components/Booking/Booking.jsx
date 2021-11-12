import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Select(props) {

  return (
    <div className="home__form-input" style={{ textAlign: "center" }}>
    <div className="form-input__slogan">
      <div className="slogan__title">Đặt lịch giữ chỗ chỉ 30 giây</div>
      <div className="slogan__text">
        Cắt xong trả tiền, hủy lịch không sao
      </div>
    </div>
    <div
      className="form-input__form flex"
      style={{ justifyContent: "center" }}
    >
      <div
        className="form__button btn-action btn-color-1 content-center-middle"
        role="presentation"
      >
        <Link to= "/dat-lich" className="btn-booking" style = {{color : "white"}}> ĐẶT LỊCH NGAY</Link>
      </div>
    </div>
  </div>
  )
}