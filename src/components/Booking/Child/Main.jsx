import { useEffect, useRef } from "react";
export default function Main(props) {

  return (
    <div style = {{background : "rgb(238, 238, 238)"}}>
    <div className="booking-single-screen">
    <div className="body relative ">
      <div className="new-top-navigator pointer">
        <span className="text-center">Đặt lịch giữ chỗ</span>
      </div>
      <div className="info-booking">
        <div className="info-booking__block info-booking__block--done">
          <div className="first-item" />
          <div className="block" id="service-time">
            <div className="title h2 flex space-between">
              <div>1. Chọn salon</div>
            </div>
            <div className="block__salon">
              <div className="block__box">
                <div className="box__title " aria-hidden="true">
                  <div className="title__iconLeft">
                    <img
                      src="/static/media/homeOutline.76facfa5.svg"
                      alt=""
                    />
                  </div>
                  <div className="box__text">
                    <div className="value">
                      19 Trần Hưng Đạo, P. Bạch Đằng, Tp Hạ Long, Quảng
                      Ninh
                    </div>
                  </div>
                  <div className="title__iconRight">
                    <img
                      src="/static/media/caretRight.b0d191b3.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="box__error hide">
                  Anh vui lòng chọn salon trước để xem lịch còn trống ạ!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info-booking__block info-booking__block--active">
          <div className="next-item" />
          <div className="block" id="service-time">
            <div className="title h2 flex space-between">
              <div>2. Chọn dịch vụ</div>
            </div>
            <div className="bot-message ">
              <img
                src="/static/media/bot_avatar_1654_1.26e1da41.jpg"
                alt=""
              />
              <div className="content">
                <p>
                  Anh chọn trước dịch vụ bên dưới để chúng em chuẩn bị
                  chu đáo ạ
                </p>
              </div>
            </div>
            <div className="block" id="block-time-serivce">
              <div className="block__box">
                <div className="box__title " aria-hidden="true">
                  <div className="title__iconLeft">
                    <img
                      src="/static/media/service.3a62b101.svg"
                      alt=""
                    />
                    <span className="title__require">
                      <span className="require__box" />
                      <span className="require__icon" />
                    </span>
                  </div>
                  <div className="box__text">
                    <div>Xem tất cả dịch vụ hấp dẫn</div>
                  </div>
                  <div className="title__iconRight">
                    <img
                      src="/static/media/caretRight.b0d191b3.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="box__error hide">
                  Mời anh chọn dịch vụ để chọn giờ cắt
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info-booking__block ">
          <div className="next-item" />
          <div className="block" id="service-time">
            <div className="title h2 flex space-between">
              <div>3. Chọn ngày, giờ &amp; stylist</div>
            </div>
            <div
              className="block__box"
              role="presentation"
              id="datebookId"
            >
              <div className="box__title">
                <div className="title__iconLeft">
                  <img
                    src="/static/media/calendar-2.3c77d299.svg"
                    alt=""
                  />
                </div>
                <div
                  className="name-day flex space-between item-center"
                  style={{ flex: "1 1 0%" }}
                >
                  <div>
                    <span>Hôm nay, </span>
                    <span className="text-dayName">T4 </span>(10/11)
                  </div>
                  <div>
                    <p className="day-normal">Ngày thường</p>
                  </div>
                </div>
                <div className="title__iconRight">
                  <img
                    src="/static/media/caretRight.b0d191b3.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="box__dropdown " />
            </div>
          </div>
          <div className="new-extension mg-top-20" />
        </div>
      </div>
      <div className="new-affix-v2">
        <div className="flex space-between text-center content-step time-line ">
          <div
            className="right button-next pointer btn-inactive"
            role="presentation"
          >
            <span>Hoàn tất</span>
          </div>
          <span className="sub-description">
            Cắt xong trả tiền, huỷ lịch không sao
          </span>
        </div>
      </div>
      <div
        className="mask-affix"
        role="presentation"
        style={{ display: "none" }}
      />
      <div />
    </div>
  </div>
  </div>

  )
}