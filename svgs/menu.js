import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function MenuIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        stroke="#230C02"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M3 12h18M3 6h18M3 18h18" />
      </G>
    </Svg>
  )
}

export default MenuIcon;
