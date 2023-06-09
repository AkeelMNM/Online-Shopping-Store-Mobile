import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '.';
import FastImage from 'react-native-fast-image';

type ProductsProps = {
	image: string;
	name: string;
	price: string;
	onPress: () => void;
	maxCardWidth?: string;
};

const Products = ({
	image,
	name,
	price,
	onPress,
	maxCardWidth,
}: ProductsProps): JSX.Element => {
	return (
		<View style={[styles.mainContainer, { maxWidth: maxCardWidth }]}>
			<View style={styles.imageContainer}>
				<FastImage
					source={{ uri: image }}
					style={styles.image}
					resizeMode={'contain'}
				/>
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.nameText}>{name}</Text>
				<View style={styles.textView}>
					<Text style={styles.priceText}>{price}</Text>
					<TouchableOpacity
						style={styles.button}
						activeOpacity={0.7}
						onPress={onPress}>
						<Text color={'white'}>Buy</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flexGrow: 1,
		height: 330,
		width: '48%',
		backgroundColor: '#FFFFFF',
		borderRadius: 15,
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 1,
		shadowRadius: 8,
		elevation: 8,
		justifyContent: 'space-between',
		margin: 5,
	},
	imageContainer: {
		height: 200,
		borderTopEndRadius: 15,
		borderTopStartRadius: 15,
		backgroundColor: '#eceff1',
	},
	textContainer: {
		height: 130,
		padding: 10,
		marginBottom: 10,
		justifyContent: 'space-between',
	},
	image: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	nameText: {
		fontSize: 18,
		fontWeight: '500',
	},
	priceText: {
		fontSize: 16,
		paddingTop: 10,
	},
	button: {
		backgroundColor: '#000000',
		width: 90,
		height: 40,
		padding: 10,
		borderRadius: 25,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignContent: 'center',
	},
});

export { Products };
