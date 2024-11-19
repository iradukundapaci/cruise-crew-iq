// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group12Icon(props: Group12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 12"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.66 4.48C8.472 3.292 7.042 3.036 5.401 3.33L2.071 0l-.795.795a2.924 2.924 0 01-.76 2.831L0 4.143l2.292 2.291c-.232 1.293-.21 2.39.593 3.58.927 1.373 2.549 2.153 4.248 1.919a.747.747 0 00.426-1.268L6.552 9.659V7.588h2.073L9.627 8.59a.747.747 0 001.268-.43 4.379 4.379 0 00-1.234-3.679z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group12Icon;
/* prettier-ignore-end */
