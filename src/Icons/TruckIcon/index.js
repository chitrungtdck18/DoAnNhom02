import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={20}
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
          <Use xlinkHref="#image0_625_2" transform="scale(.03333)" />
        </Pattern>
        <Image
          id="image0_625_2"
          width={30}
          height={30}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAACFElEQVRIie2VPWgTYRjHf897gRgMuOmJH6MgOmptdYnSrRkczLnpJk4OAaHUmJqzLXWpgxTsqC6aTEXRUVFRix/gIIhzhatrKfiRu8chSam51LvLUQTJHw7ued73//yeh3uPFwYaaIskAHatNKYiCwJ7+qixjMoFb/LBkyQm08LL7T6hAHsRXUhqMuvmdNrXLzgkQRdBC5rL5jWXzSPmJPAwVXt/1Ads19Gu7Lh3tX4DwK45S0DgTdZHAHa5zoTAdAKGoixlLD2zXGl87SRDEwu62IG2E0MIw51wpVqfAX2UACwIw78Cmd2YzITb42ZkKZU5hGLUtsCYE98q91/1WgtN7Ae877XRds+e41ohA9Dc9v1dZHPAZtCe4JCUl+2XO7bZ+TwOMI5CYMuyjmyMvYNaADkP8hm0CWD9zB5NCw59YzQoA8/WY6fhe3CX1gOAqJTTgnv+TgpXWqc3rN2uU1G4ngbqVesSnrjVzbTtlkZQmfNV3wIYiyFRKSuMpYF21BPcxhcRipZIK9TNd/aj6FO9RfpnYMuuOS8Q9odWhHHNZU/TbK4KMpq48l/8+cKh0U0n9n2dX7l8b83P/phPDI3yi6p052y39AbkmAoTga+3jJFL7dvotVetH48CxvWHJlYxU0AgyoxlZLVtChCm4kwa1291G9eefvqy/dThD6J6AJEdwEdUL3rVxuM44LT+gf4f/Qbre8ry449BEAAAAABJRU5ErkJggg=="
        />
      </Defs>
    </Svg>
  )
}

export default SvgComponent
