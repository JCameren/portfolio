import { style } from "@vanilla-extract/css";

export const bannerImgWrapper = style({
  position: "relative",
  width: "100%",
  height: 'auto',
  minHeight: "600px",
  
});

export const imageResHandler = style({
    objectFit: "contain",
    width: '100%',
    position: 'inherit',
    height: 'inherit'
})
