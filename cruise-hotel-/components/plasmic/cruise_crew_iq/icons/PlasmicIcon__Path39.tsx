// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path39IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path39Icon(props: Path39IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 16"}
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
          "M5.914 15.141A10.79 10.79 0 0016.803 4.252v-.519a8.428 8.428 0 001.867-1.97 8.608 8.608 0 01-2.178.622A4.035 4.035 0 0018.151.311a9.53 9.53 0 01-2.385.933A3.7 3.7 0 0012.966 0a3.9 3.9 0 00-3.837 3.837c-.025.28.01.563.1.83A10.722 10.722 0 011.348.623c-.341.6-.52 1.28-.519 1.97a4.12 4.12 0 001.659 3.215A3.5 3.5 0 01.725 5.29a3.79 3.79 0 003.111 3.733 3.2 3.2 0 01-1.037.1 1.765 1.765 0 01-.726-.1 3.929 3.929 0 003.63 2.7 7.83 7.83 0 01-4.77 1.66 2.87 2.87 0 01-.933-.1 9.788 9.788 0 005.911 1.866"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path39Icon;
/* prettier-ignore-end */
