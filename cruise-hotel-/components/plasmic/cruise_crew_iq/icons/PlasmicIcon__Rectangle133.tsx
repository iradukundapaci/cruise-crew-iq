// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle133IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle133Icon(props: Rectangle133IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 60 52"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 0h57c.796 0 1.559.421 2.121 1.172.563.75.879 1.767.879 2.828v44c0 1.06-.316 2.078-.879 2.828C58.56 51.578 57.796 52 57 52H0V0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle133Icon;
/* prettier-ignore-end */
