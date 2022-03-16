/* eslint-disable react/display-name */
import { Input, InputLabel, InputRoot, InputTick } from 'components/base'
import { forwardRef } from 'react'

const CheckboxField = forwardRef(({ id, name, value, label, checked, defaultChecked, onChange, onBlur }, ref) => {
    return (
        <InputRoot variant="tick">
            <Input
                variant="tick"
                type="checkbox"
                ref={ref}
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                defaultChecked={defaultChecked}
                onBlur={onBlur}
                aria-label={label}
            />

            <InputLabel variant="tick" htmlFor={id}>
                <InputTick variant="checkbox" checked={checked} />
                {label}
            </InputLabel>
        </InputRoot>
    )
})

export { CheckboxField }
