import { style, styleVariants } from '@vanilla-extract/css'
import { type } from 'os'
import { theme } from '../../theme/globalTheme.css'

export const media = {
    sm: `screen and (max-width: ${theme.breakpoints.sm})`,
    md: `screen and (max-width: ${theme.breakpoints.md})`,
    lg: `screen and (max-width: ${theme.breakpoints.lg})`
}

export const container = style({
    margin: theme.positions.trueCenter,
})

export type Containers = "large" | "medium" | "small" | "extraSmall"

export const containers: Record<Containers, string> = styleVariants({
    large: [container, 
        {
            margin: theme.sizes.lgContainer,
            '@media': {
                'screen and (max-width: 800px)': {
                    width: '85%',
                },
                'screen and (max-width: 480px)': {
                    width:'90%',
                }
            }
        }
    ],
    medium: [container, {}],
    small: [container, {}],
    extraSmall: [container, {}]
})