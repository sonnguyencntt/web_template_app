import queryString from "query-string";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BlogCard from "./BlogCard";
import Paginate from "../../../components/Paginate";
export default function ListNews(props) {
  let query = queryString.parse(props.location.search);
  const pageInfo = useSelector(state => state.news.list);
  const categories = useSelector(state => state.news.categories);
  function handleSort(option) {
    let keys = [...Object.keys(option)];
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] !== "title")
        query[keys[i]] = option[keys[i]];
    }
    let queryKeys = [...Object.keys(query)];
    let queryStr = queryKeys.reduce((rs, v) => `${rs}${v}=${query[v]}&`, "?");
    window.location.href = window.location.origin + window.location.pathname + queryStr
  }
  return (
    <div className="news-list">
      <div className="title">
        <h3>Danh mục tin tức</h3>
        <h4>
          <span onClick={() => { window.location.href = "/" }}>Trang chủ /</span> Danh mục tin tức
        </h4>
      </div>
      <div className="news-category">
        {
          categories.list.map((v, i) =>
            <Link
              key={i}
              className="news-category-card"
              to={
                v.title ?
                  `/tin-tuc?danh-muc=${v.title.replace(/\s/g, "-")}-${v.id}`
                  :
                  `/tin-tuc?danh-muc=${v.id}`
              }>
              {v.title}
            </Link>
          )
        }
      </div>
      <div className="row">
        {
          pageInfo.data.map((v, i) =>
            <div className="card-container" key={i}>
              <BlogCard
                id={v.id}
                date={v.updated_at}
                title={v.title}
                img={v.image_url}
                quote={v.content}
              />
            </div>
          )
        }
      </div>
      <Paginate
        currentPage={pageInfo.current_page}
        totalPage={pageInfo.last_page}
        handlePageSelect={handleSort}
      />
    </div>
  )

  
}