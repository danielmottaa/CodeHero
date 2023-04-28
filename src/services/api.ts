
import axios from "axios";

export const API_KEY = 'fd49d93aab08c57ab8cb2f23cdd95def';
export const HASH_KEY = '6066446c6e90a054540043dc3744db9b';

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/'
});

export default api;