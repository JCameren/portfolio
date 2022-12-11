import { globalStyle } from "@vanilla-extract/css";
import { colors } from "./colors.css";
import { theme } from "./globalTheme.css";

globalStyle("*", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});

globalStyle("body", {
  width: "100%",
  height: "100vh",
  color: theme.colors.textSubtle,
  backgroundColor: colors.background,
  fontFamily: theme.fonts.text,
  fontSize: theme.fontSizes.sm,
  fontWeight: "bold",
  letterSpacing: theme.letterSpacings.tight,
});

globalStyle("a", {
  textDecoration: 'none',
  color: 'inherit'
})