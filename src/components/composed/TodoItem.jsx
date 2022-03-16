import { Paper, Text, Flex, Divider, FilledButton } from 'components/base'
import { CheckboxField } from 'components/composed'
import { useDeleteOne, useUpdateOne } from 'hooks'
import { Link } from 'react-router-dom'
import { getFormatedDate } from 'utils'

const TodoItem = ({ title, description, dueDate, createdAt, isCompleted, id }) => {
    const createdDate = getFormatedDate(createdAt, 'MMMM DD, YYYY')
    const formatedDueDate = getFormatedDate(dueDate, 'MMMM DD, YYYY')
    const updateOneMutation = useUpdateOne()
    const deleteOneMutation = useDeleteOne({ resource: 'todos', params: { id } })

    return (
        <Paper
            elevation="1"
            rounded
            direction="column"
            as="article"
            padding="16"
            css={{ flex: 1, alignSelf: 'stretch' }}
        >
            <Flex as="header" align="start" justify="between" css={{ flex: 1, marginBottom: '$8' }}>
                <Text size="18" weight="semiBold">
                    {title}
                </Text>
                <CheckboxField
                    id={id}
                    checked={isCompleted}
                    onChange={() => {
                        updateOneMutation.mutate(
                            {
                                resource: 'todos',
                                params: {
                                    id,
                                    payload: {
                                        isCompleted: !isCompleted
                                    }
                                }
                            },
                            {
                                onSuccess() {
                                    alert(`${title} is updated`)
                                }
                            }
                        )
                    }}
                />
            </Flex>
            <Flex css={{ marginBottom: '$8' }}>
                <Text>{description}</Text>
            </Flex>
            <Flex justify="between">
                {createdDate && (
                    <Text as="time" dateTime={createdAt} size="12">
                        Created: {createdDate}
                    </Text>
                )}
                {formatedDueDate && (
                    <Text as="time" dateTime={dueDate} size="12">
                        Due date: {formatedDueDate}
                    </Text>
                )}
            </Flex>
            <Divider my="16" />
            <Flex as="footer" justify="end" gap="24">
                <FilledButton disabled={deleteOneMutation.isLoading} onClick={() => deleteOneMutation.mutate()}>
                    Delete
                </FilledButton>
                <FilledButton disabled={deleteOneMutation.isLoading} as={Link} to={`edit/${id}`}>
                    Edit
                </FilledButton>
            </Flex>
        </Paper>
    )
}

export { TodoItem }
