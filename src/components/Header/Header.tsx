// libraries
import React from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

// js
import colors from '../../utils/colors';

// interfaces
import { HeaderProps } from '../../utils/interfaces';

const Header: React.FC<HeaderProps> = ({
	title,
	showBackButton,
	textColor = colors.red,
}) => {
	const navigation = useNavigation();

	const iconName = Platform.OS === 'ios' ? 'left' : 'arrowleft';

	function handleGoBack() {
		navigation.goBack();
	}

	return (
		<View style={styles.container}>
			<View style={styles.topBar}>
				{!showBackButton ? (
					<View />
				) : (
					<TouchableOpacity onPress={handleGoBack}>
						<AntDesign
							name={iconName}
							size={28}
							color={textColor}
						/>
					</TouchableOpacity>
				)}

				<View style={styles.header}>
					<Text style={styles.title(textColor)}>{title}</Text>
				</View>

				<View />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		padding: 24,
		backgroundColor: colors.transparent,
		zIndex: 100,
		// position: 'absolute',
	},
	topBar: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	header: {
		alignItems: 'center',
	},
	title: (textColor: string) => ({
		paddingTop: 12,
		color: textColor,
		letterSpacing: 1,
		fontSize: 32,
		lineHeight: 32,
		textAlign: 'center',
		textTransform: 'uppercase',
		fontWeight: 'bold',
	}),
});

export default Header;
