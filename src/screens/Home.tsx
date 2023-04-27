import React from 'react';
import { View } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStackParamType';
import { Text } from '../components';

type HomeProps = {
	navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const Home = ({}: HomeProps): JSX.Element => {
	return (
		<View>
			<Text>Hello</Text>
		</View>
	);
};

export default Home;
