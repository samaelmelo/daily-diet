import { TouchableOpacityProps } from 'react-native'
import { ButtonTypeStyleProps, Container, Title, Icon } from './styles'
import { MaterialIcons } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {
	type?: ButtonTypeStyleProps
	title: string
	icon?: keyof typeof MaterialIcons.glyphMap
}

export const Button = ({ type = 'PRIMARY', title, icon, ...rest }: Props) => {
	return (
		<Container type={type} {...rest}>
			{icon && <Icon name={icon} type={type} />}
			<Title type={type}>{title}</Title>
		</Container>
	)
}
