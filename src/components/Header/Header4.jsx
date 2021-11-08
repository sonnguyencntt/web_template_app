import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { constants as c } from "../../constants";
import { appActions } from "../../actions/appActions";
import { userActions } from "../../actions/userActions";
import { cartActions } from "../../actions/cartActions";
import { collaboratorActions } from "../../actions/collaboratorActions";
export default function Header_2() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [currentActive, setCurrentActive] = useState("");
  const cartInfo = useSelector((state) => state.cart.cartInfo);
  const categories = useSelector((state) => state.category.categories);
  const provincesList = useSelector((state) => state.app.addressData.provinces);
  const addressStatus = useSelector((state) => state.app.addressData.status);
  const tokenInfo = useSelector((state) => state.user.tokenInfo);
  const appTheme = useSelector((state) => state.app.appTheme);
  const profile = useSelector((state) => state.user.profile);
  const notify = useSelector((state) => state.user.notify);
  const badges = useSelector((state) => state.user.badges);
  useEffect(() => {
    if (tokenInfo) {
      dispatch(userActions.getUserBadges());
      dispatch(userActions.getUserProfile());
    }
    if (tokenInfo && cartInfo.status === c.LOADING) {
      dispatch(cartActions.getCartInfo());
    }
    if (tokenInfo && notify.status === c.LOADING) {
      dispatch(userActions.getuserNotify());
    }
    if (provincesList.length === 0 && addressStatus === c.LOADING) {
      dispatch(appActions.getProvincesList());
    }
    window.addEventListener("click", function (e) {
      let containers = document.querySelectorAll(".header-dropdown");
      for (let i = 0; i < containers.length; i++) {
        if (containers[i].contains(e.target)) return;
      }
      setCurrentActive("");
    });
  }, []);
  function handleInputChange(e) {
    setSearchValue(e.target.value);
  }
  function handleSearch(e) {
    e.preventDefault();
    if (searchValue !== "")
      window.location.href =
        window.location.origin + "/danh-sach-san-pham?search=" + searchValue;
  }
  function handleEnter(e) {
    e.preventDefault();
    if (e.key === "Enter") handleSearch();
  }
  function handleShowPhonePopup() {
    dispatch(appActions.changePopup(c.PHONE_POPUP));
  }
  function handleLogout() {
    dispatch(userActions.accountLogout());
  }
  function handleShowProfile() {
    dispatch(appActions.changePopup(c.PROFILE_POPUP));
  }
  function handleCategorySelect() {
    toggleMenu(".categories-dropdown");
  }
  function toggleMenu(selector) {
    const menuToggle = document.querySelector(`${selector} .menu`);
    menuToggle.classList.toggle("active");
  }
  function handleToggleActive(type) {
    if (currentActive === type) {
      setCurrentActive("");
      return;
    }
    setCurrentActive(type);
  }
  function checkAccount(e) {
    if (!tokenInfo) {
      e.preventDefault();
      handleShowPhonePopup();
      return;
    }
  }
  function handleNotificationClick(v) {
    handleToggleActive("notify");
    if (v.type === "NEW_MESSAGE") {
      dispatch(appActions.setChatStatus("active"));
      return;
    }
    let arr = v.title.split(" ");
    let orderID = arr[arr.length - 1];
    window.location.href = `/don-hang/${orderID}`;
  }
  function handleShowCollaboratorRegisForm(e) {
    e.preventDefault();
    dispatch(appActions.changePopup(c.COLLABORATOR_REGIS_POPUP));
  }
  return (
    <React.Fragment>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-xl-3 col-md-3 col-6 col-logo">
            <Link to="/" className="logo">
                <img width={170} height={58} src={appTheme.logo_url} />
              </Link>
            </div>
            <div className="d-md-none d-block col-2 order-3">
              <div className="category-action">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_xx"
                  x="0px"
                  y="0px"
                  viewBox="0 0 480 480"
                  style={{ enableBackground: "new 0 0 480 480" }}
                  xmlSpace="preserve"
                >
                  <g xmlns="http://www.w3.org/2000/svg">
                    <path d="M240,0C107.452,0,0,107.452,0,240s107.452,240,240,240c132.486-0.15,239.85-107.514,240-240C480,107.452,372.548,0,240,0     z M240,464C116.288,464,16,363.712,16,240S116.288,16,240,16c123.653,0.141,223.859,100.347,224,224     C464,363.712,363.712,464,240,464z" />
                    <path d="M360,232H168c-4.418,0-8,3.582-8,8s3.582,8,8,8h192c4.418,0,8-3.582,8-8S364.418,232,360,232z" />
                    <path d="M360,312H168c-4.418,0-8,3.582-8,8s3.582,8,8,8h192c4.418,0,8-3.582,8-8S364.418,312,360,312z" />
                    <path d="M360,152H168c-4.418,0-8,3.582-8,8s3.582,8,8,8h192c4.418,0,8-3.582,8-8S364.418,152,360,152z" />
                    <path d="M136,152h-16c-4.418,0-8,3.582-8,8s3.582,8,8,8h16c4.418,0,8-3.582,8-8S140.418,152,136,152z" />
                    <path d="M136,232h-16c-4.418,0-8,3.582-8,8s3.582,8,8,8h16c4.418,0,8-3.582,8-8S140.418,232,136,232z" />
                    <path d="M136,312h-16c-4.418,0-8,3.582-8,8s3.582,8,8,8h16c4.418,0,8-3.582,8-8S140.418,312,136,312z" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6 col-md-6 col-10 col-search order-3 order-md-2">
              <div className="theme-search-smart">
                <div className="header_search theme-searchs">
               
                  <form
                    onSave={handleSearch}
                    className="input-group search-bar theme-header-search-form ultimate-search"
                  >
                    <input
                      type="text"
                      value={searchValue}
                      onChange={handleInputChange}
                      placeholder="Tìm kiếm sản phẩm..."
                      className="search-auto input-group-field auto-search"
                      required
                    />
                    <span className="input-group-btn">
                      <button
                        onClick={handleSearch}
                        className="btn icon-fallback-text"
                        aria-label="Justify"
                      >
                        <svg
                          enableBackground="new 0 0 612.01 612.01"
                          version="1.1"
                          viewBox="0 0 612.01 612.01"
                          xmlSpace="preserve"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m606.21 578.71-158.01-155.49c41.378-44.956 66.802-104.41 66.802-169.84-0.02-139.95-115.3-253.39-257.51-253.39s-257.49 113.44-257.49 253.39 115.28 253.39 257.49 253.39c61.445 0 117.8-21.253 162.07-56.586l158.62 156.1c7.729 7.614 20.277 7.614 28.006 0 7.747-7.613 7.747-19.971 0.018-27.585zm-348.72-110.91c-120.33 0-217.87-95.993-217.87-214.41s97.543-214.41 217.87-214.41c120.33 0 217.87 95.993 217.87 214.41s-97.542 214.41-217.87 214.41z" />
                        </svg>
                      </button>
                    </span>
                  </form>
                </div>
              </div>
              <div className="contact-phone">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  style={{
                    margin: "auto",
                    display: "block",
                    position: "absolute",
                    width: "30px",
                    height: "30px",
                    left: 0,
                  }}
                  width="71px"
                  height="71px"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid"
                >
                  <circle
                    cx={50}
                    cy={50}
                    r="39.7789"
                    fill="none"
                    stroke="#fff000"
                    strokeWidth={8}
                  >
                    <animate
                      attributeName="r"
                      repeatCount="indefinite"
                      dur="1s"
                      values="0;40"
                      keyTimes="0;1"
                      keySplines="0 0.2 0.8 1"
                      calcMode="spline"
                      begin="-0.5s"
                    />
                    <animate
                      attributeName="opacity"
                      repeatCount="indefinite"
                      dur="1s"
                      values="1;0"
                      keyTimes="0;1"
                      keySplines="0.2 0 0.8 1"
                      calcMode="spline"
                      begin="-0.5s"
                    />
                  </circle>
                  <circle
                    cx={50}
                    cy={50}
                    r="24.6446"
                    fill="none"
                    stroke="#fff000"
                    strokeWidth={8}
                  >
                    <animate
                      attributeName="r"
                      repeatCount="indefinite"
                      dur="1s"
                      values="0;40"
                      keyTimes="0;1"
                      keySplines="0 0.2 0.8 1"
                      calcMode="spline"
                    />
                    <animate
                      attributeName="opacity"
                      repeatCount="indefinite"
                      dur="1s"
                      values="1;0"
                      keyTimes="0;1"
                      keySplines="0.2 0 0.8 1"
                      calcMode="spline"
                    />
                  </circle>
                </svg>
                <p>Tư vấn hỗ trợ</p>
                {appTheme == null ||
                appTheme.phone_number_hotline == null ||
                appTheme.phone_number_hotline === "" ||
                appTheme.is_show_icon_hotline === false ? (
                  ""
                ) : (
                  <a href={`tel:${appTheme.phone_number_hotline}`}>
                    {" "}
                    {appTheme.phone_number_hotline}
                  </a>
                )}
              </div>
            </div>
            <div className="col-lg-3 col-xl-3 col-md-3 col-6 col-account order-2 order-md-3">
              <ul className="group-account">
 
                <li className="account d-none d-lg-inline-block">
                {tokenInfo? (
                    <div className="account-info header-dropdown">
                      <button
                        style={{ border: "none", padding: 0 , color : "black" }}
                        onClick={() => handleToggleActive("account")}
                      >
                        Tài khoản của tôi
                        <i
                          style={{ marginLeft: "0.5em" }}
                          className="fas fa-caret-down"
                        ></i>
                      </button>
                      <div
                        className={
                          currentActive === "account"
                            ? " menu-dropdown dropdown active"
                            : "menu-dropdown dropdown"
                        }
                      >
                        <h5 style = {{color : "#3d3b3b" , textAlign : "center"}}>
                          {profile.name} <br />
                          <span>{profile.phone_number}</span>
                        </h5>
                        <ul>
                          <li>
                            <img src="/img/check-list.png" alt="" />
                            <Link to="/don-hang">Đơn hàng của tôi</Link>
                          </li>
                          <li>
                            <img src="/img/home.png" alt="" />
                            <Link to="/dia-chi">Địa chỉ nhận hàng</Link>
                          </li>
                          <li>
                            <img src="/img/star.png" alt="" />
                            <Link to="/san-pham-da-mua">Sản phẩm đã mua</Link>
                          </li>
                          <li>
                            <img src="/img/check-mark.png" alt="" />
                            <Link to="/danh-gia-cua-toi">Đánh giá của tôi</Link>
                          </li>
                          <li>
                            <img src="/img/heart.png" alt="" />
                            <Link to="/yeu-thich">Sản phẩm yêu thích</Link>
                          </li>
                          {profile.is_collaborator && (
                            <li>
                              <img src="/img/handshake.png" alt="" />
                              <Link to="/cong-tac-vien">Ví cộng tác viên</Link>
                            </li>
                          )}

                          {!profile.is_collaborator && (
                            <li>
                              <img src="/img/handshake.png" alt="" />
                              <Link
                                onClick={handleShowCollaboratorRegisForm}
                                to="/cong-tac-vien"
                              >
                                Đăng ký cộng tác viên
                              </Link>
                            </li>
                          )}

                          <li onClick={handleShowProfile}>
                            <img src="/img/refresh.png" alt="" />

                            <a> Cập nhật thông tin</a>
                          </li>
                          <li onClick={handleLogout}>
                            <img src="/img/log-out.png" alt="" />
                            <a> Thoát tài khoản</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <React.Fragment>
                       <li className="account d-none d-lg-inline-block" style = {{marginRight : "10px"}}>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      id="Capa_1xx"
                      x="0px"
                      y="0px"
                      viewBox="0 0 513.323 513.323"
                      style={{ enableBackground: "new 0 0 513.323 513.323" }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <g>
                          <path d="M256.661,257.323c-135.275,0-245.333,110.059-245.333,245.333c0,5.888,4.779,10.667,10.667,10.667    s10.667-4.779,10.667-10.667c0-123.52,100.48-224,224-224s224,100.48,224,224c0,5.888,4.779,10.667,10.667,10.667    c5.888,0,10.667-4.779,10.667-10.667C501.995,367.36,391.936,257.323,256.661,257.323z" />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M256.661,0c-64.683,0-117.333,52.629-117.333,117.333s52.651,117.333,117.333,117.333s117.333-52.629,117.333-117.333    S321.344,0,256.661,0z M256.661,213.333c-52.928,0-96-43.072-96-96s43.072-96,96-96c52.928,0,96,43.072,96,96    S309.589,213.333,256.661,213.333z" />
                        </g>
                      </g>
                    </svg>
                    <a onClick={handleShowPhonePopup}>Đăng nhập</a>
                  </div>
                </li>
                       <li className="account d-none d-lg-inline-block">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      id="Capa_1xx"
                      x="0px"
                      y="0px"
                      viewBox="0 0 513.323 513.323"
                      style={{ enableBackground: "new 0 0 513.323 513.323" }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <g>
                          <path d="M256.661,257.323c-135.275,0-245.333,110.059-245.333,245.333c0,5.888,4.779,10.667,10.667,10.667    s10.667-4.779,10.667-10.667c0-123.52,100.48-224,224-224s224,100.48,224,224c0,5.888,4.779,10.667,10.667,10.667    c5.888,0,10.667-4.779,10.667-10.667C501.995,367.36,391.936,257.323,256.661,257.323z" />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M256.661,0c-64.683,0-117.333,52.629-117.333,117.333s52.651,117.333,117.333,117.333s117.333-52.629,117.333-117.333    S321.344,0,256.661,0z M256.661,213.333c-52.928,0-96-43.072-96-96s43.072-96,96-96c52.928,0,96,43.072,96,96    S309.589,213.333,256.661,213.333z" />
                        </g>
                      </g>
                    </svg>
                    <a onClick={handleShowPhonePopup}>Đăng kí</a>
                  </div>
                </li>
                
                    </React.Fragment>
                  )}
      
                </li>
 
               
                <li className="cart-drop">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      id="Capa_1s"
                      x="0px"
                      y="0px"
                      viewBox="0 0 489 489"
                      style={{ enableBackground: "new 0 0 489 489" }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <path d="M440.1,422.7l-28-315.3c-0.6-7-6.5-12.3-13.4-12.3h-57.6C340.3,42.5,297.3,0,244.5,0s-95.8,42.5-96.6,95.1H90.3   c-7,0-12.8,5.3-13.4,12.3l-28,315.3c0,0.4-0.1,0.8-0.1,1.2c0,35.9,32.9,65.1,73.4,65.1h244.6c40.5,0,73.4-29.2,73.4-65.1   C440.2,423.5,440.2,423.1,440.1,422.7z M244.5,27c37.9,0,68.8,30.4,69.6,68.1H174.9C175.7,57.4,206.6,27,244.5,27z M366.8,462   H122.2c-25.4,0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h139.3v41   c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-41h45.2l26.9,302.3C412.8,445.2,392.1,462,366.8,462z" />
                      </g>
                    </svg>
                    <Link
                          to="/gio-hang"                  
                            className="img_hover_cart"
                      title="Giỏ hàng"
                    >
                      <span class="count_item count_item_pr hidden-count">
                        {" "}
                        {badges.cart_quantity}
                      </span>
                      Giỏ hàng
                    </Link>
                  </div>
                  <div className="top-cart-content d-none">
                    <div className="CartHeaderContainer"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header_nav_main header-menu d-none d-lg-block clearfix">
        <div className="container">
          <div className="heade_menunavs">
            <div className="wrap_main d-flex">
              <div className="bg-header-nav">
                <nav className="header-nav">
                  <ul className="item_big">
                    <li className="nav-item  ">
                      <Link
                        to={{
                          pathname: "/",
                          state: { prevPath: window.location.pathname },
                        }}
                        title="Trang chủ"
                      >
                        Trang chủ{" "}
                      </Link>
                    </li>
                    <li className="nav-item  ">
                      <Link
                        className="a-img caret-down"
                        to="/danh-sach-san-pham"
                        title="Sản phẩm"
                      >
                        Sản phẩm
                      </Link>
                      <ul className="item_small child">
                        {categories.length > 0
                          ? categories.map((v, i) => (
                              <li>
                                <Link
                                  to={`/danh-sach-san-pham?danh-muc=${v.name.replace(
                                    /\s/g,
                                    "-"
                                  )}-${v.id}`}
                                  title="Áo nam"
                                >
                            {v.name}
                                </Link>
                              </li>
                            ))
                          : null}
                      </ul>
                    </li>
                    <li className="nav-item  ">
                      <Link
                        to={{
                          pathname: "/tin-tuc",
                          state: { prevPath: window.location.pathname },
                        }}
                        className="nav-link"
                      >
                        Tin tức{" "}
                      </Link>
                    </li>
                    <li className="nav-item  ">
                      <Link
                        to={{
                          pathname: "/ma-giam-gia",
                          state: { prevPath: window.location.pathname },
                        }}
                        className="nav-link"
                      >
                        Voucher{" "}
                      </Link>
                    </li>
                    <li className="nav-item  ">
                      <Link
                        to={{
                          pathname: "/combo-giam-gia",
                          state: { prevPath: window.location.pathname },
                        }}
                        className="nav-link"
                      >
                        Combo Giảm giá{" "}
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
