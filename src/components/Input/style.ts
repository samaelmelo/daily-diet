import styled, { css } from 'styled-components/native'

import { TextInput } from 'react-native'

export const Container = styled.View`
	width: 100%;
	align-items: flex-start;
`

export const InputComponent = styled(TextInput)`
	flex: 1;

	min-height: 56px;
	max-height: 56px;
	width: 100%;
	background-color: transparent;

	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_1};

		font-family: ${theme.FONT_FAMILY.REGULAR};
		font-size: ${theme.FONT_SIZE.XL}px;

		border: 1px solid ${theme.COLORS.GRAY_5};
	`}

	border-radius: 6px;
	padding: 16px;
`

export const Label = styled.Text`
	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_1};

		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.MD}px;
	`}

	margin-bottom: 7px;
`
