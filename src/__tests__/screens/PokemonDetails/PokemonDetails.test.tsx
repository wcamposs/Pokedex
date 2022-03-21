import React from 'react';
import renderer from 'react-test-renderer';

import PokemonMock from '../../../mocks/PokemonMock';

import PokemonDetails from '../../../screens/PokemonDetails/PokemonDetails';

jest.useFakeTimers();

describe('<Pokemon List />', () => {
	it('renders correctly', () => {
		const navigation = jest.fn();

		const route = {
			params: {
				pokemon: PokemonMock,
			},
		};

		const tree = renderer
			.create(<PokemonDetails route={route} navigation={navigation} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
