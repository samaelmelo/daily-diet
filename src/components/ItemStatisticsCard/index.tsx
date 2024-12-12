import { Container, Information, Percentage, StyleCardProps } from './styles'

type Props = {
	title: string
	description: string
	type?: StyleCardProps
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
