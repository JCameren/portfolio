import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const desktopNavWrapper = style({
  position: "fixed",
  borderBottom: `thin solid ${vars.colors.muted}`,
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
  fontSize: vars.fontSizes.lg,
  transition: "all 250ms ease-in-out",
  margin: "0 0.15rem",
  ":hover": {
    backgroundColor: vars.colors.muted,
  },
});

export type NavLinks = "nonActive" | "active";

export const navLinkVariants: Record<NavLinks, string> = styleVariants({
  nonActive: [
    navLink,
    {
      fontSize: vars.fontSizes.sm,
      fontWeight: "thin",
      color: vars.colors.textSubtle,
      transition: "all 250ms ease-in-out",
    },
  ],
  active: [
    navLink,
    {
      fontSize: vars.fontSizes.sm,
      fontWeight: "bold",
      color: vars.colors.textFocus,
      padding: "0.75rem",
      backgroundColor: vars.colors.muted,
    },
  ],
});

export const navLinkBtn = style({});

export const navHamburger = style({});

export const navOverlay = style({});
