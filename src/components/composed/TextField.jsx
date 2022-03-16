import { forwardRef } from 'react'
import { InputLabel, InputRoot, Input, InputError } from 'components/base'

const TextField = forwardRef(({ id, name, value, label, onChange, onBlur, error, type }, ref) => {
    return (
        <InputRoot variant="field">
            <InputLabel variant="field" htmlFor={id} error={!!error}>
                {label}
            </InputLabel>
            <Input
                error={!!error}
                variant="field"
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                ref={ref}
            />
            <InputError>{error}</InputError>
        </InputRoot>
    )
})

export { TextField }
