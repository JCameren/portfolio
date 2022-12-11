import { style, styleVariants } from "@vanilla-extract/css";
import { type } from "os";
import { theme } from "../../theme/globalTheme.css";

// container styles
export const container = style({
  margin: theme.positions.trueCenter,
  position: "relative",
});

export type Containers = "large" | "medium" | "small" | "extraSmall";

export const containerVariants: Record<Containers, string> = styleVariants({
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
    backgroundColor: theme.colors.muted,
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
      border: `1px solid ${theme.colors.muted}`,
      ":hover": {
        backgroundColor: "transparent",
      },
    },
  ],
  filled: [
    card,
    {
      border: `1px solid ${theme.colors.muted}`,
      backgroundColor: theme.colors.foreground,
      ":hover": {
        background: theme.colors.foreground,
      },
    },
  ],
  colorful: [
    card,
    {
      backgroundColor: "linear-gradient(to right #007FFF, #0059B2 120%)",
      color: theme.colors.textAlt,
    },
  ],
  hoverable: [
    card,
    {
      backgroundColor: theme.colors.foreground,
      border: `thin solid ${theme.colors.muted}`,
      cursor: "pointer",
      ":hover": {
        boxShadow: theme.shadows.subtleElevated,
        background: theme.colors.linearGradient,
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
  fontFamily: theme.fonts.text,
  padding: "1rem 3rem",
  border: `1px solid ${theme.colors.muted}`,
  letterSpacing: theme.letterSpacings.tight,
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
      backgroundColor: theme.colors.primary,
      ":hover": {
        backgroundColor: theme.colors.secondary,
        border: `1px solid ${theme.colors.secondary}`,
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
    fontWeight: "thin",
    color: theme.colors.textSubtle,
  },
  heading: {
    fontSize: theme.fontSizes.md,
    fontWeight: "bold",
    color: theme.colors.textFocus,
  },
  banner: {
    fontSize: theme.fontSizes.lg,
    fontWeight: "bold",
    background: theme.colors.linearGradient,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: theme.letterSpacings.tight,
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
