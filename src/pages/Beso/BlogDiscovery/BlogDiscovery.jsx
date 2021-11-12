import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { constants as c } from "../../../constants";
import { comboActions } from "../../../actions/comboActions";
import PageLoading from "../../../components/PageLoading";
import Header from "../../../components/Header";

function BlogDiscovery() {

  const dispatch = useDispatch();
  const status = useSelector(state => state.combo.status);
  const list = useSelector(state => state.combo.list);
  useEffect(() => {
    document.title = "Combo giảm giá";
    if (status === c.LOADING)
      dispatch(comboActions.getAllCombos());
  })
  return (
    <React.Fragment>
      <Header />
      <div className="background-discover">
            <div className="discover-container">
              <div className="discover__header relative">
       
                <div className="title">
                  CÙNG 30SHINE KHÁM PHÁ <span>XU HƯỚNG TÓC HOT NHẤT</span>
                </div>
              </div>
              <div className="discover__content" id="discover__content">
                <div className="discover__box" />
                <div
                  className="ant-row"
                  style={{ marginLeft: "-8px", marginRight: "-8px" }}
                >
                  <div
                    className="ant-col cs-column"
                    style={{ paddingLeft: "8px", paddingRight: "8px" }}
                  >
                    <div className="content__item">
                      <a href="/discovers/14">
                        <div className="item__img fade-in">
                          <img
                            src="https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_side_part_vuot_ru_6dce22fce7.jpg"
                            alt=""
                            className="image-hair"
                            loading="auto"
                            style={{ minHeight: "315.1px" }}
                          />
                        </div>
                      </a>
                      <div className="tag-hair">
                        <a href="/discovers/14">
                          <p className="tag-hair__text">
                            {" "}
                            Phá cách với kiểu tóc nam Side Part vuốt rủ và học
                            cách vuốt trong tích tắc{" "}
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href="http://www.facebook.com/sharer/sharer.php?u=null&t=Phá cách với kiểu tóc nam Side Part vuốt rủ và học cách vuốt trong tích tắc">
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content__item">
                      <a href="/discovers/15">
                        <div className="item__img fade-in">
                          <img
                            src="https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_giu_form_toc_bcf8d15204.jpg"
                            alt=""
                            className="image-hair"
                            loading="auto"
                            style={{ minHeight: "305.525px" }}
                          />
                        </div>
                      </a>
                      <div className="tag-hair">
                        <a href="/discovers/15">
                          <p className="tag-hair__text">
                            {" "}
                            4 Mẹo Giữ Form Tóc Khi Đội Mũ Bảo Hiểm
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href="http://www.facebook.com/sharer/sharer.php?u=https://30shine.com/discovers/15&t=4 Mẹo Giữ Form Tóc Khi Đội Mũ Bảo Hiểm ">
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content__item">
                      <a href="/discovers/16">
                        <div className="item__img fade-in">
                          <img
                            src="https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_2_mai_han_quac_c1439400a2.jpg"
                            alt=""
                            className="image-hair"
                            loading="auto"
                            style={{ minHeight: "331.138px" }}
                          />
                        </div>
                      </a>
                      <div className="tag-hair">
                        <a href="/discovers/16">
                          <p className="tag-hair__text">
                            {" "}
                            Tóc Hai Mái Hàn Quốc Hợp Gương Mặt Nào?
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href="http://www.facebook.com/sharer/sharer.php?u=https://30shine.com/discovers/16&t=Tóc Hai Mái Hàn Quốc Hợp Gương Mặt Nào? ">
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content__item">
                      <a href="/discovers/17">
                        <div className="item__img fade-in">
                          <img
                            src="https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_goi_dau_bao_lau_441d2e8c5e.jpg"
                            alt=""
                            className="image-hair"
                            loading="auto"
                            style={{ minHeight: "331.138px" }}
                          />
                        </div>
                      </a>
                      <div className="tag-hair">
                        <a href="/discovers/17">
                          <p className="tag-hair__text">
                            {" "}
                            Bao Lâu Gội Đầu Một Lần Để Giữ Kiểu Tóc Đẹp?{" "}
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href="http://www.facebook.com/sharer/sharer.php?u=https://30shine.com/discovers/17&t=Bao Lâu Gội Đầu Một Lần Để Giữ Kiểu Tóc Đẹp?">
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content__item">
                      <div
                        style={{
                          width: "100%",
                          minHeight: "331.138px",
                          backgroundColor: "lightgrey",
                          opacity: "0.2",
                        }}
                      />
                      <div className="tag-hair">
                        <a href="/discovers/18">
                          <p className="tag-hair__text">
                            {" "}
                            Mẹo Vuốt Tóc Mohican Tại Nhà
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href="http://www.facebook.com/sharer/sharer.php?u=https://30shine.com/discovers/18&t=Mẹo Vuốt Tóc Mohican Tại Nhà ">
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content__item">
                      <div
                        style={{
                          width: "100%",
                          minHeight: "331.138px",
                          backgroundColor: "lightgrey",
                          opacity: "0.2",
                        }}
                      />
                      <div className="tag-hair">
                        <a href="/discovers/19">
                          <p className="tag-hair__text">
                            {" "}
                            Đàn Ông Bao Lâu Nên Cắt Tóc Một Lần?{" "}
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href="http://www.facebook.com/sharer/sharer.php?u=https://30shine.com/discovers/19&t=Đàn Ông Bao Lâu Nên Cắt Tóc Một Lần?">
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content__item">
                      <div
                        style={{
                          width: "100%",
                          minHeight: "331.138px",
                          backgroundColor: "lightgrey",
                          opacity: "0.2",
                        }}
                      />
                      <div className="tag-hair">
                        <a href="3-ly-do-khong-the-bo-lo-toc-uon-con-sau">
                          <p className="tag-hair__text">
                            {" "}
                            3 Lý Do Không Thể Bỏ Lỡ Tóc Uốn Con Sâu{" "}
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href="http://www.facebook.com/sharer/sharer.php?u=3-ly-do-khong-the-bo-lo-toc-uon-con-sau&t=3 Lý Do Không Thể Bỏ Lỡ Tóc Uốn Con Sâu">
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content__item">
                      <div
                        style={{
                          width: "100%",
                          minHeight: "331.138px",
                          backgroundColor: "lightgrey",
                          opacity: "0.2",
                        }}
                      />
                      <div className="tag-hair">
                        <a href="/discovers/21">
                          <p className="tag-hair__text">
                            {" "}
                            Top Màu Tóc Đẹp Không Cần Tẩy Cho Nam
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href="http://www.facebook.com/sharer/sharer.php?u=https://30shine.com/discovers/21&t=Top Màu Tóc Đẹp Không Cần Tẩy Cho Nam ">
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="ant-col cs-column"
                    style={{ paddingLeft: "8px", paddingRight: "8px" }}
                  >
                    <div className="content__item">
                      <a href="/discovers/22">
                        <div className="item__img fade-in">
                          <img
                            src="https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_mau_nhuom_hoc_sinh_58a481c6ef.jpg"
                            alt=""
                            className="image-hair"
                            loading="auto"
                            style={{ minHeight: "337.195px" }}
                          />
                        </div>
                      </a>
                      <div className="tag-hair">
                        <a href="/discovers/22">
                          <p className="tag-hair__text">
                            {" "}
                            Top 3 Màu Nhuộm Tóc Lý Tưởng Cho Học Sinh
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href="http://www.facebook.com/sharer/sharer.php?u=https://30shine.com/discovers/22&t=Top 3 Màu Nhuộm Tóc Lý Tưởng Cho Học Sinh ">
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content__item">
                      <a href="/discovers/23">
                        <div className="item__img fade-in">
                          <img
                            src="https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_layer_moi_highlight_bach_kim_1_02b1485ec0.png"
                            alt=""
                            className="image-hair"
                            loading="auto"
                            style={{ minHeight: "221.2px" }}
                          />
                        </div>
                      </a>
                      <div className="tag-hair">
                        <a href="/discovers/23">
                          <p className="tag-hair__text">
                            {" "}
                            Mẹo Để Tóc Hết Chỉa Và Bết Dính
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href="http://www.facebook.com/sharer/sharer.php?u=https://30shine.com/discovers/23&t=Mẹo Để Tóc Hết Chỉa Và Bết Dính ">
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content__item">
                      <a href="/discovers/24">
                        <div className="item__img fade-in">
                          <img
                            src="https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_tranh_xa_mohican_f11d41cca7.jpg"
                            alt=""
                            className="image-hair"
                            loading="auto"
                            style={{ minHeight: "333.133px" }}
                          />
                        </div>
                      </a>
                      <div className="tag-hair">
                        <a href="/discovers/24">
                          <p className="tag-hair__text">
                            {" "}
                            Những Ai Nên Tránh Xa Kiểu Tóc Mohican???{" "}
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href="http://www.facebook.com/sharer/sharer.php?u=https://30shine.com/discovers/24&t=Những Ai Nên Tránh Xa Kiểu Tóc Mohican???">
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content__item">
                      <a href="/discovers/25">
                        <div className="item__img fade-in">
                          <img
                            src="https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_tay_toc_mau_khoi_c913fc27d3.jpg"
                            alt=""
                            className="image-hair"
                            loading="auto"
                            style={{ minHeight: "333.133px" }}
                          />
                        </div>
                      </a>
                      <div className="tag-hair">
                        <a href="/discovers/25">
                          <p className="tag-hair__text">
                            {" "}
                            Nhuộm Tóc Màu Khói Phải Tẩy Tóc Mấy Lần?
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href="http://www.facebook.com/sharer/sharer.php?u=https://30shine.com/discovers/25&t=Nhuộm Tóc Màu Khói Phải Tẩy Tóc Mấy Lần? ">
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content__item">
                      <div
                        style={{
                          width: "100%",
                          minHeight: "331.138px",
                          backgroundColor: "lightgrey",
                          opacity: "0.2",
                        }}
                      />
                      <div className="tag-hair">
                        <a href="/discovers/26">
                          <p className="tag-hair__text">
                            {" "}
                            Tuyệt Chiêu Duỗi Tóc Thẳng Không Cần Dùng Nhiệt
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href="http://www.facebook.com/sharer/sharer.php?u=https://30shine.com/discovers/26&t=Tuyệt Chiêu Duỗi Tóc Thẳng Không Cần Dùng Nhiệt ">
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content__item">
                      <div
                        style={{
                          width: "100%",
                          minHeight: "331.138px",
                          backgroundColor: "lightgrey",
                          opacity: "0.2",
                        }}
                      />
                      <div className="tag-hair">
                        <a href="/discovers/27">
                          <p className="tag-hair__text">
                            {" "}
                            Lý Do Khiến Nâu Khói Là Màu Nhuộm Hot Nhất 2020{" "}
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href="http://www.facebook.com/sharer/sharer.php?u=https://30shine.com/discovers/27&t=Lý Do Khiến Nâu Khói Là Màu Nhuộm Hot Nhất 2020">
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content__item">
                      <div
                        style={{
                          width: "100%",
                          minHeight: "129.623px",
                          backgroundColor: "lightgrey",
                          opacity: "0.2",
                        }}
                      />
                      <div className="tag-hair">
                        <a href="https://30shine.com/quang-hung-30shine-di-tim-trend-toc-nam-gioi-viet-kieu-nhuom-moi">
                          <p className="tag-hair__text">
                            {" "}
                            Hành Trình Đi Tìm Trend Tóc Cho Nam Giới Việt
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href="http://www.facebook.com/sharer/sharer.php?u=https://30shine.com/quang-hung-30shine-di-tim-trend-toc-nam-gioi-viet-kieu-nhuom-moi&t=Hành Trình Đi Tìm Trend Tóc Cho Nam Giới Việt ">
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content__item">
                      <div
                        style={{
                          width: "100%",
                          minHeight: "332.132px",
                          backgroundColor: "lightgrey",
                          opacity: "0.2",
                        }}
                      />
                      <div className="tag-hair">
                        <a href="https://30shine.com/side-part-vuot-ru-mau-nhuom-khoi-trang-hot-trend-2020-30shine">
                          <p className="tag-hair__text">
                            {" "}
                            Anh Chàng "Chưa Nhuộm Tóc Bao Giờ" Lột Xác Với Màu
                            Nhuộm Xám Khói
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href='http://www.facebook.com/sharer/sharer.php?u=https://30shine.com/side-part-vuot-ru-mau-nhuom-khoi-trang-hot-trend-2020-30shine&t=Anh Chàng "Chưa Nhuộm Tóc Bao Giờ" Lột Xác Với Màu Nhuộm Xám Khói '>
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="ant-col cs-column"
                    style={{ paddingLeft: "8px", paddingRight: "8px" }}
                  >
                    <div className="content__item">
                      <a href="/discovers/30">
                        <div className="item__img fade-in">
                          <img
                            src="https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_middepart_2c13d2f78a.jpg"
                            alt=""
                            className="image-hair"
                            loading="auto"
                            style={{ minHeight: "331.138px" }}
                          />
                        </div>
                      </a>
                      <div className="tag-hair">
                        <a href="/discovers/30">
                          <p className="tag-hair__text">
                            {" "}
                            Biến Hoá Đa Phong Cách Với Kiểu Tóc Middle Part
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href="http://www.facebook.com/sharer/sharer.php?u=https://30shine.com/discovers/30&t=Biến Hoá Đa Phong Cách Với Kiểu Tóc Middle Part ">
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content__item">
                      <a href="/discovers/31">
                        <div className="item__img fade-in">
                          <img
                            src="https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_dreadlock_1a67466bbc.jpg"
                            alt=""
                            className="image-hair"
                            loading="auto"
                            style={{ minHeight: "331.138px" }}
                          />
                        </div>
                      </a>
                      <div className="tag-hair">
                        <a href="/discovers/31">
                          <p className="tag-hair__text">
                            {" "}
                            Tự Làm Tóc Dreadlock Tại Nhà{" "}
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href="http://www.facebook.com/sharer/sharer.php?u=https://30shine.com/discovers/31&t=Tự Làm Tóc Dreadlock Tại Nhà">
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content__item">
                      <a href="https://30shine.com/30shine-concept-moi-dinh-nhu-starbucks">
                        <div className="item__img fade-in">
                          <img
                            src="https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_30shine_concept_moi_0b5b51c4be.jpg"
                            alt=""
                            className="image-hair"
                            loading="auto"
                            style={{ minHeight: "297.312px" }}
                          />
                        </div>
                      </a>
                      <div className="tag-hair">
                        <a href="https://30shine.com/30shine-concept-moi-dinh-nhu-starbucks">
                          <p className="tag-hair__text">
                            {" "}
                            30Shine Concept Mới - Đỉnh như Starbucks
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href="http://www.facebook.com/sharer/sharer.php?u=https://30shine.com/30shine-concept-moi-dinh-nhu-starbucks&t=30Shine Concept Mới - Đỉnh như Starbucks ">
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content__item">
                      <a href="https://30shine.com/rapper-lk-giam-khao-king-of-rap-cat-toc-tai-30shine">
                        <div className="item__img fade-in">
                          <img
                            src="https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_LK_c0b535ea76.jpg"
                            alt=""
                            className="image-hair"
                            loading="auto"
                            style={{ minHeight: "314.205px" }}
                          />
                        </div>
                      </a>
                      <div className="tag-hair">
                        <a href="https://30shine.com/rapper-lk-giam-khao-king-of-rap-cat-toc-tai-30shine">
                          <p className="tag-hair__text">
                            {" "}
                            Kiểu Tóc Khiến LK Thoát Ly "Chiếc Mũ Huyền Thoại"{" "}
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href='http://www.facebook.com/sharer/sharer.php?u=https://30shine.com/rapper-lk-giam-khao-king-of-rap-cat-toc-tai-30shine&t=Kiểu Tóc Khiến LK Thoát Ly "Chiếc Mũ Huyền Thoại"'>
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content__item">
                      <div
                        style={{
                          width: "100%",
                          minHeight: "332.132px",
                          backgroundColor: "lightgrey",
                          opacity: "0.2",
                        }}
                      />
                      <div className="tag-hair">
                        <a href="https://30shine.com/side-part-vuot-uot-wet-hair-hot-trend-2020-30shine">
                          <p className="tag-hair__text">
                            {" "}
                            Chán Side Part Cổ Điển Thì Phải Làm Gì?{" "}
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href="http://www.facebook.com/sharer/sharer.php?u=https://30shine.com/side-part-vuot-uot-wet-hair-hot-trend-2020-30shine&t=Chán Side Part Cổ Điển Thì Phải Làm Gì?">
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content__item">
                      <div
                        style={{
                          width: "100%",
                          minHeight: "315.1px",
                          backgroundColor: "lightgrey",
                          opacity: "0.2",
                        }}
                      />
                      <div className="tag-hair">
                        <a href="https://30shine.com/layer-moi-kieu-toc-danh-cho-mat-beo-dep-nhat-2020-30shine">
                          <p className="tag-hair__text">
                            {" "}
                            Mặt Tròn Có Để Được Kiểu Tóc Layer Không?
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href="http://www.facebook.com/sharer/sharer.php?u=https://30shine.com/layer-moi-kieu-toc-danh-cho-mat-beo-dep-nhat-2020-30shine&t=Mặt Tròn Có Để Được Kiểu Tóc Layer Không? ">
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content__item">
                      <div
                        style={{
                          width: "100%",
                          minHeight: "336.17px",
                          backgroundColor: "lightgrey",
                          opacity: "0.2",
                        }}
                      />
                      <div className="tag-hair">
                        <a href="https://30shine.com/sport-nam-tinh-ket-hop-cat-fade-30shine">
                          <p className="tag-hair__text">
                            {" "}
                            Theo Chân Khách Ruột Của 30Shine Đi Cắt Kiểu Tóc
                            Sport
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href="http://www.facebook.com/sharer/sharer.php?u=https://30shine.com/sport-nam-tinh-ket-hop-cat-fade-30shine&t=Theo Chân Khách Ruột Của 30Shine Đi Cắt Kiểu Tóc Sport ">
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="ant-col cs-column"
                    style={{ paddingLeft: "8px", paddingRight: "8px" }}
                  >
                    <div className="content__item">
                      <a href="https://30shine.com/kieu-toc-sport-cho-dan-ong-chuan-men">
                        <div className="item__img fade-in">
                          <img
                            src="https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_Artboard_33_198a8efad1.png"
                            alt=""
                            className="image-hair"
                            loading="auto"
                            style={{ minHeight: "331.138px" }}
                          />
                        </div>
                      </a>
                      <div className="tag-hair">
                        <a href="https://30shine.com/kieu-toc-sport-cho-dan-ong-chuan-men">
                          <p className="tag-hair__text">
                            {" "}
                            Sport - Kiểu Tóc Dành Cho Đàn Ông Chuẩn Men
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href="http://www.facebook.com/sharer/sharer.php?u=https://30shine.com/kieu-toc-sport-cho-dan-ong-chuan-men&t=Sport - Kiểu Tóc Dành Cho Đàn Ông Chuẩn Men ">
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content__item">
                      <a href="https://30shine.com/side-part-mau-nhuom-nau-khoi-2020-30shine">
                        <div className="item__img fade-in">
                          <img
                            src="https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_png_2adc7d7b23.png"
                            alt=""
                            className="image-hair"
                            loading="auto"
                            style={{ minHeight: "299.729px" }}
                          />
                        </div>
                      </a>
                      <div className="tag-hair">
                        <a href="https://30shine.com/side-part-mau-nhuom-nau-khoi-2020-30shine">
                          <p className="tag-hair__text">
                            {" "}
                            Thử Đổi Kiểu Tóc Cho Cậu Bạn Hot Boy Trường Y
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href="http://www.facebook.com/sharer/sharer.php?u=https://30shine.com/side-part-mau-nhuom-nau-khoi-2020-30shine&t=Thử Đổi Kiểu Tóc Cho Cậu Bạn Hot Boy Trường Y ">
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content__item">
                      <a href="https://30shine.com/side-part-vuot-ru-mau-nhuom-violet-hot-trend-2020-30shine">
                        <div className="item__img fade-in">
                          <img
                            src="https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_Viet_Hung_c21e6ce922.png"
                            alt=""
                            className="image-hair"
                            loading="auto"
                            style={{ minHeight: "332.132px" }}
                          />
                        </div>
                      </a>
                      <div className="tag-hair">
                        <a href="https://30shine.com/side-part-vuot-ru-mau-nhuom-violet-hot-trend-2020-30shine">
                          <p className="tag-hair__text">
                            {" "}
                            Side Part Violet Cho Dân Văn Phòng
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href="http://www.facebook.com/sharer/sharer.php?u=https://30shine.com/side-part-vuot-ru-mau-nhuom-violet-hot-trend-2020-30shine&t=Side Part Violet Cho Dân Văn Phòng ">
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content__item">
                      <a href="https://30shine.com/sport-mau-nhuom-xanh-blue-nang-dong-hot-trend-2020-30shine">
                        <div className="item__img fade-in">
                          <img
                            src="https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_Hung_be_ee6df4b65a.png"
                            alt=""
                            className="image-hair"
                            loading="auto"
                            style={{ minHeight: "333.133px" }}
                          />
                        </div>
                      </a>
                      <div className="tag-hair">
                        <a href="https://30shine.com/sport-mau-nhuom-xanh-blue-nang-dong-hot-trend-2020-30shine">
                          <p className="tag-hair__text">
                            {" "}
                            Lột Xác Giám Đốc Thiết Kế Của 30Shine
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href="http://www.facebook.com/sharer/sharer.php?u=https://30shine.com/sport-mau-nhuom-xanh-blue-nang-dong-hot-trend-2020-30shine&t=Lột Xác Giám Đốc Thiết Kế Của 30Shine ">
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content__item">
                      <div
                        style={{
                          width: "100%",
                          minHeight: "331.138px",
                          backgroundColor: "lightgrey",
                          opacity: "0.2",
                        }}
                      />
                      <div className="tag-hair">
                        <a href="https://30shine.com/kieu-toc-side-part-hot-trend">
                          <p className="tag-hair__text">
                            {" "}
                            Side Part - Kiểu tóc lịch lãm "cứ để là đẹp"{" "}
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href='http://www.facebook.com/sharer/sharer.php?u=https://30shine.com/kieu-toc-side-part-hot-trend&t=Side Part - Kiểu tóc lịch lãm "cứ để là đẹp"'>
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content__item">
                      <div
                        style={{
                          width: "100%",
                          minHeight: "312.429px",
                          backgroundColor: "lightgrey",
                          opacity: "0.2",
                        }}
                      />
                      <div className="tag-hair">
                        <a href="https://30shine.com/Le-Bao-Binh-Cat-Toc-Tai-30Shine">
                          <p className="tag-hair__text">
                            {" "}
                            Kiểu Tóc "Cộp Mác" Ca Sĩ Lê Bảo Bình
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href='http://www.facebook.com/sharer/sharer.php?u=https://30shine.com/Le-Bao-Binh-Cat-Toc-Tai-30Shine&t=Kiểu Tóc "Cộp Mác" Ca Sĩ Lê Bảo Bình '>
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content__item">
                      <div
                        style={{
                          width: "100%",
                          minHeight: "333.133px",
                          backgroundColor: "lightgrey",
                          opacity: "0.2",
                        }}
                      />
                      <div className="tag-hair">
                        <a href="https://30shine.com/short-quiff-nhuom-nau-khoi-hot-trend-2020-30shine">
                          <p className="tag-hair__text">
                            {" "}
                            Đồng Nghiệp Phải Trầm Trồ Trước Màu Tóc Mới Của Anh
                            Bạn Phó Giám Đốc
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href="http://www.facebook.com/sharer/sharer.php?u=https://30shine.com/short-quiff-nhuom-nau-khoi-hot-trend-2020-30shine&t=Đồng Nghiệp Phải Trầm Trồ Trước Màu Tóc Mới Của Anh Bạn Phó Giám Đốc ">
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="ant-col cs-column"
                    style={{ paddingLeft: "8px", paddingRight: "8px" }}
                  >
                    <div className="content__item">
                      <a href="https://30shine.com/Ca-si-Hoang-Dung-Cat-Toc-Tai-30Shine">
                        <div className="item__img fade-in">
                          <img
                            src="https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_Hoang_Dung_cd7a187836.png"
                            alt=""
                            className="image-hair"
                            loading="auto"
                            style={{ minHeight: "334.139px" }}
                          />
                        </div>
                      </a>
                      <div className="tag-hair">
                        <a href="https://30shine.com/Ca-si-Hoang-Dung-Cat-Toc-Tai-30Shine">
                          <p className="tag-hair__text">
                            {" "}
                            Ca sĩ Hoàng Dũng - Ngoại hình với tôi rất quan
                            trọng, chỉ xếp sau tài năng
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href="http://www.facebook.com/sharer/sharer.php?u=https://30shine.com/Ca-si-Hoang-Dung-Cat-Toc-Tai-30Shine&t=Ca sĩ Hoàng Dũng - Ngoại hình với tôi rất quan trọng, chỉ xếp sau tài năng ">
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content__item">
                      <a href="https://30shine.com/Side-part-kieu-toc-phu-hop-voi-cac-ban-mat-vuong-30shine">
                        <div className="item__img fade-in">
                          <img
                            src="https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_toc_dep_cho_mat_vuong_e52a7ad544.jpg"
                            alt=""
                            className="image-hair"
                            loading="auto"
                            style={{ minHeight: "333.133px" }}
                          />
                        </div>
                      </a>
                      <div className="tag-hair">
                        <a href="https://30shine.com/Side-part-kieu-toc-phu-hop-voi-cac-ban-mat-vuong-30shine">
                          <p className="tag-hair__text">
                            {" "}
                            Kiểu Tóc Đẹp Cho Gương Mặt Vuông
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href="http://www.facebook.com/sharer/sharer.php?u=https://30shine.com/Side-part-kieu-toc-phu-hop-voi-cac-ban-mat-vuong-30shine&t=Kiểu Tóc Đẹp Cho Gương Mặt Vuông ">
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content__item">
                      <a href="https://30shine.com/toc-bo-liem-de-toc-gi-dep-nhat-side-swept-binz-slickback-30shine">
                        <div className="item__img fade-in">
                          <img
                            src="https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_toc_bo_liem_b22ab7c20c.jpg"
                            alt=""
                            className="image-hair"
                            loading="auto"
                            style={{ minHeight: "316px" }}
                          />
                        </div>
                      </a>
                      <div className="tag-hair">
                        <a href="https://30shine.com/toc-bo-liem-de-toc-gi-dep-nhat-side-swept-binz-slickback-30shine">
                          <p className="tag-hair__text">
                            {" "}
                            Tóc Bò Liếm Vẫn Đẹp Trai Như Binz
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href="http://www.facebook.com/sharer/sharer.php?u=https://30shine.com/toc-bo-liem-de-toc-gi-dep-nhat-side-swept-binz-slickback-30shine&t=Tóc Bò Liếm Vẫn Đẹp Trai Như Binz ">
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content__item">
                      <a href="https://30shine.com/sport-son-tung-mtp-mau-xanh-khoi-2020-30shine">
                        <div className="item__img fade-in">
                          <img
                            src="https://30shine-store-images.s3.ap-southeast-1.amazonaws.com/uploads/small_sport_nhuom_khoi_xanh_65374b8d6e.jpg"
                            alt=""
                            className="image-hair"
                            loading="auto"
                            style={{ minHeight: "335.152px" }}
                          />
                        </div>
                      </a>
                      <div className="tag-hair">
                        <a href="https://30shine.com/sport-son-tung-mtp-mau-xanh-khoi-2020-30shine">
                          <p className="tag-hair__text">
                            {" "}
                            Sport Nhuộm Khói Xanh Như Sơn Tùng MTP
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href="http://www.facebook.com/sharer/sharer.php?u=https://30shine.com/sport-son-tung-mtp-mau-xanh-khoi-2020-30shine&t=Sport Nhuộm Khói Xanh Như Sơn Tùng MTP ">
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content__item">
                      <div
                        style={{
                          width: "100%",
                          minHeight: "316.905px",
                          backgroundColor: "lightgrey",
                          opacity: "0.2",
                        }}
                      />
                      <div className="tag-hair">
                        <a href="https://30shine.com/short-quiff-kieu-toc-dep-cho-mat-beo-tron-2020-30shine">
                          <p className="tag-hair__text">
                            {" "}
                            Mặt Béo Và Tròn Để Tóc Gì Cho Đẹp?{" "}
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href="http://www.facebook.com/sharer/sharer.php?u=https://30shine.com/short-quiff-kieu-toc-dep-cho-mat-beo-tron-2020-30shine&t=Mặt Béo Và Tròn Để Tóc Gì Cho Đẹp?">
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content__item">
                      <div
                        style={{
                          width: "100%",
                          minHeight: "304.683px",
                          backgroundColor: "lightgrey",
                          opacity: "0.2",
                        }}
                      />
                      <div className="tag-hair">
                        <a href="https://30shine.com/top-4-kieu-toc-dep-trai-cho-be">
                          <p className="tag-hair__text">
                            {" "}
                            Top 4 Kiểu tóc cưng muốn xỉu cho các bé trai{" "}
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href="http://www.facebook.com/sharer/sharer.php?u=https://30shine.com/top-4-kieu-toc-dep-trai-cho-be&t=Top 4 Kiểu tóc cưng muốn xỉu cho các bé trai">
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content__item">
                      <div
                        style={{
                          width: "100%",
                          minHeight: "291.821px",
                          backgroundColor: "lightgrey",
                          opacity: "0.2",
                        }}
                      />
                      <div className="tag-hair">
                        <a href="https://30shine.com/dien-vien-thanh-son-lot-xac-voi-kieu-toc-sport">
                          <p className="tag-hair__text">
                            {" "}
                            Diễn viên Thanh Sơn Và Câu Chuyện Chinh Phục Vai
                            Diễn "Chẳng Ai Mong Muốn"{" "}
                          </p>
                        </a>
                        <div className="tag-hair__icons">
                          <div className="icon">
                            <img
                              src="/static/media/heart.05622337.svg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <a href='http://www.facebook.com/sharer/sharer.php?u=https://30shine.com/dien-vien-thanh-son-lot-xac-voi-kieu-toc-sport&t=Diễn viên Thanh Sơn Và Câu Chuyện Chinh Phục Vai Diễn "Chẳng Ai Mong Muốn"'>
                              <img
                                src="/static/media/share.64b8ac3b.svg"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </React.Fragment>
  )
}
export  { BlogDiscovery }