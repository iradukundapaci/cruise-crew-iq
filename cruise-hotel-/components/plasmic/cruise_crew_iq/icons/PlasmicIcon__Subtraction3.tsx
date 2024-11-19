// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Subtraction3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Subtraction3Icon(props: Subtraction3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 74 61"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M36.762 60.841c-8.485-.006-16.706-2.443-23.272-6.899C6.924 49.486 2.417 43.286.733 36.391-.952 29.496.289 22.33 4.246 16.107 8.202 9.883 14.63 4.985 22.444 2.24c8.958-3.016 18.989-2.987 27.922.081s16.05 8.928 19.813 16.313c3.763 7.385 3.869 15.701.295 23.15C66.9 49.234 59.933 55.217 51.08 58.44c-4.53 1.59-9.4 2.407-14.318 2.4zM22.02 20.596l-6.05 4.9 20.31 16.445 20.31-16.45-6.05-4.9-14.26 11.55-14.26-11.545z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Subtraction3Icon;
/* prettier-ignore-end */
