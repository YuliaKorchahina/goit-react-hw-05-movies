const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
const imgUrl = poster_path => {
    return BASE_IMG_URL + poster_path;
  };

  export default imgUrl;