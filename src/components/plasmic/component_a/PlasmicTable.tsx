// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 27w6HRG5rhRJEm5G2aqSLD
// Component: 0KvWPFEThs
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_component_a.module.css"; // plasmic-import: 27w6HRG5rhRJEm5G2aqSLD/projectcss
import sty from "./PlasmicTable.module.css"; // plasmic-import: 0KvWPFEThs/css

export type PlasmicTable__VariantMembers = {};

export type PlasmicTable__VariantsArgs = {};
type VariantPropType = keyof PlasmicTable__VariantsArgs;
export const PlasmicTable__VariantProps = new Array<VariantPropType>();

export type PlasmicTable__ArgsType = {
  name?: React.ReactNode;
};

type ArgPropType = keyof PlasmicTable__ArgsType;
export const PlasmicTable__ArgProps = new Array<ArgPropType>("name");

export type PlasmicTable__OverridesType = {
  root?: p.Flex<"div">;
  text?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultTableProps {
  name?: React.ReactNode;
  className?: string;
}

function PlasmicTable__RenderFunc(props: {
  variants: PlasmicTable__VariantsArgs;
  args: PlasmicTable__ArgsType;
  overrides: PlasmicTable__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = args;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {"My name is:"}
      </div>

      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "John",
          value: args.name
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text", "freeBox"],
  text: ["text"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  text: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTable__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTable__VariantsArgs;
    args?: PlasmicTable__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTable__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicTable__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
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
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicTable__ArgProps,
          internalVariantPropNames: PlasmicTable__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicTable__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTable";
  } else {
    func.displayName = `PlasmicTable.${nodeName}`;
  }
  return func;
}

export const PlasmicTable = Object.assign(
  // Top-level PlasmicTable renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicTable
    internalVariantProps: PlasmicTable__VariantProps,
    internalArgProps: PlasmicTable__ArgProps
  }
);

export default PlasmicTable;
/* prettier-ignore-end */
