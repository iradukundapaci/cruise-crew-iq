// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GlyphIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GlyphIcon(props: GlyphIconProps) {
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
          "M5.208 22.917A2.086 2.086 0 007.292 25h10.416a2.086 2.086 0 002.084-2.083v-.912H5.208v.912zM19.792 2.083A2.085 2.085 0 0017.708 0H7.292a2.086 2.086 0 00-2.084 2.083v1.042h14.584V2.083zM24.71 6.7l-3.125-3.255-1.503 1.443 1.307 1.362h-1.597v2.083h1.71l-1.39 1.332 1.442 1.504 3.125-2.995a1.041 1.041 0 00.03-1.473z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M16.667 6.25h3.125V4.167H5.208v12.5h3.125v2.083H5.208v2.083h14.584v-12.5h-3.125V6.25zm-1.042 4.167h-3.646a.52.52 0 100 1.041h1.042a2.604 2.604 0 01.52 5.157v1.093h-2.083v-1.041H9.375v-2.084h3.646a.52.52 0 100-1.041h-1.042a2.604 2.604 0 01-.52-5.157V7.292h2.083v1.041h2.083v2.084zm-12.127 6.25l1.39-1.332-1.442-1.504L.32 16.826a1.042 1.042 0 00-.03 1.473l3.124 3.256 1.503-1.443L3.61 18.75h1.597v-2.083h-1.71z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GlyphIcon;
/* prettier-ignore-end */
