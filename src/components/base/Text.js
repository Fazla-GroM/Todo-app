import { styled } from 'stitches.config'

const Text = styled('p', {
    display: 'block',
    fontVariantNumeric: 'tabular-nums',

    variants: {
        size: {
            68: {
                fontSize: '$68',
                lineHeight: '$76'
            },
            42: {
                fontSize: '$42',
                lineHeight: '$52'
            },
            32: {
                fontSize: '$32',
                lineHeight: '$40'
            },
            28: {
                fontSize: '$28',
                lineHeight: '$36'
            },
            24: {
                fontSize: '$24',
                lineHeight: '$32'
            },
            20: {
                fontSize: '$20',
                lineHeight: '$28'
            },
            18: {
                fontSize: '$18',
                lineHeight: '$24'
            },
            16: {
                fontSize: '$16',
                lineHeight: '$22'
            },
            14: {
                fontSize: '$14',
                lineHeight: '$20'
            },
            12: {
                fontSize: '$12',
                lineHeight: '$16'
            },
            10: {
                fontSize: '$10',
                lineHeight: '$14'
            }
        },
        weight: {
            regular: {
                fontWeight: '$regular'
            },

            semiBold: {
                fontWeight: '$semiBold'
            },
            bold: {
                fontWeight: '$bold'
            }
        }
    },

    defaultVariants: {
        size: '14',
        weight: 'regular'
    }
})

export { Text }
