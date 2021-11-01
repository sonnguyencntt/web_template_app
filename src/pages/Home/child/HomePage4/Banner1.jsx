import Slider from "react-slick";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
export default function HomeBanner(props) {
  const appTheme = useSelector((state) => state.app.appTheme);
  const { banners, discountProducts } = props;
  var bannerSettings = {
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,

  };

  function handleCateClick(id) {
    window.location.href = `/danh-sach-san-pham?danh-muc-ids=${id}`;
  }
  return (


    <section className="awe-section-4">
    <div className="section_banner">
      <div className="container">
        <div className="banner-swiper swiper-container">
          <Slider {...bannerSettings}>
              {banners.map((v, i) => (
                  <div className="swiper-slide">
                  <a href="#" className="clearfix" title="ND Fresh">
                      <img
                      style = {{width : "100%" ,height : "200px" , objectFit : "cover"}}
                      src={v.image_url}
                      alt="ND Fresh"
                        className="img-responsive center-block d-block mx-auto"
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
