// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group26IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group26Icon(props: Group26IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 23"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M27.982 7.36h-1.784a8.006 8.006 0 00-1.899-2.986l2.752-1.214a.874.874 0 00.497-1.023A2.886 2.886 0 0024.764 0h-2.27a2.885 2.885 0 00-2.762 2.067h-2.397c-.9 3.326-3.941 5.78-7.545 5.78a7.79 7.79 0 01-5.61-2.384 7.984 7.984 0 00-.97 1.865 1.942 1.942 0 01-1.474-1.464.879.879 0 10-1.716.383 3.678 3.678 0 002.777 2.79 8.106 8.106 0 00-.065 1.023v.852a7.996 7.996 0 004.652 7.273v1.937a1.909 1.909 0 103.817 0v-1.217h7.15v1.217a1.909 1.909 0 003.818 0v-2.011a8.004 8.004 0 004.177-4.96h1.635A2.023 2.023 0 0030 11.125V9.387c0-1.12-.904-2.028-2.018-2.028zm-6.486.507a.876.876 0 110-1.752.876.876 0 010 1.752z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group26Icon;
/* prettier-ignore-end */
