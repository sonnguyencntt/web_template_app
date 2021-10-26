import Slider from "react-slick";
import { Link } from "react-router-dom";
import { standardProductLink } from "../../../../helper"

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
  } = props.product;
  let pastPrice = min_price;
  let discount = 0;
  let discount_percent = 0;
  let avt = "/img/default_product.jpg";
  if (product_discount) {
    discount_percent = product_discount.value;
    discount = min_price * 0.01 * product_discount.value;
    price = min_price - discount;
  }
  if (images.length) avt = images[0].image_url;

  function handleCateClick(id) {
    window.location.href = `/danh-sach-san-pham?danh-muc-ids=${id}`;
  }
  return (
    <div className="item">
      <div className="product-box">
        <div className="product-thumbnail flexbox-grid">
        <Link  to={`/san-pham/${standardProductLink(name)}-${id}`}>
            <img
              style={{
                width: "100%",
                height : "100%",
                "object-fit": "cover",
              }}
              src={avt}
              alt="Quả Kiwi xanh"
            />
          </Link>
          <div
            class={`sale-flash ${
              product_discount == null || product_discount == 0
                ? "hide"
                : "show"
            }`}
          >
            <div class="before"></div>- {discount_percent}%
          </div>
        </div>
        <div className="product-info a-center">
          <h3 className="product-name">
          <Link  to={`/san-pham/${standardProductLink(name)}-${id}`}

              style={{
                display: "-webkit-box",
                "-webkit-line-clamp": "2",
                "-webkit-box-orient": "vertical",
                overflow: "hidden",
              }}
              title="Quả Kiwi xanh"
            >
              {name}
            </Link>
          </h3>
          <div className="sapo-product-reviews-badge" data-id={11480163} />
          <div className="price-box clearfix">
            <div className="special-price">
              <span className="price product-price">
                {" "}
                ₫{formatPriceOrContact(price)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
