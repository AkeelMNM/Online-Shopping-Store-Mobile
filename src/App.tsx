import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import NavRouter from './navigation/NavRouter';

const App = (): JSX.Element => {
	return (
		<SafeAreaProvider>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<NavRouter />
				</PersistGate>
			</Provider>
		</SafeAreaProvider>
	);
};

export default App;
