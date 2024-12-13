import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type RootStackParamList = {
	'meals-information': { type: 'WITHIN_DIET' | 'OFF_DIET' }
	meals: undefined
	'new-meal': undefined
}

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}
