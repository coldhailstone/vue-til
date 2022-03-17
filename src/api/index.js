import axios from 'axios';

const API = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
	headers: {
		Authorization: 'test1234',
	},
});

function registerUser(userData) {
	return API.post('/signup', userData);
}

function loginUser(userData) {
	return API.post('/login', userData);
}

export { registerUser, loginUser };
