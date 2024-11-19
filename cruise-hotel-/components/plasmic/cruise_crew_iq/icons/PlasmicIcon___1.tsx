// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _1Icon(props: _1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15.583 17.39H2.617A2.62 2.62 0 010 14.774V7.036a2.62 2.62 0 012.617-2.618h12.966A2.62 2.62 0 0118.2 7.036v7.737a2.62 2.62 0 01-2.617 2.618zM2.617 6.06a.978.978 0 00-.976.977v7.737a.978.978 0 00.976.977h12.966a.978.978 0 00.976-.977V7.036a.978.978 0 00-.976-.977H2.617z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M19.259 12.973h-1.88a.82.82 0 010-1.64h1.88a.978.978 0 00.975-.977V2.618a.978.978 0 00-.975-.977H6.293a.978.978 0 00-.976.976v2.621a.82.82 0 01-1.64 0v-2.62A2.62 2.62 0 016.292 0H19.26a2.62 2.62 0 012.616 2.618v7.738a2.62 2.62 0 01-2.616 2.617z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M17.38 11.528H.82a.82.82 0 01-.82-.82V7.951a.82.82 0 01.82-.82h16.56a.82.82 0 01.82.82v2.755a.82.82 0 01-.82.82zM1.64 9.887h14.92V8.772H1.64v1.115z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _1Icon;
/* prettier-ignore-end */
