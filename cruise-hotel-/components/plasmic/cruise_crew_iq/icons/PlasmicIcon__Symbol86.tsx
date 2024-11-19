// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Symbol86IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Symbol86Icon(props: Symbol86IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 10"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.693 9.435L0 2.165 2.887 0l6.806 5.104L16.5 0l2.887 2.165-9.694 7.27z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Symbol86Icon;
/* prettier-ignore-end */
