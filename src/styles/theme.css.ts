import { createGlobalTheme, createThemeContract, createTheme } from "@vanilla-extract/css";

const letterSpacings = {
  normal: "0",
  tight: "-0.02em",
  wide: "0.08em",
};

const fonts = {
  text: '"Consolas", monospace',
};

const fontSizes = {
  lg: "clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem);",
  md: "clamp(1.5, 5vw, 1.75rem)",
  sm: "clamp(0.9rem, 3vw, 1rem)",
  xs: "clamp(0.75rem, 2vw, 0.8rem)",
};

const shadows = {
  subtleElevated:
    "rgb(0 0 0 / 10%) 0px 20px 25px, rgb(0 0 0 / 4%) 0px 10px 10px;",
  blueGlow: "",
};

const sizes = {
  lgContainer: "80%",
  mdContainer: "60%",
  smContainer: "50%",
  xsContainer: "max-content",
};

const positions = {
  trueCenter: '0 auto'
}

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
    hoverSubtleBlue: null
})

export const lightTheme = createTheme(colors, {
  background: "#F3F6F9",
  foreground: "#FFF",
  muted: "#E0E3E7",
  textFocus: "#fff",
  textSubtle: "#3E5060",
  primary: "#007FFF",
  secondary: "#0059B2", 
  textAlt: "#fff",
  linearGradient: "linear-gradient(to right bottom, #007FFF, #0059B2 120%)",
  hoverSubtleBlue: "#C2E0FF"
})

export const darkTheme = createTheme(colors, {
  background: "#010409",
  foreground: "#161b22",
  muted: "#21262d",
  textFocus: "#f0f6fc",
  textSubtle: "#8b949e",
  primary: "#fff",
  secondary: "#efefef", 
  textAlt: "#010409",
  linearGradient: "linear-gradient(to right bottom, #007FFF, #0059B2 120%)",
  hoverSubtleBlue: "#C2E0FF"
})

export const root = createGlobalTheme(":root", {
  letterSpacings,
  fontSizes,
  fonts,
  shadows,
  sizes,
  positions,
});

export const vars = {...root, colors}