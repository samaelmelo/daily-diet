import { Container, Form } from './styles'
import { MealPercentageCard, Input } from '@src/components'
import { useNavigation } from '@react-navigation/native'

export const NewMeal = () => {
	const navigation = useNavigation()

	const handleGoBack = () => {
		navigation.navigate('meals')
	}

	return (
		<Container>
			<MealPercentageCard
				type="INFOS"
				title="Nova refeição"
				isExpanded
				onNavigation={handleGoBack}
			/>

			<Form>
        <Input label='Nome' />
      </Form>
		</Container>
	)
}
