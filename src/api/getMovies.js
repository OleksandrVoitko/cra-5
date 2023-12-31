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

export const getSearchedMovies = async (query) => {
  try {
    const response = await axios.get(
      `search/movie?query=${query}&api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    return Promise.reject(new Error(error.message));
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieCast = async (movieId) => {
  try {
    const responce = await axios.get(
      `/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    return responce.data.cast;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieReviews = async (movieId) => {
  try {
    const response = await axios.get(
      `movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
