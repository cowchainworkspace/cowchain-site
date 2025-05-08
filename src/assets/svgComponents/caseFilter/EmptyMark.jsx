import React from "react";

export const EmptyMark = ({ ...props }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="0.5" y="0.5" width="15" height="15" stroke="#3E3747" />
    <rect
      x="3"
      y="3"
      width="10"
      height="10"
      fill="url(#paint0_linear_11565_15184)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_11565_15184"
        x1="5.5"
        y1="3"
        x2="13"
        y2="15.0833"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#642AAF" />
        <stop offset="1" stop-color="#D885FF" />
      </linearGradient>
    </defs>
  </svg>
);
