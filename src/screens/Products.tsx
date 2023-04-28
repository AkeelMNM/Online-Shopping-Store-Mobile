import React from 'react';
import { StyleSheet, View } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStackParamType';
import { Text } from '../components';

type ProductsProps = {
	navigation: NativeStackNavigationProp<RootStackParamList, 'Products'>;
};

const Products = ({}: ProductsProps): JSX.Element => {
	return (
		<View style={styles.mainContainer}>
			<Text>Products</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
	},
});

export default Products;
