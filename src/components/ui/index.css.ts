import { style, styleVariants } from "@vanilla-extract/css";
import { type } from "os";
import { theme } from "../../theme/globalTheme.css";

// container styles
export const container = style({
  margin: theme.positions.trueCenter,
});

export type Containers = "large" | "medium" | "small" | "extraSmall";

export const containers: Record<Containers, string> = styleVariants({
  large: [
    container,
    {
      width: theme.sizes.lgContainer,
      "@media": {
        "screen and (max-width: 800px)": {
          width: "85%",
        },
        "screen and (max-width: 480px)": {
          width: "90%",
        },
      },
    },
  ],
  medium: [
    container,
    {
      width: theme.sizes.mdContainer,
      "@media": {
        "screen and (max-width: 800px)": {
          width: "70%",
        },
        "screen and (max-width: 480px)": {
          width: "90%",
        },
      },
    },
  ],
  small: [
    container,
    {
      width: theme.sizes.smContainer,
      "@media": {
        "screen and (max-width: 800px)": {
          width: "70%",
        },
        "screen and (max-width: 480px)": {
          width: "90%",
        },
      },
    },
  ],
  extraSmall: [
    container,
    {
      width: theme.sizes.xsContainer,
    },
  ],
});

// flex styles & utility classes
export const flex = style({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
});

export type FlexVariants =
  | "column"
  | "spaceBetween"
  | "center"
  | "rowReverse"
  | "columnReverse";

export const flexVariants: Record<FlexVariants, string> = styleVariants({
  column: {
    flexDirection: "column",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  center: {
    justifyContent: "center",
  },
  rowReverse: {
    flexDirection: "row-reverse",
  },
  columnReverse: {
    flexDirection: "column-reverse",
  },
});

// card style
export const card = style({
  borderRadius: "0.375rem",
  padding: "1.25rem",
});

export type Cards = "outlined" | "filled" | "colorful" | "hoverable";

export const cardVariants: Record<Cards, string> = styleVariants({
  outlined: [
    card,
    {
      border: `1px solid ${theme.colors.muted}`,
    },
  ],
  filled: [
    card,
    {
      border: `1px solid ${theme.colors.muted}`,
      backgroundColor: theme.colors.foreground,
    },
  ],
  colorful: [
    card,
    {
      backgroundColor: theme.colors.linearGradient,
    },
  ],
  hoverable: [
    card,
    {
      transition: "all 250ms ease-in-out",
      ":hover": {
        boxShadow: theme.shadows.subtleElevated,
      },
    },
  ],
});

export const list = style({
  listStyle: "none",
});

// button styles
export const button = style({
  all: "unset",
  borderRadius: "0.375rem",
  fontSize: theme.fontSizes.md,
  padding: "0.75rem",
  backgroundColor: "transparent",
  fontFamily: theme.fonts.text,
  border: `1px solid ${theme.colors.muted}`,
  display: "inline-flex",
  transition: "all 250ms ease-in-out",
});

export type Buttons = "colorOutline" | "filled";

export const buttonVariants: Record<Buttons, string> = styleVariants({
  colorOutline: [
    button,
    {
      border: `1px solid ${theme.colors.primary}`,
      color: theme.colors.primary,
      ":hover": {
        backgroundColor: theme.colors.hoverSubtleBlue,
      },
    },
  ],
  filled: [
    button,
    {
      border: `1px solid ${theme.colors.primary}`,
      color: theme.colors.textAlt,
      backgroundColor: `1px solid ${theme.colors.primary}`,
      ":hover": {
        backgroundColor: theme.colors.secondary,
      },
    },
  ],
});

// typography styles
export type TextVariants = "small" | "body" | "heading" | "banner";

export const textVariants: Record<TextVariants, string> = styleVariants({
  small: {
    fontSize: theme.fontSizes.xs,
    color: theme.colors.textSubtle,
    fontWeight: "thin",
  },
  body: {
    fontSize: theme.fontSizes.sm,
    colors: theme.colors.textFocus,
  },
  heading: {
    fontSize: theme.fontSizes.md,
    fontWeight: "bold",
  },
  banner: {
    fontSize: theme.fontSizes.lg,
    fontWeight: "bold",
  },
});
