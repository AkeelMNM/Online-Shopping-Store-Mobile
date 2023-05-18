import React from 'react';
import { StyleSheet, View } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStackParamType';
import { Text } from '../components';

type ShoppingCartScreenProps = {
	navigation: NativeStackNavigationProp<
		RootStackParamList,
		'ShoppingCartScreen'
	>;
};

const ShoppingCartScreen = ({}: ShoppingCartScreenProps): JSX.Element => {
	return (
		<View style={styles.mainContainer}>
			<Text>Shopping Cart</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
	},
});

export default ShoppingCartScreen;
