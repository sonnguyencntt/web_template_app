import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Header";
import Blog from "./child/HomePage_2/Blog";
import { constants as c } from "../../constants";
import CategoryProduct from "./child/HomePage_2/CategoryProduct";
import Banner from "./child/HomePage_2/Banner";
import Product from "./child/HomePage_2/Product";

import { appActions } from "../../actions/appActions";
import PageLoading from "../../components/PageLoading";
function HomePage(props) {
  const dispatch = useDispatch();
  const homeInfo = useSelector((state) => state.app.home);
  const appTheme = useSelector((state) => state.app.appTheme);
  const info = useMemo(() => {
    if (homeInfo.status === c.SUCCESS) {
      return {
        banners: homeInfo.banner.list,
        categories: homeInfo.layouts.filter(
          (v) => v.type_layout === "CATEGORY"
        )[0].list,
        new_products: homeInfo.layouts.filter(
          (v) => v.type_layout === "PRODUCTS_NEW"
        )[0].list,
        hot_products: homeInfo.layouts.filter(
          (v) => v.type_layout === "PRODUCTS_TOP_SALES"
        )[0].list,
        sale_products: homeInfo.layouts.filter(
          (v) => v.type_layout === "PRODUCTS_DISCOUNT"
        )[0].list,
        new_posts: homeInfo.layouts.filter(
          (v) => v.type_layout === "POSTS_NEW"
        )[0].list,
      };
    } else {
      return {};
    }
  }, [homeInfo]);
  useEffect(() => {
    document.title = appTheme.home_title;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (homeInfo.status === c.LOADING) {
      dispatch(appActions.getHomeInfo());
    }
  });
  console.log(info);
  return (
    <React.Fragment>
      <Header />
      <div className="home-page container">
        {homeInfo.status === c.LOADING ? (
          <PageLoading />
        ) : (
          <React.Fragment>
            {
              <React.Fragment>
                <CategoryProduct
                  banners={info.banners}
                  categories={info.categories}
                  discountProducts={info.sale_products}
                />

                {<Banner banners={info.banners} />}
                {/* {info.new_products.length > 0 && (
                  <ProductSection
                    title="Sản phẩm mới"
                    products={info.new_products}
                  />
                )}
                {info.sale_products.length > 0 && (
                  <ProductSection
                    title="Sản phẩm giảm giá"
                    products={info.sale_products}
                  />
                )}
                {info.new_posts.length > 0 && (
                  <BlogSection posts={info.new_posts} />
                )} */}
              </React.Fragment>
            }

{
                info.hot_products.length > 0 &&
                <Product title="Sản phẩm nổi bật" products={info.hot_products} />
              }
              {
                info.new_products.length > 0 &&
                <Product title="Sản phẩm mới" products={info.new_products} />
              }
              {
                info.sale_products.length > 0 &&
                <Product title="Sản phẩm giảm giá" products={info.sale_products} />
              }

            {info.new_posts.length > 0 && <Blog posts={info.new_posts} />}
            {/* <section className="awe-section-8" id="awe-section-8">
              <div className="section section_blog">
                <div className="container">
                  <div className="section-title a-center">
                    <h2>
                      <a title="Tin cập nhật" href="tin-tuc.html">
                        Tin cập nhật
                      </a>
                    </h2>
                    <p>
                      Tin tức vệ sinh an toàn thực phẩm cập nhật mới nhất
                      <br /> mỗi ngày cho bạn
                    </p>
                  </div>
                  <div className="section-content">
                    <div
                      className="blog-slider slick_blog"
                      data-lg-items={3}
                      data-md-items={3}
                      data-sm-items={2}
                      data-xs-items={2}
                      data-nav="true"
                    >
                      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="item">
                          <article className="blog-item text-center">
                            <div>
                              <div className="blog-item-thumbnail">
                                <a
                                  title="Những loại trái cây Nhật đắt như vàng ròng đổ bộ về Việt Nam"
                                  href="nhung-loai-trai-cay-nhat-dat-nhu-vang-rong-do-bo-ve-viet-nam.html"
                                >
                                  <img
                                    src="../bizweb.dktcdn.net/thumb/large/100/308/325/articles/blog-img-4105f.jpg?v=1524568637853"
                                    alt="Những loại trái cây Nhật đắt như vàng ròng đổ bộ về Việt Nam"
                                  />
                                </a>
                              </div>
                              <div className="blog-item-info m-4">
                                <h3
                                  title="Những loại trái cây Nhật đắt như vàng ròng đổ bộ về Việt Nam"
                                  className="blog-item-name"
                                >
                                  <a href="nhung-loai-trai-cay-nhat-dat-nhu-vang-rong-do-bo-ve-viet-nam.html">
                                    Những loại trái cây Nhật đắt như vàng ròng
                                    đổ bộ về Việt Nam
                                  </a>
                                </h3>
                                <p className="blog-item-summary">
                                  {" "}
                                  Nhật Bản là đất nước có nhiều loại hoa quả có
                                  chất lượng thuộc hàng ngon nhất thế giới nhưng
                                  cũng vô cùng đắt đỏ. Đáng chú ý, nhiều loại
                                  quả do nông dân Nhật Bản trồng được đem...
                                </p>
                                <a
                                  title="Những loại trái cây Nhật đắt như vàng ròng đổ bộ về Việt Nam"
                                  className="btn"
                                  href="nhung-loai-trai-cay-nhat-dat-nhu-vang-rong-do-bo-ve-viet-nam.html"
                                >
                                  Chi tiết
                                </a>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="item">
                          <article className="blog-item text-center">
                            <div>
                              <div className="blog-item-thumbnail">
                                <a
                                  title="Những loại trái cây Nhật đắt như vàng ròng đổ bộ về Việt Nam"
                                  href="nhung-loai-trai-cay-nhat-dat-nhu-vang-rong-do-bo-ve-viet-nam.html"
                                >
                                  <img
                                    src="../bizweb.dktcdn.net/thumb/large/100/308/325/articles/blog-img-4105f.jpg?v=1524568637853"
                                    alt="Những loại trái cây Nhật đắt như vàng ròng đổ bộ về Việt Nam"
                                  />
                                </a>
                              </div>
                              <div className="blog-item-info m-4">
                                <h3
                                  title="Những loại trái cây Nhật đắt như vàng ròng đổ bộ về Việt Nam"
                                  className="blog-item-name"
                                >
                                  <a href="nhung-loai-trai-cay-nhat-dat-nhu-vang-rong-do-bo-ve-viet-nam.html">
                                    Những loại trái cây Nhật đắt như vàng ròng
                                    đổ bộ về Việt Nam
                                  </a>
                                </h3>
                                <p className="blog-item-summary">
                                  {" "}
                                  Nhật Bản là đất nước có nhiều loại hoa quả có
                                  chất lượng thuộc hàng ngon nhất thế giới nhưng
                                  cũng vô cùng đắt đỏ. Đáng chú ý, nhiều loại
                                  quả do nông dân Nhật Bản trồng được đem...
                                </p>
                                <a
                                  title="Những loại trái cây Nhật đắt như vàng ròng đổ bộ về Việt Nam"
                                  className="btn"
                                  href="nhung-loai-trai-cay-nhat-dat-nhu-vang-rong-do-bo-ve-viet-nam.html"
                                >
                                  Chi tiết
                                </a>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>

                      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="item">
                          <article className="blog-item text-center">
                            <div>
                              <div className="blog-item-thumbnail">
                                <a
                                  title="Những loại trái cây Nhật đắt như vàng ròng đổ bộ về Việt Nam"
                                  href="nhung-loai-trai-cay-nhat-dat-nhu-vang-rong-do-bo-ve-viet-nam.html"
                                >
                                  <img
                                    src="../bizweb.dktcdn.net/thumb/large/100/308/325/articles/blog-img-4105f.jpg?v=1524568637853"
                                    alt="Những loại trái cây Nhật đắt như vàng ròng đổ bộ về Việt Nam"
                                  />
                                </a>
                              </div>
                              <div className="blog-item-info m-4">
                                <h3
                                  title="Những loại trái cây Nhật đắt như vàng ròng đổ bộ về Việt Nam"
                                  className="blog-item-name"
                                >
                                  <a href="nhung-loai-trai-cay-nhat-dat-nhu-vang-rong-do-bo-ve-viet-nam.html">
                                    Những loại trái cây Nhật đắt như vàng ròng
                                    đổ bộ về Việt Nam
                                  </a>
                                </h3>
                                <p className="blog-item-summary">
                                  {" "}
                                  Nhật Bản là đất nước có nhiều loại hoa quả có
                                  chất lượng thuộc hàng ngon nhất thế giới nhưng
                                  cũng vô cùng đắt đỏ. Đáng chú ý, nhiều loại
                                  quả do nông dân Nhật Bản trồng được đem...
                                </p>
                                <a
                                  title="Những loại trái cây Nhật đắt như vàng ròng đổ bộ về Việt Nam"
                                  className="btn"
                                  href="nhung-loai-trai-cay-nhat-dat-nhu-vang-rong-do-bo-ve-viet-nam.html"
                                >
                                  Chi tiết
                                </a>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}

            {/* <section className="awe-section-9" id="awe-section-9">
              <div className="section section_testimonial">
                <div className="container">
                  <div className="section-title a-center">
                    <h2>
                      <span>Phản hồi của khách</span>
                    </h2>
                    <p>
                      Phản hồi của những khách hàng đã và đang sử dụng sản
                      <br />
                      phẩm trong suốt những năm qua
                    </p>
                  </div>
                  <div className="section-content">
                    <div
                      className="testimonial-slider slick_tes"
                      data-lg-items={3}
                      data-md-items={3}
                      data-sm-items={2}
                      data-xs-items={2}
                      data-nav="true"
                    >
                      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="item">
                          <div className="testimonial-item text-center p-4 mb-5">
                            <div className="image-avata">
                              <img
                                src="https://bizweb.dktcdn.net/100/308/325/themes/801947/assets/testimonial_1.jpg?1623316806453"
                                alt="Người mẫu - Ngọc Trinh"
                              />
                            </div>
                            <h4 className="name">Người mẫu - Ngọc Trinh</h4>
                            <p className="designation m-0">
                              Là một người khá kỹ tính, tôi luôn luôn lựa chọn
                              những thực phẩm sạch nhất. Và đây là nơi tôi đặt
                              trọng niềm tin{" "}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="item">
                          <div className="testimonial-item text-center p-4 mb-5">
                            <div className="image-avata">
                              <img
                                src="https://bizweb.dktcdn.net/100/308/325/themes/801947/assets/testimonial_1.jpg?1623316806453"
                                alt="Người mẫu - Ngọc Trinh"
                              />
                            </div>
                            <h4 className="name">Người mẫu - Ngọc Trinh</h4>
                            <p className="designation m-0">
                              Là một người khá kỹ tính, tôi luôn luôn lựa chọn
                              những thực phẩm sạch nhất. Và đây là nơi tôi đặt
                              trọng niềm tin{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="item">
                          <div className="testimonial-item text-center p-4 mb-5">
                            <div className="image-avata">
                              <img
                                src="https://bizweb.dktcdn.net/100/308/325/themes/801947/assets/testimonial_1.jpg?1623316806453"
                                alt="Người mẫu - Ngọc Trinh"
                              />
                            </div>
                            <h4 className="name">Người mẫu - Ngọc Trinh</h4>
                            <p className="designation m-0">
                              Là một người khá kỹ tính, tôi luôn luôn lựa chọn
                              những thực phẩm sạch nhất. Và đây là nơi tôi đặt
                              trọng niềm tin{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="awe-section-10" id="awe-section-10">
              <div className="section section-brand mb-5">
                <div className="container">
                  <h2 className="hidden">Thương hiệu</h2>
                  <div
                    className="slickbrand"
                    data-lg-items={6}
                    data-md-items={5}
                    data-sm-items={4}
                    data-xs-items={3}
                    data-xss-items={2}
                    data-margin={30}
                  >
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                      <div className="brand-item">
                        <a href="#" className="img25">
                          <img
                            src="https://bizweb.dktcdn.net/thumb/medium/100/308/325/themes/801947/assets/brand2.png?1623316806453"
                            alt="DuaLeo-X"
                          />
                        </a>
                      </div>
                    </div>

                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                      <div className="brand-item">
                        <a href="#" className="img25">
                          <img
                            src="https://bizweb.dktcdn.net/thumb/medium/100/308/325/themes/801947/assets/brand2.png?1623316806453"
                            alt="DuaLeo-X"
                          />
                        </a>
                      </div>
                    </div>
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                      <div className="brand-item">
                        <a href="#" className="img25">
                          <img
                            src="https://bizweb.dktcdn.net/thumb/medium/100/308/325/themes/801947/assets/brand2.png?1623316806453"
                            alt="DuaLeo-X"
                          />
                        </a>
                      </div>
                    </div>
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                      <div className="brand-item">
                        <a href="#" className="img25">
                          <img
                            src="https://bizweb.dktcdn.net/thumb/medium/100/308/325/themes/801947/assets/brand2.png?1623316806453"
                            alt="DuaLeo-X"
                          />
                        </a>
                      </div>
                    </div>
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                      <div className="brand-item">
                        <a href="#" className="img25">
                          <img
                            src="https://bizweb.dktcdn.net/thumb/medium/100/308/325/themes/801947/assets/brand2.png?1623316806453"
                            alt="DuaLeo-X"
                          />
                        </a>
                      </div>
                    </div>
                    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                      <div className="brand-item">
                        <a href="#" className="img25">
                          <img
                            src="https://bizweb.dktcdn.net/thumb/medium/100/308/325/themes/801947/assets/brand2.png?1623316806453"
                            alt="DuaLeo-X"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
}
export default HomePage;
