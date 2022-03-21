import React from 'react';
import renderer from 'react-test-renderer';

import PokemonList from '../../../screens/PokemonList/PokemonList';

jest.useFakeTimers();

describe('<Pokemon List />', () => {
	it('renders correctly', () => {
		const navigation = jest.fn();

		const tree = renderer
			.create(<PokemonList navigation={navigation} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
