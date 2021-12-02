import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import BannerAds from "./child/HomePage3/BannerAds";
import Header from "../../components/Header";
import Blog from "./child/HomePage5/Blog";
import { constants as c } from "../../constants";
import ProductSection from "./child/HomePage5/Product";
import { appActions } from "../../actions/appActions";
import PageLoading from "../../components/PageLoading";
import BannerMain from "./child/HomePage4/BannerMain";
import HomeBanner from "./child/HomePage5/HomeBanner";
import ProductDeal from "./child/HomePage5/ProductDeal";

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
  return (
    <React.Fragment>
      <Header categories={info.categories} />
      <main>
        <div id="ctl00_divCenter" className="middle-fullwidth">
          {homeInfo.status === c.LOADING ? (
            <PageLoading />
          ) : (
            <React.Fragment>
              <HomeBanner banners_ads={homeInfo.banner_ads.type_0} banners={info.banners} categories={info.categories} />
              {info.sale_products.length > 0 && (
                <ProductDeal
                banners_ads={homeInfo.banner_ads.type_3}

                title="Sản phẩm giảm giá"
                products={info.sale_products}
                />
              )}
             <section className="home-3 section">
            <div className="Module Module-229">
              <div className="ModuleContent">
              {info.new_products.length > 0 && (
                   <ProductSection
                   title="Sản phẩm mới"
                   products={info.new_products}
                 />
              )}
             
             {info.hot_products.length > 0 && (
                   <ProductSection
                   title="Sản phẩm nổi bật"
                   products={info.hot_products}
                 />
              )}
              </div>
            </div>
          </section>
          {info.new_posts.length > 0 && <Blog posts={info.new_posts} />}


            </React.Fragment>
          )}

    
 
        </div>
      </main>
    </React.Fragment>
  );
}
export default HomePage;
