import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListNews from "./child/ListNews";
import Header from "../../components/Header";
import DataLoading from "./child/DataLoading";
import { constants as c } from "../../constants";
import CategoryColumn from "./child/CategoryColumn";
import CategoryColumn2 from "./child/CategoryColumn2";
import CategoryColumn3 from "./child/CategoryColumn3";
import CategoryColumn5 from "./child/CategoryColumn5";

import { appActions } from "../../actions/appActions";

import PageLoading from "../../components/PageLoading";
import { newsActions as a } from "../../actions/newsActions";
function NewsListPage(props) {
  let query = queryString.parse(props.location.search);
  const pageInfo = useSelector((state) => state.news.list);
  const appTheme = useSelector((state) => state.app.appTheme.home_page_type);
  const homeInfo = useSelector((state) => state.app.home);

  const categories = useSelector((state) => state.news.categories);
  const dispatch = useDispatch();
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
  useEffect(() => {
    document.title = "Danh sách bài viết";
    let queryStr = createQueryString(query);
    if (homeInfo.status === c.LOADING) {
      dispatch(appActions.getHomeInfo());
    }
    if (
      queryStr !== currentQuery ||
      prevLocation !== window.location.pathname
    ) {
      dispatch({ type: c.RESET_NEWS_LIST_STATUS });
      setCurrentQuery(queryStr);
      setPrevLocation(window.location.pathname);
    } else if (pageInfo.status === c.LOADING) {
      let queryStr = createQueryString(query);
      dispatch(a.getAllNews(queryStr));
    } else {
      if (categories.status === c.LOADING) {
        dispatch(a.getNewsCategory());
      }
    }
  }, [props.location.search, pageInfo]);
  return (
    <React.Fragment>
      <Header />
      {categories.status === c.SUCCESS ? (
        <div className="news-list-page container">
          <div className="row">
            {appTheme == 1 || appTheme == null ? (
              <CategoryColumn homeInfo={homeInfo} />
            ) : appTheme == 2 ? (
              <CategoryColumn2 homeInfo={homeInfo} />
            ) : appTheme == 3 ? (
              <CategoryColumn3 homeInfo={homeInfo} />
            ) : appTheme == 5 ? (
              <CategoryColumn5 homeInfo={homeInfo} />
            ):(
              <CategoryColumn homeInfo={homeInfo} />
            )}

            {pageInfo.status === c.SUCCESS ? (
              <ListNews location={props.location} />
            ) : (
              <DataLoading />
            )}
          </div>
        </div>
      ) : (
        <PageLoading />
      )}
    </React.Fragment>
  );
}
export default NewsListPage;
