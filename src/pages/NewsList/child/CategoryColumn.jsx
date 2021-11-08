import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { handleImgErr } from "../../../helper";
import BannerVertical from "../../../components/BannerVertical";
import { constants as c } from "../../../constants";
export default function CategoryColumn(props) {
  const { homeInfo } = props;

  const categories = useSelector(state => state.news.categories);

  return (
    <div className="categories-column">
      <div className="main-title">
        <h3>Danh mục</h3>
      </div>
      <div className="column">
        {
          categories.list.map((v, i) =>
            <Link
              key={i}
              style={{ cursor: "pointer" }}
              to={
                v.title ?
                  `/tin-tuc?danh-muc=${v.title.replace(/\s/g, "-")}-${v.id}`
                  :
                  `/tin-tuc?danh-muc=${v.id}`
              }>
              <div className="image">
                <div className="img-container">
                  <img
                    onError={handleImgErr}
                    src={v.image_url}
                    alt=""
                    style={{ objectFir: "contain", marginRight: "8px" }}
                  />
                </div>
              </div>
              <div>
                {v.title}
              </div>
            </Link>
          )
        }
      </div>
      {homeInfo.status === c.SUCCESS
          ? homeInfo.banner_ads.type_7.length > 0 && (
              <BannerVertical banners={homeInfo.banner_ads.type_7} />
            )
          : null}
    </div>
  )
}