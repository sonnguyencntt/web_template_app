import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestOtp, validateEmail } from "../../../helper";
import { appActions } from "../../../actions/appActions";
import { userActions } from "../../../actions/userActions";
import { constants as c } from "../../../constants";

export default function Login(props) {
  const dispatch = useDispatch();
  const phone = useSelector((state) => state.user.phone);
  const message = useSelector((state) => state.user.message);
  const appTheme = useSelector((state) => state.app.appTheme);
  const [timer, setTimer] = useState(0);
  const [validateMsg, setValidateMsg] = useState("");
  const [isSentRequest, setIsSentRequest] = useState(false);
  const [typeSendPhone, changeTypeSend] = useState(!validateEmail(phone));
  const [regisInfo, setRegisInfo] = useState({
    phone_number: !validateEmail(phone) ? phone : null,
    email: validateEmail(phone) ? phone : null,
    name: "",
    otp: "",
    password: "",
    sex: -1,
    otp_from: typeSendPhone == false ? "email" : "phone",
  });
  function changeTypeSendAc() {
    changeTypeSend(!typeSendPhone);
  }
  function handleBack() {
    dispatch(appActions.changePopup(c.PHONE_POPUP));
  }
  function handleInputChange(e) {
    let info = { ...regisInfo };
    info[e.target.name] = e.target.value;
    if (e.target.name === "sex") info.sex = parseInt(e.target.value);
    setRegisInfo(info);
  }
  function handleRegis() {
    if (
      !regisInfo.phone_number ||
      !regisInfo.password ||
      !regisInfo.sex === -1 ||
      !regisInfo.otp ||
      !regisInfo.name
    ) {
      setIsSentRequest(false);
      setValidateMsg("Vui lòng điền đầy đủ thông tin !");
      return;
    }
    setValidateMsg("");
    setIsSentRequest(true);
    dispatch({ type: c.CLEAR_MESSAGE });
    let info = { ...regisInfo };
    info.otp_from = typeSendPhone == true ? "phone" : "email";

    dispatch(userActions.accountRegis(info));
  }
  useEffect(() => {
    if (!timer) return;
    let myTimer = setInterval(() => {
      setTimer(timer - 1 >= 0 ? timer - 1 : 0);
    }, 1000);
    return () => clearInterval(myTimer);
  });
  function handleResendOtp() {
    if (timer > 0) return;

    if (typeSendPhone) {
      requestOtp(phone);
    } else {
      dispatch(userActions.requestSendOtpEmail(regisInfo.email));
    }

    setTimer(30);
  }
  return (
    <div className="modal center">
      <div className="regis-popup">
        <h4>Nhập thông tin đăng ký</h4>
        <input
          autoComplete="off"
          type="text"
          name="name"
          placeholder="Họ tên"
          value={regisInfo.name}
          onChange={handleInputChange}
        />
        <input
          name="phone_number"
          type="text"
          placeholder="Số điện thoại"
          value={regisInfo.phone_number}
          onChange={handleInputChange}
        />
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={regisInfo.email}
          onChange={handleInputChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Mật khẩu"
          value={regisInfo.password}
          onChange={handleInputChange}
        />
        <div className="row">
          <label>Giới tính: </label>
          <div>
            <div className="row">
              <label htmlFor="male">Nam</label>
              <input
                checked={regisInfo.sex === 1}
                name="sex"
                value="1"
                type="checkbox"
                id="male"
                onChange={handleInputChange}
              />
            </div>
            <div className="row">
              <label htmlFor="female">Nữ</label>
              <input
                checked={regisInfo.sex === 2}
                name="sex"
                value="2"
                type="checkbox"
                id="female"
                onChange={handleInputChange}
              />
            </div>
            <div className="row">
              <label htmlFor="other">Khác</label>
              <input
                checked={regisInfo.sex === 0}
                name="sex"
                value="0"
                type="checkbox"
                id="other"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <input
            autoComplete="off"
            name="otp"
            type="text"
            placeholder={
              typeSendPhone ? "Nhập xác nhận từ SĐT" : "Nhập xác nhận từ Email"
            }
            value={regisInfo.otp}
            style={{ width: "calc(100% - 7.5em)" }}
            onChange={handleInputChange}
          />

          <button
            onClick={handleResendOtp}
            style={{
              width: "7em",
              fontSize: "15px",
              height: "100%",
              borderRadius: "0.25em",
              border: "1px solid #e4e4e4",
              padding: "0.75em 0em",
              color: "#757575",
            }}
          >
            {timer
              ? `Gửi lại (${timer}s)`
              : typeSendPhone
              ? "Gửi tới SĐT"
              : "Gửi tới email"}
          </button>
        </div>
        <center
          onClick={changeTypeSendAc}
          style={{ color: "#3498db", fontSize: "8", cursor: "pointer" }}
        >
          {typeSendPhone ? "Xác thực qua Email" : "Xác thực qua SĐT"}
        </center>

        <br />
        {validateMsg && (
          <div
            className="err-msg"
            style={{ textAlign: "center", marginTop: "0", marginBottom: "8px" }}
          >
            {validateMsg}
          </div>
        )}
        {!validateMsg && isSentRequest && !message && (
          <img src="/img/loading1.gif" alt="" />
        )}
        {isSentRequest && message && !validateMsg && (
          <div
            className="err-msg"
            style={{ textAlign: "center", marginTop: "0", marginBottom: "8px" }}
          >
            {message}
          </div>
        )}
        <button
          className="next-btn"
          onClick={handleRegis}
          style={{ background: appTheme.color_main_1 }}
        >
          Xác nhận
        </button>
        <button className="close-btn" onClick={props.handleClose}>
          <i className="fas fa-times"></i>
        </button>
        <button className="back-btn" onClick={handleBack}>
          <i className="fas fa-chevron-left"></i>
        </button>
      </div>
    </div>
  );
}
