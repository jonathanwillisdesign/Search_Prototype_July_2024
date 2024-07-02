import * as React from "react";

const CaretUp = (props: any) => (
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
      d="M4.94 12 10 6.94 15.06 12 14 13.06l-4-4-4 4L4.94 12Z"
      fill="currentColor"
    />
  </svg>
);

export default CaretUp;
