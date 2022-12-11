import { style, styleVariants } from "@vanilla-extract/css";
import { theme } from "../../theme/globalTheme.css";

export const desktopNavWrapper = style({
  position: "fixed",
  borderBottom: `thin solid ${theme.colors.muted}`,
  padding: "clamp(1.15rem, 2vw, 1rem)",
  left: 0,
  zIndex: 99,
  width: "100%",
  minHeight: "2rem",
  maxHeight: "inherit",
  display: "flex",
  alignItems: "center",
  transition: "all 250ms ease-in-out",
  backdropFilter: "blur(15px)",
});

export const navLink = style({
  padding: "0.75rem",
  borderRadius: "0.375rem",
  fontSize: theme.fontSizes.lg,
  transition: "all 250ms ease-in-out",
  margin: "0 0.15rem",
  ":hover": {
    backgroundColor: theme.colors.muted,
  },
});

export type NavLinks = "nonActive" | "active";

export const navLinkVariants: Record<NavLinks, string> = styleVariants({
  nonActive: [
    navLink,
    {
      fontSize: theme.fontSizes.sm,
      fontWeight: "thin",
      color: theme.colors.textSubtle,
      transition: "all 250ms ease-in-out",
    },
  ],
  active: [
    navLink,
    {
      fontSize: theme.fontSizes.sm,
      fontWeight: "bold",
      color: theme.colors.textFocus,
      padding: "0.75rem",
      backgroundColor: theme.colors.muted,
    },
  ],
});

export const navLinkBtn = style({});

export const navHamburger = style({});

export const navOverlay = style({});
