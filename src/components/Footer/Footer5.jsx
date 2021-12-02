import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { appActions } from "../../actions/appActions";
import { userActions } from "../../actions/userActions";
import { constants as c } from "../../constants";
import { validURL } from "../../helper";
import HotlineContact from "../HotlineContact/HotlineContact";

export default function Footer1() {
  const dispatch = useDispatch();

  const [phone, setPhone] = useState("");
  const tokenInfo = useSelector((state) => state.user.tokenInfo);
  const cartInfo = useSelector((state) => state.cart.cartInfo);
  const appTheme = useSelector((state) => state.app.appTheme);
  const infoStore = useSelector((state) => state.app.infoStore);
  const badges = useSelector((state) => state.user.badges);

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
  console.log(infoStore)
  return (
    <React.Fragment>
      <HotlineContact />

      <footer>
        <div
          className="footer-subscription"
          style={{ "background-image": `url("/img/footer-bg-1.jpg")` , height : "90px" }}
        >
          <div className="container">
            <div className="row row-lg-2 items-center"></div>
          </div>
        </div>
        <div className="container">
          <div className="footer-bottom">
            <div className="row row-2 row-lg-4">
              <div className="w-100 Module Module-210">
                <div className="ModuleContent">
                  <div className="footer-item footer-info">
                    <div className="footer-title">
                      HOTLINE ({appTheme.contact_time_work})
                    </div>
                    <a >
                      <em className="ri-phone-fill" />
                      <strong>{appTheme.contact_phone_number} </strong>
                    </a>
                  </div>
            
                  <div className="footer-item footer-social">
                    <div className="footer-title">Kết nối với chúng tôi:</div>
                    <ul>
                      <li>
                        <a
                          href={
                            "https://www.messenger.com/t/" +
                            appTheme.id_facebook
                          }
                        >
                          <img alt="#" src="/img/fb.png" />
                        </a>
                      </li>

                      <li>
                        <a href={"https://zalo.me/" + appTheme.id_zalo}>
                          <img
                            alt=""
                            src="/img/logo-zalo.png"
                            style={{ width: "36px", height: "36px" }}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="row a" style = {{marginTop : "10px"}}>
              {infoStore.link_google_play != null &&
                infoStore.link_google_play !== "" &&
                validURL(infoStore.link_google_play) && (
                  <a href={infoStore.link_google_play}>
                    <img src="/img/play.png" alt="" />
                  </a>
                )}
              {infoStore.link_apple_store != null &&
                infoStore.link_apple_store !== "" &&
                validURL(infoStore.link_apple_store) && (
                  <a href={infoStore.link_apple_store}>
                    <img src="/img/app.png" alt="" />
                  </a>
                )}
            </div>
                </div>
              </div>
              <div className="w-100 Module Module-212">
                <div className="ModuleContent">
                  <div className="footer-item footer-nav">
                    <div className="footer-title">Hỗ trợ khách hàng</div>
                    <ul>
                      <li>
                        <a             onClick={() => handlePolicyClick(appTheme.post_id_terms)}
>
Điều khoản - Điều kiện{" "}
                        </a>
                      </li>
                      <li>
                        <a
                                  onClick={() => handlePolicyClick(appTheme.post_id_return_policy)}

                        >
                                      Chính sách đổi trả
{" "}
                        </a>
                      </li>
                      <li>
                        <a
                                    onClick={() => handlePolicyClick(appTheme.post_id_support_policy)}

                        >
                                     Chính sách hỗ trợ
{" "}
                        </a>
                      </li>
                      <li>
                        <a
                                 onClick={() => handlePolicyClick(appTheme.post_id_privacy_policy)}

                        >
                                      Chính sách bảo mật
{" "}
                        </a>
                      </li>
                    
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-100 Module Module-213">
                <div className="ModuleContent">
                  <div className="footer-item footer-nav">
                    <div className="footer-title">Về Echoa Store</div>
                    <ul>
                      <li>
                        <a  href={
                    appTheme.post_id_about
                      ? `/tin-tuc/${appTheme.post_id_about}`
                      : "/#"
                  }
                  onClick={(e) => handlePostClick(e, appTheme.post_id_about)}

                  >
                          Giới thiệu{" "}
                        </a>
                      </li>
                      <li>
                        <a href={
                    appTheme.post_id_help
                      ? `/tin-tuc/${appTheme.post_id_help}`
                      : "/#"
                  }
                  onClick={(e) => handlePostClick(e, appTheme.post_id_help)}>
                  Giúp đỡ
                        </a>
                      </li>
                      <li>
                        <a href={
                    appTheme.post_id_terms
                      ? `/tin-tuc/${appTheme.post_id_terms}`
                      : "/#"
                  }
                  onClick={(e) => handlePostClick(e, appTheme.post_id_terms)}>
                  Tham gia
                        </a>
                      </li>
                 
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-100 Module Module-214">
                <div className="ModuleContent">
                  <div className="footer-item">
                    <div className="footer-title">Hỗ trợ thanh toán</div>
                    <img alt="#" src="/img/hinhthucthanhtoan.png" />
                  </div>
                  <div className="footer-item">
                    <div className="footer-title">ĐỐI TÁC VẬN CHUYỂN</div>
                    <img alt="#" src="/img/doitacvanchuyen.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright Module Module-215">
          <div className="ModuleContent">
            <div className="container">
              <div className="row items-center no-gutter">
                <div className="col-lg-8 col-md-6">
                  <div className="company-info">
                    <p>
                      <strong>{appTheme.contact_individual_organization_name}</strong>
                    </p>
                    <p>
                    {appTheme.contact_address}
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="bct">
                    <a>
                      <img
                        alt="Đăng ký bộ công thương"
                        src="/img/bct.png"
                        style={{
                          width: "137px",
                          height: "52.3333px",
                          left: "930.812px",
                        }}
                      />
                    </a>
                    <a
                      title="DMCA.com Protection Status"
                      className="dmca-badge"
                    >
                      {" "}
                      <img
                        src="/img/badge.png"
                        alt="DMCA.com Protection Status"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="row no-gutter">
                <div className="col-md-6">
                  <div className="copyright">
                    <p>
                      <span style={{ fontSize: "13px" }}>
                        Copyright {badges.config_user_vip == null ? "DOAPP.VN" : (badges.config_user_vip.customer_copyright || "DOAPP.VN")  }. All right reserved.
                      </span>{" "}
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="web-term">
                   
                    <a onClick={() => handlePolicyClick(appTheme.post_id_terms)}>
                    Điều khoản - Điều kiện{" "}
                    </a>
                    <span>|</span>
                    <a  onClick={() => handlePolicyClick(appTheme.post_id_privacy_policy)}
>
                      Chính sách bảo mật
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row show-mobile" >
              {infoStore.link_google_play != null &&
                infoStore.link_google_play !== "" &&
                validURL(infoStore.link_google_play) && (
                  <a href={infoStore.link_google_play}>
                    <img src="/img/play.png" alt="" />
                  </a>
                )}
              {infoStore.link_apple_store != null &&
                infoStore.link_apple_store !== "" &&
                validURL(infoStore.link_apple_store) && (
                  <a href={infoStore.link_apple_store}>
                    <img src="/img/app.png" alt="" />
                  </a>
                )}
            </div>
        </div>
      </footer>
      <div className="mobile footer-mobile">
        <div className="footer-icon">
          <a href="/gio-hang" style={{ color: appTheme.color_main_1 }}>
            <div className="cart-number">{cartNumber}</div>
            <i className="fas fa-shopping-cart"></i>
            Giỏ hàng
          </a>
        </div>
        <div className="footer-icon">
          <a href="/tin-tuc" style={{ color: appTheme.color_main_1 }}>
            <i className="fas fa-scroll"></i>
            Tin tức
          </a>
        </div>
        <div className="footer-icon">
          <a href="/" style={{ color: appTheme.color_main_1 }}>
            <i className="fas fa-home"></i>
            Trang chủ
          </a>
        </div>
        <div className="footer-icon">
          <a href="/danh-muc" style={{ color: appTheme.color_main_1 }}>
            <i className="fas fa-th-list"></i>
            Danh mục
          </a>
        </div>
        <div className="footer-icon">
          <a
            href="/tai-khoan"
            onClick={handleAccountClick}
            style={{ color: appTheme.color_main_1 }}
          >
            <i className="fas fa-user"></i>
            Cá nhân
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
