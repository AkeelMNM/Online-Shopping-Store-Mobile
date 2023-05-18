import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStackParamType';
import { Products, Text } from '../components';
import { FlatList } from 'react-native-gesture-handler';
import { useAppSelector, useAppDispatch } from '../redux/hook';
import { Product } from '../types';
import { fetchBestSellerProducts, fetchProducts } from '../redux/product';

type HomeScreenProps = {
	navigation: NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;
};

const HomeScreen = ({ navigation }: HomeScreenProps): JSX.Element => {
	const dispatch = useAppDispatch();

	const bestSeller: Product[] = useAppSelector(
		state => state.product.bestSeller,
	);

	useEffect(() => {
		//dispatch(fetchContents());
		dispatch(fetchBestSellerProducts());
		dispatch(fetchProducts());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const navigateToProductModal = (id: string): void => {
		navigation.navigate('ProductModal', { productId: id });
	};

	const searchProducts = (value: string): void => {
		console.log(value);
	};

	const renderItem = ({ item }: { item: string }): JSX.Element => {
		return (
			<TouchableOpacity
				style={styles.categoryItem}
				onPress={() => {
					searchProducts(item);
				}}>
				<Text>{item}</Text>
			</TouchableOpacity>
		);
	};
	const itemSeparator = (): JSX.Element => {
		return <View style={styles.itemSeparator} />;
	};

	return (
		<ScrollView contentContainerStyle={styles.mainContainer}>
			<View style={styles.appNameContainer}>
				<Text style={styles.appNameText}>Fashion Studio</Text>
			</View>
			<View style={styles.categoryContainer}>
				<Text style={styles.titleText} type={'body'}>
					Categories
				</Text>
				<FlatList
					data={['hello', 'hello2']}
					renderItem={renderItem}
					horizontal={true}
					contentContainerStyle={styles.categorySection}
					ItemSeparatorComponent={itemSeparator}
					showsHorizontalScrollIndicator={false}
				/>
			</View>
			<View style={styles.bestSellerContainer}>
				<Text style={styles.titleText} type={'body'}>
					Best Sellers
				</Text>
				<FlatList
					data={bestSeller}
					renderItem={({ item, index }) => (
						<Products
							key={index}
							image={
								'https://www.kasandbox.org/programming-images/avatars/leaf-blue.png'
							}
							name={item.title}
							price={item.variants[0].price}
							onPress={() => {
								navigateToProductModal(item.id);
							}}
						/>
					)}
					horizontal={true}
					contentContainerStyle={styles.categorySection}
					ItemSeparatorComponent={itemSeparator}
					showsHorizontalScrollIndicator={false}
				/>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flexGrow: 1,
		backgroundColor: '#f3f3ff',
	},
	appNameContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
	},
	appNameText: {
		fontSize: 28,
		fontWeight: '800',
	},
	categoryContainer: {
		padding: 10,
	},
	categoryItem: {
		padding: 15,
		backgroundColor: 'grey',
		borderRadius: 5,
	},
	categorySection: {
		flexGrow: 1,
		paddingBottom: 10,
		paddingLeft: 5,
	},
	titleText: {
		fontWeight: '700',
		paddingBottom: 10,
	},
	itemSeparator: {
		width: 10,
	},
	bestSellerContainer: {
		flex: 1,
		padding: 10,
	},
});

export default HomeScreen;
