// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group13Icon(props: Group13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 11"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.643 5.532c.291-1.623.056-3.051-1.151-4.259A4.342 4.342 0 004.398 0c-.197 0-.393.013-.586.038a.747.747 0 00-.429 1.27l1.011 1v2.086H2.313L1.309 3.376a.747.747 0 00-1.268.427A4.392 4.392 0 001.958 8.05c1.194.804 2.297.824 3.58.593l2.301 2.304.517-.517a2.924 2.924 0 012.831-.76l.795-.794-3.339-3.343z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group13Icon;
/* prettier-ignore-end */
