import {
	useFonts,
	NunitoSans_400Regular,
	NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans'
import { Meals } from '@src/screens'
import { ThemeProvider } from 'styled-components/native'
import theme from '@src/theme'
import { Loading } from '@src/components'
import { StatusBar } from 'react-native'

export default function RootLayout() {
	const [fontLoaded] = useFonts({
		NunitoSans_400Regular,
		NunitoSans_700Bold,
	})

	return (
		<ThemeProvider theme={theme}>
			<StatusBar
				barStyle="dark-content"
				backgroundColor={theme.COLORS.GRAY_7}
				translucent
			/>
			{fontLoaded ? <Meals /> : <Loading />}
		</ThemeProvider>
	)
}
