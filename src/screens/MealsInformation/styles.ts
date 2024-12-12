import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

type ContainerStyleProps = 'WITHIN_DIET' | 'OFF_DIET'

type Props = {
	type: ContainerStyleProps
}

export const Container = styled(SafeAreaView)<Props>`
	flex: 1;

	background-color: ${({ theme, type }) =>
		type === 'WITHIN_DIET' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`
