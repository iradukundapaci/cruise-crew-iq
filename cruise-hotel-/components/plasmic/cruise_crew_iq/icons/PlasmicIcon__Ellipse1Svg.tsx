// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse1SvgIcon(props: Ellipse1SvgIconProps) {
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

      <circle
        cx={"27.643"}
        cy={"27.5"}
        r={"27.5"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Ellipse1SvgIcon;
/* prettier-ignore-end */
