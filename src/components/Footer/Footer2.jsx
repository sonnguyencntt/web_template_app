import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { appActions } from "../../actions/appActions";
import { userActions } from "../../actions/userActions";
import { constants as c } from "../../constants";
import { validURL } from "../../helper";
import HotlineContact from "../HotlineContact/HotlineContact2";
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

      <footer className="footer">
        <div className="content">
          <div className="site-footer">
            <div className="footer-inner padding-top-35 pb-lg-5">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-sm-6 col-lg-4">
                    <div className="footer-widget">
                      <h3 className="hastog">
                        <span>Li??n h???</span>
                      </h3>
                      <ul className="list-menu list-showroom">
                        <li className="clearfix">
                          <i className="block_icon fa fa-map-marker" />
                          <p>{appTheme.contact_address}</p>
                        </li>
                        <li className="clearfix">
                          <i className="block_icon fa fa-phone" />
                          <a href="tel:0912117494">
                            {" "}
                            {appTheme.phone_number_hotline}
                          </a>
                          <p>Th??? 2 - Ch??? nh???t: 9:00 - 18:00</p>
                        </li>
                        <li className="clearfix">
                          <i className="block_icon fa fa-envelope" />
                          <a
                            title="Dualeotheme@gmail.com"
                            href="mailto:Dualeotheme@gmail.com"
                          >
                            {appTheme.contact_email}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-lg-4">
                    <div className="footer-widget">
                      <h3 className="hastog">
                        <span>V??? ch??ng t??i</span>
                      </h3>
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
                  </div>
                  <div className="col-xs-12 col-sm-6 col-lg-4">
                    <div className="footer-widget">
                      <h3 className="hastog">
                        <span> T??i kho???n c???a t??i</span>
                      </h3>
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
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
