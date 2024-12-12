import {
	CircleIdentifierDiet,
	Container,
	Icon,
	Meal,
	Time,
	Content,
} from './styles'

type Props = {
	item: {
		time: string
		meal: string
		offTheDiet: boolean
	}
}

export const MealInformationCard = ({ item }: Props) => {
	return (
		<Container>
			<Content>
				<Time>{item.time}</Time>
				<Icon />
				<Meal>
					{item.meal.length > 27 ? item.meal.slice(0, 27) + '...' : item.meal}
				</Meal>
			</Content>

			<CircleIdentifierDiet offTheDiet={item.offTheDiet} />
		</Container>
	)
}
