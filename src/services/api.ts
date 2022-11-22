import axios from 'axios'

export const tmdbApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers:{
        Accept:'application/json'
    },
    params: {
        api_key: '387d1928e4dc591cdfacdc56a1a56d93'
    }
});

export function getPopularMovies() {
    // tmdbApi.get("movie/popular").then((res) => {
    //   console.log(res.data.results)
    // }).catch((err) => {
    //   console.log(err)
    // })
    return tmdbApi.get("movie/popular");
  }
