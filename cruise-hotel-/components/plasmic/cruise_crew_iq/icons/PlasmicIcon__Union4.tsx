// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Union4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Union4Icon(props: Union4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1440 321"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M0 320.986V54h671.862l55.331-54 55.33 54H1440v266.986H0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Union4Icon;
/* prettier-ignore-end */
