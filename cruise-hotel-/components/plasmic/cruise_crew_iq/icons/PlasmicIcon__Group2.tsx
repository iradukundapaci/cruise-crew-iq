// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group2Icon(props: Group2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 23"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M25.982.923a.762.762 0 00-1.016-.872L.49 9.395a.762.762 0 00-.003 1.422l6.876 2.656v8.364a.762.762 0 001.442.343l2.844-5.644 6.94 5.15a.762.762 0 001.182-.389C26.251.053 25.971.977 25.982.923zM19.94 3.6L8.017 12.092l-5.13-1.981L19.94 3.6zM8.887 13.343L19.28 5.94c-8.943 9.435-8.476 8.938-8.515 8.99-.058.079.1-.225-1.878 3.702v-5.29zm9.742 6.477l-6.108-4.534L23.566 3.634 18.629 19.82z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group2Icon;
/* prettier-ignore-end */
