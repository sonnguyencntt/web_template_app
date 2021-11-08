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

  return (
    <div className="section_slider container">
      <div className="swiper-container slide-container">
        <div className="">
            <Slider {...bannerSettings}>
              {banners.map((v, i) => (
                <div className="swiper-slide">
                  <a href="#" className="clearfix" title="HOT SALE - Sập Sàn">
                    <img
                      style={{
                        width: "100%",
                        maxHeight: "475px",
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
        </div>
      </div>
  );
}
