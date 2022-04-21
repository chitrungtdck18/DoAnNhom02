import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={34}
      height={33}
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.8 8H5.1L3.9 3.2H12L10.8 8zM3.9 3.2l-.6-2.1H1.1"
        stroke="#FFFFFF"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.1 10.9c0-.5-.4-.8-.8-.8-.5 0-.8.4-.8.8s.4.8.8.8.8-.3.8-.8zM11.4 10.9c0-.5-.4-.8-.8-.8s-.8.4-.8.8.4.8.8.8.8-.3.8-.8z"
        fill="#FFFFFF"
      />
    </Svg>
  )
}

export default SvgComponent
