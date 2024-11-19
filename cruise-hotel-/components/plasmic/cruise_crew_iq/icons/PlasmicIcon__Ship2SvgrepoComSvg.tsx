// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ship2SvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ship2SvgrepoComSvgIcon(props: Ship2SvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
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
          "M15 3.75H9V6H6v4.935l-2.48.496 1.768 5.306 1.423-.474-1.231-3.694 5.77-1.154V15h1.5v-3.585l5.77 1.154-1.232 3.694 1.423.474 1.769-5.306-2.48-.496V6h-3V3.75zM13.5 6v-.75h-3V6h3zm3 1.5v3.135l-4.5-.9-4.5.9V7.5h9zM3 18.75l.2.723.005-.002.022-.005a25.993 25.993 0 011.508-.357c.893-.185 1.955-.359 2.765-.359.78 0 1.372.16 2.05.348l.02.006c.676.186 1.438.396 2.43.396.993 0 1.754-.21 2.43-.396l.02-.006c.679-.187 1.271-.348 2.05-.348.81 0 1.872.174 2.766.36a29.433 29.433 0 011.508.356l.02.005.006.002.2-.723.2-.723-.01-.003-.025-.007a16.264 16.264 0 00-.436-.112c-.29-.072-.695-.168-1.158-.264-.911-.19-2.1-.391-3.07-.391-.994 0-1.755.21-2.43.396l-.02.006c-.68.187-1.272.348-2.05.348-.78 0-1.372-.16-2.051-.348l-.02-.006c-.676-.186-1.437-.396-2.43-.396-.972 0-2.16.201-3.07.39a30.961 30.961 0 00-1.594.377l-.026.007-.006.002-.003.001.2.723z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ship2SvgrepoComSvgIcon;
/* prettier-ignore-end */
