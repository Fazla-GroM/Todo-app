import { forwardRef } from 'react'
import { InputLabel, InputRoot, Textarea } from 'components/base'

const TextareaField = forwardRef(({ id, name, value, label, onChange, onBlur, error, rows, cols }, ref) => {
    return (
        <InputRoot variant="field">
            <InputLabel variant="field" htmlFor={id}>
                {label}
            </InputLabel>
            <Textarea
                rows={rows}
                cols={cols}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                ref={ref}
            />
        </InputRoot>
    )
})

export { TextareaField }
