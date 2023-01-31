import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";


globalStyle("*", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});

globalStyle("main", {
  width: "100%",
  height: "100vh",
  color: vars.colors.textSubtle,
  backgroundColor: vars.colors.background,
  fontFamily: vars.fonts.textFont,
  fontSize: vars.fontSizes.sm,
  fontWeight: "bold",
  letterSpacing: vars.letterSpacings.tight,
  overflowX: "hidden"
});

globalStyle("h3", {
  fontSize: "1.75rem",
  margin: "1rem 0 1rem 0"
})

globalStyle("p", {
  margin: "1.25rem 0 1.25rem 0"
})

globalStyle("a", {
  textDecoration: 'none',
  color: 'inherit'
})

globalStyle("ul", {
  all: "unset"
})

globalStyle("div", {
  display: "inherit"
})