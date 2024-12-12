import { useTheme } from 'styled-components/native'
import {
	ButtonExpand,
	Container,
	Content,
	Information,
	Percentage,
	StyleDietProps,
} from './styles'
import { ArrowUpRight, ArrowLeft } from 'phosphor-react-native'

type Props = {
	isExpanded?: boolean
	onNavigation: () => void
	type: StyleDietProps
}

export const MealPercentageCard = ({
	isExpanded = false,
	onNavigation,
	type = 'WITHIN_DIET',
}: Props) => {
	const { COLORS } = useTheme()

	return (
		<Container isExpanded={isExpanded} type={type}>
			<ButtonExpand onPress={() => onNavigation()} isExpanded={isExpanded}>
				{isExpanded ? (
					<ArrowLeft
						color={type === 'WITHIN_DIET' ? COLORS.GREEN_DARK : COLORS.RED_DARK}
					/>
				) : (
					<ArrowUpRight
						color={type === 'WITHIN_DIET' ? COLORS.GREEN_DARK : COLORS.RED_DARK}
					/>
				)}
			</ButtonExpand>

			<Content>
				<Percentage>90,86%</Percentage>
				<Information>das refeições dentro da dieta</Information>
			</Content>
		</Container>
	)
}
