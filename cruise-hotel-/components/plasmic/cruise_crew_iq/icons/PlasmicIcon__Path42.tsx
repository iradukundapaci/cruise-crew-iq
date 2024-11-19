// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path42IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path42Icon(props: Path42IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M4.436 15.141a6.364 6.364 0 003.136-.802c.995-.543 1.9-1.345 2.66-2.358.76-1.014 1.361-2.22 1.768-3.547.407-1.327.612-2.748.602-4.182v-.519a7.928 7.928 0 001.4-1.97 5.287 5.287 0 01-1.633.622c.578-.484 1.017-1.215 1.244-2.074a6.21 6.21 0 01-1.788.933 2.984 2.984 0 00-.95-.925A2.198 2.198 0 009.726 0c-.76.016-1.485.426-2.022 1.142-.537.716-.844 1.683-.856 2.695-.019.28.007.563.075.83-1.145-.074-2.264-.473-3.283-1.17C2.619 2.8 1.723 1.82 1.01.623c-.256.6-.39 1.28-.39 1.97.011.627.128 1.242.344 1.8.216.557.524 1.04.901 1.415-.468-.013-.924-.192-1.322-.519-.001.888.232 1.749.659 2.43.426.683 1.019 1.144 1.674 1.303-.253.09-.516.124-.778.1a1.022 1.022 0 01-.544-.1c.19.77.553 1.442 1.04 1.925.488.483 1.075.754 1.682.775-1.022 1.065-2.28 1.648-3.577 1.66a1.643 1.643 0 01-.7-.1c1.287 1.245 2.843 1.9 4.433 1.866"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path42Icon;
/* prettier-ignore-end */
