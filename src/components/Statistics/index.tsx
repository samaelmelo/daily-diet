import { View } from 'react-native'
import { Container, Title } from './styles'
import { ItemStatisticsCard } from '@src/components'

export const Statistics = () => {
	return (
		<Container>
			<Title>Estatísticas gerais</Title>

			<ItemStatisticsCard
				title="22"
				description="melhor sequência de pratos dentro da dieta"
			/>
			<ItemStatisticsCard title="109" description="refeições registradas" />

			<View style={{ flexDirection: 'row', gap: 10 }}>
				<ItemStatisticsCard
					title="109"
					description="refeições dentro da dieta"
					type="WITHIN_DIET"
				/>
				<ItemStatisticsCard
					title="109"
					description="refeições fora da dieta"
					type="OFF_DIET"
				/>
			</View>
		</Container>
	)
}
