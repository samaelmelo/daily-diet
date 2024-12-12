import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Meals, MealsInformation } from '@src/screens'
import { RootStackParamList } from '@src/@types/navigation'

export const AppRoutes = () => {
	const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

	return (
		<Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Screen name="meals" component={Meals} />
			<Screen name="meals-information" component={MealsInformation} />
		</Navigator>
	)
}
