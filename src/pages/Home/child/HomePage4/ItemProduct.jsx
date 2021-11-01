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
  console.log(discount_percent);
  return (
    <div style = {{
      padding : "0 6px"
    }}>
      <div className="swiper-slide" style={{ border: "1px solid  #dad3d3" }}>
        <div className="item_product_main">
          <form
            action="https://ego-wear.mysapo.net/cart/add"
            method="post"
            className="variants product-action wishItem"
          >
            <div
              class={`product-thumbnail ${
                product_discount == null || product_discount == 0 ? "" : "sale"
              }`}
              data-sale={`Giảm ${discount_percent}%`}
            >
              <Link
                className="image_thumb"
                to={`/san-pham/${standardProductLink(name)}-${id}`}
              >
                <div className="product-image">
                  <img
                    style={{ objectFit: "contain" }}
                    src={avt}
                    alt="Áo polo phối khóa cổ"
                  />
                </div>
              </Link>{" "}
            </div>
            <div className="product-info" style = {{padding : "0 8px"}}>
              <span className="brand">Lượt xem : {view}</span>
              <h3 className="product-name">
                <Link to={`/san-pham/${standardProductLink(name)}-${id}`}>
                  {name}
                </Link>
              </h3>
              <div class="bottom-action">
                <div class="price-box">
                  <span class="price"> ₫{formatPriceOrContact(price)}</span>
                  <span class="compare-price">
                    {" "}
                    {"  "}₫{formatPriceOrContact(discount)}
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
