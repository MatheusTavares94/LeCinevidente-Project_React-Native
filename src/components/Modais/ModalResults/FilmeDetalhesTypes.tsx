export interface ResponseStreams {
   id: number
   results: StreamPais[]
}
export interface StreamPais {
   link?: string
   flatrate?: StreamMetodoPagamento[]
   rent?: StreamMetodoPagamento[]
   buy?: StreamMetodoPagamento[]
}

export interface StreamMetodoPagamento {
   logo_path: string
   provider_id: number
   provider_name: string
   display_priority: number
}

export interface ResponseFilmeDetalhadado {
    adult: boolean
    backdrop_path: string
    belongs_to_collection: {
       backdrop_path: string
       id: number
       name: string
       poster_path: string
    }
    budget: number
    genres: [{ id: number; name: string }]
    homepage: string
    id: number
    imdb_id: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path:string
    production_companies: [{ id: number; logo_path: null; name: string; origin_country: string }]
    production_countries: [{ iso_3166_1: string; name: string }]
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: [{ english_name: string; iso_639_1: string; name: string }]
    status: string
    tagline: string
    title: string
    video: false
    vote_average: number
    vote_count: number
 };