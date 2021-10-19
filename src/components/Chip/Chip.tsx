// libraries
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// js
import colors from '../../utils/colors';

// interfaces
import { ChipProps } from '../../utils/interfaces';

function Chip(props: ChipProps) {
	const { name, isMythical = false, isLegendary = false } = props;

	const typeColors: { [key: string]: string } = {
		bug: '#5e7a4b',
		dark: '#0a0a0a',
		dragon: '#ed7700',
		electric: '#dbe617',
		fairy: '#ff66c7',
		fighting: '#ffa600',
		fire: '#ff1100',
		flying: '#ffd587',
		ghost: '#8733ff',
		grass: '#00bf30',
		ground: '#a68863',
		ice: '#4ad7ff',
		normal: '#949494',
		psychic: '#46e3d7',
		poison: '#b216f0',
		rock: '#54412a',
		steel: '#737373',
		water: '#0357ff',
		mythical: '#000000',
		legendary: '#000000',
	};

	const typeColor = typeColors[name] || colors.black;
	const specialPokemon = isMythical || isLegendary;

	return (
		<View style={[styles.container, { backgroundColor: typeColor }]}>
			<Text
				style={styles.typeName(specialPokemon, typeColors['electric'])}>
				{name.toUpperCase()}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 20,
		maxHeight: 20,
		width: 68,
		maxWidth: 100,
		borderRadius: 30,
		marginHorizontal: 4,
		textAlign: 'center',
		// flexWrap: 'wrap', // TEST WHEN POKEMON HAVE 3 OR 4 TYPES
	},
	typeName: (specialType, color) => ({
		color: specialType ? color : colors.white,
		fontSize: 10,
		fontWeight: 'bold',
	}),
});

export default Chip;
