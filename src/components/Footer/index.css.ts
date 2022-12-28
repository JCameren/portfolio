import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const footerWrapper = style({
    position: 'fixed',
    zIndex: '99',
    bottom: 0,
    left: 0,
    backgroundColor: vars.colors.background,
    borderTop: `thin solid ${vars.colors.muted}`,
    width: "100%",
    minHeight: "2rem",
    maxHeight: "inherit",
    display: "flex",
    alignItems: "center",
})