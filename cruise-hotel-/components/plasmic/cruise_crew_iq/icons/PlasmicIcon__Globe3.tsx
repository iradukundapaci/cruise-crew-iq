// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Globe3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Globe3Icon(props: Globe3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M10 2.143v15.714M2.143 10h15.714"}
        stroke={"currentColor"}
        strokeWidth={"1.714"}
        strokeMiterlimit={"10"}
      ></path>

      <path
        d={
          "M10 17.857c2.17 0 3.929-3.518 3.929-7.857 0-4.34-1.76-7.857-3.929-7.857-2.17 0-3.929 3.518-3.929 7.857 0 4.34 1.76 7.857 3.929 7.857z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.714"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>

      <path
        d={"M10 17.857a7.857 7.857 0 100-15.714 7.857 7.857 0 000 15.714z"}
        stroke={"currentColor"}
        strokeWidth={"1.714"}
        strokeMiterlimit={"10"}
        strokeLinecap={"square"}
      ></path>
    </svg>
  );
}

export default Globe3Icon;
/* prettier-ignore-end */
