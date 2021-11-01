import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Header";
import Blog from "./child/HomePage2/Blog";
import { constants as c } from "../../constants";
import CategoryProduct from "./child/HomePage2/CategoryProduct";
import Banner from "./child/HomePage2/Banner";
import Product from "./child/HomePage2/Product";
import BannerAds from "./child/HomePage2/BannerAds";

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
  console.log(homeInfo);
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
              </React.Fragment>
            }
            {homeInfo.banner_ads.type_0.length > 0 && <BannerAds banners={homeInfo.banner_ads.type_0} />}
            {homeInfo.banner_ads.type_1.length > 0 && <BannerAds banners={homeInfo.banner_ads.type_1} />}

            {info.hot_products.length > 0 && (
              <Product title="Sản phẩm nổi bật" products={info.hot_products} />
            )}
            {homeInfo.banner_ads.type_2.length > 0 && <BannerAds banners={homeInfo.banner_ads.type_2} />}

            {info.new_products.length > 0 && (
              <Product title="Sản phẩm mới" products={info.new_products} />
            )}
                        {homeInfo.banner_ads.type_3.length > 0 && <BannerAds banners={homeInfo.banner_ads.type_3} />}

            {info.sale_products.length > 0 && (
              <Product
                title="Sản phẩm giảm giá"
                products={info.sale_products}
              />
            )}
            {homeInfo.banner_ads.type_4.length > 0 && <BannerAds banners={homeInfo.banner_ads.type_4} />}
            {info.new_posts.length > 0 && <Blog posts={info.new_posts} />}
            {homeInfo.banner_ads.type_5.length > 0 && <BannerAds banners={homeInfo.banner_ads.type_5} />}

          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
}
export default HomePage;
