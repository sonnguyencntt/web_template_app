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
    e.preventDefault()
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
      <div className="header" style={{ background: appTheme.color_main_1 }}>
        <div className="middle-header">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 header-left">
                <div className="heade_menunavs">
                  <div className="wrap_main">
                    <div className="account-max-1024 d-xl-none d-block">
                      <a href="account/login.html">Đăng nhập</a>
                      <a href="account/register.html">Đăng ký</a>
                      <div className="close-menu"></div>
                    </div>
                    <div className="bg-header-nav ">
                      <nav className="header-nav">
                        <ul className="item_big">
                      <li className="nav-item"><Link to={{
                  pathname: "/",
                  state: { prevPath: window.location.pathname },
                }} title="Trang chủ" className="nav-link" >Trang chủ              </Link>
                </li>
                <li className="nav-item  has-mega">
                  <Link to={{
                    pathname: "/danh-sach-san-pham",
                    state: { prevPath: window.location.pathname },
                  }} className="nav-link">Sản phẩm </Link>

                </li>
                <li className="nav-item  has-mega">
                  <Link to={{
                    pathname: "/tin-tuc",
                    state: { prevPath: window.location.pathname },
                  }} className="nav-link">Tin tức     </Link>

                </li>
                <li className="nav-item  has-mega">
                  <Link to={{
                    pathname: "/ma-giam-gia",
                    state: { prevPath: window.location.pathname },
                  }} className="nav-link">Voucher     </Link>

                </li>
                <li className="nav-item  has-mega">
                  <Link to={{
                    pathname: "/combo-giam-gia",
                    state: { prevPath: window.location.pathname },
                  }} className="nav-link">Combo Giảm giá     </Link>

                </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-3" style = {{textAlign : "center"}}>
                <a href="index.html" >
                  <img
                    className="logo"
                    src={appTheme.logo_url}
                    alt="ND Fresh"
                  />
                </a>
              </div>
              <div className="col-xl-5 col-lg-9 col-md-9 col-sm-12 col-12 header-right">
                <div className="nd-header-search nd-searchs">
                  <form
                    className="nd-header-search-form"
                    onSave={handleSearch}
                  >
                    <input
                      type="text"
                      className="search-auto form-control"
                      value={searchValue}
                      onChange={handleInputChange}
                      placeholder="Tìm kiếm sản phẩm"
                      autoComplete="off"
                    />
                    <input type="hidden" name="type" defaultValue="product" />
                    <button
                      onClick={handleSearch}
                      style={{ background: appTheme.color_main_1 }}
                      className="btn btn-default"
                    >
                      <svg
                        class="Icon Icon--search-desktop"
                        viewBox="0 0 21 21"
                      >
                        <g
                          transform="translate(1 1)"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          fill-rule="evenodd"
                          stroke-linecap="square"
                        >
                          <path d="M18 18l-5.7096-5.7096"></path>
                          <circle cx="7.2" cy="7.2" r="7.2"></circle>
                        </g>
                      </svg>
                    </button>
                  </form>
                </div>
                <div className="header-page-link">
                  <ul className="group-account">
                    <li className="cart-drop">
                      <div className="icon">
                      <Link to="/gio-hang" 
                          className="nd-header-cart"
                          aria-label="Xem giỏ hàng"
                          title="Giỏ hàng"
                        >
                          <svg
                            enableBackground="new 0 0 407.453 407.453"
                            version="1.1"
                            viewBox="0 0 407.45 407.45"
                            xmlSpace="preserve"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {" "}
                            <g fill="#010002">
                              {" "}
                              <path d="m255.1 116.52c4.487 0 8.129-3.633 8.129-8.129 0-4.495-3.642-8.129-8.129-8.129h-111.61c-4.487 0-8.129 3.633-8.129 8.129 0 4.495 3.642 8.129 8.129 8.129h111.61z" />{" "}
                              <path d="m367.06 100.26h-55.372c-4.487 0-8.129 3.633-8.129 8.129 0 4.495 3.642 8.129 8.129 8.129h47.243v274.68h-310.41v-274.68h44.536c4.487 0 8.129-3.633 8.129-8.129 0-4.495-3.642-8.129-8.129-8.129h-52.664c-4.487 0-8.129 3.633-8.129 8.129v290.94c0 4.495 3.642 8.129 8.129 8.129h326.67c4.487 0 8.129-3.633 8.129-8.129v-290.94c0-4.495-3.634-8.128-8.129-8.128z" />{" "}
                              <path d="m282.59 134.8c4.487 0 8.129-3.633 8.129-8.129v-59.273c-1e-3 -37.156-40.115-67.394-89.618-67.394-49.308 0-89.414 30.238-89.414 67.394v59.274c0 4.495 3.642 8.129 8.129 8.129s8.129-3.633 8.129-8.129v-59.274c0-28.198 32.823-51.137 73.36-51.137 40.334 0 73.157 22.939 73.157 51.137v59.274c-1e-3 4.495 3.633 8.128 8.128 8.128z" />{" "}
                              <path d="m98.892 147.57c0 11.526 9.389 20.907 20.923 20.907s20.923-9.38 20.923-20.907c0-4.495-3.642-8.129-8.129-8.129s-8.129 3.633-8.129 8.129c0 2.561-2.089 4.65-4.666 4.65-2.569 0-4.666-2.089-4.666-4.65 0-4.495-3.642-8.129-8.129-8.129s-8.127 3.634-8.127 8.129z" />{" "}
                              <path d="m282.59 168.47c11.534 0 20.923-9.38 20.923-20.907 0-4.495-3.642-8.129-8.129-8.129s-8.129 3.633-8.129 8.129c0 2.561-2.089 4.65-4.666 4.65s-4.666-2.089-4.666-4.65c0-4.495-3.642-8.129-8.129-8.129s-8.129 3.633-8.129 8.129c2e-3 11.526 9.39 20.907 20.925 20.907z" />{" "}
                            </g>{" "}
                          </svg>
                          <span className="count_item_pr">
                            {badges.cart_quantity}
                          </span>
                        </Link>
                      </div>
                      <div className="top-cart-content">
                        <div className="CartHeaderContainer"></div>
                      </div>
                    </li>
                    <li class="user">
								<div class="icon">
									<a href="/account" title="Tài khoản của bạn" rel="nofollow">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="25px" height="25px">
        <path fillRule="evenodd" fill="rgb(0, 0, 0)" d="M12.500,-0.000 C5.607,-0.000 -0.000,5.607 -0.000,12.500 C-0.000,15.519 1.076,18.291 2.864,20.453 C2.869,20.460 2.869,20.467 2.874,20.473 C4.165,22.030 5.787,23.224 7.594,23.995 C7.615,24.004 7.635,24.014 7.656,24.022 C7.802,24.084 7.950,24.141 8.099,24.197 C8.157,24.219 8.215,24.242 8.275,24.263 C8.402,24.309 8.531,24.352 8.661,24.394 C8.744,24.420 8.827,24.447 8.910,24.472 C9.025,24.506 9.140,24.539 9.256,24.570 C9.357,24.597 9.460,24.623 9.562,24.647 C9.666,24.672 9.770,24.697 9.875,24.720 C9.992,24.745 10.110,24.767 10.228,24.788 C10.323,24.806 10.417,24.824 10.513,24.840 C10.645,24.861 10.777,24.877 10.909,24.895 C10.995,24.905 11.080,24.918 11.165,24.927 C11.315,24.943 11.467,24.954 11.618,24.965 C11.689,24.970 11.759,24.977 11.830,24.981 C12.051,24.993 12.275,25.000 12.500,25.000 C12.725,25.000 12.949,24.993 13.171,24.982 C13.242,24.978 13.312,24.970 13.382,24.965 C13.534,24.955 13.685,24.944 13.835,24.928 C13.921,24.919 14.006,24.906 14.092,24.895 C14.224,24.878 14.356,24.862 14.488,24.840 C14.583,24.825 14.678,24.807 14.773,24.789 C14.891,24.768 15.009,24.745 15.126,24.720 C15.230,24.698 15.334,24.673 15.438,24.648 C15.541,24.623 15.643,24.598 15.745,24.571 C15.861,24.540 15.976,24.507 16.090,24.472 C16.174,24.447 16.257,24.421 16.340,24.395 C16.470,24.353 16.598,24.310 16.726,24.264 C16.785,24.242 16.843,24.220 16.902,24.198 C17.051,24.142 17.198,24.085 17.345,24.023 C17.365,24.015 17.386,24.005 17.407,23.996 C19.213,23.225 20.835,22.031 22.127,20.474 C22.132,20.468 22.132,20.460 22.137,20.454 C23.924,18.291 25.000,15.519 25.000,12.500 C25.000,5.607 19.392,-0.000 12.500,-0.000 ZM17.565,23.008 C17.559,23.011 17.553,23.015 17.547,23.017 C17.398,23.089 17.247,23.157 17.095,23.222 C17.060,23.237 17.026,23.252 16.991,23.267 C16.858,23.322 16.723,23.375 16.587,23.426 C16.530,23.447 16.474,23.468 16.417,23.488 C16.296,23.531 16.175,23.572 16.053,23.612 C15.977,23.636 15.901,23.659 15.825,23.681 C15.717,23.714 15.608,23.745 15.498,23.774 C15.405,23.799 15.312,23.821 15.219,23.843 C15.121,23.867 15.023,23.890 14.925,23.911 C14.817,23.934 14.708,23.954 14.600,23.973 C14.512,23.990 14.424,24.007 14.335,24.021 C14.213,24.040 14.090,24.055 13.967,24.071 C13.889,24.081 13.812,24.092 13.733,24.101 C13.592,24.116 13.451,24.125 13.310,24.135 C13.247,24.140 13.184,24.147 13.120,24.150 C12.914,24.161 12.707,24.167 12.500,24.167 C12.292,24.167 12.086,24.161 11.880,24.150 C11.817,24.147 11.754,24.140 11.691,24.135 C11.549,24.126 11.408,24.116 11.267,24.101 C11.189,24.092 11.111,24.081 11.033,24.071 C10.910,24.055 10.787,24.040 10.665,24.021 C10.576,24.007 10.489,23.990 10.401,23.973 C10.292,23.954 10.183,23.934 10.076,23.911 C9.977,23.890 9.879,23.867 9.782,23.843 C9.688,23.821 9.595,23.799 9.502,23.774 C9.393,23.745 9.284,23.713 9.175,23.681 C9.099,23.659 9.023,23.636 8.947,23.612 C8.825,23.572 8.704,23.531 8.584,23.488 C8.527,23.468 8.470,23.447 8.413,23.426 C8.277,23.375 8.142,23.322 8.009,23.267 C7.975,23.252 7.941,23.237 7.906,23.223 C7.754,23.157 7.602,23.090 7.453,23.018 C7.447,23.015 7.441,23.012 7.435,23.009 C5.981,22.305 4.697,21.307 3.655,20.095 C4.460,17.129 6.740,14.738 9.674,13.787 C9.732,13.822 9.792,13.854 9.852,13.887 C9.887,13.907 9.921,13.927 9.957,13.946 C10.081,14.012 10.207,14.074 10.335,14.129 C10.434,14.172 10.536,14.209 10.638,14.247 C10.658,14.254 10.678,14.262 10.698,14.269 C11.263,14.469 11.867,14.583 12.500,14.583 C13.132,14.583 13.737,14.469 14.302,14.269 C14.322,14.262 14.342,14.254 14.362,14.247 C14.463,14.209 14.565,14.172 14.664,14.129 C14.793,14.074 14.919,14.012 15.043,13.946 C15.078,13.927 15.113,13.907 15.148,13.887 C15.207,13.854 15.268,13.822 15.327,13.786 C18.260,14.738 20.540,17.129 21.345,20.094 C20.303,21.306 19.019,22.305 17.565,23.008 ZM7.917,9.167 C7.917,6.640 9.973,4.583 12.500,4.583 C15.027,4.583 17.083,6.640 17.083,9.167 C17.083,10.774 16.250,12.189 14.993,13.007 C14.829,13.114 14.658,13.209 14.483,13.292 C14.462,13.302 14.442,13.313 14.421,13.322 C13.214,13.871 11.786,13.871 10.579,13.322 C10.558,13.313 10.537,13.302 10.517,13.292 C10.341,13.209 10.171,13.114 10.007,13.007 C8.750,12.189 7.917,10.774 7.917,9.167 ZM21.970,19.301 C21.026,16.512 18.871,14.258 16.117,13.187 C17.219,12.195 17.917,10.762 17.917,9.167 C17.917,6.180 15.487,3.750 12.500,3.750 C9.513,3.750 7.083,6.180 7.083,9.167 C7.083,10.762 7.781,12.195 8.883,13.187 C6.130,14.258 3.975,16.512 3.030,19.301 C1.650,17.385 0.833,15.037 0.833,12.500 C0.833,6.067 6.067,0.833 12.500,0.833 C18.933,0.833 24.167,6.067 24.167,12.500 C24.167,15.037 23.350,17.385 21.970,19.301 Z" />
      </svg>
									</a>
								</div>
								<div class="drop-account">
									
									
									<a  onClick={handleShowPhonePopup}>Đăng nhập</a>
									<a  onClick={handleShowPhonePopup}>Đăng ký</a>
									
									
								</div>
							</li>
                    <li className="d-xl-none d-inline-block">
                      <div className="category-action"></div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
