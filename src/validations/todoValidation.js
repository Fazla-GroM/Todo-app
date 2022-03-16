import * as yup from 'yup'

const todoValidationSchema = yup.object({
    title: yup.string('Invalid value').required('Required'),
    dueDate: yup.date('Invalid date').nullable().default(undefined),
    description: yup.string('Invalid value')
})

export { todoValidationSchema }
