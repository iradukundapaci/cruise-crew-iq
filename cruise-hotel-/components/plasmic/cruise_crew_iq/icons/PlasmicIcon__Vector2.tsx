// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector2Icon(props: Vector2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.326 10c.572 0 1.062-.196 1.47-.588.407-.391.611-.862.611-1.412 0-.55-.204-1.021-.61-1.413A2.049 2.049 0 008.325 6c-.573 0-1.063.196-1.47.587A1.89 1.89 0 006.244 8c0 .55.204 1.02.612 1.412.407.392.897.588 1.47.588zm0 10c-2.793-2.283-4.879-4.404-6.257-6.363C.689 11.679 0 9.867 0 8.2c0-2.5.837-4.492 2.511-5.975C4.185.742 6.123 0 8.326 0c2.202 0 4.14.742 5.814 2.225C15.814 3.708 16.65 5.7 16.65 8.2c0 1.667-.69 3.479-2.068 5.437-1.379 1.959-3.465 4.08-6.257 6.363z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
