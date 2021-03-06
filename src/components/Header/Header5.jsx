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
  const [isLoadedHeader, setIsLoaded] = useState(false);
  const [isShowBanner, setIsShowBanner] = useState(true);

  const cartInfo = useSelector((state) => state.cart.cartInfo);
  const categories = useSelector((state) => state.category.categories);
  const provincesList = useSelector((state) => state.app.addressData.provinces);
  const addressStatus = useSelector((state) => state.app.addressData.status);
  const tokenInfo = useSelector((state) => state.user.tokenInfo);
  const appTheme = useSelector((state) => state.app.appTheme);
  const profile = useSelector((state) => state.user.profile);
  const notify = useSelector((state) => state.user.notify);
  const badges = useSelector((state) => state.user.badges);
  const isLoaded = useSelector((state) => state.app.isLoaded);

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

  function checkIsLoaded() {
    if (isLoaded === false) {
      const script1 = document.createElement("script");
      const script2 = document.createElement("script");
      const script3 = document.createElement("script");

      script1.src = "/js/theme_js_5/jquery.js";
      script1.async = true;
      script2.src = "/js/theme_js_5/core.js";
      script2.async = true;
      script3.src = "/js/theme_js_5/main.js";
      script3.async = true;

      document.body.appendChild(script1);
      document.body.appendChild(script2);
      document.body.appendChild(script3);

      dispatch({ type: c.SET_IS_LOADED, data: true });
    }
  }

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

  function closeBanner(){
    setIsShowBanner(false)
  }
  return (
    <React.Fragment>
      <header>
        <div className={`top-campaign-banner ${isShowBanner ? "" : "hide"}`}>
          <div className="Module Module-1273">
            <div className="ModuleContent">
              <div
                className="top-campaign-banner-wrap"
                style={{ backgroundColor: "#d4145a" }}
              >
                <div className="container" style={{ textAlign: "center" }}>
                  <a href="#">
                    <img
                      alt=""
                      src="https://sakukostore.com.vn/Data/Sites/1/media/default/img/header-banner.png"
                    />
                  </a>
                  <div className="campaign-banner-close" onClick = {closeBanner}>
                    <span className="ri-close-line" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="top-header">
          <div className="container">
            <div className="top-header-wrap flex justify-between items-center">
              
              <div className="top-header-left Module Module-207">
                <div className="ModuleContent">
                  <div className="menu-wrapper">
                    <div className="menu flex items-center">
                      <ul className="flex items-center">
                        <li>
                          <Link
                            to={{
                              pathname: "/",
                              state: { prevPath: window.location.pathname },
                            }}
                          >
                            {" "}
                            <em className="ri-edit-line"></em>Trang ch???
                          </Link>
                        </li>
                        <li>
                          <Link to="/danh-sach-san-pham">
                            <em className="ri-file-list-3-line"></em>S???n ph???m
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={{
                              pathname: "/tin-tuc",
                              state: { prevPath: window.location.pathname },
                            }}
                          >
                            <em className="ri-customer-service-2-line"></em>Tin
                            t???c
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={{
                              pathname: "/ma-giam-gia",
                              state: { prevPath: window.location.pathname },
                            }}
                          >
                            <em className="ri-price-tag-3-line"></em>Voucher
                          </Link>
                        </li>

                        <li>
                          <Link
                            to={{
                              pathname: "/combo-giam-gia",
                              state: { prevPath: window.location.pathname },
                            }}
                          >
                            <em className="ri-price-tag-3-line"></em>Combo Gi???m
                            gi??
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="top-header-right">
                <div className="header-util-list flex items-center">
                {appTheme.phone_number_hotline == null ||
      appTheme.phone_number_hotline === "" ||
      appTheme.is_show_icon_hotline === false ? (
        ""
      ) : (

        <div className="header-util-item hotline-wrapper">
        <div className="hotline">
          <div className="Module Module-1269"><div className="ModuleContent"><span className="hidden-desktop">Hotline</span>
              <a  href={"tel:" + appTheme.phone_number_hotline}><em className="ri-phone-line" /><strong> { appTheme.phone_number_hotline} </strong></a></div></div>
        </div>
      </div>
      )}

             
                  {tokenInfo ? (
                    <div className="account-info header-dropdown" style = {{position: "relative",
                      "margin-left": "15px",
                      "padding-left": "15px",
                      "border-left": "1px solid"
                      }}>

<div className="header-util-item hotline-wrapper">
                        
                        <div className="order-check">
                          <a
                            onClick={() => handleToggleActive("account")}
                            className="flex items-center"
                            href="#"
                            data-fancybox
                            data-src="#tracking-order"
                          >
                            <span>T??i kho???n c???a t??i</span>
                            <i
                  style={{ marginLeft: "0.5em" }}
                  className="fas fa-caret-down"
                ></i>
                          </a>
                        </div>
                      </div>

                      <div
                        className={
                          currentActive === "account"
                            ? " menu1 dropdown active"
                            : "menu1 dropdown"
                        }
                      >
                         <div style = {{color : "#3d3b3b" , textAlign : "center" , fontSize : "18px"}}>
                         <span>{profile.name}</span>
                         <br/>
                         <br/>

                          <span style ={{marginTop : "10px"}}>{profile.phone_number}</span>
                        </div>
                        <ul>
                          <li>
                            <img src="/img/check-list.png" alt="" />
                            <Link to="/don-hang">????n h??ng c???a t??i</Link>
                          </li>
                          <li>
                            <img src="/img/home.png" alt="" />
                            <Link to="/dia-chi">?????a ch??? nh???n h??ng</Link>
                          </li>
                          <li>
                            <img src="/img/star.png" alt="" />
                            <Link to="/san-pham-da-mua">S???n ph???m ???? mua</Link>
                          </li>
                          <li>
                            <img src="/img/check-mark.png" alt="" />
                            <Link to="/danh-gia-cua-toi">????nh gi?? c???a t??i</Link>
                          </li>
                          <li>
                            <img src="/img/heart.png" alt="" />
                            <Link to="/yeu-thich">S???n ph???m y??u th??ch</Link>
                          </li>
                          {profile.is_collaborator && (
                            <li>
                              <img src="/img/handshake.png" alt="" />
                              <Link to="/cong-tac-vien">V?? c???ng t??c vi??n</Link>
                            </li>
                          )}

                          {!profile.is_collaborator && (
                            <li>
                              <img src="/img/handshake.png" alt="" />
                              <Link
                                onClick={handleShowCollaboratorRegisForm}
                                to="/cong-tac-vien"
                              >
                                ????ng k?? c???ng t??c vi??n
                              </Link>
                            </li>
                          )}

                          <li onClick={handleShowProfile}>
                            <img src="/img/refresh.png" alt="" />
                              <a>C???p nh???t th??ng tin</a>
                          </li>
                          <li onClick={handleLogout}>
                            <img src="/img/log-out.png" alt="" />
                            <a>                            Tho??t t??i kho???n
</a>

                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <React.Fragment>
                      <div className="header-util-item hotline-wrapper">
                        <div className="hotline">
                          <div className="Module Module-1269">
                            <div className="ModuleContent">
                              <a onClick={handleShowPhonePopup}>
                                <span>????ng nh???p</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="header-util-item order-check-wrapper">
                        <div className="order-check">
                          <a
                            onClick={handleShowPhonePopup}
                            className="flex items-center"
                            href="#"
                            data-fancybox
                            data-src="#tracking-order"
                          >
                            <span>????ng k??</span>
                          </a>
                        </div>
                      </div>
                    </React.Fragment>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="middle-header">
          <div className="container">
            <div className="row items-center">
              <div className="col col-lg-2">
                <div className="Module Module-216">
                  <div className="ModuleContent">
                    <div className="logo hidden-mobile">
                      <Link to="/">
                        <img
                          style={{ width: "180px", height: "59px" }}
                          src={appTheme.logo_url}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <a
                  className="product-detail-back-btn hidden-desktop"
                  href="#"
                  onclick="window.history.go(-1); return false;"
                >
                  <em className="ri-arrow-left-s-line" />
                </a>
              </div>
              <div className="col col-lg-7 col-sm-8">
                <div className="product-detail-menu hidden-desktop">
                  <ul>
                    <li>
                      <a href="index.html">
                        <em className="ri-home-2-line" />
                      </a>
                    </li>
                    <li>
                      <a className="product-detail-menu-toggle" href="#">
                        <em className="ri-list-unordered" />
                      </a>
                    </li>
                    <li>
                      <a
                        className="product-detail-search-toggle"
                        href="Product/SearchResults.html"
                      >
                        <em className="ri-search-line" />
                      </a>
                    </li>
                  </ul>
                </div>

                <form
                  onSave={handleSearch}
                  className="search-wrapper Module Module-217"
                >
                  <div
                    id="ctl00_mdl217_ctl00_Search_pnlSearch"
                    className="searchbox productsearchbox"
                    style={{ background: "white" }}
                  >
                    <input
                      value={searchValue}
                      onChange={handleInputChange}
                      type="text"
                      id="ctl00_mdl217_ctl00_Search_txtSearch"
                      title="T??m ki???m"
                      className="searchinput"
                      autoComplete="off"
                      placeholder="B???n c???n t??m s???n ph???m g???"
                    />
                    <button
                      onClick={handleSearch}
                      id="ctl00_mdl217_ctl00_Search_btnSearch"
                      className="searchbutton"
                    >
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </form>
              </div>
              <div className="col col-lg-1 col-sm-2">
                <div className="cart-wrapper Module Module-218">
                  <div className="ModuleContent">
                    <div className="cart">
                      <div className="cart-toggle position-relative inline-block">
                        <Link to="/gio-hang">
                          <img src="/img/cart-5.png" alt="Cart icon" />
                        </Link>
                        <div className="cart-amount flex flex-center rounded position-absolute background-main text-white">
                          {badges.cart_quantity}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 hidden-mobile">
                <div className="vn-pay-wrapper Module Module-219">
                  <div className="ModuleContent" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bottom-header">
          <div className="container">
            <div className="flex items-center">
              <div className="product-category-wrapper Module Module-1283">
                <div className="ModuleContent">
                  <div className="product-category dropdown">
                    <div
                      className="product-category-toggle flex items-center"
                      data-url="/danh-muc-san-pham"
                    >
                      <em className="ri-align-left" />
                      <strong>Danh m???c s???n ph???m</strong>
                      <em className="ri-arrow-drop-down-fill" />
                    </div>
                    <div className="dropdown-content product-category-dropdown">
                      <div className="product-category-list">
                        <ul>
                          <li className="hidden-mobile">
                            <a
                              className="product-category-link flex items-center justify-between"
                              href="khuyen-mai.html"
                            >
                              <span className="text flex items-center">
                                <span className="icon">
                                  <img
                                    alt="Khuy???n m??i"
                                    
                                    data-src="./Data/sites/1/skins/default/img/cate/1.png"
                                    src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                  />
                                </span>
                                Khuy???n m??i
                              </span>
                              <span className="arrow">
                                <em className="ri-arrow-right-s-line" />
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="product-category-link flex items-center justify-between"
                              href="me-be.html"
                            >
                              <span className="text flex items-center">
                                <span className="icon">
                                  <img
                                    alt="????? cho m??? v?? b??"
                                    
                                    data-src="./Data/Sites/1/media/header/cate/2.png"
                                    data-src-small="./Data/Sites/1/media/footer/m???---b??.png"
                                    src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                  />
                                </span>{" "}
                                M??? - B??
                              </span>
                              <span className="arrow">
                                <em className="ri-arrow-right-s-line" />
                              </span>
                            </a>
                            <div className="product-category-subnav-container">
                              <div className="product-category-subnav-row">
                                <div className="product-category-subnav-groups">
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="me-be/bim.html">B???m cho b??</a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="me-be/bim/bim-merries.html">
                                            B???m Merries
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/bim/bim-genki.html">
                                            B???m Genki
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="me-be/sua.html">S???a cho b??</a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="me-be/sua/sua-glico.html">
                                            S???a Glico
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/sua/sua-morinaga.html">
                                            S???a Morinaga
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/sua/sua-meiji.html">
                                            S???a Meiji
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="me-be/be-uong-sua.html">
                                        B?? u???ng s???a
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="me-be/be-uong-sua/binh-sua.html">
                                            B??nh s???a
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/be-uong-sua/num-ti.html">
                                            N??m ti
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/be-uong-sua/gam-nuou.html">
                                            G???m n?????u
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/be-uong-sua/ve-sinh-binh-sua.html">
                                            V??? sinh b??nh s???a
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/be-uong-sua/hop-chia-sua.html">
                                            H???p chia s???a
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="me-be/cham-soc-me-bau.html">
                                        D??nh cho m??? b???u
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="me-be/cham-soc-me-bau/tpcn-me-bau.html">
                                            Th???c ph???m ch???c n??ng
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/cham-soc-me-bau/sua-bau.html">
                                            S???a b???u
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/cham-soc-me-bau/tham-sua-cho-me-bau.html">
                                            Th???m s???a
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="me-be/rang-mieng-cho-be.html">
                                        Ch??m s??c r??ng mi???ng
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="me-be/rang-mieng-cho-be/ban-chai-cho-be.html">
                                            B??n ch???i
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/rang-mieng-cho-be/kem-danh-rang-cho-be.html">
                                            Kem ????nh r??ng
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/rang-mieng-cho-be/chong-sau-rang-cho-be.html">
                                            Ch???ng s??u r??ng
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/rang-mieng-cho-be/tua-luoi-cho-be.html">
                                            T??a l?????i
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="me-be/dung-cu-an-cho-be.html">
                                        D???ng c??? ??n cho b??
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="me-be/dung-cu-an-cho-be/binh-tap-uong.html">
                                            B??nh t???p u???ng
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/dung-cu-an-cho-be/khay-chia-thuc-an">
                                            Khay chia th???c ??n
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/dung-cu-an-cho-be/thia-dua-cho-be">
                                            Th??a ????a cho b??
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/dung-cu-an-cho-be/bat-an-cho-be.html">
                                            B??t cho b?? ??n
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a>????? ch??i, t???p ??i</a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="me-be/do-choi-cho-be.html">
                                            ????? ch??i cho b??
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/ghe-xe-tap-di-cho-be">
                                            Gh???, xe t???p ??i
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="me-be/be-khoe.html">
                                        Ch??m s??c c?? th??? b??
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="me-be/be-khoe/chong-muoi-con-trung">
                                            Ch???ng mu???i, ch???ng c??n tr??ng
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/be-khoe/chong-nang-cho-be.html">
                                            Ch???ng n???ng cho b??
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/be-khoe/ha-sot-cho-be">
                                            H??? s???t, tr??? ho, s??? m??i
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/be-khoe/kem-duong-dau-massage-cho-be.html">
                                            Kem d?????ng massage cho b??
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/be-khoe/bit-o-dien-chan-cua.html">
                                            B???t ??? ??i???n, ch???n c???a
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="me-be/ve-sinh-be.html">
                                        V??? sinh cho b??{" "}
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="me-be/ve-sinh-be/giay-uot-cho-be.html">
                                            Gi???y ?????t cho b??
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/ve-sinh-be/mac-treo-quan-ao-cho-be">
                                            M???c treo qu???n ??o cho b??
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/ve-sinh-be/bo-ve-sinh-cho-be.html">
                                            B?? v??? sinh cho b??
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="me-be/be-tam-goi.html">
                                        B?? t???m g???i
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="me-be/be-tam-goi/sua-tam-cho-be.html">
                                            S???a t???m
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/be-tam-goi/dau-goi-cho-be.html">
                                            D???u g???i
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/be-tam-goi/phu-kien-tam-goi-ve-sinh-cho-be.html">
                                            Ph??? ki???n t???m g???i, v??? sinh
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/be-tam-goi/giat-xa-cho-be.html">
                                            Gi???t x??? cho b??
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="me-be/thuc-pham-cho-be.html">
                                        Th???c ph???m cho b??
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="me-be/thuc-pham-cho-be/banh-an-dam.html">
                                            B??nh ??n d???m
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/thuc-pham-cho-be/bot-an-dam.html">
                                            B???t ??n d???m
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/thuc-pham-cho-be/chao-soup-an-dam">
                                            Ch??o soup ??n d???m
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/thuc-pham-cho-be.html">
                                            C??m tr???n
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/thuc-pham-cho-be/my-an-dam.html">
                                            M??? ??n d???m
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/thuc-pham-cho-be/nuoc-dien-giai.html">
                                            N?????c ??i???n gi???i
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/thuc-pham-cho-be/nuoc-ep-cho-be.html">
                                            N?????c ??p cho b??
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/thuc-pham-cho-be/sot-an-dam.html">
                                            S???t ??n d???m
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/thuc-pham-cho-be/thach-bo-sung-vitamin.html">
                                            Th???ch b??? sung vitamin
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/thuc-pham-cho-be/tra-lua-mach.html">
                                            Tr?? l??a m???ch
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <a
                              className="product-category-link flex items-center justify-between"
                              href="cham-soc-sac-dep.html"
                            >
                              <span className="text flex items-center">
                                <span className="icon">
                                  <img
                                    alt=""
                                    
                                    data-src="./Data/Sites/1/media/icon/1.png"
                                    data-src-small="./Data/Sites/1/media/footer/cssd.png"
                                    src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                  />
                                </span>
                                Ch??m s??c s???c ?????p
                              </span>
                              <span className="arrow">
                                <em className="ri-arrow-right-s-line" />
                              </span>
                            </a>
                            <div className="product-category-subnav-container">
                              <div className="product-category-subnav-row">
                                <div className="product-category-subnav-groups">
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="cham-soc-sac-dep/cham-soc-da.html">
                                        Ch??m s??c da
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-da/kem-duong.html">
                                            Kem d?????ng da
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-da/rua-mat.html">
                                            R???a m???t
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-da/mat-na-duong-da.html">
                                            M???t n??? d?????ng da
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-da/nuoc-hoa-hong.html">
                                            N?????c hoa h???ng
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-da/tay-da-chet.html">
                                            T???y da ch???t
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-da/tay-trang.html">
                                            T???y trang
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-da/tinh-chat-duong-da.html">
                                            Tinh ch???t d?????ng da
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-da/dung-cu-cham-soc-da.html">
                                            Ph??? ki???n ch??m s??c da
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-da/cham-soc-da-khac.html">
                                            Ch??m s??c da kh??c
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="cham-soc-sac-dep/cham-soc-toc.html">
                                        Ch??m s??c t??c
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-toc/duong-toc.html">
                                            D?????ng t??c
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-toc/dau-goi-dau-xa">
                                            D???u g???i, d???u x???
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-toc/nhuom-toc.html">
                                            Nhu???m t??c
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-toc/dung-cu-cham-soc-toc.html">
                                            D???ng c??? ch??m s??c t??c
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="cham-soc-sac-dep/cham-soc-co-the.html">
                                        Ch??m s??c c?? th???
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-co-the/chong-nang.html">
                                            Ch???ng n???ng
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-co-the/duong-moi">
                                            D?????ng m??i
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-co-the/duong-the.html">
                                            D?????ng th???
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-co-the/khu-mui-giam-mo-hoi.html">
                                            Kh??? m??i m??? h??i
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-co-the/sua-tam">
                                            S???a t???m
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-co-the/tay-long.html">
                                            T???y l??ng
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-co-the/dao-cao-bam-mong-nhip.html">
                                            Dao c???o, b???m m??ng
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="cham-soc-sac-dep/trang-diem.html">
                                        Trang ??i???m
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="cham-soc-sac-dep/trang-diem/kem-nen.html">
                                            Kem n???n
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/trang-diem/phan.html">
                                            Ph???n
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/trang-diem/son-moi.html">
                                            Son m??i
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/trang-diem/trang-diem-mat.html">
                                            Trang ??i???m m???t
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/trang-diem/trang-diem-khac.html">
                                            Trang ??i???m kh??c
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/trang-diem/dung-cu-trang-diem.html">
                                            D???ng c??? trang ??i???m
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="cham-soc-sac-dep/nam-gioi.html">
                                        D??nh cho nam
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="cham-soc-sac-dep/nam-gioi/cham-soc-da-cho-nam.html">
                                            Ch??m s??c da cho nam
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/nam-gioi/cham-soc-toc-cho-nam.html">
                                            Ch??m s??c t??c cho nam
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/nam-gioi/vuot-duong-toc-nam-gioi.html">
                                            Vu???t d?????ng t??c nam
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/nam-gioi/cham-soc-co-the-nam.html">
                                            Ch??m s??c c?? th??? nam
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="cham-soc-sac-dep/tpcn-lam-dep.html">
                                        Th???c ph???m l??m ?????p
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="cham-soc-sac-dep/tpcn-lam-dep/chong-lao-hoa">
                                            Ch???ng l??o h??a
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/tpcn-lam-dep/collagen.html">
                                            Collagen
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/tpcn-lam-dep/lam-dep-da.html">
                                            L??m ?????p da
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/tpcn-lam-dep/giam-can.html">
                                            Gi???m c??n
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="cham-soc-sac-dep/dung-cu-lam-dep.html">
                                        D???ng c??? l??m ?????p
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-co-the/dao-cao-bam-mong-nhip.html">
                                            Dao c???o, b???m m??ng, nh??p
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-toc/dung-cu-cham-soc-toc.html">
                                            D???ng c??? ch??m s??c t??c
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-da/dung-cu-cham-soc-da.html">
                                            D???ng c??? ch??m s??c da
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/trang-diem/dung-cu-trang-diem.html">
                                            D???ng c??? trang ??i???m
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <a
                              className="product-category-link flex items-center justify-between"
                              href="cham-soc-suc-khoe.html"
                            >
                              <span className="text flex items-center">
                                <span className="icon">
                                  <img
                                    alt="Ch??m s??c s???c kh???e"
                                    
                                    data-src="./Data/Sites/1/media/icon/2.png"
                                    data-src-small="./Data/Sites/1/media/footer/cssk.png"
                                    src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                  />
                                </span>
                                Ch??m s??c s???c kh???e
                              </span>
                              <span className="arrow">
                                <em className="ri-arrow-right-s-line" />
                              </span>
                            </a>
                            <div className="product-category-subnav-container">
                              <div className="product-category-subnav-row">
                                <div className="product-category-subnav-groups">
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="cham-soc-suc-khoe/bang-ve-sinh.html">
                                        B??ng v??? sinh
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="cham-soc-suc-khoe/bang-ve-sinh/laurier.html">
                                            B??ng v??? sinh Laurier
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-suc-khoe/bang-ve-sinh/bang-ve-sinh-crecia.html">
                                            B??ng v??? sinh Crecia
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-suc-khoe/bang-ve-sinh/bang-ve-sinh-unicharm.html">
                                            B??ng v??? sinh Unicharm
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a>Ch??m s??c h???ng ng??y</a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="cham-soc-suc-khoe/bao-cao-su.html">
                                            Bao cao su
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-suc-khoe/ho-tro-y-te.html">
                                            H??? tr??? y t???
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-suc-khoe/khau-trang.html">
                                            Kh???u trang
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="cham-soc-suc-khoe/cham-soc-rang-mieng.html">
                                        Ch??m s??c r??ng mi???ng
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="cham-soc-suc-khoe/cham-soc-rang-mieng/ban-chai-danh-rang.html">
                                            B??n ch???i ????nh r??ng
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-suc-khoe/cham-soc-rang-mieng/kem-danh-rang.html">
                                            Kem ????nh r??ng
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-suc-khoe/cham-soc-rang-mieng/khu-mui-rang-mieng.html">
                                            Kh??? m??i r??ng mi???ng
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-suc-khoe/cham-soc-rang-mieng/vat-dung-nha-khoa.html">
                                            V???t d???ng nha khoa
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="cham-soc-suc-khoe/cham-soc-tai-mat-mui.html">
                                        Ch??m s??c tai, m???t m??i
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="cham-soc-suc-khoe/cham-soc-tai-mat-mui/cham-soc-mat.html">
                                            Ch??m s??c m???t
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-suc-khoe/cham-soc-tai-mat-mui/cham-soc-tai-1.html">
                                            Ch??m s??c tai
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="cham-soc-suc-khoe/thuc-pham-chuc-nang.html">
                                        Th???c ph???m ch???c n??ng
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="cham-soc-suc-khoe/thuc-pham-chuc-nang/bo-sung-canxi">
                                            B??? sung canxi
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-suc-khoe/thuc-pham-chuc-nang/bo-sung-dha">
                                            B??? sung DHA
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-suc-khoe/thuc-pham-chuc-nang/bo-sung-glucosamin">
                                            B??? sung Glucosamin
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-suc-khoe/thuc-pham-chuc-nang/bo-sung-vitamin.html">
                                            B??? sung Vitamin
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-suc-khoe/thuc-pham-chuc-nang/on-dinh-huyet-ap">
                                            ???n ?????nh huy???t ??p
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-suc-khoe/thuc-pham-chuc-nang/tao.html">
                                            T???o
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/tpcn-lam-dep/chong-lao-hoa">
                                            Ch???ng l??o h??a
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/tpcn-lam-dep/collagen.html">
                                            Collagen
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/tpcn-lam-dep/lam-dep-da.html">
                                            L??m ?????p da
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/tpcn-lam-dep/giam-can.html">
                                            Gi???m c??n
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-suc-khoe/thuc-pham-chuc-nang/thuc-pham-chuc-nang-khac.html">
                                            Th???c ph???m ch???c n??ng kh??c
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <a
                              className="product-category-link flex items-center justify-between"
                              href="thuc-pham.html"
                              
                            >
                              <span className="text flex items-center">
                                <span className="icon">
                                  <img
                                    alt=""
                                    
                                    data-src="./Data/Sites/1/media/icon/3.png"
                                    data-src-small="./Data/Sites/1/media/footer/th???c-ph???m.png"
                                    src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                  />
                                </span>
                                Th???c ph???m
                              </span>
                              <span className="arrow">
                                <em className="ri-arrow-right-s-line"></em>
                              </span>
                            </a>
                            <div
                              className="product-category-subnav-container"
                              style={{ width: "980px" }}
                            >
                              <div className="product-category-subnav-row">
                                <div className="product-category-subnav-groups">
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a
                                        href="thuc-pham/banh-keo-do-an-vat.html"
                                        
                                      >
                                        B??nh k???o, ????? ??n v???t
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="thuc-pham/banh-keo-do-an-vat/banh.html"
                                            
                                          >
                                            B??nh
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/banh-keo-do-an-vat/banh-keo-cho-tre-em.html"
                                            
                                          >
                                            B??nh k???o cho tr??? em
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/banh-keo-do-an-vat/chocolate.html"
                                            
                                          >
                                            Chocolate
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/banh-keo-do-an-vat/hoa-qua-hat-kho"
                                            
                                          >
                                            Hoa qu??? h???t kh??
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/banh-keo-do-an-vat/keo.html"
                                            
                                          >
                                            K???o
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/banh-keo-do-an-vat/keo-cao-su.html"
                                            
                                          >
                                            K???o cao su
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/banh-keo-do-an-vat/ngu-coc.html"
                                            
                                          >
                                            Ng?? c???c
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/banh-keo-do-an-vat/snack"
                                            
                                          >
                                            Snack
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/banh-keo-do-an-vat/thach.html"
                                            
                                          >
                                            Th???ch
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a
                                        href="thuc-pham/do-uong-pha-che.html"
                                        
                                      >
                                        ????? u???ng , pha ch???
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="thuc-pham/do-uong-pha-che/do-uong-co-ga.html"
                                            
                                          >
                                            ????? u???ng c?? ga
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/do-uong-pha-che/nguyen-lieu-pha-che.html"
                                            
                                          >
                                            Nguy??n li???u pha ch???
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/do-uong-pha-che/nuoc-hoa-qua"
                                            
                                          >
                                            N?????c hoa qu???
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/do-uong-pha-che/thuc-uong-tu-sua.html"
                                            
                                          >
                                            Th???c u???ng t??? s???a
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/do-uong-pha-che/tra-goi-hop.html"
                                            
                                          >
                                            Tr?? g??i, h???p
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/do-uong-pha-che/tra-ca-phe-dong-sn.html"
                                            
                                          >
                                            Tr??, c?? ph?? ????ng s???n
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/do-uong-pha-che/do-uong-khac.html"
                                            
                                          >
                                            ????? u???ng kh??c
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a
                                        href="thuc-pham/gia-vi.html"
                                        
                                      >
                                        Gia v???
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="thuc-pham/gia-vi/bot-dashi-mi-chinh-bot-ngot.html"
                                            
                                          >
                                            B???t Dashi, m?? ch??nh, b???t ng???t
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/gia-vi/cac-loai-sot.html"
                                            
                                          >
                                            C??c lo???i s???t
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/gia-vi/dau-an.html"
                                            
                                          >
                                            D???u ??n
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/gia-vi/duong-muoi.html"
                                            
                                          >
                                            ???????ng, mu???i
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/gia-vi/gia-vi-nau-nuong"
                                            
                                          >
                                            Gia v??? n???u n?????ng
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/gia-vi/giam-ponzu-mirin.html"
                                            
                                          >
                                            Gi???m, ponzu, mirin
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/gia-vi/nuoc-tuong-xi-dau.html"
                                            
                                          >
                                            N?????c t????ng, x?? d???u
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/gia-vi/sot-ca-chua-mayone-sot-salad.html"
                                            
                                          >
                                            S???t c?? chua, Mayone, s???t salad
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/gia-vi/sup-nuoc-dung.html"
                                            
                                          >
                                            S??p, n?????c d??ng
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/gia-vi/nuoc-sot-cham.html"
                                            
                                          >
                                            N?????c s???t ch???m
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/gia-vi/tuong-miso.html"
                                            
                                          >
                                            T????ng Miso
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a
                                        href="thuc-pham/my-mien"
                                        
                                      >
                                        M???, mi???n
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="thuc-pham/my-mien/mien-an-lien.html"
                                            
                                          >
                                            Mi???n ??n li???n
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/my-mien/mien-che-bien.html"
                                            
                                          >
                                            Mi???n ch??? bi???n
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/my-mien/my-an-lien.html"
                                            
                                          >
                                            M??? ??n li???n
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/my-mien/my-che-bien.html"
                                            
                                          >
                                            M??? ch??? bi???n
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a
                                        href="thuc-pham/nong-lam-hai-san.html"
                                        
                                      >
                                        N??ng l??m h???i s???n
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="thuc-pham/nong-lam-hai-san/hai-san-kho.html"
                                            
                                          >
                                            H???i s???n kh??
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/nong-lam-hai-san/nong-san-kho.html"
                                            
                                          >
                                            N??ng s???n kh??
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/nong-lam-hai-san/ruoc-ca-ruoc-hop.html"
                                            
                                          >
                                            Ru???c c??, ru???c h???p
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/nong-lam-hai-san/ruoc-ga-heo.html"
                                            
                                          >
                                            Ru???c g??, heo
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="thuc-pham/ruou" >
                                        R?????u
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="thuc-pham/ruou/ruou-mo-umeshu.html"
                                            
                                          >
                                            R?????u m?? (Umeshu)
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/ruou/ruou-nhat-sake.html"
                                            
                                          >
                                            R?????u Nh???t (Sake)
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/ruou/ruou-vang.html"
                                            
                                          >
                                            R?????u vang
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/ruou/ruou-wisky"
                                            
                                          >
                                            R?????u wisky
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a
                                        href="thuc-pham/thuc-pham-an-lien.html"
                                        
                                      >
                                        Th???c ph???m ??n li???n
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="thuc-pham/thuc-pham-an-lien/canh-soup-an-lien.html"
                                            
                                          >
                                            Canh, soup ??n li???n
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/thuc-pham-an-lien/com-chao-an-lien.html"
                                            
                                          >
                                            C??m, ch??o ??n li???n
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/thuc-pham-an-lien/gia-vi-an-lien"
                                            
                                          >
                                            Gia v??? ??n li???n
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/thuc-pham-an-lien/rac-com"
                                            
                                          >
                                            R???c c??m
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/thuc-pham-an-lien/sot-ca-ri-thit-ham.html"
                                            
                                          >
                                            S???t, c?? ri, th???t h???m
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a
                                        href="thuc-pham/san-pham-tu-sua.html"
                                        
                                      >
                                        S???n ph???m t??? s???a
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="thuc-pham/san-pham-tu-sua/kem-sua-chua.html"
                                            
                                          >
                                            Kem, s???a chua
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/san-pham-tu-sua/phomai.html"
                                            
                                          >
                                            Phomai
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/san-pham-tu-sua/sua-tuoi-sua-chua.html"
                                            
                                          >
                                            S???a t????i, s???a chua
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a
                                        href="thuc-pham/thuc-pham-khac.html"
                                        
                                      >
                                        Th???c ph???m kh??c
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="thuc-pham/thuc-pham-khac/set-qua.html"
                                            
                                          >
                                            Set qu??
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/thuc-pham-khac/thuc-pham-tuoi-song.html"
                                            
                                          >
                                            Th???c ph???m t????i s???ng
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/thuc-pham-khac/thuc-pham-khac-1.html"
                                            
                                          >
                                            Th???c ph???m kh??c
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="product-category-brand"></div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <a
                              className="product-category-link flex items-center justify-between"
                              href="nha-cua-doi-song.html"
                              
                            >
                              <span className="text flex items-center">
                                <span className="icon">
                                  <img
                                    alt=""
                                    
                                    data-src="./Data/Sites/1/media/icon/4.png"
                                    data-src-small="./Data/Sites/1/media/footer/nh??-c???a-??s.png"
                                    src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                  />
                                </span>
                                Nh?? c???a - ?????i s???ng
                              </span>
                              <span className="arrow">
                                <em className="ri-arrow-right-s-line"></em>
                              </span>
                            </a>
                            <div
                              className="product-category-subnav-container"
                              style={{ width: "980px" }}
                            >
                              <div className="product-category-subnav-row">
                                <div className="product-category-subnav-groups">
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a
                                        href="nha-cua-doi-song/bep-va-phong-an.html"
                                        
                                      >
                                        B???p v?? ph??ng ??n
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/bep-va-phong-an/am-phich-binh-dung-nuoc.html"
                                            
                                          >
                                            ???m ph??ch, b??nh ?????ng n?????c
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/bep-va-phong-an/bao-quan-thuc-pham.html"
                                            
                                          >
                                            B???o qu???n th???c ph???m
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/bep-va-phong-an/coc-bat-dia.html"
                                            
                                          >
                                            C???c, b??t ????a
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/bep-va-phong-an/dao-keo-thot.html"
                                            
                                          >
                                            Dao, k??o, th???t
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/bep-va-phong-an/dung-cu-ve-sinh-bep.html"
                                            
                                          >
                                            D???ng c??? v??? sinh b???p
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/bep-va-phong-an/hop-com.html"
                                            
                                          >
                                            H???p c??m
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/bep-va-phong-an/hop-khay-dung-thuc-pham.html"
                                            
                                          >
                                            H???p, khay ?????ng th???c ph???m
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/bep-va-phong-an/noi-chao.html"
                                            
                                          >
                                            N???i, ch???o
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/bep-va-phong-an/thau-chau-ro-ra.html"
                                            
                                          >
                                            Thau ch???u, r??? r??
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/bep-va-phong-an/thia-dia-dua-muong.html"
                                            
                                          >
                                            Th??a, d??a, ????a, mu???ng
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/bep-va-phong-an/vat-dung-ban-an.html"
                                            
                                          >
                                            V???t d???ng b??n ??n
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/bep-va-phong-an/vat-dung-dung-do-nha-bep.html"
                                            
                                          >
                                            V???t d???ng ?????ng ????? nh?? b???p
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/bep-va-phong-an/vat-dung-tien-ich-khac.html"
                                            
                                          >
                                            V???t d???ng ti???n ??ch kh??c
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a
                                        href="nha-cua-doi-song/giat-xa-quan-ao.html"
                                        
                                      >
                                        Gi???t, x??? qu???n ??o
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/giat-xa-quan-ao/nuoc-xa-vai.html"
                                            
                                          >
                                            N?????c x??? v???i
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/giat-xa-quan-ao/xa-phong-giat-tay.html"
                                            
                                          >
                                            X?? ph??ng gi???t t???y
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a
                                        href="nha-cua-doi-song/do-dung-nha-tam-toilet.html"
                                        
                                      >
                                        ????? d??ng nh?? t???m, toilet
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/do-dung-nha-tam-toilet/dung-cu-de-do.html"
                                            
                                          >
                                            D???ng c??? ????? ?????
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/do-dung-nha-tam-toilet/dung-cu-phoi-quan-ao.html"
                                            
                                          >
                                            D???ng c??? ph??i qu???n ??o
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/do-dung-nha-tam-toilet/tham.html"
                                            
                                          >
                                            Th???m
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/do-dung-nha-tam-toilet/vat-dung-nha-tam.html"
                                            
                                          >
                                            V???t d???ng nh?? t???m
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/do-dung-nha-tam-toilet/vat-dung-toilet"
                                            
                                          >
                                            V???t d???ng toilet
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/do-dung-nha-tam-toilet/xo-chau-gio-dung-do.html"
                                            
                                          >
                                            X?? ch???u, gi??? ?????ng ?????
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a
                                        href="nha-cua-doi-song/do-dung-sinh-hoat-gia-dinh.html"
                                        
                                      >
                                        ????? d??ng sinh ho???t gia ????nh
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/do-dung-sinh-hoat-gia-dinh/do-di-mua"
                                            
                                          >
                                            ????? ??i m??a
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/do-dung-sinh-hoat-gia-dinh/do-dien"
                                            
                                          >
                                            ????? ??i???n
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/do-dung-sinh-hoat-gia-dinh/do-dung-ve-sinh-nha-cua.html"
                                            
                                          >
                                            ????? d??ng v??? sinh nh?? c???a
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/do-dung-sinh-hoat-gia-dinh/vat-dung-dung-do.html"
                                            
                                          >
                                            V???t d???ng ?????ng ?????
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/do-dung-sinh-hoat-gia-dinh/vat-trang-tri.html"
                                            
                                          >
                                            V???t trang tr??
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/do-dung-sinh-hoat-gia-dinh/vat-dung-sinh-hoat-khac.html"
                                            
                                          >
                                            V???t d???ng sinh ho???t kh??c
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a
                                        href="nha-cua-doi-song/khan.html"
                                        
                                      >
                                        Kh??n
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/khan/khan-lau.html"
                                            
                                          >
                                            Kh??n lau
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/khan/khan-mat.html"
                                            
                                          >
                                            Kh??n m???t
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/khan/khan-tam.html"
                                            
                                          >
                                            Kh??n t???m
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a
                                        href="nha-cua-doi-song/khu-mui"
                                        
                                      >
                                        Kh??? m??i
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/khu-mui/khu-mui-toilet.html"
                                            
                                          >
                                            Kh??? m??i toilet
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/khu-mui/khu-mui-phong.html"
                                            
                                          >
                                            Kh??? m??i ph??ng
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/khu-mui/khu-mui-o-to.html"
                                            
                                          >
                                            Kh??? m??i ?? t??
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/khu-mui/khu-mui-khac.html"
                                            
                                          >
                                            Kh??? m??i kh??c
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a
                                        href="nha-cua-doi-song/phong-chong-con-trung.html"
                                        
                                      >
                                        Ph??ng ch???ng c??n tr??ng
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/phong-chong-con-trung/chong-con-trung"
                                            
                                          >
                                            Ch???ng c??n tr??ng
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/phong-chong-con-trung/diet-con-trung.html"
                                            
                                          >
                                            Di???t c??n tr??ng
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a
                                        href="nha-cua-doi-song/xa-phong-chat-tay-rua.html"
                                        
                                      >
                                        X?? ph??ng, ch???t t???y r???a
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/xa-phong-chat-tay-rua/chong-nam-moc-hut-am.html"
                                            
                                          >
                                            Ch???ng n???m m???c, h??t ???m
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/xa-phong-chat-tay-rua/nuoc-rua-bat"
                                            
                                          >
                                            N?????c r???a b??t
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/xa-phong-chat-tay-rua/rua-rau-qua.html"
                                            
                                          >
                                            R???a rau qu???
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/xa-phong-chat-tay-rua/tay-rua-long-giat.html"
                                            
                                          >
                                            T???y r???a l???ng gi???t
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/xa-phong-chat-tay-rua/tay-rua-nha-bep.html"
                                            
                                          >
                                            T???y r???a nh?? b???p
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/xa-phong-chat-tay-rua/tay-rua-san-nha-tam"
                                            
                                          >
                                            T???y r???a s??n, nh?? t???m
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/xa-phong-chat-tay-rua/tay-rua-thong-tac-duong-ong.html"
                                            
                                          >
                                            T???y r???a, th??ng t???c ???????ng ???ng
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/xa-phong-chat-tay-rua/xa-phong-rua-tay.html"
                                            
                                          >
                                            X?? ph??ng r???a tay
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a
                                        href="nha-cua-doi-song/san-pham-tu-giay"
                                        
                                      >
                                        S???n ph???m t??? gi???y
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/san-pham-tu-giay/giay-an.html"
                                            
                                          >
                                            Gi???y ??n
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/san-pham-tu-giay/giay-uot-1.html"
                                            
                                          >
                                            Gi???y ?????t
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/san-pham-tu-giay/giay-nha-bep.html"
                                            
                                          >
                                            Gi???y nh?? b???p
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/san-pham-tu-giay/giay-ve-sinh"
                                            
                                          >
                                            Gi???y v??? sinh
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a
                                        href="nha-cua-doi-song/gia-dung-khac.html"
                                        
                                      >
                                        Gia d???ng kh??c
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/gia-dung-khac/dung-cu-thi-cong.html"
                                            
                                          >
                                            D???ng c??? thi c??ng
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/gia-dung-khac/hang-dong-gia.html"
                                            
                                          >
                                            H??ng ?????ng gi??
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="product-category-brand"></div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <a
                              className="product-category-link flex items-center justify-between"
                              href="thoi-trang.html"
                              
                            >
                              <span className="text flex items-center">
                                <span className="icon">
                                  <img
                                    alt=""
                                    
                                    data-src="./Data/Sites/1/media/icon/5.png"
                                    data-src-small="./Data/Sites/1/media/footer/th???i-trang.png"
                                    src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                  />
                                </span>
                                Th???i trang
                              </span>
                              <span className="arrow">
                                <em className="ri-arrow-right-s-line"></em>
                              </span>
                            </a>
                            <div
                              className="product-category-subnav-container"
                              style={{ width: "980px" }}
                            >
                              <div className="product-category-subnav-row">
                                <div className="product-category-subnav-groups">
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a
                                        href="thoi-trang/do-boi.html"
                                        
                                      >
                                        ????? b??i
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="thoi-trang/do-boi/kinh-boi.html"
                                            
                                          >
                                            K??nh b??i
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thoi-trang/do-boi/mu-boi.html"
                                            
                                          >
                                            M?? b??i
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thoi-trang/do-boi/phu-kien-boi-khac.html"
                                            
                                          >
                                            Ph??? ki???n b??i kh??c
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a
                                        href="thoi-trang/phu-kien-thoi-trang.html"
                                        
                                      >
                                        Ph??? ki???n th???i trang
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="thoi-trang/phu-kien-thoi-trang/phu-kien-giay.html"
                                            
                                          >
                                            Ph??? ki???n gi??y
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thoi-trang/phu-kien-thoi-trang/phu-kien-khac.html"
                                            
                                          >
                                            Ph??? ki???n kh??c
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a
                                        href="thoi-trang/thoi-trang-nam.html"
                                        
                                      >
                                        Th???i trang nam
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="thoi-trang/thoi-trang-nam/ao-chong-nang-nam.html"
                                            
                                          >
                                            ??o ch???ng n???ng nam
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thoi-trang/thoi-trang-nam/ao-khoac-giu-nhiet-nam"
                                            
                                          >
                                            ??o kho??c, gi??? nhi???t nam
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thoi-trang/thoi-trang-nam/ao-phong-so-mi-nam.html"
                                            
                                          >
                                            ??o ph??ng, s?? mi nam
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thoi-trang/thoi-trang-nam/quan-nam.html"
                                            
                                          >
                                            Qu???n nam
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thoi-trang/thoi-trang-nam/tat-nam"
                                            
                                          >
                                            T???t nam
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a
                                        href="thoi-trang/thoi-trang-nu.html"
                                        
                                      >
                                        Th???i trang n???
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="thoi-trang/thoi-trang-nu/ao-chong-nang-nu.html"
                                            
                                          >
                                            ??o ch???ng n???ng n???
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thoi-trang/thoi-trang-nu/ao-khoac-giu-nhiet-nu.html"
                                            
                                          >
                                            ??o kho??c, gi??? nhi???t n???
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thoi-trang/thoi-trang-nu/ao-phong-ao-so-mi-nu.html"
                                            
                                          >
                                            ??o ph??ng, ??o s?? mi n???
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thoi-trang/thoi-trang-nu/do-lot-nu.html"
                                            
                                          >
                                            ????? l??t n???
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thoi-trang/thoi-trang-nu/giay-dep.html"
                                            
                                          >
                                            Gi??y, d??p
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thoi-trang/thoi-trang-nu/phu-kien-chong-nang.html"
                                            
                                          >
                                            Ph??? ki???n ch???ng n???ng
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thoi-trang/thoi-trang-nu/quan-nu.html"
                                            
                                          >
                                            Qu???n n???
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thoi-trang/thoi-trang-nu/tat-nu"
                                            
                                          >
                                            T???t n???
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a
                                        href="thoi-trang/thoi-trang-tre-em"
                                        
                                      >
                                        Th???i trang tr??? em
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="thoi-trang/thoi-trang-tre-em/ao-chong-nang-tre-em.html"
                                            
                                          >
                                            ??o ch???ng n???ng tr??? em
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thoi-trang/thoi-trang-tre-em/ao-khoac-giu-nhiet-tre-em.html"
                                            
                                          >
                                            ??o kho??c, gi??? nhi???t tr??? em
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thoi-trang/thoi-trang-tre-em/izun.html"
                                            
                                          >
                                            IZUN
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thoi-trang/thoi-trang-tre-em/quan-ao-tre-em.html"
                                            
                                          >
                                            Qu???n, ??o tr??? em
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thoi-trang/thoi-trang-tre-em/tat-tre-em.html"
                                            
                                          >
                                            T???t tr??? em
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thoi-trang/thoi-trang-tre-em/ao-so-mi-kids-boy.html"
                                            
                                          >
                                            ??o s?? mi kids boy
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-brand"></div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <a
                              className="product-category-link flex items-center justify-between"
                              href="van-phong-pham.html"
                              
                            >
                              <span className="text flex items-center">
                                <span className="icon">
                                  <img
                                    alt=""
                                    
                                    data-src="./Data/Sites/1/media/icon/6.png"
                                    data-src-small="./Data/Sites/1/media/footer/vpp.png"
                                    src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                  />
                                </span>
                                V??n ph??ng ph???m
                              </span>
                              <span className="arrow">
                                <em className="ri-arrow-right-s-line"></em>
                              </span>
                            </a>
                            <div
                              className="product-category-subnav-container"
                              style={{ width: "980px" }}
                            >
                              <div className="product-category-subnav-row">
                                <div className="product-category-subnav-groups">
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a
                                        href="van-phong-pham/do-dung-hoc-tap.html"
                                        
                                      >
                                        ????? d??ng h???c t???p
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="van-phong-pham/do-dung-hoc-tap/but.html"
                                            
                                          >
                                            B??t
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="van-phong-pham/do-dung-hoc-tap/cap.html"
                                            
                                          >
                                            C???p
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="van-phong-pham/do-dung-hoc-tap/giay-note"
                                            
                                          >
                                            Gi???y note
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="van-phong-pham/do-dung-hoc-tap/sach"
                                            
                                          >
                                            S??ch
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="van-phong-pham/do-dung-hoc-tap/tap-to-ve-tranh.html"
                                            
                                          >
                                            T???p t??, v??? tranh
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="van-phong-pham/do-dung-hoc-tap/thuoc-compa-bang-tinh.html"
                                            
                                          >
                                            Th?????c, compa, b???ng t??nh
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="van-phong-pham/do-dung-hoc-tap/phu-kien-vpp-khac.html"
                                            
                                          >
                                            Ph??? ki???n VPP kh??c
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a
                                        href="van-phong-pham/do-dung-vpp.html"
                                        
                                      >
                                        ????? d??ng VPP
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="van-phong-pham/do-dung-vpp/dao-keo-bang-dinh-vpp.html"
                                            
                                          >
                                            Dao, k??o, b??ng d??nh VPP
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="van-phong-pham/do-dung-vpp/kep-ghim-file-chua-tai-lieu.html"
                                            
                                          >
                                            K???p, ghim, file ch???a t??i li???u
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="van-phong-pham/do-dung-vpp/tui-thiep.html"
                                            
                                          >
                                            T??i, thi???p
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="product-category-brand"></div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <a
                              className="product-category-link flex items-center justify-between"
                              href="hang-order.html"
                              
                            >
                              <span className="text flex items-center">
                                <span className="icon">
                                  <img
                                    alt=""
                                    
                                    data-src="./Data/Sites/1/media/icon/7.png"
                                    data-src-small="./Data/Sites/1/media/footer/hang-order.png"
                                    src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                  />
                                </span>
                                H??ng Order
                              </span>
                              <span className="arrow">
                                <em className="ri-arrow-right-s-line"></em>
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="product-category-link flex items-center justify-between"
                              href="san-pham-hot-1.html"
                              
                            >
                              <span className="text flex items-center">
                                <span className="icon">
                                  <img
                                    alt=""
                                    
                                    data-src="./Data/Sites/1/media/icon/8.png"
                                    data-src-small="./Data/Sites/1/media/footer/s???n-ph???m-??a-th??ch.png"
                                    src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                  />
                                </span>
                                S???n ph???m hot
                              </span>
                              <span className="arrow">
                                <em className="ri-arrow-right-s-line"></em>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="site-feature-wrapper Module Module-220">
                <div className="ModuleContent">
                  <div className="site-feature">
                    <ul></ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="mobile-menu hidden-desktop">
          <div className="container">
            <div className="mobile-menu-wrap" />
            <div className="mobile-menu-tool">
              <div className="mobile-menu-social">
                <div className="Module Module-1281">
                  <div className="ModuleContent">
                    <div className="social-link">
                      <div className="footer-title">
                        K???t n???i v???i ch??ng t??i:&nbsp;
                      </div>
                      <ul>
                        <li>
                          <a href="https://www.facebook.com/SakukoStore/">
                            <img
                              alt="#"
                              src="Data/Sites/1/media/footer/fb.png"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/sakukostore/">
                            <img
                              alt="#"
                              src="Data/Sites/1/media/footer/instagram-(2).png"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="https://zalo.me/3381137266754915476">
                            <img
                              alt=""
                              src="Data/Sites/1/media/footer/logo-zalo.png"
                              style={{ width: "36px", height: "36px" }}
                            />
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
      </header>
    </React.Fragment>
  );
}
