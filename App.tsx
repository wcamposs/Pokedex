// libraries
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

// component
import AppStack from './src/routes/AppStack';
import { Entypo } from '@expo/vector-icons';

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [appReady, setAppReady] = useState(false);

    useEffect(() => {
        async function prepare() {
          try {
            await Font.loadAsync(Entypo.font);
            await new Promise(resolve => setTimeout(resolve, 2000));
          } catch (e) {
            console.warn(e);
          } finally {
            setAppReady(true);
          }
        }
    
        prepare();
      }, []);

      const onLayoutRootView = useCallback(async () => {
        if (appReady) {
          await SplashScreen.hideAsync();
        }
      }, [appReady]);
    
      if (!appReady) {
        return null;
      }

	return (
		<View style={styles.container} onLayout={onLayoutRootView}>
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
