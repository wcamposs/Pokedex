// libraries
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { Divider } from 'react-native-elements';

// js
import styles from './styles';
import colors from '../../utils/colors';
import backgroundColors from '../../utils/backgroundColors';

// interfaces
import { PokemonTypes } from '../../utils/interfaces';

// interfaces
import { PokemonAbilityItem } from '../../utils/interfaces';
import { PokemonStatItem } from '../../utils/interfaces';

// components
import Chip from '../../components/Chip/Chip';
import Header from '../../components/Header/Header';
import EvolutionChain from '../../components/EvolutionChain/EvolutionChain';

function PokemonDetails({ navigation, route }: any) {
	const { pokemon } = route?.params;
	const {
		abilities = [],
		height,
		id,
		name,
		spriteUrl,
		stats = [],
		types = [],
		weight,
		evolutionChain = [],
		growthRate,
		habitat,
		legendary,
		mythical,
	} = pokemon;

	const typeName = types[0].type.name;
	const backgroundColor = backgroundColors[typeName] || colors.black;

	return (
		<View style={styles.container(backgroundColor)}>
			<Header
				navigation={navigation}
				title={name}
				showBackButton
				textColor={colors.white}
			/>

			<ScrollView
				showsVerticalScrollIndicator={false}
				style={styles.pokemonDetails}
				contentContainerStyle={styles.scrollViewContainer}>
				<View style={styles.imageContainer}>
					<View style={styles.infoContainer}>
						<View style={{ flexDirection: 'row' }}>
							<Text style={styles.idText}>{`#${id}`}</Text>
							<Text style={styles.name}>
								{name.toUpperCase()}
							</Text>
						</View>
						<View style={styles.typesListContainer}>
							{types.map((pokemonType: PokemonTypes) => {
								return (
									<React.Fragment key={pokemonType.type.name}>
										<Chip name={pokemonType.type.name} />
									</React.Fragment>
								);
							})}
						</View>
					</View>

					<View>
						<Image
							source={{ uri: spriteUrl }}
							style={styles.image}
						/>
					</View>

					<View style={styles.specialPokemonTagContainer}>
						{!legendary ? null : (
							<Chip name={'legendary'} isLegendary />
						)}
						{!mythical ? null : (
							<Chip name={'mythical'} isMythical />
						)}
					</View>
				</View>

				<View style={styles.pokemonInfoContainer}>
					<View style={[styles.infoContainer, styles.centerRow]}>
						<Text style={[styles.sectionTitle, { fontSize: 16 }]}>
							HEIGHT:
						</Text>
						<Text style={styles.infoName}>
							{(height * 0.1).toFixed(2)} m
						</Text>

						<Text style={[styles.inlineDivider]}>|</Text>

						<Text style={[styles.sectionTitle, { fontSize: 16 }]}>
							WEIGHT:
						</Text>
						<Text style={styles.infoName}>
							{(weight * 0.1).toFixed(2)} kg
						</Text>
					</View>

					<Divider style={styles.divider} />

					<View style={styles.infoContainer}>
						<Text style={styles.sectionTitle}>ABILITIES</Text>

						{!abilities.length ? (
							<View style={styles.emptyContainer} />
						) : null}
						{abilities.map((item: PokemonAbilityItem) => {
							return (
								<React.Fragment key={item.ability.name}>
									<View>
										<Text style={styles.abilityName}>
											{item.ability.name.toUpperCase()}
										</Text>
									</View>
								</React.Fragment>
							);
						})}
					</View>

					<Divider style={styles.divider} />

					<View style={[styles.statsContainer, { marginBottom: 32 }]}>
						<Text style={styles.sectionTitle}>STATS</Text>

						<View style={styles.statListContainer}>
							{stats.map((item: PokemonStatItem) => {
								return (
									<React.Fragment key={item.stat.name}>
										<View style={styles.statContainer}>
											<Text style={styles.statName}>
												{item.stat.name.toUpperCase()}:{' '}
											</Text>
											<Text style={styles.statValue}>
												{item.base_stat}
											</Text>
										</View>
									</React.Fragment>
								);
							})}
						</View>
					</View>

					<Divider style={styles.divider} />

					<Text style={styles.sectionTitle}>EVOLUTIONS</Text>
					<View style={styles.pokemonEvolutionContainer}>
						<EvolutionChain
							backgroundColor={backgroundColor}
							evolutionChain={evolutionChain}
						/>
					</View>
				</View>
			</ScrollView>
		</View>
	);
}

export default PokemonDetails;
