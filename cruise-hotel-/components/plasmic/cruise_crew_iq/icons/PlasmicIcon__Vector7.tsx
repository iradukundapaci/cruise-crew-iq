// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector7Icon(props: Vector7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 57 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.941 26.706L10 21.647c2.314-2.314 5.03-4.147 8.148-5.499 3.119-1.352 6.481-2.029 10.087-2.03 3.608 0 6.971.686 10.09 2.059 3.118 1.372 5.833 3.235 8.146 5.588l-4.942 4.94a19.087 19.087 0 00-6-4.058c-2.274-.98-4.706-1.47-7.294-1.47-2.588 0-5.02.49-7.294 1.47a19.087 19.087 0 00-6 4.059zm-10-10L0 11.765c3.608-3.687 7.824-6.569 12.647-8.647C17.471 1.039 22.667 0 28.235 0 33.804 0 39 1.04 43.824 3.118c4.823 2.078 9.039 4.96 12.647 8.647l-4.942 4.94c-3.02-3.019-6.52-5.382-10.5-7.089-3.982-1.706-8.246-2.559-12.794-2.557-4.549 0-8.814.853-12.795 2.56s-7.48 4.069-10.499 7.087zM28.235 40l8.294-8.353a11.782 11.782 0 00-3.706-2.501c-1.411-.609-2.94-.912-4.588-.91-1.647 0-3.176.304-4.588.912a11.804 11.804 0 00-3.706 2.5L28.235 40z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector7Icon;
/* prettier-ignore-end */
