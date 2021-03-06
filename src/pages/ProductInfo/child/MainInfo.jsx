import { useMemo, useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FacebookIcon } from "react-share";
import { FacebookShareButton } from "react-share";
import { constants as c } from "../../../constants";
import { appActions } from "../../../actions/appActions";
import { cartActions } from "../../../actions/cartActions";
import { userActions } from "../../../actions/userActions";
import { productActions } from "../../../actions/productActions";
import { voucherActions } from "../../../actions/voucherActions";
import { formatPrice, formatPriceOrContact } from "../../../helper";
import Slider from "react-slick";

import "react-toastify/dist/ReactToastify.css";
export default function MainInfo(props) {
  let {
    id,
    name,
    images,
    distributes,
    product_discount,
    quantity_in_stock_with_distribute,
    content_for_collaborator,
    min_price,
    max_price,
    price,
    percent_collaborator,
    sku
  } = props.product;
  if (!images.length) images.push({ image_url: "/img/default_product.jpg" });
  let discount_percent = null;
  let discount = 0;

  if (product_discount)
  {

    discount_percent = product_discount.value;
    discount = product_discount.discount_price;

  }
  const dispatch = useDispatch();
  const myShareBtn = useRef(null);
  const vouchers = useSelector((state) => state.voucher.list);
  const appTheme = useSelector((state) => state.app.appTheme);
  const badges = useSelector((state) => state.user.badges);
  const productVouchers = useMemo(() => {
    return vouchers.data.filter((v) => {
      if (v.voucher_type === 0) return false;
      return v.products.filter((p) => p.id === id).length > 0;
    });
  }, [vouchers, id]);
  const [currentImages, setCurrentImages] = useState(images);
  const [currentPrice, setCurrentPrice] = useState(null);
  const [currentQuantityInStock, setCurrentQuantityInStock] = useState(quantity_in_stock_with_distribute);
  const [selectedDistributes, setSelectedDistributes] = useState(-1);
  const [selectedSubDistribute, setSelectedSubdistribute] = useState(-1);
  const [selectedNumber, setSelectedNumber] = useState(
    quantity_in_stock_with_distribute > 0
      ? 1
      : quantity_in_stock_with_distribute === -1
        ? 1
        : 0
  );
  const [customClass, setCustomClass] = useState("");
  const profile = useSelector(state => state.user.profile);
  const productState = useSelector((state) => state.product);
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(() => {
    if (vouchers.status === c.LOADING) dispatch(voucherActions.getAllVoucher());
  });
  function modalClick(e) {
    if (!customClass) return
    let containers = document.querySelectorAll(".link-popup");
    for (let i = 0; i < containers.length; i++) {
      if (containers[i].contains(e.target)) return;
    }
    setCustomClass("");
  }
  function increaseNumber() {
    if (
      selectedNumber + 1 <= currentQuantityInStock ||
      currentQuantityInStock === -1
    )
      setSelectedNumber(selectedNumber + 1);
  }
  function decreaseNumber() {
    if (selectedNumber > 1) setSelectedNumber(selectedNumber - 1);
  }
  function handleAddCart() {
    if (distributes.length && selectedDistributes === -1) {
      dispatch(productActions.setErrorDistribute(distributes[0].name));
      return;
    }
    if (
      distributes.length &&
      selectedSubDistribute === -1 &&
      distributes[0].sub_element_distribute_name
    ) {
      dispatch(
        productActions.setErrorDistribute(
          distributes[0].sub_element_distribute_name
        )
      );
      return;
    }
    dispatch(productActions.setErrorDistribute(""));
    let d = [];
    let sd = {};
    if (distributes.length) {
      sd.name = distributes[0].name;
      sd.value = distributes[0].element_distributes[selectedDistributes].name;
    }
    if (selectedSubDistribute !== -1)
      sd.sub_element_distributes =
        distributes[0].element_distributes[
          selectedDistributes
        ].sub_element_distributes[selectedSubDistribute].name;
    d.push(sd);
    dispatch(
      cartActions.addCart(
        {
          product_id: id,
          quantity: selectedNumber,
          distributes: d,
        },
        true
      )
    );
    dispatch(userActions.getUserBadges());
  }
  function hanldeShare() {
    myShareBtn.current.click();
  }
  function handleToggleWishList() {
    dispatch(productActions.toggleWishList(id, props.isLiked));
    dispatch(userActions.getUserBadges());
  }
  const sliderRef = useRef();
  const goToImage = index => {
    sliderRef.current.slickGoTo(index);
  };
  function handleSelectDistribute(index) {
    setSelectedDistributes(index);
    let p;
    let q;
    var image = distributes[0].element_distributes[index].image_url;
    if (image) {
      if (currentImages[0].name !== undefined) {
        currentImages.shift();
      }
      currentImages.unshift(distributes[0].element_distributes[index]);
      setCurrentImages(currentImages);
      goToImage(0);
    }
    if (selectedSubDistribute !== -1) {
      if (
        distributes[0].element_distributes[index].sub_element_distributes
          .length > 0
      ) {
        p =
          distributes[0].element_distributes[index].sub_element_distributes[
            selectedSubDistribute
          ].price ?? min_price;
        q =
          distributes[0].element_distributes[index].sub_element_distributes[
            selectedSubDistribute
          ].quantity_in_stock ?? quantity_in_stock_with_distribute;
      } else {
        p = min_price;
        q = quantity_in_stock_with_distribute;
      }
      setCurrentPrice(p);
      setCurrentQuantityInStock(q);
      return;
    }
    if (distributes[0].element_distributes[index].sub_element_distributes.length === 0) {
      p = distributes[0].element_distributes[index].price;
      q = distributes[0].element_distributes[index].quantity_in_stock;
      setCurrentPrice(p ? p : currentPrice);
      setCurrentQuantityInStock(q);
    }
  }
  function handleSelectSubdistribute(index, price) {
    setSelectedSubdistribute(index);
    let p;
    let q;
    if (selectedDistributes !== -1) {
      if (
        distributes[0].element_distributes[selectedDistributes]
          .sub_element_distributes.length > 0
      ) {
        p =
          distributes[0].element_distributes[selectedDistributes]
            .sub_element_distributes[index].price;
        q =
          distributes[0].element_distributes[selectedDistributes]
            .sub_element_distributes[index].quantity_in_stock;
      } else {
        p = min_price;
        q = quantity_in_stock_with_distribute;
      }
      setCurrentPrice(p ? p : currentPrice);
      setCurrentQuantityInStock(q);
    }
  }
  const textAreaRef = useRef(null);
  function copyVoucherCode(code) {
    navigator.clipboard.writeText(code);
    textAreaRef.current.select();
    document.execCommand('copy');
    dispatch(appActions.changePopup(c.AUTOHIDE_POPUP, "???? l??u m?? gi???m gi??"));
  }
  function togglePopup() {
    setCustomClass(customClass ? "" : "center");
  }
  function copySharedLink() {
    const link = `${window.location.origin}/san-pham/${id}?cowc=${profile.id}`
   navigator.clipboard.writeText(link);
    togglePopup();
   dispatch(appActions.changePopup(c.AUTOHIDE_POPUP, "Copy Link th??nh c??ng"));
  }
  return (
    <div>
      <div className="breadcrumbs">
        <h4>
          <span onClick={() => { window.location.href = "/"; }} >
            Trang ch??? /{" "}
          </span>
          <span onClick={() => { window.location.href = "/danh-sach-san-pham"; }} >
            S???n ph???m /{" "}
          </span>
          {name}
        </h4>
      </div>
      <div className="main-info row">
        <div className="product-images">
          <button className="like-btn" onClick={handleToggleWishList}>
            {props.isLiked ? (
              <i className="fas fa-heart"></i>
            ) : (
              <i className="far fa-heart"></i>
            )}
          </button>
     
          <Slider ref={sliderRef} {...settings}>
            {currentImages.map((v, i) => (
              <div className="image" key={i}>
                <div className="img-container">
                  <img
                    src={v.image_url}
                    alt="product"
                    style={{
                      background: `url(${c.DEFAULT_PRODUCT_IMG})`,
                      backgroundSize: "contain",
                    }}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="product-order-info">
          <div className="name">{name}</div>
          <div className={`sku ${sku == null || sku.length == 0 ? "hide" : ""}`} style = {{margin : "10px 0"}}>
            <span>M?? SKU: {sku}</span>

          </div>

          <div className="price-wraper">
            {currentPrice == null ? (
              min_price === max_price ? (
                <div className="price" style={{ color: appTheme.color_main_1 }}>
                  ???
                  {formatPriceOrContact(
                    discount_percent == null
                      ? min_price
                      : min_price - min_price * discount_percent * 0.01
                  )}
                </div>
              ) : (
                <div className="price" style={{ color: appTheme.color_main_1 }}>
                  ???
                  {formatPriceOrContact(
                    discount_percent == null
                      ? min_price
                      : min_price - min_price * discount_percent * 0.01
                  )}{" "}
                  - ???
                  {formatPriceOrContact(
                    discount_percent == null
                      ? max_price
                      : max_price - max_price * discount_percent * 0.01
                  )}
                </div>
              )
            ) : (
              <div className="price" style={{ color: appTheme.color_main_1 }}>
                ???
                {formatPriceOrContact(
                  discount_percent == null
                    ? currentPrice
                    : currentPrice - currentPrice * discount_percent * 0.01
                )}
              </div>
            )}
            {product_discount && (
              <div>
                {currentPrice == null ? (
                  min_price === max_price ? (
                    <div className="row">
                      <div className="past-price">
                        ???
                        {formatPrice(
                          currentPrice == null ? min_price : currentPrice
                        )}
                      </div>
                      <div className="discount">-{discount_percent}%</div>
                    </div>
                  ) : (
                    <div className="row">
                      <div className="past-price">
                        ???
                        {formatPrice(
                          currentPrice == null ? min_price : currentPrice
                        )}{" "}
                        - ???
                        {formatPrice(
                          currentPrice == null ? max_price : currentPrice
                        )}
                      </div>
                      <div className="discount">-{discount_percent}%</div>
                    </div>
                  )
                ) : (
                  <div className="row">
                    <div className="past-price">
                      ???
                      {formatPrice(
                        currentPrice == null ? min_price : currentPrice
                      )}
                    </div>
                    <div className="discount">-{discount_percent}%</div>
                  </div>
                )}
              </div>
            )}
            {badges.status_collaborator === 1 ? (
              <div>
                {currentPrice == null ? (
                  min_price === max_price || percent_collaborator === 0 ? (
                    <div
                      className="price"
                      style={{
                        fontSize: 18,
                        paddingTop: 6,
                        color: "rgb(156 41 169)",
                      }}
                    >
                      Hoa h???ng: ???
                      {formatPrice(
                        (discount == 0  ? min_price : discount)  *
                        (percent_collaborator * 0.01) 
                      )}
                    </div>
                  ) : (
                    <div
                      className="price"
                      style={{
                        fontSize: 18,
                        paddingTop: 6,
                        color: "rgb(156 41 169)",
                      }}
                    >
                      Hoa h???ng: ???
                      {formatPrice(
                        discount_percent == null
                          ? min_price *
                          (percent_collaborator * 0.01) *
                          (1 - discount_percent * 0.01)
                          : min_price *
                          (1 - discount_percent * 0.01) *
                          (percent_collaborator * 0.01)
                      )}{" "}
                      - ???
                      {formatPrice(
                        discount_percent == null
                          ? max_price * percent_collaborator * 0.01
                          : max_price *
                          (1 - discount_percent * 0.01) *
                          (percent_collaborator * 0.01)
                      )}
                    </div>
                  )
                ) : (
                  <div
                    className="price"
                    style={{
                      fontSize: 18,
                      paddingTop: 6,
                      color: "rgb(156 41 169)",
                    }}
                  >
                    Hoa h???ng: ???
                    {formatPrice(
                      discount_percent == null
                        ? currentPrice *
                        (percent_collaborator * 0.01) *
                        (1 - discount_percent * 0.01)
                        : currentPrice *
                        (1 - discount_percent * 0.01) *
                        (percent_collaborator * 0.01)
                    )}
                  </div>
                )}
              </div>
            ) : (
              ""
            )}

            {currentQuantityInStock < 0 || currentQuantityInStock == null ? (
              <div className="remain">C??n h??ng</div>
            ) : (
              <div className="remain">
                {`C??n l???i ${currentQuantityInStock > 0
                  ? currentQuantityInStock
                  : 0
                  } s???n ph???m`}
              </div>
            )}
          </div>
          <div className="distributes-list">
            {distributes.map((d, i) => (
              <div className="distribute" key={i}>
                <div className="distribute-name">{d.name}</div>
                <div className="distribute-values">
                  {d.element_distributes.map((v, j) => (
                    <button
                      style={
                        selectedDistributes === j
                          ? {
                            backgroundColor: appTheme.color_main_1,
                            color: "white",
                          }
                          : {}
                      }
                      onClick={() =>
                        handleSelectDistribute(j, v.price ?? min_price)
                      }
                      key={j}
                    >
                      {v.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            {distributes[0] && distributes[0].sub_element_distribute_name && (
              <div className="distribute">
                <div className="distribute-name">
                  {distributes[0].sub_element_distribute_name}
                </div>
                <div className="distribute-values">
                  {distributes[0].element_distributes[0].sub_element_distributes.map(
                    (v, i) => (
                      <button
                        style={
                          selectedSubDistribute === i
                            ? {
                              backgroundColor: appTheme.color_main_1,
                              color: "white",
                            }
                            : {}
                        }
                        onClick={() => handleSelectSubdistribute(i)}
                        key={i}
                      >
                        {v.name}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="cart-action">
            S??? l?????ng <br />
            <div className="row">
              <button onClick={decreaseNumber}>-</button>
              <input type="number" value={selectedNumber} onChange={() => { }} />
              <button onClick={increaseNumber}>+</button>
            </div>
            <div className="actions">
              <div style={{ display: "none" }}>
                <FacebookShareButton
                  ref={myShareBtn}
                  url={`${window.location.origin}/san-pham/${id}?cowc=${profile.id}`}
                  quote={content_for_collaborator}
                >
                  <FacebookIcon size={40} round />
                </FacebookShareButton>
              </div>
              {currentQuantityInStock === null || currentQuantityInStock < 0 || (currentQuantityInStock !== 0 && selectedNumber <= currentQuantityInStock) ? (
                <button
                  id="addcart-btn"
                  onClick={handleAddCart}
                  style={{ background: appTheme.color_main_1 }}>
                  Th??m v??o gi??? h??ng
                </button>
              ) : (
                <button
                  id="addcart-btn"
                  style={{
                    marginTop: "0em",
                    background: "#757575"
                  }}
                >{currentQuantityInStock === 0 ? "H???t h??ng" : "V?????t qu?? s??? l?????ng trong kho"}</button>
              )}
              {badges.status_collaborator === 1 && (
                <div className="collaborator-action">
                  <div className="share">
                    <label>????ng b??i: </label>
                    <button onClick={hanldeShare}>
                      <i className="fab fa-facebook-f"></i>
                    </button>
                  </div>
                  <button onClick={togglePopup} id="link-btn">
                    Link chia s???
                  </button>
                </div>
              )}
              {productState.error_distribute !== "" ? (
                <p
                  className="text-center"
                  style={{
                    color: "red",
                    marginTop: 10,
                  }}
                >
                  Ch??a ch???n: {productState.error_distribute}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
          {productVouchers.length > 0 && (
            <div className="product-voucher">
              M?? gi???m gi?? <br />
              <div className="column">
                {productVouchers.map((v) => (
                  <div className="voucher-card" key={v.id}>
                    <div className="voucher-image">
                      <div className="image">
                        <div className="img-container">
                          <img src={v.image_url ? v.image_url : "/img/default_product.jpg"} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="voucher-info">
                      <h3>
                        Gi???m
                        {v.discount_type === 1
                          ? ` ${v.value_discount}%`
                          : formatPrice(v.value_discount)}
                      </h3>
                      <h4>????n t???i thi???u ???{formatPrice(v.value_limit_total)}</h4>
                      <div>HSD: {v.end_time.slice(0, 10)}</div>
                    </div>
                    <button
                      onClick={() => copyVoucherCode(v.code)}
                      style={{ background: appTheme.color_main_1 }}>
                      L??u
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={`modal ${customClass}`} onClick={modalClick}>
        <div className="link-popup">
          <div>
            {`${window.location.origin}/san-pham/${id}?cowc=${profile.id}`}
          </div>
          <button onClick={copySharedLink}>Copy</button>
        </div>
      </div>
    </div>
  );
}
