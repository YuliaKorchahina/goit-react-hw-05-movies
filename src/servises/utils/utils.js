const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
const DEFAULT_IMG = 'http://surl.li/fquko';
const imgUrl = poster_path => { 
  return poster_path ? BASE_IMG_URL + poster_path : DEFAULT_IMG;
};

export default imgUrl;
