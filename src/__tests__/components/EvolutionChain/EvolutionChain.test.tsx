import React from 'react';
import renderer from 'react-test-renderer';

import PokemonMock from '../../../mocks/PokemonMock';

import EvolutionChain from '../../../components/EvolutionChain/EvolutionChain';

jest.useFakeTimers();

describe('<EvolutionChain />', () => {
	it('renders correctly with an evolution chain', () => {
		const mockedEvolutionChain = PokemonMock.evolutionChain;

		const tree = renderer
			.create(
				<EvolutionChain
					backgroundColor="#00bf30"
					evolutionChain={mockedEvolutionChain}
				/>,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('renders correctly with an empty evolution chain', () => {
		const tree = renderer
			.create(
				<EvolutionChain
					backgroundColor="#00bf30"
					evolutionChain={[]}
				/>,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
