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
	onPress: (number: number) => void;
};

const NumberPicker = ({ onPress }: NumberPickerProps) => {
	const [number, setNumber] = useState(1);

	const onChangeNumber = (type: string): void => {
		if (type === 'add') {
			setNumber(number + 1);
		} else if (type === 'remove') {
			setNumber(number - 1);
		}

		onPress(number);
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
		marginLeft: 10,
		marginRight: 10,
	},
	imageContainer: {
		backgroundColor: '#eceff1',
	},
});

export { NumberPicker };
