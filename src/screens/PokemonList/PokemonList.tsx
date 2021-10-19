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
import api from '../../services/api';
import colors from '../../utils/colors';
import styles from './styles';

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
		loadPokemons();
	}, []);

	useEffect(() => {
		if (typingTimeout.current) {
			clearTimeout(typingTimeout.current);
		}

		typingTimeout.current = window.setTimeout(() => {
			if (searchParams.length) {
				loadSearchedPokemons(searchParams);
			} else {
				loadPokemons();
			}
		}, 250);
	}, [searchParams]);

	// methods
	async function loadPokemons() {
		try {
			if (!loading) {
				setLoading(true);

				// getting 10 pokemons per requisition
				const response = await api.get(
					`/pokemon/?limit=10&offset=${pokemonList.length}`,
				);

				const result = response.data.results;

				if (!result) {
					setShouldRenderEmpty(true);
				} else {
					setShouldRenderEmpty(false);
				}

				for (let index = 0; index < result.length; index++) {
					const url = result[index].url.slice(0, -1);
					const id = url.split('/').pop();
					result[index].id = id;
					result[
						index
					].spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${result[index].id}.png`;
					const detailResponse = await api.get(
						`/pokemon/${result[index].id}`,
					);
					const detail = detailResponse.data;
					result[index].types = detail.types;
					result[index].abilities = detail.abilities;
					result[index].height = detail.height;
					result[index].weight = detail.weight;
					result[index].stats = detail.stats;
				}

				const concatedResult = pokemonList.concat(result);

				setPokemonList(concatedResult);
			}
		} catch (error) {
			setPokemonList([]);
			setShouldRenderEmpty(true);
		}
		setLoading(false);
	}

	async function loadSearchedPokemons(param: string) {
		const lowerCaseParam = param.toLowerCase();

		try {
			if (!loading) {
				setLoading(true);
				const response = await api.get(`/pokemon/${lowerCaseParam}`);
				const result = response.data;

				if (!result) {
					setShouldRenderEmpty(true);
				} else {
					setShouldRenderEmpty(false);
				}

				const id = result.id;
				const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

				const newPokemonResult: any = {
					id,
					spriteUrl,
					name: result.name,
					types: result.types,
					height: result.height,
					weight: result.weight,
					stats: result.stats,
				};
				setPokemonList([]);
				setPokemonList([].concat(newPokemonResult));
			}
		} catch (error) {
			setPokemonList([]);
			setShouldRenderEmpty(true);
		}
		setLoading(false);
	}

	function loadMorePokemons() {
		if (!searchParams.length) {
			loadPokemons();
		}
	}

	function renderPokemonCard({ item }: any) {
		return (
			<PokemonCard
				key={item.name}
				pokemon={item}
				navigation={navigation}
			/>
		);
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

	function renderFooterComponent() {
		if (shouldRenderEmpty) {
			return <EmptyList />;
		}

		return (
			<>
				{!loading ? null : (
					<View style={styles.loadingContainer}>
						<ActivityIndicator
							style={styles.loadingContainer}
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
