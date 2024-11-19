// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group6Icon(props: Group6IconProps) {
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
          "M18.906 17.781l-4.601-4.601A8.069 8.069 0 008.067 0a8.066 8.066 0 100 16.133 8.024 8.024 0 005.109-1.824l4.601 4.597a.797.797 0 101.13-1.125zm-10.84-3.254a6.47 6.47 0 01-6.464-6.46 6.473 6.473 0 016.464-6.465 6.475 6.475 0 016.465 6.464c0 3.563-2.902 6.461-6.465 6.461z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group6Icon;
/* prettier-ignore-end */
