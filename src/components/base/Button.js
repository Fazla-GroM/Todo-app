import { styled } from 'stitches.config'

const BaseButton = styled('button', {
    all: 'unset',
    position: 'relative',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    fontFamily: 'inherit',
    fontSize: '$default',
    fontWeight: '$regular',
    cursor: 'pointer',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',

    '&:disabled': {
        cursor: 'not-allowed'
    }
})

const IconButton = styled(BaseButton, {
    padding: '$16',
    backgroundColor: 'transparent',
    borderRadius: '100px',

    '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.04)'
    },
    '&:focus': {
        backgroundColor: 'rgba(0,0,0,0.04)'
    }
})

const FilledButton = styled(BaseButton, {
    borderRadius: '$4',
    backgroundColor: '$primary',
    color: 'black',
    padding: '$2 $8',

    '&:hover::before': {
        content: '" "',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.04)'
    }
})

export { IconButton, FilledButton }
