// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PaypalPaymentPayIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PaypalPaymentPayIcon(props: PaypalPaymentPayIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 23"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18.122 5.758A5.81 5.81 0 0012.321 0H3.877a.875.875 0 00-.875.735L.01 19.504a.875.875 0 00.201.7.874.874 0 00.665.315H4.49l-.193 1.216a.875.875 0 00.875 1.015h4.069a.875.875 0 00.875-.726l.875-5.346h2.756a6.528 6.528 0 006.502-6.52v-.244a5.136 5.136 0 00-2.127-4.156zM4.621 1.75h7.7a4.06 4.06 0 013.946 3.159 4.97 4.97 0 00-1.155-.131H7.815a.875.875 0 00-.875.735L6.423 8.75a.886.886 0 101.75.28l.403-2.52h6.554c.42.002.835.082 1.225.236a5.661 5.661 0 01-5.6 4.98h-4.06a.874.874 0 00-.875.725L4.752 18.77H1.9L4.62 1.75zm13.877 8.409a4.778 4.778 0 01-4.75 4.769h-3.5a.874.874 0 00-.876.726L8.497 21h-2.31l.193-1.216 1.05-6.291h3.307a7.402 7.402 0 007.14-5.53c.406.569.624 1.251.622 1.95v.246z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PaypalPaymentPayIcon;
/* prettier-ignore-end */
