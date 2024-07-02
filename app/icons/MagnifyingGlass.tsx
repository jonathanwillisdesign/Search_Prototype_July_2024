import * as React from "react";

const MagnifyingGlass = (props: any) => (
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
      d="M4.417 9a4.583 4.583 0 1 1 7.995 3.06l-.353.352A4.583 4.583 0 0 1 4.417 9Zm8.321 4.8a6.083 6.083 0 1 1 1.06-1.06l2.398 2.396.53.53-1.06 1.061-.53-.53-2.398-2.398Z"
      fill="currentColor"
    />
  </svg>
);

export default MagnifyingGlass;
