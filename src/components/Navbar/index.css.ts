import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const desktopNavWrapper = style({
  position: "fixed",
  padding: "clamp(1.15rem, 2vw, 1.6rem)",
  left: 0,
  zIndex: 99,
  width: "100%",
  minHeight: "2rem",
  maxHeight: "inherit",
  display: "flex",
  alignItems: "center",
  transition: "all 250ms ease-in-out",
  backgroundColor: 'rgba(0, 0, 0, 0.45)',
  backdropFilter: 'blur(10px)',
  borderBottom: `thin solid ${vars.colors.muted}`
});

export const navBtnWrapper = style({
  all: 'unset',
  border: `thin solid ${vars.colors.muted}`,
  borderRadius: '10px',
  padding: '0.5rem',
  color: vars.colors.textSubtle,
  fontSize: vars.fontSizes.md,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: vars.colors.background
})

export const sideMenu = style({
  position: 'absolute',
  top: '10px',
  right: '0',
  zIndex: '100',
  width: '420px',
  height: 'calc(100% - 20%)',
  borderRadius: '10px',
  transform: 'translate(-10px)',
  backgroundColor: vars.colors.background,
  border: `thin solid ${vars.colors.muted}`,

    '@media': {
      'screen and (max-width: 425px)': {
        width: 'calc(100% - 20px)',
        height: 'calc(100% - 20px)'
      }
    }
})

export const sideMenuHeader = style({
  padding: '30px',
  backgroundColor: vars.colors.foreground,
})

export const sideMenuLinks = style({
  height: 'calc(100vh - 131px)',
  marginTop: '30px',
  position: 'relative',
  padding: '1rem'
})

export const sideNavBtnWrapper = style({
  cursor: 'pointer',
  fontSize: '20px',
  color: vars.colors.textFocus
})