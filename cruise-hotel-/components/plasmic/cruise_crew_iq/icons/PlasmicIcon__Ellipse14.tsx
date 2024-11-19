// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse14Icon(props: Ellipse14IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"7.5"} cy={"7.5"} r={"7.5"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Ellipse14Icon;
/* prettier-ignore-end */
