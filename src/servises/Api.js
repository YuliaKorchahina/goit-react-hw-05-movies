import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'af7806c242ad95763370aa39444155c5',
  },
});

export const getTrendingMovie = async () => {
  try {
    const {data}= await instance.get(`trending/all/day`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchMovie = async search => {
 
};

export const getMovieById = async id => {
  try {
    const {data}= await instance.get(`/movie/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
}
