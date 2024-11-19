// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse18Icon(props: Ellipse18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 70 70"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"35"} cy={"35"} r={"35"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Ellipse18Icon;
/* prettier-ignore-end */