// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle131IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle131Icon(props: Rectangle131IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 80 52"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M0 0h76a4 4 0 014 4v44a4 4 0 01-4 4H0V0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle131Icon;
/* prettier-ignore-end */
