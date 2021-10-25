import Slider from "react-slick";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
export default function HomeBanner(props) {
  const { banners, categories, discountProducts } = props;
  const appTheme = useSelector((state) => state.app.appTheme);

  function handleCateClick(id) {
    window.location.href = `/danh-sach-san-pham?danh-muc-ids=${id}`;
  }
  return (
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
                                      action="https://bizweb.dktcdn.net/cart/add"
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
                                      action="https://bizweb.dktcdn.net/cart/add"
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
                                      action="https://bizweb.dktcdn.net/cart/add"
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
                                      action="https://bizweb.dktcdn.net/cart/add"
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
  );
}


