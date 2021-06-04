import React, { InputHTMLAttributes } from 'react'

import { Container } from './styles'

interface IInputProps {
  type: string
  placeholder: string
  value: string | number
  onChange(e: React.ChangeEvent<HTMLInputElement>): void | undefined
}

const Input: React.FC<IInputProps> = ({ type, placeholder, value, onChange }) => (
  <Container
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
)

export default Input