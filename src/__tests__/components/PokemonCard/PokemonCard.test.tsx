import React from 'react';
import renderer from 'react-test-renderer';

import PokemonMock from '../../../mocks/PokemonMock';

import PokemonCard from '../../../components/PokemonCard/PokemonCard';

jest.useFakeTimers();

describe('<PokemonCard />', () => {
	it('renders correctly with an pokemon', () => {
		const navigation = jest.fn();

		const tree = renderer
			.create(
				<PokemonCard
					key={PokemonMock.name}
					pokemon={PokemonMock}
					navigation={navigation}
				/>,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
