import styled, { css } from 'styled-components/native'

export type StyleDietProps = 'OFF_DIET' | 'WITHIN_DIET'

type IProps = {
	isExpanded: boolean
	type: StyleDietProps
}

export const Container = styled.View<IProps>`
	${({ theme, isExpanded, type }) => css`
		background-color: ${type === 'WITHIN_DIET'
			? theme.COLORS.GREEN_LIGHT
			: theme.COLORS.RED_LIGHT};

		padding: ${isExpanded ? '25px 14px 50px' : '14px 14px 24px'};

		border-radius: ${isExpanded ? 0 : '8px'};

		margin-bottom: ${isExpanded ? 0 : '20px'};
	`}
`

type ButtonExpandProps = {
	isExpanded: boolean
}

export const ButtonExpand = styled.TouchableOpacity<ButtonExpandProps>`
	align-self: ${({ isExpanded }) => (isExpanded ? 'flex-start' : 'flex-end')};
	flex: 1;
`

export const Content = styled.View`
	align-items: center;
	justify-content: center;

	width: 100%;
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
`
