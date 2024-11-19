// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group23IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group23Icon(props: Group23IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 25"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21.339 16.161a12.452 12.452 0 00-4.75-2.98 7.224 7.224 0 003.138-5.954C19.727 3.242 16.485 0 12.5 0 8.515 0 5.273 3.242 5.273 7.227a7.224 7.224 0 003.138 5.955 12.452 12.452 0 00-4.75 2.98A12.418 12.418 0 000 25h1.953c0-5.816 4.731-10.547 10.547-10.547 5.816 0 10.547 4.731 10.547 10.547H25c0-3.339-1.3-6.478-3.661-8.839zM12.5 12.5a5.28 5.28 0 01-5.273-5.273A5.28 5.28 0 0112.5 1.953a5.28 5.28 0 015.273 5.274A5.28 5.28 0 0112.5 12.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group23Icon;
/* prettier-ignore-end */
