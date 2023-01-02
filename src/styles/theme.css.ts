import {
  createGlobalTheme,
  createThemeContract,
  createTheme,
} from "@vanilla-extract/css";
// import * as fonts from './fonts.css'

const letterSpacings = {
  normal: "0",
  tight: "-0.05em",
  wide: "0.08em",
};

const fontSizes = {
  lg: "clamp(2.625rem, 1.2857rem + 3.5714vw, 2.8rem);",
  md: "clamp(1.5, 5vw, 1.75rem)",
  sm: "clamp(0.9rem, 3vw, 1rem)",
  xs: "12px",
};

const fonts = {
  textFont: 'monospace',
  headFont: 'monospace',
  boldFont: 'monospace'
}

const shadows = {
  subtleElevated:
    "rgb(0 0 0 / 10%) 0px 20px 25px, rgb(0 0 0 / 4%) 0px 10px 10px;",
  blueGlow: "",
};

const sizes = {
  lgContainer: "80%",
  mdContainer: "60%",
  smContainer: "40%",
  xsContainer: "max-content",
};

const positions = {
  trueCenter: "0 auto",
};

const colors = createThemeContract({
  background: null,
  foreground: null,
  muted: null,
  textFocus: null,
  textSubtle: null,
  primary: null,
  secondary: null,
  textAlt: null,
  linearGradient: null,
  hoverSubtleBlue: null,
});

export const lightTheme = createTheme(colors, {
  background: "#fff",
  foreground: "#FFF",
  muted: "#E0E3E7",
  textFocus: "#000",
  textSubtle: "#3E5060",
  primary: "#007FFF",
  secondary: "#0059B2",
  textAlt: "#fff",
  linearGradient: "linear-gradient(to right bottom, #007FFF, #0059B2 120%)",
  hoverSubtleBlue: "#C2E0FF",
});

export const darkTheme = createTheme(colors, {
  background: "#16191b",
  foreground: "#161b22",
  muted: "#21262d",
  textFocus: "#f0f6fc",
  textSubtle: "#8b949e",
  primary: "#fff",
  secondary: "#efefef",
  textAlt: "#010409",
  linearGradient: "linear-gradient(to right bottom, #007FFF, #0059B2 120%)",
  hoverSubtleBlue: "#C2E0FF",
});

export const root = createGlobalTheme(":root", {
  letterSpacings,
  fontSizes,
  fonts,
  shadows,
  sizes,
  positions,
});

export const vars = { ...root, colors };
