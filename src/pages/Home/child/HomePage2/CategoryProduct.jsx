import Slider from "react-slick";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
export default function HomeBanner(props) {
  const { banners, categories, discountProducts } = props;
  const appTheme = useSelector((state) => state.app.appTheme);

  function handleCateClick(id) {
    window.location.href = `/danh-sach-san-pham?danh-muc-ids=${id}`;
  }

  var bannerSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
  };
  return (
    <section className="awe-section-1" id="awe-section-1">
      <div className="section_category_slider">
        <div className="container">
          <div className="col-md-9 col-md-push-3  px-0 mt-5 ">
            <div className="home-slider owl-carousel">
              <Slider {...bannerSettings}>
                {banners.length > 0
                  ? banners.map((v, i) => (
                      <div
                        className="item"
                        // style={{
                        //   display: "block",
                        //   position: "relative",
                        //   margin: "auto",
                        // }}
                      >
                        <a href="#" className="clearfix">
                          <img
                          className = "img-banner"
                            src={v.image_url}
                            alt="alt banner demo"
                            style={{
                     
                              width: "100%",
                              height: "407px",
                              "object-fit": "cover",
                            }}
                          />
                        </a>
                      </div>
                    ))
                  : null}
              </Slider>
            </div>
          </div>
          <div className="col-md-3 col-md-pull-9 mt-5 hidden-xs aside-vetical-menu">
            <aside className="blog-aside aside-item sidebar-category">
              <div
                className="aside-title text-center text-xl-left"
                style={{ backgroundColor: appTheme.color_main_1 }}
              >
                <h2 className="title-head">
                  <span>Danh mục</span>
                </h2>
              </div>
              <div
                className="aside-content"
                style={{
                  height: "370px",

                  overflow: "auto",
                }}
              >
                <div className="nav-category  navbar-toggleable-md">
                  <ul className="nav navbar-pills">
                    {categories.length > 0
                      ? categories.map((v, i) => (
                          <li className="nav-item">
                            <i
                              className="fa fa-arrow-circle-right"
                              aria-hidden="true"
                            />
                            <Link
                              title="Rau sạch"
                              className="nav-link"
                              to={`/danh-sach-san-pham?danh-muc=${v.name.replace(
                                /\s/g,
                                "-"
                              )}-${v.id}`}
                            >
                              {v.name}
                            </Link>
                          </li>
                        ))
                      : null}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
