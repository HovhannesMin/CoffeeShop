import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Notification(props) {
  return (
    <Svg
      width={25}
      height={34}
      viewBox="0 0 25 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.5 28.806a1.855 1.855 0 001.792-1.584h-3.653a1.854 1.854 0 001.861 1.584zM22.813 24.535l-.237-.209a9.977 9.977 0 01-1.743-2.034 8.77 8.77 0 01-.937-3.34V15.52a7.585 7.585 0 00-.111-1.243 5.209 5.209 0 01-4.16-5.111v-.438a7.34 7.34 0 00-2.306-.694V7.16a.927.927 0 10-1.854 0v.91a7.507 7.507 0 00-6.458 7.45v3.431a8.77 8.77 0 01-.938 3.34 10 10 0 01-1.715 2.035l-.236.209v1.958h20.694v-1.958z"
        fill="#230C02"
      />
      <Path
        d="M20.833 12.639a3.472 3.472 0 100-6.944 3.472 3.472 0 000 6.944z"
        fill="#FB452D"
      />
    </Svg>
  )
}

export default Notification;
