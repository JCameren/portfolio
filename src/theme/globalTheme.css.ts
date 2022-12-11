import { createGlobalTheme } from "@vanilla-extract/css";
import { colors } from "./colors.css";

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

export const theme = createGlobalTheme(":root", {
  colors,
  letterSpacings,
  fontSizes,
  fonts,
  shadows,
  sizes,
  positions,
});
