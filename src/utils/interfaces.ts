import { ReactNode } from 'react';
import { StackNavigator, NavigationScreenProp } from 'react-navigation';

// POKEMON TYPES

// pokemon from pokemon card component
export interface Pokemon {
	name: string;
	url: string;
	id?: string;
	spriteUrl: string;
	types: PokemonTypes[];
	abilities: PokemonAbilityItem[];
	weight: number;
	height: number;
	stats: PokemonStats[];
	evolutionChain: PokemonEvolutionChain;
	growthRate: PokemonGrowthRate;
	habitat: PokemonHabitat;
	legendary: boolean;
	mythical: boolean;
}

// pokemon types
export interface PokemonTypes {
	slot: string;
	type: PokemonType;
}

// pokemon type from types
export interface PokemonType {
	name: string;
	url: string;
}

// pokemon ability item
export interface PokemonAbilityItem {
	ability: Ability;
}

// ability from pokemon ability item
export interface Ability {
	name: string;
	url: string;
}

// pokemon stats
export interface PokemonStats {
	base_stat: number;
	effort: number;
	stat: PokemonStat;
}

// pokemon stat from stats
export interface PokemonStat {
	name: string;
	url: string;
}

// pokemon evolution chain
export interface PokemonEvolutionChain {
	evolution_details: any[];
	evolves_to: any[];
	is_baby: boolean;
	species: PokemonSpecies;
}

// pokemon species
export interface PokemonSpecies {
	name: string;
	url: string;
	spriteUrl: string;
}

// pokemon growth rate
export interface PokemonGrowthRate {
	name: string;
	url: string;
}

// pokemon habitat
export interface PokemonHabitat {
	name: string;
	url: string;
}

// COMPONENTS

// chip component
export interface ChipProps {
	name: string;
	isMythical?: boolean;
	isLegendary?: boolean;
}

// header component
export interface HeaderProps {
	navigation: NavigationScreenProp;
	title: string;
	showBackButton?: boolean;
	headerRight?: ReactNode;
	textColor?: string;
}

// pokemon card component
export interface PokemonItemProps {
	pokemon: Pokemon;
	navigation: any;
}

// pokemon details screen
export interface PokemonStatItem {
	stat: Stat;
	base_stat: number;
}

// stat from pokemon stat item
export interface Stat {
	name: string;
	url: string;
}
