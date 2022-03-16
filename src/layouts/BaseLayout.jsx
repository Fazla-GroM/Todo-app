import { Outlet } from 'react-router-dom'
import { Paper } from 'components/base'
import { AppBar } from 'components/composed'

const BaseLayout = () => {
    return (
        <Paper
            direction="column"
            align="center"
            gap="16"
            css={{
                minHeight: '100%',
                position: 'relative'
            }}
        >
            <AppBar />
            <Paper
                padding="16"
                justify="center"
                css={{
                    flex: '1',
                    width: '100%',
                    maxWidth: '133.6rem'
                }}
            >
                <Outlet />
            </Paper>
        </Paper>
    )
}

export default BaseLayout
