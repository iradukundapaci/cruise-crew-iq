// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path41IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path41Icon(props: Path41IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M4.745 18.676v-8.5H6.92l.31-3.319H4.745V4.78c0-.933.234-1.659 1.245-1.659h1.32V.11C7 .11 6.225.01 5.367.01a2.326 2.326 0 00-1.274.253 3.088 3.088 0 00-1.076.942 4.368 4.368 0 00-.682 1.457 5.253 5.253 0 00-.16 1.703v2.488H0v3.32h2.175v8.5l2.57.003z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path41Icon;
/* prettier-ignore-end */
