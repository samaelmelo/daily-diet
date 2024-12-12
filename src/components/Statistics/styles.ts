import styled, { css } from 'styled-components/native'

export const Container = styled.View`
	padding: 40px 22px;
	margin-top: -12px;
	border-radius: 20px;

	background-color: ${({ theme }) => theme.COLORS.GRAY_7};

	flex: 1;
	justify-content: flex-start;
	align-items: center;
`

export const Title = styled.Text`
	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_2};
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.XL}px;
	`}

  margin-bottom: 24px;
`
