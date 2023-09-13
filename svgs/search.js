import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SearchIcon(props) {
  return (
    <Svg
      width={34}
      height={28}
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
        <Path d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35" />
      </G>
    </Svg>
  )
}

export default SearchIcon;
