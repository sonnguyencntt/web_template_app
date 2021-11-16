import { formatPrice, validateEmail, validateNumberPhone } from "../../../helper";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { appActions } from "../../../actions/appActions";
import { constants } from "../../../constants";
import Select from "../../../components/Select";
import { hideParentElement } from "../../../helper";
import { appActions as a } from "../../../actions/appActions";
import { Link } from "react-router-dom";
export default function OrderInfo(props) {
  const dispatch = useDispatch();
  const {
    used_voucher,
    total_after_discount,
    total_before_discount,
    product_discount_amount,
    bonus_points_amount_can_use,
    balance_collaborator_can_use,
    voucher_discount_amount,
    combo_discount_amount,
  } = props.cartInfo;
  const defaultAddressArr = props.userAddress.filter((v) => v.is_default);
  const appTheme = useSelector((state) => state.app.appTheme);
  const profile = useSelector((state) => state.user.profile);
  const tokenInfo = useSelector((state) => state.user.tokenInfo);
  const badges = useSelector((state) => state.user.badges);
  let defaultAddress = {};
  if (defaultAddressArr.length > 0) defaultAddress = defaultAddressArr[0];
  const [shipmentInfo, setShipmentInfo] = useState({ name: "", fee: 0 });
  const [paymentMethod, setPaymentMethod] = useState({ name: "" });
  const [note, setNote] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address_detail, setAddressDetail] = useState("");

  const [currentProvince, setCurrentProvince] = useState(null);
  const [currentDistrict, setCurrentDistrict] = useState(null);
  const [currentWard, setCurrentWard] = useState(null);
  const provinces = useSelector((state) => state.app.addressData.provinces);
  const districts = useSelector((state) => state.app.addressData.districts);
  const wards = useSelector((state) => state.app.addressData.wards);

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPhoneNumer, setErrorPhoneNumer] = useState("");

  function handleProvinceSelect(v, e) {
    hideParentElement(e);
    setCurrentProvince(v);
    setCurrentDistrict(null);
    setCurrentWard(null);
    dispatch(a.getDistrictsList(v.id));
  }
  function handleDistrictSelect(v, e) {
    hideParentElement(e);
    setCurrentDistrict(v);
    setCurrentWard(null);
    dispatch(a.getWardsList(v.id));
  }
  function handleWardSelect(v, e) {
    hideParentElement(e);
    setCurrentWard(v);
    console.log(v);
  }

  function showDetail(e) {
    let currentElement = e.currentTarget;
    let nextElement = currentElement.nextElementSibling;
    let parentElement = currentElement.parentElement;
    if (nextElement.style.maxHeight) {
      nextElement.style.maxHeight = null;
      parentElement.style.zIndex = 2;
    } else {
      nextElement.style.maxHeight = 230 + "px";
      nextElement.style.overflowY = "scroll";
      parentElement.style.zIndex = 10;
    }
  }

  function handleChangeAddressDetail(e) {
    setAddressDetail(e.target.value);
  }

  function handleChangeNote(e) {
    setNote(e.target.value);
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePhone(e) {
    setPhone(e.target.value);
  }

  function handleShipmentFeeSelect(info) {
    setShipmentInfo(info);
  }
  function handlePaymentSelect(info) {
    setPaymentMethod(info);
  }
  function handleOrder() {
    const orderInfo = {
      is_use_points: props.is_use_points,
      is_use_balance_collaborator: props.is_use_balance_collaborator,
      customer_note: note,
      code_voucher: props.code_voucher,
      payment_method_id: paymentMethod.id,
      total_shipping_fee: shipmentInfo.fee,
      shipper_type: shipmentInfo.ship_type,
      customer_address_id: defaultAddress.id,
      partner_shipper_id: shipmentInfo.partner_id,
      collaborator_by_customer_id:
        localStorage.getItem("cowc_id") ?? profile.id,
    };
    if (
      orderInfo.payment_method_id === undefined ||
      (props.shipmentFee &&
        props.shipmentFee.length > 0 &&
        orderInfo.shipper_type === undefined)
    ) {
      dispatch(
        appActions.changePopup(
          constants.AUTOHIDE_POPUP,
          "Vui lòng cung cấp đầy đủ thông tin !"
        )
      );
      return;
    }
    console.log(orderInfo);
    props.handleOrder(orderInfo);
  }
  function handleOrderNonLogin() {
    setErrorEmail("");
    setErrorPhoneNumer("");

    if (email != "") {
      if (!validateEmail(email)) {
        setErrorEmail("Email không hợp lệ");
        return;
      }
    }

    if (phone != "") {
      if (!validateNumberPhone(phone)) {
        setErrorPhoneNumer("Số điện thoại không hợp lệ");
        return;
      }
    }

    if (
      !name ||
      !phone ||
      !address_detail ||
      !currentProvince ||
      !currentDistrict ||
      !currentWard
    ) {
      dispatch(
        appActions.changePopup(
          constants.AUTOHIDE_POPUP,
          "Vui lòng cung cấp đầy đủ thông tin !"
        )
      );
      return;
    }

    const orderInfo = {
      customer_note: note,
      payment_method_id: 0,
      province: currentProvince.id,
      district: currentDistrict.id,
      wards: currentWard.id,
      name: name,
      email: email,
      phone: phone,
      address_detail: address_detail,
      collaborator_by_customer_id:
        localStorage.getItem("cowc_id") ?? profile.id,
    };
    // if (
    //   orderInfo.payment_method_id === undefined ||
    //   (props.shipmentFee &&
    //     props.shipmentFee.length > 0 &&
    //     orderInfo.shipper_type === undefined)
    // ) {
    //   dispatch(
    //     appActions.changePopup(
    //       constants.AUTOHIDE_POPUP,
    //       "Vui lòng cung cấp đầy đủ thông tin !"
    //     )
    //   );
    //   return;
    // }
    console.log(orderInfo);
    props.handleOrder(orderInfo);
  }
  return !tokenInfo ? (
    <div className="order-info">
      <div className="voucher-input">
        <h5>Thông tin</h5>
        <div className="row">
          <input
            type="text"
            placeholder="Họ và tên (bắt buộc)"
            value={name}
            onChange={handleChangeName}
          />
        </div>

        <div className="row">
          <input
            type="text"
            placeholder="Số điện thoại (bắt buộc)"
            value={phone}
            onChange={handleChangePhone}
          />
        </div>
        {errorPhoneNumer!= "" && (
          <span class="error_input" id="errorname">
            {errorPhoneNumer}
          </span>
        )}

        <div className="row">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
        {errorEmail != "" && (
          <span class="error_input" id="errorname">
            {errorEmail}
          </span>
        )}
      </div>

      <div className="voucher-input">
        <h5>Giao tới</h5>
        <br />
        <div style={{ width: "100%" }}>
          <Select
            placeholder={
              currentProvince ? currentProvince.title : "Tỉnh/Thành phố"
            }
            handleSelect={handleProvinceSelect}
            showDetail={showDetail}
            autosize={true}
            values={provinces.map((v) => {
              return {
                title: v.name,
                id: v.id,
              };
            })}
          />
        </div>
        <br />{" "}
        <div style={{ width: "100%", width: "max-content" }}>
          <Select
            placeholder={currentDistrict ? currentDistrict.title : "Quận/Huyện"}
            handleSelect={handleDistrictSelect}
            showDetail={showDetail}
            values={districts.map((v) => {
              return {
                title: v.name,
                id: v.id,
              };
            })}
          />
        </div>
        <br />
        <div style={{ width: "100%" }}>
          <Select
            placeholder={currentWard ? currentWard.title : "Phường/Xã"}
            handleSelect={handleWardSelect}
            showDetail={showDetail}
            values={wards.map((v) => {
              return {
                title: v.name,
                id: v.id,
              };
            })}
          />
        </div>
        <div className="row">
          <input
            type="text"
            placeholder="Địa chỉ chi tiết"
            value={address_detail}
            onChange={handleChangeAddressDetail}
          />
        </div>
      </div>
      <div className="voucher-input">
        <h5>Ghi chú</h5>
        <div className="row">
          <input
            type="text"
            placeholder="Nhập ghi chú"
            value={note}
            onChange={handleChangeNote}
          />
        </div>
      </div>

      <div className="payment-method">
        <div
          className="total price-info row"
          style={{
            justifyContent: "space-between",
          }}
        >
          <div>Tổng cộng</div>
          <span style={{ color: appTheme.color_main_1 }}>
            ₫{formatPrice(total_after_discount)}
          </span>
        </div>

        <button
          id="order-btn"
          style={{ background: appTheme.color_main_1 }}
          onClick={handleOrderNonLogin}
        >
          Đặt hàng
        </button>

        {/* <button
          id="order-btn"
          style={{ background: appTheme.color_main_1 }}
          onClick={() => {
            if (!tokenInfo) {
              dispatch(appActions.changePopup(constants.PHONE_POPUP));
              return;
            }
          }}
        >
          Đặt hàng
        </button> */}
      </div>
    </div>
  ) : (
    <div className="order-info">
      <div>
        <div className="personal-info">
          <h5>Giao tới</h5>
          {defaultAddressArr.length > 0 ? (
            <>
              <button
                onClick={() => props.handleShowPopup("address")}
                className="show-modal-btn"
              >
                Thay đổi
              </button>
              <div className="row">
                <label>{defaultAddress.name}</label>
                <label style={{ marginLeft: "2em" }}>
                  {defaultAddress.phone}
                </label>
              </div>
              <label>
                {`${defaultAddress.address_detail}, ${defaultAddress.wards_name}, ${defaultAddress.district_name}, ${defaultAddress.province_name}`}
              </label>
            </>
          ) : (

            <Link to="dia-chi" to={{pathname:"dia-chi",fromCart: true }}>   <span
                style={{ color: "blue", cursor: "pointer", fontSize:14 }}
            >

                Thêm địa chỉ
              </span></Link>
           
          )}
        </div>
        <div className="voucher-input" style={{ position: "relative" }}>
          <h5>Mã giảm giá</h5>
          <button
            className="show-modal-btn"
            onClick={() => props.handleShowPopup("voucher")}
          >
            Danh sách voucher
          </button>
          <div className="row">
            <input
              disabled={used_voucher !== null}
              type="text"
              placeholder="Nhập voucher"
              value={props.code_voucher}
              onChange={props.handleVoucherInput}
            />
            {used_voucher ? (
              <button
                style={{ background: appTheme.color_main_1 }}
                onClick={() => props.applyDiscount("code_voucher", "")}
              >
                Hủy
              </button>
            ) : (
              <button
                style={{ background: appTheme.color_main_1 }}
                onClick={() =>
                  props.applyDiscount("code_voucher", props.code_voucher)
                }
              >
                Áp dụng
              </button>
            )}
          </div>
        </div>
        <div className="voucher-input">
          <h5>Ghi chú</h5>
          <div className="row">
            <input
              type="text"
              placeholder="Nhập ghi chú"
              value={note}
              onChange={handleChangeNote}
            />
          </div>
        </div>
      </div>
      <div>
        {props.paymentMethod && (
          <div className="payment-method">
            <h5>Phương thức thanh toán</h5>
            {props.paymentMethod.map((v, i) => (
              <div className="row" key={i}>
                <input
                  type="checkbox"
                  name="delivery"
                  id={v.name}
                  checked={paymentMethod.name === v.name}
                  onChange={() => handlePaymentSelect(v)}
                />
                <label htmlFor={v.name}>{v.name}</label>
              </div>
            ))}
          </div>
        )}
        {props.shipmentFee && (
          <div className="delivery-method">
            <h5>Phí vận chuyển</h5>
            {props.shipmentFee.map((v, i) => (
              <div className="row" key={i}>
                <div className="row">
                  <input
                    type="checkbox"
                    name="delivery"
                    id={v.name}
                    checked={shipmentInfo.name === v.name}
                    onChange={() => handleShipmentFeeSelect(v)}
                  />
                  <label htmlFor={v.name}>{v.name}</label>
                </div>
                <span>₫ {formatPrice(v.fee)}</span>
              </div>
            ))}
          </div>
        )}
        <div className="price-info">
          <div className="row">
            <div>Tạm tính</div>
            <span>₫ {formatPrice(total_before_discount)}</span>
          </div>
          <div className="row">
            <div>Giảm giá</div>
            <span>₫ {formatPrice(product_discount_amount)}</span>
          </div>
          <div className="row">
            <div>Voucher</div>
            <span>₫ {formatPrice(voucher_discount_amount)}</span>
          </div>
          <div className="row">
            <div>Combo</div>
            <span>-₫ {formatPrice(combo_discount_amount)}</span>
          </div>
          <div className="point-use">
            <div className="row">
              <div className="row">
                <label>
                  Dùng <span>{formatPrice(bonus_points_amount_can_use)}</span>{" "}
                  xu [<span>-₫ {formatPrice(bonus_points_amount_can_use)}</span>
                  ]
                </label>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={() => props.handleChangeCheckBox("bonus")}
                  checked={props.is_use_points}
                />
                <span
                  style={{
                    background: props.is_use_points
                      ? appTheme.color_main_1
                      : "#ccc",
                  }}
                  className="slider round"
                ></span>
              </label>
            </div>
            {badges.status_collaborator == 1 &&
              balance_collaborator_can_use > 0 && (
                <div className="row">
                  <div className="row">
                    <label>
                      Dùng số dư CTV [
                      <span>
                        -₫ {formatPrice(balance_collaborator_can_use)}
                      </span>
                      ]
                    </label>
                  </div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      onChange={() =>
                        props.handleChangeCheckBox("collaborator")
                      }
                      checked={props.is_use_balance_collaborator}
                    />
                    <span
                      style={{
                        background: props.is_use_balance_collaborator
                          ? appTheme.color_main_1
                          : "#ccc",
                      }}
                      className="slider round"
                    ></span>
                  </label>
                </div>
              )}
          </div>
          <div className="total row">
            <div>Tổng cộng</div>
            <span style={{ color: appTheme.color_main_1 }}>
              ₫{formatPrice(total_after_discount + shipmentInfo.fee)}
            </span>
          </div>
          <button
            id="order-btn"
            style={{ background: appTheme.color_main_1 }}
            onClick={handleOrder}
          >
            Đặt hàng
          </button>
        </div>
      </div>
    </div>
  );
}
