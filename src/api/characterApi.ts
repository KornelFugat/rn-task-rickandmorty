import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
  timeout: 10000,
});

export const fetchCharacters = async (page: number = 1) => {
  const { data } = await apiClient.get(`/character?page=${page}`);
  return data;
};

export const fetchCharacterDetails = async (id: number) => {
  const { data } = await apiClient.get(`/character/${id}`);
  return data;
};

export default apiClient;