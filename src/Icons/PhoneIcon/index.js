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
          <Use xlinkHref="#image0_613_3" transform="scale(.03333)" />
        </Pattern>
        <Image
          id="image0_613_3"
          width={30}
          height={30}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABNklEQVRIie3VsS4EURQG4I/NrsQ2JCR4BSWFUkTiKRQUGtHRiobGCxAPIOEBCJVCFFYlKlZHQUQkCs1mFLObbHbvbMjOTLbYPznNnZt8mZl7z6GfHsgqnlDBeF7oHqKmOsoDXWpBI9QwkzV8GYAjXGMgS/grAY6wnCX80QF+QTkNZDCw9thh/xSm04BD2ZL8xg8oZgVP4jsBXsgKbWQngFayRokP0HML/IbRPPBZ/LTgVxjKA9/Q/smPZdxIGjkM4Pt5wAWcBvCD+rPmFDGH4bTwEs4C+DlG6nvmcV9ff8WacIP6d8q4CODvuAusNwZLKlOthJMEJKlq4nk+1i1eEP/f/+ARbruFG1nXfs87VTUtmLjJVP8Ir6QJEx+6bcmDJcJu2mhzJrCJG3Ff/xRft8Us0X56N78yrqGT0YuBHgAAAABJRU5ErkJggg=="
        />
      </Defs>
    </Svg>
  )
}

export default SvgComponent
