// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: r6SzurXsLMJXPqEBWV3sKk
// Component: YUOb55aEbKz_

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: r6SzurXsLMJXPqEBWV3sKk/projectcss
import sty from "./PlasmicSideBarNavItem.module.css"; // plasmic-import: YUOb55aEbKz_/css

import LogoutIcon from "./icons/PlasmicIcon__Logout"; // plasmic-import: e_gMMG1Twrmr/icon

createPlasmicElementProxy;

export type PlasmicSideBarNavItem__VariantMembers = {};
export type PlasmicSideBarNavItem__VariantsArgs = {};
type VariantPropType = keyof PlasmicSideBarNavItem__VariantsArgs;
export const PlasmicSideBarNavItem__VariantProps = new Array<VariantPropType>();

export type PlasmicSideBarNavItem__ArgsType = {
  title?: string;
};
type ArgPropType = keyof PlasmicSideBarNavItem__ArgsType;
export const PlasmicSideBarNavItem__ArgProps = new Array<ArgPropType>("title");

export type PlasmicSideBarNavItem__OverridesType = {
  frame8?: Flex__<"div">;
  vuesaxLinearLogout?: Flex__<"div">;
  vuesaxLinearLogout2?: Flex__<"div">;
  svg?: Flex__<"svg">;
  text?: Flex__<"div">;
};

export interface DefaultSideBarNavItemProps {
  title?: string;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSideBarNavItem__RenderFunc(props: {
  variants: PlasmicSideBarNavItem__VariantsArgs;
  args: PlasmicSideBarNavItem__ArgsType;
  overrides: PlasmicSideBarNavItem__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          title: "Text"
        },
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"frame8"}
      data-plasmic-override={overrides.frame8}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.frame8
      )}
    >
      <div
        data-plasmic-name={"vuesaxLinearLogout"}
        data-plasmic-override={overrides.vuesaxLinearLogout}
        className={classNames(projectcss.all, sty.vuesaxLinearLogout)}
      >
        <div
          data-plasmic-name={"vuesaxLinearLogout2"}
          data-plasmic-override={overrides.vuesaxLinearLogout2}
          className={classNames(projectcss.all, sty.vuesaxLinearLogout2)}
        >
          <LogoutIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(projectcss.all, sty.svg)}
            role={"img"}
          />
        </div>
      </div>
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {"Logout"}
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  frame8: [
    "frame8",
    "vuesaxLinearLogout",
    "vuesaxLinearLogout2",
    "svg",
    "text"
  ],
  vuesaxLinearLogout: ["vuesaxLinearLogout", "vuesaxLinearLogout2", "svg"],
  vuesaxLinearLogout2: ["vuesaxLinearLogout2", "svg"],
  svg: ["svg"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  frame8: "div";
  vuesaxLinearLogout: "div";
  vuesaxLinearLogout2: "div";
  svg: "svg";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSideBarNavItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSideBarNavItem__VariantsArgs;
    args?: PlasmicSideBarNavItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSideBarNavItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSideBarNavItem__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicSideBarNavItem__ArgProps,
          internalVariantPropNames: PlasmicSideBarNavItem__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSideBarNavItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "frame8") {
    func.displayName = "PlasmicSideBarNavItem";
  } else {
    func.displayName = `PlasmicSideBarNavItem.${nodeName}`;
  }
  return func;
}

export const PlasmicSideBarNavItem = Object.assign(
  // Top-level PlasmicSideBarNavItem renders the root element
  makeNodeComponent("frame8"),
  {
    // Helper components rendering sub-elements
    vuesaxLinearLogout: makeNodeComponent("vuesaxLinearLogout"),
    vuesaxLinearLogout2: makeNodeComponent("vuesaxLinearLogout2"),
    svg: makeNodeComponent("svg"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicSideBarNavItem
    internalVariantProps: PlasmicSideBarNavItem__VariantProps,
    internalArgProps: PlasmicSideBarNavItem__ArgProps
  }
);

export default PlasmicSideBarNavItem;
/* prettier-ignore-end */
