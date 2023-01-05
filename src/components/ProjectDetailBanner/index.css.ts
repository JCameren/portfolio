import { style } from "@vanilla-extract/css";

export const bannerImgWrapper = style({
  position: "relative",
  width: "auto",
  maxWidth: "100%",
  height: 'auto',
  maxHeight: "700px",
  
});

export const imageResHandler = style({
    objectFit: "cover",
    aspectRatio: "1/1",
    width: '100%',
    position: 'relative',
    height: 'unset !important'
})
