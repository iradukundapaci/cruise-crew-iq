// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle1073IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle1073Icon(props: Rectangle1073IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 38 50"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M30 0H7.5C3.358 0 0 4.477 0 10v30c0 5.523 3.358 10 7.5 10H30c4.142 0 7.5-4.477 7.5-10V10c0-5.523-3.358-10-7.5-10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle1073Icon;
/* prettier-ignore-end */
