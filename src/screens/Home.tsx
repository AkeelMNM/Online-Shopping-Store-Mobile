import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStackParamType';
import { Text } from '../components';

type HomeProps = {
	navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const Home = ({}: HomeProps): JSX.Element => {
	return (
		<View style={styles.mainContainer}>
			<Text>Hello</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: 'green',
	},
});

export default Home;
