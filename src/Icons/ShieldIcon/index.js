import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17.361 4.111a24.329 24.329 0 01-3.678-1.305 25.002 25.002 0 01-3.377-1.784L10 .833l-.3.195A25 25 0 016.322 2.81a24.328 24.328 0 01-3.683 1.3l-.417.106V8.85c0 7.439 7.517 10.222 7.59 10.25l.188.067.189-.067c.078 0 7.589-2.806 7.589-10.25V4.217l-.417-.106zm-2.539 3.695l-6.205 6.027-3.511-3.516a.786.786 0 011.11-1.111l2.417 2.46 5.106-5a.786.786 0 011.111 1.112l-.028.028z"
        fill="#2A8962"
      />
    </Svg>
  )
}

export default SvgComponent
