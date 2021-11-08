import Slider from "react-slick";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
export default function HomeBanner(props) {
  const appTheme = useSelector((state) => state.app.appTheme);
  const { banners, discountProducts } = props;
  var bannerSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
  };
  function handleCateClick(id) {
    window.location.href = `/danh-sach-san-pham?danh-muc-ids=${id}`;
  }
  return (
    <section className="awe-section-2" id="awe-section-2">
      <div className="section_banner">
        <div className="container">
          <h2 className="hidden">Banner</h2>
          <div >
            <Slider {...bannerSettings}>
              {banners.map((v, i) => (
                <div className="item">
                  <a href="#" className="clearfix">
                    <img
                      style={{
                        height: "156px",
                        width: "360px",
                        borderRadius: "20px"
                      }}
                      src={v.image_url}
                      alt="alt banner demo"
                    />
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
