import React from 'react';
import renderer from 'react-test-renderer';

import SearchBar from '../../../components/SearchBar/SearchBar';

jest.useFakeTimers();

describe('<SearchBar />', () => {
	it('renders correctly without value', () => {
		const onBlur = jest.fn();
		const onChangeText = jest.fn();

		const tree = renderer
			.create(
				<SearchBar
					onBlur={onBlur}
					onChangeText={onChangeText}
					value=""
				/>,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('renders correctly with an value', () => {
		const onBlur = jest.fn();
		const onChangeText = jest.fn();

		const tree = renderer
			.create(
				<SearchBar
					onBlur={onBlur}
					onChangeText={onChangeText}
					value="Pikachu"
				/>,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
