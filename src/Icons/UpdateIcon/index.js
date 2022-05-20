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
          <Use xlinkHref="#image0_607_15" transform="scale(.03333)" />
        </Pattern>
        <Image
          id="image0_607_15"
          width={30}
          height={30}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABnUlEQVRIie3Wz04UQRAG8B9evS6i6K7GNfAmHDRxQ0QSYmK8mXhQQ3gCwkNwIBguqBsBY+LJJ9HoxWjif88SAQ/d40DY2Z2eHfbEl9Slu+r7unpqqotTjAhjCb4tdHAdbUzG9S94izfYxse6DtfCGnZxMMB28QTNYUU7+H2IdBMLuIaz0dpxbfPQ4X5hrqroA+xHoi6ulIi5jK0Ys4fzqaK3YuAeHqYG4y6WpdWQCfn1VhGtjI0oujVK0QmhQP7gUo28t6MVYlHI9nmNouP4Fm28yGk7Cs/XKNyV/+fdIqcP0aFdk+i8403m/5V3e2xmNsyVN/C1B+d3oZY0hH7by+HcEML9EnqZOXV6bPatwgRMRb53ZU5YWAQVsBA5XxQ5lCr7Csh696N+TgN/9ES05A2pUSPvQLwSsl0bpehSFP0hMdszWMG9CqKPhbf8L26mBl8Q3uMD7Cg3CFyVt9193E8VzTAnjDHZ6PMUdxwdfabi2jP56PMTN6qKZmhiXflhbxUXB5GmjCZNzGIG08KngM94j9dCFX9K4DzFyeMf/yKPlcbz+HgAAAAASUVORK5CYII="
        />
      </Defs>
    </Svg>
  )
}

export default SvgComponent
