import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStackParamType';
import LogoWithLoaderScreen from './LogoWithLoaderScreen';

type InitialScreenProps = {
	navigation: NativeStackNavigationProp<RootStackParamList, 'InitialScreen'>;
};

const InitialScreen = ({ navigation }: InitialScreenProps): JSX.Element => {
	const [showLoader, setShowLoader] = useState(true);

	useEffect(() => {
		onBeforeRenderApp();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onBeforeRenderApp = async () => {
		setTimeout(() => {
			setShowLoader(false);
			navigateToHome();
		}, 1500);
	};

	const navigateToHome = () => {
		navigation.reset({
			routes: [{ name: 'BottomNavBar' }],
		});
	};

	if (showLoader) {
		return <LogoWithLoaderScreen />;
	} else {
		return <View style={styles.mainContainer} />;
	}
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: 'white',
	},
});

export default InitialScreen;
