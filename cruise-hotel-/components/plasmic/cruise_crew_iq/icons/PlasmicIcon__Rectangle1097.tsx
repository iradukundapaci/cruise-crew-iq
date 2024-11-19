// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle1097IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle1097Icon(props: Rectangle1097IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 258 78"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M246.924 0H10.736C4.806 0 0 4.477 0 10v58c0 5.523 4.807 10 10.736 10h236.188c5.929 0 10.736-4.477 10.736-10V10c0-5.523-4.807-10-10.736-10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle1097Icon;
/* prettier-ignore-end */
