// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector6Icon(props: Vector6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 17c0 1.7 1.353 3 3.122 3h14.57c1.769 0 3.122-1.3 3.122-3V9H0v8zM17.692 2H15.61V1c0-.6-.416-1-1.04-1-.625 0-1.041.4-1.041 1v1H7.285V1c0-.6-.416-1-1.04-1-.625 0-1.042.4-1.042 1v1h-2.08C1.352 2 0 3.3 0 5v2h20.814V5c0-1.7-1.353-3-3.122-3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector6Icon;
/* prettier-ignore-end */
