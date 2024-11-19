// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Union3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Union3Icon(props: Union3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1920 321"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M0 320.986V54h895.816L969.59 0l73.77 54H1920v266.986H0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Union3Icon;
/* prettier-ignore-end */
