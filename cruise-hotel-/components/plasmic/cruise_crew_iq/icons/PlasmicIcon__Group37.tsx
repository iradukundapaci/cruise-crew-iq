// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group37IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group37Icon(props: Group37IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 26"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.833 0h2.334v2.333h-2.334V0zm7 0h2.334v2.333h-2.334V0zm-14 0h2.334v2.333H5.833V0zm21 2.333h-4.666v3.5h-2.334v-3.5h-4.666v3.5h-2.334v-3.5H8.167v3.5H5.833v-3.5H1.167A1.167 1.167 0 000 3.5v21a1.167 1.167 0 001.167 1.167h25.666A1.167 1.167 0 0028 24.5v-21a1.167 1.167 0 00-1.167-1.167zm-5.344 14.95L19.833 16.1V21a1.167 1.167 0 01-1.166 1.167H15.75V17.5a1.167 1.167 0 00-1.167-1.167h-1.166A1.167 1.167 0 0012.25 17.5v4.667H9.333A1.167 1.167 0 018.167 21v-4.9L6.51 17.283l-1.356-1.9 8.167-5.832a1.181 1.181 0 011.356 0l8.167 5.833-1.356 1.899z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group37Icon;
/* prettier-ignore-end */
