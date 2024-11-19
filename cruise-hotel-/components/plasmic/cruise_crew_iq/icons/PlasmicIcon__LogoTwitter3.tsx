// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LogoTwitter3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LogoTwitter3Icon(props: LogoTwitter3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18 5.05c-.6.25-1.2.45-1.9.5.7-.4 1.2-1.05 1.45-1.8-.65.4-1.35.65-2.1.8A3.22 3.22 0 0013.1 3.5c-1.8 0-3.3 1.45-3.3 3.3 0 .25.05.5.1.75C7.15 7.4 4.75 6.1 3.1 4.1c-.3.5-.45 1.05-.45 1.65 0 1.15.6 2.15 1.45 2.75-.55 0-1.05-.15-1.5-.4v.05c0 1.6 1.15 2.9 2.65 3.2-.3.05-.55.1-.85.1-.2 0-.4 0-.6-.05.4 1.3 1.65 2.25 3.05 2.3-1.1.9-2.55 1.4-4.1 1.4-.25 0-.55 0-.8-.05 1.5.9 3.25 1.45 5.1 1.45 6.05 0 9.35-5 9.35-9.35v-.4c.6-.5 1.15-1.05 1.6-1.7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LogoTwitter3Icon;
/* prettier-ignore-end */
