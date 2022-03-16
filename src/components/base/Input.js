import { styled } from 'stitches.config'

const InputTick = styled('div', {
    width: '$24',
    height: '$24',
    position: 'relative',
    cursor: 'pointer',

    variants: {
        variant: {
            checkbox: {
                borderRadius: '$4',
                backgroundColor: 'white',
                border: '1px solid black',

                '&:hover': {
                    borderColor: '$primary'
                },

                '&::before': {
                    opacity: '0',
                    position: 'absolute',
                    content: "''",
                    top: '50%',
                    left: '50%',
                    borderLeft: '2px solid green',
                    borderBottom: '2px solid green',
                    width: '150%',
                    height: '50%',
                    transform: 'rotate(-45deg) translate(2%,-138%)'
                }
            }
        },
        checked: {
            true: {
                '&::before': {
                    opacity: 1
                }
            }
        }
    }
})

const Input = styled('input', {
    all: 'unset',
    fontFamily: 'inherit',
    fontSize: '$16',
    display: 'block',

    variants: {
        variant: {
            tick: {
                clip: 'rect(1px, 1px, 1px, 1px)',
                clipPath: 'inset(50%)',
                height: '1px',
                width: '1px',
                margin: '-1px',
                overflow: 'hidden',
                padding: 0,
                position: 'absolute',

                '&:focus + label': {
                    [`& ${InputTick}`]: {
                        borderColor: '$primary'
                    }
                }
            },
            field: {
                borderRadius: '$4',
                border: '1px solid black',
                padding: '$4'
            }
        },

        error: {
            true: {
                border: '1px solid red'
            }
        }
    }
})

const InputLabel = styled('label', {
    display: 'block',
    cursor: 'pointer',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',

    variants: {
        variant: {
            field: {
                fontSize: '$14'
            },
            tick: {
                display: 'flex',
                alignItems: 'center',
                gap: '$8'
            }
        },

        error: {
            true: {
                color: 'red'
            }
        }
    }
})

const InputRoot = styled('div', {
    position: 'relative',
    display: 'flex',

    variants: {
        variant: {
            field: {
                minWidth: '25.6rem',
                flexDirection: 'column'
            },
            tick: {
                alignItems: 'center',
                gap: '$16'
            }
        }
    }
})

const Textarea = styled('textarea', {
    all: 'unset',
    fontFamily: 'inherit',
    fontSize: '$16',
    display: 'block',
    border: '1px solid black',
    borderRadius: '$4',
    padding: '$4',
    resize: 'both'
})

const InputError = styled('div', {
    color: 'red',
    fontSize: '$12'
})

export { Input, InputLabel, InputRoot, InputTick, Textarea, InputError }
