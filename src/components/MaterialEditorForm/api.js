import axios from 'axios';

axios.defaults.baseURL = 'https://6312f704b466aa9b03905d2f.mockapi.io';

export const addMaterial = async values => {
  const response = await axios.post('/materials', values);
  return response.data;
};

export const getMaterials = async () => {
  const response = await axios.get('/materials');
  return response.data;
};
