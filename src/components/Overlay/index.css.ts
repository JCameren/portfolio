import { style } from "@vanilla-extract/css";

export const overlay = style({
    position: 'fixed',
    left: '0',
    top: '0',
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    zIndex: '99',
    backdropFilter: 'blur(10px)'
})