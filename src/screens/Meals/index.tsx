import { View, Text } from 'react-native'
import { Container, TextMeals } from './styles'
import { Header, MealPercentageCard, Button } from '@src/components'

export const Meals = () => {
	return (
		<Container>
			<Header />

			<MealPercentageCard />

			<TextMeals>Refeições</TextMeals>

			<Button  title="Nova refeição" icon="add" />
		</Container>
	)
}
