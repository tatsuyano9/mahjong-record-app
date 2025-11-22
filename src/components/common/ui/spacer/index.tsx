import * as React from "react";

import clsx from "clsx";

type Spacing = string | number;

type SpacerProps = {
  // Tailwind風 props
  w?: string; // width
  h?: string; // height
  minW?: string;
  minH?: string;
  maxW?: string;
  maxH?: string;

  display?: string;

  bg?: string;
  rounded?: string | boolean; // "md" / true → "rounded"
  border?: boolean | string; // true → border, "gray-300" → border-gray-300

  m?: Spacing;
  mt?: Spacing;
  mb?: Spacing;
  ml?: Spacing;
  mr?: Spacing;
  mx?: Spacing;
  my?: Spacing;

  p?: Spacing;
  pt?: Spacing;
  pb?: Spacing;
  pl?: Spacing;
  pr?: Spacing;
  px?: Spacing;
  py?: Spacing;

  className?: string;
  children?: React.ReactNode;
};

export const Spacer: React.FC<SpacerProps> = ({
  w,
  h,
  minW,
  minH,
  maxW,
  maxH,
  display,
  bg,
  rounded,
  border,

  m,
  mt,
  mb,
  ml,
  mr,
  mx,
  my,

  p,
  pt,
  pb,
  pl,
  pr,
  px,
  py,

  className,
  children,
}) => {
  const classes = clsx(
    // width / height
    w && `w-${w}`,
    h && `h-${h}`,
    minW && `min-w-${minW}`,
    minH && `min-h-${minH}`,
    maxW && `max-w-${maxW}`,
    maxH && `max-h-${maxH}`,

    // display
    display && `${display}`,

    // background
    bg && `bg-${bg}`,

    // border
    border === true ? "border" : border ? `border-${border}` : null,

    // rounded
    rounded === true ? "rounded" : rounded ? `rounded-${rounded}` : null,

    // margin
    m && `m-${m}`,
    mt && `mt-${mt}`,
    mb && `mb-${mb}`,
    ml && `ml-${ml}`,
    mr && `mr-${mr}`,
    mx && `mx-${mx}`,
    my && `my-${my}`,

    // padding
    p && `p-${p}`,
    pt && `pt-${pt}`,
    pb && `pb-${pb}`,
    pl && `pl-${pl}`,
    pr && `pr-${pr}`,
    px && `px-${px}`,
    py && `py-${py}`,

    className
  );

  return <div className={classes}>{children}</div>;
};
