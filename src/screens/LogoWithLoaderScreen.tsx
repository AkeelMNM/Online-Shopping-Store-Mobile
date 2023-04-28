import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
// import FastImage from 'react-native-fast-image';
// import Logo from '../assets/images/Logo.png';

const LogoWithLoaderScreen = (): JSX.Element => {
	return (
		<View style={styles.mainContainer}>
			{/* <FastImage source={Logo} style={styles.logo} resizeMode="contain" /> */}
			<ActivityIndicator size={'large'} color="#344454" />
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		zIndex: 1000,
		width: '100%',
		height: '100%',
		top: 0,
		left: 0,
		backgroundColor: '#95DAC1',
	},
	logo: {
		width: '60%',
		height: '30%',
	},
});

export default LogoWithLoaderScreen;
