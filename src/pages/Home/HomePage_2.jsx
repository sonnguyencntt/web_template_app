import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Header";
import Blog from "./child/HomePage_2/Blog";
import { constants as c } from "../../constants";
import CategoryProduct from "./child/HomePage_2/CategoryProduct";
import Banner from "./child/HomePage_2/Banner";

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

            <section className="awe-section-3" id="awe-section-3">
              <div className="section section-collection section-collection-1">
                <div className="container">
                  <div className="collection-border">
                    <div className="collection-main">
                      <div className="row ">
                        <div className="col-lg-12 col-sm-12">
                          <div
                            className="e-tabs not-dqtab ajax-tab-1"
                            data-section="ajax-tab-1"
                            data-view="car-1"
                          >
                            <div className="row row-noGutter">
                              <div className="col-sm-12">
                                <div className="content">
                                  <div className="section-title">
                                    <h2>Trái cây mỗi ngày</h2>
                                  </div>
                                  <div>
                                    <ul className="tabs tabs-title tab-mobile clearfix hidden-sm hidden-md hidden-lg">
                                      <li className="prev">
                                        <i className="fa fa-angle-left" />
                                      </li>
                                      <li
                                        className="tab-link tab-title hidden-sm hidden-md hidden-lg current tab-titlexs"
                                        data-tab="tab-1"
                                      >
                                        <span>Rau củ</span>
                                      </li>
                                      <li className="next">
                                        <i className="fa fa-angle-right" />
                                      </li>
                                    </ul>
                                    <ul className="tabs tabs-title ajax clearfix hidden-xs">
                                      <li
                                        className="tab-link has-content"
                                        data-tab="tab-1"
                                        data-url="/collections/all"
                                      >
                                        <span>Rau củ</span>
                                      </li>
                                      <li
                                        className="tab-link "
                                        data-tab="tab-2"
                                        data-url="/collections/all"
                                      >
                                        <span>Hoa quả</span>
                                      </li>
                                      <li
                                        className="tab-link "
                                        data-tab="tab-3"
                                        data-url="/collections/all"
                                      >
                                        <span>Thịt</span>
                                      </li>
                                      <li
                                        className="tab-link "
                                        data-tab="tab-4"
                                        data-url="/collections/all"
                                      >
                                        <span>Hải sản</span>
                                      </li>
                                    </ul>
                                    <div className="tab-1 tab-content current">
                                      <div
                                        className="products products-view-grid slickprolist_1"
                                        data-lgg-items={4}
                                        data-lg-items={4}
                                        data-md-items={4}
                                        data-sm-items={3}
                                        data-xs-items={2}
                                        data-xss-items={2}
                                        data-nav="true"
                                      >
                                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                          <div className="item">
                                            <div className="product-box">
                                              <div className="product-thumbnail flexbox-grid">
                                                <a
                                                  href="cherry-do-canada-loai-to-14.html"
                                                  title="Quả Kiwi xanh"
                                                >
                                                  <img
                                                    className="lazyload"
                                                    src="http://bizweb.dktcdn.net/100/308/325/themes/801947/assets/rolling.svg?1623316806453"
                                                    data-src="//bizweb.dktcdn.net/thumb/medium/100/308/325/products/h.jpg?v=1524537022723"
                                                    alt="Quả Kiwi xanh"
                                                  />
                                                </a>
                                                <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                                                  <form
                                                    action="https://dualeo-x.mysapo.net/cart/add"
                                                    method="post"
                                                    className="variants form-nut-grid margin-bottom-0"
                                                    data-id="product-actions-11480163"
                                                    encType="multipart/form-data"
                                                  >
                                                    <div>
                                                      <input
                                                        type="hidden"
                                                        name="variantId"
                                                        defaultValue={17898169}
                                                      />
                                                      <button
                                                        className="btn-buy btn-cart btn btn-primary   left-to add_to_cart"
                                                        data-toggle="tooltip"
                                                        title="Mua hàng"
                                                      >
                                                        <i className="fa fa-shopping-bag" />
                                                      </button>
                                                      <a
                                                        href="cherry-do-canada-loai-to-14.html"
                                                        data-handle="cherry-do-canada-loai-to-14"
                                                        data-toggle="tooltip"
                                                        title="Xem nhanh"
                                                        className="btn-gray btn_view btn right-to quick-view"
                                                      >
                                                        <i className="fa fa-eye" />
                                                      </a>
                                                    </div>
                                                  </form>
                                                </div>
                                              </div>
                                              <div className="product-info a-center">
                                                <h3 className="product-name">
                                                  <a
                                                    href="cherry-do-canada-loai-to-14.html"
                                                    title="Quả Kiwi xanh"
                                                  >
                                                    Quả Kiwi xanh
                                                  </a>
                                                </h3>
                                                <div
                                                  className="sapo-product-reviews-badge"
                                                  data-id={11480163}
                                                />
                                                <div className="price-box clearfix">
                                                  <div className="special-price">
                                                    <span className="price product-price">
                                                      250.000₫
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                          <div className="item">
                                            <div className="product-box">
                                              <div className="product-thumbnail flexbox-grid">
                                                <a
                                                  href="cherry-do-canada-loai-to-14.html"
                                                  title="Quả Kiwi xanh"
                                                >
                                                  <img
                                                    className="lazyload"
                                                    src="http://bizweb.dktcdn.net/100/308/325/themes/801947/assets/rolling.svg?1623316806453"
                                                    data-src="//bizweb.dktcdn.net/thumb/medium/100/308/325/products/h.jpg?v=1524537022723"
                                                    alt="Quả Kiwi xanh"
                                                  />
                                                </a>
                                                <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                                                  <form
                                                    action="https://dualeo-x.mysapo.net/cart/add"
                                                    method="post"
                                                    className="variants form-nut-grid margin-bottom-0"
                                                    data-id="product-actions-11480163"
                                                    encType="multipart/form-data"
                                                  >
                                                    <div>
                                                      <input
                                                        type="hidden"
                                                        name="variantId"
                                                        defaultValue={17898169}
                                                      />
                                                      <button
                                                        className="btn-buy btn-cart btn btn-primary   left-to add_to_cart"
                                                        data-toggle="tooltip"
                                                        title="Mua hàng"
                                                      >
                                                        <i className="fa fa-shopping-bag" />
                                                      </button>
                                                      <a
                                                        href="cherry-do-canada-loai-to-14.html"
                                                        data-handle="cherry-do-canada-loai-to-14"
                                                        data-toggle="tooltip"
                                                        title="Xem nhanh"
                                                        className="btn-gray btn_view btn right-to quick-view"
                                                      >
                                                        <i className="fa fa-eye" />
                                                      </a>
                                                    </div>
                                                  </form>
                                                </div>
                                              </div>
                                              <div className="product-info a-center">
                                                <h3 className="product-name">
                                                  <a
                                                    href="cherry-do-canada-loai-to-14.html"
                                                    title="Quả Kiwi xanh"
                                                  >
                                                    Quả Kiwi xanh
                                                  </a>
                                                </h3>
                                                <div
                                                  className="sapo-product-reviews-badge"
                                                  data-id={11480163}
                                                />
                                                <div className="price-box clearfix">
                                                  <div className="special-price">
                                                    <span className="price product-price">
                                                      250.000₫
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                          <div className="item">
                                            <div className="product-box">
                                              <div className="product-thumbnail flexbox-grid">
                                                <a
                                                  href="cherry-do-canada-loai-to-14.html"
                                                  title="Quả Kiwi xanh"
                                                >
                                                  <img
                                                    className="lazyload"
                                                    src="http://bizweb.dktcdn.net/100/308/325/themes/801947/assets/rolling.svg?1623316806453"
                                                    data-src="//bizweb.dktcdn.net/thumb/medium/100/308/325/products/h.jpg?v=1524537022723"
                                                    alt="Quả Kiwi xanh"
                                                  />
                                                </a>
                                                <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                                                  <form
                                                    action="https://dualeo-x.mysapo.net/cart/add"
                                                    method="post"
                                                    className="variants form-nut-grid margin-bottom-0"
                                                    data-id="product-actions-11480163"
                                                    encType="multipart/form-data"
                                                  >
                                                    <div>
                                                      <input
                                                        type="hidden"
                                                        name="variantId"
                                                        defaultValue={17898169}
                                                      />
                                                      <button
                                                        className="btn-buy btn-cart btn btn-primary   left-to add_to_cart"
                                                        data-toggle="tooltip"
                                                        title="Mua hàng"
                                                      >
                                                        <i className="fa fa-shopping-bag" />
                                                      </button>
                                                      <a
                                                        href="cherry-do-canada-loai-to-14.html"
                                                        data-handle="cherry-do-canada-loai-to-14"
                                                        data-toggle="tooltip"
                                                        title="Xem nhanh"
                                                        className="btn-gray btn_view btn right-to quick-view"
                                                      >
                                                        <i className="fa fa-eye" />
                                                      </a>
                                                    </div>
                                                  </form>
                                                </div>
                                              </div>
                                              <div className="product-info a-center">
                                                <h3 className="product-name">
                                                  <a
                                                    href="cherry-do-canada-loai-to-14.html"
                                                    title="Quả Kiwi xanh"
                                                  >
                                                    Quả Kiwi xanh
                                                  </a>
                                                </h3>
                                                <div
                                                  className="sapo-product-reviews-badge"
                                                  data-id={11480163}
                                                />
                                                <div className="price-box clearfix">
                                                  <div className="special-price">
                                                    <span className="price product-price">
                                                      250.000₫
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                          <div className="item">
                                            <div className="product-box">
                                              <div className="product-thumbnail flexbox-grid">
                                                <a
                                                  href="cherry-do-canada-loai-to-14.html"
                                                  title="Quả Kiwi xanh"
                                                >
                                                  <img
                                                    className="lazyload"
                                                    src="http://bizweb.dktcdn.net/100/308/325/themes/801947/assets/rolling.svg?1623316806453"
                                                    data-src="//bizweb.dktcdn.net/thumb/medium/100/308/325/products/h.jpg?v=1524537022723"
                                                    alt="Quả Kiwi xanh"
                                                  />
                                                </a>
                                                <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                                                  <form
                                                    action="https://dualeo-x.mysapo.net/cart/add"
                                                    method="post"
                                                    className="variants form-nut-grid margin-bottom-0"
                                                    data-id="product-actions-11480163"
                                                    encType="multipart/form-data"
                                                  >
                                                    <div>
                                                      <input
                                                        type="hidden"
                                                        name="variantId"
                                                        defaultValue={17898169}
                                                      />
                                                      <button
                                                        className="btn-buy btn-cart btn btn-primary   left-to add_to_cart"
                                                        data-toggle="tooltip"
                                                        title="Mua hàng"
                                                      >
                                                        <i className="fa fa-shopping-bag" />
                                                      </button>
                                                      <a
                                                        href="cherry-do-canada-loai-to-14.html"
                                                        data-handle="cherry-do-canada-loai-to-14"
                                                        data-toggle="tooltip"
                                                        title="Xem nhanh"
                                                        className="btn-gray btn_view btn right-to quick-view"
                                                      >
                                                        <i className="fa fa-eye" />
                                                      </a>
                                                    </div>
                                                  </form>
                                                </div>
                                              </div>
                                              <div className="product-info a-center">
                                                <h3 className="product-name">
                                                  <a
                                                    href="cherry-do-canada-loai-to-14.html"
                                                    title="Quả Kiwi xanh"
                                                  >
                                                    Quả Kiwi xanh
                                                  </a>
                                                </h3>
                                                <div
                                                  className="sapo-product-reviews-badge"
                                                  data-id={11480163}
                                                />
                                                <div className="price-box clearfix">
                                                  <div className="special-price">
                                                    <span className="price product-price">
                                                      250.000₫
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                          <div className="item">
                                            <div className="product-box">
                                              <div className="product-thumbnail flexbox-grid">
                                                <a
                                                  href="cherry-do-canada-loai-to-14.html"
                                                  title="Quả Kiwi xanh"
                                                >
                                                  <img
                                                    className="lazyload"
                                                    src="http://bizweb.dktcdn.net/100/308/325/themes/801947/assets/rolling.svg?1623316806453"
                                                    data-src="//bizweb.dktcdn.net/thumb/medium/100/308/325/products/h.jpg?v=1524537022723"
                                                    alt="Quả Kiwi xanh"
                                                  />
                                                </a>
                                                <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                                                  <form
                                                    action="https://dualeo-x.mysapo.net/cart/add"
                                                    method="post"
                                                    className="variants form-nut-grid margin-bottom-0"
                                                    data-id="product-actions-11480163"
                                                    encType="multipart/form-data"
                                                  >
                                                    <div>
                                                      <input
                                                        type="hidden"
                                                        name="variantId"
                                                        defaultValue={17898169}
                                                      />
                                                      <button
                                                        className="btn-buy btn-cart btn btn-primary   left-to add_to_cart"
                                                        data-toggle="tooltip"
                                                        title="Mua hàng"
                                                      >
                                                        <i className="fa fa-shopping-bag" />
                                                      </button>
                                                      <a
                                                        href="cherry-do-canada-loai-to-14.html"
                                                        data-handle="cherry-do-canada-loai-to-14"
                                                        data-toggle="tooltip"
                                                        title="Xem nhanh"
                                                        className="btn-gray btn_view btn right-to quick-view"
                                                      >
                                                        <i className="fa fa-eye" />
                                                      </a>
                                                    </div>
                                                  </form>
                                                </div>
                                              </div>
                                              <div className="product-info a-center">
                                                <h3 className="product-name">
                                                  <a
                                                    href="cherry-do-canada-loai-to-14.html"
                                                    title="Quả Kiwi xanh"
                                                  >
                                                    Quả Kiwi xanh
                                                  </a>
                                                </h3>
                                                <div
                                                  className="sapo-product-reviews-badge"
                                                  data-id={11480163}
                                                />
                                                <div className="price-box clearfix">
                                                  <div className="special-price">
                                                    <span className="price product-price">
                                                      250.000₫
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* /.products */}
                                    </div>
                                    <div className="tab-2 tab-content"></div>
                                    <div className="tab-3 tab-content"></div>
                                    <div className="tab-4 tab-content"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="awe-section-4" id="awe-section-4">
              <div className="section section-collection section-collection-2">
                <div className="container">
                  <div className="collection-border">
                    <div className="collection-main">
                      <div className="row ">
                        <div className="col-lg-12 col-sm-12">
                          <div
                            className="e-tabs not-dqtab ajax-tab-2"
                            data-section="ajax-tab-2"
                            data-view="car-2"
                          >
                            <div className="row row-noGutter">
                              <div className="col-sm-12">
                                <div className="content">
                                  <div className="section-title">
                                    <h2>Rau tươi mới</h2>
                                  </div>
                                  <div>
                                    <ul className="tabs tabs-title tab-mobile clearfix hidden-sm hidden-md hidden-lg">
                                      <li className="prev">
                                        <i className="fa fa-angle-left" />
                                      </li>
                                      <li
                                        className="tab-link tab-title hidden-sm hidden-md hidden-lg current tab-titlexs"
                                        data-tab="tab-1"
                                      >
                                        <span>Rau củ</span>
                                      </li>
                                      <li className="next">
                                        <i className="fa fa-angle-right" />
                                      </li>
                                    </ul>
                                    <ul className="tabs tabs-title ajax clearfix hidden-xs">
                                      <li
                                        className="tab-link has-content"
                                        data-tab="tab-1"
                                        data-url="/collections/all"
                                      >
                                        <span>Rau củ</span>
                                      </li>
                                      <li
                                        className="tab-link "
                                        data-tab="tab-2"
                                        data-url="/collections/all"
                                      >
                                        <span>Hoa quả</span>
                                      </li>
                                      <li
                                        className="tab-link "
                                        data-tab="tab-3"
                                        data-url="/collections/all"
                                      >
                                        <span>Thịt</span>
                                      </li>
                                      <li
                                        className="tab-link "
                                        data-tab="tab-4"
                                        data-url="/collections/all"
                                      >
                                        <span>Hải sản</span>
                                      </li>
                                    </ul>
                                    <div className="tab-1 tab-content">
                                      <div
                                        className="products products-view-grid slickprolist_2"
                                        data-lg-items={4}
                                        data-md-items={4}
                                        data-sm-items={3}
                                        data-xs-items={2}
                                        data-xss-items={2}
                                        data-nav="true"
                                      >
                                        <div className="item">
                                          <div className="product-box">
                                            <div className="product-thumbnail flexbox-grid">
                                              <a
                                                href="cherry-do-canada-loai-to.html"
                                                title="Vải thiều loại to"
                                              >
                                                <img
                                                  className="lazyload"
                                                  src="http://bizweb.dktcdn.net/100/308/325/themes/801947/assets/rolling.svg?1623316806453"
                                                  data-src="//bizweb.dktcdn.net/thumb/medium/100/308/325/products/kf57fd708888943c073792a327aeb5.jpg?v=1524537033277"
                                                  alt="Vải thiều loại to"
                                                />
                                              </a>
                                              <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                                                <form
                                                  action="https://dualeo-x.mysapo.net/cart/add"
                                                  method="post"
                                                  className="variants form-nut-grid margin-bottom-0"
                                                  data-id="product-actions-11480175"
                                                  encType="multipart/form-data"
                                                >
                                                  <div>
                                                    <input
                                                      type="hidden"
                                                      name="variantId"
                                                      defaultValue={17898181}
                                                    />
                                                    <button
                                                      className="btn-buy btn-cart btn btn-primary   left-to add_to_cart"
                                                      data-toggle="tooltip"
                                                      title="Mua hàng"
                                                    >
                                                      <i className="fa fa-shopping-bag" />
                                                    </button>
                                                    <a
                                                      href="cherry-do-canada-loai-to.html"
                                                      data-handle="cherry-do-canada-loai-to"
                                                      data-toggle="tooltip"
                                                      title="Xem nhanh"
                                                      className="btn-gray btn_view btn right-to quick-view"
                                                    >
                                                      <i className="fa fa-eye" />
                                                    </a>
                                                  </div>
                                                </form>
                                              </div>
                                            </div>
                                            <div className="product-info a-center">
                                              <h3 className="product-name">
                                                <a
                                                  href="cherry-do-canada-loai-to.html"
                                                  title="Vải thiều loại to"
                                                >
                                                  Vải thiều loại to
                                                </a>
                                              </h3>
                                              <div
                                                className="sapo-product-reviews-badge"
                                                data-id={11480175}
                                              />
                                              <div className="price-box clearfix">
                                                <div className="special-price">
                                                  <span className="price product-price">
                                                    80.000₫
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="item">
                                          <div className="product-box">
                                            <div className="product-thumbnail flexbox-grid">
                                              <a
                                                href="cherry-do-canada-loai-to-1.html"
                                                title="Hồng đỏ Mỹ"
                                              >
                                                <img
                                                  className="lazyload"
                                                  src="http://bizweb.dktcdn.net/100/308/325/themes/801947/assets/rolling.svg?1623316806453"
                                                  data-src="//bizweb.dktcdn.net/thumb/medium/100/308/325/products/x.jpg?v=1524537031717"
                                                  alt="Hồng đỏ Mỹ"
                                                />
                                              </a>
                                              <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                                                <form
                                                  action="https://dualeo-x.mysapo.net/cart/add"
                                                  method="post"
                                                  className="variants form-nut-grid margin-bottom-0"
                                                  data-id="product-actions-11480172"
                                                  encType="multipart/form-data"
                                                >
                                                  <div>
                                                    <input
                                                      type="hidden"
                                                      name="variantId"
                                                      defaultValue={17898178}
                                                    />
                                                    <button
                                                      className="btn-buy btn-cart btn btn-primary   left-to add_to_cart"
                                                      data-toggle="tooltip"
                                                      title="Mua hàng"
                                                    >
                                                      <i className="fa fa-shopping-bag" />
                                                    </button>
                                                    <a
                                                      href="cherry-do-canada-loai-to-1.html"
                                                      data-handle="cherry-do-canada-loai-to-1"
                                                      data-toggle="tooltip"
                                                      title="Xem nhanh"
                                                      className="btn-gray btn_view btn right-to quick-view"
                                                    >
                                                      <i className="fa fa-eye" />
                                                    </a>
                                                  </div>
                                                </form>
                                              </div>
                                            </div>
                                            <div className="product-info a-center">
                                              <h3 className="product-name">
                                                <a
                                                  href="cherry-do-canada-loai-to-1.html"
                                                  title="Hồng đỏ Mỹ"
                                                >
                                                  Hồng đỏ Mỹ
                                                </a>
                                              </h3>
                                              <div
                                                className="sapo-product-reviews-badge"
                                                data-id={11480172}
                                              />
                                              <div className="price-box clearfix">
                                                <div className="special-price">
                                                  <span className="price product-price">
                                                    150.000₫
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="item">
                                          <div className="product-box">
                                            <div className="product-thumbnail flexbox-grid">
                                              <a
                                                href="cherry-do-canada-loai-to-10.html"
                                                title="Dưa leo Đà Lạt"
                                              >
                                                <img
                                                  className="lazyload"
                                                  src="http://bizweb.dktcdn.net/100/308/325/themes/801947/assets/rolling.svg?1623316806453"
                                                  data-src="//bizweb.dktcdn.net/thumb/medium/100/308/325/products/43350e0a3ce5e4aa54ddaf90d33728.jpg?v=1524537029390"
                                                  alt="Dưa leo Đà Lạt"
                                                />
                                              </a>
                                              <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                                                <form
                                                  action="https://dualeo-x.mysapo.net/cart/add"
                                                  method="post"
                                                  className="variants form-nut-grid margin-bottom-0"
                                                  data-id="product-actions-11480168"
                                                  encType="multipart/form-data"
                                                >
                                                  <div>
                                                    <input
                                                      type="hidden"
                                                      name="variantId"
                                                      defaultValue={17898174}
                                                    />
                                                    <button
                                                      className="btn-buy btn-cart btn btn-primary   left-to add_to_cart"
                                                      data-toggle="tooltip"
                                                      title="Mua hàng"
                                                    >
                                                      <i className="fa fa-shopping-bag" />
                                                    </button>
                                                    <a
                                                      href="cherry-do-canada-loai-to-10.html"
                                                      data-handle="cherry-do-canada-loai-to-10"
                                                      data-toggle="tooltip"
                                                      title="Xem nhanh"
                                                      className="btn-gray btn_view btn right-to quick-view"
                                                    >
                                                      <i className="fa fa-eye" />
                                                    </a>
                                                  </div>
                                                </form>
                                              </div>
                                            </div>
                                            <div className="product-info a-center">
                                              <h3 className="product-name">
                                                <a
                                                  href="cherry-do-canada-loai-to-10.html"
                                                  title="Dưa leo Đà Lạt"
                                                >
                                                  Dưa leo Đà Lạt
                                                </a>
                                              </h3>
                                              <div
                                                className="sapo-product-reviews-badge"
                                                data-id={11480168}
                                              />
                                              <div className="price-box clearfix">
                                                <div className="special-price">
                                                  <span className="price product-price">
                                                    65.000₫
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="item">
                                          <div className="product-box">
                                            <div className="product-thumbnail flexbox-grid">
                                              <a
                                                href="cherry-do-canada-loai-to-11.html"
                                                title="Cà chua Đà Lạt"
                                              >
                                                <img
                                                  className="lazyload"
                                                  src="http://bizweb.dktcdn.net/100/308/325/themes/801947/assets/rolling.svg?1623316806453"
                                                  data-src="//bizweb.dktcdn.net/thumb/medium/100/308/325/products/sss.jpg?v=1524537027550"
                                                  alt="Cà chua Đà Lạt"
                                                />
                                              </a>
                                              <div className="sale-flash">
                                                <div className="before" />- 33%
                                              </div>
                                              <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                                                <form
                                                  action="https://dualeo-x.mysapo.net/cart/add"
                                                  method="post"
                                                  className="variants form-nut-grid margin-bottom-0"
                                                  data-id="product-actions-11480167"
                                                  encType="multipart/form-data"
                                                >
                                                  <div>
                                                    <input
                                                      type="hidden"
                                                      name="variantId"
                                                      defaultValue={17898173}
                                                    />
                                                    <button
                                                      className="btn-buy btn-cart btn btn-primary   left-to add_to_cart"
                                                      data-toggle="tooltip"
                                                      title="Mua hàng"
                                                    >
                                                      <i className="fa fa-shopping-bag" />
                                                    </button>
                                                    <a
                                                      href="cherry-do-canada-loai-to-11.html"
                                                      data-handle="cherry-do-canada-loai-to-11"
                                                      data-toggle="tooltip"
                                                      title="Xem nhanh"
                                                      className="btn-gray btn_view btn right-to quick-view"
                                                    >
                                                      <i className="fa fa-eye" />
                                                    </a>
                                                  </div>
                                                </form>
                                              </div>
                                            </div>
                                            <div className="product-info a-center">
                                              <h3 className="product-name">
                                                <a
                                                  href="cherry-do-canada-loai-to-11.html"
                                                  title="Cà chua Đà Lạt"
                                                >
                                                  Cà chua Đà Lạt
                                                </a>
                                              </h3>
                                              <div
                                                className="sapo-product-reviews-badge"
                                                data-id={11480167}
                                              />
                                              <div className="price-box clearfix">
                                                <div className="special-price">
                                                  <span className="price product-price">
                                                    30.000₫
                                                  </span>
                                                </div>
                                                <div className="old-price">
                                                  <span className="price product-price-old">
                                                    45.000₫
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="item">
                                          <div className="product-box">
                                            <div className="product-thumbnail flexbox-grid">
                                              <a
                                                href="cherry-do-canada-loai-to-12.html"
                                                title="Nho đỏ không hạt ÚC"
                                              >
                                                <img
                                                  className="lazyload"
                                                  src="http://bizweb.dktcdn.net/100/308/325/themes/801947/assets/rolling.svg?1623316806453"
                                                  data-src="//bizweb.dktcdn.net/thumb/medium/100/308/325/products/nho1.jpg?v=1524537026310"
                                                  alt="Nho đỏ không hạt ÚC"
                                                />
                                              </a>
                                              <div className="sale-flash">
                                                <div className="before" />- 33%
                                              </div>
                                              <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                                                <form
                                                  action="https://dualeo-x.mysapo.net/cart/add"
                                                  method="post"
                                                  className="variants form-nut-grid margin-bottom-0"
                                                  data-id="product-actions-11480166"
                                                  encType="multipart/form-data"
                                                >
                                                  <div>
                                                    <input
                                                      type="hidden"
                                                      name="variantId"
                                                      defaultValue={17898172}
                                                    />
                                                    <button
                                                      className="btn-buy btn-cart btn btn-primary   left-to add_to_cart"
                                                      data-toggle="tooltip"
                                                      title="Mua hàng"
                                                    >
                                                      <i className="fa fa-shopping-bag" />
                                                    </button>
                                                    <a
                                                      href="cherry-do-canada-loai-to-12.html"
                                                      data-handle="cherry-do-canada-loai-to-12"
                                                      data-toggle="tooltip"
                                                      title="Xem nhanh"
                                                      className="btn-gray btn_view btn right-to quick-view"
                                                    >
                                                      <i className="fa fa-eye" />
                                                    </a>
                                                  </div>
                                                </form>
                                              </div>
                                            </div>
                                            <div className="product-info a-center">
                                              <h3 className="product-name">
                                                <a
                                                  href="cherry-do-canada-loai-to-12.html"
                                                  title="Nho đỏ không hạt ÚC"
                                                >
                                                  Nho đỏ không hạt ÚC
                                                </a>
                                              </h3>
                                              <div
                                                className="sapo-product-reviews-badge"
                                                data-id={11480166}
                                              />
                                              <div className="price-box clearfix">
                                                <div className="special-price">
                                                  <span className="price product-price">
                                                    30.000₫
                                                  </span>
                                                </div>
                                                <div className="old-price">
                                                  <span className="price product-price-old">
                                                    45.000₫
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="item">
                                          <div className="product-box">
                                            <div className="product-thumbnail flexbox-grid">
                                              <a
                                                href="cherry-do-canada-loai-to-13.html"
                                                title="Dâu tây loại 1"
                                              >
                                                <img
                                                  className="lazyload"
                                                  src="http://bizweb.dktcdn.net/100/308/325/themes/801947/assets/rolling.svg?1623316806453"
                                                  data-src="//bizweb.dktcdn.net/thumb/medium/100/308/325/products/700217a9a6915485ca0ff94fd9d0e6.jpg?v=1524537024353"
                                                  alt="Dâu tây loại 1"
                                                />
                                              </a>
                                              <div className="sale-flash">
                                                <div className="before" />- 22%
                                              </div>
                                              <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                                                <form
                                                  action="https://dualeo-x.mysapo.net/cart/add"
                                                  method="post"
                                                  className="variants form-nut-grid margin-bottom-0"
                                                  data-id="product-actions-11480164"
                                                  encType="multipart/form-data"
                                                >
                                                  <div>
                                                    <input
                                                      type="hidden"
                                                      name="variantId"
                                                      defaultValue={17898170}
                                                    />
                                                    <button
                                                      className="btn-buy btn-cart btn btn-primary   left-to add_to_cart"
                                                      data-toggle="tooltip"
                                                      title="Mua hàng"
                                                    >
                                                      <i className="fa fa-shopping-bag" />
                                                    </button>
                                                    <a
                                                      href="cherry-do-canada-loai-to-13.html"
                                                      data-handle="cherry-do-canada-loai-to-13"
                                                      data-toggle="tooltip"
                                                      title="Xem nhanh"
                                                      className="btn-gray btn_view btn right-to quick-view"
                                                    >
                                                      <i className="fa fa-eye" />
                                                    </a>
                                                  </div>
                                                </form>
                                              </div>
                                            </div>
                                            <div className="product-info a-center">
                                              <h3 className="product-name">
                                                <a
                                                  href="cherry-do-canada-loai-to-13.html"
                                                  title="Dâu tây loại 1"
                                                >
                                                  Dâu tây loại 1
                                                </a>
                                              </h3>
                                              <div
                                                className="sapo-product-reviews-badge"
                                                data-id={11480164}
                                              />
                                              <div className="price-box clearfix">
                                                <div className="special-price">
                                                  <span className="price product-price">
                                                    250.000₫
                                                  </span>
                                                </div>
                                                <div className="old-price">
                                                  <span className="price product-price-old">
                                                    320.000₫
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="item">
                                          <div className="product-box">
                                            <div className="product-thumbnail flexbox-grid">
                                              <a
                                                href="cherry-do-canada-loai-to-14.html"
                                                title="Quả Kiwi xanh"
                                              >
                                                <img
                                                  className="lazyload"
                                                  src="http://bizweb.dktcdn.net/100/308/325/themes/801947/assets/rolling.svg?1623316806453"
                                                  data-src="//bizweb.dktcdn.net/thumb/medium/100/308/325/products/h.jpg?v=1524537022723"
                                                  alt="Quả Kiwi xanh"
                                                />
                                              </a>
                                              <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                                                <form
                                                  action="https://dualeo-x.mysapo.net/cart/add"
                                                  method="post"
                                                  className="variants form-nut-grid margin-bottom-0"
                                                  data-id="product-actions-11480163"
                                                  encType="multipart/form-data"
                                                >
                                                  <div>
                                                    <input
                                                      type="hidden"
                                                      name="variantId"
                                                      defaultValue={17898169}
                                                    />
                                                    <button
                                                      className="btn-buy btn-cart btn btn-primary   left-to add_to_cart"
                                                      data-toggle="tooltip"
                                                      title="Mua hàng"
                                                    >
                                                      <i className="fa fa-shopping-bag" />
                                                    </button>
                                                    <a
                                                      href="cherry-do-canada-loai-to-14.html"
                                                      data-handle="cherry-do-canada-loai-to-14"
                                                      data-toggle="tooltip"
                                                      title="Xem nhanh"
                                                      className="btn-gray btn_view btn right-to quick-view"
                                                    >
                                                      <i className="fa fa-eye" />
                                                    </a>
                                                  </div>
                                                </form>
                                              </div>
                                            </div>
                                            <div className="product-info a-center">
                                              <h3 className="product-name">
                                                <a
                                                  href="cherry-do-canada-loai-to-14.html"
                                                  title="Quả Kiwi xanh"
                                                >
                                                  Quả Kiwi xanh
                                                </a>
                                              </h3>
                                              <div
                                                className="sapo-product-reviews-badge"
                                                data-id={11480163}
                                              />
                                              <div className="price-box clearfix">
                                                <div className="special-price">
                                                  <span className="price product-price">
                                                    250.000₫
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="item">
                                          <div className="product-box">
                                            <div className="product-thumbnail flexbox-grid">
                                              <a
                                                href="cherry-do-canada-loai-to-15.html"
                                                title="Chanh Dây đỏ Úc"
                                              >
                                                <img
                                                  className="lazyload"
                                                  src="http://bizweb.dktcdn.net/100/308/325/themes/801947/assets/rolling.svg?1623316806453"
                                                  data-src="//bizweb.dktcdn.net/thumb/medium/100/308/325/products/m80cacd71f2eb4db07280bf0bdfc8c.jpg?v=1524537020977"
                                                  alt="Chanh Dây đỏ Úc"
                                                />
                                              </a>
                                              <div className="sale-flash">
                                                <div className="before" />- 13%
                                              </div>
                                              <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                                                <form
                                                  action="https://dualeo-x.mysapo.net/cart/add"
                                                  method="post"
                                                  className="variants form-nut-grid margin-bottom-0"
                                                  data-id="product-actions-11480161"
                                                  encType="multipart/form-data"
                                                >
                                                  <div>
                                                    <input
                                                      type="hidden"
                                                      name="variantId"
                                                      defaultValue={17898167}
                                                    />
                                                    <button
                                                      className="btn-buy btn-cart btn btn-primary   left-to add_to_cart"
                                                      data-toggle="tooltip"
                                                      title="Mua hàng"
                                                    >
                                                      <i className="fa fa-shopping-bag" />
                                                    </button>
                                                    <a
                                                      href="cherry-do-canada-loai-to-15.html"
                                                      data-handle="cherry-do-canada-loai-to-15"
                                                      data-toggle="tooltip"
                                                      title="Xem nhanh"
                                                      className="btn-gray btn_view btn right-to quick-view"
                                                    >
                                                      <i className="fa fa-eye" />
                                                    </a>
                                                  </div>
                                                </form>
                                              </div>
                                            </div>
                                            <div className="product-info a-center">
                                              <h3 className="product-name">
                                                <a
                                                  href="cherry-do-canada-loai-to-15.html"
                                                  title="Chanh Dây đỏ Úc"
                                                >
                                                  Chanh Dây đỏ Úc
                                                </a>
                                              </h3>
                                              <div
                                                className="sapo-product-reviews-badge"
                                                data-id={11480161}
                                              />
                                              <div className="price-box clearfix">
                                                <div className="special-price">
                                                  <span className="price product-price">
                                                    400.000₫
                                                  </span>
                                                </div>
                                                <div className="old-price">
                                                  <span className="price product-price-old">
                                                    460.000₫
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="item">
                                          <div className="product-box">
                                            <div className="product-thumbnail flexbox-grid">
                                              <a
                                                href="cherry-do-canada-loai-to-16.html"
                                                title="Nho Đà Lạt"
                                              >
                                                <img
                                                  className="lazyload"
                                                  src="http://bizweb.dktcdn.net/100/308/325/themes/801947/assets/rolling.svg?1623316806453"
                                                  data-src="//bizweb.dktcdn.net/thumb/medium/100/308/325/products/9fc5027c8f66749fa51adee8c55688.jpg?v=1524537019237"
                                                  alt="Nho Đà Lạt"
                                                />
                                              </a>
                                              <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                                                <form
                                                  action="https://dualeo-x.mysapo.net/cart/add"
                                                  method="post"
                                                  className="variants form-nut-grid margin-bottom-0"
                                                  data-id="product-actions-11480160"
                                                  encType="multipart/form-data"
                                                >
                                                  <div>
                                                    <input
                                                      type="hidden"
                                                      name="variantId"
                                                      defaultValue={17898166}
                                                    />
                                                    <button
                                                      className="btn-buy btn-cart btn btn-primary   left-to add_to_cart"
                                                      data-toggle="tooltip"
                                                      title="Mua hàng"
                                                    >
                                                      <i className="fa fa-shopping-bag" />
                                                    </button>
                                                    <a
                                                      href="cherry-do-canada-loai-to-16.html"
                                                      data-handle="cherry-do-canada-loai-to-16"
                                                      data-toggle="tooltip"
                                                      title="Xem nhanh"
                                                      className="btn-gray btn_view btn right-to quick-view"
                                                    >
                                                      <i className="fa fa-eye" />
                                                    </a>
                                                  </div>
                                                </form>
                                              </div>
                                            </div>
                                            <div className="product-info a-center">
                                              <h3 className="product-name">
                                                <a
                                                  href="cherry-do-canada-loai-to-16.html"
                                                  title="Nho Đà Lạt"
                                                >
                                                  Nho Đà Lạt
                                                </a>
                                              </h3>
                                              <div
                                                className="sapo-product-reviews-badge"
                                                data-id={11480160}
                                              />
                                              <div className="price-box clearfix">
                                                <div className="special-price">
                                                  <span className="price product-price">
                                                    400.000₫
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="item">
                                          <div className="product-box">
                                            <div className="product-thumbnail flexbox-grid">
                                              <a
                                                href="cherry-do-canada-loai-to-2.html"
                                                title="Táo Ambrosia Mỹ"
                                              >
                                                <img
                                                  className="lazyload"
                                                  src="http://bizweb.dktcdn.net/100/308/325/themes/801947/assets/rolling.svg?1623316806453"
                                                  data-src="//bizweb.dktcdn.net/thumb/medium/100/308/325/products/c187fa9f7c2794b005d84fd1c3c984.jpg?v=1524537017123"
                                                  alt="Táo Ambrosia Mỹ"
                                                />
                                              </a>
                                              <div className="sale-flash">
                                                <div className="before" />- 32%
                                              </div>
                                              <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                                                <form
                                                  action="https://dualeo-x.mysapo.net/cart/add"
                                                  method="post"
                                                  className="variants form-nut-grid margin-bottom-0"
                                                  data-id="product-actions-11480159"
                                                  encType="multipart/form-data"
                                                >
                                                  <div>
                                                    <input
                                                      type="hidden"
                                                      name="variantId"
                                                      defaultValue={17898165}
                                                    />
                                                    <button
                                                      className="btn-buy btn-cart btn btn-primary   left-to add_to_cart"
                                                      data-toggle="tooltip"
                                                      title="Mua hàng"
                                                    >
                                                      <i className="fa fa-shopping-bag" />
                                                    </button>
                                                    <a
                                                      href="cherry-do-canada-loai-to-2.html"
                                                      data-handle="cherry-do-canada-loai-to-2"
                                                      data-toggle="tooltip"
                                                      title="Xem nhanh"
                                                      className="btn-gray btn_view btn right-to quick-view"
                                                    >
                                                      <i className="fa fa-eye" />
                                                    </a>
                                                  </div>
                                                </form>
                                              </div>
                                            </div>
                                            <div className="product-info a-center">
                                              <h3 className="product-name">
                                                <a
                                                  href="cherry-do-canada-loai-to-2.html"
                                                  title="Táo Ambrosia Mỹ"
                                                >
                                                  Táo Ambrosia Mỹ
                                                </a>
                                              </h3>
                                              <div
                                                className="sapo-product-reviews-badge"
                                                data-id={11480159}
                                              />
                                              <div className="price-box clearfix">
                                                <div className="special-price">
                                                  <span className="price product-price">
                                                    150.000₫
                                                  </span>
                                                </div>
                                                <div className="old-price">
                                                  <span className="price product-price-old">
                                                    220.000₫
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="item">
                                          <div className="product-box">
                                            <div className="product-thumbnail flexbox-grid">
                                              <a
                                                href="cherry-do-canada-loai-to-3.html"
                                                title="Dưa non Đà Lạt"
                                              >
                                                <img
                                                  className="lazyload"
                                                  src="http://bizweb.dktcdn.net/100/308/325/themes/801947/assets/rolling.svg?1623316806453"
                                                  data-src="//bizweb.dktcdn.net/thumb/medium/100/308/325/products/d30169502315345d454081fd527957.jpg?v=1524537015720"
                                                  alt="Dưa non Đà Lạt"
                                                />
                                              </a>
                                              <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                                                <form
                                                  action="https://dualeo-x.mysapo.net/cart/add"
                                                  method="post"
                                                  className="variants form-nut-grid margin-bottom-0"
                                                  data-id="product-actions-11480158"
                                                  encType="multipart/form-data"
                                                >
                                                  <div>
                                                    <input
                                                      type="hidden"
                                                      name="variantId"
                                                      defaultValue={17898164}
                                                    />
                                                    <button
                                                      className="btn-buy btn-cart btn btn-primary   left-to add_to_cart"
                                                      data-toggle="tooltip"
                                                      title="Mua hàng"
                                                    >
                                                      <i className="fa fa-shopping-bag" />
                                                    </button>
                                                    <a
                                                      href="cherry-do-canada-loai-to-3.html"
                                                      data-handle="cherry-do-canada-loai-to-3"
                                                      data-toggle="tooltip"
                                                      title="Xem nhanh"
                                                      className="btn-gray btn_view btn right-to quick-view"
                                                    >
                                                      <i className="fa fa-eye" />
                                                    </a>
                                                  </div>
                                                </form>
                                              </div>
                                            </div>
                                            <div className="product-info a-center">
                                              <h3 className="product-name">
                                                <a
                                                  href="cherry-do-canada-loai-to-3.html"
                                                  title="Dưa non Đà Lạt"
                                                >
                                                  Dưa non Đà Lạt
                                                </a>
                                              </h3>
                                              <div
                                                className="sapo-product-reviews-badge"
                                                data-id={11480158}
                                              />
                                              <div className="price-box clearfix">
                                                <div className="special-price">
                                                  <span className="price product-price">
                                                    150.000₫
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="item">
                                          <div className="product-box">
                                            <div className="product-thumbnail flexbox-grid">
                                              <a
                                                href="cherry-do-canada-loai-to-4.html"
                                                title="Táo Queen New Zealand 100"
                                              >
                                                <img
                                                  className="lazyload"
                                                  src="http://bizweb.dktcdn.net/100/308/325/themes/801947/assets/rolling.svg?1623316806453"
                                                  data-src="//bizweb.dktcdn.net/thumb/medium/100/308/325/products/g.jpg?v=1524537014070"
                                                  alt="Táo Queen New Zealand 100"
                                                />
                                              </a>
                                              <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                                                <form
                                                  action="https://dualeo-x.mysapo.net/cart/add"
                                                  method="post"
                                                  className="variants form-nut-grid margin-bottom-0"
                                                  data-id="product-actions-11480157"
                                                  encType="multipart/form-data"
                                                >
                                                  <div>
                                                    <input
                                                      type="hidden"
                                                      name="variantId"
                                                      defaultValue={17898163}
                                                    />
                                                    <button
                                                      className="btn-buy btn-cart btn btn-primary   left-to add_to_cart"
                                                      data-toggle="tooltip"
                                                      title="Mua hàng"
                                                    >
                                                      <i className="fa fa-shopping-bag" />
                                                    </button>
                                                    <a
                                                      href="cherry-do-canada-loai-to-4.html"
                                                      data-handle="cherry-do-canada-loai-to-4"
                                                      data-toggle="tooltip"
                                                      title="Xem nhanh"
                                                      className="btn-gray btn_view btn right-to quick-view"
                                                    >
                                                      <i className="fa fa-eye" />
                                                    </a>
                                                  </div>
                                                </form>
                                              </div>
                                            </div>
                                            <div className="product-info a-center">
                                              <h3 className="product-name">
                                                <a
                                                  href="cherry-do-canada-loai-to-4.html"
                                                  title="Táo Queen New Zealand 100"
                                                >
                                                  Táo Queen New Zealand 100
                                                </a>
                                              </h3>
                                              <div
                                                className="sapo-product-reviews-badge"
                                                data-id={11480157}
                                              />
                                              <div className="price-box clearfix">
                                                <div className="special-price">
                                                  <span className="price product-price">
                                                    150.000₫
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="item">
                                          <div className="product-box">
                                            <div className="product-thumbnail flexbox-grid">
                                              <a
                                                href="cherry-do-canada-loai-to-5.html"
                                                title="Táo xanh Mỹ"
                                              >
                                                <img
                                                  className="lazyload"
                                                  src="http://bizweb.dktcdn.net/100/308/325/themes/801947/assets/rolling.svg?1623316806453"
                                                  data-src="//bizweb.dktcdn.net/thumb/medium/100/308/325/products/12eee83f0ec4b241e1789242072a01.jpg?v=1524537012237"
                                                  alt="Táo xanh Mỹ"
                                                />
                                              </a>
                                              <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                                                <form
                                                  action="https://dualeo-x.mysapo.net/cart/add"
                                                  method="post"
                                                  className="variants form-nut-grid margin-bottom-0"
                                                  data-id="product-actions-11480156"
                                                  encType="multipart/form-data"
                                                >
                                                  <div>
                                                    <input
                                                      type="hidden"
                                                      name="variantId"
                                                      defaultValue={17898162}
                                                    />
                                                    <button
                                                      className="btn-buy btn-cart btn btn-primary   left-to add_to_cart"
                                                      data-toggle="tooltip"
                                                      title="Mua hàng"
                                                    >
                                                      <i className="fa fa-shopping-bag" />
                                                    </button>
                                                    <a
                                                      href="cherry-do-canada-loai-to-5.html"
                                                      data-handle="cherry-do-canada-loai-to-5"
                                                      data-toggle="tooltip"
                                                      title="Xem nhanh"
                                                      className="btn-gray btn_view btn right-to quick-view"
                                                    >
                                                      <i className="fa fa-eye" />
                                                    </a>
                                                  </div>
                                                </form>
                                              </div>
                                            </div>
                                            <div className="product-info a-center">
                                              <h3 className="product-name">
                                                <a
                                                  href="cherry-do-canada-loai-to-5.html"
                                                  title="Táo xanh Mỹ"
                                                >
                                                  Táo xanh Mỹ
                                                </a>
                                              </h3>
                                              <div
                                                className="sapo-product-reviews-badge"
                                                data-id={11480156}
                                              />
                                              <div className="price-box clearfix">
                                                <div className="special-price">
                                                  <span className="price product-price">
                                                    150.000₫
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="item">
                                          <div className="product-box">
                                            <div className="product-thumbnail flexbox-grid">
                                              <a
                                                href="cherry-do-canada-loai-to-6.html"
                                                title="Táo đỏ Mỹ"
                                              >
                                                <img
                                                  className="lazyload"
                                                  src="http://bizweb.dktcdn.net/100/308/325/themes/801947/assets/rolling.svg?1623316806453"
                                                  data-src="//bizweb.dktcdn.net/thumb/medium/100/308/325/products/61e09692c501c4e305b667180b518e.jpg?v=1524537010020"
                                                  alt="Táo đỏ Mỹ"
                                                />
                                              </a>
                                              <div className="sale-flash">
                                                <div className="before" />- 33%
                                              </div>
                                              <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                                                <form
                                                  action="https://dualeo-x.mysapo.net/cart/add"
                                                  method="post"
                                                  className="variants form-nut-grid margin-bottom-0"
                                                  data-id="product-actions-11480155"
                                                  encType="multipart/form-data"
                                                >
                                                  <div>
                                                    <input
                                                      type="hidden"
                                                      name="variantId"
                                                      defaultValue={17898161}
                                                    />
                                                    <button
                                                      className="btn-buy btn-cart btn btn-primary   left-to add_to_cart"
                                                      data-toggle="tooltip"
                                                      title="Mua hàng"
                                                    >
                                                      <i className="fa fa-shopping-bag" />
                                                    </button>
                                                    <a
                                                      href="cherry-do-canada-loai-to-6.html"
                                                      data-handle="cherry-do-canada-loai-to-6"
                                                      data-toggle="tooltip"
                                                      title="Xem nhanh"
                                                      className="btn-gray btn_view btn right-to quick-view"
                                                    >
                                                      <i className="fa fa-eye" />
                                                    </a>
                                                  </div>
                                                </form>
                                              </div>
                                            </div>
                                            <div className="product-info a-center">
                                              <h3 className="product-name">
                                                <a
                                                  href="cherry-do-canada-loai-to-6.html"
                                                  title="Táo đỏ Mỹ"
                                                >
                                                  Táo đỏ Mỹ
                                                </a>
                                              </h3>
                                              <div
                                                className="sapo-product-reviews-badge"
                                                data-id={11480155}
                                              />
                                              <div className="price-box clearfix">
                                                <div className="special-price">
                                                  <span className="price product-price">
                                                    120.000₫
                                                  </span>
                                                </div>
                                                <div className="old-price">
                                                  <span className="price product-price-old">
                                                    180.000₫
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="item">
                                          <div className="product-box">
                                            <div className="product-thumbnail flexbox-grid">
                                              <a
                                                href="cherry-do-canada-loai-to-7.html"
                                                title="Nấm tươi đạt tiêu chuẩn VIETGAP"
                                              >
                                                <img
                                                  className="lazyload"
                                                  src="http://bizweb.dktcdn.net/100/308/325/themes/801947/assets/rolling.svg?1623316806453"
                                                  data-src="//bizweb.dktcdn.net/thumb/medium/100/308/325/products/57260cff7944647a75931ace7f39e9.jpg?v=1524537009427"
                                                  alt="Nấm tươi đạt tiêu chuẩn VIETGAP"
                                                />
                                              </a>
                                              <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                                                <form
                                                  action="https://dualeo-x.mysapo.net/cart/add"
                                                  method="post"
                                                  className="variants form-nut-grid margin-bottom-0"
                                                  data-id="product-actions-11480154"
                                                  encType="multipart/form-data"
                                                >
                                                  <div>
                                                    <input
                                                      type="hidden"
                                                      name="variantId"
                                                      defaultValue={17898160}
                                                    />
                                                    <button
                                                      className="btn-buy btn-cart btn btn-primary   left-to add_to_cart"
                                                      data-toggle="tooltip"
                                                      title="Mua hàng"
                                                    >
                                                      <i className="fa fa-shopping-bag" />
                                                    </button>
                                                    <a
                                                      href="cherry-do-canada-loai-to-7.html"
                                                      data-handle="cherry-do-canada-loai-to-7"
                                                      data-toggle="tooltip"
                                                      title="Xem nhanh"
                                                      className="btn-gray btn_view btn right-to quick-view"
                                                    >
                                                      <i className="fa fa-eye" />
                                                    </a>
                                                  </div>
                                                </form>
                                              </div>
                                            </div>
                                            <div className="product-info a-center">
                                              <h3 className="product-name">
                                                <a
                                                  href="cherry-do-canada-loai-to-7.html"
                                                  title="Nấm tươi đạt tiêu chuẩn VIETGAP"
                                                >
                                                  Nấm tươi đạt tiêu chuẩn
                                                  VIETGAP
                                                </a>
                                              </h3>
                                              <div
                                                className="sapo-product-reviews-badge"
                                                data-id={11480154}
                                              />
                                              <div className="price-box clearfix">
                                                <div className="special-price">
                                                  <span className="price product-price">
                                                    250.000₫
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* /.products */}
                                    </div>
                                    <div className="tab-2 tab-content"></div>
                                    <div className="tab-3 tab-content"></div>
                                    <div className="tab-4 tab-content"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="awe-section-5" id="awe-section-5">
              <div className="section_banner">
                <div className="container">
                  <h2 className="hidden">Banner</h2>
                  <div className="banner-image-col-tab">
                    <div className=" ">
                      <div className="item px-4 mb-4">
                        <a href="#" className="clearfix">
                          <img
                            src="https://bizweb.dktcdn.net/100/308/325/themes/801947/assets/banner_coltab2_1.png?1623316806453"
                            alt="alt banner demo"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="awe-section-6" id="awe-section-6">
              <div className="section section-collection section-collection-3">
                <div className="container">
                  <div className="collection-border">
                    <div className="collection-main">
                      <div className="row ">
                        <div className="col-lg-12 col-sm-12">
                          <div
                            className="e-tabs not-dqtab ajax-tab-3"
                            data-section="ajax-tab-3"
                            data-view="grid_8"
                          >
                            <div className="row row-noGutter">
                              <div className="col-sm-12">
                                <div className="content">
                                  <div className="section-title">
                                    <h2>Thực phẩm khô</h2>
                                  </div>
                                  <div>
                                    <ul className="tabs tabs-title tab-mobile clearfix hidden-sm hidden-md hidden-lg">
                                      <li className="prev">
                                        <i className="fa fa-angle-left" />
                                      </li>
                                      <li
                                        className="tab-link tab-title hidden-sm hidden-md hidden-lg current tab-titlexs"
                                        data-tab="tab-1"
                                      >
                                        <span>Rau củ</span>
                                      </li>
                                      <li className="next">
                                        <i className="fa fa-angle-right" />
                                      </li>
                                    </ul>
                                    <ul className="tabs tabs-title ajax clearfix hidden-xs">
                                      <li
                                        className="tab-link has-content"
                                        data-tab="tab-1"
                                        data-url="/collections/all"
                                      >
                                        <span>Rau củ</span>
                                      </li>
                                      <li
                                        className="tab-link "
                                        data-tab="tab-2"
                                        data-url="/collections/all"
                                      >
                                        <span>Hoa quả</span>
                                      </li>
                                      <li
                                        className="tab-link "
                                        data-tab="tab-3"
                                        data-url="/collections/all"
                                      >
                                        <span>Thịt</span>
                                      </li>
                                      <li
                                        className="tab-link "
                                        data-tab="tab-4"
                                        data-url="/collections/all"
                                      >
                                        <span>Hải sản</span>
                                      </li>
                                    </ul>
                                    <div className="tab-1 tab-content">
                                      <div className="products products-view-grid">
                                        <div className="row">
                                          <div className="col-xs-6 col-xss-6 col-sm-4 col-md-3 col-lg-3">
                                            <div className="product-box">
                                              <div className="product-thumbnail flexbox-grid">
                                                <a
                                                  href="cherry-do-canada-loai-to.html"
                                                  title="Vải thiều loại to"
                                                >
                                                  <img
                                                    className="lazyload"
                                                    src="http://bizweb.dktcdn.net/100/308/325/themes/801947/assets/rolling.svg?1623316806453"
                                                    data-src="//bizweb.dktcdn.net/thumb/medium/100/308/325/products/kf57fd708888943c073792a327aeb5.jpg?v=1524537033277"
                                                    alt="Vải thiều loại to"
                                                  />
                                                </a>
                                                <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                                                  <form
                                                    action="https://dualeo-x.mysapo.net/cart/add"
                                                    method="post"
                                                    className="variants form-nut-grid margin-bottom-0"
                                                    data-id="product-actions-11480175"
                                                    encType="multipart/form-data"
                                                  >
                                                    <div>
                                                      <input
                                                        type="hidden"
                                                        name="variantId"
                                                        defaultValue={17898181}
                                                      />
                                                      <button
                                                        className="btn-buy btn-cart btn btn-primary   left-to add_to_cart"
                                                        data-toggle="tooltip"
                                                        title="Mua hàng"
                                                      >
                                                        <i className="fa fa-shopping-bag" />
                                                      </button>
                                                      <a
                                                        href="cherry-do-canada-loai-to.html"
                                                        data-handle="cherry-do-canada-loai-to"
                                                        data-toggle="tooltip"
                                                        title="Xem nhanh"
                                                        className="btn-gray btn_view btn right-to quick-view"
                                                      >
                                                        <i className="fa fa-eye" />
                                                      </a>
                                                    </div>
                                                  </form>
                                                </div>
                                              </div>
                                              <div className="product-info a-center">
                                                <h3 className="product-name">
                                                  <a
                                                    href="cherry-do-canada-loai-to.html"
                                                    title="Vải thiều loại to"
                                                  >
                                                    Vải thiều loại to
                                                  </a>
                                                </h3>
                                                <div
                                                  className="sapo-product-reviews-badge"
                                                  data-id={11480175}
                                                />
                                                <div className="price-box clearfix">
                                                  <div className="special-price">
                                                    <span className="price product-price">
                                                      80.000₫
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-xs-6 col-xss-6 col-sm-4 col-md-3 col-lg-3">
                                            <div className="product-box">
                                              <div className="product-thumbnail flexbox-grid">
                                                <a
                                                  href="cherry-do-canada-loai-to-1.html"
                                                  title="Hồng đỏ Mỹ"
                                                >
                                                  <img
                                                    className="lazyload"
                                                    src="http://bizweb.dktcdn.net/100/308/325/themes/801947/assets/rolling.svg?1623316806453"
                                                    data-src="//bizweb.dktcdn.net/thumb/medium/100/308/325/products/x.jpg?v=1524537031717"
                                                    alt="Hồng đỏ Mỹ"
                                                  />
                                                </a>
                                                <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                                                  <form
                                                    action="https://dualeo-x.mysapo.net/cart/add"
                                                    method="post"
                                                    className="variants form-nut-grid margin-bottom-0"
                                                    data-id="product-actions-11480172"
                                                    encType="multipart/form-data"
                                                  >
                                                    <div>
                                                      <input
                                                        type="hidden"
                                                        name="variantId"
                                                        defaultValue={17898178}
                                                      />
                                                      <button
                                                        className="btn-buy btn-cart btn btn-primary   left-to add_to_cart"
                                                        data-toggle="tooltip"
                                                        title="Mua hàng"
                                                      >
                                                        <i className="fa fa-shopping-bag" />
                                                      </button>
                                                      <a
                                                        href="cherry-do-canada-loai-to-1.html"
                                                        data-handle="cherry-do-canada-loai-to-1"
                                                        data-toggle="tooltip"
                                                        title="Xem nhanh"
                                                        className="btn-gray btn_view btn right-to quick-view"
                                                      >
                                                        <i className="fa fa-eye" />
                                                      </a>
                                                    </div>
                                                  </form>
                                                </div>
                                              </div>
                                              <div className="product-info a-center">
                                                <h3 className="product-name">
                                                  <a
                                                    href="cherry-do-canada-loai-to-1.html"
                                                    title="Hồng đỏ Mỹ"
                                                  >
                                                    Hồng đỏ Mỹ
                                                  </a>
                                                </h3>
                                                <div
                                                  className="sapo-product-reviews-badge"
                                                  data-id={11480172}
                                                />
                                                <div className="price-box clearfix">
                                                  <div className="special-price">
                                                    <span className="price product-price">
                                                      150.000₫
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-xs-6 col-xss-6 col-sm-4 col-md-3 col-lg-3">
                                            <div className="product-box">
                                              <div className="product-thumbnail flexbox-grid">
                                                <a
                                                  href="cherry-do-canada-loai-to-10.html"
                                                  title="Dưa leo Đà Lạt"
                                                >
                                                  <img
                                                    className="lazyload"
                                                    src="http://bizweb.dktcdn.net/100/308/325/themes/801947/assets/rolling.svg?1623316806453"
                                                    data-src="//bizweb.dktcdn.net/thumb/medium/100/308/325/products/43350e0a3ce5e4aa54ddaf90d33728.jpg?v=1524537029390"
                                                    alt="Dưa leo Đà Lạt"
                                                  />
                                                </a>
                                                <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                                                  <form
                                                    action="https://dualeo-x.mysapo.net/cart/add"
                                                    method="post"
                                                    className="variants form-nut-grid margin-bottom-0"
                                                    data-id="product-actions-11480168"
                                                    encType="multipart/form-data"
                                                  >
                                                    <div>
                                                      <input
                                                        type="hidden"
                                                        name="variantId"
                                                        defaultValue={17898174}
                                                      />
                                                      <button
                                                        className="btn-buy btn-cart btn btn-primary   left-to add_to_cart"
                                                        data-toggle="tooltip"
                                                        title="Mua hàng"
                                                      >
                                                        <i className="fa fa-shopping-bag" />
                                                      </button>
                                                      <a
                                                        href="cherry-do-canada-loai-to-10.html"
                                                        data-handle="cherry-do-canada-loai-to-10"
                                                        data-toggle="tooltip"
                                                        title="Xem nhanh"
                                                        className="btn-gray btn_view btn right-to quick-view"
                                                      >
                                                        <i className="fa fa-eye" />
                                                      </a>
                                                    </div>
                                                  </form>
                                                </div>
                                              </div>
                                              <div className="product-info a-center">
                                                <h3 className="product-name">
                                                  <a
                                                    href="cherry-do-canada-loai-to-10.html"
                                                    title="Dưa leo Đà Lạt"
                                                  >
                                                    Dưa leo Đà Lạt
                                                  </a>
                                                </h3>
                                                <div
                                                  className="sapo-product-reviews-badge"
                                                  data-id={11480168}
                                                />
                                                <div className="price-box clearfix">
                                                  <div className="special-price">
                                                    <span className="price product-price">
                                                      65.000₫
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-xs-6 col-xss-6 col-sm-4 col-md-3 col-lg-3">
                                            <div className="product-box">
                                              <div className="product-thumbnail flexbox-grid">
                                                <a
                                                  href="cherry-do-canada-loai-to-11.html"
                                                  title="Cà chua Đà Lạt"
                                                >
                                                  <img
                                                    className="lazyload"
                                                    src="http://bizweb.dktcdn.net/100/308/325/themes/801947/assets/rolling.svg?1623316806453"
                                                    data-src="//bizweb.dktcdn.net/thumb/medium/100/308/325/products/sss.jpg?v=1524537027550"
                                                    alt="Cà chua Đà Lạt"
                                                  />
                                                </a>
                                                <div className="sale-flash">
                                                  <div className="before" />-
                                                  33%
                                                </div>
                                                <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                                                  <form
                                                    action="https://dualeo-x.mysapo.net/cart/add"
                                                    method="post"
                                                    className="variants form-nut-grid margin-bottom-0"
                                                    data-id="product-actions-11480167"
                                                    encType="multipart/form-data"
                                                  >
                                                    <div>
                                                      <input
                                                        type="hidden"
                                                        name="variantId"
                                                        defaultValue={17898173}
                                                      />
                                                      <button
                                                        className="btn-buy btn-cart btn btn-primary   left-to add_to_cart"
                                                        data-toggle="tooltip"
                                                        title="Mua hàng"
                                                      >
                                                        <i className="fa fa-shopping-bag" />
                                                      </button>
                                                      <a
                                                        href="cherry-do-canada-loai-to-11.html"
                                                        data-handle="cherry-do-canada-loai-to-11"
                                                        data-toggle="tooltip"
                                                        title="Xem nhanh"
                                                        className="btn-gray btn_view btn right-to quick-view"
                                                      >
                                                        <i className="fa fa-eye" />
                                                      </a>
                                                    </div>
                                                  </form>
                                                </div>
                                              </div>
                                              <div className="product-info a-center">
                                                <h3 className="product-name">
                                                  <a
                                                    href="cherry-do-canada-loai-to-11.html"
                                                    title="Cà chua Đà Lạt"
                                                  >
                                                    Cà chua Đà Lạt
                                                  </a>
                                                </h3>
                                                <div
                                                  className="sapo-product-reviews-badge"
                                                  data-id={11480167}
                                                />
                                                <div className="price-box clearfix">
                                                  <div className="special-price">
                                                    <span className="price product-price">
                                                      30.000₫
                                                    </span>
                                                  </div>
                                                  <div className="old-price">
                                                    <span className="price product-price-old">
                                                      45.000₫
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-xs-6 col-xss-6 col-sm-4 col-md-3 col-lg-3">
                                            <div className="product-box">
                                              <div className="product-thumbnail flexbox-grid">
                                                <a
                                                  href="cherry-do-canada-loai-to-12.html"
                                                  title="Nho đỏ không hạt ÚC"
                                                >
                                                  <img
                                                    className="lazyload"
                                                    src="http://bizweb.dktcdn.net/100/308/325/themes/801947/assets/rolling.svg?1623316806453"
                                                    data-src="//bizweb.dktcdn.net/thumb/medium/100/308/325/products/nho1.jpg?v=1524537026310"
                                                    alt="Nho đỏ không hạt ÚC"
                                                  />
                                                </a>
                                                <div className="sale-flash">
                                                  <div className="before" />-
                                                  33%
                                                </div>
                                                <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                                                  <form
                                                    action="https://dualeo-x.mysapo.net/cart/add"
                                                    method="post"
                                                    className="variants form-nut-grid margin-bottom-0"
                                                    data-id="product-actions-11480166"
                                                    encType="multipart/form-data"
                                                  >
                                                    <div>
                                                      <input
                                                        type="hidden"
                                                        name="variantId"
                                                        defaultValue={17898172}
                                                      />
                                                      <button
                                                        className="btn-buy btn-cart btn btn-primary   left-to add_to_cart"
                                                        data-toggle="tooltip"
                                                        title="Mua hàng"
                                                      >
                                                        <i className="fa fa-shopping-bag" />
                                                      </button>
                                                      <a
                                                        href="cherry-do-canada-loai-to-12.html"
                                                        data-handle="cherry-do-canada-loai-to-12"
                                                        data-toggle="tooltip"
                                                        title="Xem nhanh"
                                                        className="btn-gray btn_view btn right-to quick-view"
                                                      >
                                                        <i className="fa fa-eye" />
                                                      </a>
                                                    </div>
                                                  </form>
                                                </div>
                                              </div>
                                              <div className="product-info a-center">
                                                <h3 className="product-name">
                                                  <a
                                                    href="cherry-do-canada-loai-to-12.html"
                                                    title="Nho đỏ không hạt ÚC"
                                                  >
                                                    Nho đỏ không hạt ÚC
                                                  </a>
                                                </h3>
                                                <div
                                                  className="sapo-product-reviews-badge"
                                                  data-id={11480166}
                                                />
                                                <div className="price-box clearfix">
                                                  <div className="special-price">
                                                    <span className="price product-price">
                                                      30.000₫
                                                    </span>
                                                  </div>
                                                  <div className="old-price">
                                                    <span className="price product-price-old">
                                                      45.000₫
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-xs-6 col-xss-6 col-sm-4 col-md-3 col-lg-3">
                                            <div className="product-box">
                                              <div className="product-thumbnail flexbox-grid">
                                                <a
                                                  href="cherry-do-canada-loai-to-13.html"
                                                  title="Dâu tây loại 1"
                                                >
                                                  <img
                                                    className="lazyload"
                                                    src="http://bizweb.dktcdn.net/100/308/325/themes/801947/assets/rolling.svg?1623316806453"
                                                    data-src="//bizweb.dktcdn.net/thumb/medium/100/308/325/products/700217a9a6915485ca0ff94fd9d0e6.jpg?v=1524537024353"
                                                    alt="Dâu tây loại 1"
                                                  />
                                                </a>
                                                <div className="sale-flash">
                                                  <div className="before" />-
                                                  22%
                                                </div>
                                                <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                                                  <form
                                                    action="https://dualeo-x.mysapo.net/cart/add"
                                                    method="post"
                                                    className="variants form-nut-grid margin-bottom-0"
                                                    data-id="product-actions-11480164"
                                                    encType="multipart/form-data"
                                                  >
                                                    <div>
                                                      <input
                                                        type="hidden"
                                                        name="variantId"
                                                        defaultValue={17898170}
                                                      />
                                                      <button
                                                        className="btn-buy btn-cart btn btn-primary   left-to add_to_cart"
                                                        data-toggle="tooltip"
                                                        title="Mua hàng"
                                                      >
                                                        <i className="fa fa-shopping-bag" />
                                                      </button>
                                                      <a
                                                        href="cherry-do-canada-loai-to-13.html"
                                                        data-handle="cherry-do-canada-loai-to-13"
                                                        data-toggle="tooltip"
                                                        title="Xem nhanh"
                                                        className="btn-gray btn_view btn right-to quick-view"
                                                      >
                                                        <i className="fa fa-eye" />
                                                      </a>
                                                    </div>
                                                  </form>
                                                </div>
                                              </div>
                                              <div className="product-info a-center">
                                                <h3 className="product-name">
                                                  <a
                                                    href="cherry-do-canada-loai-to-13.html"
                                                    title="Dâu tây loại 1"
                                                  >
                                                    Dâu tây loại 1
                                                  </a>
                                                </h3>
                                                <div
                                                  className="sapo-product-reviews-badge"
                                                  data-id={11480164}
                                                />
                                                <div className="price-box clearfix">
                                                  <div className="special-price">
                                                    <span className="price product-price">
                                                      250.000₫
                                                    </span>
                                                  </div>
                                                  <div className="old-price">
                                                    <span className="price product-price-old">
                                                      320.000₫
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-xs-6 col-xss-6 col-sm-4 col-md-3 col-lg-3">
                                            <div className="product-box">
                                              <div className="product-thumbnail flexbox-grid">
                                                <a
                                                  href="cherry-do-canada-loai-to-14.html"
                                                  title="Quả Kiwi xanh"
                                                >
                                                  <img
                                                    className="lazyload"
                                                    src="http://bizweb.dktcdn.net/100/308/325/themes/801947/assets/rolling.svg?1623316806453"
                                                    data-src="//bizweb.dktcdn.net/thumb/medium/100/308/325/products/h.jpg?v=1524537022723"
                                                    alt="Quả Kiwi xanh"
                                                  />
                                                </a>
                                                <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                                                  <form
                                                    action="https://dualeo-x.mysapo.net/cart/add"
                                                    method="post"
                                                    className="variants form-nut-grid margin-bottom-0"
                                                    data-id="product-actions-11480163"
                                                    encType="multipart/form-data"
                                                  >
                                                    <div>
                                                      <input
                                                        type="hidden"
                                                        name="variantId"
                                                        defaultValue={17898169}
                                                      />
                                                      <button
                                                        className="btn-buy btn-cart btn btn-primary   left-to add_to_cart"
                                                        data-toggle="tooltip"
                                                        title="Mua hàng"
                                                      >
                                                        <i className="fa fa-shopping-bag" />
                                                      </button>
                                                      <a
                                                        href="cherry-do-canada-loai-to-14.html"
                                                        data-handle="cherry-do-canada-loai-to-14"
                                                        data-toggle="tooltip"
                                                        title="Xem nhanh"
                                                        className="btn-gray btn_view btn right-to quick-view"
                                                      >
                                                        <i className="fa fa-eye" />
                                                      </a>
                                                    </div>
                                                  </form>
                                                </div>
                                              </div>
                                              <div className="product-info a-center">
                                                <h3 className="product-name">
                                                  <a
                                                    href="cherry-do-canada-loai-to-14.html"
                                                    title="Quả Kiwi xanh"
                                                  >
                                                    Quả Kiwi xanh
                                                  </a>
                                                </h3>
                                                <div
                                                  className="sapo-product-reviews-badge"
                                                  data-id={11480163}
                                                />
                                                <div className="price-box clearfix">
                                                  <div className="special-price">
                                                    <span className="price product-price">
                                                      250.000₫
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-xs-6 col-xss-6 col-sm-4 col-md-3 col-lg-3">
                                            <div className="product-box">
                                              <div className="product-thumbnail flexbox-grid">
                                                <a
                                                  href="cherry-do-canada-loai-to-15.html"
                                                  title="Chanh Dây đỏ Úc"
                                                >
                                                  <img
                                                    className="lazyload"
                                                    src="http://bizweb.dktcdn.net/100/308/325/themes/801947/assets/rolling.svg?1623316806453"
                                                    data-src="//bizweb.dktcdn.net/thumb/medium/100/308/325/products/m80cacd71f2eb4db07280bf0bdfc8c.jpg?v=1524537020977"
                                                    alt="Chanh Dây đỏ Úc"
                                                  />
                                                </a>
                                                <div className="sale-flash">
                                                  <div className="before" />-
                                                  13%
                                                </div>
                                                <div className="product-action hidden-md hidden-sm hidden-xs clearfix">
                                                  <form
                                                    action="https://dualeo-x.mysapo.net/cart/add"
                                                    method="post"
                                                    className="variants form-nut-grid margin-bottom-0"
                                                    data-id="product-actions-11480161"
                                                    encType="multipart/form-data"
                                                  >
                                                    <div>
                                                      <input
                                                        type="hidden"
                                                        name="variantId"
                                                        defaultValue={17898167}
                                                      />
                                                      <button
                                                        className="btn-buy btn-cart btn btn-primary   left-to add_to_cart"
                                                        data-toggle="tooltip"
                                                        title="Mua hàng"
                                                      >
                                                        <i className="fa fa-shopping-bag" />
                                                      </button>
                                                      <a
                                                        href="cherry-do-canada-loai-to-15.html"
                                                        data-handle="cherry-do-canada-loai-to-15"
                                                        data-toggle="tooltip"
                                                        title="Xem nhanh"
                                                        className="btn-gray btn_view btn right-to quick-view"
                                                      >
                                                        <i className="fa fa-eye" />
                                                      </a>
                                                    </div>
                                                  </form>
                                                </div>
                                              </div>
                                              <div className="product-info a-center">
                                                <h3 className="product-name">
                                                  <a
                                                    href="cherry-do-canada-loai-to-15.html"
                                                    title="Chanh Dây đỏ Úc"
                                                  >
                                                    Chanh Dây đỏ Úc
                                                  </a>
                                                </h3>
                                                <div
                                                  className="sapo-product-reviews-badge"
                                                  data-id={11480161}
                                                />
                                                <div className="price-box clearfix">
                                                  <div className="special-price">
                                                    <span className="price product-price">
                                                      400.000₫
                                                    </span>
                                                  </div>
                                                  <div className="old-price">
                                                    <span className="price product-price-old">
                                                      460.000₫
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* /.products */}
                                    </div>
                                    <div className="tab-2 tab-content"></div>
                                    <div className="tab-3 tab-content"></div>
                                    <div className="tab-4 tab-content"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="awe-section-7" id="awe-section-7">
              <div className="section_banner">
                <div className="container">
                  <h2 className="hidden">Banner</h2>
                  <div className="banner-image-col-tab">
                    <div className="row d-md-flex">
                      <div className="item px-4 mb-4">
                        <a href="#" className="clearfix">
                          <img
                            src="https://bizweb.dktcdn.net/100/308/325/themes/801947/assets/banner_coltab2_1.png?1623316806453"
                            alt="alt banner demo"
                          />
                        </a>
                      </div>
                      <div className="item px-4 mb-4">
                        <a href="#" className="clearfix">
                          <img
                            src="https://bizweb.dktcdn.net/100/308/325/themes/801947/assets/banner_coltab2_1.png?1623316806453"
                            alt="alt banner demo"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {info.new_posts.length > 0 && (
                  <Blog posts={info.new_posts} />
                )} 
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

            <section className="awe-section-9" id="awe-section-9">
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
                  {/* /.products */}
                </div>
              </div>
            </section>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
}
export default HomePage;
