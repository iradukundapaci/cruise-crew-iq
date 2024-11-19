// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group24IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group24Icon(props: Group24IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 25"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M20.299 13.265a4.71 4.71 0 00-1.368.202l-5.7 1.578V6.984a.733.733 0 011.465 0v5.697h.732c2.827 0 5.127-2.3 5.127-5.127a5.145 5.145 0 00-3.74-4.936L7.355 0v12.556l-3.796 1.05a4.702 4.702 0 00-2.891 6.978 4.66 4.66 0 002.256 1.935 4.738 4.738 0 002.904.211l1.527-.422v1.268L12.498 25l9.16-2.535.019-.006a4.737 4.737 0 002.381-1.674 4.66 4.66 0 00.94-2.82c0-2.592-2.108-4.7-4.7-4.7zM7.355 16.672l-3.852 1.066.391 1.412 3.461-.958v2.596l-1.889.523a3.217 3.217 0 01-3.542-1.48 3.239 3.239 0 011.998-4.805l3.433-.95v2.596zm4.41-9.688v16.293l-2.945-.815V1.925l7.602 2.104a3.674 3.674 0 012.668 3.525 3.668 3.668 0 01-2.93 3.589v-4.16a2.2 2.2 0 00-2.197-2.197 2.2 2.2 0 00-2.197 2.198zm9.492 14.072l-8.026 2.221v-2.596l8.263-2.287-.39-1.412-7.873 2.18v-2.597l6.1-1.688.019-.006a3.237 3.237 0 014.183 3.094c0 1.428-.914 2.67-2.276 3.09z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group24Icon;
/* prettier-ignore-end */
