// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle132IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle132Icon(props: Rectangle132IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 212 52"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4 1h205.5c.199 0 .39.105.53.293.141.187.22.442.22.707v48c0 .265-.079.52-.22.707-.14.188-.331.293-.53.293H4c-.597 0-1.169-.316-1.591-.879-.422-.562-.659-1.325-.659-2.121V4c0-.796.237-1.559.659-2.121C2.831 1.316 3.403 1 4 1v0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
      ></path>
    </svg>
  );
}

export default Rectangle132Icon;
/* prettier-ignore-end */
