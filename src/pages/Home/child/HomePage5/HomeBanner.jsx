import React, { useEffect, useMemo } from "react";

import Slider from "react-slick";

export default function HomeBanner(props) {
  const { banners, categories, discountProducts } = props;
  var bannerSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
  };
  var cateSettings = {
    infinite: categories.length > 5,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          arrows: false,
          infinite: categories.length > 2,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: categories.length > 4,
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          infinite: categories.length > 4,
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };
  function handleCateClick(id) {
    window.location.href = `/danh-sach-san-pham?danh-muc-ids=${id}`;
  }



  return (
    <section className="home-1">
      <div className="container">
        <div className="home-banner flex flex-wrap">
          <div className="product-category-wrapper Module Module-1282">
            <div className="ModuleContent">
              <div className="product-category dropdown-5">
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
                    <ul className="category-column-5">
                      {categories.length > 0
                        ? categories.map((v, i) => (
                            <li>
                              <a
                                className="product-category-link flex items-center justify-between"
                                href="me-be.html"
                              >
                                <span className="text flex items-center">
                                  <span className="icon">
                                    <img src={v.image_url} />
                                  </span>{" "}
                                  {v.name}
                                </span>
                                <span className="arrow">
                                  <em className="ri-arrow-right-s-line" />
                                </span>
                              </a>
                            </li>
                          ))
                        : null}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="big-banner-promo-wrapper Module Module-222">
            <div className="ModuleContent">
              <div className="big-banner-promo">
                <div className="swiper-container">
                  <div className="">
                    <Slider {...bannerSettings}>
                      {banners.map((v, i) => (
                        <div className="swiper-slide">
                          <a className="object-fit-img img" href="#">
                            <img src={v.image_url} />
                          </a>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="small-banner-promo-wrapper hidden-mobile Module Module-223">
            <div className="ModuleContent">
              <div className="small-banner-promo">
                <ul>
                  <li>
                    <a
                      className="object-fit-img img"
                      href="ho-tro/chinh-sach-tich-diem-1.html"
                    >
                      <img src="https://sakukostore.com.vn/Data/Sites/1/Banner/chinh-sach-web-01.jpg" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="object-fit-img img"
                      href="ho-tro/huong-dan-thanh-toan.html"
                    >
                      <img src="https://sakukostore.com.vn/Data/Sites/1/Banner/chinh-sach---2-02.jpg" />
                    </a>
                  </li>
                  <li>
                    <a
                      className="object-fit-img img"
                      href="ho-tro/chinh-sach-doi-tra-hang.html"
                    >
                      <img src="https://sakukostore.com.vn/Data/Sites/1/Banner/chinh-sach---2-03.jpg" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="feature-group-wrap w-100 Module Module-225">
            <div className="ModuleContent">
              <h1
                style={{ textAlign: "center" }}
                className="section-title text-blue"
              >
                HỆ THỐNG SIÊU THỊ HÀNG NHẬT NỘI ĐỊA - SAKUKO JAPANESE STORE
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
