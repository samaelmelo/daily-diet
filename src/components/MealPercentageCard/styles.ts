import styled, { css } from 'styled-components/native'
import { StyleCardMealDTO } from '@src/DTO'
import { ArrowUpRight, ArrowLeft } from 'phosphor-react-native'

type IProps = {
	isExpanded: boolean
	type: StyleCardMealDTO
}

export const Container = styled.View<IProps>`
	${({ theme, isExpanded, type }) => css`
		background-color: ${() => {
			if (type === 'WITHIN_DIET') {
				return theme.COLORS.GREEN_LIGHT
			} else if (type === 'OFF_DIET') {
				return theme.COLORS.RED_LIGHT
			} else {
				return theme.COLORS.GRAY_5
			}
		}};

		padding: ${isExpanded ? '25px 14px 50px' : '8px 8px 24px'};

		
		border-radius: ${isExpanded ? 0 : '8px'};

		margin-bottom: ${isExpanded ? 0 : '20px'};
		
		flex-direction: ${type === 'INFOS' && 'row'};
	`}
`

type ButtonExpandProps = {
	isExpanded: boolean
}

export const ButtonExpand = styled.TouchableOpacity<ButtonExpandProps>`
	align-self: ${({ isExpanded }) =>
		isExpanded ? 'flex-start' : 'flex-end'};
	/* align-items: center; */
	margin-bottom: -10px;
`

export const Content = styled.View`
	align-items: center;
	justify-content: center;

	width: 100%;
`

export const Title = styled.Text<{ type: StyleCardMealDTO }>`
	${({ theme, type }) => css`
		color: ${theme.COLORS.GRAY_1};
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${type === 'INFOS'
			? `${theme.FONT_SIZE['2XL']}px`
			: `${theme.FONT_SIZE['4XL']}px`};
		margin-left: ${type === 'INFOS' && -24}px;
	`}
`

export const Description = styled.Text`
	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_2};
		font-family: ${theme.FONT_FAMILY.REGULAR};
		font-size: ${theme.FONT_SIZE.XL}px;
	`}
`

type IconProps = {
	type: StyleCardMealDTO
}

export const IconArrowLeft = styled(ArrowLeft)<IconProps>`
	${({ theme, type }) => css`
		color: ${() => {
			if (type === 'INFOS') return theme.COLORS.GRAY_2
			if (type === 'WITHIN_DIET') return theme.COLORS.GREEN_DARK
			if (type === 'OFF_DIET') return theme.COLORS.RED_DARK
		}};
	`}
`

export const IconArrowUpRight = styled(ArrowUpRight)<IconProps>`
	${({ theme, type }) => css`
		color: ${() => {
			if (type === 'INFOS') return theme.COLORS.GRAY_2
			if (type === 'WITHIN_DIET') return theme.COLORS.GREEN_DARK
			if (type === 'OFF_DIET') return theme.COLORS.RED_DARK
		}};
	`}
`
