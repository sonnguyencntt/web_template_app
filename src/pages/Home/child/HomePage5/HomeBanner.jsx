import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Slider from "react-slick";

export default function HomeBanner(props) {
  const { banners, categories, discountProducts } = props;
  const appTheme = useSelector((state) => state.app.appTheme);

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
                              <Link
                                className="product-category-link flex items-center justify-between"
                                to={`/danh-sach-san-pham?danh-muc=${v.name.replace(
                                  /\s/g,
                                  "-"
                                )}-${v.id}`}                              >
                                <span className="text flex items-center">
                                  <span className="icon">
                                    <img src={v.image_url} />
                                  </span>{" "}
                                  <span>
                                  {v.name}

                                  </span>
                                </span>
                                {/* <span className="arrow">
                                  <em className="ri-arrow-right-s-line" />
                                </span> */}
                              </Link>
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
                <ul className = "list-banner" style = {{"max-height": "450px",
    "overflow": "auto"}}>


{props.banners_ads.map((v, i) => (
                         <li>
                         <a
                           className="object-fit-img img"
                           href= {v.link_to == null ? "#" : v.link_to }
                         >
                           <img                       src={v.image_url}
 />
                         </a>
                       </li>
                      ))}
      
           
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
                {appTheme.contact_individual_organization_name}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
