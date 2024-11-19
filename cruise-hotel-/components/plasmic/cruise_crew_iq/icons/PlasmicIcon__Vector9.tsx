// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector9Icon(props: Vector9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 67 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.667 3.333A3.33 3.33 0 0115 0h1.667A3.33 3.33 0 0120 3.333v33.334A3.33 3.33 0 0116.667 40H15a3.33 3.33 0 01-3.333-3.333v-3.334h-5A3.33 3.33 0 013.333 30v-6.667A3.33 3.33 0 010 20a3.33 3.33 0 013.333-3.333V10a3.33 3.33 0 013.334-3.333h5V3.333zm43.333 0v3.334h5A3.33 3.33 0 0163.333 10v6.667A3.33 3.33 0 0166.667 20a3.33 3.33 0 01-3.334 3.333V30A3.33 3.33 0 0160 33.333h-5v3.334A3.33 3.33 0 0151.667 40H50a3.33 3.33 0 01-3.333-3.333V3.333A3.33 3.33 0 0150 0h1.667A3.33 3.33 0 0155 3.333zM43.333 16.667v6.666h-20v-6.666h20z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector9Icon;
/* prettier-ignore-end */
