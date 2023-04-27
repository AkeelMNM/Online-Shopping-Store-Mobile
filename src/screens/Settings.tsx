import React from 'react';
import { View } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStackParamType';

type SettingsProps = {
	navigation: NativeStackNavigationProp<RootStackParamList, 'Settings'>;
};

const Settings = ({}: SettingsProps): JSX.Element => {
	return <View />;
};

export default Settings;
