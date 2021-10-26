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
          <h2 className="hidden">Danh mục</h2>
          <div className="row">
            <div className="col-md-9 col-md-push-3 px-md-4 px-0 mt-md-5 mb-5">
              <div className="home-slider owl-carousel">
              <Slider {...bannerSettings}>

                {banners.length > 0
                  ? banners.map((v, i) => (
                      <div className="item">
                        <a href="#" className="clearfix">
                          <img src={v.image_url} alt="alt banner demo" />
                        </a>
                      </div>
                    ))
                  : null}
                            </Slider >

              </div>
            </div>
            <div className="col-md-3 col-md-pull-9 mt-5 hidden-xs aside-vetical-menu">
              <aside className="blog-aside aside-item sidebar-category">
                <div className="aside-title text-center text-xl-left">
                  <h2 className="title-head">
                    <span>Danh mục</span>
                  </h2>
                </div>
                <div className="aside-content">
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
      </div>
    </section>
  );
}
