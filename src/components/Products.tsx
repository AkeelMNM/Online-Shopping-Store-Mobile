import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '.';
import FastImage from 'react-native-fast-image';

type ProductsProps = {
	image: string;
	name: string;
	price: string;
	onPress: () => void;
};

const Products = ({
	image,
	name,
	price,
	onPress,
}: ProductsProps): JSX.Element => {
	return (
		<View style={styles.mainContainer}>
			<View>
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
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flexGrow: 1,
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
		borderRadius: 15,
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 1,
		shadowRadius: 8,
		elevation: 8,
		justifyContent: 'space-between',
	},
	imageContainer: {
		height: 200,
		width: 250,
		borderTopEndRadius: 15,
		borderTopStartRadius: 15,
		backgroundColor: '#eceff1',
	},
	textContainer: {
		width: 250,
		height: 120,
		padding: 5,
		borderBottomEndRadius: 15,
		borderBottomStartRadius: 15,
		justifyContent: 'space-between',
	},
	image: {
		width: 250,
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
		paddingTop: 20,
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
	textView: {
		width: 240,
		height: 50,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignContent: 'center',
	},
});

export { Products };
