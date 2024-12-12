import { LineVertical } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
	width: 100%;

	margin-bottom: 8px;
	padding: 15px;

	border-radius: 6px;
	border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};

	flex-direction: row;
	justify-content: space-between;
	align-items: center;

`

export const Content = styled.View`
	flex-direction: row;
	align-items: center;
`

export const Icon = styled(LineVertical).attrs(({ theme }) => ({
	color: `${theme.COLORS.GRAY_4}`,
}))``

export const Time = styled.Text`
	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_1};
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.MD}px;
	`}
`

export const Meal = styled(Time)`
	font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
	font-size: ${({theme}) => theme.FONT_SIZE.XL}px;

`

type IdentifierDietProps = {
	offTheDiet: boolean
}

export const CircleIdentifierDiet = styled.View<IdentifierDietProps>`
	width: 14px;
	height: 14px;

	background-color: ${({ theme, offTheDiet }) =>
		offTheDiet ? theme.COLORS.RED_MIN : theme.COLORS.GREEN_MIN};

	border-radius: 50%;
`
