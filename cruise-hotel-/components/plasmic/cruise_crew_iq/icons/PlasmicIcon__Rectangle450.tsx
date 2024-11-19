// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle450IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle450Icon(props: Rectangle450IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 256 149"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M0 0h256v99a49.997 49.997 0 01-50 50H50A50 50 0 010 99V0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle450Icon;
/* prettier-ignore-end */
