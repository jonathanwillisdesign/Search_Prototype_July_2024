import * as React from "react";

const CaretDown = (props: any) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.06 8 10 13.06 4.94 8 6 6.94l4 4 4-4L15.06 8Z"
      fill="currentColor"
    />
  </svg>
);

export default CaretDown;
