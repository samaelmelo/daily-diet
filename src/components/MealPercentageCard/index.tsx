import { useTheme } from 'styled-components/native'
import {
	ButtonExpand,
	Container,
	Content,
	Description,
	Title,
	IconArrowLeft,
	IconArrowUpRight,
} from './styles'
import { StyleCardMealDTO } from '@src/DTO'

type Props = {
	isExpanded?: boolean
	type: StyleCardMealDTO
	onNavigation: () => void
	title: string
	description?: string
}

export const MealPercentageCard = ({
	isExpanded = false,
	type = 'WITHIN_DIET',
	title,
	description,
	onNavigation,
}: Props) => {
	return (
		<Container isExpanded={isExpanded} type={type}>
			<ButtonExpand onPress={onNavigation} isExpanded={isExpanded}>
				{isExpanded ? (
					<IconArrowLeft type={type} />
				) : (
					<IconArrowUpRight type={type} />
				)}
			</ButtonExpand>

			<Content>
				<Title type={type}>{title}</Title>
				{description && <Description>{description}</Description>}
			</Content>
		</Container>
	)
}
