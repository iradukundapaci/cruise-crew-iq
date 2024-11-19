// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle1091IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle1091Icon(props: Rectangle1091IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 268 78"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M256.833 0H11.167C4.999 0 0 4.477 0 10v58c0 5.523 5 10 11.167 10h245.666C263.001 78 268 73.523 268 68V10c0-5.523-4.999-10-11.167-10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle1091Icon;
/* prettier-ignore-end */
