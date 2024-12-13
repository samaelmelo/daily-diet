import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
	flex: 1;

	background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`

export const Form = styled.View`
	flex: 1;

	background-color: ${({ theme }) => theme.COLORS.GRAY_7};
	border-radius: 20px 20px 0px 0px;

	margin-top: -20px;

	padding: 35px 20px;
`
