// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector10Icon(props: Vector10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 55 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M53.071 18.79C50.661 7.897 47.035 2.08 41.655.493A12.172 12.172 0 0038.172 0c-1.557 0-2.914.38-4.349.782-1.73.485-3.694 1.036-6.558 1.036s-4.83-.55-6.563-1.035C19.266.38 17.91 0 16.357 0a13.15 13.15 0 00-3.605.491C7.401 2.073 3.776 7.885 1.332 18.784c-2.63 11.728-1.336 19.132 3.628 20.85.68.24 1.397.364 2.118.366 3.4 0 6.128-2.833 7.99-5.151 2.106-2.625 4.57-3.957 12.197-3.957 6.811 0 9.63.924 12.065 3.957 1.53 1.906 2.977 3.24 4.42 4.08 1.919 1.115 3.837 1.363 5.7.723 2.933-1 4.614-3.647 4.998-7.867.292-3.236-.157-7.486-1.377-12.994zm-31.26-.61h-3.636v3.635a1.818 1.818 0 01-3.636 0V18.18h-3.635a1.818 1.818 0 110-3.635h3.635v-3.636a1.818 1.818 0 013.636 0v3.636h3.636a1.818 1.818 0 010 3.635zm9.544.454a2.272 2.272 0 110-4.545 2.272 2.272 0 010 4.545zm5 5a2.273 2.273 0 110-4.546 2.273 2.273 0 010 4.545zm0-10a2.272 2.272 0 110-4.544 2.272 2.272 0 010 4.544zm4.999 5a2.273 2.273 0 110-4.545 2.273 2.273 0 010 4.545z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector10Icon;
/* prettier-ignore-end */
