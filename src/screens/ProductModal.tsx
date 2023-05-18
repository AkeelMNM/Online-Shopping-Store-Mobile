import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useAppSelector } from '../redux/hook';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Product } from '../types';
import { CustomCarousel, NumberPicker, Text } from '../components';
import _ from 'lodash';
import { RootStackParamList } from '../navigation/RootStackParamType';

type ProductModalProps = NativeStackScreenProps<
	RootStackParamList,
	'ProductModal'
>;

const ProductModal = ({ navigation, route }: ProductModalProps) => {
	const [selectedColor, setSelectedColor] = useState('');
	const [selectedSize, setSelectedSize] = useState('');
	const [selectedCount, setSelectedCount] = useState(1);

	const product: Product = useAppSelector(state => {
		return state.product.products.find((item: Product) => {
			return item.id === route.params.productId;
		});
	});

	const productColors = _.uniqBy(product && product.variants, 'color');
	const productSizes = _.uniqBy(product && product.variants, 'size');
	const productImages = _.uniq(_.map(product && product.variants, 'image'));

	useEffect(() => {
		setSelectedColor(_.get(product, 'variants[0].color', ''));
		setSelectedSize(_.get(product, 'variants[0].size', ''));
	}, [product]);

	const goBackNavigation = (): void => {
		navigation.goBack();
	};

	const setOptionSelectionStyle = (value: string, selectedValue: string) => {
		if (value === selectedValue) {
			return { backgroundColor: '#ec7431', borderColor: '#ec7431' };
		} else {
			return { backgroundColor: 'white', borderColor: 'grey' };
		}
	};

	const onPressCount = (value: number): void => {
		setSelectedCount(value);
	};

	return (
		<View style={styles.mainContainer}>
			<TouchableOpacity
				activeOpacity={1}
				style={styles.navigationContainer}
				onPressIn={goBackNavigation}>
				<View style={styles.closeLine} />
			</TouchableOpacity>
			<View style={styles.imageContainer}>
				<CustomCarousel data={productImages || []} />
			</View>
			<View style={styles.detailsContainer}>
				<Text style={styles.nameText}>{product.title}</Text>
				<Text style={styles.categoryText}>
					{product.category.join(', ')}
				</Text>
				<Text style={styles.priceText}>
					{product.variants[0].price}
				</Text>
			</View>
			<View style={styles.optionContainer}>
				<View style={styles.sizeContainer}>
					<Text style={styles.labelText}>Size</Text>
					<View style={styles.categoryContainer}>
						{productSizes.map((item, index) => {
							return (
								<TouchableOpacity
									key={index}
									onPress={() => setSelectedSize(item.size)}
									style={[
										styles.productSize,
										setOptionSelectionStyle(
											item.size,
											selectedSize,
										),
									]}>
									<Text
										color={
											item.size === selectedSize
												? 'white'
												: 'black'
										}>
										{item.size}
									</Text>
								</TouchableOpacity>
							);
						})}
					</View>
				</View>
				<View style={styles.sizeContainer}>
					<Text style={styles.labelText}>Color</Text>
					<View style={styles.categoryContainer}>
						{productColors.map((item, index) => {
							return (
								<TouchableOpacity
									key={index}
									onPress={() => setSelectedColor(item.color)}
									style={[
										styles.productColor,
										setOptionSelectionStyle(
											item.color,
											selectedColor,
										),
									]}>
									<Text
										color={
											item.color === selectedColor
												? 'white'
												: 'black'
										}
										style={styles.selectionText}>
										{item.color}
									</Text>
								</TouchableOpacity>
							);
						})}
					</View>
				</View>
				<View style={styles.sizeContainer}>
					<Text style={styles.labelText}>Qty</Text>
					<View style={styles.categoryContainer}>
						<NumberPicker onPress={onPressCount} />
					</View>
				</View>
			</View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity activeOpacity={0.7} style={styles.button}>
					<Text color="white" style={styles.buttonText}>
						Add To Cart
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageContainer: {
		flex: 1,
		width: '100%',
		height: '50%',
		paddingLeft: 10,
		paddingRight: 10,
	},
	detailsContainer: {
		width: '80%',
		height: '20%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	optionContainer: {
		width: '100%',
		height: '20%',
		justifyContent: 'space-between',
	},
	buttonContainer: {
		width: '100%',
		height: '10%',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 5,
	},
	navigationContainer: {
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	arrowImage: {
		width: 60,
		height: 40,
	},
	closeLine: {
		width: 100,
		padding: 2,
		backgroundColor: 'grey',
		borderRadius: 10,
	},
	sizeContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	productSize: {
		width: 50,
		padding: 5,
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
	},
	productColor: {
		width: 100,
		padding: 5,
		borderColor: 'black',
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
	},
	nameText: {
		fontSize: 22,
		fontWeight: '700',
		textAlign: 'center',
	},
	priceText: {
		fontSize: 18,
		fontWeight: '700',
	},
	categoryText: {
		fontSize: 18,
		color: 'gray',
	},
	button: {
		width: '90%',
		padding: 10,
		backgroundColor: '#816dff',
		alignItems: 'center',
		borderRadius: 10,
	},
	categoryContainer: {
		width: '80%',
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	labelText: {
		paddingRight: 10,
		fontSize: 18,
		fontWeight: '700',
	},
	selectionText: {
		textTransform: 'capitalize',
	},
	buttonText: {
		fontSize: 18,
		fontWeight: '600',
	},
});

export default ProductModal;
