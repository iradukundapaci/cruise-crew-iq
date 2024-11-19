// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path38IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path38Icon(props: Path38IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 19"}
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
          "M6.326 18.676v-8.5h2.9l.415-3.319H6.326V4.78c0-.933.311-1.659 1.659-1.659h1.763V.11C9.333.11 8.3.01 7.156.01A4 4 0 002.9 4.364v2.488H0v3.32h2.9v8.5l3.426.003z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path38Icon;
/* prettier-ignore-end */
