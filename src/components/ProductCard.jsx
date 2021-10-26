import { formatPrice, formatPriceOrContact, handleImgErr } from "../helper";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { standardProductLink } from "../helper"

export default function ProductCard(props) {
  const appTheme = useSelector(state => state.app.appTheme);
  const myLink = useRef(null);
  const badges = useSelector((state) => state.user.badges);
  let {
    id,
    name,
    view,
    price,
    images,
    is_new,
    min_price,
    is_favorite,
    product_discount,
    percent_collaborator,
    is_top_sale } = props.product;
  let discount = 0;
  let discount_percent = 0;
  let avt = "/img/default_product.jpg";
  if (product_discount) {
    discount_percent = product_discount.value;
    discount = min_price * 0.01 * product_discount.value;
    price = min_price - discount;
  }
  if (images.length)
    avt = images[0].image_url;
  function handleClick() {
    myLink.current.click();
  }
  return (
    <div onClick={handleClick} className="product-card">
      <div style={{ display: "none" }}>
        <Link ref={myLink} to={`/san-pham/${standardProductLink(name)}-${id}`} />
      </div>
      <div className="image">
        {
          is_new &&
          <div className="new-tag">
            Mới
          </div>
        }
        {
          product_discount &&
          <div className="discount-tag">
            {`${discount_percent}%`}
            <br />
            <span>GIẢM</span>
          </div>
        }
        {
          is_favorite &&
          <div className="favorite-tag"
            style={{ bottom: is_top_sale ? "23px" : "0" }}
          >
            Yêu thích
          </div>
        }
        {
          is_top_sale &&
          <div className="top-sale-tag">
            Bán chạy
          </div>
        }
        <div className="img-container">
          <img src={avt} alt="" loading="lazy"
            onError={handleImgErr}
            style={{ background: "url(/img/default_product.jpg)", backgroundSize: "contain" }} />
        </div>
      </div>
      <div style={{ padding: "0.5em" }}>
        <div className="name">
          {name}
        </div>
        <div className="row">
          <div>
            <div className="current-price" style={{ color: appTheme.color_main_1 }}>
              ₫{formatPriceOrContact(price)}
            </div>
            {
              badges.status_collaborator === 1 &&
              <div className="coll-price">
                <span>
                  Hoa hồng:
                </span><br />
                <label >
                  {` ₫${formatPrice(min_price * percent_collaborator / 100)}`}
                </label>
              </div>
            }
          </div>
          {
            view > 0 &&
            <div className="view-count">
              Đã xem: {view}
            </div>
          }
        </div>
      </div>
    </div>
  )
}