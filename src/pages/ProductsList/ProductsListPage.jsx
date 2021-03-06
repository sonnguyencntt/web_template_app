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
import CategoryColumn2 from "./child/CategoryColumn2";
import CategoryColumn3 from "./child/CategoryColumn3";
import CategoryColumn5 from "./child/CategoryColumn5";

import { appActions } from "../../actions/appActions";

import { productActions as a } from "../../actions/productActions";
function ProductsListPage(props) {

  const appTheme = useSelector((state) => state.app.appTheme.home_page_type);
  const homeInfo = useSelector((state) => state.app.home);

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
    document.title = "Danh s??ch s???n ph???m";
    let queryStr = createQueryString(query);
    if (homeInfo.status === c.LOADING) {
      dispatch(appActions.getHomeInfo());
    }
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
            C?? {pageInfo.total} s???n ph???m
          </span>
          <Select
            placeholder="S???p x???p"
            handleSelect={handleSort}
            showDetail={showNextElement}
            values={[
              {
                title: "Gi?? ti???n: T??ng d???n",
                sort_by: "price",

                descending: "false"
              },
              {
                title: "Gi?? ti???n: Gi???m d???n",
                sort_by: "price",

                descending: "true"
              }
            ]}
          />
        </div>
        <div className="row">

        {       appTheme == 1 || appTheme == null ? <CategoryColumn homeInfo={homeInfo}/> : appTheme == 2 ? <CategoryColumn2 homeInfo={homeInfo}/> : appTheme == 3 ? <CategoryColumn3  homeInfo={homeInfo}/> : appTheme == 5 ?  <CategoryColumn5  homeInfo={homeInfo}/> : <CategoryColumn homeInfo={homeInfo}/>
}          {
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
