import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import InitialScreen from '../screens/InitialScreen';
import { RootStackParamList } from './RootStackParamType';
import BottomNavBar from './BottomNavBar';
import LogoWithLoaderScreen from '../screens/LogoWithLoaderScreen';

const Stack = createStackNavigator<RootStackParamList>();

const MyTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: 'transparent',
		card: '#F2F5C8',
	},
};

const NavRouter = () => {
	return (
		<NavigationContainer theme={MyTheme}>
			<Stack.Navigator>
				<Stack.Screen
					name="InitialScreen"
					component={InitialScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="BottomNavBar"
					component={BottomNavBar}
					options={{
						headerShown: false,
						//animation: 'fade_from_bottom',
					}}
				/>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="LogoWithLoaderScreen"
					component={LogoWithLoaderScreen}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default NavRouter;
