import React from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { InputComponent, Container, Label } from './style'

type Props = TextInputProps & {
	inputRef?: React.RefObject<TextInput>
	label?: string
}

export const Input = ({ label, inputRef, ...rest }: Props) => {
	return (
		<Container>
			{label && <Label>{label}</Label>}
			<InputComponent ref={inputRef} {...rest} />
		</Container>
	)
}
