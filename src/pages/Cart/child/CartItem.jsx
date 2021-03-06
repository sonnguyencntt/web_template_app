import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../../../helper";
import { constants as c } from "../../../constants";
export default function CartItem(props) {
  let {
    price,
    product_discount,
    quantity_in_stock,
    quantity_in_stock_with_distribute,
    images,
    id,
    name,
    distributes,
  } = props.product;
  quantity_in_stock =
    quantity_in_stock >= 0
      ? quantity_in_stock
      : quantity_in_stock === -1
      ? 999999
      : 0;
  let pastPrice = price;
  let avt = "/img/default_product.jpg";
  if (product_discount) price = product_discount.discount_price;
  if (images.length) avt = images[0].image_url;
  let [quantity, setQuantity] = useState(props.quantity);
  const oldDistribute = props.distributes_selected;
  const appTheme = useSelector((state) => state.app.appTheme);
  const cartInfo = useSelector((state) => state.cart.cartInfo);
  const [newDistribute, setNewDistribute] = useState(
    props.distributes_selected && props.distributes_selected[0]
      ? props.distributes_selected[0].value
      : ""
  );
  const [newSubDistribute, setNewSubDistribute] = useState(
    props.distributes_selected && props.distributes_selected[0]
      ? props.distributes_selected[0].sub_element_distributes
      : ""
  );
  function handleChangeQuantity(e) {
    let q;
    if (e.target.value === "") q = 0;
    else {
      q = parseInt(e.target.value);
      q = q <= quantity_in_stock ? q : quantity_in_stock;
      props.changeQuantity({
        line_item_id: props.line_item_id,
        product_id: id,
        quantity: q,
        distributes: props.distributes_selected,
      });
    }
    setQuantity(q);
  }

  function getMaxQuantity(ele, sub) {

    if (distributes == null || distributes.length == 0) {
      return quantity_in_stock_with_distribute;
    }

    if (sub != null) {
      
      for (const ele of distributes[0].element_distributes) {
        for (const su of ele.sub_element_distributes) {
          if (su.name == sub) {
            return su.quantity_in_stock;
          }
        }
      }
    }
    for (const ele of distributes[0].element_distributes) {
      if (ele.name == ele) {
        return ele.quantity_in_stock;
      }
    }
  }
  
  const dispatch = useDispatch();

  function handleIncrease() {
    var maxQuantity = getMaxQuantity();
    if (props.distributes_selected !== null) {
      maxQuantity = getMaxQuantity(
        props.distributes_selected[0]?.name,
        props.distributes_selected[0]?.sub_element_distributes
      );
    }
    
    if (maxQuantity == -1 || (quantity + 1) <= maxQuantity) {
      props.changeQuantity({
        line_item_id: props.line_item_id,
        product_id: id,
        quantity: quantity + 1,
        distributes: props.distributes_selected,
        code_voucher: "",
      });
      setQuantity(quantity + 1);
    } else {
      dispatch({
        type: c.CHANGE_POPUP,
        popupType: c.AUTOHIDE_POPUP,
        messageInfo: "???? v?????t qu?? s??? l?????ng trong kho!",
      });
    }
  }
  function handleDecrease() {
    
    if (quantity - 1 >= 0) {
      props.changeQuantity({
        product_id: id,
        code_voucher: "",
        quantity: quantity - 1,
        line_item_id: props.line_item_id,
        distributes: props.distributes_selected,
      });
      setQuantity(quantity - 1);
    }
  }
  function handleRemoveItem() {
    props.changeQuantity({
      quantity: 0,
      product_id: id,
      code_voucher: "",
      line_item_id: props.line_item_id,
      distributes: props.distributes_selected,
    });
    setQuantity(0);
  }
  function handleChangeDistribute() {
    if (
      oldDistribute.value === newDistribute &&
      oldDistribute.sub_element_distributes === newSubDistribute
    )
      return;
    props.onShowDistribute();
    props.changeQuantity({
      line_item_id: props.line_item_id,
      product_id: id,
      quantity,
      distributes: [
        {
          name: props.distributes_selected[0].name,
          value: newDistribute,
          sub_element_distributes: newSubDistribute,
        },
      ],
    });
  }
  return cartInfo.line_items.length === 0 ? (
    <div className="_1fP0AH _2tKeYb">
      <div className="_1g-4gk" />
      <div className="h9wsC4">Gi??? h??ng c???a b???n c??n tr???ng!</div>
      <a className="_35zxc9" href="/">
        <button
          className="shopee-button-solid"
          style={{ background: appTheme.color_main_1 }}
        >
          <span className="_3SCpTT">MUA NGAY</span>
        </button>
      </a>
    </div>
  ) : quantity === 0 ? (
    <div style={{ backgroundColor: "transparent" }}> </div>
  ) : (
    <div className="cart-item">
      <div className="row">
        <div className="image">
          <div className="img-container">
            <img
              src={avt}
              alt="product1"
              style={{
                background: "url(../img/default_product.jpg)",
                backgroundSize: "contain",
              }}
            />
          </div>
        </div>
        <div className="item-info">
          <a href={"/san-pham/" + id} className="name">
            {name}
          </a>
          <div className="price">
            <div
              className="current-price"
              style={{ color: appTheme.color_main_1 }}
            >
              {props.item_price > 0
                ? `??? ${formatPrice(props.item_price)}`
                : "Li??n h???"}
            </div>
            {pastPrice !== price && (
              <div className="past-price">
                ??? {formatPrice(props.before_discount_price)}
              </div>
            )}
          </div>
          <div className="row">
            <button onClick={handleDecrease}>-</button>
            <input
              type="number"
              value={quantity}
              min={0}
              max={quantity_in_stock}
              onChange={handleChangeQuantity}
            />
            <button onClick={handleIncrease}>+</button>
          </div>
          <button className="delete-btn" onClick={handleRemoveItem}>
            X??a
          </button>
        </div>
      </div>
      {props.distributes_selected && distributes && distributes.length > 0 && (
        <div className="distributes">
          {props.distributes_selected.map((v, i) => (
            <div style={{ background: appTheme.color_main_1 }} key={i}>
              {`${v.name}: ${v.value}`}
            </div>
          ))}
          {props.distributes_selected &&
            props.distributes_selected.length > 0 &&
            props.distributes_selected[0] &&
            props.distributes_selected[0].sub_element_distributes && (
              <div style={{ background: appTheme.color_main_1 }}>
                {`${distributes[0].sub_element_distribute_name}: 
                  ${props.distributes_selected[0].sub_element_distributes}`}
              </div>
            )}
          {props.distributes_selected.length > 0 && (
            <button
              style={{ color: appTheme.color_main_1 }}
              onClick={props.onShowDistribute}
            >
              Thay ?????i
            </button>
          )}
          {props.distributes_selected.length > 0 && (
            <div
              className={`distribute-select ${
                props.isShowDistribute ? "active" : ""
              }`}
            >
              <label>{distributes[0].name}</label>
              <div className="row">
                {distributes[0].element_distributes.map((v, i) => (
                  <button
                    key={i}
                    onClick={() => setNewDistribute(v.name)}
                    style={
                      v.name === newDistribute
                        ? {
                            backgroundColor: appTheme.color_main_1,
                            color: "white",
                          }
                        : {}
                    }
                  >
                    {v.name}
                  </button>
                ))}
              </div>
              {distributes[0].sub_element_distribute_name && (
                <>
                  <label>{distributes[0].sub_element_distribute_name}</label>
                  <div className="row">
                    {distributes[0].element_distributes[0].sub_element_distributes.map(
                      (v, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            console.log(v.name);
                            setNewSubDistribute(v.name);
                          }}
                          style={
                            v.name === newSubDistribute
                              ? {
                                  backgroundColor: appTheme.color_main_1,
                                  color: "white",
                                }
                              : {}
                          }
                        >
                          {v.name}
                        </button>
                      )
                    )}
                  </div>
                </>
              )}
              <div
                style={{
                  marginTop: "1em",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <button onClick={props.onShowDistribute}>H???y</button>
                <button
                  onClick={handleChangeDistribute}
                  style={{
                    background: appTheme.color_main_1,
                    color: "white",
                    opacity: "0.8",
                  }}
                >
                  X??c nh???n
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
