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
      region: "BR",
   },
})

export interface FilmesDiscover{
   adult: boolean,
   backdrop_path: string
   genre_ids: number[],
   id: number,
   original_language: string,
   original_title: string
   overview: string
   popularity: number
   poster_path: string
   release_date: string
   title: string
   video: boolean,
   vote_average: number
   vote_count: number
 }

export interface filmeSearchParam{
   with_watch_providers?: string //IDs separados por Virgula ou Pipe
   with_genres?: string  //IDs Separados por virgula
   year?: number
   sort_by?: "popularity.asc" | "popularity.desc" | "vote_average.asc" | "vote_average.desc" //string
}

//GUEST SESSION_GET ------------------------------------------------------

export function criaGuestSession() {
   return tmdbApi.get("/authentication/guest_session/new")
}

//GUEST SESSION_POST ------------------------------------------------------

export function postsClassificacao(movie_id: number, rating) {
   return tmdbApi.post(`/movie/${movie_id}/rating`, rating)
}

//GUEST SESSION_DELETE ------------------------------------------------------

export function deleteClassificacao(movie_id: number) {
   return tmdbApi.delete(`/movie/${movie_id}/rating`)
}


//GET ------------------------------------------------------
export function getPopularMovies() {

   return tmdbApi.get("movie/popular")
}

export function discoverMovies(filmeSearchParam: filmeSearchParam) {
   return tmdbApi.get("/discover/movie")
}

export function getStreams() {
   return tmdbApi.get("/watch/providers/movie")
}

export function getMovieById(movie_id: number) {
   return tmdbApi.get(`/movie/${movie_id}`)
}

export function getFilmesReconmendados(movie_id: number) {
   return tmdbApi.get(`/movie/${movie_id}/similar`)
}
export function getGeneros() {
   return tmdbApi.get(`/genre/movie/list`)
}
export function getFilmeStreamsDIsponiveis(movie_id: number){
   return tmdbApi.get(`/movie/${movie_id}/watch/providers`)
}
