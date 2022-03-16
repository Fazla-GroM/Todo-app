import { Box, TodoItem, Flex, Text } from 'components'
import { useGetList } from 'hooks'
import { Helmet } from 'react-helmet'

const ListScreen = () => {
    const listQuery = useGetList({
        resource: 'todos'
    })

    return (
        <>
            <Helmet>
                <title>Todo App</title>
            </Helmet>
            <Flex direction="column" align="start" gap="24" css={{ flex: 1 }}>
                <Flex>
                    <Text size="24">My Todos</Text>
                </Flex>
                <Box
                    as="ul"
                    css={{
                        listStyle: 'none',
                        margin: 0,
                        padding: 0,
                        width: '100%',
                        display: 'grid',
                        gap: '$24',
                        gridTemplateColumns: '1fr',
                        gridTemplateRows: 'auto',
                        '@bp1': {
                            gridTemplateColumns: 'repeat(3,1fr)'
                        }
                    }}
                >
                    {listQuery?.data?.map(item => (
                        <Flex key={item?.id} as="li">
                            <TodoItem {...item} />
                        </Flex>
                    ))}
                </Box>
            </Flex>
        </>
    )
}

export default ListScreen
