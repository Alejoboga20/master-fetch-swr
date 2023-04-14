import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://pokeapi.co/api/v2/',
});

export const fetcher = (url: string) => api.get(url).then((res) => res.data);
