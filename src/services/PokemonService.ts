// services
import api from './api';
import StringService from '../services/StringService';

const PokemonService = {
    async loadPokemons(loading: boolean, setLoading: any, pokemonList: any, setShouldRenderEmpty: any, setPokemonList: any) {
		if (!loading) {
			setLoading(true);
			try {			
				// getting 10 pokemons per requisition
				const response = await api.get(
					`/pokemon/?limit=30&offset=${pokemonList.length}`,
				);

				const result = response.data.results;

				if (!result) {
					setShouldRenderEmpty(true);
				} else {
					setShouldRenderEmpty(false);
				}

				for (let index = 0; index < result.length; index++) {
                    const id = StringService.getIdFromUrl(result[index].url)

					result[index].id = id;
					result[
						index
					].spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${result[index].id}.png`;
					
                    // pokemon detail
                    const detailResponse = await api.get(
						`/pokemon/${result[index].id}`,
					);

                    // pokemon species data
                    const { data: pokemonSpeciesData } = await api.get(
                        `/pokemon-species/${id}/`,
                    );

                    // TODO: Check all species info to use later
                    const {
                        evolution_chain,
                        growth_rate,
                        habitat,
                        is_legendary,
                        is_mythical,
                        // varieties, // MAYBE USE LATER TO SHOW POKEMON VARIETIES
                    } = pokemonSpeciesData;

                    if (evolution_chain) {
                        const evolutionChainId = StringService.getIdFromUrl(
                            evolution_chain.url,
                        );
    
                        const { data: pokemonEvolution } = await api.get(
                            `/evolution-chain/${evolutionChainId}/`,
                        );
    
                        const { chain } = pokemonEvolution;
                        const { evolves_to = [], species } = chain;
    
                        const specieId = StringService.getIdFromUrl(species.url);
                        chain.species.spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${specieId}.png`;
    
                        if (evolves_to.length) {
                            evolves_to.map((pokemonEvolveTo: any) => {
                                const { evolves_to = [], species } =
                                    pokemonEvolveTo;
    
                                const specieId = StringService.getIdFromUrl(
                                    species.url,
                                );
                                species.spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${specieId}.png`;
    
                                if (evolves_to.length) {
                                    evolves_to.map((pokemonEvolveTo: any) => {
                                        const { evolves_to = [], species } =
                                            pokemonEvolveTo;
    
                                        const specieId = StringService.getIdFromUrl(
                                            species.url,
                                        );
                                        species.spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${specieId}.png`;
    
                                        if (evolves_to.length) {
                                            evolves_to.map(
                                                (pokemonEvolveTo: any) => {
                                                    const { species } =
                                                        pokemonEvolveTo;
    
                                                    const specieId =
                                                        StringService.getIdFromUrl(
                                                            species.url,
                                                        );
                                                    species.spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${specieId}.png`;
                                                },
                                            );
                                        }
                                    });
                                }
                            });
                        }
    
                        evolution_chain.chain = chain;
                    }
                    
                    const detail = detailResponse.data;
					result[index].types = detail.types;
					result[index].abilities = detail.abilities;
					result[index].height = detail.height;
					result[index].weight = detail.weight;
					result[index].stats = detail.stats;
                    result[index].evolutionChain = evolution_chain.chain;
					result[index].growthRate = growth_rate;
					result[index].habitat = habitat;
					result[index].legendary = is_legendary;
					result[index].mythical = is_mythical;
				}

				const concatedResult = pokemonList.concat(result);

				setPokemonList(concatedResult);
			} catch (error) {
				setPokemonList([]);
				setShouldRenderEmpty(true);
			}
		}
		setLoading(false);
	},

    async loadSearchedPokemons(param: string, loading: boolean, setLoading: any, setShouldRenderEmpty: any, setPokemonList: any) {
		const lowerCaseParam = param.toLowerCase();

		if (!loading) {
			setLoading(true);
			try {
					const response = await api.get(`/pokemon/${lowerCaseParam}`);
					const result = response.data;
	
					if (!result) {
						setShouldRenderEmpty(true);
					} else {
						setShouldRenderEmpty(false);
					}
	
					const id = result.id;
					const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
	
					// Get pokemon species data
					const { data: pokemonSpeciesData } = await api.get(
						`/pokemon-species/${id}/`,
					);
	
					// // TODO: Check all additional info to use later
					const {
						evolution_chain,
						growth_rate,
						habitat,
						is_legendary,
						is_mythical,
						// varieties, // MAYBE USE LATER TO SHOW POKEMON VARIETIES
					} = pokemonSpeciesData;
	
					if (evolution_chain) {
						const evolutionChainId = StringService.getIdFromUrl(
							evolution_chain.url,
						);
	
						const { data: pokemonEvolution } = await api.get(
							`/evolution-chain/${evolutionChainId}/`,
						);
	
						const { chain } = pokemonEvolution;
						const { evolves_to = [], species } = chain;
	
						const specieId = StringService.getIdFromUrl(species.url);
						chain.species.spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${specieId}.png`;
	
						if (evolves_to.length) {
							evolves_to.map((pokemonEvolveTo: any) => {
								const { evolves_to = [], species } =
									pokemonEvolveTo;
	
								const specieId = StringService.getIdFromUrl(
									species.url,
								);
								species.spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${specieId}.png`;
	
								if (evolves_to.length) {
									evolves_to.map((pokemonEvolveTo: any) => {
										const { evolves_to = [], species } =
											pokemonEvolveTo;
	
										const specieId = StringService.getIdFromUrl(
											species.url,
										);
										species.spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${specieId}.png`;
	
										if (evolves_to.length) {
											evolves_to.map(
												(pokemonEvolveTo: any) => {
													const { species } =
														pokemonEvolveTo;
	
													const specieId =
														StringService.getIdFromUrl(
															species.url,
														);
													species.spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${specieId}.png`;
												},
											);
										}
									});
								}
							});
						}
	
						evolution_chain.chain = chain;
					}
	
					const newPokemonResult: any = {
						id,
						spriteUrl,
						name: result.name,
						types: result.types,
						abilities: result.abilities,
						height: result.height,
						weight: result.weight,
						stats: result.stats,
						evolutionChain: evolution_chain.chain,
						growthRate: growth_rate,
						habitat,
						legendary: is_legendary,
						mythical: is_mythical,
					};
					setPokemonList([]);
					setPokemonList([].concat(newPokemonResult));
				} catch (error) {
					setPokemonList([]);
					setShouldRenderEmpty(true);
				}
		}
		
		setLoading(false);
	}
};

export default PokemonService;