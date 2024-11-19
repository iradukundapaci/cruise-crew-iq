// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group38IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group38Icon(props: Group38IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 27 26"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.338 0h2.244v2.333h-2.244V0zm6.73 0h2.243v2.333h-2.243V0zM5.608 0h2.244v2.333H5.608V0z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M25.798 2.333h-4.487v3.5h-2.243v-3.5h-4.487v3.5h-2.243v-3.5H7.852v3.5H5.608v-3.5H1.122a1.1 1.1 0 00-.793.342A1.19 1.19 0 000 3.5v21c0 .31.118.606.329.825a1.1 1.1 0 00.793.342h24.676a1.1 1.1 0 00.793-.342c.21-.219.329-.516.329-.825v-21c0-.31-.119-.606-.329-.825a1.1 1.1 0 00-.793-.342zm-5.138 14.95L19.068 16.1V21c0 .31-.118.606-.328.825a1.1 1.1 0 01-.793.342h-2.805V17.5c0-.31-.118-.606-.328-.825a1.1 1.1 0 00-.793-.342h-1.122a1.1 1.1 0 00-.793.342 1.19 1.19 0 00-.329.825v4.667H8.973a1.1 1.1 0 01-.793-.342A1.19 1.19 0 017.852 21v-4.9L6.26 17.283l-1.304-1.9 7.852-5.832a1.105 1.105 0 011.304 0l7.851 5.833-1.303 1.899z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group38Icon;
/* prettier-ignore-end */
