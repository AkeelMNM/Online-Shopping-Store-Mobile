import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStackParamType';
import { SearchBar, Text } from '../components';
import { FlatList } from 'react-native-gesture-handler';
import Product from '../components/Product';

type HomeProps = {
	navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const Home = ({}: HomeProps): JSX.Element => {
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
		<View style={styles.mainContainer}>
			<View style={styles.appNameContainer}>
				<Text style={styles.appNameText}>Fashion Studio</Text>
			</View>
			<View style={styles.searchContainer}>
				<SearchBar onSearch={searchProducts} />
			</View>
			<View style={styles.categoryContainer}>
				<Text style={styles.titleText} type={'title'}>
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
				<Text style={styles.titleText} type={'title'}>
					Best Seller
				</Text>
				<Product
					image={
						'https://www.kasandbox.org/programming-images/avatars/leaf-blue.png'
					}
					name={'T-Shirt'}
					price={25}
					onPress={() => {}}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
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
	searchContainer: {
		padding: 10,
		alignItems: 'center',
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
		//alignItems: 'center',
	},
});

export default Home;
