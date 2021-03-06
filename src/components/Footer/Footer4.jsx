import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { appActions } from "../../actions/appActions";
import { userActions } from "../../actions/userActions";
import { constants as c } from "../../constants";
import { validURL } from "../../helper";
import HotlineContact from "../HotlineContact/HotLineContact4";
// import { ToastContainer } from "react-toastify";

export default function Footer2() {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState("");
  const tokenInfo = useSelector((state) => state.user.tokenInfo);
  const cartInfo = useSelector((state) => state.cart.cartInfo);
  const appTheme = useSelector((state) => state.app.appTheme);
  const infoStore = useSelector((state) => state.app.infoStore);
  const cartNumber = cartInfo ? cartInfo.line_items.length : 0;
  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }
  function handlePhoneCheck() {
    if (tokenInfo || phone.length < 7) return;
    dispatch(userActions.accountCheck({ email: null, phone_number: phone }));
  }
  function handleAccountClick(e) {
    if (!tokenInfo) {
      e.preventDefault();
      dispatch(appActions.changePopup(c.PHONE_POPUP));
    }
  }
  function handlePostClick(e, id) {
    if (!id) e.preventDefault();
  }
  function handlePolicyClick(id) {
    if (id) window.location.href = `/tin-tuc/${id}`;
  }
  function handleShowPhonePopup() {
    dispatch(appActions.changePopup(c.PHONE_POPUP));
  }
  function handleLogout() {
    dispatch(userActions.accountLogout());
  }
  function checkToken(e) {
    if (!tokenInfo) {
      e.preventDefault();
      handleShowPhonePopup();
    }
  }
  return (
    <React.Fragment>
      <HotlineContact />
      <div className="footer">
        <div className="first-footer d-flex">
          <div className="container ">
            <div className="row">
            <div className="col-lg-4 col-md-6 col-12 mr-991 col-contact-footer">
                <h4 className="title-menu">
                  <span>
                    Li??n h??? v???i ch??ng t??i{" "}
                    <i className="fa fa-plus hidden" aria-hidden="true" />
                  </span>
                </h4>
                <ul>
                  <li>
                    <strong>?????a ch???:</strong> {appTheme.contact_address}
                  </li>
                  <li>
                    <strong>??i???n tho???i:</strong>{" "}
                    <a className="fone" href={appTheme.phone_number_hotline}>
                      {appTheme.phone_number_hotline}
                    </a>
                  </li>
                  <li>
                    <strong>Email:</strong>{" "}
                    <a
                      href={`mailto:${appTheme.contact_email}
`}
                    >
                      {" "}
                      {appTheme.contact_email}
                    </a>
                  </li>
                  <li>
                    <strong>Th???i gian l??m vi???c:</strong>{" "}
                    <a>{appTheme.contact_time_work} </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 col-12 mr-991 col-contact-footer">
                <h4 className="title-menu">
                  <span>
                    V?? ch??ng t??i {" "}
                    <i className="fa fa-plus hidden" aria-hidden="true" />
                  </span>
                </h4>
                <ul className="list-menu list-blogs">
                        <li>
                          {" "}
                          <a
                            href={
                              appTheme.post_id_about
                                ? `/tin-tuc/${appTheme.post_id_about}`
                                : "/#"
                            }
                            onClick={(e) =>
                              handlePostClick(e, appTheme.post_id_about)
                            }
                          >
                            Gi???i thi???u
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            href={
                              appTheme.post_id_help
                                ? `/tin-tuc/${appTheme.post_id_help}`
                                : "/#"
                            }
                            onClick={(e) =>
                              handlePostClick(e, appTheme.post_id_help)
                            }
                          >
                            Gi??p ?????
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            href={
                              appTheme.post_id_terms
                                ? `/tin-tuc/${appTheme.post_id_terms}`
                                : "/#"
                            }
                            onClick={(e) =>
                              handlePostClick(e, appTheme.post_id_terms)
                            }
                          ></a>
                          Tham gia
                        </li>
                      </ul>
              </div>
              <div className="col-lg-4 col-md-6 col-12 mr-991 col-contact-footer">
                <h4 className="title-menu">
                  <span>
                   T??i kho???n c???a t??i
                    <i className="fa fa-plus hidden" aria-hidden="true" />
                  </span>
                </h4>
                <ul className="list-menu list-blogs">
                        {tokenInfo ? (
                          <li>
                            <a onClick={handleLogout}>Tho??t t??i kho???n</a>
                          </li>
                        ) : (
                          <li>
                            <a onClick={handleShowPhonePopup}>????ng nh???p</a>
                          </li>
                        )}

                        <li>
                          <a href="/don-hang" onClick={checkToken}>
                            L???ch s??? ????n h??ng
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="/yeu-thich" onClick={checkToken}>
                            S???n ph???m y??u th??ch
                          </a>
                        </li>
                      </ul>
              </div>
            </div>
          </div>
        </div>
        <div
        className="text-center"
        style={{
          textAlign: "center",
          color: "#f2f3f8",
          paddingBottom: "10px",
          fontSize: "13px",
        }}
      >
        Design by{" "}
        <a href="https://doapp.vn" style={{ color: "#f2f3f8" }}>
          DOAPP.VN
        </a>
      </div>
      </div>
    </React.Fragment>
  );
}
