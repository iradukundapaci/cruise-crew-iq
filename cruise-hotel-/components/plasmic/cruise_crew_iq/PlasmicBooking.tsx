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
  firstName?: Flex__<typeof TextInput>;
  lastName?: Flex__<typeof TextInput>;
  phoneNumber?: Flex__<typeof TextInput>;
  email?: Flex__<typeof TextInput>;
  arrivalTime?: Flex__<typeof TextInput>;
  departureTime?: Flex__<typeof TextInput>;
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

  const $globalActions = useGlobalActions?.();

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: 'firstName.value',
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
        path: 'lastName.value',
        type: 'private',
        variableType: 'text',
        initFunc: ({ $props, $state, $queries, $ctx }) => '',
      },
      {
        path: 'departureTime.value',
        type: 'private',
        variableType: 'text',
        initFunc: ({ $props, $state, $queries, $ctx }) => '',
      },
      {
        path: 'arrivalTime.value',
        type: 'private',
        variableType: 'text',
        initFunc: ({ $props, $state, $queries, $ctx }) => '',
      },
      {
        path: 'variable',
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
                  data-plasmic-name={'firstName'}
                  data-plasmic-override={overrides.firstName}
                  className={classNames('__wab_instance', sty.firstName)}
                  name={'firstName'}
                  onChange={async (...eventArgs: any) => {
                    ((...eventArgs) => {
                      generateStateOnChangeProp($state, ['firstName', 'value'])(
                        ((e) => e.target?.value).apply(null, eventArgs),
                      );
                    }).apply(null, eventArgs);

                    if (
                      eventArgs.length > 1 &&
                      eventArgs[1] &&
                      eventArgs[1]._plasmic_state_init_
                    ) {
                      return;
                    }
                  }}
                  placeholder={'First Name'}
                  required={true}
                  type={'text'}
                  value={
                    generateStateValueProp($state, ['firstName', 'value']) ?? ''
                  }
                />

                <TextInput
                  data-plasmic-name={'lastName'}
                  data-plasmic-override={overrides.lastName}
                  className={classNames('__wab_instance', sty.lastName)}
                  name={'lastName'}
                  onChange={async (...eventArgs: any) => {
                    ((...eventArgs) => {
                      generateStateOnChangeProp($state, ['lastName', 'value'])(
                        ((e) => e.target?.value).apply(null, eventArgs),
                      );
                    }).apply(null, eventArgs);

                    if (
                      eventArgs.length > 1 &&
                      eventArgs[1] &&
                      eventArgs[1]._plasmic_state_init_
                    ) {
                      return;
                    }
                  }}
                  placeholder={'Last Name'}
                  required={true}
                  type={'text'}
                  value={
                    generateStateValueProp($state, ['lastName', 'value']) ?? ''
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
                  onChange={async (...eventArgs: any) => {
                    ((...eventArgs) => {
                      generateStateOnChangeProp($state, [
                        'phoneNumber',
                        'value',
                      ])(((e) => e.target?.value).apply(null, eventArgs));
                    }).apply(null, eventArgs);

                    if (
                      eventArgs.length > 1 &&
                      eventArgs[1] &&
                      eventArgs[1]._plasmic_state_init_
                    ) {
                      return;
                    }
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
                  onChange={async (...eventArgs: any) => {
                    ((...eventArgs) => {
                      generateStateOnChangeProp($state, ['email', 'value'])(
                        ((e) => e.target?.value).apply(null, eventArgs),
                      );
                    }).apply(null, eventArgs);

                    if (
                      eventArgs.length > 1 &&
                      eventArgs[1] &&
                      eventArgs[1]._plasmic_state_init_
                    ) {
                      return;
                    }
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
                <div className={classNames(projectcss.all, sty.freeBox__mLwIw)}>
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
                    data-plasmic-name={'arrivalTime'}
                    data-plasmic-override={overrides.arrivalTime}
                    className={classNames('__wab_instance', sty.arrivalTime)}
                    name={'checkIn'}
                    onChange={async (...eventArgs: any) => {
                      // Update the state value
                      ((...eventArgs) => {
                        generateStateOnChangeProp($state, [
                          'arrivalTime',
                          'value',
                        ])(((e) => e.target?.value).apply(null, eventArgs));
                      }).apply(null, eventArgs);

                      // Skip if it's initialization
                      if (
                        eventArgs.length > 1 &&
                        eventArgs[1] &&
                        eventArgs[1]._plasmic_state_init_
                      ) {
                        return;
                      }

                      // Validate dates
                      (async (event) => {
                        const arrivalDate = new Date(event.target.value);
                        const departureDate = new Date(
                          $state.departureTime.value,
                        );
                        const today = new Date();
                        today.setHours(0, 0, 0, 0);

                        // Check if arrival date is in the past
                        if (arrivalDate < today) {
                          const actionArgs = {
                            args: [
                              'error',
                              'Arrival date cannot be in the past',
                              undefined,
                              3,
                            ],
                          };
                          await $globalActions[
                            'plasmic-antd5-config-provider.showNotification'
                          ]?.apply(null, [...actionArgs.args]);
                          return;
                        }

                        // Check if departure date is set and is before arrival
                        if (
                          $state.departureTime.value &&
                          departureDate < arrivalDate
                        ) {
                          const actionArgs = {
                            args: [
                              'error',
                              'Departure date must be after arrival date',
                              undefined,
                              3,
                            ],
                          };
                          await $globalActions[
                            'plasmic-antd5-config-provider.showNotification'
                          ]?.apply(null, [...actionArgs.args]);
                        }
                      }).apply(null, eventArgs);
                    }}
                    placeholder={'Check-in'}
                    required={true}
                    type={'date'}
                    value={
                      generateStateValueProp($state, [
                        'arrivalTime',
                        'value',
                      ]) ?? ''
                    }
                    min={new Date().toISOString().split('T')[0]} // Set minimum date to today
                  />
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__ylDa3)}>
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
                    data-plasmic-name={'departureTime'}
                    data-plasmic-override={overrides.departureTime}
                    autoFocus={false}
                    className={classNames('__wab_instance', sty.departureTime)}
                    name={'checkOut'}
                    onChange={async (...eventArgs: any) => {
                      // Update the state value
                      ((...eventArgs) => {
                        generateStateOnChangeProp($state, [
                          'departureTime',
                          'value',
                        ])(((e) => e.target?.value).apply(null, eventArgs));
                      }).apply(null, eventArgs);

                      // Skip if it's initialization
                      if (
                        eventArgs.length > 1 &&
                        eventArgs[1] &&
                        eventArgs[1]._plasmic_state_init_
                      ) {
                        return;
                      }

                      // Validate dates
                      (async (event) => {
                        const departureDate = new Date(event.target.value);
                        const arrivalDate = new Date($state.arrivalTime.value);
                        const today = new Date();
                        today.setHours(0, 0, 0, 0);

                        // Check if departure date is in the past
                        if (departureDate < today) {
                          const actionArgs = {
                            args: [
                              'error',
                              'Departure date cannot be in the past',
                              undefined,
                              3,
                            ],
                          };
                          await $globalActions[
                            'plasmic-antd5-config-provider.showNotification'
                          ]?.apply(null, [...actionArgs.args]);
                          return;
                        }

                        // Check if arrival date is set and departure is before arrival
                        if (
                          $state.arrivalTime.value &&
                          departureDate < arrivalDate
                        ) {
                          const actionArgs = {
                            args: [
                              'error',
                              'Departure date must be after arrival date',
                              undefined,
                              3,
                            ],
                          };
                          await $globalActions[
                            'plasmic-antd5-config-provider.showNotification'
                          ]?.apply(null, [...actionArgs.args]);
                        }
                      }).apply(null, eventArgs);
                    }}
                    placeholder={'Check-out'}
                    required={true}
                    type={'date'}
                    value={
                      generateStateValueProp($state, [
                        'departureTime',
                        'value',
                      ]) ?? ''
                    }
                    min={
                      $state.arrivalTime.value ||
                      new Date().toISOString().split('T')[0]
                    } // Set minimum date to arrival date or today
                  />
                </div>
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
                  onChange={async (...eventArgs: any) => {
                    ((...eventArgs) => {
                      generateStateOnChangeProp($state, [
                        'numberOfAdults',
                        'value',
                      ])(((e) => e.target?.value).apply(null, eventArgs));
                    }).apply(null, eventArgs);

                    if (
                      eventArgs.length > 1 &&
                      eventArgs[1] &&
                      eventArgs[1]._plasmic_state_init_
                    ) {
                      return;
                    }
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
                  onChange={async (...eventArgs: any) => {
                    ((...eventArgs) => {
                      generateStateOnChangeProp($state, [
                        'numberOfChildren',
                        'value',
                      ])(((e) => e.target?.value).apply(null, eventArgs));
                    }).apply(null, eventArgs);

                    if (
                      eventArgs.length > 1 &&
                      eventArgs[1] &&
                      eventArgs[1]._plasmic_state_init_
                    ) {
                      return;
                    }
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
                  onChange={async (...eventArgs: any) => {
                    ((e) => {
                      generateStateOnChangeProp($state, [
                        'specialRequest',
                        'value',
                      ])(e.target.value);
                    }).apply(null, eventArgs);
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

                  $steps['updateVariable'] =
                    new Date($state.departureTime.value) > new Date()
                      ? (() => {
                          const actionArgs = {
                            variable: {
                              objRoot: $state,
                              variablePath: ['variable'],
                            },
                            operation: 0,
                          };
                          return (({
                            variable,
                            value,
                            startIndex,
                            deleteCount,
                          }) => {
                            if (!variable) {
                              return;
                            }
                            const { objRoot, variablePath } = variable;

                            $stateSet(objRoot, variablePath, value);
                            return value;
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                  if (
                    $steps['updateVariable'] != null &&
                    typeof $steps['updateVariable'] === 'object' &&
                    typeof $steps['updateVariable'].then === 'function'
                  ) {
                    $steps['updateVariable'] = await $steps['updateVariable'];
                  }
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
    'firstName',
    'lastName',
    'phoneNumber',
    'email',
    'arrivalTime',
    'departureTime',
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
    'firstName',
    'lastName',
    'phoneNumber',
    'email',
    'arrivalTime',
    'departureTime',
    'numberOfAdults',
    'numberOfChildren',
    'specialRequest',
    'button',
  ],
  firstName: ['firstName'],
  lastName: ['lastName'],
  phoneNumber: ['phoneNumber'],
  email: ['email'],
  arrivalTime: ['arrivalTime'],
  departureTime: ['departureTime'],
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
  firstName: typeof TextInput;
  lastName: typeof TextInput;
  phoneNumber: typeof TextInput;
  email: typeof TextInput;
  arrivalTime: typeof TextInput;
  departureTime: typeof TextInput;
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
    firstName: makeNodeComponent('firstName'),
    lastName: makeNodeComponent('lastName'),
    phoneNumber: makeNodeComponent('phoneNumber'),
    email: makeNodeComponent('email'),
    arrivalTime: makeNodeComponent('arrivalTime'),
    departureTime: makeNodeComponent('departureTime'),
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
