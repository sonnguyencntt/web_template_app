import Slider from "react-slick";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
export default function HomeBanner(props) {
  const appTheme = useSelector((state) => state.app.appTheme);
  const { banners, discountProducts } = props;



  return (
      <div className="" style = {{marginTop : "14px"}}>
        
              {banners.map((v, i) => (
           
                    <img
                      style={{
                        height: "450px",
                        width: "100%",
                        objectFit  : "cover"
                      }}
                      src={v.image_url}
                      alt="alt banner demo"
                    />
          
              ))}
     
        </div>
  );
}
