import { ApiResponse, CartItem } from '../types';
import Config from 'react-native-config';
import { cartItems } from '../utils/DummyData';

const API_NAME: string = Config.FASHION_STORE_API_ADDRESS || '';

export const fetchUsersCartItems = async (
	userId: string,
): Promise<Array<CartItem>> => {
	try {
		// const response = await fetch(`${API_NAME}/cart/${userId}`, {
		// 	method: 'GET',
		// 	credentials: 'include',
		// });

		// if (response.status === 200) {
		// 	const responseData = await response.json();
		// 	return responseData;
		// } else {
		// 	return [];
		// }
		console.log(userId);
		return cartItems;
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export const storeCartItems = async (item: CartItem): Promise<CartItem> => {
	try {
		const response = await fetch(`${API_NAME}/cart`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(item),
		});

		const responseData = await response.json();

		return responseData || {};
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export const updateCartItem = async (
	id: string,
	item: CartItem,
): Promise<CartItem> => {
	try {
		const response = await fetch(`${API_NAME}/cart/${id}`, {
			method: 'PUT',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(item),
		});

		const responseData = await response.json();

		return responseData || {};
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export const removeCartItem = async (id: string): Promise<void> => {
	try {
		const response = await fetch(`${API_NAME}/cart/${id}`, {
			method: 'DELETE',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		});

		const responseData = await response.json();

		return responseData || {};
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export const updateCartPaymentStatus = async (
	itemIds: (string | undefined)[],
): Promise<ApiResponse> => {
	try {
		const response = await fetch(`${API_NAME}/cart/payment/status`, {
			method: 'PUT',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ itemIds }),
		});

		const responseData = await response.json();

		return responseData || {};
	} catch (error) {
		console.error(error);
		throw error;
	}
};
