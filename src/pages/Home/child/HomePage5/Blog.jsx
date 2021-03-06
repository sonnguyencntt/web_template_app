// import BlogCard from "../../../components/BlogCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";

import Slider from "react-slick";
export default function Blog(props) {
  const [firstLine, setFirstLine] = useState(props.posts);
  const [secondLine, setSecondLine] = useState([]);
  const [mainLine, setMainLine] = useState([]);

  var settings = {
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const width = window.innerWidth;
    if (props.posts.length > 0) {
      let mainArr = props.posts.slice(0, 1);
      let firstArr = props.posts.slice(1, 3);
      let secondArr = props.posts.slice(3,5);
      setFirstLine(firstArr);
      setSecondLine(secondArr);
      setMainLine(mainArr);
    }

    // if (width >= 600 && width < 768 && props.posts.length > 6) {
    //   let firstArr = props.posts.slice(0, 2);
    //   let secondArr = props.posts.slice(2);
    //   setFirstLine(firstArr);
    //   setSecondLine(secondArr);
    // }
    // if (width >= 768 && width < 992 && props.posts.length > 8) {
    //   let firstArr = props.posts.slice(0, 2);
    //   let secondArr = props.posts.slice(4);
    //   setFirstLine(firstArr);
    //   setSecondLine(secondArr);
    // }
    // if (width >= 992 && width < 1200 && props.posts.length > 10) {
    //   let firstArr = props.posts.slice(0, 2);
    //   let secondArr = props.posts.slice(2);
    //   setFirstLine(firstArr);
    //   setSecondLine(secondArr);
    // }
    // if (width >= 1200 && props.posts.length > 10) {
    //   let firstArr = props.posts.slice(0, 2);
    //   let secondArr = props.posts.slice(2);
    //   setFirstLine(firstArr);
    //   setSecondLine(secondArr);
    // }
  }, []);

  function extractContent(s) {
    var span = document.createElement("span");
    span.innerHTML = s;
    var text = span.textContent || span.innerText;
    return text.slice(0, 200);
  }

  function showBlog(posts, isItemBig = false) {
    var array = [];
    for (let [i, v] of Object.entries(posts)) {
      array.push(
        <div className="swiper-slide">
          <div
            className={`tip-item tip-item-${
              isItemBig == true ? "big" : "small"
            }`}
          >
            <div className="tip-img object-fit-img">
              <Link
                to={
                  v.title
                    ? `/tin-tuc/${v.title
                        .replace(/[^a-zA-Z ]/g, "")
                        .replace(/\s/g, "-")}-${v.id}`
                    : `/tin-tuc/${v.id}`
                }
                title="S???a n???i ?????a Nh???t n??o t???t? C???p nh???t b???ng gi?? s???a Nh???t n???i ?????a m???i nh???t"
              >
                <img  src={v.image_url} />
              </Link>
            </div>
            <div className="tip-caption position-absolute left-0 right-0 bottom-0 flex items-center">
              <Link
                className="title"
                to={
                  v.title
                    ? `/tin-tuc/${v.title
                        .replace(/[^a-zA-Z ]/g, "")
                        .replace(/\s/g, "-")}-${v.id}`
                    : `/tin-tuc/${v.id}`
                }
              >
                {extractContent(v.title)}
              </Link>
            </div>
          </div>
        </div>
      );
    }
    return array;
  }

  return (
    <section className="home-4 section pt-0">
      <div className="container">
        <div className="tip-list-wrap Module Module-226">
          <div className="ModuleContent">
            <div className="tip-list-heading flex justify-between items-center">
              <div className="section-title text-blue ml-2">
                Kinh nghi???m, m???o v???t hay
              </div>
              <div className="view-more-desktop hidden-mobile">
                <Link className="flex flex-center" to="/tin-tuc">
                  T???t c??? b??i vi???t
                </Link>
              </div>
            </div>
            <div className="tip-list">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  {showBlog(mainLine, true)}
                  {showBlog(firstLine, false)}
                  {showBlog(secondLine, false)}

                  {/* <div className="swiper-slide">
                  <div className="tip-item tip-item-big">
                    <div className="tip-img object-fit-img">
                      <a
                        href="tu-van/me-va-be/sua-noi-dia-nhat.html"
                        title="S???a n???i ?????a Nh???t n??o t???t? C???p nh???t b???ng gi?? s???a Nh???t n???i ?????a m???i nh???t"
                      >
                        <img
                          className="lazyload"
                          data-src="./Data/Sites/1/News/2230/sua-noi-dia-nhat.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                          alt="S???a n???i ?????a Nh???t n??o t???t? C???p nh???t b???ng gi?? s???a Nh???t n???i ?????a m???i nh???t"
                        />
                      </a>
                    </div>
                    <div className="tip-caption position-absolute left-0 right-0 bottom-0 flex items-center">
                      <a
                        className="title"
                        href="tu-van/me-va-be/sua-noi-dia-nhat.html"
                      >
                        S???a n???i ?????a Nh???t n??o t???t? C???p nh???t b???ng gi??
                        s???a Nh???t n???i ?????a m???i nh???t
                      </a>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="tip-item tip-item-small">
                    <div className="tip-img object-fit-img">
                      <a
                        href="tu-van/me-va-be/uu-nhuoc-diem-cua-sua-glico"
                        title="??u - nh?????c ??i???m c???a s???a Glico. H???i - ????p chi ti???t v??? s???a Glico"
                      >
                        <img
                          className="lazyload"
                          data-src="./Data/Sites/1/News/2182/so-sanh-glico-noi-dia-nhat.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                          alt="??u - nh?????c ??i???m c???a s???a Glico. H???i - ????p chi ti???t v??? s???a Glico"
                        />
                      </a>
                    </div>
                    <div className="tip-caption position-absolute left-0 right-0 bottom-0 flex items-center">
                      <a
                        className="title"
                        href="tu-van/me-va-be/uu-nhuoc-diem-cua-sua-glico"
                      >
                        ??u - nh?????c ??i???m c???a s???a Glico. H???i - ????p chi
                        ti???t v??? s???a Glico
                      </a>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="tip-item tip-item-small">
                    <div className="tip-img object-fit-img">
                      <a
                        href="tu-van/me-va-be/sua-morinaga-so-9-co-tang-can-khong.html"
                        title="S???a Morinaga s??? 9 c?? t??ng c??n kh??ng? C??c m??? b???m review s???a Morinaga s??? 9 nh?? th??? n??o?"
                      >
                        <img
                          className="lazyload"
                          data-src="./Data/Sites/1/News/2176/sua-morinaga-so-9-co-tang-can-khong.jpg"
                          src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                          alt="S???a Morinaga s??? 9 c?? t??ng c??n kh??ng? C??c m??? b???m review s???a Morinaga s??? 9 nh?? th??? n??o?"
                        />
                      </a>
                    </div>
                    <div className="tip-caption position-absolute left-0 right-0 bottom-0 flex items-center">
                      <a
                        className="title"
                        href="tu-van/me-va-be/sua-morinaga-so-9-co-tang-can-khong.html"
                      >
                        S???a Morinaga s??? 9 c?? t??ng c??n kh??ng? C??c m???
                        b???m review s???a Morinaga s??? 9 nh?? th??? n??o?
                      </a>
                    </div>
                  </div>
                </div> */}
                </div>
              </div>
            </div>
            <Link
              className="flex flex-center view-more-mobile hidden-desktop"
              to="/tin-tuc"
            >
              <strong className="text-blue">Xem t???t c??? &gt;</strong>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
