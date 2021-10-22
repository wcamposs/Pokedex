// libraries
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';

// component
import AppStack from './src/routes/AppStack';

export default function App() {
	const readyTimeout = useRef(0);
	const [appReady, setAppReady] = useState(false);

	// UNCOMMENT TO DISABLE WARNINGS
	// console.disableYellowBox = true;

	useEffect(() => {
		if (readyTimeout.current) {
			clearTimeout(readyTimeout.current);
		}

		if (!appReady) {
			readyTimeout.current = window.setTimeout(() => {
				setAppReady(true);
			}, 1000);
		}
	}, [appReady]);

	if (!appReady) {
		return <AppLoading />;
	}

	return (
		<View style={styles.container}>
			<StatusBar translucent backgroundColor="transparent" />
			<AppStack />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
