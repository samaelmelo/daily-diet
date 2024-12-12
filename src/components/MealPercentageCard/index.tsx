import { useTheme } from 'styled-components/native'
import {
	ButtonExpand,
	Container,
	Content,
	Information,
	Percentage,
} from './styles'
import { ArrowUpRight, ArrowLeft } from 'phosphor-react-native'
import { useState } from 'react'

export const MealPercentageCard = () => {
	const [isExpanded, setIsExpanded] = useState(false)

	const { COLORS } = useTheme()

	return (
		<Container>
			<ButtonExpand
				onPress={() => setIsExpanded((prevState) => !prevState)}
				isExpanded={isExpanded}
			>
				{isExpanded ? (
					<ArrowLeft color={COLORS.GREEN_DARK} />
				) : (
					<ArrowUpRight color={COLORS.GREEN_DARK} />
				)}
			</ButtonExpand>

			<Content>
				<Percentage>90,86%</Percentage>
				<Information>das refeições dentro da dieta</Information>
			</Content>
		</Container>
	)
}
