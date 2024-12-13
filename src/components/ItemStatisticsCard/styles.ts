import styled, { css } from 'styled-components/native'
import { StyleCardMealDTO } from '@src/DTO'

type Props = {
	type: StyleCardMealDTO
}

export const Container = styled.View<Props>`
	background-color: ${({ theme, type }) => {
		if (type === 'OFF_DIET') {
			return `${theme.COLORS.RED_LIGHT}`
		} else if (type === 'WITHIN_DIET') {
			return `${theme.COLORS.GREEN_LIGHT}`
		} else {
			return `${theme.COLORS.GRAY_6}`
		}
	}};

	padding: 14px 12px 24px;

	border-radius: 8px;

	margin-bottom: 20px;
	align-items: center;
	justify-content: center;

	flex: 1 0;
	width: 100%;

	max-height: 120px;
`

export const Percentage = styled.Text`
	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_1};
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE['4XL']}px;
	`}
`

export const Information = styled.Text`
	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_2};
		font-family: ${theme.FONT_FAMILY.REGULAR};
		font-size: ${theme.FONT_SIZE.XL}px;
	`}
	text-align: center;
`
