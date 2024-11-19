// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group28IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group28Icon(props: Group28IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 27 30"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M23.372 0a3.107 3.107 0 00-3.107 3.107v9.27h5.334a.879.879 0 00.88-.879V3.107A3.107 3.107 0 0023.371 0zM8.866 22.09c0-5.31 4.319-9.682 9.7-9.668V3.486c0-1.337.503-2.559 1.33-3.486H4.392A4.399 4.399 0 000 4.393v24.712c0 .79.967 1.18 1.514.608l1.124-1.174 1.188 1.188a.88.88 0 001.243 0l1.126-1.125 1.136 1.127a.88.88 0 001.238 0l1.155-1.145 1.156 1.145c.342.34.894.34 1.237 0l.223-.22a9.655 9.655 0 01-3.474-7.42zm-1.756-15h1.735V5.355a.879.879 0 011.757 0V7.09h1.735a.879.879 0 010 1.758h-1.735v1.734a.879.879 0 11-1.757 0V8.848H7.11a.879.879 0 010-1.758zm-2.66 6.155h5.918a.879.879 0 010 1.758H4.45a.879.879 0 010-1.758zm2.933 8.783H4.444a.879.879 0 010-1.758h2.939a.879.879 0 010 1.758zm.586-3.51H4.447a.879.879 0 010-1.757H7.97a.879.879 0 010 1.758z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M18.534 14.18c-4.362 0-7.91 3.548-7.91 7.91 0 4.361 3.548 7.91 7.91 7.91 4.361 0 7.91-3.549 7.91-7.91 0-4.362-3.549-7.91-7.91-7.91zm.882 11.295v.083a.879.879 0 01-1.758 0v-.015a3.372 3.372 0 01-1.049-.438.879.879 0 11.962-1.471c.36.235.953.325 1.245.188.188-.09.335-.279.355-.462.043-.389-.566-.606-.93-.75-.551-.217-1.237-.488-1.635-1.207-.567-1.024-.07-2.374 1.052-2.836v-.044a.879.879 0 011.757-.015c.316.1.608.258.84.473a.879.879 0 11-1.19 1.292c-.145-.134-.591-.187-.785-.057-.13.087-.18.255-.136.335.185.336 1.157.45 1.893 1.024 1.503 1.17.98 3.285-.621 3.9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group28Icon;
/* prettier-ignore-end */
