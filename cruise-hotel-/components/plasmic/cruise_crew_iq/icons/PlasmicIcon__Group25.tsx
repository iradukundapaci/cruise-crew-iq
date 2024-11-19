// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group25IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group25Icon(props: Group25IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 30"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17.687 14.843c4.092 0 7.421-3.33 7.421-7.421C25.108 3.329 21.78 0 17.688 0c-4.093 0-7.422 3.33-7.422 7.422s3.329 7.421 7.421 7.421zm-.879-11.784v-.201a.878.878 0 111.758 0v.202A2.324 2.324 0 0120.4 5.33a.88.88 0 01-1.758 0 .563.563 0 00-.562-.563h-.788a.563.563 0 00-.335 1.014l.731.542 1.777 1.315a2.33 2.33 0 01.94 1.849v.008a2.305 2.305 0 01-.67 1.646 2.304 2.304 0 01-1.168.64v.205a.879.879 0 11-1.758 0v-.202a2.302 2.302 0 01-1.142-.618 2.303 2.303 0 01-.69-1.636.879.879 0 01.874-.885h.006a.88.88 0 01.879.874.561.561 0 00.565.559l.787-.005a.562.562 0 00.559-.566v-.009a.565.565 0 00-.228-.448l-.73-.54-1.778-1.315a2.331 2.331 0 01-.94-1.865c0-1.115.79-2.047 1.838-2.27zM5.663 19.066a.819.819 0 00-1.12-.3L.41 21.153a.82.82 0 00-.3 1.119l4.225 7.319a.82.82 0 001.119.3l4.134-2.388a.819.819 0 00.3-1.119l-4.225-7.318zm23.688-1.461a1.232 1.232 0 00-1.72-.28l-5.145 3.709a3.19 3.19 0 01-2.075.76h-4.21a.879.879 0 110-1.759h4.503c.661 0 1.19-.55 1.163-1.213-.026-.63-.562-1.117-1.192-1.117h-3.427a5.622 5.622 0 00-4.107-1.77c-2.228 0-4.445 1.404-5.364 3.277l3.595 6.227h6.744a7.569 7.569 0 003.776-.999 15.09 15.09 0 001.286-.835c1.935-1.39 5.89-4.277 5.893-4.279a1.232 1.232 0 00.28-1.72z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group25Icon;
/* prettier-ignore-end */
