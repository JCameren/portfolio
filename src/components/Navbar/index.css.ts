import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const desktopNavWrapper = style({
  position: "fixed",
  padding: "clamp(1.15rem, 2vw, 1rem)",
  left: 0,
  zIndex: 99,
  width: "100%",
  minHeight: "2rem",
  maxHeight: "inherit",
  display: "flex",
  alignItems: "center",
  transition: "all 250ms ease-in-out",
  backgroundColor: vars.colors.background
});