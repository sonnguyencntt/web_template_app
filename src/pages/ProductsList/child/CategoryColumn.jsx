import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { handleImgErr } from "../../../helper";
export default function CategoryColumn(props) {
  const categories = useSelector((state) => state.category.categories);
  return (
    <div className="categories-column">
      <div className="main-title">
        <h3>Danh mục</h3>
      </div>
      <div className="column">
        <Link
          style={{ cursor: "pointer", display: "flex" }}
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
              style={{ cursor: "pointer", display: "flex" }}
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
    </div>
  )
}