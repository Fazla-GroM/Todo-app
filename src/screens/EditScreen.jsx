import { Paper, TextField, Flex, TextareaField, Divider, FilledButton, Text } from 'components'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { todoValidationSchema } from 'validations'
import { useGetOne, useUpdateOne } from 'hooks'
import { useCallback, useEffect } from 'react'
import { getFormatedDate } from 'utils'
import { Helmet } from 'react-helmet'

const EditScreen = () => {
    const { id } = useParams()
    const { data, isSuccess, isLoading } = useGetOne({ resource: 'todos', params: { id } })
    const updateOneMutation = useUpdateOne()
    const navigate = useNavigate()

    const {
        reset,
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm({
        resolver: yupResolver(todoValidationSchema),
        defaultValues: {
            title: '',
            dueDate: '',
            description: ''
        }
    })

    useEffect(() => {
        reset({
            title: data?.title,
            dueDate: getFormatedDate(data?.dueDate, 'YYYY-MM-DD'),
            description: data?.description
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    const onSubmit = useCallback(
        async payload => {
            await updateOneMutation.mutate(
                { resource: 'todos', params: { id, payload } },
                {
                    onSuccess() {
                        alert('Todo Updated')
                        navigate('/')
                    }
                }
            )
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [updateOneMutation.mutate, id]
    )

    if (isLoading) {
        return null
    }

    if (isSuccess && !data) {
        return <Navigate replace={true} to="/" />
    }

    return (
        <>
            <Helmet>
                <title>Todo App | Edit</title>
            </Helmet>
            <Flex
                direction="column"
                align="center"
                justify="center"
                gap="24"
                css={{ maxWidth: '48rem', width: '100%' }}
            >
                <Text size="32">Edit a Todo</Text>
                <Paper
                    as="form"
                    onSubmit={handleSubmit(onSubmit)}
                    direction="column"
                    rounded
                    elevation="2"
                    padding="16"
                    css={{ width: '100%' }}
                >
                    <Flex direction="column" gap="24">
                        <TextField type="text" label="Title" id="text" error={errors.title} {...register('title')} />
                        <TextField
                            type="date"
                            label="Due date"
                            id="dueDate"
                            error={errors.dueDate}
                            {...register('dueDate', {
                                setValueAs(v) {
                                    return !v ? undefined : v
                                }
                            })}
                        />
                        <TextareaField
                            label="Description"
                            rows="5"
                            id="description"
                            error={errors.description}
                            {...register('description')}
                        />
                    </Flex>
                    <Divider my="32" />
                    <Flex justify="end" gap="24">
                        <FilledButton as={Link} to="/">
                            Cancel
                        </FilledButton>
                        <FilledButton disabled={isSubmitting} type="submit">
                            Edit
                        </FilledButton>
                    </Flex>
                </Paper>
            </Flex>
        </>
    )
}

export default EditScreen
