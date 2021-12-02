import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { handleImgErr } from "../../../helper";
import BannerVertical from "../../../components/BannerVertical";
import { constants as c } from "../../../constants";
import CategoryC from "../../../components/CategoryColumn"
export default function CategoryColumn(props) {
  const categories = useSelector((state) => state.category.categories);
  const { homeInfo } = props;
  const appTheme = useSelector((state) => state.app.appTheme.home_page_type);

  return (
    <div className="categories-column">
         {
      appTheme == 5 ? <CategoryC title = "Danh mục sản phẩm"/> :  <div className="main-title">
      <h3>Danh mục</h3>
    </div>
    }
     
      <div className="column">
        <Link
          style={{ cursor: "pointer", display: "flex"  , margin : "0 13px"  ,padding : "0.5em" }}
          to="/danh-sach-san-pham"
        >
          <img
            src="/img/cubes.png"
            alt=""
            style={{
              width: "30px",
              objectFir: "contain",
              marginRight: "8px",
            }}
          />
          <div>Tất cả sản phẩm</div>
        </Link>
        {
          categories.map((v, i) =>
            <Link
              key={i}
              style={{ cursor: "pointer", display: "flex" , "border-top": "2px dotted #e5e5e5" , margin : "0 13px" , padding : "0.5em"  }}
              to={`/danh-sach-san-pham?danh-muc=${v.name.replace(/\s/g, "-")}-${v.id}`}>
              <div className="image">
                <div className="img-container">
                  <img
                    onError={handleImgErr}
                    src={v.image_url}
                    alt=""
                  />
                </div>
              </div>
              <div>
                {v.name}
              </div>
            </Link>
          )
        }
      </div>
      {homeInfo.status === c.SUCCESS
          ? homeInfo.banner_ads.type_6.length > 0 && (
              <BannerVertical banners={homeInfo.banner_ads.type_6} />
            )
          : null}
    </div>
  )
}