import styled, { css } from 'styled-components/native'

export const Container = styled.View`
	flex: 1;
	padding: 32px;
	background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`

export const TextMeals = styled.Text`
	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_1};
		font-size: ${theme.FONT_SIZE.XL}px;
	`}

	margin-bottom: 12px;
`
