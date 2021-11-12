import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import BannerAds from "./child/HomePage3/BannerAds";
import Header from "../../components/Header";
import Blog from "./child/HomePage4/Blog";
import { constants as c } from "../../constants";
import ProductSection from "./child/HomePage4/Product";
import { appActions } from "../../actions/appActions";
import PageLoading from "../../components/PageLoading";
import HomeSlide from "./child/HomePage5/HomeSlide";

function HomePage(props) {
  const dispatch = useDispatch();
  const homeInfo = useSelector((state) => state.app.home);
  const appTheme = useSelector((state) => state.app.appTheme);
  const info = useMemo(() => {
    if (homeInfo.status === c.SUCCESS) {
      return {
        banners: homeInfo.banner.list,
        categories: homeInfo.layouts.filter(
          (v) => v.type_layout === "CATEGORY"
        )[0].list,
        new_products: homeInfo.layouts.filter(
          (v) => v.type_layout === "PRODUCTS_NEW"
        )[0].list,
        hot_products: homeInfo.layouts.filter(
          (v) => v.type_layout === "PRODUCTS_TOP_SALES"
        )[0].list,
        sale_products: homeInfo.layouts.filter(
          (v) => v.type_layout === "PRODUCTS_DISCOUNT"
        )[0].list,
        new_posts: homeInfo.layouts.filter(
          (v) => v.type_layout === "POSTS_NEW"
        )[0].list,
      };
    } else {
      return {};
    }
  }, [homeInfo]);
  useEffect(() => {
    document.title = appTheme.home_title;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (homeInfo.status === c.LOADING) {
      dispatch(appActions.getHomeInfo());
    }
  });
  return (
    <React.Fragment>
      <Header categories={info.categories} />
      <div className="home">
      {homeInfo.status === c.LOADING ? (
          <PageLoading />
        ) : (
          <React.Fragment>
            <HomeSlide banners={info.banners} />
            {/* <div style = {{marginTop : "20px"}}></div>
            {homeInfo.banner_ads.type_0.length > 0 && (
              <BannerAds banners={homeInfo.banner_ads.type_0} />
            )}

{homeInfo.banner_ads.type_3.length > 0 && (
              <BannerAds banners={homeInfo.banner_ads.type_3} />
            )}

            {info.sale_products.length > 0 && (
              <ProductSection
                title="Sản phẩm giảm giá"
                products={info.sale_products}
              />
            )}

{homeInfo.banner_ads.type_2.length > 0 && (
              <BannerAds banners={homeInfo.banner_ads.type_2} />
            )} */}

            {/* {info.new_products.length > 0 && (
              <ProductSection
                title="Sản phẩm mới"
                products={info.new_products}
              />
            )}
      

            {homeInfo.banner_ads.type_1.length > 0 && (
              <BannerAds banners={homeInfo.banner_ads.type_1} />
            )}

            {info.hot_products.length > 0 && (
              <ProductSection
                title="Sản phẩm nổi bật"
                products={info.hot_products}
              />
            )}
      

            {homeInfo.banner_ads.type_4.length > 0 && (
              <BannerAds banners={homeInfo.banner_ads.type_4} />
            )}

            {info.new_posts.length > 0 && <Blog posts={info.new_posts} />}
            {homeInfo.banner_ads.type_5.length > 0 && (
              <BannerAds banners={homeInfo.banner_ads.type_5} />
            )} */}
          </React.Fragment>
        )}
            {/* <div className="home__slide">
              <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
                <div className="swiper-wrapper" style={{transitionDuration: '300ms', transform: 'translate3d(-4557px, 0px, 0px)'}}>
                  <div className="swiper-slide" style={{minHeight: '495.964px', width: '1519px'}}><a href="hbmIfVj7fpg" rel="noopener noreferrer"><img className="pc swiper-lazy swiper-lazy-loaded" alt="" src="https://storage.30shine.com/banner/211001_BANNER_WEB_30SHINE_w.jpg" /></a></div>
                  
                  <div className="swiper-slide" style={{minHeight: '495.964px', width: '1519px'}}><a href="https://30shine.com/service/shine-combo-10-buoc-80k" rel="noopener noreferrer"><img className="pc swiper-lazy swiper-lazy-loaded" alt="" src="https://storage.30shine.com/banner/210814_Banner_SC_10_BC_w.jpg" /></a></div>
                  <div className="swiper-slide swiper-slide-prev" style={{minHeight: '495.964px', width: '1519px'}}><a href="https://30shine.com/collections/hanh-trinh-toa-sang" rel="noopener noreferrer"><img className="pc swiper-lazy swiper-lazy-loaded" alt="" src="https://storage.30shine.com/banner/210814_Banner_toa_sang_w.jpg" /></a></div>
                  <div className="swiper-slide swiper-slide-active" style={{minHeight: '495.964px', width: '1519px'}}><a href="https://30shine.com/an-tam-va-tin-tuong" rel="noopener noreferrer"><img data-src="https://storage.30shine.com/banner/210814_Banner_an_toan_w.jpg" className="pc swiper-lazy" alt="" /></a>
                    <div className="swiper-lazy-preloader" />
                  </div>
                </div>
                <div className="swiper-button-next swiper-button-custom swiper-button-disabled" />
                <div className="swiper-button-prev swiper-button-custom" />
              </div>
              <div className="home__form-input">
                <div className="form-input__slogan">
                  <div className="slogan__title">Đặt lịch giữ chỗ chỉ 30 giây</div>
                  <div className="slogan__text">Cắt xong trả tiền, hủy lịch không sao</div>
                </div>
                <div className="form-input__form flex">
                  <div className="form__input"><input placeholder="Nhập SDT để đặt lịch" type="tel" className="my-input" defaultValue />
                  </div>
                  <div className="form__button btn-action btn-color-1 content-center-middle" role="presentation">
                    <div className="btn-booking"> ĐẶT LỊCH NGAY</div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="layout layout-service">
              <div className="container"><a href="/dich-vu-khac" rel="noreferrer">
                  <div className="layout__head">
                    <div>
                      <div className="head__title">Trải nghiệm dịch vụ</div>
                      <div className="head__title head__sub-title">Thư giãn 30 phút và bạn sẽ tỏa sáng</div>
                    </div>
                    <div className="head__text-view-all"><span>Xem tất cả</span><img src="./static/media/chevronRight.0f447c60.svg" alt="" /></div>
                  </div>
                </a>
                <div className="layout__banner"><a href="/dich-vu-khac" rel="noreferrer">
                    <div className="banner__media"><img src="https://storage.30shine.com/ResourceWeb/data/images/home/banner-dich-vu.jpg" alt="" /></div>
                  </a></div>
                <div className="layout__list">
                  <div className="ant-row" style={{marginLeft: '-15px', marginRight: '-15px'}}>
                    <div className="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-6" style={{paddingLeft: '15px', paddingRight: '15px'}}><a href="/dich-vu-khac#shine-combo,combo-khac" rel="noreferrer">
                        <div className="list__item  
                                            pointer
                                            border-none
                                            list__item-hover
                                        ">
                          <div className="item__media "><img src="https://storage.30shine.com/ResourceWeb/data/images/newHome/service/30shine-cat-goi-massage-2.jpg" alt="" /></div>
                          <div className="item__content">
                            <div className="item__title">Cắt gội massage</div>
                            <div className="item__subTitle">Bảng giá 2021 (hấp dẫn)</div>
                          </div>
                        </div>
                      </a></div>
                    <div className="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-6" style={{paddingLeft: '15px', paddingRight: '15px'}}><a href="/dich-vu-khac#uon,hair-care" rel="noreferrer">
                        <div className="list__item  
                                            pointer
                                            
                                            list__item-hover
                                        ">
                          <div className="item__media "><img src="https://storage.30shine.com/ResourceWeb/data/images/newHome/service/30shine-uon-2.jpg" alt="" /></div>
                          <div className="item__content">
                            <div className="item__title">Uốn (chỉ từ 234k)</div>
                            <div className="item__subTitle">1 dịch vụ</div>
                          </div>
                        </div>
                      </a></div>
                    <div className="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-6" style={{paddingLeft: '15px', paddingRight: '15px'}}><a href="/dich-vu-khac#nhuom,hair-care" rel="noreferrer">
                        <div className="list__item  
                                            pointer
                                            
                                            list__item-hover
                                        ">
                          <div className="item__media "><img src="https://storage.30shine.com/ResourceWeb/data/images/newHome/service/30shine-nhuom-2.jpg" alt="" /></div>
                          <div className="item__content">
                            <div className="item__title">Nhuộm (chỉ từ 162k)</div>
                            <div className="item__subTitle">4 dịch vụ</div>
                          </div>
                        </div>
                      </a></div>
                    <div className="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-6" style={{paddingLeft: '15px', paddingRight: '15px'}}><a href="/dich-vu-khac#shine-care,dich-vu-khac" rel="noreferrer">
                        <div className="list__item  
                                            pointer
                                            
                                            list__item-hover
                                        ">
                          <div className="item__media "><img src="https://storage.30shine.com/ResourceWeb/data/images/newHome/service/30shine-dich-vu-khac-2.jpg" alt="" /></div>
                          <div className="item__content">
                            <div className="item__title">Dịch vụ khác</div>
                            <div className="item__subTitle">4 dịch vụ</div>
                          </div>
                        </div>
                      </a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="layout layout-blog">
              <div className="container">
                <div>
                  <div className="layout__head">
                    <div>
                      <div className="head__title">LẮNG NGHE &amp; TẬN TÂM</div>
                      <div className="head__title head__sub-title">Thấu hiểu nhu cầu, hỗ trợ nhiệt tình</div>
                    </div>
                  </div>
                </div>
                <div className="layout__blog">
                  <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
                    <div className="swiper-wrapper" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                      <div className="swiper-slide swiper-slide-active" style={{width: '312.857px', marginRight: '30px'}}><a href="/stylist-30shine" rel="noreferrer">
                          <div className="blog__media"><img src="https://storage.30shine.com/ResourceWeb/data/images/home/lang-nghe-va-tan-tam/lang-nghe-tan-tam-1.jpg" alt="" /></div>
                        </a><a href="/stylist-30shine" rel="noreferrer">
                          <div className="blog__title">Nói gì với stylist để anh có kiểu tóc ưng ý</div>
                        </a></div>
                      <div className="swiper-slide swiper-slide-next" style={{width: '312.857px', marginRight: '30px'}}><a href="/cau-hoi-thuong-gap" rel="noreferrer">
                          <div className="blog__media"><img src="https://storage.30shine.com/ResourceWeb/data/images/home/lang-nghe-va-tan-tam/lang-nghe-tan-tam-3.jpg" alt="" /></div>
                        </a><a href="/cau-hoi-thuong-gap" rel="noreferrer">
                          <div className="blog__title">Những câu hỏi thường gặp</div>
                        </a></div>
                    </div><span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
                  </div>
                </div>
              </div>
            </div>
            <div className="layout layout-blog">
              <div className="container"><a href="/collections/hanh-trinh-toa-sang" rel="noreferrer">
                  <div className="layout__head">
                    <div>
                      <div className="head__title">Hành trình toả sáng</div>
                      <div className="head__title head__sub-title">Câu chuyện chân thực từ hàng chục ngàn khách hàng</div>
                    </div>
                    <div className="head__text-view-all"><span>Xem tất cả</span><img src="./static/media/chevronRight.0f447c60.svg" alt="" /></div>
                  </div>
                </a>
                <div className="layout__blog">
                  <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
                    <div className="swiper-wrapper" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                      <div className="swiper-slide swiper-slide-active" style={{width: '570px', marginRight: '30px'}}><a href="/short-quiff-nhuom-nau-khoi-hot-trend-2020-30shine" rel="noreferrer">
                          <div className="blog__media"><img src="https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-thay-doi-ngoai-hinh.jpg" alt="" /></div>
                        </a><a href="/short-quiff-nhuom-nau-khoi-hot-trend-2020-30shine" rel="noreferrer">
                          <div className="blog__title">Thay đổi ngoại hình, chàng trai lạnh lùng, ít nói khiến cô hoa khôi
                            rung động</div>
                        </a></div>
                      <div className="swiper-slide swiper-slide-next" style={{width: '570px', marginRight: '30px'}}><a href="https://www.youtube.com/watch?v=MccG8Gf6Oc4" rel="noreferrer">
                          <div className="blog__media"><img src="https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-nam-sinh-kien-truc-lot-xac.jpg" alt="" /></div>
                        </a><a href="https://www.youtube.com/watch?v=MccG8Gf6Oc4" rel="noreferrer">
                          <div className="blog__title">Can đảm thay đổi mái tóc 7 năm, nam sinh Kiến Trúc lột xác kiểu tóc mới
                            cực đẹp</div>
                        </a></div>
                      <div className="swiper-slide" style={{width: '570px', marginRight: '30px'}}><a href="https://www.youtube.com/watch?v=m23tHreFffA" rel="noreferrer">
                          <div className="blog__media"><img src="https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-lot-xac-thanh-hot-boy.jpg" alt="" /></div>
                        </a><a href="https://www.youtube.com/watch?v=m23tHreFffA" rel="noreferrer">
                          <div className="blog__title">Bạn sinh viên IT lột xác thành hot boy vạn người mê</div>
                        </a></div>
                      <div className="swiper-slide" style={{width: '570px', marginRight: '30px'}}><a href="https://www.youtube.com/watch?v=S2bVJbLCUQk" rel="noreferrer">
                          <div className="blog__media"><img src="https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-toc-mullet.jpg" alt="" /></div>
                        </a><a href="https://www.youtube.com/watch?v=S2bVJbLCUQk" rel="noreferrer">
                          <div className="blog__title">Phúc lột xác mái tóc để suốt bao năm giúp ngoại hình mới cực cuốn hút
                          </div>
                        </a></div>
                    </div><span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
                  </div><button disabled type="button" className="ant-btn ant-btn-circle ant-btn-icon-only swiper_button button_prev swiper_button_disable"><span role="img" aria-label="left" className="anticon anticon-left swiper_button_icon"><svg viewBox="64 64 896 896" focusable="false" className data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                        <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z">
                        </path>
                      </svg></span></button><button type="button" className="ant-btn ant-btn-circle ant-btn-icon-only swiper_button button_next"><span role="img" aria-label="right" className="anticon anticon-right swiper_button_icon"><svg viewBox="64 64 896 896" focusable="false" className data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                        <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z">
                        </path>
                      </svg></span></button>
                </div>
              </div>
            </div>
            <div className="layout layout-service">
              <div className="container">
                <div>
                  <div className="layout__head">
                    <div>
                      <div className="head__title">KHÔNG GIAN &amp; THIẾT BỊ</div>
                      <div className="head__title head__sub-title">Nạp năng lượng với trải nghiệm không gian mở</div>
                    </div>
                  </div>
                </div>
                <div className="layout__banner">
                  <div>
                    <div className="banner__media"><img src="https://storage.30shine.com/ResourceWeb/data/images/home/30shine-banner-khong-gian-salon.jpg" alt="" /></div>
                  </div>
                  <div className="banner__wrapper">
                    <div className="banner__text">Phá vỡ giới hạn của một tiệm tóc truyền thống, 30Shine mang đến không gian
                      trải nghiệm hoàn toàn mới với diện tích lớn trên 200m2/ 16 ghế cắt. Tất cả đều được đặt tại vị trí
                      dễ tìm trên những con phố lớn, hòa vào cuộc sống sôi động của người đàn ông hiện đại.</div>
                  </div>
                </div>
                <div className="layout__list">
                  <div className="ant-row" style={{marginLeft: '-15px', marginRight: '-15px'}}>
                    <div className="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-6" style={{paddingLeft: '15px', paddingRight: '15px'}}><a href="/vi-tri-cua-hang-dac-dia" rel="noreferrer">
                        <div className="list__item  
                                            pointer
                                            border-none
                                            list__item-hover
                                        ">
                          <div className="item__media "><img src="https://storage.30shine.com/ResourceWeb/data/images/home/concept-khong-gian/30shinecon-cept-khong-gian-rong-lon-1.jpg" alt="" /></div>
                          <div className="item__content">
                            <div className="item__title">Salon rộng lớn dễ tìm</div>
                            <div className="item__subTitle">Không gian mở &amp; kết nối</div>
                          </div>
                        </div>
                      </a></div>
                    <div className="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-6" style={{paddingLeft: '15px', paddingRight: '15px'}}><a href="/trang-thiet-bi-sieu-hien-dai-cho-trai-nghiem-vuot-troi" rel="noreferrer">
                        <div className="list__item  
                                            pointer
                                            
                                            list__item-hover
                                        ">
                          <div className="item__media "><img src="https://storage.30shine.com/ResourceWeb/data/images/home/concept-khong-gian/30shinecon-cept-khong-gian-rong-lon-2.jpg" alt="" /></div>
                          <div className="item__content">
                            <div className="item__title">Trang thiết bị 30Shine SET™</div>
                            <div className="item__subTitle">Nâng cấp trải nghiệm làm đẹp</div>
                          </div>
                        </div>
                      </a></div>
                    <div className="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-6" style={{paddingLeft: '15px', paddingRight: '15px'}}><a href="/dat-lich-cat-toc-tien-loi" rel="noreferrer">
                        <div className="list__item  
                                            pointer
                                            
                                            list__item-hover
                                        ">
                          <div className="item__media "><img src="https://storage.30shine.com/ResourceWeb/data/images/home/concept-khong-gian/30shinecon-cept-khong-gian-rong-lon-3.jpg" alt="" /></div>
                          <div className="item__content">
                            <div className="item__title">Làm chủ thời gian</div>
                            <div className="item__subTitle">Đặt lịch &amp; các tiện ích 30Shine App</div>
                          </div>
                        </div>
                      </a></div>
                    <div className="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-6" style={{paddingLeft: '15px', paddingRight: '15px'}}><a href="/nhac-ban-quyen" rel="noreferrer">
                        <div className="list__item  
                                            pointer
                                            
                                            list__item-hover
                                        ">
                          <div className="item__media "><img src="https://storage.30shine.com/ResourceWeb/data/images/home/concept-khong-gian/30shine-concept-khong-gian-rong-lon-6.jpg" alt="" /></div>
                          <div className="item__content">
                            <div className="item__title">Trải nghiệm âm nhạc</div>
                            <div className="item__subTitle">Năng lượng &amp; Cảm xúc</div>
                          </div>
                        </div>
                      </a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="layout layout-blog">
              <div className="container"><a href="/collections/nguoi-noi-tieng-va-30shine" rel="noreferrer">
                  <div className="layout__head">
                    <div>
                      <div className="head__title">Người truyền cảm hứng và 30Shine</div>
                      <div className="head__title head__sub-title">Cùng lan tỏa thông điệp thay đổi để tỏa sáng</div>
                    </div>
                    <div className="head__text-view-all"><span>Xem tất cả</span><img src="./static/media/chevronRight.0f447c60.svg" alt="" /></div>
                  </div>
                </a>
                <div className="layout__blog">
                  <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
                    <div className="swiper-wrapper" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                      <div className="swiper-slide swiper-slide-active" style={{width: '570px', marginRight: '30px'}}><a href="/Le-Bao-Binh-Cat-Toc-Tai-30Shine" rel="noreferrer">
                          <div className="blog__media"><img src="https://storage.30shine.com/ResourceWeb/data/images/nguoi-noi-tieng-dong-hanh/30shine-ca-si-le-bao-binh.jpg" alt="" /></div>
                        </a><a href="/Le-Bao-Binh-Cat-Toc-Tai-30Shine" rel="noreferrer">
                          <div className="blog__title">Ca sĩ Lê Bảo Bình: Thay đổi để không phải “Bỏ lỡ một người”</div>
                        </a></div>
                      <div className="swiper-slide swiper-slide-next" style={{width: '570px', marginRight: '30px'}}><a href="/rapper-lk-giam-khao-king-of-rap-cat-toc-tai-30shine" rel="noreferrer">
                          <div className="blog__media"><img src="https://storage.30shine.com/ResourceWeb/data/images/nguoi-noi-tieng-dong-hanh/30shine-ca-si-lk.jpg" alt="" /></div>
                        </a><a href="/rapper-lk-giam-khao-king-of-rap-cat-toc-tai-30shine" rel="noreferrer">
                          <div className="blog__title">Kiểu tóc khiến LK Thoát ly chiếc mũ huyền thoại</div>
                        </a></div>
                      <div className="swiper-slide" style={{width: '570px', marginRight: '30px'}}><a href="/Ca-si-Hoang-Dung-Cat-Toc-Tai-30Shine" rel="noreferrer">
                          <div className="blog__media"><img src="https://storage.30shine.com/ResourceWeb/data/images/nguoi-noi-tieng-dong-hanh/30shine-ca-si-hoang-dung.jpg" alt="" /></div>
                        </a><a href="/Ca-si-Hoang-Dung-Cat-Toc-Tai-30Shine" rel="noreferrer">
                          <div className="blog__title">Hoàng Dũng: “Ngoại hình hết sức quan trọng, chỉ sau tài năng”</div>
                        </a></div>
                      <div className="swiper-slide" style={{width: '570px', marginRight: '30px'}}><a href="/dien-vien-thanh-son-lot-xac-voi-kieu-toc-sport" rel="noreferrer">
                          <div className="blog__media"><img src="https://storage.30shine.com/ResourceWeb/data/images/nguoi-noi-tieng-dong-hanh/30shine-dien-vien-thanh-son.jpg" alt="" /></div>
                        </a><a href="/dien-vien-thanh-son-lot-xac-voi-kieu-toc-sport" rel="noreferrer">
                          <div className="blog__title">Diễn viên Thanh Sơn “Cả Một Đời Ân Oán” tìm lại phong cách trẻ trung
                            đúng tuổi thật</div>
                        </a></div>
                    </div><span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
                  </div><button disabled type="button" className="ant-btn ant-btn-circle ant-btn-icon-only swiper_button button_prev swiper_button_disable"><span role="img" aria-label="left" className="anticon anticon-left swiper_button_icon"><svg viewBox="64 64 896 896" focusable="false" className data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                        <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z">
                        </path>
                      </svg></span></button><button type="button" className="ant-btn ant-btn-circle ant-btn-icon-only swiper_button button_next"><span role="img" aria-label="right" className="anticon anticon-right swiper_button_icon"><svg viewBox="64 64 896 896" focusable="false" className data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                        <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z">
                        </path>
                      </svg></span></button>
                </div>
              </div>
            </div>
            <div className="layout layout-service">
              <div className="container"><a href="/discover" rel="noreferrer">
                  <div className="layout__head">
                    <div>
                      <div className="head__title">Khám phá kiểu tóc</div>
                      <div className="head__title head__sub-title">Nguồn cảm hứng cho kiểu tóc mới của bạn</div>
                    </div>
                    <div className="head__text-view-all"><span>Xem tất cả</span><img src="./static/media/chevronRight.0f447c60.svg" alt="" /></div>
                  </div>
                </a>
                <div className="layout__banner"><a href="/discover" rel="noreferrer">
                    <div className="banner__media"><img src="https://storage.30shine.com/ResourceWeb/data/images/home/30shine-banner-kham-pha-kieu-to.jpg" alt="" /></div>
                  </a>
                  <div className="banner__wrapper">
                    <div className="banner__title">KHÁM PHÁ KIỂU TÓC</div>
                    <div className="banner__text">Nguồn cảm hứng cho kiểu tóc mới của bạn từ hàng ngàn mẫu tóc hot trend do
                      30Shine thiết kế</div>
                  </div>
                </div>
                <div className="layout__list">
                  <div className="ant-row" style={{marginLeft: '-15px', marginRight: '-15px'}}>
                    <div className="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-12" style={{paddingLeft: '15px', paddingRight: '15px'}}><a href="/discover" rel="noreferrer">
                        <div className="list__item  
                                            pointer
                                            border-none
                                            list__item-hover
                                        ">
                          <div className="item__media "><img src="https://storage.30shine.com/ResourceWeb/data/images/home/discover/30shine-kham-pha-kieu-toc-style-mater.png" alt="" /></div>
                          <div className="item__content">
                            <div className="item__title">Khám phá kiểu tóc</div>
                            <div className="item__subTitle">Tìm cảm hứng đổi mới cho mái tóc</div>
                          </div>
                        </div>
                      </a></div>
                    <div className="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-12" style={{paddingLeft: '15px', paddingRight: '15px'}}><a href="/discover#style-master" rel="noreferrer">
                        <div className="list__item  
                                            pointer
                                            
                                            list__item-hover
                                        ">
                          <div className="item__media "><img src="https://storage.30shine.com/ResourceWeb/data/images/home/discover/30shine-kham-pha-kieu-toc.png" alt="" /></div>
                          <div className="item__content">
                            <div className="item__title">Style Master</div>
                            <div className="item__subTitle">BXH các kiểu tóc hot trong tháng</div>
                          </div>
                        </div>
                      </a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="layout layout-blog">
              <div className="container">
                <div>
                  <div className="layout__head">
                    <div>
                      <div className="head__title">An tâm &amp; Tin tưởng</div>
                      <div className="head__title head__sub-title">Cam kết phòng dịch tối đa &amp; mỹ phẩm chính hãng</div>
                    </div>
                  </div>
                </div>
                <div className="layout__blog">
                  <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
                    <div className="swiper-wrapper" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                      <div className="swiper-slide swiper-slide-active" style={{width: '312.857px', marginRight: '30px'}}><a href="/an-tam-va-tin-tuong" rel="noreferrer">
                          <div className="blog__media"><img src="https://storage.30shine.com/ResourceWeb/data/images/home/30shine-safe/30shine-so-1-ve-an-toan-3.jpg" alt="" /></div>
                        </a><a href="/an-tam-va-tin-tuong" rel="noreferrer">
                          <div className="blog__title">Phòng chống Covid-19 - Vì sức khoẻ khách hàng, nhân viên và cộng đồng
                          </div>
                        </a></div>
                      <div className="swiper-slide swiper-slide-next" style={{width: '312.857px', marginRight: '30px'}}><a href="/my-pham-va-san-pham" rel="noreferrer">
                          <div className="blog__media"><img src="https://storage.30shine.com/ResourceWeb/data/images/home/30shine-safe/30shine-so-1-ve-an-toan-4.jpg" alt="" /></div>
                        </a><a href="/my-pham-va-san-pham" rel="noreferrer">
                          <div className="blog__title">Mỹ phẩm &amp; sản phẩm - Cam kết chất lượng - Đảm bảo xuất xứ</div>
                        </a></div>
                      <div className="swiper-slide" style={{width: '312.857px', marginRight: '30px'}}><a href="/bao-ve-tai-san" rel="noreferrer">
                          <div className="blog__media"><img src="https://storage.30shine.com/ResourceWeb/data/images/home/30shine-safe/30shine-so-1-ve-an-toan-5.jpg" alt="" /></div>
                        </a><a href="/bao-ve-tai-san" rel="noreferrer">
                          <div className="blog__title">Bảo quản xe cộ, đồ đạc</div>
                        </a></div>
                    </div><span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
                  </div>
                </div>
              </div>
            </div>
            <div className="layout layout-blog">
              <div className="container"><a href="/reward" rel="noreferrer">
                  <div className="layout__head">
                    <div>
                      <div className="head__title">Ưu đãi</div>
                      <div className="head__title head__sub-title">Quà tặng, chiết khấu đặc biệt cập nhật liên tục</div>
                    </div>
                    <div className="head__text-view-all"><span>Xem tất cả</span><img src="./static/media/chevronRight.0f447c60.svg" alt="" /></div>
                  </div>
                </a>
                <div className="layout__blog">
                  <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
                    <div className="swiper-wrapper" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                      <div className="swiper-slide swiper-slide-active" style={{width: '312.857px', marginRight: '30px'}}><a href="/rewards/13" rel="noreferrer">
                          <div className="blog__media"><img src="https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_ACSYS_vuong_4db7dc1695.jpg" alt="" /></div>
                        </a><a href="/rewards/13" rel="noreferrer">
                          <div className="blog__title">COMBO LÁNG MỊN</div>
                        </a></div>
                      <div className="swiper-slide swiper-slide-next" style={{width: '312.857px', marginRight: '30px'}}><a href="/rewards/14" rel="noreferrer">
                          <div className="blog__media"><img src="https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_Mood_dep_trai_9_ea25c333c8.jpg" alt="" /></div>
                        </a><a href="/rewards/14" rel="noreferrer">
                          <div className="blog__title">COMBO TRẮNG THƠM</div>
                        </a></div>
                      <div className="swiper-slide" style={{width: '312.857px', marginRight: '30px'}}><a href="/rewards/15" rel="noreferrer">
                          <div className="blog__media"><img src="https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_Mood_dep_trai_11_7298a8b45d.jpg" alt="" /></div>
                        </a><a href="/rewards/15" rel="noreferrer">
                          <div className="blog__title">COMBO THƠM THO TRỊ MỤN LƯNG</div>
                        </a></div>
                      <div className="swiper-slide" style={{width: '312.857px', marginRight: '30px'}}><a href="/rewards/16" rel="noreferrer">
                          <div className="blog__media"><img src="https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_Mood_dep_trai_10_4551897038.jpg" alt="" /></div>
                        </a><a href="/rewards/16" rel="noreferrer">
                          <div className="blog__title">COMBO THƠM THO GIẢM VIÊM</div>
                        </a></div>
                      <div className="swiper-slide" style={{width: '312.857px', marginRight: '30px'}}><a href="/rewards/17" rel="noreferrer">
                          <div className="blog__media"><img src="https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_Mood_dep_trai_12_76ae3deaf4.jpg" alt="" /></div>
                        </a><a href="/rewards/17" rel="noreferrer">
                          <div className="blog__title">COMBO THƠM THO MỊN DA</div>
                        </a></div>
                      <div className="swiper-slide" style={{width: '312.857px', marginRight: '30px'}}><a href="/rewards/18" rel="noreferrer">
                          <div className="blog__media"><img src="https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_Mood_dep_trai_8_2a2be5c764.jpg" alt="" /></div>
                        </a><a href="/rewards/18" rel="noreferrer">
                          <div className="blog__title">COMBO TÓC SUÔN MƯỢT</div>
                        </a></div>
                      <div className="swiper-slide" style={{width: '312.857px', marginRight: '30px'}}><a href="/rewards/19" rel="noreferrer">
                          <div className="blog__media"><img src="https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_Mood_dep_trai_7_117afe2b0d.jpg" alt="" /></div>
                        </a><a href="/rewards/19" rel="noreferrer">
                          <div className="blog__title">COMBO TÓC CHẮC KHOẺ</div>
                        </a></div>
                    </div><span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
                  </div><button disabled type="button" className="ant-btn ant-btn-circle ant-btn-icon-only swiper_button button_prev swiper_button_disable"><span role="img" aria-label="left" className="anticon anticon-left swiper_button_icon"><svg viewBox="64 64 896 896" focusable="false" className data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                        <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z">
                        </path>
                      </svg></span></button><button type="button" className="ant-btn ant-btn-circle ant-btn-icon-only swiper_button button_next"><span role="img" aria-label="right" className="anticon anticon-right swiper_button_icon"><svg viewBox="64 64 896 896" focusable="false" className data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                        <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z">
                        </path>
                      </svg></span></button>
                </div>
              </div>
            </div>
            <div className="home_store_v2">
              <div className="home_store_container container"><a href="https://shop.30shine.com/" rel="noreferrer">
                  <div className="layout__head">
                    <div>
                      <div className="head__title">30Shine shop</div>
                      <div className="head__title head__sub-title">Mỹ phẩm nam cao cấp chính hãng</div>
                    </div>
                    <div className="head__text-view-all"><span>Xem tất cả</span><img src="./static/media/chevronRight.0f447c60.svg" alt="" /></div>
                  </div>
                </a>
                <div className="home_store_banner">
                  <div className="layout__banner"><a href="https://shop.30shine.com/" rel="noreferrer">
                      <div className="banner__media"><img src="https://storage.30shine.com/banner/211001_Banner_store_pc.jpg" alt="" /></div>
                    </a></div>
                </div>
                <div className="top-product-v2">
                  <div className="home_store_top_content">
                    <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
                      <div className="swiper-wrapper" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                        <div className="swiper-slide swiper-slide-active" style={{width: '241.333px', marginRight: '24px'}}>
                          <div className="top_product_v2_wrap">
                            <div href="https://shop.30shine.com/chi-tiet-san-pham/may-cao-rau-flyco-fs360-3-luoi" style={{color: 'rgb(0, 0, 0)'}}>
                              <div className="top_product_content pointer">
                                <div className="top_product_image"><img alt="img" src="https:/./static.30shine.com/shop-admin/2021/09/29/30S08QAL-Máy Cạo Râu FLYCO - USP.png" />
                                </div>
                                <div className="top_product_des">
                                  <p className="top_product_des_title">Máy Cạo Râu FLYCO FS360 3 lưỡi</p>
                                  <div className="flex item-baseline">
                                    <p className="top_product_des_price_sale">499.000&nbsp;₫</p>
                                    <p className="top_product_des_price" />
                                  </div>
                                </div>
                                <div className="top_product_button_sell flex item-center space-between">
                                  <p className="top_product_button_sell_text">Mua ngay</p><img src="./static/media/arrowRight.784ce2a9.svg" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide swiper-slide-next" style={{width: '241.333px', marginRight: '24px'}}>
                          <div className="top_product_v2_wrap">
                            <div href="https://shop.30shine.com/chi-tiet-san-pham/may-cao-rau-flyco-fs871-2-luoi" style={{color: 'rgb(0, 0, 0)'}}>
                              <div className="top_product_content pointer">
                                <div className="top_product_image"><img alt="img" src="https:/./static.30shine.com/shop-admin/2021/10/18/30SNC7NT-Máy Cạo Râu FLYCO FS871 2 lưỡi.png" />
                                </div>
                                <div className="top_product_des">
                                  <p className="top_product_des_title">Máy Cạo Râu FLYCO FS871 2 lưỡi</p>
                                  <div className="flex item-baseline">
                                    <p className="top_product_des_price_sale">400.000&nbsp;₫</p>
                                    <p className="top_product_des_price" />
                                  </div>
                                </div>
                                <div className="top_product_button_sell flex item-center space-between">
                                  <p className="top_product_button_sell_text">Mua ngay</p><img src="./static/media/arrowRight.784ce2a9.svg" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide" style={{width: '241.333px', marginRight: '24px'}}>
                          <div className="top_product_v2_wrap">
                            <div href="https://shop.30shine.com/chi-tiet-san-pham/may-say-toc-furin-manh-gap-10-may-say-ban-co" style={{color: 'rgb(0, 0, 0)'}}>
                              <div className="top_product_content pointer">
                                <div className="top_product_image"><img alt="img" src="https:/./static.30shine.com/shop-admin/2021/10/14/30SWZ9B5-Máy sấy Furin.png" />
                                </div>
                                <div className="top_product_des">
                                  <p className="top_product_des_title">Máy sấy tóc Furin - Mạnh gấp 10 máy sấy bạn có</p>
                                  <div className="flex item-baseline">
                                    <p className="top_product_des_price_sale">389.000&nbsp;₫</p>
                                    <p className="top_product_des_price" />
                                  </div>
                                </div>
                                <div className="top_product_button_sell flex item-center space-between">
                                  <p className="top_product_button_sell_text">Mua ngay</p><img src="./static/media/arrowRight.784ce2a9.svg" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide" style={{width: '241.333px', marginRight: '24px'}}>
                          <div className="top_product_v2_wrap">
                            <div href="https://shop.30shine.com/chi-tiet-san-pham/sap-khu-mui-hang-ngay-etiaxil" style={{color: 'rgb(0, 0, 0)'}}>
                              <div className="top_product_content pointer">
                                <div className="top_product_image"><img alt="img" src="https:/./static.30shine.com/shop-admin/2021/10/11/30SZCK0C-SÁP KHỬ MÙI HÀNG NGÀY ETIAXIL.png" />
                                </div>
                                <div className="top_product_des">
                                  <p className="top_product_des_title">SÁP KHỬ MÙI HÀNG NGÀY ETIAXIL</p>
                                  <div className="flex item-baseline">
                                    <p className="top_product_des_price_sale">237.000&nbsp;₫</p>
                                    <p className="top_product_des_price" />
                                  </div>
                                </div>
                                <div className="top_product_button_sell flex item-center space-between">
                                  <p className="top_product_button_sell_text">Mua ngay</p><img src="./static/media/arrowRight.784ce2a9.svg" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide" style={{width: '241.333px', marginRight: '24px'}}>
                          <div className="top_product_v2_wrap">
                            <div href="https://shop.30shine.com/chi-tiet-san-pham/xit-khu-mui-vung-da-duoi-canh-tay-etiaxil" style={{color: 'rgb(0, 0, 0)'}}>
                              <div className="top_product_content pointer">
                                <div className="top_product_image"><img alt="img" src="https:/./static.30shine.com/shop-admin/2021/10/11/30S0C80V-XKM Vùng Da Dưới Cánh Tay ETIAXIL 100ml - không có gas.png" />
                                </div>
                                <div className="top_product_des">
                                  <p className="top_product_des_title">Xịt Khử Mùi Vùng Da Dưới Cánh Tay ETIAXIL 100ml</p>
                                  <div className="flex item-baseline">
                                    <p className="top_product_des_price_sale">237.000&nbsp;₫</p>
                                    <p className="top_product_des_price" />
                                  </div>
                                </div>
                                <div className="top_product_button_sell flex item-center space-between">
                                  <p className="top_product_button_sell_text">Mua ngay</p><img src="./static/media/arrowRight.784ce2a9.svg" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide" style={{width: '241.333px', marginRight: '24px'}}>
                          <div className="top_product_v2_wrap">
                            <div href="https://shop.30shine.com/chi-tiet-san-pham/glanzen-prime-sandar-wood-phien-ban-dac-biet-huong-go" style={{color: 'rgb(0, 0, 0)'}}>
                              <div className="top_product_content pointer">
                                <div className="top_product_image"><img alt="img" src="https:/./static.30shine.com/shop-admin/2021/09/29/30SZCF02-Sáp Glanzen Clay - USP-1.png" />
                                </div>
                                <div className="top_product_des">
                                  <p className="top_product_des_title">Glanzen Prime - Sandar Wood | Phiên Bản Đặc Biệt Hương
                                    Gỗ</p>
                                  <div className="flex item-baseline">
                                    <p className="top_product_des_price_sale">299.000&nbsp;₫</p>
                                    <p className="top_product_des_price">329.000&nbsp;₫</p>
                                  </div>
                                </div>
                                <div className="top_product_button_sell flex item-center space-between">
                                  <p className="top_product_button_sell_text">Mua ngay</p><img src="./static/media/arrowRight.784ce2a9.svg" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide" style={{width: '241.333px', marginRight: '24px'}}>
                          <div className="top_product_v2_wrap">
                            <div href="https://shop.30shine.com/chi-tiet-san-pham/glanzen-prime-floral-phien-dac-biet-huong-hoa" style={{color: 'rgb(0, 0, 0)'}}>
                              <div className="top_product_content pointer">
                                <div className="top_product_image"><img alt="img" src="https:/./static.30shine.com/shop-admin/2021/09/29/30SDOZ1Q-Sáp Glanzen Clay - USP-2.png" />
                                </div>
                                <div className="top_product_des">
                                  <p className="top_product_des_title">Glanzen Prime - Floral | Phiên Đặc Biệt Hương Hoa</p>
                                  <div className="flex item-baseline">
                                    <p className="top_product_des_price_sale">299.000&nbsp;₫</p>
                                    <p className="top_product_des_price">329.000&nbsp;₫</p>
                                  </div>
                                </div>
                                <div className="top_product_button_sell flex item-center space-between">
                                  <p className="top_product_button_sell_text">Mua ngay</p><img src="./static/media/arrowRight.784ce2a9.svg" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide" style={{width: '241.333px', marginRight: '24px'}}>
                          <div className="top_product_v2_wrap">
                            <div href="https://shop.30shine.com/chi-tiet-san-pham/srm-skindr-tram-tra-combo-mat-na-sam-snp" style={{color: 'rgb(0, 0, 0)'}}>
                              <div className="top_product_content pointer">
                                <div className="top_product_image"><img alt="img" src="https://storage.30shine.com/30shine-store/product-images/1d6e55d2-b72d-4319-86d2-808c5261d6af" />
                                </div>
                                <div className="top_product_des">
                                  <p className="top_product_des_title">SRM Skin&amp;Dr Tràm trà + Combo mặt nạ sâm SNP</p>
                                  <div className="flex item-baseline">
                                    <p className="top_product_des_price_sale">249.000&nbsp;₫</p>
                                    <p className="top_product_des_price">309.000&nbsp;₫</p>
                                  </div>
                                </div>
                                <div className="top_product_button_sell flex item-center space-between">
                                  <p className="top_product_button_sell_text">Mua ngay</p><img src="./static/media/arrowRight.784ce2a9.svg" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide" style={{width: '241.333px', marginRight: '24px'}}>
                          <div className="top_product_v2_wrap">
                            <div href="https://shop.30shine.com/chi-tiet-san-pham/gel-tam-dicora-urban-fit-detox-tra-xanh-biotopcare-400ml" style={{color: 'rgb(0, 0, 0)'}}>
                              <div className="top_product_content pointer">
                                <div className="top_product_image"><img alt="img" src="https:/./static.30shine.com/shop-admin/2021/10/11/30SA1RFK-Gel tắm Dicora Urban Fit Detox trà xanh 400ml.png" />
                                </div>
                                <div className="top_product_des">
                                  <p className="top_product_des_title">Gel tắm Dicora Urban Fit Detox trà xanh Biotopcare -
                                    400ml</p>
                                  <div className="flex item-baseline">
                                    <p className="top_product_des_price_sale">133.000&nbsp;₫</p>
                                    <p className="top_product_des_price">190.000&nbsp;₫</p>
                                  </div>
                                </div>
                                <div className="top_product_button_sell flex item-center space-between">
                                  <p className="top_product_button_sell_text">Mua ngay</p><img src="./static/media/arrowRight.784ce2a9.svg" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide" style={{width: '241.333px', marginRight: '24px'}}>
                          <div className="top_product_v2_wrap">
                            <div href="https://shop.30shine.com/chi-tiet-san-pham/gel-tam-dicora-urban-fit-energy-co-huong-bai-nhan-sam-biotopcare" style={{color: 'rgb(0, 0, 0)'}}>
                              <div className="top_product_content pointer">
                                <div className="top_product_image"><img alt="img" src="https:/./static.30shine.com/shop-admin/2021/10/11/30SN99UJ-Gel tắm Dicora Urban Fit Energy Cỏ hương bài & Nhân sâm Biotopcare 400ml.png" />
                                </div>
                                <div className="top_product_des">
                                  <p className="top_product_des_title">Gel tắm Dicora Urban Fit Energy Cỏ hương bài &amp; Nhân
                                    sâm Biotopcare</p>
                                  <div className="flex item-baseline">
                                    <p className="top_product_des_price_sale">133.000&nbsp;₫</p>
                                    <p className="top_product_des_price" />
                                  </div>
                                </div>
                                <div className="top_product_button_sell flex item-center space-between">
                                  <p className="top_product_button_sell_text">Mua ngay</p><img src="./static/media/arrowRight.784ce2a9.svg" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide" style={{width: '241.333px', marginRight: '24px'}}>
                          <div className="top_product_v2_wrap">
                            <div href="https://shop.30shine.com/chi-tiet-san-pham/sap-glanzen-clay-sap-chinh-hang-ban-chay-so-1-thi-truong" style={{color: 'rgb(0, 0, 0)'}}>
                              <div className="top_product_content pointer">
                                <div className="top_product_image"><img alt="img" src="https:/./static.30shine.com/shop-admin/2021/09/29/30S9AK7U-Sáp Glanzen Clay - USP.png" />
                                </div>
                                <div className="top_product_des">
                                  <p className="top_product_des_title">Sáp vuốt tóc Glanzen Original Clay - Vô địch giữ nếp
                                    tới 12 giờ</p>
                                  <div className="flex item-baseline">
                                    <p className="top_product_des_price_sale">199.000&nbsp;₫</p>
                                    <p className="top_product_des_price" />
                                  </div>
                                </div>
                                <div className="top_product_button_sell flex item-center space-between">
                                  <p className="top_product_button_sell_text">Mua ngay</p><img src="./static/media/arrowRight.784ce2a9.svg" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide" style={{width: '241.333px', marginRight: '24px'}}>
                          <div className="top_product_v2_wrap">
                            <div href="https://shop.30shine.com/chi-tiet-san-pham/dau-xa-kayan-hyaluron-hair-danh-cho-toc-mong-va-soi-manh" style={{color: 'rgb(0, 0, 0)'}}>
                              <div className="top_product_content pointer">
                                <div className="top_product_image"><img alt="img" src="https:/./static.30shine.com/shop-admin/2021/10/04/30S7SB60-Dầu xả Kayan Hyaluron.png" />
                                </div>
                                <div className="top_product_des">
                                  <p className="top_product_des_title">Dầu xả KAYAN Hyaluron Hair dành cho tóc mỏng và sợi
                                    mảnh</p>
                                  <div className="flex item-baseline">
                                    <p className="top_product_des_price_sale">190.000&nbsp;₫</p>
                                    <p className="top_product_des_price">230.000&nbsp;₫</p>
                                  </div>
                                </div>
                                <div className="top_product_button_sell flex item-center space-between">
                                  <p className="top_product_button_sell_text">Mua ngay</p><img src="./static/media/arrowRight.784ce2a9.svg" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide" style={{width: '241.333px', marginRight: '24px'}}>
                          <div className="top_product_v2_wrap">
                            <div href="https://shop.30shine.com/chi-tiet-san-pham/lan-khu-mui-ngan-mo-hoi-chuyen-biet-etiaxil-deodorant-douceur-48h-roll-on-50ml" style={{color: 'rgb(0, 0, 0)'}}>
                              <div className="top_product_content pointer">
                                <div className="top_product_image"><img alt="img" src="https:/./static.30shine.com/shop-admin/2021/10/11/30SKMEIL-Lăn Khử Mùi Ngăn Mồ Hôi Chuyên Biệt Etiaxil Deodorant Douceur 48h Roll-On 50ML.png" />
                                </div>
                                <div className="top_product_des">
                                  <p className="top_product_des_title">Lăn Khử Mùi Ngăn Mồ Hôi Chuyên Biệt Etiaxil Deodorant
                                    Douceur 48h Roll-On 50ML</p>
                                  <div className="flex item-baseline">
                                    <p className="top_product_des_price_sale">237.000&nbsp;₫</p>
                                    <p className="top_product_des_price" />
                                  </div>
                                </div>
                                <div className="top_product_button_sell flex item-center space-between">
                                  <p className="top_product_button_sell_text">Mua ngay</p><img src="./static/media/arrowRight.784ce2a9.svg" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide" style={{width: '241.333px', marginRight: '24px'}}>
                          <div className="top_product_v2_wrap">
                            <div href="https://shop.30shine.com/chi-tiet-san-pham/xit-khu-mui-ngan-mo-hoi-chiet-xuat-nha-dam-etiaxil-deodorant-vegetal-24h-spray-sans-gaz-100ml" style={{color: 'rgb(0, 0, 0)'}}>
                              <div className="top_product_content pointer">
                                <div className="top_product_image"><img alt="img" src="https:/./static.30shine.com/shop-admin/2021/10/11/30SAMZMZ-Xịt Khử Mùi Ngăn Mồ Hôi Chiết Xuất Nha Đam Etiaxil Deodorant Vegetal 24h Spray Sans Gaz 100ML.png" />
                                </div>
                                <div className="top_product_des">
                                  <p className="top_product_des_title">Xịt Khử Mùi Ngăn Mồ Hôi Chiết Xuất Nha Đam Etiaxil
                                    Deodorant Vegetal 24h Spray Sans Gaz 100ML</p>
                                  <div className="flex item-baseline">
                                    <p className="top_product_des_price_sale">237.000&nbsp;₫</p>
                                    <p className="top_product_des_price" />
                                  </div>
                                </div>
                                <div className="top_product_button_sell flex item-center space-between">
                                  <p className="top_product_button_sell_text">Mua ngay</p><img src="./static/media/arrowRight.784ce2a9.svg" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide" style={{width: '241.333px', marginRight: '24px'}}>
                          <div className="top_product_v2_wrap">
                            <div href="https://shop.30shine.com/chi-tiet-san-pham/may-say-toc-tao-kieu-chuyen-nghiep-sharkway-limited-1600w" style={{color: 'rgb(0, 0, 0)'}}>
                              <div className="top_product_content pointer">
                                <div className="top_product_image"><img alt="img" src="https:/./static.30shine.com/shop-admin/2021/09/29/30SA1E1E-Máy Sấy tóc - USP.png" />
                                </div>
                                <div className="top_product_des">
                                  <p className="top_product_des_title">Máy sấy tóc tạo kiểu chuyên nghiệp Sharkway Limited
                                    1600W</p>
                                  <div className="flex item-baseline">
                                    <p className="top_product_des_price_sale">299.000&nbsp;₫</p>
                                    <p className="top_product_des_price">350.000&nbsp;₫</p>
                                  </div>
                                </div>
                                <div className="top_product_button_sell flex item-center space-between">
                                  <p className="top_product_button_sell_text">Mua ngay</p><img src="./static/media/arrowRight.784ce2a9.svg" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide" style={{width: '241.333px', marginRight: '24px'}}>
                          <div className="top_product_v2_wrap">
                            <div href="https://shop.30shine.com/chi-tiet-san-pham/combo-sua-rua-mat-than-hoat-tinh-5-mat-na-sam-snp" style={{color: 'rgb(0, 0, 0)'}}>
                              <div className="top_product_content pointer">
                                <div className="top_product_image"><img alt="img" src="https://storage.30shine.com/30shine-store/product-images/24ac521d-d061-4832-8ae2-d42080292edb" />
                                </div>
                                <div className="top_product_des">
                                  <p className="top_product_des_title">Combo Sữa rửa mặt than hoạt tính + 5 Mặt nạ sâm SNP</p>
                                  <div className="flex item-baseline">
                                    <p className="top_product_des_price_sale">179.000&nbsp;₫</p>
                                    <p className="top_product_des_price">239.000&nbsp;₫</p>
                                  </div>
                                </div>
                                <div className="top_product_button_sell flex item-center space-between">
                                  <p className="top_product_button_sell_text">Mua ngay</p><img src="./static/media/arrowRight.784ce2a9.svg" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide" style={{width: '241.333px', marginRight: '24px'}}>
                          <div className="top_product_v2_wrap">
                            <div href="https://shop.30shine.com/chi-tiet-san-pham/combo-tay-da-chet-the-plant-base-white-truffle-5-mat-na-sam-snp" style={{color: 'rgb(0, 0, 0)'}}>
                              <div className="top_product_content pointer">
                                <div className="top_product_image"><img alt="img" src="https://storage.30shine.com/30shine-store/product-images/48d3e14a-c58b-45cf-9944-12f1bdc7e04c" />
                                </div>
                                <div className="top_product_des">
                                  <p className="top_product_des_title">Combo Tẩy da chết The Plant Base White Truffle + 5 Mặt
                                    nạ sâm SNP</p>
                                  <div className="flex item-baseline">
                                    <p className="top_product_des_price_sale">299.000&nbsp;₫</p>
                                    <p className="top_product_des_price">359.000&nbsp;₫</p>
                                  </div>
                                </div>
                                <div className="top_product_button_sell flex item-center space-between">
                                  <p className="top_product_button_sell_text">Mua ngay</p><img src="./static/media/arrowRight.784ce2a9.svg" alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div><span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
                    </div><button type="button" className="ant-btn ant-btn-circle ant-btn-icon-only home_store_top_button home_store_top_left_button home_store_top_button_disable"><span role="img" aria-label="left" className="anticon anticon-left store_icon_button"><svg viewBox="64 64 896 896" focusable="false" className data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                          <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z">
                          </path>
                        </svg></span></button><button type="button" className="ant-btn ant-btn-circle ant-btn-icon-only home_store_top_button home_store_top_right_button"><span role="img" aria-label="right" className="anticon anticon-right store_icon_button"><svg viewBox="64 64 896 896" focusable="false" className data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                          <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z">
                          </path>
                        </svg></span></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="layout layout-blog">
              <div className="container">
                <div>
                  <div className="layout__head">
                    <div>
                      <div className="head__title">Shine member</div>
                      <div className="head__title head__sub-title">Tham gia ngay cùng 700.000 hội viên với quyền lợi đặc biệt
                      </div>
                    </div>
                  </div>
                </div>
                <div className="layout__blog">
                  <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
                    <div className="swiper-wrapper" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                      <div className="swiper-slide swiper-slide-active" style={{width: '312.857px', marginRight: '30px'}}><a href="/shine-member" rel="noreferrer">
                          <div className="blog__media"><img src="https://storage.30shine.com/ResourceWeb/data/images/newHome/bsg.jpg" alt="" /></div>
                        </a><a href="/shine-member" rel="noreferrer">
                          <div className="blog__title">Black/ Silver/ Gold Member và hàng ngàn quyền lợi</div>
                        </a></div>
                    </div><span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
                  </div>
                </div>
              </div>
            </div>
            <div className="layout layout-media">
              <div className="container">
                <div>
                  <div className="layout__head">
                    <div>
                      <div className="head__title">Shine moment</div>
                      <div className="head__title head__sub-title">Cùng lan tỏa những phút giây tỏa sáng tại 30Shine</div>
                    </div>
                  </div>
                </div>
                <div className="media__wrapper relative">
                  <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
                    <div className="swiper-wrapper" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                      <div className="swiper-slide pointer swiper-slide-active" style={{width: '270px', marginRight: '30px'}}>
                        <div className="wrapper__img pointer"><img src="https://storage.30shine.com/ResourceWeb/data/images/feedback/A1.jpg" alt="" /></div>
                      </div>
                      <div className="swiper-slide pointer swiper-slide-next" style={{width: '270px', marginRight: '30px'}}>
                        <div className="wrapper__img pointer"><img src="https://storage.30shine.com/ResourceWeb/data/images/feedback/A2.jpg" alt="" /></div>
                      </div>
                      <div className="swiper-slide pointer" style={{width: '270px', marginRight: '30px'}}>
                        <div className="wrapper__img pointer"><img src="https://storage.30shine.com/ResourceWeb/data/images/feedback/A3.jpg" alt="" /></div>
                      </div>
                      <div className="swiper-slide pointer" style={{width: '270px', marginRight: '30px'}}>
                        <div className="wrapper__img pointer"><img src="https://storage.30shine.com/ResourceWeb/data/images/feedback/A4.jpg" alt="" /></div>
                      </div>
                      <div className="swiper-slide pointer" style={{width: '270px', marginRight: '30px'}}>
                        <div className="wrapper__img pointer"><img src="https://storage.30shine.com/ResourceWeb/data/images/feedback/A5.jpg" alt="" /></div>
                      </div>
                      <div className="swiper-slide pointer" style={{width: '270px', marginRight: '30px'}}>
                        <div className="wrapper__img pointer"><img src="https://storage.30shine.com/ResourceWeb/data/images/feedback/A6.jpg" alt="" /></div>
                      </div>
                      <div className="swiper-slide pointer" style={{width: '270px', marginRight: '30px'}}>
                        <div className="wrapper__img pointer"><img src="https://storage.30shine.com/ResourceWeb/data/images/feedback/A7.jpg" alt="" /></div>
                      </div>
                      <div className="swiper-slide pointer" style={{width: '270px', marginRight: '30px'}}>
                        <div className="wrapper__img pointer"><img src="https://storage.30shine.com/ResourceWeb/data/images/feedback/A8.jpg" alt="" /></div>
                      </div>
                      <div className="swiper-slide pointer" style={{width: '270px', marginRight: '30px'}}>
                        <div className="wrapper__img pointer"><img src="https://storage.30shine.com/ResourceWeb/data/images/feedback/A9.jpg" alt="" /></div>
                      </div>
                      <div className="swiper-slide pointer" style={{width: '270px', marginRight: '30px'}}>
                        <div className="wrapper__img pointer"><img src="https://storage.30shine.com/ResourceWeb/data/images/feedback/A10.jpg" alt="" /></div>
                      </div>
                    </div><span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
                  </div><button disabled type="button" className="ant-btn ant-btn-circle ant-btn-icon-only swiper_button button_prev swiper_button_disable"><span role="img" aria-label="left" className="anticon anticon-left swiper_button_icon"><svg viewBox="64 64 896 896" focusable="false" className data-icon="left" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                        <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z">
                        </path>
                      </svg></span></button><button type="button" className="ant-btn ant-btn-circle ant-btn-icon-only swiper_button button_next"><span role="img" aria-label="right" className="anticon anticon-right swiper_button_icon"><svg viewBox="64 64 896 896" focusable="false" className data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                        <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z">
                        </path>
                      </svg></span></button>
                </div>
              </div>
            </div>
            <div className="layout layout-service">
              <div className="container"><a href="/shine-care" rel="noreferrer">
                  <div className="layout__head">
                    <div>
                      <div className="head__title">Cam kết 30shine care</div>
                      <div className="head__title head__sub-title">Sự hài lòng của anh là ưu tiên hàng đầu của 30Shine</div>
                    </div>
                    <div className="head__text-view-all"><span>Xem tất cả</span><img src="./static/media/chevronRight.0f447c60.svg" alt="" /></div>
                  </div>
                </a>
                <div className="layout__banner"><a href="/shine-care" rel="noreferrer">
                    <div className="banner__media"><img src="https://storage.30shine.com/ResourceWeb/data/images/home/banner-30shine-care-5.jpg" alt="" />
                    </div>
                  </a>
                  <div className="banner__wrapper">
                    <div className="banner__title">VÌ CHẤT LƯỢNG PHỤC VỤ LÀ HÀNG ĐẦU</div>
                    <div className="banner__text">Áp dụng tại salon bất kỳ toàn hệ thống 30Shine</div>
                  </div>
                </div>
                <div className="layout__list">
                  <div className="ant-row" style={{marginLeft: '-15px', marginRight: '-15px'}}>
                    <div className="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-6" style={{paddingLeft: '15px', paddingRight: '15px'}}><a href="/shine-care" rel="noreferrer">
                        <div className="list__item  
                                            pointer
                                            border-none
                                            
                                        ">
                          <div className="item__media "><img src="https://storage.30shine.com/ResourceWeb/data/images/newHome/2-care.png" alt="" /></div>
                          <div className="item__content">
                            <div className="item__title">7 ngày</div>
                            <div className="item__subTitle">Chỉnh sửa tóc miễn phí</div>
                          </div>
                        </div>
                      </a></div>
                    <div className="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-6" style={{paddingLeft: '15px', paddingRight: '15px'}}><a href="/shine-care" rel="noreferrer">
                        <div className="list__item  
                                            pointer
                                            
                                            
                                        ">
                          <div className="item__media "><img src="https://storage.30shine.com/ResourceWeb/data/images/newHome/1-care.png" alt="" /></div>
                          <div className="item__content">
                            <div className="item__title">3 ngày</div>
                            <div className="item__subTitle">Đổi/ trả hàng miễn phí</div>
                          </div>
                        </div>
                      </a></div>
                    <div className="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-6" style={{paddingLeft: '15px', paddingRight: '15px'}}><a href="/shine-care" rel="noreferrer">
                        <div className="list__item  
                                            pointer
                                            
                                            
                                        ">
                          <div className="item__media "><img src="https://storage.30shine.com/ResourceWeb/data/images/newHome/3-care.png" alt="" /></div>
                          <div className="item__content">
                            <div className="item__title">15 ngày</div>
                            <div className="item__subTitle">Bảo hành Uốn Nhuộm</div>
                          </div>
                        </div>
                      </a></div>
                    <div className="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-6" style={{paddingLeft: '15px', paddingRight: '15px'}}><a href="/shine-care" rel="noreferrer">
                        <div className="list__item  
                                            pointer
                                            
                                            
                                        ">
                          <div className="item__media "><img src="https://storage.30shine.com/ResourceWeb/data/images/newHome/4-care.png" alt="" /></div>
                          <div className="item__content">
                            <div className="item__title">Giảm 20%</div>
                            <div className="item__subTitle">Nếu chờ đợi quá lâu</div>
                          </div>
                        </div>
                      </a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="layout layout-service">
              <div className="container"><a href="/system-salon" rel="noreferrer">
                  <div className="layout__head">
                    <div>
                      <div className="head__title">Tìm 30shine gần nhất</div>
                      <div className="head__title head__sub-title">Để xe thuận tiện an toàn, bản đồ dẫn đường chi tiết (79
                        salon)</div>
                    </div>
                    <div className="head__text-view-all"><span>Xem tất cả</span><img src="./static/media/chevronRight.0f447c60.svg" alt="" /></div>
                  </div>
                </a>
                <div className="layout__list">
                  <div className="ant-row" style={{marginLeft: '-15px', marginRight: '-15px'}}>
                    <div className="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-6" style={{paddingLeft: '15px', paddingRight: '15px'}}><a href="/system-salon?province=1" rel="noreferrer">
                        <div className="list__item  
                                            pointer
                                            border-none
                                            list__item-hover
                                        ">
                          <div className="item__media "><img src="https://storage.30shine.com/ResourceWeb/data/images/newHome/salon-hanoi.png" alt="" />
                          </div>
                          <div className="item__content">
                            <div className="item__title">TP. Hồ Chí Minh</div>
                            <div className="item__subTitle">40 Salon</div>
                          </div>
                        </div>
                      </a></div>
                    <div className="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-6" style={{paddingLeft: '15px', paddingRight: '15px'}}><a href="/system-salon?province=62" rel="noreferrer">
                        <div className="list__item  
                                            pointer
                                            
                                            list__item-hover
                                        ">
                          <div className="item__media "><img src="https://storage.30shine.com/ResourceWeb/data/images/newHome/salon-hcm.png" alt="" />
                          </div>
                          <div className="item__content">
                            <div className="item__title">Hà Nội</div>
                            <div className="item__subTitle">18 Salon</div>
                          </div>
                        </div>
                      </a></div>
                    <div className="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-6" style={{paddingLeft: '15px', paddingRight: '15px'}}><a href="/system-salon?province=60" rel="noreferrer">
                        <div className="list__item  
                                            pointer
                                            
                                            list__item-hover
                                        ">
                          <div className="item__media "><img src="https://storage.30shine.com/ResourceWeb/data/images/newHome/salon-danang.png" alt="" />
                          </div>
                          <div className="item__content">
                            <div className="item__title">Đà Nẵng</div>
                            <div className="item__subTitle">1 Salon</div>
                          </div>
                        </div>
                      </a></div>
                    <div className="ant-col ant-col-xs-24 ant-col-md-12 ant-col-lg-6" style={{paddingLeft: '15px', paddingRight: '15px'}}><a href="/system-salon" rel="noreferrer">
                        <div className="list__item  
                                            pointer
                                            
                                            list__item-hover
                                        ">
                          <div className="item__media "><img src="https://storage.30shine.com/ResourceWeb/data/images/newHome/salon-other.png" alt="" />
                          </div>
                          <div className="item__content">
                            <div className="item__title">Thành phố khác</div>
                            <div className="item__subTitle">20 Salon</div>
                          </div>
                        </div>
                      </a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </React.Fragment>
  );
}
export default HomePage;
