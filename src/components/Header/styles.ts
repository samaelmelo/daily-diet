import styled, { css } from 'styled-components/native'
import LogoSvg from '@assets/logo.svg'

export const Container = styled.View`
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 20px;
`

export const Logo = styled(LogoSvg)`
	width: 82px;
	height: 37px;
`

export const Avatar = styled.View`
	width: 40px;
	height: 40px;

	border-radius: 50%;

	${({ theme }) => css`
		background-color: ${theme.COLORS.GREEN_MIN};
		border: 2px solid ${theme.COLORS.GRAY_1};
	`}
`
