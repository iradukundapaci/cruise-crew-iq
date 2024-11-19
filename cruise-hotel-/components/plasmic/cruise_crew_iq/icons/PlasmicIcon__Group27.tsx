// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group27IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group27Icon(props: Group27IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 13"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.058 0C2.718 0 0 2.721 0 6.065c0 3.345 2.718 6.066 6.058 6.066s6.058-2.721 6.058-6.066C12.116 2.721 9.398 0 6.058 0zm-.562 5.139H6.62a2.305 2.305 0 012.301 2.303 2.306 2.306 0 01-1.985 2.28v.331a.879.879 0 01-1.758 0v-.308h-.224c-.971 0-1.761-.79-1.761-1.762a.879.879 0 011.758 0l1.669.004a.545.545 0 000-1.09H5.495a2.305 2.305 0 01-2.301-2.304c0-1.162.865-2.126 1.985-2.28v-.235a.879.879 0 011.758 0v.212h.224c.971 0 1.761.79 1.761 1.762a.879.879 0 01-1.758 0V4.05l-1.668-.002a.545.545 0 000 1.09z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group27Icon;
/* prettier-ignore-end */
