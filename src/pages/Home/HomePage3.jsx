import React, { Fragment, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Header";
import Blog from "./child/HomePage3/Blog";
import { constants as c } from "../../constants";
import CategoryProduct from "./child/HomePage3/CategoryProduct";
import CategoryProduct1 from "./child/HomePage3/CategoryProduct1";

import Banner from "./child/HomePage3/Banner";
import BannerAds from "./child/HomePage3/BannerAds";

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
          <CategoryProduct1 categories={info.categories} />

          {info.hot_products.length > 0 && (
            <SpecialProduct products={info.hot_products} />
          )}
          {homeInfo.banner_ads.type_0.length > 0 && (
            <BannerAds banners={homeInfo.banner_ads.type_0} />
          )}

          <div class="container">
            <div class="row">
              <div class="col-xs-0 col-sm-0 col-md-3 col-lg-3">
                <CategoryProduct categories={info.categories} homeInfo = {homeInfo} />
              </div>
              <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                {homeInfo.banner_ads.type_3.length > 0 && (
                  <BannerAds banners={homeInfo.banner_ads.type_3} />
                )}

                {info.sale_products.length > 0 && (
                  <Product
                    title="Sản phẩm giảm giá"
                    categories={info.categories}
                    products={info.sale_products}
                  />
                )}
                {homeInfo.banner_ads.type_2.length > 0 && (
                  <BannerAds banners={homeInfo.banner_ads.type_2} />
                )}

                {info.new_products.length > 0 && (
                  <Product
                    title="Sản phẩm mới"
                    categories={info.categories}
                    products={info.new_products}
                  />
                )}

                {homeInfo.banner_ads.type_1.length > 0 && (
                  <BannerAds banners={homeInfo.banner_ads.type_1} />
                )}

                {info.hot_products.length > 0 && (
                  <Product
                    title="Sản phẩm nổi bật"
                    categories={info.categories}
                    products={info.hot_products}
                  />
                )}
              </div>{" "}
            </div>
          </div>

          {homeInfo.banner_ads.type_4.length > 0 && (
            <BannerAds banners={homeInfo.banner_ads.type_4} />
          )}

          {info.new_posts.length > 0 && <Blog posts={info.new_posts} />}
          {homeInfo.banner_ads.type_5.length > 0 && (
            <BannerAds banners={homeInfo.banner_ads.type_5} />
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
export default HomePage3;
