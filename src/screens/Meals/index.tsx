import { SectionList } from 'react-native'
import { Container, TextMeals, TitleSectionList } from './styles'
import {
	Header,
	MealPercentageCard,
	Button,
	MealInformationCard,
} from '@src/components'
import { useNavigation } from '@react-navigation/native'

export const Meals = () => {
	const navigation = useNavigation()

	const dataSectionList = [
		{
			title: '12.08.22',
			data: [
				{
					time: '20:00',
					meal: 'X-tudo',
					offTheDiet: true,
				},
				{
					time: '16:00',
					meal: 'Whey protein com leite',
					offTheDiet: false,
				},
				{
					time: '12:00',
					meal: 'Salada cesar com frango grelhado',
					offTheDiet: false,
				},
				{
					time: '09:23',
					meal: 'Vitamina de banana com abacate',
					offTheDiet: false,
				},
			],
		},
		{
			title: '12.08.22',
			data: [
				{
					time: '20:00',
					meal: 'X-tudo',
					offTheDiet: true,
				},
				{
					time: '16:00',
					meal: 'Whey protein com leite',
					offTheDiet: false,
				},
				{
					time: '12:00',
					meal: 'Salada cesar com frango grelhado',
					offTheDiet: false,
				},
				{
					time: '09:23',
					meal: 'Vitamina de banana com abacate',
					offTheDiet: false,
				},
			],
		},
	]

	const TYPE = 'WITHIN_DIET'

	const handleExpandedCard = () => {
		navigation.navigate('meals-information', { type: TYPE })
	}

	return (
		<Container>
			<Header />

			<MealPercentageCard onNavigation={handleExpandedCard} type={TYPE} />

			<TextMeals>Refeições</TextMeals>

			<Button title="Nova refeição" icon="add" />

			<SectionList
				sections={dataSectionList}
				keyExtractor={(item, index) => item.meal + index}
				renderSectionHeader={({ section }) => (
					<TitleSectionList>{section.title}</TitleSectionList>
				)}
				renderItem={({ item }) => <MealInformationCard item={item} />}
				contentContainerStyle={[{ paddingBottom: 50 }]}
				showsVerticalScrollIndicator={false}
			/>
		</Container>
	)
}
