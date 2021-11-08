import Slider from "react-slick";
import { Link } from "react-router-dom";
import CategoryProduct from "./CategoryProduct";

import { useSelector } from "react-redux";
import ItemProduct from "./ItemProduct";
export default function HomeBanner(props) {
  const { banners, categories, discountProducts } = props;
  const appTheme = useSelector((state) => state.app.appTheme);

  var settings = {
    infinite: props.products.length > 4,
    slidesToShow: 5,
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
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  function handleCateClick(id) {
    window.location.href = `/danh-sach-san-pham?danh-muc-ids=${id}`;
  }
  return (
    <section className="section_product_new" style={{ "margin-top": props.style ? "100px" : "20px" }}>
      <div className="container">
        <h2 className="title-block">
          <a href="san-pham-moi.html" title="Mẫu mới về">
            {props.title}
          </a>
        </h2>
        <div className="container">
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
