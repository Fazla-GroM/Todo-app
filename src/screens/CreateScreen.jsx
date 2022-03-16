import { Paper, TextField, Flex, TextareaField, Divider, FilledButton, Text } from 'components'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { todoValidationSchema } from 'validations'
import { useCreateOne } from 'hooks'
import { useCallback } from 'react'
import { Helmet } from 'react-helmet'

const CreateScreen = () => {
    const createOneMutation = useCreateOne()
    const navigate = useNavigate()

    const {
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

    const onSubmit = useCallback(
        async formData => {
            await createOneMutation.mutate(
                { resource: 'todos', params: { payload: formData } },
                {
                    onSuccess() {
                        alert('Todo Created')
                        navigate('/')
                    }
                }
            )
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [createOneMutation.mutate]
    )

    return (
        <>
            <Helmet>
                <title>Todo App | Create</title>
            </Helmet>
            <Flex
                direction="column"
                align="center"
                justify="center"
                gap="24"
                css={{ maxWidth: '48rem', width: '100%' }}
            >
                <Text size="32">Create a Todo</Text>
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
                        <TextField
                            type="text"
                            label="Title"
                            id="title"
                            error={errors.title?.message}
                            {...register('title')}
                        />
                        <TextField
                            type="date"
                            label="Due date"
                            id="dueDate"
                            error={errors.dueDate?.message}
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
                            error={errors.description?.message}
                            {...register('description')}
                        />
                    </Flex>
                    <Divider my="32" />
                    <Flex justify="end" gap="24">
                        <FilledButton as={Link} to="/">
                            Cancel
                        </FilledButton>
                        <FilledButton disabled={isSubmitting} type="submit">
                            Create
                        </FilledButton>
                    </Flex>
                </Paper>
            </Flex>
        </>
    )
}

export default CreateScreen
