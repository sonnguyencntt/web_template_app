import Slider from "react-slick";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
export default function HomeBanner(props) {
  const appTheme = useSelector((state) => state.app.appTheme);
  const { banners, discountProducts } = props;
  var bannerSettings = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  function handleCateClick(id) {
    window.location.href = `/danh-sach-san-pham?danh-muc-ids=${id}`;
  }
  return (
    <section className="awe-section-1">
      <div className="home-slider swiper-container gallery-top">
        <div className="">
          <Slider {...bannerSettings}>
            {banners.map((v, i) => (
              <div className="swiper-slide">
                <a href="#" className="clearfix" title="ND Fresh">
                  <img
                    style={{
                      width: "100%",
                      maxHeight: "497px",
                      objectFit: "cover",
                    }}
                    src={v.image_url}
                    alt="ND Fresh"
                    className="img-responsive center-block d-block mx-auto img-banner"
                  />
                </a>
              </div>
            ))}
          </Slider>
        </div>
        <div className="swiper-pagination" />
      </div>
    </section>
  );
}
