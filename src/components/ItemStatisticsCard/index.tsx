import { Container, Information, Percentage } from './styles'
import { StyleCardMealDTO } from '@src/DTO'

type Props = {
	title: string
	description: string
	type?: StyleCardMealDTO
}

export const ItemStatisticsCard = ({
	title,
	description,
	type = 'INFOS',
}: Props) => {
	return (
		<Container type={type}>
			<Percentage>{title}</Percentage>
			<Information>{description}</Information>
		</Container>
	)
}
