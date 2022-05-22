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
          <Use xlinkHref="#image0_611_2" transform="scale(.03333)" />
        </Pattern>
        <Image
          id="image0_611_2"
          width={30}
          height={30}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAA+UlEQVRIie2WPQrCQBBGn5ZKWlFQ75DGUs+hjVhYWQn2egJP4xUEC63FzkoELUW0ikVS5Gd1J5sNouSDQBjm25fd2ewsFPp3lRSxDrAEGpYYJ2AKbHWJB8Cz/OzjENWMvXQTEivCKucE0eqnwDdgjL/5msAKS+XRbZSJwjMT+DKDVb9ZLS3YdKnjuqcdxARcF8asg6uKmGMwTkK6Wq0Vno3AlxnsAf1Q/kDoicj0AGmH3luGYyT06at3wIJoTR1gjt99rC/1EXAFXjfItQbuSoyBehJw0Ra/Cr7mwLlIkkbAE3v3rQcwjENUmwuggsHB/0ZnDLpXIWt6ATGgpRQXC7T0AAAAAElFTkSuQmCC"
        />
      </Defs>
    </Svg>
  )
}

export default SvgComponent
