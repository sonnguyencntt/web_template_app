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
  const [isLoadedHeader , setIsLoaded] = useState(false)
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




  function checkIsLoaded(){
    if(isLoaded === false )
    {
    
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


      dispatch({type : c.SET_IS_LOADED , data:true})

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

  return (
    <React.Fragment>
      <header>
        <div className="top-campaign-banner">
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
                  <div className="campaign-banner-close">
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
                            <em className="ri-edit-line"></em>Trang chủ
                          </Link>
                        </li>
                        <li>
                          <Link to="/danh-sach-san-pham" >
                            <em className="ri-file-list-3-line"></em>Sản phẩm
                          </Link>
                        </li>
                        <li>
                          <Link    to={{
                          pathname: "/tin-tuc",
                          state: { prevPath: window.location.pathname },
                        }} >
                            <em className="ri-customer-service-2-line"></em>Tin
                            tức
                          </Link>
                        </li>
                        <li>
                          <Link  to={{
                          pathname: "/ma-giam-gia",
                          state: { prevPath: window.location.pathname },
                        }} >
                            <em className="ri-price-tag-3-line"></em>Voucher
                          </Link>
                        </li>

                        <li>
                          <Link  to={{
                          pathname: "/combo-giam-gia",
                          state: { prevPath: window.location.pathname },
                        }} >
                            <em className="ri-price-tag-3-line"></em>Combo Giảm
                            giá
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="top-header-right">
                <div className="header-util-list flex items-center">
                  <div className="header-util-item hotline-wrapper">
                    <div className="hotline">
                      <div className="Module Module-1269">
                        <div className="ModuleContent">
                          <a onClick={handleShowPhonePopup}>
                            <em className="ri-phone-line" />
                            <span>Đăng nhập</span>
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
                        <em className="ri-draft-line" />
                        <span>Đăng kí</span>
                      </a>
                    </div>
                  </div>
                  <div className="header-util-item account-wrapper">
                    <div className="account dropdown">
                      <a
                        className
                        rel="nofollow"
                        href="Secure/Login42a6.html?returnurl=%2f"
                      >
                        My account
                      </a>
                      <div className="dropdown-content">
                        <ul></ul>
                      </div>
                    </div>
                  </div>
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
                      <a href="index.html">
                        <img
                          style={{ width: "180px", height: "59px" }}
                          src={appTheme.logo_url}
                        />
                      </a>
                    </div>
                    <div className="menu-mobile-toggle hidden-desktop">
                      <em className="ri-menu-line" />
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
              <div className="col col-lg-7">
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
                <div className="search-wrapper Module Module-217">
                  <div
                    id="ctl00_mdl217_ctl00_Search_pnlSearch"
                    className="searchbox productsearchbox"
                  >
                    <input
                      value={searchValue}
                      onChange={handleInputChange}
                      type="text"
                      id="ctl00_mdl217_ctl00_Search_txtSearch"
                      title="Tìm kiếm"
                      className="searchinput"
                      autoComplete="off"
                      placeholder="Bạn cần tìm sản phẩm gì?"
                    />
                    <button
                      onClick={handleSearch}
                      id="ctl00_mdl217_ctl00_Search_btnSearch"
                      className="searchbutton"
                    >
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col col-lg-1">
                <div className="cart-wrapper Module Module-218">
                  <div className="ModuleContent">
                    <div className="cart">
                      <div className="cart-toggle position-relative inline-block">
                        <Link>
                          <img
                            to="/gio-hang"
                            src="https://sakukostore.com.vn/Data/Sites/1/skins/default/img/cart.png"
                            alt="Cart icon"
                          />
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
                      <strong>Danh mục sản phẩm</strong>
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
                                    alt="Khuyến mãi"
                                    
                                    data-src="./Data/sites/1/skins/default/img/cate/1.png"
                                    src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                  />
                                </span>
                                Khuyến mãi
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
                                    alt="Đồ cho mẹ và bé"
                                    
                                    data-src="./Data/Sites/1/media/header/cate/2.png"
                                    data-src-small="./Data/Sites/1/media/footer/mẹ---bé.png"
                                    src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                  />
                                </span>{" "}
                                Mẹ - Bé
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
                                      <a href="me-be/bim.html">Bỉm cho bé</a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="me-be/bim/bim-merries.html">
                                            Bỉm Merries
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/bim/bim-genki.html">
                                            Bỉm Genki
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="me-be/sua.html">Sữa cho bé</a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="me-be/sua/sua-glico.html">
                                            Sữa Glico
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/sua/sua-morinaga.html">
                                            Sữa Morinaga
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/sua/sua-meiji.html">
                                            Sữa Meiji
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="me-be/be-uong-sua.html">
                                        Bé uống sữa
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="me-be/be-uong-sua/binh-sua.html">
                                            Bình sữa
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/be-uong-sua/num-ti.html">
                                            Núm ti
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/be-uong-sua/gam-nuou.html">
                                            Gặm nướu
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/be-uong-sua/ve-sinh-binh-sua.html">
                                            Vệ sinh bình sữa
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/be-uong-sua/hop-chia-sua.html">
                                            Hộp chia sữa
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="me-be/cham-soc-me-bau.html">
                                        Dành cho mẹ bầu
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="me-be/cham-soc-me-bau/tpcn-me-bau.html">
                                            Thực phẩm chức năng
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/cham-soc-me-bau/sua-bau.html">
                                            Sữa bầu
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/cham-soc-me-bau/tham-sua-cho-me-bau.html">
                                            Thấm sữa
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="me-be/rang-mieng-cho-be.html">
                                        Chăm sóc răng miệng
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="me-be/rang-mieng-cho-be/ban-chai-cho-be.html">
                                            Bàn chải
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/rang-mieng-cho-be/kem-danh-rang-cho-be.html">
                                            Kem đánh răng
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/rang-mieng-cho-be/chong-sau-rang-cho-be.html">
                                            Chống sâu răng
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/rang-mieng-cho-be/tua-luoi-cho-be.html">
                                            Tưa lưỡi
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="me-be/dung-cu-an-cho-be.html">
                                        Dụng cụ ăn cho bé
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="me-be/dung-cu-an-cho-be/binh-tap-uong.html">
                                            Bình tập uống
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/dung-cu-an-cho-be/khay-chia-thuc-an">
                                            Khay chia thức ăn
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/dung-cu-an-cho-be/thia-dua-cho-be">
                                            Thìa đũa cho bé
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/dung-cu-an-cho-be/bat-an-cho-be.html">
                                            Bát cho bé ăn
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a>Đồ chơi, tập đi</a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="me-be/do-choi-cho-be.html">
                                            Đồ chơi cho bé
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/ghe-xe-tap-di-cho-be">
                                            Ghế, xe tập đi
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="me-be/be-khoe.html">
                                        Chăm sóc cơ thể bé
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="me-be/be-khoe/chong-muoi-con-trung">
                                            Chống muỗi, chống côn trùng
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/be-khoe/chong-nang-cho-be.html">
                                            Chống nắng cho bé
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/be-khoe/ha-sot-cho-be">
                                            Hạ sốt, trị ho, sổ mũi
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/be-khoe/kem-duong-dau-massage-cho-be.html">
                                            Kem dưỡng massage cho bé
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/be-khoe/bit-o-dien-chan-cua.html">
                                            Bịt ổ điện, chặn cửa
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="me-be/ve-sinh-be.html">
                                        Vệ sinh cho bé{" "}
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="me-be/ve-sinh-be/giay-uot-cho-be.html">
                                            Giấy ướt cho bé
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/ve-sinh-be/mac-treo-quan-ao-cho-be">
                                            Mắc treo quần áo cho bé
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/ve-sinh-be/bo-ve-sinh-cho-be.html">
                                            Bô vệ sinh cho bé
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="me-be/be-tam-goi.html">
                                        Bé tắm gội
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="me-be/be-tam-goi/sua-tam-cho-be.html">
                                            Sữa tắm
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/be-tam-goi/dau-goi-cho-be.html">
                                            Dầu gội
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/be-tam-goi/phu-kien-tam-goi-ve-sinh-cho-be.html">
                                            Phụ kiện tắm gội, vệ sinh
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/be-tam-goi/giat-xa-cho-be.html">
                                            Giặt xả cho bé
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="me-be/thuc-pham-cho-be.html">
                                        Thực phẩm cho bé
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="me-be/thuc-pham-cho-be/banh-an-dam.html">
                                            Bánh ăn dặm
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/thuc-pham-cho-be/bot-an-dam.html">
                                            Bột ăn dặm
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/thuc-pham-cho-be/chao-soup-an-dam">
                                            Cháo soup ăn dặm
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/thuc-pham-cho-be.html">
                                            Cơm trộn
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/thuc-pham-cho-be/my-an-dam.html">
                                            Mỳ ăn dặm
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/thuc-pham-cho-be/nuoc-dien-giai.html">
                                            Nước điện giải
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/thuc-pham-cho-be/nuoc-ep-cho-be.html">
                                            Nước ép cho bé
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/thuc-pham-cho-be/sot-an-dam.html">
                                            Sốt ăn dặm
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/thuc-pham-cho-be/thach-bo-sung-vitamin.html">
                                            Thạch bổ sung vitamin
                                          </a>
                                        </li>
                                        <li>
                                          <a href="me-be/thuc-pham-cho-be/tra-lua-mach.html">
                                            Trà lúa mạch
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
                                Chăm sóc sắc đẹp
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
                                        Chăm sóc da
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-da/kem-duong.html">
                                            Kem dưỡng da
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-da/rua-mat.html">
                                            Rửa mặt
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-da/mat-na-duong-da.html">
                                            Mặt nạ dưỡng da
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-da/nuoc-hoa-hong.html">
                                            Nước hoa hồng
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-da/tay-da-chet.html">
                                            Tẩy da chết
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-da/tay-trang.html">
                                            Tẩy trang
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-da/tinh-chat-duong-da.html">
                                            Tinh chất dưỡng da
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-da/dung-cu-cham-soc-da.html">
                                            Phụ kiện chăm sóc da
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-da/cham-soc-da-khac.html">
                                            Chăm sóc da khác
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="cham-soc-sac-dep/cham-soc-toc.html">
                                        Chăm sóc tóc
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-toc/duong-toc.html">
                                            Dưỡng tóc
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-toc/dau-goi-dau-xa">
                                            Dầu gội, dầu xả
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-toc/nhuom-toc.html">
                                            Nhuộm tóc
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-toc/dung-cu-cham-soc-toc.html">
                                            Dụng cụ chăm sóc tóc
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="cham-soc-sac-dep/cham-soc-co-the.html">
                                        Chăm sóc cơ thể
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-co-the/chong-nang.html">
                                            Chống nắng
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-co-the/duong-moi">
                                            Dưỡng môi
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-co-the/duong-the.html">
                                            Dưỡng thể
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-co-the/khu-mui-giam-mo-hoi.html">
                                            Khử mùi mồ hôi
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-co-the/sua-tam">
                                            Sữa tắm
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-co-the/tay-long.html">
                                            Tẩy lông
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-co-the/dao-cao-bam-mong-nhip.html">
                                            Dao cạo, bấm móng
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="cham-soc-sac-dep/trang-diem.html">
                                        Trang điểm
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="cham-soc-sac-dep/trang-diem/kem-nen.html">
                                            Kem nền
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/trang-diem/phan.html">
                                            Phấn
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/trang-diem/son-moi.html">
                                            Son môi
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/trang-diem/trang-diem-mat.html">
                                            Trang điểm mắt
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/trang-diem/trang-diem-khac.html">
                                            Trang điểm khác
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/trang-diem/dung-cu-trang-diem.html">
                                            Dụng cụ trang điểm
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="cham-soc-sac-dep/nam-gioi.html">
                                        Dành cho nam
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="cham-soc-sac-dep/nam-gioi/cham-soc-da-cho-nam.html">
                                            Chăm sóc da cho nam
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/nam-gioi/cham-soc-toc-cho-nam.html">
                                            Chăm sóc tóc cho nam
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/nam-gioi/vuot-duong-toc-nam-gioi.html">
                                            Vuốt dưỡng tóc nam
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/nam-gioi/cham-soc-co-the-nam.html">
                                            Chăm sóc cơ thể nam
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="cham-soc-sac-dep/tpcn-lam-dep.html">
                                        Thực phẩm làm đẹp
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="cham-soc-sac-dep/tpcn-lam-dep/chong-lao-hoa">
                                            Chống lão hóa
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/tpcn-lam-dep/collagen.html">
                                            Collagen
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/tpcn-lam-dep/lam-dep-da.html">
                                            Làm đẹp da
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/tpcn-lam-dep/giam-can.html">
                                            Giảm cân
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="cham-soc-sac-dep/dung-cu-lam-dep.html">
                                        Dụng cụ làm đẹp
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-co-the/dao-cao-bam-mong-nhip.html">
                                            Dao cạo, bấm móng, nhíp
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-toc/dung-cu-cham-soc-toc.html">
                                            Dụng cụ chăm sóc tóc
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/cham-soc-da/dung-cu-cham-soc-da.html">
                                            Dụng cụ chăm sóc da
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/trang-diem/dung-cu-trang-diem.html">
                                            Dụng cụ trang điểm
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
                                    alt="Chăm sóc sức khỏe"
                                    
                                    data-src="./Data/Sites/1/media/icon/2.png"
                                    data-src-small="./Data/Sites/1/media/footer/cssk.png"
                                    src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                  />
                                </span>
                                Chăm sóc sức khỏe
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
                                        Băng vệ sinh
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="cham-soc-suc-khoe/bang-ve-sinh/laurier.html">
                                            Băng vệ sinh Laurier
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-suc-khoe/bang-ve-sinh/bang-ve-sinh-crecia.html">
                                            Băng vệ sinh Crecia
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-suc-khoe/bang-ve-sinh/bang-ve-sinh-unicharm.html">
                                            Băng vệ sinh Unicharm
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a>Chăm sóc hằng ngày</a>
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
                                            Hỗ trợ y tế
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-suc-khoe/khau-trang.html">
                                            Khẩu trang
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="cham-soc-suc-khoe/cham-soc-rang-mieng.html">
                                        Chăm sóc răng miệng
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="cham-soc-suc-khoe/cham-soc-rang-mieng/ban-chai-danh-rang.html">
                                            Bàn chải đánh răng
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-suc-khoe/cham-soc-rang-mieng/kem-danh-rang.html">
                                            Kem đánh răng
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-suc-khoe/cham-soc-rang-mieng/khu-mui-rang-mieng.html">
                                            Khử mùi răng miệng
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-suc-khoe/cham-soc-rang-mieng/vat-dung-nha-khoa.html">
                                            Vật dụng nha khoa
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="cham-soc-suc-khoe/cham-soc-tai-mat-mui.html">
                                        Chăm sóc tai, mắt mũi
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="cham-soc-suc-khoe/cham-soc-tai-mat-mui/cham-soc-mat.html">
                                            Chăm sóc mắt
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-suc-khoe/cham-soc-tai-mat-mui/cham-soc-tai-1.html">
                                            Chăm sóc tai
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="cham-soc-suc-khoe/thuc-pham-chuc-nang.html">
                                        Thực phẩm chức năng
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a href="cham-soc-suc-khoe/thuc-pham-chuc-nang/bo-sung-canxi">
                                            Bổ sung canxi
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-suc-khoe/thuc-pham-chuc-nang/bo-sung-dha">
                                            Bổ sung DHA
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-suc-khoe/thuc-pham-chuc-nang/bo-sung-glucosamin">
                                            Bổ sung Glucosamin
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-suc-khoe/thuc-pham-chuc-nang/bo-sung-vitamin.html">
                                            Bổ sung Vitamin
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-suc-khoe/thuc-pham-chuc-nang/on-dinh-huyet-ap">
                                            Ổn định huyết áp
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-suc-khoe/thuc-pham-chuc-nang/tao.html">
                                            Tảo
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/tpcn-lam-dep/chong-lao-hoa">
                                            Chống lão hóa
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/tpcn-lam-dep/collagen.html">
                                            Collagen
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/tpcn-lam-dep/lam-dep-da.html">
                                            Làm đẹp da
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-sac-dep/tpcn-lam-dep/giam-can.html">
                                            Giảm cân
                                          </a>
                                        </li>
                                        <li>
                                          <a href="cham-soc-suc-khoe/thuc-pham-chuc-nang/thuc-pham-chuc-nang-khac.html">
                                            Thực phẩm chức năng khác
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
                                    data-src-small="./Data/Sites/1/media/footer/thực-phẩm.png"
                                    src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                  />
                                </span>
                                Thực phẩm
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
                                        Bánh kẹo, đồ ăn vặt
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="thuc-pham/banh-keo-do-an-vat/banh.html"
                                            
                                          >
                                            Bánh
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/banh-keo-do-an-vat/banh-keo-cho-tre-em.html"
                                            
                                          >
                                            Bánh kẹo cho trẻ em
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
                                            Hoa quả hạt khô
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/banh-keo-do-an-vat/keo.html"
                                            
                                          >
                                            Kẹo
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/banh-keo-do-an-vat/keo-cao-su.html"
                                            
                                          >
                                            Kẹo cao su
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/banh-keo-do-an-vat/ngu-coc.html"
                                            
                                          >
                                            Ngũ cốc
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
                                            Thạch
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
                                        Đồ uống , pha chế
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="thuc-pham/do-uong-pha-che/do-uong-co-ga.html"
                                            
                                          >
                                            Đồ uống có ga
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/do-uong-pha-che/nguyen-lieu-pha-che.html"
                                            
                                          >
                                            Nguyên liệu pha chế
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/do-uong-pha-che/nuoc-hoa-qua"
                                            
                                          >
                                            Nước hoa quả
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/do-uong-pha-che/thuc-uong-tu-sua.html"
                                            
                                          >
                                            Thức uống từ sữa
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/do-uong-pha-che/tra-goi-hop.html"
                                            
                                          >
                                            Trà gói, hộp
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/do-uong-pha-che/tra-ca-phe-dong-sn.html"
                                            
                                          >
                                            Trà, cà phê đóng sẵn
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/do-uong-pha-che/do-uong-khac.html"
                                            
                                          >
                                            Đồ uống khác
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
                                        Gia vị
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="thuc-pham/gia-vi/bot-dashi-mi-chinh-bot-ngot.html"
                                            
                                          >
                                            Bột Dashi, mì chính, bột ngọt
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/gia-vi/cac-loai-sot.html"
                                            
                                          >
                                            Các loại sốt
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/gia-vi/dau-an.html"
                                            
                                          >
                                            Dầu ăn
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/gia-vi/duong-muoi.html"
                                            
                                          >
                                            Đường, muối
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/gia-vi/gia-vi-nau-nuong"
                                            
                                          >
                                            Gia vị nấu nướng
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/gia-vi/giam-ponzu-mirin.html"
                                            
                                          >
                                            Giấm, ponzu, mirin
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/gia-vi/nuoc-tuong-xi-dau.html"
                                            
                                          >
                                            Nước tương, xì dầu
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/gia-vi/sot-ca-chua-mayone-sot-salad.html"
                                            
                                          >
                                            Sốt cà chua, Mayone, sốt salad
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/gia-vi/sup-nuoc-dung.html"
                                            
                                          >
                                            Súp, nước dùng
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/gia-vi/nuoc-sot-cham.html"
                                            
                                          >
                                            Nước sốt chấm
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/gia-vi/tuong-miso.html"
                                            
                                          >
                                            Tương Miso
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
                                        Mỳ, miến
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="thuc-pham/my-mien/mien-an-lien.html"
                                            
                                          >
                                            Miến ăn liền
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/my-mien/mien-che-bien.html"
                                            
                                          >
                                            Miến chế biến
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/my-mien/my-an-lien.html"
                                            
                                          >
                                            Mỳ ăn liền
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/my-mien/my-che-bien.html"
                                            
                                          >
                                            Mỳ chế biến
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
                                        Nông lâm hải sản
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="thuc-pham/nong-lam-hai-san/hai-san-kho.html"
                                            
                                          >
                                            Hải sản khô
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/nong-lam-hai-san/nong-san-kho.html"
                                            
                                          >
                                            Nông sản khô
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/nong-lam-hai-san/ruoc-ca-ruoc-hop.html"
                                            
                                          >
                                            Ruốc cá, ruốc hộp
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/nong-lam-hai-san/ruoc-ga-heo.html"
                                            
                                          >
                                            Ruốc gà, heo
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="product-category-subnav">
                                    <div className="product-category-lv-2">
                                      <a href="thuc-pham/ruou" >
                                        Rượu
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="thuc-pham/ruou/ruou-mo-umeshu.html"
                                            
                                          >
                                            Rượu mơ (Umeshu)
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/ruou/ruou-nhat-sake.html"
                                            
                                          >
                                            Rượu Nhật (Sake)
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/ruou/ruou-vang.html"
                                            
                                          >
                                            Rượu vang
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/ruou/ruou-wisky"
                                            
                                          >
                                            Rượu wisky
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
                                        Thực phẩm ăn liền
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="thuc-pham/thuc-pham-an-lien/canh-soup-an-lien.html"
                                            
                                          >
                                            Canh, soup ăn liền
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/thuc-pham-an-lien/com-chao-an-lien.html"
                                            
                                          >
                                            Cơm, cháo ăn liền
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/thuc-pham-an-lien/gia-vi-an-lien"
                                            
                                          >
                                            Gia vị ăn liền
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/thuc-pham-an-lien/rac-com"
                                            
                                          >
                                            Rắc cơm
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/thuc-pham-an-lien/sot-ca-ri-thit-ham.html"
                                            
                                          >
                                            Sốt, cà ri, thịt hầm
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
                                        Sản phẩm từ sữa
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="thuc-pham/san-pham-tu-sua/kem-sua-chua.html"
                                            
                                          >
                                            Kem, sữa chua
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
                                            Sữa tươi, sữa chua
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
                                        Thực phẩm khác
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="thuc-pham/thuc-pham-khac/set-qua.html"
                                            
                                          >
                                            Set quà
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/thuc-pham-khac/thuc-pham-tuoi-song.html"
                                            
                                          >
                                            Thực phẩm tươi sống
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thuc-pham/thuc-pham-khac/thuc-pham-khac-1.html"
                                            
                                          >
                                            Thực phẩm khác
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
                                    data-src-small="./Data/Sites/1/media/footer/nhà-cửa-đs.png"
                                    src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                  />
                                </span>
                                Nhà cửa - Đời sống
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
                                        Bếp và phòng ăn
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/bep-va-phong-an/am-phich-binh-dung-nuoc.html"
                                            
                                          >
                                            Ấm phích, bình đựng nước
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/bep-va-phong-an/bao-quan-thuc-pham.html"
                                            
                                          >
                                            Bảo quản thực phẩm
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/bep-va-phong-an/coc-bat-dia.html"
                                            
                                          >
                                            Cốc, bát đĩa
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/bep-va-phong-an/dao-keo-thot.html"
                                            
                                          >
                                            Dao, kéo, thớt
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/bep-va-phong-an/dung-cu-ve-sinh-bep.html"
                                            
                                          >
                                            Dụng cụ vệ sinh bếp
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/bep-va-phong-an/hop-com.html"
                                            
                                          >
                                            Hộp cơm
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/bep-va-phong-an/hop-khay-dung-thuc-pham.html"
                                            
                                          >
                                            Hộp, khay đựng thực phẩm
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/bep-va-phong-an/noi-chao.html"
                                            
                                          >
                                            Nồi, chảo
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/bep-va-phong-an/thau-chau-ro-ra.html"
                                            
                                          >
                                            Thau chậu, rổ rá
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/bep-va-phong-an/thia-dia-dua-muong.html"
                                            
                                          >
                                            Thìa, dĩa, đũa, muỗng
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/bep-va-phong-an/vat-dung-ban-an.html"
                                            
                                          >
                                            Vật dụng bàn ăn
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/bep-va-phong-an/vat-dung-dung-do-nha-bep.html"
                                            
                                          >
                                            Vật dụng đựng đồ nhà bếp
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/bep-va-phong-an/vat-dung-tien-ich-khac.html"
                                            
                                          >
                                            Vật dụng tiện ích khác
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
                                        Giặt, xả quần áo
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/giat-xa-quan-ao/nuoc-xa-vai.html"
                                            
                                          >
                                            Nước xả vải
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/giat-xa-quan-ao/xa-phong-giat-tay.html"
                                            
                                          >
                                            Xà phòng giặt tẩy
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
                                        Đồ dùng nhà tắm, toilet
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/do-dung-nha-tam-toilet/dung-cu-de-do.html"
                                            
                                          >
                                            Dụng cụ để đồ
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/do-dung-nha-tam-toilet/dung-cu-phoi-quan-ao.html"
                                            
                                          >
                                            Dụng cụ phơi quần áo
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/do-dung-nha-tam-toilet/tham.html"
                                            
                                          >
                                            Thảm
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/do-dung-nha-tam-toilet/vat-dung-nha-tam.html"
                                            
                                          >
                                            Vật dụng nhà tắm
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/do-dung-nha-tam-toilet/vat-dung-toilet"
                                            
                                          >
                                            Vật dụng toilet
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/do-dung-nha-tam-toilet/xo-chau-gio-dung-do.html"
                                            
                                          >
                                            Xô chậu, giỏ đựng đồ
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
                                        Đồ dùng sinh hoạt gia đình
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/do-dung-sinh-hoat-gia-dinh/do-di-mua"
                                            
                                          >
                                            Đồ đi mưa
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/do-dung-sinh-hoat-gia-dinh/do-dien"
                                            
                                          >
                                            Đồ điện
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/do-dung-sinh-hoat-gia-dinh/do-dung-ve-sinh-nha-cua.html"
                                            
                                          >
                                            Đồ dùng vệ sinh nhà cửa
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/do-dung-sinh-hoat-gia-dinh/vat-dung-dung-do.html"
                                            
                                          >
                                            Vật dụng đựng đồ
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/do-dung-sinh-hoat-gia-dinh/vat-trang-tri.html"
                                            
                                          >
                                            Vật trang trí
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/do-dung-sinh-hoat-gia-dinh/vat-dung-sinh-hoat-khac.html"
                                            
                                          >
                                            Vật dụng sinh hoạt khác
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
                                        Khăn
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/khan/khan-lau.html"
                                            
                                          >
                                            Khăn lau
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/khan/khan-mat.html"
                                            
                                          >
                                            Khăn mặt
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/khan/khan-tam.html"
                                            
                                          >
                                            Khăn tắm
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
                                        Khử mùi
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/khu-mui/khu-mui-toilet.html"
                                            
                                          >
                                            Khử mùi toilet
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/khu-mui/khu-mui-phong.html"
                                            
                                          >
                                            Khử mùi phòng
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/khu-mui/khu-mui-o-to.html"
                                            
                                          >
                                            Khử mùi ô tô
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/khu-mui/khu-mui-khac.html"
                                            
                                          >
                                            Khử mùi khác
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
                                        Phòng chống côn trùng
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/phong-chong-con-trung/chong-con-trung"
                                            
                                          >
                                            Chống côn trùng
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/phong-chong-con-trung/diet-con-trung.html"
                                            
                                          >
                                            Diệt côn trùng
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
                                        Xà phòng, chất tẩy rửa
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/xa-phong-chat-tay-rua/chong-nam-moc-hut-am.html"
                                            
                                          >
                                            Chống nấm mốc, hút ẩm
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/xa-phong-chat-tay-rua/nuoc-rua-bat"
                                            
                                          >
                                            Nước rửa bát
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/xa-phong-chat-tay-rua/rua-rau-qua.html"
                                            
                                          >
                                            Rửa rau quả
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/xa-phong-chat-tay-rua/tay-rua-long-giat.html"
                                            
                                          >
                                            Tẩy rửa lồng giặt
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/xa-phong-chat-tay-rua/tay-rua-nha-bep.html"
                                            
                                          >
                                            Tẩy rửa nhà bếp
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/xa-phong-chat-tay-rua/tay-rua-san-nha-tam"
                                            
                                          >
                                            Tẩy rửa sàn, nhà tắm
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/xa-phong-chat-tay-rua/tay-rua-thong-tac-duong-ong.html"
                                            
                                          >
                                            Tẩy rửa, thông tắc đường ống
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/xa-phong-chat-tay-rua/xa-phong-rua-tay.html"
                                            
                                          >
                                            Xà phòng rửa tay
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
                                        Sản phẩm từ giấy
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/san-pham-tu-giay/giay-an.html"
                                            
                                          >
                                            Giấy ăn
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/san-pham-tu-giay/giay-uot-1.html"
                                            
                                          >
                                            Giấy ướt
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/san-pham-tu-giay/giay-nha-bep.html"
                                            
                                          >
                                            Giấy nhà bếp
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/san-pham-tu-giay/giay-ve-sinh"
                                            
                                          >
                                            Giấy vệ sinh
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
                                        Gia dụng khác
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/gia-dung-khac/dung-cu-thi-cong.html"
                                            
                                          >
                                            Dụng cụ thi công
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="nha-cua-doi-song/gia-dung-khac/hang-dong-gia.html"
                                            
                                          >
                                            Hàng đồng giá
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
                                    data-src-small="./Data/Sites/1/media/footer/thời-trang.png"
                                    src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                  />
                                </span>
                                Thời trang
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
                                        Đồ bơi
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="thoi-trang/do-boi/kinh-boi.html"
                                            
                                          >
                                            Kính bơi
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thoi-trang/do-boi/mu-boi.html"
                                            
                                          >
                                            Mũ bơi
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thoi-trang/do-boi/phu-kien-boi-khac.html"
                                            
                                          >
                                            Phụ kiện bơi khác
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
                                        Phụ kiện thời trang
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="thoi-trang/phu-kien-thoi-trang/phu-kien-giay.html"
                                            
                                          >
                                            Phụ kiện giày
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thoi-trang/phu-kien-thoi-trang/phu-kien-khac.html"
                                            
                                          >
                                            Phụ kiện khác
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
                                        Thời trang nam
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="thoi-trang/thoi-trang-nam/ao-chong-nang-nam.html"
                                            
                                          >
                                            Áo chống nắng nam
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thoi-trang/thoi-trang-nam/ao-khoac-giu-nhiet-nam"
                                            
                                          >
                                            Áo khoác, giữ nhiệt nam
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thoi-trang/thoi-trang-nam/ao-phong-so-mi-nam.html"
                                            
                                          >
                                            Áo phông, sơ mi nam
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thoi-trang/thoi-trang-nam/quan-nam.html"
                                            
                                          >
                                            Quần nam
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thoi-trang/thoi-trang-nam/tat-nam"
                                            
                                          >
                                            Tất nam
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
                                        Thời trang nữ
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="thoi-trang/thoi-trang-nu/ao-chong-nang-nu.html"
                                            
                                          >
                                            Áo chống nắng nữ
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thoi-trang/thoi-trang-nu/ao-khoac-giu-nhiet-nu.html"
                                            
                                          >
                                            Áo khoác, giữ nhiệt nữ
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thoi-trang/thoi-trang-nu/ao-phong-ao-so-mi-nu.html"
                                            
                                          >
                                            Áo phông, áo sơ mi nữ
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thoi-trang/thoi-trang-nu/do-lot-nu.html"
                                            
                                          >
                                            Đồ lót nữ
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thoi-trang/thoi-trang-nu/giay-dep.html"
                                            
                                          >
                                            Giày, dép
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thoi-trang/thoi-trang-nu/phu-kien-chong-nang.html"
                                            
                                          >
                                            Phụ kiện chống nắng
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thoi-trang/thoi-trang-nu/quan-nu.html"
                                            
                                          >
                                            Quần nữ
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thoi-trang/thoi-trang-nu/tat-nu"
                                            
                                          >
                                            Tất nữ
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
                                        Thời trang trẻ em
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="thoi-trang/thoi-trang-tre-em/ao-chong-nang-tre-em.html"
                                            
                                          >
                                            Áo chống nắng trẻ em
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thoi-trang/thoi-trang-tre-em/ao-khoac-giu-nhiet-tre-em.html"
                                            
                                          >
                                            Áo khoác, giữ nhiệt trẻ em
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
                                            Quần, áo trẻ em
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thoi-trang/thoi-trang-tre-em/tat-tre-em.html"
                                            
                                          >
                                            Tất trẻ em
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="thoi-trang/thoi-trang-tre-em/ao-so-mi-kids-boy.html"
                                            
                                          >
                                            Áo sơ mi kids boy
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
                                Văn phòng phẩm
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
                                        Đồ dùng học tập
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="van-phong-pham/do-dung-hoc-tap/but.html"
                                            
                                          >
                                            Bút
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="van-phong-pham/do-dung-hoc-tap/cap.html"
                                            
                                          >
                                            Cặp
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="van-phong-pham/do-dung-hoc-tap/giay-note"
                                            
                                          >
                                            Giấy note
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="van-phong-pham/do-dung-hoc-tap/sach"
                                            
                                          >
                                            Sách
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="van-phong-pham/do-dung-hoc-tap/tap-to-ve-tranh.html"
                                            
                                          >
                                            Tập tô, vẽ tranh
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="van-phong-pham/do-dung-hoc-tap/thuoc-compa-bang-tinh.html"
                                            
                                          >
                                            Thước, compa, bảng tính
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="van-phong-pham/do-dung-hoc-tap/phu-kien-vpp-khac.html"
                                            
                                          >
                                            Phụ kiện VPP khác
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
                                        Đồ dùng VPP
                                      </a>
                                    </div>
                                    <div className="product-category-lv-3">
                                      <ul>
                                        <li>
                                          <a
                                            href="van-phong-pham/do-dung-vpp/dao-keo-bang-dinh-vpp.html"
                                            
                                          >
                                            Dao, kéo, băng dính VPP
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="van-phong-pham/do-dung-vpp/kep-ghim-file-chua-tai-lieu.html"
                                            
                                          >
                                            Kẹp, ghim, file chứa tài liệu
                                          </a>
                                        </li>
                                        <li>
                                          <a
                                            href="van-phong-pham/do-dung-vpp/tui-thiep.html"
                                            
                                          >
                                            Túi, thiệp
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
                                Hàng Order
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
                                    data-src-small="./Data/Sites/1/media/footer/sản-phẩm-ưa-thích.png"
                                    src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                                  />
                                </span>
                                Sản phẩm hot
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
                        Kết nối với chúng tôi:&nbsp;
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
