import {
	useFonts,
	NunitoSans_400Regular,
	NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans'
import { MealsInformation, Meals } from '@src/screens'
import { ThemeProvider } from 'styled-components/native'
import theme from '@src/theme'
import { Loading } from '@src/components'
import { StatusBar } from 'react-native'
import { Routes } from '@src/routes'

export default function RootLayout() {
	const [fontLoaded] = useFonts({
		NunitoSans_400Regular,
		NunitoSans_700Bold,
	})

	return (
		<ThemeProvider theme={theme}>
			<StatusBar
				barStyle="dark-content"
				backgroundColor="transparent"
				translucent
			/>
			{fontLoaded ? <Routes /> : <Loading />}
		</ThemeProvider>
	)
}
