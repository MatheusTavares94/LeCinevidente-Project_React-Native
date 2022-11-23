import axios from "axios"

export const tmdbApi = axios.create({
   baseURL: "https://api.themoviedb.org/3/",
   headers: {
      Accept: "application/json",
   },
   params: {
      api_key: "387d1928e4dc591cdfacdc56a1a56d93",
      language: "pt-BR",
      watch_region: "BR",
   },
})

//GUEST SESSION_GET ------------------------------------------------------

export function criaGuestSession() {
   return tmdbApi.get("/authentication/guest_session/new")
}

//GUEST SESSION_POST ------------------------------------------------------

export function postsClassificacao(movie_id: number) {
   return tmdbApi.post(`/movie/${movie_id}/rating`)
}

//GUEST SESSION_DELETE ------------------------------------------------------

export function deleteClassificacao(movie_id: number) {
   return tmdbApi.delete(`/movie/${movie_id}/rating`)
}


//GET ------------------------------------------------------
export function getPopularMovies() {
   return tmdbApi.get("movie/popular")
}

export function discoverMovies() {
   return tmdbApi.get("/discover/movie")
}

export function getStreams() {
   return tmdbApi.get("/watch/providers/movie")
}

export function getMovieById(movie_id: number) {
   return tmdbApi.get(`/movie/${movie_id}`)
}

export function getTranslations(movie_id: number) {
   return tmdbApi.get(`/movie/${movie_id}/translations`)
}

export function getFilmesReconmendados(movie_id: number) {
   return tmdbApi.get(`/movie/${movie_id}/similar`)
}
