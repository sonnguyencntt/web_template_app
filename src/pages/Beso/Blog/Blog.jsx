import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { constants as c } from "../../../constants";
import { comboActions } from "../../../actions/comboActions";
import PageLoading from "../../../components/PageLoading";
import Header from "../../../components/Header";

function Blog() {

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
      <div className="bg-white article-page">
            <div className="container">
              <div className="article-page__title">Hành trình tỏa sáng</div>
              <div className="article-page__subtitle">
                Quá trình tìm kiếm và hoàn thiện bản thân là bất tận. Mỗi kiểu
                tóc mới đại diện một tinh thần mới mà người đàn ông luôn hướng
                đến để tìm thấy phiên bản tốt nhất của chính mình. Hãy cùng lắng
                nghe những câu chuyện hành trình lột xác dưới đây để tìm thấy
                niềm cảm hứng đổi mới cho bạn.
              </div>
              <div
                className="ant-row"
                style={{ marginLeft: "-15px", marginRight: "-15px" }}
              >
                <div
                  className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-12"
                  style={{ paddingLeft: "15px", paddingRight: "15px" }}
                >
                  <a href="https://www.youtube.com/watch?v=m23tHreFffA">
                    <div className="article ">
                      <div className="article__media">
                        <img
                          src="https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-lot-xac-thanh-hot-boy.jpg"
                          alt=""
                        />
                      </div>
                      <div className="article__content">
                        <div className="article__title">
                          Bạn sinh viên IT lột xác thành hot boy vạn người mê
                        </div>
                        <div className="article__body">
                          Ai nghĩ sinh viên IT là người xuề xoà, không quá quan
                          tâm đến ngoại hình thì xem ngay màn lột xác mái tóc,
                          thay đổi ngoại hình cực ấn tượng này nhé
                        </div>
                        <div className="article__tag">
                          <ul>
                            <li>425K views</li>
                          </ul>
                          <div className="article__icon">
                            <img
                              src="https://storage.30shine.com/ResourceWeb/data/images/home/icon-youtube.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-12"
                  style={{ paddingLeft: "15px", paddingRight: "15px" }}
                >
                  <a href="https://www.youtube.com/watch?v=S2bVJbLCUQk">
                    <div className="article ">
                      <div className="article__media">
                        <img
                          src="https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-toc-mullet.jpg"
                          alt=""
                        />
                      </div>
                      <div className="article__content">
                        <div className="article__title">
                          Phúc lột xác mái tóc để suốt bao năm giúp ngoại hình
                          mới cực cuốn hút
                        </div>
                        <div className="article__body">
                          Thay đổi kiểu tóc đã để suốt bao năm là một quyết định
                          vô cùng khó khăn nhưng Phúc đã vượt qua nỗi sợ đó và
                          tạo một kiểu tóc mới hoàn toàn
                        </div>
                        <div className="article__tag">
                          <ul>
                            <li>470K views</li>
                          </ul>
                          <div className="article__icon">
                            <img
                              src="https://storage.30shine.com/ResourceWeb/data/images/home/icon-youtube.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-6"
                  style={{ paddingLeft: "15px", paddingRight: "15px" }}
                >
                  <a href="https://www.youtube.com/watch?v=UYYE-c6LLXo">
                    <div className="article article-child">
                      <div className="article__media">
                        <img
                          src="https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-dien-vien-chung-super.jpg"
                          alt=""
                        />
                      </div>
                      <div className="article__content">
                        <div className="article__title">
                          Diễn viên Chung Super lột xác để chuẩn bị bộ phim sắp
                          ra mắt
                        </div>
                        <div className="article__body">
                          Vai diễn mới đòi hỏi Chung Super một tạo hình mới. Với
                          kiểu tóc mới tạo kiểu này, chắc chắn anh Chung sẽ có
                          vai diễn rất thành công
                        </div>
                        <div className="article__tag">
                          <ul>
                            <li>33K views</li>
                          </ul>
                          <div className="article__icon">
                            <img
                              src="https://storage.30shine.com/ResourceWeb/data/images/home/icon-youtube.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-6"
                  style={{ paddingLeft: "15px", paddingRight: "15px" }}
                >
                  <a href="https://www.youtube.com/watch?v=gpWkrf7FzDA">
                    <div className="article article-child">
                      <div className="article__media">
                        <img
                          src="https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-rapper-rtee-lot-xac.jpg"
                          alt=""
                        />
                      </div>
                      <div className="article__content">
                        <div className="article__title">
                          Kiểu tóc mới cho tác phẩm solo đầu tay của rapper RTEE
                        </div>
                        <div className="article__body">
                          Rapper trẻ RTEE sắp ra mắt tác phẩm solo đầu tay. Anh
                          cần một hình ảnh mới, một kiểu tóc mới để đánh dấu
                          bước chuyển mình này.
                        </div>
                        <div className="article__tag">
                          <ul>
                            <li>133K views</li>
                          </ul>
                          <div className="article__icon">
                            <img
                              src="https://storage.30shine.com/ResourceWeb/data/images/home/icon-youtube.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-6"
                  style={{ paddingLeft: "15px", paddingRight: "15px" }}
                >
                  <a href="https://www.youtube.com/watch?v=BUFSmCsOXeE">
                    <div className="article article-child">
                      <div className="article__media">
                        <img
                          src="https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-toc-faux-hawk.jpg"
                          alt=""
                        />
                      </div>
                      <div className="article__content">
                        <div className="article__title">
                          Top những kiểu tóc kinh điển của Tronie Ngô, cứ để là
                          năng động và khoẻ khoắn
                        </div>
                        <div className="article__body">
                          Ngoại hình khỏe khoắn và năng động của Tronie Ngô
                          365Daband càng được tôn lên nhờ kiểu tóc Faux Hawk
                          này.
                        </div>
                        <div className="article__tag">
                          <ul>
                            <li>80K views</li>
                          </ul>
                          <div className="article__icon">
                            <img
                              src="https://storage.30shine.com/ResourceWeb/data/images/home/icon-youtube.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-6"
                  style={{ paddingLeft: "15px", paddingRight: "15px" }}
                >
                  <a href="https://www.youtube.com/watch?v=bagH7DpydZ0">
                    <div className="article article-child">
                      <div className="article__media">
                        <img
                          src="https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-dien-vien-hoang-phi-kha.jpg"
                          alt=""
                        />
                      </div>
                      <div className="article__content">
                        <div className="article__title">
                          Diễn viên Hoàng Phi Kha lột xác cho vai diễn mới
                        </div>
                        <div className="article__body">
                          Vẻ nam thần điển trai của Hoàng Phi Kha được thể hiện
                          siêu nét qua kiểu tóc này. Chắc chắn anh Kha sẽ có
                          những vai diễn ấn tượng và ghi dấu trong lòng khán giả
                        </div>
                        <div className="article__tag">
                          <ul>
                            <li>64K views</li>
                          </ul>
                          <div className="article__icon">
                            <img
                              src="https://storage.30shine.com/ResourceWeb/data/images/home/icon-youtube.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-6"
                  style={{ paddingLeft: "15px", paddingRight: "15px" }}
                >
                  <a href="/short-quiff-nhuom-nau-khoi-hot-trend-2020-30shine">
                    <div className="article article-child">
                      <div className="article__media">
                        <img
                          src="https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-thay-doi-ngoai-hinh.jpg"
                          alt=""
                        />
                      </div>
                      <div className="article__content">
                        <div className="article__title">
                          Thay đổi ngoại hình, chàng trai lạnh lùng, ít nói
                          khiến cô hoa khôi rung động
                        </div>
                        <div className="article__body">
                          Hiếu từng nghĩ đàn ông không cần quá quan tâm đến
                          ngoại hình cho đến khi thay đổi kiểu tóc mới, những cơ
                          hội, mối quan hệ chợt rộng mở.
                        </div>
                        <div className="article__tag">
                          <ul>
                            <li>5 phút đọc</li>
                            <li>Làm đẹp</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-6"
                  style={{ paddingLeft: "15px", paddingRight: "15px" }}
                >
                  <a href="https://www.youtube.com/watch?v=MccG8Gf6Oc4">
                    <div className="article article-child">
                      <div className="article__media">
                        <img
                          src="https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-nam-sinh-kien-truc-lot-xac.jpg"
                          alt=""
                        />
                      </div>
                      <div className="article__content">
                        <div className="article__title">
                          Can đảm thay đổi mái tóc 7 năm, nam sinh Kiến Trúc lột
                          xác kiểu tóc mới cực đẹp
                        </div>
                        <div className="article__body">
                          Anh bạn sinh viên Kiến Trúc đắn đo rất nhiều về việc
                          cắt bỏ mái tóc đã để 7 năm, gắn liền với nhiều kỉ
                          niệm. Và anh quyết định phải thay đổi.
                        </div>
                        <div className="article__tag">
                          <ul>
                            <li>84K views</li>
                          </ul>
                          <div className="article__icon">
                            <img
                              src="https://storage.30shine.com/ResourceWeb/data/images/home/icon-youtube.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-6"
                  style={{ paddingLeft: "15px", paddingRight: "15px" }}
                >
                  <a href="https://www.youtube.com/watch?v=jSMy1NDt2Og">
                    <div className="article article-child">
                      <div className="article__media">
                        <img
                          src="https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-mat-tron-de-dau-nam.jpg"
                          alt=""
                        />
                      </div>
                      <div className="article__content">
                        <div className="article__title">
                          Mặt tròn để kiểu tóc này như An Nguyễn thì siêu hợp và
                          tôn gương mặt
                        </div>
                        <div className="article__body">
                          Nhiều người nghĩ mặt tròn khó tạo kiểu nhưng bạn sẽ
                          phải nghĩ khác khi xem clip lột xác này của An Nguyễn
                          đấy
                        </div>
                        <div className="article__tag">
                          <ul>
                            <li>126K views</li>
                          </ul>
                          <div className="article__icon">
                            <img
                              src="https://storage.30shine.com/ResourceWeb/data/images/home/icon-youtube.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-6"
                  style={{ paddingLeft: "15px", paddingRight: "15px" }}
                >
                  <a href="https://www.youtube.com/watch?v=XBwFe2REmIw">
                    <div className="article article-child">
                      <div className="article__media">
                        <img
                          src="https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-mat-tron-nhu-mam-vi-de-sai-kieu-toc.jpg"
                          alt=""
                        />
                      </div>
                      <div className="article__content">
                        <div className="article__title">
                          Bạn sinh viên đại học QGHN đổi kiểu tóc cái tạo ngay
                          điểm nhấn mới cho gương mặt
                        </div>
                        <div className="article__body">
                          Nam sinh đại học QGHN đã có màn lột xác cực kì ấn
                          tượng với kiểu tóc mới tại 30Shine. Ai bảo mặt tròn
                          không tạo kiểu đẹp được thì nên xem video này ngay nhé
                        </div>
                        <div className="article__tag">
                          <ul>
                            <li>53K views</li>
                          </ul>
                          <div className="article__icon">
                            <img
                              src="https://storage.30shine.com/ResourceWeb/data/images/home/icon-youtube.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-12"
                  style={{ paddingLeft: "15px", paddingRight: "15px" }}
                >
                  <a href="https://www.youtube.com/watch?v=egROLFiv_2U&list=PLbplMzmYtClCBJro6DyptCoufDO2v6P3S&index=85">
                    <div className="article ">
                      <div className="article__media">
                        <img
                          src="https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-nam-sinh-dai-hoc-van-hoa.jpg"
                          alt=""
                        />
                      </div>
                      <div className="article__content">
                        <div className="article__title">
                          Khôi Nguyên tìm ngay được mảnh ghép còn thiếu kể từ
                          khi thay đổi kiểu tóc này
                        </div>
                        <div className="article__body">
                          “Từ trước đến nay, em chưa bao giờ quan tâm đến ngoại
                          hình cho đến khi gặp Kiều Anh” - Khôi Nguyên chia sẻ
                        </div>
                        <div className="article__tag">
                          <ul>
                            <li>328K views</li>
                          </ul>
                          <div className="article__icon">
                            <img
                              src="https://storage.30shine.com/ResourceWeb/data/images/home/icon-youtube.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-12"
                  style={{ paddingLeft: "15px", paddingRight: "15px" }}
                >
                  <a href="https://www.youtube.com/watch?v=7xnB6MgNMk0&list=PLbplMzmYtClCBJro6DyptCoufDO2v6P3S&index=84">
                    <div className="article ">
                      <div className="article__media">
                        <img
                          src="https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-lot-xac-tao-kieu-side-part.jpg"
                          alt=""
                        />
                      </div>
                      <div className="article__content">
                        <div className="article__title">
                          Đạt đã thay đổi kiểu tóc gì khiến cơ hội ngày càng
                          rộng mở hơn với bạn ấy?
                        </div>
                        <div className="article__body">
                          Vì công việc mới đòi hỏi giao tiếp với khách hàng
                          thường xuyên nên Đạt đã quyết định chọn kiểu tóc này.
                          Nó giúp Đạt gây được ấn tượng cực mạnh với đối tác
                        </div>
                        <div className="article__tag">
                          <ul>
                            <li>367K views</li>
                          </ul>
                          <div className="article__icon">
                            <img
                              src="https://storage.30shine.com/ResourceWeb/data/images/home/icon-youtube.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-6"
                  style={{ paddingLeft: "15px", paddingRight: "15px" }}
                >
                  <a href="https://www.youtube.com/watch?v=KMMOsLug8EM&list=PLbplMzmYtClCBJro6DyptCoufDO2v6P3S&index=83">
                    <div className="article article-child">
                      <div className="article__media">
                        <img
                          src="https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-tro-thanh-hot-boy-ru-bo-mai-toc-xu.jpg"
                          alt=""
                        />
                      </div>
                      <div className="article__content">
                        <div className="article__title">
                          Lột xác anh bạn nghiện học quên mình thành hotboy mà
                          các bạn nữ phải ao ước
                        </div>
                        <div className="article__body">
                          Quá chú tâm vào việc học nên Minh Quốc quên mất việc
                          phải chăm sóc bản thân. Vừa rồi cậu bạn đã đạt thành
                          tích cao trong kì tuyển sinh đại học nên quyết định
                          lột xác mái tóc cho dấu mốc quan trọng này.
                        </div>
                        <div className="article__tag">
                          <ul>
                            <li>1,4M views</li>
                          </ul>
                          <div className="article__icon">
                            <img
                              src="https://storage.30shine.com/ResourceWeb/data/images/home/icon-youtube.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-6"
                  style={{ paddingLeft: "15px", paddingRight: "15px" }}
                >
                  <a href="https://www.youtube.com/watch?v=UOC2YhchyVQ&list=PLbplMzmYtClCBJro6DyptCoufDO2v6P3S&index=82">
                    <div className="article article-child">
                      <div className="article__media">
                        <img
                          src="https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-hieu-xu.jpg"
                          alt=""
                        />
                      </div>
                      <div className="article__content">
                        <div className="article__title">
                          Hiếu Xù từ bỏ biệt danh sau màn lột xác cực kì ngoạn
                          mục này
                        </div>
                        <div className="article__body">
                          Hiếu đã biết mình phải làm gì kể từ khi gặp Kim Anh.
                          Việc đầu tiên là phải bỏ ngay hình ảnh Hiếu xù bằng
                          một kiểu tóc mới
                        </div>
                        <div className="article__tag">
                          <ul>
                            <li>191K views</li>
                          </ul>
                          <div className="article__icon">
                            <img
                              src="https://storage.30shine.com/ResourceWeb/data/images/home/icon-youtube.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-6"
                  style={{ paddingLeft: "15px", paddingRight: "15px" }}
                >
                  <a href="https://www.youtube.com/watch?v=0vbwMJtljrg&list=PLbplMzmYtClCBJro6DyptCoufDO2v6P3S&index=81">
                    <div className="article article-child">
                      <div className="article__media">
                        <img
                          src="https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-cau-sinh-vien-dep-trai-nhu-chu-re.jpg"
                          alt=""
                        />
                      </div>
                      <div className="article__content">
                        <div className="article__title">
                          Chuẩn bị đón thử thách mới, Ngọc Thọ lột xác với kiểu
                          tóc cực tự tin
                        </div>
                        <div className="article__body">
                          Để thuận lợi xin việc sau khi ra trường, Thọ cần chuẩn
                          bị cho mình một ngoại hình thật chỉn chu. Cậu sinh
                          viên năm cuối quyết định lột xác
                        </div>
                        <div className="article__tag">
                          <ul>
                            <li>172K views</li>
                          </ul>
                          <div className="article__icon">
                            <img
                              src="https://storage.30shine.com/ResourceWeb/data/images/home/icon-youtube.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-6"
                  style={{ paddingLeft: "15px", paddingRight: "15px" }}
                >
                  <a href="https://www.youtube.com/watch?v=pVkHFLPtaXM&list=PLbplMzmYtClCBJro6DyptCoufDO2v6P3S&index=80">
                    <div className="article article-child">
                      <div className="article__media">
                        <img
                          src="https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-sinh-vien-ngan-hang-lot-xac-voi-side-part.jpg"
                          alt=""
                        />
                      </div>
                      <div className="article__content">
                        <div className="article__title">
                          Quá thông minh khi lựa chọn kiểu tóc này để chuẩn bị
                          cho vị trí giao dịch viên
                        </div>
                        <div className="article__body">
                          Làm ngân hàng yêu cầu một ngoại hình lịch sự, tự tin
                          và hôm nay Phương Nam đã đến 30Shine
                        </div>
                        <div className="article__tag">
                          <ul>
                            <li>227K views</li>
                          </ul>
                          <div className="article__icon">
                            <img
                              src="https://storage.30shine.com/ResourceWeb/data/images/home/icon-youtube.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  className="ant-col ant-col-24 ant-col-md-12 ant-col-lg-6"
                  style={{ paddingLeft: "15px", paddingRight: "15px" }}
                >
                  <a href="https://www.youtube.com/watch?v=yTE2cAs6rmc&list=PLbplMzmYtClCBJro6DyptCoufDO2v6P3S&index=79">
                    <div className="article article-child">
                      <div className="article__media">
                        <img
                          src="https://storage.30shine.com/ResourceWeb/data/images/hanh-trinh-toa-sang/30shine-sinh-vien-cao-dang-y-lot-xac.jpg"
                          alt=""
                        />
                      </div>
                      <div className="article__content">
                        <div className="article__title">
                          Bỏ suy nghĩ không quan tâm đến ngoại hình, nam sinh CĐ
                          Y tế Bạch Mai lột xác với kiểu tóc mới
                        </div>
                        <div className="article__body">
                          Từ khi lên đại học mình đã bỏ hẳn suy nghĩ đàn ông
                          không cần quan tâm đến ngoại hình. Điều đầu tiên mình
                          thay đổi chính là mái tóc.
                        </div>
                        <div className="article__tag">
                          <ul>
                            <li>174K views</li>
                          </ul>
                          <div className="article__icon">
                            <img
                              src="https://storage.30shine.com/ResourceWeb/data/images/home/icon-youtube.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
    </React.Fragment>
  )
}
export  { Blog }