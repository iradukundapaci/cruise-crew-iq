// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LogoIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LogoIcon(props: LogoIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 53 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M44.794 24.9h7.904L26.35 0 0 24.9h7.905L26.349 7.442 44.794 24.9zM13.174 5.008V0H5.27v12.45l7.905-7.442z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M24.615 23.738c0 .708-.158 1.356-.474 1.942-.306.576-.775 1.04-1.407 1.395-.622.343-1.386.514-2.293.514h-1.533v3.95h-3.099V19.838h4.632c.896 0 1.655.166 2.277.498.632.332 1.107.791 1.423 1.378.316.586.474 1.261.474 2.025zM20.14 25c.875 0 1.312-.421 1.312-1.262 0-.852-.437-1.278-1.312-1.278h-1.233V25h1.233zm16.565-5.163L32.863 31.54h-3.968l-3.857-11.703h3.32l2.53 8.45 2.513-8.45h3.304z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LogoIcon;
/* prettier-ignore-end */
