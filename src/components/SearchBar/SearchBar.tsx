import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import colors from '../../utils/colors';

function SearchBar(props: any) {
	const { onBlur, onChangeText, value } = props;

	function handleOnChangeText(text = '') {
		onChangeText(text);
	}

	function handleOnCleanText() {
		if (!value.length) {
			return;
		}

		onChangeText('');
	}

	return (
		<View style={styles.container}>
			<TextInput
				autoCapitalize="none"
				autoCompleteType="off"
				onChangeText={handleOnChangeText}
				placeholder="Search a pokemon..."
				selectTextOnFocus
				style={styles.input}
				value={value}
				returnKeyType="search"
				onBlur={onBlur}
			/>
			{!value.length ? null : (
				<Feather
					color={colors.darkBlue}
					name="x"
					onPress={handleOnCleanText}
					size={20}
					type="light"
					containerStyle={styles.icon}
				/>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: colors.white,
		borderColor: colors.grey,
		borderRadius: 12,
		borderWidth: 0.5,
		flexDirection: 'row',
		paddingHorizontal: 12,
		marginTop: 12,
		marginHorizontal: 12,
		height: 42,
	},
	icon: {
		padding: 4,
	},
	input: {
		flex: 1,
		paddingHorizontal: 12,
		paddingVertical: 12,
	},
});

export default SearchBar;
