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
          <Use xlinkHref="#image0_608_16" transform="scale(.03333)" />
        </Pattern>
        <Image
          id="image0_608_16"
          width={30}
          height={30}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABtUlEQVRIie3WT4hOURjH8c+QJmaBxcRkZ2EhREmxUDTCynpSFspWFpJQVmzYWrGQkt0ssGEUC/aUP6kpUwxKCa+38aeJxbmv7tze2z3nvDer+dXTrfOc8/ue85zTOZdF1Ws5DuMmXuM75jBTtO1sG7gUJ/ABfxriUlvQdXgUASzHJ9zGjlzoGKYToeX4hYlU6DCeDgDtxQ9sSQGfawHai6lY6Gp0MyH3cKVP++YY8NFM6GdswAjeVHLnY8B3MqAz2F7ymKjko8r9MhI2jyc4jhUVj2X4WOr7Lgb8tQb0FpM4gwMYbfC5Vho7FwOuAu9bWMZYHan4JIHvYkkGFLYOAt6VCYU1Fa/xFPDIAODhitd0OTlUA67Lpapa4n+e/favU3zXtgAu631ThylhppeFt3gQ9cr8E3ubOu/G72LAC/mnGk5JfCgOYrYYdKhP/qKwii7O9smP4qSwgHnsS5ntsQL8SvjfKqsj/h4/nQIl3LfPisE3LCz5BWHFdbAOHgiVy9ImfCvMbmFlrlGO9uBLAZ8V3tZtWPU/4BvxWPN+PsT6tuFD2I/reC48n13h8F0VKrOoWv0FLNwJAYCyRDYAAAAASUVORK5CYII="
        />
      </Defs>
    </Svg>
  )
}

export default SvgComponent
