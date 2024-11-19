// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group14Icon(props: Group14IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22.96 3.32v-.355A2.969 2.969 0 0019.997 0H2.966A2.969 2.969 0 000 2.965v.356h22.96zm-9.395 9.54c0-1.539.495-3 1.408-4.206H0v4.137a2.969 2.969 0 002.965 2.965h11.226a6.958 6.958 0 01-.626-2.897zm-2.085-.9H8.921v-1.523h2.56v1.524zm-8.065-1.523h3.983v1.524H3.415v-1.524zm13.14-3.307a6.928 6.928 0 013.99-1.25 6.98 6.98 0 012.416.428V4.844H0v2.287h16.555zM26 12.86a5.456 5.456 0 10-10.911 0 5.456 5.456 0 0010.911 0zm-4.72 2.914v.62h-1.524v-.616c-.46-.156-.837-.43-1.205-.699l.9-1.23c.494.362.747.536 1.093.536.196 0 .355-.094.415-.244.072-.182-.03-.35-.273-.448 0 0-1.089-.363-1.592-.876-.422-.43-.557-1.038-.422-1.615a1.781 1.781 0 011.084-1.262v-.615h1.524v.59c.387.107.714.265.902.368l-.726 1.338c-.482-.261-.926-.34-1.098-.28-.168.057-.193.166-.203.207-.013.058-.02.147.073.251.09.1 1.032.483 1.032.483 1.018.415 1.497 1.455 1.115 2.42a1.894 1.894 0 01-1.095 1.072z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group14Icon;
/* prettier-ignore-end */
