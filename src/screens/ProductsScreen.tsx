import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStackParamType';
import { useAppSelector } from '../redux/hook';
import { Text, Products, SearchBar } from '../components';
import { Product } from '../types';

type ProductsScreenProps = {
	navigation: NativeStackNavigationProp<RootStackParamList, 'ProductsScreen'>;
};

const ProductsScreen = ({ navigation }: ProductsScreenProps): JSX.Element => {
	const product: Product[] = useAppSelector(state => {
		return state.product.products;
	});

	const navigateToProductModal = (id: string): void => {
		navigation.navigate('ProductModal', { productId: id });
	};

	const itemSeparator = (): JSX.Element => {
		return <View style={styles.itemSeparator} />;
	};

	const searchProducts = (value: string): void => {
		console.log(value);
	};

	return (
		<View style={styles.mainContainer}>
			<Text style={styles.titleText} type={'body'}>
				Fashion Store Products
			</Text>
			<View style={styles.searchContainer}>
				<SearchBar onSearch={searchProducts} />
			</View>
			<FlatList
				data={product}
				renderItem={({ item, index }) => (
					<Products
						key={index}
						image={item.variants[0].image}
						name={item.title}
						price={item.variants[0].price}
						onPress={() => {
							navigateToProductModal(item.id);
						}}
						maxCardWidth={'50%'}
					/>
				)}
				contentContainerStyle={styles.productSection}
				ItemSeparatorComponent={itemSeparator}
				showsVerticalScrollIndicator={false}
				numColumns={2}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
	},
	searchContainer: {
		padding: 10,
		paddingBottom: 15,
		alignItems: 'center',
	},
	itemSeparator: {
		width: '100%',
		height: 10,
	},
	productSection: {
		flexGrow: 1,
		paddingLeft: 5,
		paddingRight: 5,
	},
	titleText: {
		fontWeight: '700',
		padding: 10,
	},
});

export default ProductsScreen;
