import axios from "axios";

export const LoadData = async <T>(endpoint: string): Promise<T> => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const response = await axios.get(`${baseUrl}${endpoint}`);
  const result = response.data.data;
  return result;
};
