import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import BannerAds from "./child/HomePage3/BannerAds";
import Header from "../../components/Header";
import Blog from "./child/HomePage4/Blog";
import { constants as c } from "../../constants";
import ProductSection from "./child/HomePage4/Product";
import { appActions } from "../../actions/appActions";
import PageLoading from "../../components/PageLoading";
import BannerMain from "./child/HomePage4/BannerMain";

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
      <div className="main-index">
        {homeInfo.status === c.LOADING ? (
          <PageLoading />
        ) : (
          <React.Fragment>
            <BannerMain banners={info.banners} />
            <div style = {{marginTop : "100px"}}></div>
            {homeInfo.banner_ads.type_0.length > 0 && (
              <BannerAds banners={homeInfo.banner_ads.type_0} />
            )}
            {homeInfo.banner_ads.type_1.length > 0 && (
              <BannerAds banners={homeInfo.banner_ads.type_1} />
            )}

            {info.hot_products.length > 0 && (
              <ProductSection
                title="Sản phẩm nổi bật"
                products={info.hot_products}
              />
            )}
            {homeInfo.banner_ads.type_2.length > 0 && (
              <BannerAds banners={homeInfo.banner_ads.type_2} />
            )}

            {info.new_products.length > 0 && (
              <ProductSection
                title="Sản phẩm mới"
                products={info.new_products}
              />
            )}
            {homeInfo.banner_ads.type_3.length > 0 && (
              <BannerAds banners={homeInfo.banner_ads.type_3} />
            )}

            {info.sale_products.length > 0 && (
              <ProductSection
                title="Sản phẩm giảm giá"
                products={info.sale_products}
              />
            )}

            {homeInfo.banner_ads.type_4.length > 0 && (
              <BannerAds banners={homeInfo.banner_ads.type_4} />
            )}

            {info.new_posts.length > 0 && <Blog posts={info.new_posts} />}
            {homeInfo.banner_ads.type_5.length > 0 && (
              <BannerAds banners={homeInfo.banner_ads.type_5} />
            )}
          </React.Fragment>
        )}
        \
        {/* <div className="section_blog">
    <div className="container">
      <div className="swap">
        <h2 className="title-block upscape">
          <a href="tin-tuc.html" title="Tin tức mới nhất">Tin tức mới nhất</a>
        </h2>
        <div className="row blogs_mobile_base">
          <div className="col-lg-6 col-12">
            <div className="item_blog_base">
              <a className="thumb" href="mau-tay-andrea-chuong-vay-ngu-xuyen-thau.html" title="Mẫu Tây Andrea chuộng váy ngủ xuyên thấu">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/100/434/926/articles/1556164314-967-avar-an-1556101437-width640height480.jpg?v=1629006171043" alt="Mẫu Tây Andrea chuộng váy ngủ xuyên thấu" className="lazyload img-responsive" />
              </a>
              <div className="content_blog clearfix">
                <div className="toparticle">
                  <span>15/08/2021</span>&nbsp;-&nbsp;<span>bởi: Ego Creative</span>
                </div>
                <h3><a href="mau-tay-andrea-chuong-vay-ngu-xuyen-thau.html" title="Mẫu Tây Andrea chuộng váy ngủ xuyên thấu" className="a-title">Mẫu Tây Andrea chuộng váy ngủ xuyên
                    thấu</a></h3>
                <p>
                  Andrea Aybar là người mẫu gốc Tây Ba Nha. Nhưng từ khi còn rất nhỏ, cô đã cùng
                  gia đình chuyển tới Việt Nam sinh sống và làm việc. Vì thế, Việt Nam được coi
                  như là quê hương thứ 2 của nàng mẫu xin...
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="wraplog">
              <div className="w-100 b-list">
                <div className="item_blog_base">
                  <a className="thumb" href="8-meo-giup-ban-chon-quan-jean-trong-mo-ma-khong-can-den-shop.html" title="8 mẹo giúp bạn chọn quần jean trong mơ mà không cần đến shop">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/100/434/926/articles/image001a.jpg?v=1629005966930" alt="8 mẹo giúp bạn chọn quần jean trong mơ mà không cần đến shop" className="lazyload img-responsive" />
                  </a>
                  <div className="content_blog clearfix">
                    <div className="toparticle">
                      <span>15/08/2021</span>&nbsp;-&nbsp;<span>bởi: Ego Creative</span>
                    </div>
                    <h3><a href="8-meo-giup-ban-chon-quan-jean-trong-mo-ma-khong-can-den-shop.html" title="8 mẹo giúp bạn chọn quần jean trong mơ mà không cần đến shop" className="a-title">8 mẹo giúp bạn chọn quần
                        jean trong mơ mà không cần đến shop</a></h3>
                    <p>
                      Để biết được quần jean có vừa với mình hay không theo kích cỡ, bạn không
                      cần phải đứng xếp hàng trong phòng thử đồ. Tất cả những gì bạn cần làm
                      là cài nút chúng và áp vào vòng eo từ rốn đến cột số...
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-100 b-list">
                <div className="item_blog_base">
                  <a className="thumb" href="hoc-lom-10-bi-quyet-tu-cac-stylist-hang-dau-de-mac-dep-ma-khong-ton-qua-nhieu-tien.html" title="Học lỏm 10 bí quyết từ các stylist hàng đầu để mặc đẹp mà không tốn quá nhiều tiền">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/100/434/926/articles/imager-1-24517-700.jpg?v=1629005698983" alt="Học lỏm 10 bí quyết từ các stylist hàng đầu để mặc đẹp mà không tốn quá nhiều tiền" className="lazyload img-responsive" />
                  </a>
                  <div className="content_blog clearfix">
                    <div className="toparticle">
                      <span>15/08/2021</span>&nbsp;-&nbsp;<span>bởi: Ego Creative</span>
                    </div>
                    <h3><a href="hoc-lom-10-bi-quyet-tu-cac-stylist-hang-dau-de-mac-dep-ma-khong-ton-qua-nhieu-tien.html" title="Học lỏm 10 bí quyết từ các stylist hàng đầu để mặc đẹp mà không tốn quá nhiều tiền" className="a-title">Học lỏm 10 bí quyết từ các
                        stylist hàng đầu để mặc đẹp mà không
                        tốn quá nhiều tiền</a></h3>
                    <p>
                      1. Nếu bạn muốn chân trông dài hơn, hãy mang một đôi guốc cùng màu da
                      của mình. Chúng đánh lừa thị giác khiến bạn trông thanh mảnh và cao hơn.
                      2. Cách tốt nhất để bảo quản đồ trang sức là bỏ vào...
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-100 b-list">
                <div className="item_blog_base">
                  <a className="thumb" href="mot-co-nang-an-mac-chat-ngoai-kha-nang-bat-trend-con-tuan-thu-4-nguyen-tac-nay.html" title="Một cô nàng ăn mặc chất, ngoài khả năng bắt trend còn tuân thủ 4 nguyên tắc này">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" data-src="//bizweb.dktcdn.net/100/434/926/articles/xu-huong-thoi-trang-2.jpg?v=1629005492067" alt="Một cô nàng ăn mặc chất, ngoài khả năng bắt trend còn tuân thủ 4 nguyên tắc này" className="lazyload img-responsive" />
                  </a>
                  <div className="content_blog clearfix">
                    <div className="toparticle">
                      <span>15/08/2021</span>&nbsp;-&nbsp;<span>bởi: Ego Creative</span>
                    </div>
                    <h3><a href="mot-co-nang-an-mac-chat-ngoai-kha-nang-bat-trend-con-tuan-thu-4-nguyen-tac-nay.html" title="Một cô nàng ăn mặc chất, ngoài khả năng bắt trend còn tuân thủ 4 nguyên tắc này" className="a-title">Một cô nàng ăn mặc chất, ngoài
                        khả năng bắt trend còn tuân thủ 4 nguyên tắc
                        này</a></h3>
                    <p>
                      Những bộ đồ ôm sát body giúp tôn lên đường cong nhưng mặc một chiếc đầm
                      bó chật quá mức hoặc chiếc quần jeans siêu skinny với mong muốn khoe
                      dáng nuột sẽ khiến bạn thất bại. Nó vừa khiến bạn khó d...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
      </div>
    </React.Fragment>
  );
}
export default HomePage;
