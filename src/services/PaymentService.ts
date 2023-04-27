import { ApiResponse, Invoice } from '../types';

const API_NAME: string = '';

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
