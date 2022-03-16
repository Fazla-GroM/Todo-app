import { styled } from 'stitches.config'

const Divider = styled('div', {
    backgroundColor: 'black',
    height: '1px',
    width: '100%',

    variants: {
        direction: {
            horizontal: {
                height: '1px',
                width: '100%'
            },
            vertical: {
                height: '100%',
                width: '1px'
            }
        },

        mx: {
            4: {
                marginLeft: '$4',
                marginRight: '$4'
            },
            8: {
                marginLeft: '$8',
                marginRight: '$8'
            },
            16: {
                marginLeft: '$16',
                marginRight: '$16'
            },
            20: {
                marginLeft: '$20',
                marginRight: '$20'
            },
            24: {
                marginLeft: '$24',
                marginRight: '$24'
            },
            32: {
                marginLeft: '$32',
                marginRight: '$32'
            },
            48: {
                marginLeft: '$48',
                marginRight: '$48'
            },
            64: {
                marginLeft: '$64',
                marginRight: '$64'
            },
            80: {
                marginLeft: '$80',
                marginRight: '$80'
            }
        },
        my: {
            4: {
                marginBottom: '$4',
                marginTop: '$4'
            },
            8: {
                marginBottom: '$8',
                marginTop: '$8'
            },
            16: {
                marginBottom: '$16',
                marginTop: '$16'
            },
            20: {
                marginBottom: '$20',
                marginTop: '$20'
            },
            24: {
                marginBottom: '$24',
                marginTop: '$24'
            },
            32: {
                marginBottom: '$32',
                marginTop: '$32'
            },
            48: {
                marginBottom: '$48',
                marginTop: '$48'
            },
            64: {
                marginBottom: '$64',
                marginTop: '$64'
            },
            80: {
                marginBottom: '$80',
                marginTop: '$80'
            }
        }
    },

    defaultVariants: {
        direction: 'horizontal'
    }
})

export { Divider }
