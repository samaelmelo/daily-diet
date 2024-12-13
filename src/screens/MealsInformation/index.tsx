import { useNavigation, useRoute } from '@react-navigation/native'
import { Container } from './styles'
import { MealPercentageCard, Statistics } from '@src/components'

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
			<MealPercentageCard
				isExpanded
				type={type}
				onNavigation={handleGoBack}
				title="90,86%"
				description="das refeições dentro da dieta"
			/>

			<Statistics />
		</Container>
	)
}
