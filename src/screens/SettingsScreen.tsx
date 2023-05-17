import React from 'react';
import { StyleSheet, View } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStackParamType';
import { Text } from '../components';

type SettingsProps = {
	navigation: NativeStackNavigationProp<RootStackParamList, 'SettingsScreen'>;
};

const Settings = ({}: SettingsProps): JSX.Element => {
	return (
		<View style={styles.mainContainer}>
			<Text>Settings</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
	},
});

export default Settings;
