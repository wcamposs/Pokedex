const PokemonMock = {
	name: 'ivysaur',
	url: 'https://pokeapi.co/api/v2/pokemon/2/',
	id: '2',
	spriteUrl:
		'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
	types: [
		{
			slot: 1,
			type: {
				name: 'grass',
				url: 'https://pokeapi.co/api/v2/type/12/',
			},
		},
		{
			slot: 2,
			type: {
				name: 'poison',
				url: 'https://pokeapi.co/api/v2/type/4/',
			},
		},
	],
	abilities: [
		{
			ability: {
				name: 'overgrow',
				url: 'https://pokeapi.co/api/v2/ability/65/',
			},
			is_hidden: false,
			slot: 1,
		},
		{
			ability: {
				name: 'chlorophyll',
				url: 'https://pokeapi.co/api/v2/ability/34/',
			},
			is_hidden: true,
			slot: 3,
		},
	],
	height: 10,
	weight: 130,
	stats: [
		{
			base_stat: 60,
			effort: 0,
			stat: {
				name: 'hp',
				url: 'https://pokeapi.co/api/v2/stat/1/',
			},
		},
		{
			base_stat: 62,
			effort: 0,
			stat: {
				name: 'attack',
				url: 'https://pokeapi.co/api/v2/stat/2/',
			},
		},
		{
			base_stat: 63,
			effort: 0,
			stat: {
				name: 'defense',
				url: 'https://pokeapi.co/api/v2/stat/3/',
			},
		},
		{
			base_stat: 80,
			effort: 1,
			stat: {
				name: 'special-attack',
				url: 'https://pokeapi.co/api/v2/stat/4/',
			},
		},
		{
			base_stat: 80,
			effort: 1,
			stat: {
				name: 'special-defense',
				url: 'https://pokeapi.co/api/v2/stat/5/',
			},
		},
		{
			base_stat: 60,
			effort: 0,
			stat: {
				name: 'speed',
				url: 'https://pokeapi.co/api/v2/stat/6/',
			},
		},
	],
	evolutionChain: {
		evolution_details: [],
		evolves_to: [
			{
				evolution_details: [
					{
						gender: null,
						held_item: null,
						item: null,
						known_move: null,
						known_move_type: null,
						location: null,
						min_affection: null,
						min_beauty: null,
						min_happiness: null,
						min_level: 16,
						needs_overworld_rain: false,
						party_species: null,
						party_type: null,
						relative_physical_stats: null,
						time_of_day: '',
						trade_species: null,
						trigger: {
							name: 'level-up',
							url: 'https://pokeapi.co/api/v2/evolution-trigger/1/',
						},
						turn_upside_down: false,
					},
				],
				evolves_to: [
					{
						evolution_details: [
							{
								gender: null,
								held_item: null,
								item: null,
								known_move: null,
								known_move_type: null,
								location: null,
								min_affection: null,
								min_beauty: null,
								min_happiness: null,
								min_level: 32,
								needs_overworld_rain: false,
								party_species: null,
								party_type: null,
								relative_physical_stats: null,
								time_of_day: '',
								trade_species: null,
								trigger: {
									name: 'level-up',
									url: 'https://pokeapi.co/api/v2/evolution-trigger/1/',
								},
								turn_upside_down: false,
							},
						],
						evolves_to: [],
						is_baby: false,
						species: {
							name: 'venusaur',
							url: 'https://pokeapi.co/api/v2/pokemon-species/3/',
							spriteUrl:
								'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
						},
					},
				],
				is_baby: false,
				species: {
					name: 'ivysaur',
					url: 'https://pokeapi.co/api/v2/pokemon-species/2/',
					spriteUrl:
						'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
				},
			},
		],
		is_baby: false,
		species: {
			name: 'bulbasaur',
			url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
			spriteUrl:
				'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
		},
	},
	growthRate: {
		name: 'medium-slow',
		url: 'https://pokeapi.co/api/v2/growth-rate/4/',
	},
	habitat: {
		name: 'grassland',
		url: 'https://pokeapi.co/api/v2/pokemon-habitat/3/',
	},
	legendary: false,
	mythical: false,
};

export default PokemonMock;
