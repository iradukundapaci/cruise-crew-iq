// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group10Icon(props: Group10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 90 13"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.617 13L3.73 8.193 0 4.961l4.926-.428L6.842 0l1.916 4.533 4.926.428-3.729 3.232L11.067 13l-4.225-2.549L2.617 13zm19 0l1.112-4.807L19 4.961l4.926-.428L25.842 0l1.916 4.533 4.926.428-3.729 3.232L30.067 13l-4.225-2.549L21.617 13zm19 0l1.112-4.807L38 4.961l4.926-.428L44.842 0l1.916 4.533 4.926.428-3.729 3.232L49.067 13l-4.225-2.549L40.617 13zm19 0l1.112-4.807L57 4.961l4.926-.428L63.842 0l1.916 4.533 4.926.428-3.729 3.232L68.067 13l-4.225-2.549L59.617 13zm23.225-9.493v5.336l2.155 1.318-.564-2.464 1.899-1.642-2.498-.222-.992-2.326zM78.617 13l1.112-4.807L76 4.961l4.926-.428L82.842 0l1.916 4.533 4.926.428-3.729 3.232L87.067 13l-4.225-2.549L78.617 13z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group10Icon;
/* prettier-ignore-end */
