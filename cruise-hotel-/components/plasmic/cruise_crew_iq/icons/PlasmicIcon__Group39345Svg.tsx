// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group39345SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group39345SvgIcon(props: Group39345SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 56 55"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"27.643"} cy={"27.5"} r={"27.5"} fill={"#00A699"}></circle>

      <path d={"M21.143 36V18l13 9-13 9z"} fill={"#fff"}></path>
    </svg>
  );
}

export default Group39345SvgIcon;
/* prettier-ignore-end */
