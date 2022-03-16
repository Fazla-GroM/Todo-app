import { createStitches } from '@stitches/react'

const { styled, css, getCssText, globalCss } = createStitches({
    //Theme
    theme: {
        colors: {
            primary: '#89E8FF'
        },
        /*TYPOGRAPHY VARS*/
        fonts: {
            primary: 'Roboto'
        },
        fontSizes: {
            htmlFontSize: '62.5%',
            bodyFontSize: '1.6rem',
            68: '6.8rem',
            42: '4.2rem',
            32: '3.2rem',
            28: '2.8rem',
            24: '2.4rem',
            20: '2rem',
            18: '1.8rem',
            16: '1.6rem',
            14: '1.4rem',
            12: '1.2rem',
            10: '1rem'
        },
        fontWeights: {
            regular: 400,
            semiBold: 500,
            bold: 700
        },
        lineHeights: {
            14: '1.4rem',
            16: '1.6rem',
            20: '2rem',
            22: '2.2rem',
            24: '2.4rem',
            28: '2.8rem',
            32: '3.2rem',
            36: '3.6rem',
            40: '4rem',
            52: '5.2rem',
            76: '7.6rem'
        },
        letterSpacings: {},
        /*TYPOGRAPHY VARS*/
        /*SPACING VARS*/
        space: {
            2: '0.2rem',
            4: '0.4rem', //4px
            8: '0.8rem', //8px
            16: '1.6rem', //16px
            20: '2rem', //20px
            24: '2.4rem', //24px
            32: '3.2rem', //32px
            48: '4.8rem', //48px
            64: '6.4rem', //64px
            80: '8.0rem' //80px
        },
        sizes: {
            4: '0.4rem', //4px
            8: '0.8rem', //8px
            16: '1.6rem', //16px
            20: '2rem', //20px
            24: '2.4rem', //24px
            32: '3.2rem', //32px
            48: '4.8rem', //48px
            64: '6.4rem', //64px
            80: '8.0rem' //80px
        },
        /*SPACING VARS*/
        /*BORDER VARS*/
        radii: {
            4: '4px'
        },
        borderStyles: {},
        borderWidths: {},
        /*BORDER VARS*/
        zIndices: {
            appBar: 1000,
            fab: 999,
            drawer: 1001
        },
        shadows: {
            elevation1: '0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%)',
            elevation2: '0 3.2px 7.2px 0 rgb(0 0 0 / 13%), 0 0.6px 1.8px 0 rgb(0 0 0 / 11%)',
            elevation3: '0 6.4px 14.4px 0 rgb(0 0 0 / 13%), 0 1.2px 3.6px 0 rgb(0 0 0 / 11%)',
            elevation4: '0 25.6px 57.6px 0 rgb(0 0 0 / 22%), 0 4.8px 14.4px 0 rgb(0 0 0 / 18%)'
        },
        transitions: {}
    },
    media: {
        motion: '(prefers-reduced-motion)',
        hover: '(any-hover: hover)',
        dark: '(prefers-color-scheme: dark)',
        light: '(prefers-color-scheme: light)',
        bp1: '(min-width: 768px)'
    },
    utils: {}
})

//global css
const injectGlobalStyles = globalCss({
    '*,*::before,*::after': {
        boxSizing: 'border-box',
        margin: 0
    },
    'html,body': {
        height: '100%'
    },

    html: {
        fontSize: '$htmlFontSize',
        textSizeAdjust: '100%'
    },
    body: {
        fontSize: '$bodyFontSize',
        fontFamily: '$primary',
        lineHeight: '1.5',
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale'
    },
    ' #root': {
        height: '100%',
        position: 'relative',
        isolation: 'isolate'
    }
})

export { styled, css, getCssText, injectGlobalStyles }
