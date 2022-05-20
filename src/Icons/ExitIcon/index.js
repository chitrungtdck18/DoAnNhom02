import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M31.67 5H8.337a3.337 3.337 0 00-3.334 3.333V15h3.334V8.333H31.67v23.334H8.337V25H5.003v6.667A3.337 3.337 0 008.337 35H31.67a3.337 3.337 0 003.333-3.333V8.333A3.338 3.338 0 0031.67 5z"
        fill="#333"
      />
      <Path
        d="M18.333 26.667L26.667 20l-8.334-6.667v5.002H5v3.333h13.333v4.999z"
        fill="#333"
      />
    </Svg>
  )
}

export default SvgComponent
