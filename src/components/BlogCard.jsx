import { Link } from "react-router-dom";
import { useRef } from "react";
import { handleImgErr } from "../helper";
export default function BlogCard(props) {
  const myLink = useRef(null);
  function handleClick() {
    myLink.current.click();
  }
  return (
    <div className="blog-card" onClick={handleClick}>
      {/* <div style={{ display: "none" }}>
        <Link ref={myLink} to={props.title ? `/tin-tuc/${props.title.replace(/[^a-zA-Z ]/g, "").replace(/\s/g, '-')}-${props.id}` : `/tin-tuc/${props.id}`} />
      </div> */}
      <div className="image">
        <div className="img-container">
          <img src={props.img} alt="" onError={handleImgErr} />
        </div>
      </div>
      <div style = {{padding : "10px"}}>
        <div className="blog-title">
          {props.title}
        </div>
        <div className="date">
          {props.date ? props.date.split(" ")[0] : ""}
        </div>
        <div className="line"></div>
        <div className=""
         style={{
          display: "-webkit-box",
          "-webkit-line-clamp": "2",
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
          height: "40px"
        }}
        dangerouslySetInnerHTML={{ __html: props.quote }}
         >
        </div>
      </div>
    </div>
  )

  function extractContent(s) {
    var span = document.createElement('span');
    span.innerHTML = s;
    return span.textContent || span.innerText;
  };
}