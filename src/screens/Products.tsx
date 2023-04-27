import React from 'react';
import { View } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStackParamType';

type ProductsProps = {
	navigation: NativeStackNavigationProp<RootStackParamList, 'Products'>;
};

const Products = ({}: ProductsProps): JSX.Element => {
	return <View />;
};

export default Products;
