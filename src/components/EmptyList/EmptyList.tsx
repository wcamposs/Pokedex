import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

function EmptyList() {
	return (
		<View style={styles.container}>
			<FontAwesome5 name="frown" size={32} color="black" />
			<Text style={styles.text}>We couldn't find pokemons</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: '50%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		marginVertical: 16,
		fontSize: 20,
		fontWeight: 'normal',
	},
});

export default EmptyList;
