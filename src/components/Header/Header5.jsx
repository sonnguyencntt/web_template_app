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
    <div>
      <div className="new-header">
        <div className="new-header__container">
          <nav className="nav-bar">
            <div className="nav-bar__logo-main">
              <Link to="/">
                <img width={83} height={50} src={appTheme.logo_url} />
              </Link>
            </div>
            <div className="nav-bar__menu">
              <div className="nav-bar__close">
                <img src="/static/media/close.ad5ac185.svg" alt="" />
              </div>
              <div className="nav-bar__logo">
                <a href="#">
                  <img src="/img/beso/log-30shine-white.9945e644.jpg" alt="" />
                </a>
              </div>
              <ul className="menu">
                <li className="menu-item " role="presentation">
                  <Link to="/">
                    <img
                      src="/static/media/Service.51bf9f1c.svg"
                      className="icon--mb"
                      alt=""
                    />
                    <div className="menu-item-text pointer">
                      TRANG CHỦ
                    </div>
                  </Link>
                </li>
                {/* <li className="menu-item " role="presentation">
                  <Link to="/hanh-trinh">
                    <img
                      src="/img/beso/30shine.38a2a504.svg"
                      className="icon--mb"
                      alt=""
                    />
                    <div className="menu-item-text pointer">
                      HÀNH TRÌNH TỎA SÁNG
                    </div>
                  </Link>
                </li>
                <li className="menu-item " role="presentation">
                  <Link to="/kham-pha">
                    <img
                      src="/static/media/Blog.ec583308.svg"
                      className="icon--mb"
                      alt=""
                    />
                    <div className="menu-item-text pointer">
                      KHÁM PHÁ KIỂU TÓC
                    </div>
                  </Link>
                </li> */}
                <li className="menu-item store" role="presentation">
                  <Link to="/danh-sach-san-pham">
                    <img
                      src="/static/media/Store.ba8fee39.svg"
                      className="icon--mb"
                      alt=""
                    />
                    <div className="menu-item-text pointer">SẢN PHẨM</div>
                  </Link>
                </li>
                <li className="menu-item store" role="presentation">
                  <Link to="/tin-tuc">
                    <img
                      src="/static/media/Store.ba8fee39.svg"
                      className="icon--mb"
                      alt=""
                    />
                    <div className="menu-item-text pointer">TIN TỨC</div>
                  </Link>
                </li>
                <li className="menu-item store" role="presentation">
                  <Link to="/ma-giam-gia">
                    <img
                      src="/static/media/Store.ba8fee39.svg"
                      className="icon--mb"
                      alt=""
                    />
                    <div className="menu-item-text pointer">VOUCHER</div>
                  </Link>
                </li>
                <li className="menu-item store" role="presentation">
                  <Link to="/combo-giam-gia">
                    <img
                      src="/static/media/Store.ba8fee39.svg"
                      className="icon--mb"
                      alt=""
                    />
                    <div className="menu-item-text pointer">COMBO GIẢM GIÁ</div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nav-bar__action">
              <div className="login-button">
                <img src="/img/beso/30shine.38a2a504.svg" alt="" />
                <span>Đăng nhập</span>
              </div>
              <div className="menu-button">
                <img src="/static/media/menu.1a40ee5c.svg" alt="" />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
