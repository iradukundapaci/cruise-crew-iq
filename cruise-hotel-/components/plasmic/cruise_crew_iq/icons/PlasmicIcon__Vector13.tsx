// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector13Icon(props: Vector13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 42 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M29.524 28.605a10.42 10.42 0 01-6.76 1.948h-5.61V40h-5.608V13.432h11.572a9.447 9.447 0 016.376 2.037 7.941 7.941 0 012.391 6.347 8.147 8.147 0 01-2.361 6.79zm-4.428-9.564a4.605 4.605 0 00-2.953-.886h-4.988v7.823h4.988a4.37 4.37 0 002.953-.945 3.869 3.869 0 001.062-2.952 3.63 3.63 0 00-1.062-3.04zm15.97-7.941a1.476 1.476 0 00-.708-1.949L20.668 0 .858 9.151a1.48 1.48 0 001.24 2.687l18.569-8.59 18.568 8.56a1.476 1.476 0 001.948-.708h-.118z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector13Icon;
/* prettier-ignore-end */
