import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={19}
      height={23}
      viewBox="0 0 19 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14.489 8.422V6.043A5.044 5.044 0 009.446 1a5.042 5.042 0 00-5.064 5.02v2.403"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M13.669 21.5H5.202A4.202 4.202 0 011 17.298v-4.753a4.202 4.202 0 014.202-4.202h8.467c2.32 0 4.202 1.88 4.202 4.202v4.753a4.202 4.202 0 01-4.202 4.202z"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.436 13.691v2.461"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
