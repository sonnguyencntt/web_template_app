import Slider from "react-slick";
import { Link } from "react-router-dom";
import { standardProductLink } from "../../../../helper";

import {
  formatPrice,
  formatPriceOrContact,
  handleImgErr,
} from "../../../../helper";

import { useSelector } from "react-redux";
export default function ItemProduct(props) {
  const appTheme = useSelector((state) => state.app.appTheme);
  const badges = useSelector((state) => state.user.badges);
  let {
    min_price,
    price,
    product_discount,
    percent_collaborator,
    images,
    name,
    id,
    view,
    is_favorite,
    is_new,
    is_top_sale,
  } = props.product;
  let pastPrice = min_price;
  let discount = 0;
  let discount_percent = 0;
  let avt = "/img/default_product.jpg";
  if (product_discount) {
    discount_percent = product_discount.value;
    // discount = min_price * 0.01 * product_discount.value;
    discount = product_discount.discount_price;

    // price = min_price - discount;
  }
  if (images.length) avt = images[0].image_url;

  function handleCateClick(id) {
    window.location.href = `/danh-sach-san-pham?danh-muc-ids=${id}`;
  }
  console.log(discount_percent);
  return (
    <div className="swiper-slide">
    <div className="product-item">
      <a
        className="product-img"
        href="me-be/bim/bim-genki/bim-genki-premium-soft-c-l54-dang-dan.html"
      >
        <img
          src={avt}
    
        />
        <div className={`product-deal-coupon
        
            `
          }
            >
          Giảm {discount_percent}%
        </div>
      </a>
      <h3 className="product-name leading-snug">
        <Link                to={`/san-pham/${standardProductLink(name)}-${id}`}
>
          {name}
        </Link>
      </h3>
      <div className="product-price flex items-end">
        <strong className="price text-main">
        {"  "}₫{formatPriceOrContact(discount == 0  ? price : discount )}
        </strong>
        <del className="old-price">
        ₫{formatPriceOrContact(price)}{" "}

        </del>
      </div>

    </div>
  </div>
  );
}
