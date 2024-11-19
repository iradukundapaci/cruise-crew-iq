// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group5Icon(props: Group5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 471 185"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1 0v185M79.142 0v185M157.285 0v185M235.428 0v185M313.571 0v185M391.714 0v185M469.857 0v185"
        }
        stroke={"currentColor"}
        strokeDasharray={"4 4"}
      ></path>
    </svg>
  );
}

export default Group5Icon;
/* prettier-ignore-end */
