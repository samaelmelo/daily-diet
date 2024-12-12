import { useNavigation, useRoute } from '@react-navigation/native'
import { Container } from './styles'
import { MealPercentageCard, Statistics } from '@src/components'
import { StatusBar } from 'react-native'
import { useTheme } from 'styled-components/native'

type RouteParams = {
	type: 'OFF_DIET' | 'WITHIN_DIET'
}

export const MealsInformation = () => {
	const navigation = useNavigation()
	const route = useRoute()

	const { type } = route.params as RouteParams

	const handleGoBack = () => {
		navigation.navigate('meals')
	}

	return (
		<Container type={type}>
			<MealPercentageCard isExpanded onNavigation={handleGoBack} type={type} />

			<Statistics />
		</Container>
	)
}
