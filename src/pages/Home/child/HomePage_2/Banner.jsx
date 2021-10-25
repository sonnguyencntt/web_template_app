import Slider from "react-slick";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
export default function HomeBanner(props) {
  const { banners } = props;
  const appTheme = useSelector((state) => state.app.appTheme);

  function handleCateClick(id) {
    window.location.href = `/danh-sach-san-pham?danh-muc-ids=${id}`;
  }
  return (
    <section className="awe-section-2" id="awe-section-2">
      <div className="section_banner">
        <div className="container">
          <h2 className="hidden">Banner</h2>
          <div
            className="banner-slider slickp_banner_1"
            data-lg-items={3}
            data-md-items={3}
            data-sm-items={2}
            data-xs-items={2}
            data-nav="true"
          >
            {
               banners.map((v, i) => (
                  <div className="item">
                    <a href="#" className="clearfix">
                      <img
                      style = {{height : "180px" , width : "320px" , borderRadius : "10px"}}
                        src={v.image_url}
                        alt="alt banner demo"
                      />
                    </a>
                  </div>
                ))
             }
          </div>
        </div>
      </div>
    </section>
  );
}
