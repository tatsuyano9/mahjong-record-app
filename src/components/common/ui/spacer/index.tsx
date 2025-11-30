import * as React from "react";

import clsx from "clsx";

import {
  GAP_MAP,
  MARGIN_MAP,
  MARGIN_MAP_KEYS,
  PADDING_MAP,
  PADDING_MAP_KEYS,
} from "./constants";
import {
  BorderInfo,
  GapSize,
  MarginInfo,
  MarginSize,
  PaddingInfo,
  PaddingSize,
  SpacerProps,
} from "./types";

/**
 * Spacer component to add spacing, padding, margin, and other layout styles.
 *
 * Gap between children can be set using the `gap` prop.
 * Note: The `gap` prop only works **when display is set to flex or grid**.
 *
 * @component
 * @example
 * <Spacer padding="medium" margin={{ top: "small", bottom: "small" }}>
 *  Content goes here
 * </Spacer>
 *
 * @example
 * <Spacer display="flex flex-col" gap="small">
 *  <Child1 />
 *  <Child2 />
 * </Spacer>
 *
 * @param {SpacerProps} props - Props for the Spacer component.
 * @returns {JSX.Element} The rendered Spacer component.
 */
export class Spacer extends React.Component<SpacerProps> {
  protected getClasses() {
    const {
      width,
      height,
      minWidth,
      minHeight,
      maxWidth,
      maxHeight,
      display,
      backGround,
      rounded,
      gap,
      className,
    } = this.props;

    return [
      // width / height
      width && `w-${width}`,
      height && `h-${height}`,
      // TODO: should allow both px and tailwind promised size for min/max width/height like "screen", "full", etc.
      minWidth && `min-w-${minWidth}`,
      minHeight && `min-h-${minHeight}`,
      maxWidth && `max-w-${maxWidth}`,
      maxHeight && `max-h-${maxHeight}`,

      // display
      display && `${display}`,

      // background
      backGround && `bg-${backGround}`,

      // rounded
      rounded === true ? "rounded" : rounded ? `rounded-${rounded}` : null,

      // gap
      gap && `gap-${GAP_MAP[gap as GapSize]}`,

      className,
    ];
  }

  protected getPadding(padding?: PaddingSize | PaddingInfo) {
    if (padding === undefined) return [];

    if (typeof padding === "string") {
      const size = PADDING_MAP[padding];
      return [`p-${size}`];
    }

    return Object.entries(PADDING_MAP_KEYS)
      .filter(([key]) => padding[key as keyof PaddingInfo] !== undefined)
      .map(([key, value]) => {
        const size = padding[key as keyof PaddingInfo];
        return `${value}-${PADDING_MAP[size as PaddingSize]}`;
      });
  }

  protected getMargin(margin?: MarginSize | MarginInfo) {
    if (margin === undefined) return [];

    if (typeof margin === "string") {
      const size = MARGIN_MAP[margin];
      return [`m-${size}`];
    }

    return Object.entries(MARGIN_MAP_KEYS)
      .filter(([key]) => margin[key as keyof MarginInfo] !== undefined)
      .map(([Key, value]) => {
        const size = margin[Key as keyof MarginInfo];
        return `${value}-${MARGIN_MAP[size as MarginSize]}`;
      });
  }

  protected getBorder(border?: boolean | BorderInfo) {
    if (border === undefined) return [];

    if (typeof border === "boolean") {
      if (border) {
        return ["border"];
      }
      return [];
    }

    const classes: string[] = [];

    if (border.width !== undefined) {
      classes.push(`border-${border.width}`);
    } else {
      classes.push("border");
    }

    if (border.color) {
      classes.push(`border-${border.color}`);
    }

    return classes;
  }

  protected getStyle() {
    const { padding, margin, border } = this.props;

    const styles = [
      ...this.getMargin(margin),
      ...this.getPadding(padding),
      ...this.getBorder(border),
      ...this.getClasses(),
    ];

    return clsx(styles);
  }

  public render() {
    const { children } = this.props;
    return <div className={this.getStyle()}>{children}</div>;
  }
}
