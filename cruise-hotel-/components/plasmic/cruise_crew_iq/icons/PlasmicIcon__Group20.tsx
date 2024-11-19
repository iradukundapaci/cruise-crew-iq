// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group20Icon(props: Group20IconProps) {
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
          "M4.37 16.668c.252.15.468.344.64.57h3.255V14.08l-1.543-.957a.732.732 0 11.772-1.245l1.504.932 1.31-.813C7.695 8.413 8.295 3.332 11.776.465 6.042-1.456.027 2.814 0 8.945a8.933 8.933 0 004.37 7.723zm1.098 2.034h6.933v1.66H5.468v-1.66zM9.73 14.08v3.157h3.12c.165-.218.372-.406.612-.547a8.95 8.95 0 001.819-1.417 8.44 8.44 0 01-3.997-2.157l-1.554.965z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M17.137.002c-3.84 0-6.982 3.174-6.982 7.03 0 3.63 2.786 6.633 6.357 6.954 4.132.37 7.607-2.907 7.607-6.953 0-3.85-3.132-7.03-6.982-7.03zm.733 10.205v.153a.732.732 0 11-1.464 0v-.07c-.338-.06-.646-.185-1.035-.44a.732.732 0 11.801-1.226c.357.234.473.252.961.248.471-.003.659-.373.696-.59.033-.196-.004-.456-.367-.585-.608-.215-1.232-.461-1.674-.808-1.005-.789-.702-2.59.618-3.07v-.106a.732.732 0 011.465 0v.04c.36.102.65.287.85.49a.732.732 0 01-1.043 1.027c-.041-.04-.267-.228-.755-.08-.195.058-.247.26-.259.32-.024.127.01.212.028.227.277.216.791.414 1.258.58 1.93.682 1.695 3.249-.08 3.89zM6.64 22.705A2.297 2.297 0 008.935 25a2.297 2.297 0 002.294-2.295v-.878H6.64v.878z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group20Icon;
/* prettier-ignore-end */
