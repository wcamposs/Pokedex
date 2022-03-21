import React from 'react';
import renderer from 'react-test-renderer';

import Chip from '../../../components/Chip/Chip';

jest.useFakeTimers();

describe('<Chip />', () => {
	it('renders correctly as a normal pokemon chip', () => {
		const tree = renderer
			.create(<Chip name="bug" isMythical={false} isLegendary={false} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('renders correctly as a mythical pokemon chip', () => {
		const tree = renderer
			.create(<Chip name="bug" isMythical={true} isLegendary={false} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('renders correctly as a legendary pokemon chip', () => {
		const tree = renderer
			.create(<Chip name="bug" isMythical={false} isLegendary={true} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
