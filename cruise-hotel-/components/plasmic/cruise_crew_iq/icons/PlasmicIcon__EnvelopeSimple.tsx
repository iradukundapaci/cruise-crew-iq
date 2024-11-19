// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EnvelopeSimpleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EnvelopeSimpleIcon(props: EnvelopeSimpleIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14 3H2a.5.5 0 00-.5.5V12a1 1 0 001 1h11a1 1 0 001-1V3.5A.5.5 0 0014 3zm-.5 9h-11V4.637l5.162 4.732a.5.5 0 00.676 0L13.5 4.637V12z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default EnvelopeSimpleIcon;
/* prettier-ignore-end */
