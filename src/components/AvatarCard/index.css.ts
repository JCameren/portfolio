import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const avatarCardWrapper = style({
    minWidth: '300px',
    maxWidth: 'max-content',
    height: 'max-content'
})

export const avatarImageWrapper = style({
    borderRadius: '50%',
    width: '175px',
    height: '175px',
    objectFit: 'cover',
    objectPosition: 'top center',
    border: `5px solid ${vars.colors.muted}`,
    position: 'relative',
    // left: '10%'
})

export const avatarCardBtns = style({
    borderRadius: '50%',
    border: `1px solid ${vars.colors.textSubtle}`,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: vars.colors.textSubtle,
    background: 'transparent',
    padding: '0.5rem',
    fontSize: vars.fontSizes.md,
    margin: 'auto 0.5rem'
})