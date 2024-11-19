// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle451IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle451Icon(props: Rectangle451IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 247 149"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 0h246.123v99c0 13.261-5.065 25.979-14.08 35.355-9.015 9.377-21.242 14.645-33.991 14.645H48.071c-12.75 0-24.976-5.268-33.991-14.645C5.065 124.979 0 112.261 0 99V0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle451Icon;
/* prettier-ignore-end */
