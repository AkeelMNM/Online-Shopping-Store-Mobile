import { User, Login, PasswordStatus } from '../types';

const API_NAME: string = '';

export const loginUser = async (
	email: string,
	password: string,
): Promise<Login> => {
	try {
		const response = await fetch(`${API_NAME}/user/login`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password }),
		});

		const responseData = await response.json();

		return responseData || {};
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export const passwordValidation = async (
	oldPassword: string,
	newPassword: string,
): Promise<PasswordStatus> => {
	try {
		const response = await fetch(`${API_NAME}/user/validate`, {
			method: 'POST',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ oldPassword, newPassword }),
		});

		const responseData = await response.json();

		return responseData || {};
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export const fetchUser = async (userId: string): Promise<User> => {
	try {
		const response = await fetch(`${API_NAME}/user?id=${userId}`, {
			method: 'GET',
		});

		const responseData = await response.json();
		console.log('user fetched', responseData);

		return responseData || [];
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export const storeUser = async (user: User): Promise<User> => {
	try {
		const response = await fetch(`${API_NAME}/user`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		});

		const responseData = await response.json();

		return responseData || {};
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export const updateUser = async (id: string, user: User): Promise<User> => {
	try {
		const response = await fetch(`${API_NAME}/user?id=${id}`, {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		});

		const responseData = await response.json();

		return responseData || {};
	} catch (error) {
		console.error(error);
		throw error;
	}
};

export const removeUser = async (id: string): Promise<void> => {
	try {
		const response = await fetch(`${API_NAME}/user?id=${id}`, {
			method: 'DELETE',
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

export const logOut = async (): Promise<void> => {
	try {
		const response = await fetch(`${API_NAME}/user/logout`, {
			method: 'GET',
		});

		console.log(response);
	} catch (error) {
		console.error(error);
		throw error;
	}
};
