// libraries
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// components
import PokemonList from '../screens/PokemonList/PokemonList';
import PokemonDetails from '../screens/PokemonDetails/PokemonDetails';

const { Navigator, Screen } = createNativeStackNavigator();

function AppStack() {
	return (
		<NavigationContainer>
			<Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName="PokemonList">
				<Screen name="PokemonList" component={PokemonList} />
				<Screen name="PokemonDetails" component={PokemonDetails} />
			</Navigator>
		</NavigationContainer>
	);
}

export default AppStack;
