

import * as React from "react"
import Svg, { Circle } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={11}
      height={11}
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle
        cx={5.14322}
        cy={5.14273}
        r={4.64291}
        transform="rotate(-180 5.143 5.143)"
        fill="#fff"
        fillOpacity={0.5}
        stroke="#fff"
      />
    </Svg>
  )
}

export default SvgComponent
