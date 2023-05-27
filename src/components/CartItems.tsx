import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NumberPicker, Text } from '.';
import FastImage from 'react-native-fast-image';

type CartItemsProps = {
	image: string;
	name: string;
	price: number;
	quantity: number;
	onPress: (value: number) => void;
};

const CartItems = ({
	image,
	name,
	price,
	onPress,
	quantity,
}: CartItemsProps): JSX.Element => {
	return (
		<View style={styles.mainContainer}>
			<View style={styles.imageContainer}>
				<FastImage
					source={{ uri: image }}
					style={styles.image}
					resizeMode={'contain'}
				/>
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.nameText}>{name}</Text>
				<Text style={styles.priceText}>${price}</Text>
				<View style={styles.numberContainer}>
					<NumberPicker onPress={onPress} value={quantity} />
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flexGrow: 1,
		width: '100%',
		backgroundColor: '#FFFFFF',
		borderRadius: 15,
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 1,
		shadowRadius: 8,
		elevation: 8,
		justifyContent: 'space-between',
		margin: 5,
		flexDirection: 'row',
	},
	imageContainer: {
		width: '30%',
		borderTopStartRadius: 15,
		borderBottomStartRadius: 15,
		backgroundColor: '#eceff1',
	},
	textContainer: {
		width: '70%',
		padding: 10,
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
		paddingTop: 5,
		paddingBottom: 10,
		fontWeight: '700',
	},
	button: {
		backgroundColor: '#000000',
		width: 90,
		height: 40,
		padding: 10,
		borderRadius: 25,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10,
	},
	numberContainer: {
		width: 100,
	},
});

export { CartItems };
