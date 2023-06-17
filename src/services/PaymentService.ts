import { ApiResponse, Invoice } from '../types';
import Config from 'react-native-config';

const API_NAME: string = Config.FASHION_STORE_API_ADDRESS || '';

export const makePayment = async (invoice: Invoice): Promise<ApiResponse> => {
	try {
		const response = await fetch(`${API_NAME}/payment`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(invoice),
		});

		const responseData = await response.json();

		return responseData || {};
	} catch (error) {
		console.error(error);
		throw error;
	}
};
