// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle1092IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle1092Icon(props: Rectangle1092IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 177 63"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M169.5 0H7.5C3.358 0 0 4.477 0 10v43c0 5.523 3.358 10 7.5 10h162c4.142 0 7.5-4.477 7.5-10V10c0-5.523-3.358-10-7.5-10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle1092Icon;
/* prettier-ignore-end */
