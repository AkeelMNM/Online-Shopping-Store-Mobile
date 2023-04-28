import React from 'react';
import { StyleSheet, Image, ImageSourcePropType } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import ProductsScreen from '../screens/Products';
import ShoppingCartScreen from '../screens/ShoppingCart';
import Home from '../assets/images/Home.png';
import Search from '../assets/images/Search.png';
import Option from '../assets/images/Option.png';
import ShoppingCart from '../assets/images/ShoppingCart.png';
import SettingsScreen from '../screens/Settings';

const Tab = createBottomTabNavigator();

const tabBarIcon = (
	focused: boolean,
	image: ImageSourcePropType,
): React.ReactNode => {
	return (
		<Image
			source={image}
			style={[styles.iconStyle, setActiveColor(focused)]}
		/>
	);
};

const setActiveColor = (focused: boolean): Object => {
	if (focused) {
		return { tintColor: '#000000' };
	} else {
		return {};
	}
};

const BottomNavBar = (): JSX.Element => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: '#000000',
				tabBarStyle: styles.tabBarStyle,
				tabBarLabelStyle: styles.tabBarLabelStyle,
			}}>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ focused }) => tabBarIcon(focused, Home),
				}}
			/>
			<Tab.Screen
				name="Products"
				component={ProductsScreen}
				options={{
					tabBarIcon: ({ focused }) => tabBarIcon(focused, Search),
				}}
			/>
			<Tab.Screen
				name="Shopping Cart"
				component={ShoppingCartScreen}
				options={{
					tabBarIcon: ({ focused }) =>
						tabBarIcon(focused, ShoppingCart),
				}}
			/>
			<Tab.Screen
				name="Settings"
				component={SettingsScreen}
				options={{
					tabBarIcon: ({ focused }) => tabBarIcon(focused, Option),
				}}
			/>
		</Tab.Navigator>
	);
};

const styles = StyleSheet.create({
	iconStyle: {
		height: 24,
		width: 24,
		marginTop: 9,
		tintColor: 'grey',
	},
	tabBarStyle: {
		height: 60,
		paddingBottom: 0,
		backgroundColor: 'white',
	},
	tabBarLabelStyle: {
		marginBottom: 6,
		marginTop: 6,
		color: 'grey',
	},
});

export default BottomNavBar;
