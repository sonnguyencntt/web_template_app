import { useSelector } from "react-redux";
export default function DataLoading() {
  const appTheme = useSelector(state => state.app.appTheme);
  return (
    <div className="data-loading">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          margin: "auto",
          display: "block",
          shapeRendering: "auto"
        }}
        width="100px"
        height="100px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid">
        <g transform="rotate(0 50 50)">
          <rect x="47" y="26" rx="3" ry="6" width="6" height="12" fill={appTheme.color_main_1}>
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.5s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(60 50 50)">
          <rect x="47" y="26" rx="3" ry="6" width="6" height="12" fill={appTheme.color_main_1}>
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.5s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(120 50 50)">
          <rect x="47" y="26" rx="3" ry="6" width="6" height="12" fill={appTheme.color_main_1}>
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.5s" begin="-0.5s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(180 50 50)">
          <rect x="47" y="26" rx="3" ry="6" width="6" height="12" fill={appTheme.color_main_1}>
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.5s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(240 50 50)">
          <rect x="47" y="26" rx="3" ry="6" width="6" height="12" fill={appTheme.color_main_1}>
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.5s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
          </rect>
        </g><g transform="rotate(300 50 50)">
          <rect x="47" y="26" rx="3" ry="6" width="6" height="12" fill={appTheme.color_main_1}>
            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.5s" begin="0s" repeatCount="indefinite"></animate>
          </rect>
        </g>
      </svg>
    </div>
  )
}