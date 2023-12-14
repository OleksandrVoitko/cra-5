import axios from "axios";
import { API_KEY, BASE_URL } from "./apiConst";

axios.defaults.baseURL = BASE_URL;

export const getTrandingMovies = async () => {
  try {
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};
