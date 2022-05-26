import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#pattern0)" d="M0 0H30V30H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_619_3" transform="scale(.03333)" />
        </Pattern>
        <Image
          id="image0_619_3"
          width={30}
          height={30}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABeElEQVRIie2WPVICQRBGvxFDDQ0UtKD0FKIHwB/kIuIZPIKhiWUZmmnhDTwHWiWWMRjK1jPYBXendqEZfiJfNuzQb3q2p3ekf1aEs04E9iRdSDqVVJVUSR71JL1L6kh6cs59LGRlQBm4BYZMJwIegeq80hbwbRD6DIBmqPQqySCUCGiHZDqPNC23ZQ5UCNveIgbAju9Zy3FfS9owrLEu6dgwbzOJmSFznIiPTFdSaVo055xL/oNBHkmqOud6ox/8jFsWaQAlxT1gjC9uLEE64mSS+GCJ4v3CJ0kF5nFojQ4cFVV3el5eVedh7unWueve+Etx+fu8+sU7Y1VL0md64GfcNQYJIRPbF78sUdxJD/wGsivpTYtvIENJtcIGknzE7w2BBNQBS8uUpLu0tChgecKxCqEPbJuWBzSw3TimEQHnxl0Zy9vMfxG4nEmakjcJ2/Y+cBYkTcm3gBvgx5jlA4Z3Osv1tqK/621N2ettV3EPeJ5avf+sml99vC/tYOu+BQAAAABJRU5ErkJggg=="
        />
      </Defs>
    </Svg>
  )
}

export default SvgComponent
