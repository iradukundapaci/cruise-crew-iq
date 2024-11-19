// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector4Icon(props: Vector4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.345 17.778h2.313v-8.89H12.72v8.89h2.312V11.11h2.313v6.667zm-16.189 0V1.11c0-.295.122-.577.339-.786A1.18 1.18 0 012.313 0H18.5c.307 0 .601.117.818.325.217.209.339.491.339.786v5.556h2.312v11.11h1.157V20H0v-2.222h1.156zm4.626-8.89v2.223h2.312V8.89H5.782zm0 4.445v2.223h2.312v-2.223H5.782zm0-8.889v2.223h2.312V4.444H5.782z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector4Icon;
/* prettier-ignore-end */
