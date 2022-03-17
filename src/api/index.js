import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function createInstance() {
	const instance = axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});
	return setInterceptors(instance);
}
const API = createInstance();

function registerUser(userData) {
	return API.post('/signup', userData);
}

function loginUser(userData) {
	return API.post('/login', userData);
}

function fetchPosts() {
	return API.get('/posts');
}

export { registerUser, loginUser, fetchPosts };
