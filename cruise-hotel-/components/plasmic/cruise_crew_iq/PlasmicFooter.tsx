// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: r6SzurXsLMJXPqEBWV3sKk
// Component: tfXGV_GyVRZh

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
import sty from "./PlasmicFooter.module.css"; // plasmic-import: tfXGV_GyVRZh/css

createPlasmicElementProxy;

export type PlasmicFooter__VariantMembers = {};
export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter__OverridesType = {
  footer2?: Flex__<"div">;
  frame292?: Flex__<"div">;
  frame16?: Flex__<"div">;
  frame17?: Flex__<"div">;
  frame18?: Flex__<"div">;
  frame19?: Flex__<"div">;
  frame20?: Flex__<"div">;
  newsletterInput2?: Flex__<"div">;
  rectangle26?: Flex__<"input">;
  subBtn2?: Flex__<"div">;
  rectangle27?: Flex__<"div">;
  rectangle28?: Flex__<"div">;
};

export interface DefaultFooterProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
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
      data-plasmic-name={"footer2"}
      data-plasmic-override={overrides.footer2}
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
        sty.footer2
      )}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"frame292"}
        data-plasmic-override={overrides.frame292}
        hasGap={true}
        className={classNames(projectcss.all, sty.frame292)}
      >
        <Stack__
          as={"div"}
          data-plasmic-name={"frame16"}
          data-plasmic-override={overrides.frame16}
          hasGap={true}
          className={classNames(projectcss.all, sty.frame16)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__pCuoz
            )}
          >
            {"Kivu Queen"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__eP9P
            )}
          >
            {
              "The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us)"
            }
          </div>
        </Stack__>
        <Stack__
          as={"div"}
          data-plasmic-name={"frame17"}
          data-plasmic-override={overrides.frame17}
          hasGap={true}
          className={classNames(projectcss.all, sty.frame17)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__cGqXu
            )}
          >
            {"Quick links"}
          </div>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link___801Sx
            )}
            component={Link}
            href={`/rooms`}
            platform={"nextjs"}
          >
            {"Room booking"}
          </PlasmicLink__>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link___0PpKo
            )}
            component={Link}
            href={`/rooms`}
            platform={"nextjs"}
          >
            {"Rooms"}
          </PlasmicLink__>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__ePIy9
            )}
            component={Link}
            platform={"nextjs"}
          >
            {"Contact"}
          </PlasmicLink__>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__nt9F4
            )}
            component={Link}
            href={`/expore`}
            platform={"nextjs"}
          >
            {"Explore"}
          </PlasmicLink__>
        </Stack__>
        <Stack__
          as={"div"}
          data-plasmic-name={"frame18"}
          data-plasmic-override={overrides.frame18}
          hasGap={true}
          className={classNames(projectcss.all, sty.frame18)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__gQgkT
            )}
          >
            {"Company"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__yiDon
            )}
          >
            {"Privacy policy"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__lU85W
            )}
          >
            {"Refund policy"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__avTg4
            )}
          >
            {"F.A.Q"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__jkBby
            )}
          >
            {"About"}
          </div>
        </Stack__>
        <Stack__
          as={"div"}
          data-plasmic-name={"frame19"}
          data-plasmic-override={overrides.frame19}
          hasGap={true}
          className={classNames(projectcss.all, sty.frame19)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__pTltI
            )}
          >
            {"Social media"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___8ZCrz
            )}
          >
            {"Facebook"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___44DB
            )}
          >
            {"Twitter"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__mkv7O
            )}
          >
            {"Instagram"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__sOlRz
            )}
          >
            {"Linkedin"}
          </div>
        </Stack__>
        <Stack__
          as={"div"}
          data-plasmic-name={"frame20"}
          data-plasmic-override={overrides.frame20}
          hasGap={true}
          className={classNames(projectcss.all, sty.frame20)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__hyxP0
            )}
          >
            {"Newsletter"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__ihGQf
            )}
          >
            {
              "Kindly subscribe to our newsletter to get\nlatest deals on our rooms and vacation\ndiscount."
            }
          </div>
          <div
            data-plasmic-name={"newsletterInput2"}
            data-plasmic-override={overrides.newsletterInput2}
            className={classNames(projectcss.all, sty.newsletterInput2)}
          >
            <input
              data-plasmic-name={"rectangle26"}
              data-plasmic-override={overrides.rectangle26}
              className={classNames(
                projectcss.all,
                projectcss.input,
                sty.rectangle26
              )}
              ref={ref => {
                $refs["rectangle26"] = ref;
              }}
              type={"email"}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__hnJyP
              )}
            >
              {"Enter your email"}
            </div>
            <div
              data-plasmic-name={"subBtn2"}
              data-plasmic-override={overrides.subBtn2}
              className={classNames(projectcss.all, sty.subBtn2)}
            >
              <div
                data-plasmic-name={"rectangle27"}
                data-plasmic-override={overrides.rectangle27}
                className={classNames(projectcss.all, sty.rectangle27)}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__tk7Oa
                )}
              >
                {"Subscribe"}
              </div>
            </div>
          </div>
        </Stack__>
      </Stack__>
      <div
        data-plasmic-name={"rectangle28"}
        data-plasmic-override={overrides.rectangle28}
        className={classNames(projectcss.all, sty.rectangle28)}
      />

      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__lGu5
        )}
      >
        {"Paradise view 2023"}
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  footer2: [
    "footer2",
    "frame292",
    "frame16",
    "frame17",
    "frame18",
    "frame19",
    "frame20",
    "newsletterInput2",
    "rectangle26",
    "subBtn2",
    "rectangle27",
    "rectangle28"
  ],
  frame292: [
    "frame292",
    "frame16",
    "frame17",
    "frame18",
    "frame19",
    "frame20",
    "newsletterInput2",
    "rectangle26",
    "subBtn2",
    "rectangle27"
  ],
  frame16: ["frame16"],
  frame17: ["frame17"],
  frame18: ["frame18"],
  frame19: ["frame19"],
  frame20: [
    "frame20",
    "newsletterInput2",
    "rectangle26",
    "subBtn2",
    "rectangle27"
  ],
  newsletterInput2: [
    "newsletterInput2",
    "rectangle26",
    "subBtn2",
    "rectangle27"
  ],
  rectangle26: ["rectangle26"],
  subBtn2: ["subBtn2", "rectangle27"],
  rectangle27: ["rectangle27"],
  rectangle28: ["rectangle28"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  footer2: "div";
  frame292: "div";
  frame16: "div";
  frame17: "div";
  frame18: "div";
  frame19: "div";
  frame20: "div";
  newsletterInput2: "div";
  rectangle26: "input";
  subBtn2: "div";
  rectangle27: "div";
  rectangle28: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFooter__ArgsType,
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
          internalArgPropNames: PlasmicFooter__ArgProps,
          internalVariantPropNames: PlasmicFooter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "footer2") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("footer2"),
  {
    // Helper components rendering sub-elements
    frame292: makeNodeComponent("frame292"),
    frame16: makeNodeComponent("frame16"),
    frame17: makeNodeComponent("frame17"),
    frame18: makeNodeComponent("frame18"),
    frame19: makeNodeComponent("frame19"),
    frame20: makeNodeComponent("frame20"),
    newsletterInput2: makeNodeComponent("newsletterInput2"),
    rectangle26: makeNodeComponent("rectangle26"),
    subBtn2: makeNodeComponent("subBtn2"),
    rectangle27: makeNodeComponent("rectangle27"),
    rectangle28: makeNodeComponent("rectangle28"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
