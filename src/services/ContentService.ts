import { Content } from '../types';
import Config from 'react-native-config';

const API_NAME: string = Config.FASHION_STORE_API_ADDRESS || '';

export const fetchContent = async (): Promise<Array<Content>> => {
	try {
		const response = await fetch(`${API_NAME}/content`, {
			method: 'GET',
		});

		const responseData = await response.json();
		console.log('content fetched', responseData);

		return responseData || [];
	} catch (error) {
		console.error(error);
		throw error;
	}
};
