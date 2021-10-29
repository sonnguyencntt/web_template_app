import React, { Fragment, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Header";
import Blog from "./child/HomePage3/Blog";
import { constants as c } from "../../constants";
import CategoryProduct from "./child/HomePage3/CategoryProduct";
import Banner from "./child/HomePage3/Banner";
import Banner1 from "./child/HomePage3/Banner1";

import Product from "./child/HomePage3/Product";
import SpecialProduct from "./child/HomePage3/SpecialProduct";

import { appActions } from "../../actions/appActions";
import PageLoading from "../../components/PageLoading";
function HomePage3(props) {
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
  return (
    <React.Fragment>
      <Header />
      {homeInfo.status === c.LOADING ? (
        <PageLoading />
      ) : (
        <React.Fragment>
          {<Banner banners={info.banners} />}

          {info.hot_products.length > 0 && (
            <SpecialProduct products={info.hot_products} />
          )}
          {<Banner1 banners={info.banners} />}
        
        <div class="container">
          
        <div class="row">
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <CategoryProduct categories = {info.categories}/>
            </div>
            <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
              {info.hot_products.length > 0 && (
                <Product
                  title="Sản phẩm nổi bật"
                  categories={info.categories}
                  products={info.hot_products}
                />
              )}
              {info.new_products.length > 0 && (
                <Product
                  title="Sản phẩm mới"
                  categories={info.categories}
                  products={info.new_products}
                />
              )}
              {info.sale_products.length > 0 && (
                <Product
                  title="Sản phẩm giảm giá"
                  categories={info.categories}
                  products={info.sale_products}
                />
              )}
            </div>{" "}
          </div>
        </div>
        

          <section className="awe-section-8">
            <div className="delivery_express">
              <div className="container">
                <div
                  className="bg"
                  style={{
                    background: `url("https://bizweb.dktcdn.net/100/431/449/themes/834425/assets/bg_delivery_express2.jpg?1634023014212")`,
                  }}
                >
                  <h2>Giao hàng miễn phí tận nhà trong vòng 24h</h2>
                  <a href="#" title="Tìm hiểu thêm">
                    Tìm hiểu thêm
                  </a>
                </div>
              </div>
            </div>
          </section>
          {info.new_posts.length > 0 && <Blog posts={info.new_posts} />}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
export default HomePage3;
