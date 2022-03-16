import { styled } from 'stitches.config'
import { Flex } from './Flex'

const Paper = styled(Flex, {
    variants: {
        paddingTop: {
            4: {
                paddingTop: '$4'
            },
            8: {
                paddingTop: '$8'
            },
            16: {
                paddingTop: '$16'
            },
            20: {
                paddingTop: '$20'
            },
            24: {
                paddingTop: '$24'
            },
            32: {
                paddingTop: '$32'
            },
            48: {
                paddingTop: '$48'
            },
            64: {
                paddingTop: '$64'
            },
            80: {
                paddingTop: '$80'
            }
        },
        paddingBottom: {
            4: {
                paddingBottom: '$4'
            },
            8: {
                paddingBottom: '$8'
            },
            16: {
                paddingBottom: '$16'
            },
            20: {
                paddingBottom: '$20'
            },
            24: {
                paddingBottom: '$24'
            },
            32: {
                paddingBottom: '$32'
            },
            48: {
                paddingBottom: '$48'
            },
            64: {
                paddingBottom: '$64'
            },
            80: {
                paddingBottom: '$80'
            }
        },
        paddingLeft: {
            4: {
                paddingLeft: '$4'
            },
            8: {
                paddingLeft: '$8'
            },
            16: {
                paddingLeft: '$16'
            },
            20: {
                paddingLeft: '$20'
            },
            24: {
                paddingLeft: '$24'
            },
            32: {
                paddingLeft: '$32'
            },
            48: {
                paddingLeft: '$48'
            },
            64: {
                paddingLeft: '$64'
            },
            80: {
                paddingLeft: '$80'
            }
        },
        paddingRight: {
            4: {
                paddingRight: '$4'
            },
            8: {
                paddingRight: '$8'
            },
            16: {
                paddingRight: '$16'
            },
            20: {
                paddingRight: '$20'
            },
            24: {
                paddingRight: '$24'
            },
            32: {
                paddingRight: '$32'
            },
            48: {
                paddingRight: '$48'
            },
            64: {
                paddingRight: '$64'
            },
            80: {
                paddingRight: '$80'
            }
        },
        px: {
            4: {
                paddingLeft: '$4',
                paddingRight: '$4'
            },
            8: {
                paddingLeft: '$8',
                paddingRight: '$8'
            },
            16: {
                paddingLeft: '$16',
                paddingRight: '$16'
            },
            20: {
                paddingLeft: '$20',
                paddingRight: '$20'
            },
            24: {
                paddingLeft: '$24',
                paddingRight: '$24'
            },
            32: {
                paddingLeft: '$32',
                paddingRight: '$32'
            },
            48: {
                paddingLeft: '$48',
                paddingRight: '$48'
            },
            64: {
                paddingLeft: '$64',
                paddingRight: '$64'
            },
            80: {
                paddingLeft: '$80',
                paddingRight: '$80'
            }
        },
        py: {
            4: {
                paddingBottom: '$4',
                paddingTop: '$4'
            },
            8: {
                paddingBottom: '$8',
                paddingTop: '$8'
            },
            16: {
                paddingBottom: '$16',
                paddingTop: '$16'
            },
            20: {
                paddingBottom: '$20',
                paddingTop: '$20'
            },
            24: {
                paddingBottom: '$24',
                paddingTop: '$24'
            },
            32: {
                paddingBottom: '$32',
                paddingTop: '$32'
            },
            48: {
                paddingBottom: '$48',
                paddingTop: '$48'
            },
            64: {
                paddingBottom: '$64',
                paddingTop: '$64'
            },
            80: {
                paddingBottom: '$80',
                paddingTop: '$80'
            }
        },
        padding: {
            4: {
                padding: '$4'
            },
            8: {
                padding: '$8'
            },
            16: {
                padding: '$16'
            },
            20: {
                padding: '$20'
            },
            24: {
                padding: '$24'
            },
            32: {
                padding: '$32'
            },
            48: {
                padding: '$48'
            },
            64: {
                padding: '$64'
            },
            80: {
                padding: '$80'
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
        },
        elevation: {
            0: {
                boxShadow: 'none'
            },
            1: {
                boxShadow: '$elevation1'
            },
            2: {
                boxShadow: '$elevation2'
            },
            3: {
                boxShadow: '$elevation3'
            },
            4: {
                boxShadow: '$elevation4'
            }
        },
        rounded: {
            true: {
                borderRadius: '$4'
            }
        }
    }
})

export { Paper }
