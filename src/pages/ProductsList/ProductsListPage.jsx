import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import Select from "../../components/Select";
import DataLoading from "./child/DataLoading";
import ListProduct from "./child/ListProducts";
import { showNextElement } from "../../helper";
import { constants as c } from "../../constants";
import CategoryColumn from "./child/CategoryColumn";
import { productActions as a } from "../../actions/productActions";
function ProductsListPage(props) {
  const dispatch = useDispatch();
  let query = queryString.parse(props.location.search);

  const pageInfo = useSelector(state => state.product.list);
  const [prevLocation, setPrevLocation] = useState(props.location.state);
  const [currentQuery, setCurrentQuery] = useState(createQueryString(query));
  function createQueryString(option) {
    let keys = [...Object.keys(option)];
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] !== "title") {
        if (keys[i] === "danh-muc") {
          let arr = option[keys[i]].split("-");
          let id = arr[arr.length - 1];
          query["category_ids"] = id;
        } else query[keys[i]] = option[keys[i]];
      }
    }
    let queryKeys = [...Object.keys(query)];
    let queryStr = queryKeys.reduce((rs, v) => `${rs}${v}=${query[v]}&`, "?");
    return queryStr;
  }
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
  useEffect(() => {
    document.title = "Danh sách sản phẩm";
    let queryStr = createQueryString(query);
    if (
      queryStr !== currentQuery ||
      prevLocation !== window.location.pathname
    ) {
      dispatch({ type: c.RESET_PRODUCTS_LIST_STATUS });
      setCurrentQuery(queryStr);
      setPrevLocation(window.location.pathname);
    } else if (pageInfo.status === c.LOADING) {
      dispatch(a.getAllProducts(queryStr));
    }
  }, [props.location.search, pageInfo]);

  return (
    <React.Fragment>
      <Header />
      <div className="products-list-page container">
        <div className="mobile-tool mobile">

          <span>
            Có {pageInfo.total} sản phẩm
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

          <CategoryColumn />
          {
            pageInfo.status === c.SUCCESS
              ?
              <ListProduct location={props.location} />
              : <DataLoading />
          }
        </div>
      </div>
    </React.Fragment>
  )
}
export default ProductsListPage;
