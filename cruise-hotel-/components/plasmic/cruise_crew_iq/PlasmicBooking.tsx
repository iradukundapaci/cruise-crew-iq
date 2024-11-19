// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: r6SzurXsLMJXPqEBWV3sKk
// Component: dTV8Muau-0Ko

import * as React from 'react';

import Head from 'next/head';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

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
  wrapWithClassName,
} from '@plasmicapp/react-web';
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions,
} from '@plasmicapp/react-web/lib/host';
import * as plasmicAuth from '@plasmicapp/react-web/lib/auth';
import { usePlasmicDataSourceContext } from '@plasmicapp/data-sources-context';

import Navbar from '../../Navbar'; // plasmic-import: 8V9ZObcqgPEi/component
import TextInput from '../../TextInput'; // plasmic-import: IBN4zaF7OPc9/component
import Button from '../../Button'; // plasmic-import: ZnawCEiEef_q/component
import Footer from '../../Footer'; // plasmic-import: tfXGV_GyVRZh/component
import { Fetcher } from '@plasmicapp/react-web/lib/data-sources';

import '@plasmicapp/react-web/lib/plasmic.css';

import plasmic_plasmic_rich_components_css from '../plasmic_rich_components/plasmic.module.css'; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import plasmic_antd_5_hostless_css from '../antd_5_hostless/plasmic.module.css'; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from './plasmic.module.css'; // plasmic-import: r6SzurXsLMJXPqEBWV3sKk/projectcss
import sty from './PlasmicBooking.module.css'; // plasmic-import: dTV8Muau-0Ko/css

import CheckSvgIcon from './icons/PlasmicIcon__CheckSvg'; // plasmic-import: Qq1FXu4GY4-r/icon
import Icon38Icon from './icons/PlasmicIcon__Icon38'; // plasmic-import: 7K_FDOqoJba3/icon

createPlasmicElementProxy;

export type PlasmicBooking__VariantMembers = {};
export type PlasmicBooking__VariantsArgs = {};
type VariantPropType = keyof PlasmicBooking__VariantsArgs;
export const PlasmicBooking__VariantProps = new Array<VariantPropType>();

export type PlasmicBooking__ArgsType = {};
type ArgPropType = keyof PlasmicBooking__ArgsType;
export const PlasmicBooking__ArgProps = new Array<ArgPropType>();

export type PlasmicBooking__OverridesType = {
  root?: Flex__<'div'>;
  navbar?: Flex__<typeof Navbar>;
  bookingForm?: Flex__<'h2'>;
  form?: Flex__<'form'>;
  lastName?: Flex__<typeof TextInput>;
  lastName2?: Flex__<typeof TextInput>;
  phoneNumber?: Flex__<typeof TextInput>;
  email?: Flex__<typeof TextInput>;
  numberOfAdults2?: Flex__<typeof TextInput>;
  numberOfAdults3?: Flex__<typeof TextInput>;
  numberOfAdults?: Flex__<typeof TextInput>;
  numberOfChildren?: Flex__<typeof TextInput>;
  specialRequest?: Flex__<'textarea'>;
  button?: Flex__<typeof Button>;
  footer?: Flex__<typeof Footer>;
};

export interface DefaultBookingProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicBooking__RenderFunc(props: {
  variants: PlasmicBooking__VariantsArgs;
  args: PlasmicBooking__ArgsType;
  overrides: PlasmicBooking__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined),
        ),
      ),
    [props.args],
  );

  const $props = {
    ...args,
    ...variants,
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: 'lastName.value',
        type: 'private',
        variableType: 'text',
        initFunc: ({ $props, $state, $queries, $ctx }) => '',
      },
      {
        path: 'phoneNumber.value',
        type: 'private',
        variableType: 'text',
        initFunc: ({ $props, $state, $queries, $ctx }) => '',
      },
      {
        path: 'email.value',
        type: 'private',
        variableType: 'text',
        initFunc: ({ $props, $state, $queries, $ctx }) => '',
      },
      {
        path: 'numberOfAdults.value',
        type: 'private',
        variableType: 'text',
        initFunc: ({ $props, $state, $queries, $ctx }) => '',
      },
      {
        path: 'numberOfChildren.value',
        type: 'private',
        variableType: 'text',
        initFunc: ({ $props, $state, $queries, $ctx }) => '',
      },
      {
        path: 'specialRequest.value',
        type: 'private',
        variableType: 'text',
        initFunc: ({ $props, $state, $queries, $ctx }) => ``,
      },
      {
        path: 'lastName2.value',
        type: 'private',
        variableType: 'text',
        initFunc: ({ $props, $state, $queries, $ctx }) => '',
      },
      {
        path: 'numberOfAdults2.value',
        type: 'private',
        variableType: 'text',
        initFunc: ({ $props, $state, $queries, $ctx }) => '',
      },
      {
        path: 'numberOfAdults3.value',
        type: 'private',
        variableType: 'text',
        initFunc: ({ $props, $state, $queries, $ctx }) => '',
      },
    ],
    [$props, $ctx, $refs],
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs,
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={'root'}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root,
          )}
        >
          <Navbar
            data-plasmic-name={'navbar'}
            data-plasmic-override={overrides.navbar}
            className={classNames('__wab_instance', sty.navbar)}
          />

          <Stack__
            as={'div'}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__tjh2T)}
          >
            <h2
              data-plasmic-name={'bookingForm'}
              data-plasmic-override={overrides.bookingForm}
              className={classNames(
                projectcss.all,
                projectcss.h2,
                projectcss.__wab_text,
                sty.bookingForm,
              )}
            >
              {'BOOKING FORM'}
            </h2>
            <Stack__
              as={'form'}
              data-plasmic-name={'form'}
              data-plasmic-override={overrides.form}
              hasGap={true}
              action={'http://localhost:8000/api/v1/bookings'}
              className={classNames(projectcss.all, sty.form)}
              method={'post'}
            >
              <Stack__
                as={'div'}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__jH5Bo)}
              >
                <TextInput
                  data-plasmic-name={'lastName'}
                  data-plasmic-override={overrides.lastName}
                  className={classNames('__wab_instance', sty.lastName)}
                  name={'firstName'}
                  onChange={(...eventArgs) => {
                    generateStateOnChangeProp($state, ['lastName', 'value'])(
                      ((e) => e.target?.value).apply(null, eventArgs),
                    );
                  }}
                  placeholder={'First Name'}
                  required={true}
                  type={'text'}
                  value={
                    generateStateValueProp($state, ['lastName', 'value']) ?? ''
                  }
                />

                <TextInput
                  data-plasmic-name={'lastName2'}
                  data-plasmic-override={overrides.lastName2}
                  className={classNames('__wab_instance', sty.lastName2)}
                  name={'lastName'}
                  onChange={(...eventArgs) => {
                    generateStateOnChangeProp($state, ['lastName2', 'value'])(
                      ((e) => e.target?.value).apply(null, eventArgs),
                    );
                  }}
                  placeholder={'Last Name'}
                  required={true}
                  type={'text'}
                  value={
                    generateStateValueProp($state, ['lastName2', 'value']) ?? ''
                  }
                />
              </Stack__>
              <Stack__
                as={'div'}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__nuyot)}
              >
                <TextInput
                  data-plasmic-name={'phoneNumber'}
                  data-plasmic-override={overrides.phoneNumber}
                  className={classNames('__wab_instance', sty.phoneNumber)}
                  name={'phoneNumber'}
                  onChange={(...eventArgs) => {
                    generateStateOnChangeProp($state, ['phoneNumber', 'value'])(
                      ((e) => e.target?.value).apply(null, eventArgs),
                    );
                  }}
                  placeholder={'Phone Number'}
                  required={true}
                  type={'text'}
                  value={
                    generateStateValueProp($state, ['phoneNumber', 'value']) ??
                    ''
                  }
                />

                <TextInput
                  data-plasmic-name={'email'}
                  data-plasmic-override={overrides.email}
                  className={classNames('__wab_instance', sty.email)}
                  name={'email'}
                  onChange={(...eventArgs) => {
                    generateStateOnChangeProp($state, ['email', 'value'])(
                      ((e) => e.target?.value).apply(null, eventArgs),
                    );
                  }}
                  placeholder={'Email'}
                  required={true}
                  type={'email'}
                  value={
                    generateStateValueProp($state, ['email', 'value']) ?? ''
                  }
                />
              </Stack__>
              <Stack__
                as={'div'}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__xMzBs)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___3Seqf,
                  )}
                >
                  {'Arrival Time'}
                </div>
                <TextInput
                  data-plasmic-name={'numberOfAdults2'}
                  data-plasmic-override={overrides.numberOfAdults2}
                  className={classNames('__wab_instance', sty.numberOfAdults2)}
                  name={'checkIn'}
                  onChange={(...eventArgs) => {
                    generateStateOnChangeProp($state, [
                      'numberOfAdults2',
                      'value',
                    ])(((e) => e.target?.value).apply(null, eventArgs));
                  }}
                  placeholder={'Number of adults'}
                  required={true}
                  type={'date'}
                  value={
                    generateStateValueProp($state, [
                      'numberOfAdults2',
                      'value',
                    ]) ?? ''
                  }
                />
              </Stack__>
              <Stack__
                as={'div'}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__iwCad)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__bPeOu,
                  )}
                >
                  {'Departure Time'}
                </div>
                <TextInput
                  data-plasmic-name={'numberOfAdults3'}
                  data-plasmic-override={overrides.numberOfAdults3}
                  className={classNames('__wab_instance', sty.numberOfAdults3)}
                  name={'checkOut'}
                  onChange={(...eventArgs) => {
                    generateStateOnChangeProp($state, [
                      'numberOfAdults3',
                      'value',
                    ])(((e) => e.target?.value).apply(null, eventArgs));
                  }}
                  placeholder={'Number of adults'}
                  required={true}
                  type={'date'}
                  value={
                    generateStateValueProp($state, [
                      'numberOfAdults3',
                      'value',
                    ]) ?? ''
                  }
                />
              </Stack__>
              <Stack__
                as={'div'}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__fKl4L)}
              >
                <TextInput
                  data-plasmic-name={'numberOfAdults'}
                  data-plasmic-override={overrides.numberOfAdults}
                  className={classNames('__wab_instance', sty.numberOfAdults)}
                  name={'numberOfAdults'}
                  onChange={(...eventArgs) => {
                    generateStateOnChangeProp($state, [
                      'numberOfAdults',
                      'value',
                    ])(((e) => e.target?.value).apply(null, eventArgs));
                  }}
                  placeholder={'Number of adults'}
                  required={true}
                  type={'text'}
                  value={
                    generateStateValueProp($state, [
                      'numberOfAdults',
                      'value',
                    ]) ?? ''
                  }
                />

                <TextInput
                  data-plasmic-name={'numberOfChildren'}
                  data-plasmic-override={overrides.numberOfChildren}
                  className={classNames('__wab_instance', sty.numberOfChildren)}
                  name={'numberOfKids'}
                  onChange={(...eventArgs) => {
                    generateStateOnChangeProp($state, [
                      'numberOfChildren',
                      'value',
                    ])(((e) => e.target?.value).apply(null, eventArgs));
                  }}
                  placeholder={'Number of children'}
                  required={false}
                  type={'text'}
                  value={
                    generateStateValueProp($state, [
                      'numberOfChildren',
                      'value',
                    ]) ?? ''
                  }
                />
              </Stack__>
              <Stack__
                as={'div'}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__oQzbm)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___2Zmxc,
                  )}
                >
                  {'Any special Request?'}
                </div>
                <textarea
                  data-plasmic-name={'specialRequest'}
                  data-plasmic-override={overrides.specialRequest}
                  className={classNames(
                    projectcss.all,
                    projectcss.textarea,
                    sty.specialRequest,
                  )}
                  name={'specialRequest'}
                  onChange={(e) => {
                    generateStateOnChangeProp($state, [
                      'specialRequest',
                      'value',
                    ])(e.target.value);
                  }}
                  placeholder={'Enter your request'}
                  ref={(ref) => {
                    $refs['specialRequest'] = ref;
                  }}
                  value={
                    generateStateValueProp($state, [
                      'specialRequest',
                      'value',
                    ]) ?? ''
                  }
                />
              </Stack__>
              <Button
                data-plasmic-name={'button'}
                data-plasmic-override={overrides.button}
                className={classNames('__wab_instance', sty.button)}
                onClick={async (event) => {
                  const $steps = {};
                }}
                submitsForm={true}
              >
                {'Submit'}
              </Button>
            </Stack__>
          </Stack__>
          <Footer
            data-plasmic-name={'footer'}
            data-plasmic-override={overrides.footer}
            className={classNames('__wab_instance', sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    'root',
    'navbar',
    'bookingForm',
    'form',
    'lastName',
    'lastName2',
    'phoneNumber',
    'email',
    'numberOfAdults2',
    'numberOfAdults3',
    'numberOfAdults',
    'numberOfChildren',
    'specialRequest',
    'button',
    'footer',
  ],
  navbar: ['navbar'],
  bookingForm: ['bookingForm'],
  form: [
    'form',
    'lastName',
    'lastName2',
    'phoneNumber',
    'email',
    'numberOfAdults2',
    'numberOfAdults3',
    'numberOfAdults',
    'numberOfChildren',
    'specialRequest',
    'button',
  ],
  lastName: ['lastName'],
  lastName2: ['lastName2'],
  phoneNumber: ['phoneNumber'],
  email: ['email'],
  numberOfAdults2: ['numberOfAdults2'],
  numberOfAdults3: ['numberOfAdults3'],
  numberOfAdults: ['numberOfAdults'],
  numberOfChildren: ['numberOfChildren'],
  specialRequest: ['specialRequest'],
  button: ['button'],
  footer: ['footer'],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: 'div';
  navbar: typeof Navbar;
  bookingForm: 'h2';
  form: 'form';
  lastName: typeof TextInput;
  lastName2: typeof TextInput;
  phoneNumber: typeof TextInput;
  email: typeof TextInput;
  numberOfAdults2: typeof TextInput;
  numberOfAdults3: typeof TextInput;
  numberOfAdults: typeof TextInput;
  numberOfChildren: typeof TextInput;
  specialRequest: 'textarea';
  button: typeof Button;
  footer: typeof Footer;
};

type ReservedPropsType = 'variants' | 'args' | 'overrides';
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBooking__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBooking__VariantsArgs;
    args?: PlasmicBooking__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBooking__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBooking__ArgsType,
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
    props: T & StrictProps<T, PropsType>,
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicBooking__ArgProps,
          internalVariantPropNames: PlasmicBooking__VariantProps,
        }),
      [props, nodeName],
    );
    return PlasmicBooking__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === 'root') {
    func.displayName = 'PlasmicBooking';
  } else {
    func.displayName = `PlasmicBooking.${nodeName}`;
  }
  return func;
}

function withUsePlasmicAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>,
) {
  const WithUsePlasmicAuthComponent: React.FC<P> = (props) => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: 'r6SzurXsLMJXPqEBWV3sKk',
    });

    return (
      <PlasmicDataSourceContextProvider__
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user,
        }}
      >
        <WrappedComponent {...props} />
      </PlasmicDataSourceContextProvider__>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicBooking = Object.assign(
  // Top-level PlasmicBooking renders the root element
  withUsePlasmicAuth(makeNodeComponent('root')),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent('navbar'),
    bookingForm: makeNodeComponent('bookingForm'),
    form: makeNodeComponent('form'),
    lastName: makeNodeComponent('lastName'),
    lastName2: makeNodeComponent('lastName2'),
    phoneNumber: makeNodeComponent('phoneNumber'),
    email: makeNodeComponent('email'),
    numberOfAdults2: makeNodeComponent('numberOfAdults2'),
    numberOfAdults3: makeNodeComponent('numberOfAdults3'),
    numberOfAdults: makeNodeComponent('numberOfAdults'),
    numberOfChildren: makeNodeComponent('numberOfChildren'),
    specialRequest: makeNodeComponent('specialRequest'),
    button: makeNodeComponent('button'),
    footer: makeNodeComponent('footer'),

    // Metadata about props expected for PlasmicBooking
    internalVariantProps: PlasmicBooking__VariantProps,
    internalArgProps: PlasmicBooking__ArgProps,

    // Page metadata
    pageMetadata: {
      title: '',
      description: '',
      ogImageSrc: '',
      canonical: '',
    },
  },
);

export default PlasmicBooking;
/* prettier-ignore-end */
