// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Subtraction2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Subtraction2Icon(props: Subtraction2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 61 61"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M30.481 60.841a30.508 30.508 0 01-11.872-58.6 30.508 30.508 0 0123.744 56.2 30.306 30.306 0 01-11.872 2.4zM18.258 20.596l-5.017 4.9 16.84 16.445 16.841-16.45-5.017-4.9-11.824 11.55-11.823-11.545z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Subtraction2Icon;
/* prettier-ignore-end */
