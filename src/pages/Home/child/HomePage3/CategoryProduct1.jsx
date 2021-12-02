import Slider from "react-slick";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
export default function HomeBanner(props) {
  const { banners, categories, discountProducts } = props;
  const appTheme = useSelector((state) => state.app.appTheme);

  function handleCateClick(id) {
    window.location.href = `/danh-sach-san-pham?danh-muc-ids=${id}`;
  }

  var settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="awe-section-2">
      <section className="section_category category-1">
        <div className="container">
          <div className="cate-list">
            <div className="swiper-container">
                <Slider {...settings}>
                  {categories.length > 0
                    ? categories.map((v, i) => (
                        <div className="swiper-slide">
                          <div className="cate-item">
                            <Link className="image" to={`/danh-sach-san-pham?danh-muc=${v.name.replace(
                              /\s/g,
                              "-"
                            )}-${v.id}`} title="Trứng và bơ">
                              <img
                                className="image_cate_thumb lazy"
                                width={241}
                                height={220}
                                src={v.image_url}
                              />
                            </Link>
                            <h3 className="title_cate_">
                              <Link  to={`/danh-sach-san-pham?danh-muc=${v.name.replace(
                              /\s/g,
                              "-"
                            )}-${v.id}`} >
                              {v.name}
                              </Link>
                            </h3>
                          </div>
                        </div>
                      ))
                    : null}
                </Slider>
              </div>
            </div>
          </div>
      </section>
    </section>
  );
}
