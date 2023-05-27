import React, { useState } from 'react';
import {
	View,
	StyleSheet,
	Image,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import Add from '../assets/images/Add.png';
import Remove from '../assets/images/Remove.png';

type NumberPickerProps = {
	value?: number;
	onPress: (number: number) => void;
};

const NumberPicker = ({ onPress, value = 1 }: NumberPickerProps) => {
	const [number, setNumber] = useState(value);

	const onChangeNumber = (type: string): void => {
		let changedNumber = number;

		if (type === 'add') {
			changedNumber += 1;
		} else if (type === 'remove') {
			changedNumber -= 1;
		}

		setNumber(changedNumber);
		onPress(changedNumber);
	};

	return (
		<View style={styles.mainContainer}>
			<TouchableOpacity
				onPress={() => onChangeNumber('remove')}
				disabled={number < 2}
				style={styles.imageContainer}>
				<Image source={Remove} style={styles.icon} />
			</TouchableOpacity>
			<TextInput
				value={number.toString()}
				editable={false}
				style={styles.input}
			/>
			<TouchableOpacity
				onPress={() => onChangeNumber('add')}
				style={styles.imageContainer}>
				<Image source={Add} style={styles.icon} />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	icon: {
		width: 30,
		height: 30,
	},
	input: {
		height: 30,
		borderWidth: 0,
		padding: 5,
		color: 'black',
		fontSize: 20,
		fontWeight: '700',
		textAlign: 'center',
		marginLeft: 5,
		marginRight: 5,
	},
	imageContainer: {
		backgroundColor: '#eceff1',
		borderRadius: 50,
	},
});

export { NumberPicker };
