import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 86 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.802 68.521a3.509 3.509 0 01.33-4.95L52.183 41.65 27.132 19.73a3.509 3.509 0 014.62-5.282l26.561 23.24a5.263 5.263 0 010 7.923l-26.56 23.24a3.509 3.509 0 01-4.951-.33z"
        fill="#000000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.802 68.521a3.509 3.509 0 01.33-4.95L52.183 41.65 27.132 19.73a3.509 3.509 0 014.62-5.282l26.561 23.24a5.263 5.263 0 010 7.923l-26.56 23.24a3.509 3.509 0 01-4.951-.33z"
        fill="#000000"
        fillOpacity={0.3}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.802 68.521a3.509 3.509 0 01.33-4.95L52.183 41.65 27.132 19.73a3.509 3.509 0 014.62-5.282l26.561 23.24a5.263 5.263 0 010 7.923l-26.56 23.24a3.509 3.509 0 01-4.951-.33z"
        fill="#000000"
        fillOpacity={0.05}
      />
    </Svg>
  )
}

export default SvgComponent
