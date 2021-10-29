import Slider from "react-slick";
import { Link } from "react-router-dom";
import CategoryProduct from "./CategoryProduct";

import { useSelector } from "react-redux";
import ItemProduct from "./ItemProduct";
export default function HomeBanner(props) {
  const { banners, categories, discountProducts } = props;
  const appTheme = useSelector((state) => state.app.appTheme);

  var settings = {
    infinite: props.products.length > 3,
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
    <section className="awe-section-5">
      <div className="section_product product_1" id="product_1">
              <div className="block-product">
              <div className="section-title" >
                            <h3>{props.title}</h3>
                          </div>
                    <Slider {...settings}>
                      {props.products.map((v, i) => (
                        <ItemProduct key={i} product={v} />
                      ))}
                    </Slider>
                  </div>
          </div>
    </section>
  );
}
