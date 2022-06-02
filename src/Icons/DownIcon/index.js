import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={15}
      height={15}
      viewBox="0 0 57 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.63 1.43a3.509 3.509 0 014.95.33L28.502 26.81 50.421 1.76a3.509 3.509 0 015.282 4.621L32.462 32.941a5.263 5.263 0 01-7.922 0L1.3 6.381a3.509 3.509 0 01.33-4.952z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.63 1.43a3.509 3.509 0 014.95.33L28.502 26.81 50.421 1.76a3.509 3.509 0 015.282 4.621L32.462 32.941a5.263 5.263 0 01-7.922 0L1.3 6.381a3.509 3.509 0 01.33-4.952z"
        fill="#203EDF"
        fillOpacity={0.3}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.63 1.43a3.509 3.509 0 014.95.33L28.502 26.81 50.421 1.76a3.509 3.509 0 015.282 4.621L32.462 32.941a5.263 5.263 0 01-7.922 0L1.3 6.381a3.509 3.509 0 01.33-4.952z"
        fill="#fff"
        fillOpacity={0.05}
      />
    </Svg>
  )
}

export default SvgComponent
