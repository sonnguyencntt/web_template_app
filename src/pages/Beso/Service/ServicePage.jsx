import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { constants as c } from "../../../constants";
import { comboActions } from "../../../actions/comboActions";
import PageLoading from "../../../components/PageLoading";
import Header from "../../../components/Header";

function ServicePage() {

  const dispatch = useDispatch();
  const status = useSelector(state => state.combo.status);
  const list = useSelector(state => state.combo.list);
  useEffect(() => {
    document.title = "Combo giảm giá";
    if (status === c.LOADING)
      dispatch(comboActions.getAllCombos());
  })
  return (
    <React.Fragment>
      <Header />
      <div className="service">
            <div
              className="container"
              id="container"
              style={{ backgroundColor: "rgb(255, 255, 255)", padding: "15px" }}
            >
              <div
                className="service__block"
                id="shine-combo"
                style={{ display: "block" }}
              >
                <div className="service__title">
                  Shine Combo cắt gội 10 bước
                </div>
                <div className="service__list">
                  <div
                    className="ant-row"
                    style={{ marginTop: "-15px", marginBottom: "15px" }}
                  >
                    <div
                      className="ant-col ant-col-24"
                      style={{ paddingTop: "15px", paddingBottom: "15px" }}
                    >
                      <a href="/service/shine-combo-10-buoc-80k">
                        <img
                          src="https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/30shine-banner-sc-80k-3.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="service__sc-text">
                    Dịch vụ chăm sóc tóc đặc biệt dùng kèm{" "}
                    <span>Shine Combo</span>
                  </div>
                  <div
                    className="ant-row"
                    style={{ margin: "-15px -8px 15px" }}
                  >
                    <div
                      className="ant-col ant-col-6 ant-col-xs-12 ant-col-md-6"
                      style={{ padding: "15px 8px" }}
                    >
                      <a href="/service/tay-da-chet">
                        <div>
                          <img
                            src="https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/mat-na-sui-bot-tay-da-chet-3.jpg?v=1"
                            alt=""
                          />
                        </div>
                      </a>
                    </div>
                    <div
                      className="ant-col ant-col-6 ant-col-xs-12 ant-col-md-6"
                      style={{ padding: "15px 8px" }}
                    >
                      <a href="/service/massage-co-vai-gay">
                        <img
                          src="https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/30shine-massage-covaigay-3.jpg?v=1"
                          alt=""
                        />
                      </a>
                    </div>
                    <div
                      className="ant-col ant-col-6 ant-col-xs-12 ant-col-md-6"
                      style={{ padding: "15px 8px" }}
                    >
                      <a href="/service/lot-mun-cam">
                        <img
                          src="https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/30shine-lot-mun-cam-3.jpg?v=1"
                          alt=""
                        />
                      </a>
                    </div>
                    <div
                      className="ant-col ant-col-6 ant-col-xs-12 ant-col-md-6"
                      style={{ padding: "15px 8px" }}
                    >
                      <a href="/service/detox-thai-doc">
                        <img
                          src="https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/30shine-detox-3.jpg?v=1"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="service__block"
                id="combo-khac"
                style={{ display: "block" }}
              >
                <div className="service__title">Vip combo</div>
                <div className="service__list">
                  <a href="/service/shine-combo-s-vip">
                    <img
                      src="https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/combo-cat-goi-s-vip-5.jpg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div
                className="service__block"
                id="uon"
                style={{ display: "block" }}
              >
                <div className="service__title">uốn</div>
                <div className="service__list">
                  <img
                    src="https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/30shine-combo-uon-2.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div
                className="service__block"
                id="nhuom"
                style={{ display: "block" }}
              >
                <div className="service__title">Dịch vụ nhuộm</div>
                <div className="service__list">
                  <div className="my-swiper">
                    <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
                      <div className="swiper-wrapper">
                        <div
                          className="swiper-slide swiper-slide-active"
                          style={{ width: "266.381px", marginRight: "16px" }}
                        >
                          <a href="/30shine-Shinecolor-nhuom-den-phu-bac-lay-lai-phong-do-dan-ong">
                            <img
                              src="https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/30shine-nhuom-den-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div
                          className="swiper-slide swiper-slide-next"
                          style={{ width: "266.381px", marginRight: "16px" }}
                        >
                          <a href="/30shine-Shinecolor-nhuom-nau-cao-cap-dinh-hinh-nguoi-dan-ong-hien-dai">
                            <img
                              src="https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/30shine-nhuom-nau-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ width: "266.381px", marginRight: "16px" }}
                        >
                          <a href="/30shine-Shinecolor-nhuom-thoi-trang-khong-tay-thu-hut-moi-anh-nhin">
                            <img
                              src="https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/30shine-nhuom-do-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ width: "266.381px", marginRight: "16px" }}
                        >
                          <a href="/30shine-Shinecolor-nhuom-thoi-trang-cao-cap-tu-tin-the-hien-chat-rieng">
                            <img
                              src="https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/30shine-nhuom-thoi-trang-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="btn-action left btn_hide">
                      <span
                        role="img"
                        aria-label="left"
                        tabIndex={-1}
                        className="anticon anticon-left"
                      >
                        <svg
                          viewBox="64 64 896 896"
                          focusable="false"
                          className
                          data-icon="left"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" />
                        </svg>
                      </span>
                    </div>
                    <div className="btn-action right btn_hide">
                      <span
                        role="img"
                        aria-label="right"
                        tabIndex={-1}
                        className="anticon anticon-right"
                      >
                        <svg
                          viewBox="64 64 896 896"
                          focusable="false"
                          className
                          data-icon="right"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="service__block"
                id="hair-care"
                style={{ display: "block" }}
              >
                <div className="service__title">Dưỡng - Phục hồi</div>
                <div className="service__list">
                  <div
                    className="ant-row"
                    style={{ margin: "-15px -8px 15px" }}
                  >
                    <div
                      className="ant-col ant-col-xs-24 ant-col-md-18"
                      style={{ padding: "15px 8px" }}
                    >
                      <a href="/service/phuc-hoi-nano">
                        <img
                          src="https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/phuc-hoi-nano-4.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div
                      className="ant-col ant-col-xs-14 ant-col-md-6"
                      style={{ padding: "15px 8px" }}
                    >
                      <a href="/service/duong-toc">
                        <img
                          src="https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/30shine-hap-duong-oliu-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="service__block"
                id="shine-care"
                style={{ display: "block" }}
              >
                <div className="service__title">Dịch vụ khác</div>
                <div className="service__list">
                  <div className="my-swiper">
                    <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
                      <div className="swiper-wrapper">
                        <div
                          className="swiper-slide swiper-slide-active"
                          style={{ width: "266.381px", marginRight: "16px" }}
                        >
                          <a href="/service/cat-xa-tao-kieu-5-buoc">
                            <img
                              src="https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/30shine-cat-xa-tao-kieu-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div
                          className="swiper-slide swiper-slide-next"
                          style={{ width: "266.381px", marginRight: "16px" }}
                        >
                          <a href="/service/kid-combo">
                            <img
                              src="https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/30shine-kid-combo-cho-be-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ width: "266.381px", marginRight: "16px" }}
                        >
                          <a href="/service/lay-ray-tai">
                            <img
                              src="https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/30shinelayraytai-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div
                          className="swiper-slide"
                          style={{ width: "266.381px", marginRight: "16px" }}
                        >
                          <a href="/service/goi-massage-duong-sinh">
                            <img
                              src="https://storage.30shine.com/ResourceWeb/data/images/Service/tat-ca-dich-vu/30shine-goi-masage-duong-sinh-2.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="btn-action left btn_hide">
                      <span
                        role="img"
                        aria-label="left"
                        tabIndex={-1}
                        className="anticon anticon-left"
                      >
                        <svg
                          viewBox="64 64 896 896"
                          focusable="false"
                          className
                          data-icon="left"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" />
                        </svg>
                      </span>
                    </div>
                    <div className="btn-action right btn_hide">
                      <span
                        role="img"
                        aria-label="right"
                        tabIndex={-1}
                        className="anticon anticon-right"
                      >
                        <svg
                          viewBox="64 64 896 896"
                          focusable="false"
                          className
                          data-icon="right"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </React.Fragment>
  )
}
export  { ServicePage }