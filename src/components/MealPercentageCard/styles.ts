import styled, { css } from 'styled-components/native'

export const Container = styled.View`
	padding: 14px 14px 24px 14px;
	border-radius: 8px;

	background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};

	margin-bottom: 20px;
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
		font-size: ${theme.FONT_SIZE['MD']}px;
	`}
`
