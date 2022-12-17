import { style, styleVariants } from "@vanilla-extract/css";
import { type } from "os";
import { vars } from "../../styles/theme.css";

// container styles
export const container = style({
  margin: vars.positions.trueCenter,
  position: "relative",
});

export type Containers = "large" | "medium" | "small" | "extraSmall";

export const containerVariants: Record<Containers, string> = styleVariants({
  large: [
    container,
    {
      width: vars.sizes.lgContainer,
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
      width: vars.sizes.mdContainer,
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
      width: vars.sizes.smContainer,
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
      width: vars.sizes.xsContainer,
    },
  ],
});

// flex styles & utility classes
export const flex = style({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  width: "100%",
  justifyContent: "space-between !important",
});

export type FlexVariants =
  | "column"
  | "spaceBetween"
  | "center"
  | "rowReverse"
  | "columnReverse";

export const flexVariants: Record<FlexVariants, string> = styleVariants({
  column: [
    flex,
    {
      flexDirection: "column",
    },
  ],
  spaceBetween: [
    flex,
    {
      justifyContent: "space-between !important",
      display: "flex",
      alignItems: "center",
      width: "100%",
    },
  ],
  center: [
    flex,
    {
      justifyContent: "center",
    },
  ],
  rowReverse: [
    flex,
    {
      flexDirection: "row-reverse",
    },
  ],
  columnReverse: [
    flex,
    {
      flexDirection: "column-reverse",
    },
  ],
});

export const grid = style({
  display: "grid",
  alignItems: "center",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "1rem",
  "@media": {
    "screen and (max-width: 800px)": {
      gridTemplateColumns: "1fr 1fr",
    },
    "screen and (max-width: 600px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

// card style
export const card = style({
  borderRadius: "0.375rem",
  padding: "1.25rem",
  transition: "all 250ms ease-in-out",
  ":hover": {
    backgroundColor: vars.colors.muted,
  },
});

export const paddingVariants = styleVariants({
  lg: {
    padding: "1.25rem",
  },
  md: {
    padding: "0.75rem",
  },
  sm: {
    padding: "0.25rem",
  },
});

export type Cards = "outlined" | "filled" | "colorful" | "hoverable";

export const cardVariants: Record<Cards, string> = styleVariants({
  outlined: [
    card,
    {
      border: `1px solid ${vars.colors.muted}`,
      ":hover": {
        backgroundColor: "transparent",
      },
    },
  ],
  filled: [
    card,
    {
      border: `1px solid ${vars.colors.muted}`,
      backgroundColor: vars.colors.foreground,
      ":hover": {
        background: vars.colors.foreground,
      },
    },
  ],
  colorful: [
    card,
    {
      backgroundColor: "linear-gradient(to right #007FFF, #0059B2 120%)",
      color: vars.colors.textAlt,
    },
  ],
  hoverable: [
    card,
    {
      backgroundColor: vars.colors.foreground,
      border: `thin solid ${vars.colors.muted}`,
      cursor: "pointer",
      ":hover": {
        boxShadow: vars.shadows.subtleElevated,
        background: vars.colors.linearGradient,
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
  fontSize: vars.fontSizes.md,
  fontFamily: vars.fonts.text,
  padding: "1rem 3rem",
  border: `1px solid ${vars.colors.muted}`,
  letterSpacing: vars.letterSpacings.tight,
  display: "inline-flex",
  transition: "all 250ms ease-in-out",
});

export type Buttons = "colorOutline" | "filled";

export const buttonVariants: Record<Buttons, string> = styleVariants({
  colorOutline: [
    button,
    {
      border: `1px solid ${vars.colors.primary}`,
      color: vars.colors.primary,
      ":hover": {
        backgroundColor: vars.colors.hoverSubtleBlue,
      },
    },
  ],
  filled: [
    button,
    {
      border: `1px solid ${vars.colors.primary}`,
      color: vars.colors.textAlt,
      backgroundColor: vars.colors.primary,
      ":hover": {
        backgroundColor: vars.colors.secondary,
        border: `1px solid ${vars.colors.secondary}`,
      },
    },
  ],
});

// typography styles
export type TextVariants = "small" | "body" | "heading" | "banner";

export const textVariants: Record<TextVariants, string> = styleVariants({
  small: {
    fontSize: vars.fontSizes.xs,
    color: vars.colors.textSubtle,
    fontWeight: "thin",
  },
  body: {
    fontSize: vars.fontSizes.sm,
    fontWeight: "thin",
    color: vars.colors.textSubtle,
  },
  heading: {
    fontSize: vars.fontSizes.md,
    fontWeight: "bold",
    color: vars.colors.textFocus,
  },
  banner: {
    fontSize: vars.fontSizes.lg,
    fontWeight: "bold",
    background: vars.colors.linearGradient,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: vars.letterSpacings.tight,
  },
});

// spacers :D
export type SpacerVariants = "lg" | "md" | "sm" | "xs";

export const spacerVariants: Record<SpacerVariants, string> = styleVariants({
  lg: {
    padding: "6rem",
    "@media": {
      "screen and (max-width: 800px)": {
        padding: "3rem",
      },
      "screen and (max-width: 480px)": {
        padding: "2.5rem",
      },
    },
  },
  md: {
    padding: "3rem",
    "@media": {
      "screen and (max-width: 480px)": {
        padding: "1rem",
      },
    },
  },
  sm: {
    padding: "1rem",
  },
  xs: {
    padding: "0.5rem",
  },
});
