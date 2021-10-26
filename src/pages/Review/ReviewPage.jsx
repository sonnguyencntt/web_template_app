import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { constants as c } from "../../constants";
import Header from "../../components/Header";
import { userActions as a } from "../../actions/userActions";
import PageLoading from "../../components/PageLoading";
import ReviewCard from "./child/ReviewCard";
import AwaitReviewCard from "./child/AwaitReviewCard";
function ReviewPage() {
  const dispatch = useDispatch();
  const pageInfo = useSelector((state) => state.user.myReview);
  const awaitReview = useSelector((state) => state.user.awaitReview);

  const [currentTab, setCurrentTab] = useState("await");
  const tabs = {
    await: (
      <div className="container">
        {awaitReview.list.map((v, i) => (
          <AwaitReviewCard
            key={i}
            name={v.product.name}
            images={v.product.images}
            stars={v.stars}
            content={v.content}
            id={v.product.id}
            order_code={v.order_code}
          />
        ))}
      </div>
    ),
    reviewed: (
      <div className="container">
        {pageInfo.list.map((v, i) => (
          <ReviewCard
            key={i}
            name={v.product.name}
            images={v.product.images}
            stars={v.stars}
            content={v.content}
            id={v.product.id}
          />
        ))}
      </div>
    ),
  };

  useEffect(() => {
    document.title = "Đánh giá của tôi";
    console.log(pageInfo);
    if (pageInfo.status === c.LOADING) {
      dispatch(a.getUserReview());
      dispatch(a.getUserAwaitReview());
    }
  });
  return (
    <React.Fragment>
      <Header />
      {pageInfo.status === c.LOADING ? (
        <PageLoading />
      ) : (
        <div className="review-page">
          <div className="collaborator-page">
            <div className="container">
              <div className="row tabs">
                <div
                  onClick={() => {
                    setCurrentTab("await");

                    dispatch(a.getUserAwaitReview());
                  }}
                  className={currentTab === "await" ? "active" : ""}
                >
                  Chờ đánh giá
                </div>
                <div
                  onClick={() => {
                    setCurrentTab("reviewed");
                    dispatch(a.getUserReview());
                  }}
                  className={currentTab === "reviewed" ? "active" : ""}
                  style={{ marginLeft: "1.5em", marginRight: "1.5em" }}
                >
                  Đã đánh giá
                </div>
              </div>
              {tabs[currentTab]}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
export default ReviewPage;
