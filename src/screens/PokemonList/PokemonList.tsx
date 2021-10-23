// libraries
import React, { useEffect, useRef, useState } from 'react';
import {
	ActivityIndicator,
	FlatList,
	Keyboard,
	SafeAreaView,
	View,
} from 'react-native';

// js
import styles from './styles';

// services
import api from '../../services/api';
import StringService from '../../services/StringService';
import PokemonService from '../../services/PokemonService';

// utils
import colors from '../../utils/colors';

// components
import Header from '../../components/Header/Header';
import EmptyList from '../../components/EmptyList/EmptyList';
import SearchBar from '../../components/SearchBar/SearchBar';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

function PokemonList({ navigation }: any) {
	// states
	const [loading, setLoading] = useState(false);
	const [pokemonList, setPokemonList] = useState([]);
	const [searchParams, setSearchParams] = useState('');
	const [shouldRenderEmpty, setShouldRenderEmpty] = useState(false);

	const typingTimeout = useRef(0);

	useEffect(() => {
		if (typingTimeout.current) {
			clearTimeout(typingTimeout.current);
		}

		typingTimeout.current = window.setTimeout(() => {
			if (searchParams.length) {
				PokemonService.loadSearchedPokemons(
					searchParams,
					loading,
					setLoading,
					setShouldRenderEmpty,
					setPokemonList,
				);
			} else {
				PokemonService.loadPokemons(
					loading,
					setLoading,
					pokemonList,
					setShouldRenderEmpty,
					setPokemonList,
				);
			}
		}, 750);
	}, [searchParams]);

	// methods
	function loadMorePokemons() {
		if (!searchParams.length) {
			PokemonService.loadPokemons(
				loading,
				setLoading,
				pokemonList,
				setShouldRenderEmpty,
				setPokemonList,
			);
		}
	}

	function onBlur() {
		Keyboard.dismiss();
	}

	function onChangeText(text = '') {
		if (!text.length) {
			setPokemonList([]);
		}

		setSearchParams(text);
	}

	// renders
	function renderPokemonCard({ item }: any) {
		return (
			<PokemonCard
				key={item.name}
				pokemon={item}
				navigation={navigation}
			/>
		);
	}

	function renderFooterComponent() {
		if (shouldRenderEmpty) {
			return <EmptyList />;
		}

		return (
			<>
				{!loading ? null : (
					<View style={styles.loadingContainer}>
						<ActivityIndicator
							style={styles.loading}
							size={70}
							color={colors.red}
						/>
					</View>
				)}
			</>
		);
	}

	return (
		<SafeAreaView style={styles.container}>
			<Header title="Pokedex" />
			<View style={styles.searchbarContainer}>
				<SearchBar
					onBlur={onBlur}
					onChangeText={onChangeText}
					value={searchParams}
				/>
			</View>
			<FlatList
				style={styles.listContainer}
				maxToRenderPerBatch={10}
				onEndReached={loadMorePokemons}
				onEndReachedThreshold={0.5}
				data={pokemonList}
				renderItem={renderPokemonCard}
				keyExtractor={(_, index) => 'item_' + index}
				ListFooterComponent={renderFooterComponent}
				showsVerticalScrollIndicator={false}
			/>
		</SafeAreaView>
	);
}

export default PokemonList;
