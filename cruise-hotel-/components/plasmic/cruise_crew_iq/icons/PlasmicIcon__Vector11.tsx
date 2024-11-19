// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector11Icon(props: Vector11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M20 9.09A10.91 10.91 0 0130.91 20c0 4.036-2.2 7.564-5.456 9.454v3.273a1.818 1.818 0 01-1.818 1.819h-7.272a1.818 1.818 0 01-1.819-1.819v-3.272c-3.253-1.892-5.454-5.42-5.454-9.455A10.91 10.91 0 0120 9.09zm3.636 27.274v1.818A1.818 1.818 0 0121.818 40h-3.636a1.818 1.818 0 01-1.818-1.818v-1.818h7.272zm10.91-18.182H40v3.636h-5.455v-3.636zM0 18.182h5.455v3.636H0v-3.636zM21.818 0v5.455h-3.636V0h3.636zM7.128 4.545L11 8.436 8.418 11 4.545 7.145l2.582-2.6zM29 8.418l3.855-3.873 2.6 2.6L31.582 11 29 8.418z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector11Icon;
/* prettier-ignore-end */
