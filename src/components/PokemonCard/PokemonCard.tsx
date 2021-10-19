// libraries
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

// js
import colors from '../../utils/colors';
import styles from './styles';
import backgroundColors from '../../utils/backgroundColors';

// components
import Chip from '../Chip/Chip';

// interfaces
import { PokemonItemProps } from '../../utils/interfaces';

const PokemonCard: React.FC<PokemonItemProps> = ({ pokemon, navigation }) => {
	const { id, name, spriteUrl, types } = pokemon;

	const typeName = types[0].type.name;
	const backgroundColor = backgroundColors[typeName] || colors.black;

	function handleNavigateToPokemonDetail() {
		navigation.navigate('PokemonDetails', { pokemon });
	}

	return (
		<TouchableOpacity
			style={styles.container(backgroundColor)}
			onPress={handleNavigateToPokemonDetail}>
			<View style={styles.containerRow}>
				<View style={styles.imageContainer}>
					<Image
						source={{ uri: spriteUrl }}
						style={styles.image}
						resizeMode="contain"
					/>
				</View>
				<View style={styles.infoContainer}>
					<View>
						<Text style={styles.name}>{name.toUpperCase()}</Text>

						<View style={styles.typesContainerRow}>
							{types.map((pokemonType: any) => {
								return (
									<React.Fragment key={pokemonType.type.name}>
										<Chip name={pokemonType.type.name} />
									</React.Fragment>
								);
							})}
						</View>
					</View>
				</View>

				<View style={styles.idContainer}>
					<Text style={styles.idText}>{`#${id}`}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default PokemonCard;
