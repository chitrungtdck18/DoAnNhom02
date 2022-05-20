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
          <Use xlinkHref="#image0_607_14" transform="scale(.03333)" />
        </Pattern>
        <Image
          id="image0_607_14"
          width={30}
          height={30}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABQ0lEQVRIie2VvUoDQRSFP38eQFFBEKsUttYiqI1Y+gS+gK2CINgFH0DsNZBCbayjVUoLbSyirSkEFUWQFCbEwl0YlnHmXJ0Fixw4zdw759vLXFgY6J+qAhwC98AH8AScA3NlQteBDtD3+BHYBKZSQyt8T+iDum4D0ynBBwI0dzUluGUA36YE//S2Pr8rgcMiWAqzSAVfGzKvUoK7BnDH0BtVG/2NH5RAdeJTw0eeGHolXRKftpEaCrAmgFfLAAPsB6A7lqChX8D7KbLU5UouK/gsULNsvqRRYAWoE1+uetY78hfgMnAMvHgANaev5qk/A0fAkgU4C1x4wlz3gPnMvUhvA5iJQceBu0hQ7o3MSm8LGAuB98SgLjAJTACf4p3dEPhGDGk6d5qF2oJTW3TOg7/WNxG85dzZLtSKys9fQ+CBStMXp1vZyFohWSoAAAAASUVORK5CYII="
        />
      </Defs>
    </Svg>
  )
}

export default SvgComponent
