import * as React from "react";

function SvgMedal1(props) {
  return (
    <svg
      height="1em"
      viewBox="0 0 512 512"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="M256 242c-74.44 0-135 60.56-135 135s60.56 135 135 135 135-60.56 135-135-60.56-135-135-135zm0 210c-41.35 0-75-33.64-75-75s33.65-75 75-75 75 33.64 75 75-33.65 75-75 75z" />
      <circle cx={256} cy={377} r={45} />
      <path d="M319.67 0H192.33l63.433 188.43zM349.41 241.06l52.96-160.54-58.89-57.33-64.57 190.39c25.9 3.62 49.89 13.26 70.5 27.48zM232.6 213.65L168.49 23.21l-58.86 57.31 52.96 160.54c20.48-14.13 44.3-23.74 70.01-27.41z" />
    </svg>
  );
}

export default SvgMedal1;
