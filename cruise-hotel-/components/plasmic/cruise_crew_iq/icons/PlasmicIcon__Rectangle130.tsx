// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle130IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle130Icon(props: Rectangle130IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 280 52"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4 1h274a1 1 0 011 1v48a.998.998 0 01-1 1H4a3 3 0 01-3-3V4a3 3 0 013-3v0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
      ></path>
    </svg>
  );
}

export default Rectangle130Icon;
/* prettier-ignore-end */
