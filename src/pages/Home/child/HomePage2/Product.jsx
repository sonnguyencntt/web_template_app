import Slider from "react-slick";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import ItemProduct from "./ItemProduct"
export default function HomeBanner(props) {
  const { banners, categories, discountProducts } = props;
  const appTheme = useSelector((state) => state.app.appTheme);

  var settings = {
    infinite: props.products.length > 4,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          infinite: props.products.length > 1,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: props.products.length > 2,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          infinite: props.products.length > 3,
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };
  function handleCateClick(id) {
    window.location.href = `/danh-sach-san-pham?danh-muc-ids=${id}`;
  }
  return (
    <section className="awe-section-3" id="awe-section-3">
      <div className="section section-collection section-collection-1">
        <div className="container">
          <div className="collection-border">
            <div className="collection-main">
              <div className="row ">
                <div className="col-lg-12 col-sm-12">
                  <div
                    className="e-tabs not-dqtab ajax-tab-1"
                    data-section="ajax-tab-1"
                    data-view="car-1"
                  >
                    <div className="row row-noGutter">
                      <div className="col-sm-12">
                        <div className="content">
                          <div className="section-title">
                            <h2>{props.title}</h2>
                          </div>
                          <div>
                            <div className="">
                                <Slider {...settings}>
                                  {props.products.map((v, i) => (
                                   
                                      <ItemProduct key={i} product={v} />
                                  ))}
                                </Slider>
                                
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
