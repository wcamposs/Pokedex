// libraries
import React from 'react';
import { Image, Text, View } from 'react-native';
import { Divider } from 'react-native-elements';

// js
import styles from './styles';

function EvolutionChain(props) {
	const { backgroundColor, evolutionChain = [] } = props;
	const { species, evolves_to = [] } = evolutionChain;

	const { evolves_to: secondEvolutionChain = [] } = evolutionChain || [];
	const { species: secondGenSpecies } = secondEvolutionChain[0] || {};

	const { evolves_to: thirdEvolutionChain = [] } =
		secondEvolutionChain[0] || {};
	const { species: thirdGenSpecies } = thirdEvolutionChain[0] || {};

	const { evolves_to: fourthEvolutionChain = [] } =
		thirdEvolutionChain[0] || {};

	function renderEvolutionContainer(name: string, imageUrl: string) {
		return (
			<View style={styles.evolutionImageContainer}>
				<Text style={styles.evolutionPokemonTitle}>{name}</Text>
				<View style={styles.imageContainer}>
					<Image
						source={{ uri: imageUrl }}
						style={styles.evolutionImage}
						resizeMode="contain"
					/>
				</View>
			</View>
		);
	}

	function renderSeparatorContainer(
		hasMinLevel: boolean,
		pokemonLevel: number,
	) {
		return (
			<View style={styles.separatorContainer}>
				{!hasMinLevel ? (
					<View style={styles.emptyContainer} />
				) : (
					<Text style={styles.evolutionLevelText}>
						{`LVL: ${pokemonLevel}`}
					</Text>
				)}
				<Divider style={styles.divider} />
			</View>
		);
	}

	return (
		<View style={styles.evolutionInnerContainer(backgroundColor)}>
			{/* first evolution to second */}
			{!evolves_to.length ? (
				<>{renderEvolutionContainer(species.name, species.spriteUrl)}</>
			) : (
				<>
					{secondEvolutionChain.map((evolution: any) => {
						const {
							species: secondGenSpecies = {},
							evolution_details: secondGenEvolutionDetails = [],
						} = evolution || {};

						const hasMinLvl =
							secondGenEvolutionDetails[0]?.min_level;

						return (
							<View style={styles.evolutionRow}>
								{renderEvolutionContainer(
									species.name,
									species.spriteUrl,
								)}

								{renderSeparatorContainer(
									hasMinLvl,
									secondGenEvolutionDetails[0].min_level,
								)}

								{renderEvolutionContainer(
									secondGenSpecies.name,
									secondGenSpecies.spriteUrl,
								)}
							</View>
						);
					})}
				</>
			)}
			{/* second evolution to third */}
			{!thirdEvolutionChain.length ? null : (
				<>
					{thirdEvolutionChain.map((evolution: any) => {
						const {
							species: thirdGenSpecies = {},
							evolution_details: thirdGenEvolutionDetails = [],
						} = evolution || {};

						const hasSecondEvoMinLvl =
							thirdGenEvolutionDetails[0]?.min_level;

						return (
							<View style={styles.evolutionRow}>
								{renderEvolutionContainer(
									secondGenSpecies.name,
									secondGenSpecies.spriteUrl,
								)}

								{renderSeparatorContainer(
									hasSecondEvoMinLvl,
									thirdGenEvolutionDetails[0].min_level,
								)}

								{renderEvolutionContainer(
									thirdGenSpecies.name,
									thirdGenSpecies.spriteUrl,
								)}
							</View>
						);
					})}
				</>
			)}
			{/* third evolution to fourth */}
			{!fourthEvolutionChain.length ? null : (
				<>
					{fourthEvolutionChain.map((evolution: any) => {
						const {
							species: fourthGenSpecies = {},
							evolution_details: fourthGenEvolutionDetails = [],
						} = evolution || {};

						const hasThirdEvoMinLvl =
							fourthGenEvolutionDetails[0]?.min_level;

						return (
							<View style={styles.evolutionRow}>
								{renderEvolutionContainer(
									thirdGenSpecies.name,
									thirdGenSpecies.spriteUrl,
								)}

								{renderSeparatorContainer(
									hasThirdEvoMinLvl,
									fourthGenEvolutionDetails[0].min_level,
								)}

								{renderEvolutionContainer(
									fourthGenSpecies.name,
									fourthGenSpecies.spriteUrl,
								)}
							</View>
						);
					})}
				</>
			)}
		</View>
	);
}

export default EvolutionChain;
