import Slider from "react-slick";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
export default function HomeBanner(props) {
  const appTheme = useSelector((state) => state.app.appTheme);
  const { banners, discountProducts } = props;
  var bannerSettings = {
    infinite: false,
    slidesToShow: banners.length > 3 ? 3 : banners.length  ,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
    ]
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
                  <a href = {v.link_to == null ? "#" : v.link_to } className="clearfix">
                    <img
                      style={{
                        height: "156px",
                        width: "100%",
                        borderRadius: "20px",
                        objectFit  : "cover"
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
