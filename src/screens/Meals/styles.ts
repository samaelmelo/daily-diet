import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
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

export const TitleSectionList = styled.Text`
	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_1};
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE['2XL']}px;
	`}
	margin-bottom: 8px;
	margin-top: 20px;
`
