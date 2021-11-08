import Slider from "react-slick";
import { Link } from "react-router-dom";
import BannerVertical from "../../../components/BannerVertical";
import { constants as c } from "../../../constants";
import { useSelector } from "react-redux";
export default function HomeBanner(props) {
  const { homeInfo } = props;

  const categories = useSelector((state) => state.category.categories);
  const appTheme = useSelector((state) => state.app.appTheme);

  function handleCateClick(id) {
    window.location.href = `/danh-sach-san-pham?danh-muc-ids=${id}`;
  }

  var bannerSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
  };
  return (
      <div className="section_product aside_category product_1 categories-column-1" id="product_1">
        <div
          className="block-product site_category"
          style={{
            border: "1px solid #dcd4d4",
          }}
        >
          <div >
          <div>

          <h3 style={{
                backgroundColor:appTheme.color_main_1,
                "border-radius": "6px",
            padding : "7px"
          }}>
                <Link to="/danh-sach-san-pham" title="Trái cây" style={{padding : "16px" , color :appTheme.color_main_1 == null ? "black" : "white"}}>
                  Danh mục
                </Link>
              </h3>
            <div className="title-links">
           
              <div className="btn-more-cate d-md-none"></div>
              <div className="block-cate">
                <ul>
                  {categories.length > 0
                    ? categories.map((v, i) => (
                        <li>
                          <div>
                  
                          <Link
                            title="Rau sạch"
                            to={`/danh-sach-san-pham?danh-muc=${v.name.replace(
                              /\s/g,
                              "-"
                            )}-${v.id}`}
                          >
                                        <img
                              style={{
                                width: "38px",

                                height: "38px",

                                "margin-right": "10px",
                              }}
                              src={v.image_url}
                              alt=""
                            />
                            {v.name}
                            </Link>
                          </div>
                        </li>
                    
                      ))
                    : null}
                </ul>
              
              </div>
            </div>
          </div>
          </div>

        </div>
        {homeInfo.status === c.SUCCESS
          ? homeInfo.banner_ads.type_6.length > 0 && (
              <BannerVertical banners={homeInfo.banner_ads.type_6} />
            )
          : null}
      </div>
  );
}
