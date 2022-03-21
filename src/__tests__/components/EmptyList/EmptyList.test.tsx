import React from 'react';
import renderer from 'react-test-renderer';

import EmptyList from '../../../components/EmptyList/EmptyList';

jest.useFakeTimers();

describe('<EmptyList />', () => {
	it('renders empty list component correctly', () => {
		const tree = renderer.create(<EmptyList />).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
