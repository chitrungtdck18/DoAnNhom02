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
          <Use xlinkHref="#image0_615_2" transform="scale(.03333)" />
        </Pattern>
        <Image
          id="image0_615_2"
          width={30}
          height={30}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABL0lEQVRIie2WwU7CQBCGP+Go3IQn0ZMxqZwg3Iyv4sF4QfpG8AbGq8jZxAvlARC91uWw09QW2V1hqib2Tybttn/m29lup4Vav6gBsACMUiRAPwScKEKzmJchB1+ATcjsdlCB1XAYz4BzxXFBLnCjNMt9xwX9qaVeVABNQkx9dHf2HOgpFvFP1AFi4Al4l5jKtXZV0CtgxfZn+QpcVgH9EMAYiIBDiQtgIvdSTXiHvNIbh+9WPEuUlj0mr9SnrPI7DfBMkkUB3q54pxrgN0l2FOBtiXflM7o+Epm+07uboXlDwC9yPPX4hsCJnD8H5PVqhK164vEZ8l+maw1wG9scDPaVcYENdk+0NMBgm0JKXnmXzc32uYsNtcAZfFkCPGgCXDrGNodH7JLe/xS41s5aA8Bgh2AMXkqFAAAAAElFTkSuQmCC"
        />
      </Defs>
    </Svg>
  )
}

export default SvgComponent
