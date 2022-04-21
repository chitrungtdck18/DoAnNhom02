import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={58}
      height={35}
      viewBox="0 0 58 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M55.852 33.87a3.509 3.509 0 01-4.951-.33L28.98 8.488 7.06 33.54a3.509 3.509 0 01-5.281-4.62l23.24-26.562a5.263 5.263 0 017.922 0l23.24 26.561a3.509 3.509 0 01-.33 4.951z"
        fill="#FF8600"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M55.852 33.87a3.509 3.509 0 01-4.951-.33L28.98 8.488 7.06 33.54a3.509 3.509 0 01-5.281-4.62l23.24-26.562a5.263 5.263 0 017.922 0l23.24 26.561a3.509 3.509 0 01-.33 4.951z"
        fill="#203EDF"
        fillOpacity={0.3}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M55.852 33.87a3.509 3.509 0 01-4.951-.33L28.98 8.488 7.06 33.54a3.509 3.509 0 01-5.281-4.62l23.24-26.562a5.263 5.263 0 017.922 0l23.24 26.561a3.509 3.509 0 01-.33 4.951z"
        fill="#fff"
        fillOpacity={0.05}
      />
    </Svg>
  )
}

export default SvgComponent
