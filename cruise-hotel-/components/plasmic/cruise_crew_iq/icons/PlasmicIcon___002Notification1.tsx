// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _002Notification1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _002Notification1Icon(props: _002Notification1IconProps) {
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
          "M11.442 25a3.911 3.911 0 01-3.906-3.906.782.782 0 011.562 0 2.346 2.346 0 002.344 2.343 2.346 2.346 0 002.344-2.343.782.782 0 011.562 0A3.91 3.91 0 0111.442 25z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M20.036 21.875H2.848a1.825 1.825 0 01-1.185-3.208.732.732 0 01.083-.063 7 7 0 002.404-5.281v-2.906c0-4.021 3.272-7.292 7.292-7.292.167 0 .347.003.514.031a.781.781 0 11-.257 1.54c-.083-.013-.175-.008-.257-.008a5.736 5.736 0 00-5.73 5.729v2.906a8.567 8.567 0 01-3.023 6.532l-.046.036a.258.258 0 00-.055.161c0 .142.119.26.26.26h17.188c.141 0 .26-.118.26-.26a.249.249 0 00-.056-.161l-.045-.036a8.565 8.565 0 01-3.024-6.532v-1.135a.782.782 0 011.563 0v1.135c0 2.028.876 3.949 2.407 5.284a.77.77 0 01.08.06 1.825 1.825 0 01-1.186 3.207v.001z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M18.734 10.417a5.214 5.214 0 01-5.209-5.209A5.214 5.214 0 0118.734 0a5.214 5.214 0 015.208 5.208 5.214 5.214 0 01-5.208 5.209zm0-8.854a3.65 3.65 0 00-3.646 3.645 3.65 3.65 0 003.646 3.646 3.65 3.65 0 003.645-3.646 3.65 3.65 0 00-3.645-3.646z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _002Notification1Icon;
/* prettier-ignore-end */
