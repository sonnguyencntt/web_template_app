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
  function handleSearch() {
    if (searchValue !== "")
      window.location.href =
        window.location.origin + "/danh-sach-san-pham?search=" + searchValue;
  }
  function handleEnter(e) {
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
      <header className="header" id="template-1"
      >
        <div className="topbar-mobile hidden-lg hidden-md text-center text-md-left" style={{ background: appTheme.color_main_1 }}

        >
          <div className="container container-template-2">
            Hotline:
            <span>
              <a href="tel:0912117494">{appTheme.phone_number_hotline}</a>
            </span>
          </div>
        </div>
        <div className="topbar hidden-sm hidden-xs" style={{ background: appTheme.color_main_1 }}
        >
          <div className="container">
            <div>
              <div className="row">
                <div className="col-sm-6 col-md-9 a-left">
                  <ul className="list-inline f-left">
                    <li>
                      Hotline:
                      <span>
                        <a href="tel:0912117494">{appTheme.phone_number_hotline}</a>
                      </span>
                    </li>
                    {/* <li className="margin-left-20">
                        <b>Địa chỉ</b>:
                        <span>
                          Ladeco Building, 266 Doi Can Street, Hà Nội, Vietnam
                        </span>
                      </li> */}
                  </ul>
                </div>
                <div className="col-sm-6 col-md-3">
                  <ul className="list-inline f-right">
                    <li>
                      <a onClick={handleShowPhonePopup}><i className="fa fa-user" /> Đăng nhập</a>
                    </li>
                    <li><span>hoặc</span></li>
                    <li><a onClick={handleShowPhonePopup}>Đăng ký</a>
                    </li>
                    <li className="li-search hidden"><a href="javscrript:;">
                      <i className="fa fa-search" /></a>
                      <div className="dropdown topbar-dropdown hidden-md hidden-sm hidden-xs">
                        <div className="content a-center">
                          <div className="header_search search_form">
                            <form className="input-group search-bar search_form" action="https://dualeo-x.mysapo.net/search" method="get" role="search">
                              <input type="search" name="query" placeholder="Tìm sản phẩm" className="input-group-field st-default-search-input search-text" autoComplete="off" />
                              <span className="input-group-btn">
                                <button className="btn icon-fallback-text">
                                  <i className="fa fa-search" />
                                </button>
                              </span>
                            </form>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="header-content clearfix a-center">
            <div className="row">
              <div className="col-xs-12 col-md-3 text-lg-left">
                <div className="logo inline-block">
                  <a href="index.html" className="logo-wrapper ">
                    <img style={{
                      width: "220px",
                      height: "2em",
                      "object-fit": "contain"
                    }} src={appTheme.logo_url} alt="logo " />
                  </a>
                </div>
              </div>
              <div className="col-xs-12 col-md-8 col-lg-7 hidden-xs">
                <div className="policy d-flex justify-content-around">
                  <div className="item-policy d-flex align-items-center">
                    <a title="policy1_title" href="#">
                      <img src="https://bizweb.dktcdn.net/thumb/medium/100/308/325/themes/801947/assets/policy1.png?1623316806453" alt="DuaLeo-X" />
                    </a>
                    <div className="info a-left">
                      <a title="Miễn phí vận chuyển" href="#">Miễn phí vận chuyển</a>
                      <p>Bán kính 100 km</p>
                    </div>
                  </div>
                  <div className="item-policy d-flex align-items-center">
                    <a title="policy2_title" href="#">
                      <img src="https://bizweb.dktcdn.net/thumb/medium/100/308/325/themes/801947/assets/policy2.png?1623316806453" alt="DuaLeo-X" />
                    </a>
                    <div className="info a-left">
                      <a title="Hỗ trợ 24/7" href="#">Hỗ trợ 24/7</a>
                      <p>Hotline: <a href="callto:19001009"> {appTheme.phone_number_hotline}</a></p>
                    </div>
                  </div>
                  <div className="item-policy d-flex align-items-center">
                    <a title="policy3_title" href="#">
                      <img src="https://bizweb.dktcdn.net/thumb/medium/100/308/325/themes/801947/assets/policy3.png?1623316806453" alt="DuaLeo-X" />
                    </a>
                    <div className="info a-left">
                      <a title="Giờ làm việc" href="#">Giờ làm việc</a>
                      <p>T2 - T7 Giờ hành chính</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-1 col-lg-2 hidden-sm hidden-xs">
                <div className="top-cart-contain f-right ">
                  <div className="mini-cart text-xs-center">
                    <div className="heading-cart">
                      <Link to="/gio-hang" className="header-btn row">
                        <div className="icon f-left relative">
                          <i className="fa fa-shopping-bag" />
                          <span className="cartCount count_item_pr hidden-lg" id="cart-total">{badges.cart_quantity}</span>
                        </div>
                        <div className="right-content hidden-md">
                          <span className="label">Giỏ hàng</span>
                          (<span className="cartCount2">{badges.cart_quantity}</span>)
                        </div>
                      </Link>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-bar hidden-md hidden-lg">
            <img src="../bizweb.dktcdn.net/100/308/325/themes/801947/assets/menu-barca33.png?1623316806453" alt="menu bar" />
          </div>
          <div className="icon-cart-mobile hidden-md hidden-lg f-left absolute" onclick="window.location.href='cart.html'">
            <div className="icon relative">
              <i className="fa fa-shopping-bag" />
              <span className="cartCount count_item_pr">0</span>
            </div>
          </div>
        </div>
        <nav style={{ background: appTheme.color_main_1 }}
        >
          <div className="container"
          >
            <div className="hidden-sm hidden-xs">
              <ul className="nav nav-left">
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
              <div className="menu-search f-right bbbbb">
                <div className="header_search search_form">
                  <div className="input-group search-bar search_form"  onKeyDown={handleEnter}>
                    <input type="search" name="query"
                      value={searchValue}
                      onChange={handleInputChange}

                      placeholder="Tìm sản phẩm" className="input-group-field st-default-search-input search-text auto-search" autoComplete="off" />
                    <span className="input-group-btn">
                      <button className="btn icon-fallback-text" onClick={handleSearch}
                      >
                        <i className="fa fa-search" />
                      </button>
                    </span>
                  </div>
                  <div id="search_suggestion">
                    <div id="search_top">
                      <div id="product_results" />
                      <div id="article_results" />
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </nav>
      </header>

    </React.Fragment>
  );
}
