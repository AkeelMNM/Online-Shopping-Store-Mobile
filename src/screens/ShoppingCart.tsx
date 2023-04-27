import React from 'react';
import { View } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStackParamType';

type ShoppingCartProps = {
	navigation: NativeStackNavigationProp<RootStackParamList, 'ShoppingCart'>;
};

const ShoppingCart = ({}: ShoppingCartProps): JSX.Element => {
	return <View />;
};

export default ShoppingCart;
