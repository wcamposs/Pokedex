import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../../../components/Header/Header';

jest.useFakeTimers();

describe('<Header />', () => {
	it('renders header correctly with title', () => {
		const navigation = jest.fn();

		const tree = renderer
			.create(<Header navigation={navigation} title="Test Title" />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('renders header correctly without title', () => {
		const navigation = jest.fn();

		const tree = renderer
			.create(<Header navigation={navigation} title="" />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
