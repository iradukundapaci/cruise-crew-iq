// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group21Icon(props: Group21IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 44 30"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"15"}
        cy={"15"}
        r={"15"}
        fill={"currentColor"}
        fillOpacity={".5"}
      ></circle>

      <circle
        cx={"29"}
        cy={"15"}
        r={"15"}
        fill={"currentColor"}
        fillOpacity={".5"}
      ></circle>
    </svg>
  );
}

export default Group21Icon;
/* prettier-ignore-end */
