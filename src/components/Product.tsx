import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '.';
import FastImage from 'react-native-fast-image';

type ProductProps = {
	image: string;
	name: string;
	price: number;
	onPress: () => void;
};

const Product = ({ image, name, price, onPress }: ProductProps) => {
	return (
		<View style={styles.mainContainer}>
			<FastImage source={{ uri: image }} style={styles.image} />
			<View style={styles.textContainer}>
				<View>
					<Text style={styles.nameText}>{name}</Text>
					<Text style={styles.priceText}>${price}</Text>
				</View>
				<TouchableOpacity
					style={styles.button}
					activeOpacity={0.7}
					onPress={onPress}>
					<Text color={'white'}>Buy</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		width: '75%',
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
		borderRadius: 15,
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 1,
		shadowRadius: 8,
		elevation: 8,
		justifyContent: 'space-between',
		padding: 20,
	},
	textContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	image: {
		width: '50%',
		height: '50%',
		padding: 10,
		alignItems: 'center',
	},
	nameText: {
		fontSize: 20,
		fontWeight: '500',
	},
	priceText: {
		fontSize: 16,
	},
	button: {
		backgroundColor: '#000000',
		width: 90,
		padding: 10,
		borderRadius: 25,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default Product;
