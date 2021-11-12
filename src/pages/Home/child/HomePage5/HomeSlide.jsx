import Slider from "react-slick";
import { Link } from "react-router-dom";
import Booking from "../../../../components/Booking/Booking"

import { useSelector } from "react-redux";
export default function HomeSlide(props) {
  const appTheme = useSelector((state) => state.app.appTheme);
  const { banners, discountProducts } = props;
  var bannerSettings = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="home__slide">
      <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
        <Slider {...bannerSettings}>
          {banners.map((v, i) => (
            <div
              className="swiper-wrapper"
              style={{
                transitionDuration: "300ms",
                transform: "translate3d(-4557px, 0px, 0px)",
              }}
            >
              <div className="swiper-slide">
                <Link >
                  <img
                    className="pc swiper-lazy swiper-lazy-loaded"
                    alt=""
                    src={v.image_url}
                  />
                </Link>
              </div>
            </div>
          ))}
        </Slider>

      </div>
     <Booking/>
    </div>
  );
}
