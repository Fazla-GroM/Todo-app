import { Paper, Text, IconButton, Flex } from 'components/base'
import { HomeIcon, PlusIcon } from '@radix-ui/react-icons'
import { Link } from 'react-router-dom'

const AppBar = () => {
    return (
        <Paper
            align="center"
            justify="between"
            elevation="3"
            px="16"
            py="8"
            css={{
                position: 'sticky',
                top: '0',
                left: '0',
                zIndex: '$appBar',
                alignSelf: 'stretch',
                backgroundColor: '$primary'
            }}
        >
            <Flex align="center" gap="16">
                <IconButton as={Link} to="/">
                    <HomeIcon width="18" height="18" />
                </IconButton>

                <Text size="32" weight="bold">
                    Todo App
                </Text>
            </Flex>
            <IconButton as={Link} to="create">
                <PlusIcon width="18" height="18" />
            </IconButton>
        </Paper>
    )
}

export { AppBar }
