import axios from 'axios';

const API = axios.create({
	baseURL: 'http://localhost:3000',
});

function registerUser() {
	return API.post();
}

export { registerUser };
