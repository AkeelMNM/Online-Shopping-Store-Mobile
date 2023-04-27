import React from 'react';
import { SafeAreaView, useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import NavRouter from './navigation/NavRouter';

const App = (): JSX.Element => {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	return (
		<SafeAreaView style={backgroundStyle}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<NavRouter />
				</PersistGate>
			</Provider>
		</SafeAreaView>
	);
};

export default App;
