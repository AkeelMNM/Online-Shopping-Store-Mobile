import React, { useEffect } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { RootStackParamList } from '../navigation/RootStackParamType';
import { CartItems, Text } from '../components';
import { CartItem } from '../types';
import { fetchUsersCartItems } from '../redux/cart';
import _ from 'lodash';

type ShoppingCartScreenProps = {
	navigation: NativeStackNavigationProp<
		RootStackParamList,
		'ShoppingCartScreen'
	>;
};

const ShoppingCartScreen = ({}: ShoppingCartScreenProps): JSX.Element => {
	const dispatch = useAppDispatch();

	const cart: CartItem[] = useAppSelector(state => {
		return state.cart.cart.filter((item: CartItem) => {
			return !item.isPaymentComplete;
		});
	});

	useEffect(() => {
		dispatch(fetchUsersCartItems(''));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const itemSeparator = (): JSX.Element => {
		return <View style={styles.itemSeparator} />;
	};

	const updateCartItem = (id: string, value: number): void => {
		console.log(id, value);
		//TO DO: update the shopping cart item quantity
	};

	const calculateTotalCost = (): number => {
		let cost: number = 0;
		cart.map(item => (cost += item.price * item.quantity));
		return cost;
	};

	const onPressCheckOut = (): void => {};

	return (
		<View style={styles.mainContainer}>
			<View style={styles.navigationContainer}>
				<Text type={'body'} style={styles.titleText}>
					Shopping Cart
				</Text>
				<Text type={'label'}>He</Text>
			</View>
			<FlatList
				data={cart}
				renderItem={({ item, index }) => (
					<CartItems
						key={index}
						image={item.image}
						name={item.title}
						onPress={number =>
							updateCartItem(_.get(item, '_id', ''), number)
						}
						price={item.price}
						quantity={item.quantity}
					/>
				)}
				contentContainerStyle={styles.cartSection}
				ItemSeparatorComponent={itemSeparator}
				showsVerticalScrollIndicator={false}
			/>
			<View style={styles.summaryContainer}>
				<Text style={styles.summaryTitleText}>Order Summery</Text>
				<View style={styles.summaryTextContainer}>
					<Text style={styles.summaryText}>Total Items</Text>
					<Text style={styles.summaryValueText}>
						{cart.length} Item
					</Text>
				</View>
				<View style={styles.summaryTextContainer}>
					<Text style={styles.summaryText}>SubTotal</Text>
					<Text style={styles.summaryValueText}>
						${calculateTotalCost()}
					</Text>
				</View>
				<TouchableOpacity
					style={styles.button}
					activeOpacity={0.7}
					onPress={onPressCheckOut}>
					<Text color={'white'}>Buy</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
	},
	navigationContainer: {
		padding: 10,
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	titleText: {
		fontWeight: '700',
		paddingBottom: 10,
	},
	cartSection: {
		paddingLeft: 5,
		paddingRight: 10,
	},
	itemSeparator: {
		width: '100%',
	},
	summaryContainer: {
		padding: 10,
		backgroundColor: 'white',
	},
	summaryTitleText: {
		fontSize: 18,
		fontWeight: '700',
		padding: 10,
	},
	summaryTextContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 15,
	},
	summaryText: {
		fontSize: 16,
	},
	summaryValueText: {
		fontSize: 16,
		fontWeight: '700',
	},
	button: {
		backgroundColor: '#000000',
		height: 50,
		padding: 10,
		borderRadius: 25,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default ShoppingCartScreen;
