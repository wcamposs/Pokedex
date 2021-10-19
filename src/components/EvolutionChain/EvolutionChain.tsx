// libraries
import React from 'react';
import { Image, Text, View } from 'react-native';
import { Divider } from 'react-native-elements';

// js
import styles from './styles';

function EvolutionChain(props) {
	const { backgroundColor, evolutionChain } = props;

	// const secondEvolutionChain = evolutionChain.evolves_to;

	function renderPokemonEvolution(evolution) {
		console.log(JSON.stringify(evolution));
		const {
			evolution_details: evolutionDetails,
			evolves_to: evolvesTo,
			species,
		} = evolution;
		const { min_level: minLevel } =
			evolutionDetails[0] || evolvesTo[0].evolution_details[0];
		const { name, spriteUrl } = species;

		const evolutionLevelTitle = `LVL: ${minLevel}`;

		return (
			<View style={styles.container}>
				<View style={styles.row}>
					{/* Actual Evolution */}
					<View style={styles.evolutionImageContainer}>
						<Text style={styles.evolutionPokemonTitle}>{name}</Text>
						<Image
							source={{
								uri: spriteUrl,
							}}
							style={styles.evolutionImage}
						/>
					</View>

					{/* DIVIDER AND LVL HERE */}
					<View style={styles.separatorContainer}>
						<Text style={styles.evolutionLevelText}>
							{evolutionLevelTitle}
						</Text>
						<Divider style={styles.divider} />
					</View>

					{/* Next Evolution */}
					{/* {evolvesTo.map((nextEvolution) => {
						console.log(nextEvolution);
						return (
							<View style={styles.evolutionImageContainer}>
								<Text style={styles.evolutionPokemonTitle}>
									{evolutionChain.species.name}
								</Text>
								<Image
									source={{
										uri: evolutionChain.species.spriteUrl,
									}}
									style={styles.evolutionImage}
								/>
							</View>
						);
					})} */}
				</View>
			</View>
		);
	}

	return (
		<View style={styles.evolutionInnerContainer(backgroundColor)}>
			<View style={styles.evolutionRow}>
				{evolutionChain.evolves_to.map((evolution) => {
					return <>{renderPokemonEvolution(evolutionChain)}</>;
				})}
			</View>
		</View>
	);
}

export default EvolutionChain;
