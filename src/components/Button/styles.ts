import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
	type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
	min-width: 56px;
	min-height: 56px;

	align-items: center;
	justify-content: center;

	border-radius: 6px;

	flex-direction: row;
  gap: 10px;

	${({ theme, type }) => css`
		background-color: ${type === 'PRIMARY'
			? theme.COLORS.GRAY_2
			: theme.COLORS.GRAY_7};

		border: 1px solid ${type === 'PRIMARY'
			? theme.COLORS.GRAY_2
			: theme.COLORS.GRAY_2};
	`}
`

export const Title = styled.Text<Props>`
	${({ theme, type }) => css`
		color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
		font-size: ${theme.FONT_SIZE.MD}px;
		font-family: ${theme.FONT_FAMILY.BOLD};
	`}
`

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
	size: 24,
	color: `${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1}`,
}))``
