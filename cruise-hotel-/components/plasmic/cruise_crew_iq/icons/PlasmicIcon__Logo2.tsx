// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Logo2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Logo2Icon(props: Logo2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 56 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M47.033 24.9h8.3L27.667 0 0 24.9h8.3L27.667 7.442 47.033 24.9zm-33.2-19.892V0h-8.3v12.45l8.3-7.442z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M25.846 23.738c0 .708-.166 1.356-.498 1.942-.32.576-.813 1.04-1.477 1.395-.653.343-1.456.514-2.407.514h-1.61v3.95H16.6V19.838h4.864c.94 0 1.737.166 2.39.498.664.332 1.162.791 1.494 1.378.332.586.498 1.261.498 2.025zM21.148 25c.919 0 1.378-.421 1.378-1.262 0-.852-.46-1.278-1.378-1.278h-1.294V25h1.294zm17.392-5.163L34.508 31.54H30.34l-4.05-11.703h3.486l2.656 8.45 2.64-8.45h3.469z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Logo2Icon;
/* prettier-ignore-end */
