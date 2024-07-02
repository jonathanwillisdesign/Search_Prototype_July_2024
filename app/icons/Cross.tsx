import * as React from "react";

const Cross = (props: any) => (
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
      d="m8.94 10-6.47 6.47 1.06 1.06L10 11.06l6.47 6.47 1.06-1.06L11.06 10l6.47-6.47-1.06-1.06L10 8.94 3.53 2.47 2.47 3.53 8.94 10Z"
      fill="currentColor"
    />
  </svg>
);

export default Cross;
