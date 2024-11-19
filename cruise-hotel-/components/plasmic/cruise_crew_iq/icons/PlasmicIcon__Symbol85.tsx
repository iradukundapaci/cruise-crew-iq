// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Symbol85IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Symbol85Icon(props: Symbol85IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 13"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.693 12.58L0 2.887 2.887 0l6.806 6.806L16.5 0l2.887 2.887-9.694 9.693z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Symbol85Icon;
/* prettier-ignore-end */
