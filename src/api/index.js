import axios from 'axios';

const API = axios.create({
	baseURL: 'http://localhost:3000',
});

function registerUser(userData) {
	return API.post('/signup', userData);
}

export { registerUser };
