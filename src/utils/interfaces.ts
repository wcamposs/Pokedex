import { ReactNode } from 'react';

// chip component
export interface ChipProps {
	name: string;
	isMythical?: boolean;
	isLegendary?: boolean;
}

// header component
export interface HeaderProps {
	title: string;
	showBackButton?: boolean;
	headerRight?: ReactNode;
	textColor?: string;
}

// pokemon from pokemon card component
export interface Pokemon {
	id?: string;
	name: string;
	url: string;
	spriteUrl: string;
	height: number;
	weight: number;
	stats: any[];
	types: any[];
	abilities: any[];
}

// pokemon card component
export interface PokemonItemProps {
	pokemon: Pokemon;
	navigation: any;
}

// pokemon details screen
export interface PokemonAbilityItem {
	ability: Ability;
}

// ability from pokemon ability item
export interface Ability {
	name: string;
	url: string;
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