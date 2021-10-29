import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { handleImgErr } from "../../../helper";
export default function CategoryColumn2(props) {
  const categories = useSelector((state) => state.category.categories);
  const appTheme = useSelector((state) => state.app.appTheme);

  return (
    <aside className="blog-aside aside-item sidebar-category">
      <div className="aside-title text-center text-xl-left" style={{backgroundColor:appTheme.color_main_1}}>

        <h2 className="title-head" >
          <span>Danh mục</span>
        </h2>
      </div>
      <div className="aside-content">
        <div className="nav-category  navbar-toggleable-md">
          <ul className="nav navbar-pills">
            {categories.length > 0
              ? categories.map((v, i) => (
                  <li className="nav-item">
                    <i
                      className="fa fa-arrow-circle-right"
                      aria-hidden="true"
                    />
                    <Link
                      title="Rau sạch"
                      className="nav-link"
                      to={`/danh-sach-san-pham?danh-muc=${v.name.replace(
                        /\s/g,
                        "-"
                      )}-${v.id}`}
                    >
                      {v.name}
                    </Link>
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
    </aside>
  )
}