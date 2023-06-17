import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootStackParamType';
import { Text } from '../components';
import FastImage from 'react-native-fast-image';
import Shop from '../assets/images/Shop.png';
import Account from '../assets/images/Account.png';
import Settings from '../assets/images/Settings.png';
import LogOut from '../assets/images/Logout.png';

type SettingsScreenProps = {
	navigation: NativeStackNavigationProp<RootStackParamList, 'SettingsScreen'>;
};

type SettingsOptionProps = {
	type: string;
	description: string;
	image: number;
	onPress: () => void;
};

const SettingsOption = ({
	type,
	description,
	image,
	onPress,
}: SettingsOptionProps) => {
	return (
		<TouchableOpacity
			activeOpacity={0.6}
			style={styles.optionItemContainer}
			onPress={onPress}>
			<FastImage source={image} style={styles.optionImage} />
			<View style={styles.profileTextContainer}>
				<Text style={styles.optionText}>{type}</Text>
				<Text style={styles.descText}>{description}</Text>
			</View>
		</TouchableOpacity>
	);
};

const SettingsScreen = ({}: SettingsScreenProps): JSX.Element => {
	return (
		<View style={styles.mainContainer}>
			<Text style={styles.titleText} type={'body'}>
				Settings
			</Text>
			<View style={styles.contentContainer}>
				<View style={styles.profileContainer}>
					<FastImage
						source={{
							uri: 'https://www.kasandbox.org/programming-images/avatars/leaf-blue.png',
						}}
						style={styles.image}
					/>
					<View style={styles.profileTextContainer}>
						<Text type={'label'} style={styles.nameText}>
							Jhon Snow
						</Text>
						<Text>snow@gmail.com</Text>
					</View>
				</View>
				<View style={styles.optionContainer}>
					<SettingsOption
						type={'Purchase History'}
						description={'2 Items'}
						onPress={() => {}}
						image={Shop}
					/>
					<SettingsOption
						type={'Edit Profile'}
						description={'Update user profile'}
						onPress={() => {}}
						image={Account}
					/>
					<SettingsOption
						type={'Other Settings'}
						description={'Security, notifications and more'}
						onPress={() => {}}
						image={Settings}
					/>
				</View>
				<View style={styles.optionContainer}>
					<SettingsOption
						type={'Log out'}
						description={'Logout from your account'}
						onPress={() => {}}
						image={LogOut}
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
	},
	titleText: {
		fontWeight: '700',
		padding: 10,
	},
	image: {
		borderRadius: 50,
		width: 80,
		height: 80,
		borderWidth: 1,
	},
	contentContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	profileContainer: {
		height: 100,
		flexDirection: 'row',
		backgroundColor: 'white',
		alignItems: 'center',
		padding: 10,
	},
	profileTextContainer: {
		flex: 1,
		justifyContent: 'center',
		padding: 10,
	},
	nameText: {
		fontWeight: '700',
	},
	optionContainer: {
		marginTop: 20,
		borderRadius: 5,
		padding: 2,
		backgroundColor: 'white',
	},
	optionImage: {
		width: 40,
		height: 40,
	},
	optionItemContainer: {
		width: '95%',
		height: 80,
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
	},
	optionText: {
		fontSize: 16,
		fontWeight: '700',
	},
	descText: {
		fontSize: 14,
	},
});

export default SettingsScreen;
