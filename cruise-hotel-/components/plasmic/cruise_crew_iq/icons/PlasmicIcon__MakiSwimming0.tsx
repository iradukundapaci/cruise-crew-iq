// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MakiSwimming0IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MakiSwimming0Icon(props: MakiSwimming0IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 55 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M36.767 0c-.407 0-1.582.535-1.582.535l-12.08 6.109c-1.61.636-2.247 3.203-1.28 4.487l3.528 5.12-14.437 7.378 7.266 5.455 9.098-5.455 9.09 5.455 3.645-3.644-10.91-14.546 9.299-5.563c1.92-.967 1.61-2.56 1.61-3.527C40 1.04 38.706 0 36.767 0zm7.786 10.91a6.366 6.366 0 10-.011 12.73 6.366 6.366 0 00.01-12.73zM9.09 29.09L0 34.546V40l9.09-5.455L18.183 40l9.098-5.455L36.37 40l7.266-5.455L54.546 40v-5.455l-10.91-5.454-7.265 5.454-9.091-5.454-9.098 5.454-9.091-5.454z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MakiSwimming0Icon;
/* prettier-ignore-end */
