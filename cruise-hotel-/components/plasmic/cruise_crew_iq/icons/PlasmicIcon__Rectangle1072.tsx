// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle1072IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle1072Icon(props: Rectangle1072IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 50 50"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M40 0H10C4.477 0 0 4.477 0 10v30c0 5.523 4.477 10 10 10h30c5.523 0 10-4.477 10-10V10c0-5.523-4.477-10-10-10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle1072Icon;
/* prettier-ignore-end */
