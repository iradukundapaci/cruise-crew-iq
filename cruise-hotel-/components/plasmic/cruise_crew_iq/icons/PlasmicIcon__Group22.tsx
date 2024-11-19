// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group22IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group22Icon(props: Group22IconProps) {
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
        d={"M4.209 21.523a.732.732 0 100-1.465.732.732 0 000 1.465z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M19.833 12.037a6.002 6.002 0 003.394-1.708 6.013 6.013 0 001.68-3.221 6.039 6.039 0 00-.43-3.52.733.733 0 00-1.187-.22l-3 3.001a.318.318 0 01-.45 0l-1.21-1.21a.318.318 0 010-.448l3.001-3a.733.733 0 00-.22-1.188 6.038 6.038 0 00-3.52-.43 6.014 6.014 0 00-3.22 1.68 6.002 6.002 0 00-1.708 3.394 6.02 6.02 0 00.362 3.122l-2.197 1.804-4.906-4.906.863-.863a.733.733 0 00-.063-1.092L3.7.602a.732.732 0 00-.973.056L.656 2.729a.732.732 0 00-.056.973l2.63 3.32a.732.732 0 001.093.064l.863-.863 4.805 4.804-9.02 7.409a2.561 2.561 0 00-.222 3.819l1.996 1.995a2.562 2.562 0 003.818-.222l7.41-9.02.743.745-1.07 1.07a.732.732 0 00-.028 1.007l5.582 6.223a2.862 2.862 0 004.152.108l.808-.809a2.866 2.866 0 00-.121-4.164h-.002l-6.25-5.532a.733.733 0 00-1.004.03l-1.03 1.031-.847-.845 1.805-2.197a6.02 6.02 0 003.122.362zM3.868 5.469L2.153 3.304l1.15-1.15L5.466 3.87 3.868 5.469zm13.464 9.74l5.734 5.074c.29.259.456.615.468 1.004.011.389-.134.755-.41 1.03l-.808.808c-.274.274-.638.42-1.025.41a1.385 1.385 0 01-1.002-.461l-5.117-5.705 2.16-2.16zm-1.395-4.9l-2.586 3.148v.001l-7.924 9.646a1.094 1.094 0 01-1.647.11l-1.995-1.995a1.094 1.094 0 01.11-1.647l9.646-7.923h.001l3.148-2.586a.732.732 0 00.185-.903 4.568 4.568 0 01.831-5.351 4.61 4.61 0 014.03-1.274l-2.141 2.14a1.784 1.784 0 000 2.52l1.21 1.21a1.785 1.785 0 002.52 0l2.14-2.14a4.62 4.62 0 01-1.274 4.028 4.568 4.568 0 01-5.351.831.732.732 0 00-.903.186z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group22Icon;
/* prettier-ignore-end */
