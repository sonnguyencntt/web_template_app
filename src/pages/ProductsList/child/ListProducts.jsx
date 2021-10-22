import queryString from "query-string";
import { useSelector } from "react-redux";
import { showNextElement } from "../../../helper";
import Select from "../../../components/Select";
import Paginate from "../../../components/Paginate";
import ProductCard from "../../../components/ProductCard";
export default function ListProduct(props) {
  const pageInfo = useSelector(state => state.product.list);
  let query = queryString.parse(props.location.search);
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
    <div className="products-list">
      <div className="breadcrumbs">
        <h4>
          <span onClick={() => { window.location.href = "/" }}>Trang chủ /  </span>
          Danh sách sản phẩm
        </h4>
      </div>
      <div className="sort-option row">
        <span>
          Có {pageInfo.total} sản phẩm trong danh mục
        </span>
        <Select
          placeholder="Sắp xếp"
          handleSelect={handleSort}
          showDetail={showNextElement}
          values={[
            {
              title: "Giá tiền: Tăng dần",
              sort_by: "price",
              descending: "false"
            },
            {
              title: "Giá tiền: Giảm dần",
              sort_by: "price",
              descending: "true"
            }
          ]}
        />
      </div>
      <div className="row">
        {
          pageInfo.data.map((v, i) =>
            <ProductCard
              key={i}
              product={v}
            />
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